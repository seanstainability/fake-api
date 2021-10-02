import React, { useEffect, useRef, useState } from "react";
import MsgItem from "./MsgItem";
import MsgInput from "./MsgInput";
import queryClient, { fetcher, QueryKeys } from "../queryClient";
import { useRouter } from "next/router";
import useInfiniteScroll from "../hooks/useInfiniteScroll";
import { useMutation, useQuery, useQueryClient } from "react-query";
import {
  CREATE_MESSAGE,
  DELETE_MESSAGE,
  GET_MESSAGES,
  UPDATE_MESSAGE,
} from "../graphql/message";

const UserIds = ["sean", "moon"];
const getRandomUserId = () => {
  return UserIds[Math.round(Math.random())];
};

// const originalMsgs = Array(50)
//   .fill(0)
//   .map((_, i) => {
//     return {
//       id: i + 1,
//       userId: getRandomUserId(),
//       timestamp: 1234567890123 + i * 1000 * 60, // 밀리세컨드 -> 분 단위로 변경
//       text: `mock-${i + 1}`,
//     };
//   });
// console.log(JSON.stringify(originalMsgs));

// const msgs = [{
//     id: 1,
//     userId: getRandomUserId(),
//     timestamp: 1234567890123, // 13자리 필요
//     text: 'mock-1'
// }]

const MsgList = ({ smsgs, users }) => {
  const client = useQueryClient();
  const {
    query: { userId = "" },
  } = useRouter();
  const [msgs, setMsgs] = useState(smsgs);
  const [editingId, setEditingId] = useState(null);
  const fetchMoreEl = useRef(null);
  const intersecting = useInfiniteScroll(fetchMoreEl);
  const [hasNext, setHasNext] = useState(true);

  const { mutate: onCreate } = useMutation(
    ({ text }) => fetcher(CREATE_MESSAGE, { text, userId }),
    {
      onSuccess: ({ createMessage }) => {
        client.setQueryData(QueryKeys.MESSAGES, (old) => {
          // 클라이언트 캐시에 업데이트
          return {
            messages: [createMessage, ...old.messages],
          };
        });
      },
    }
  );

  // const onCreate = async (text) => {
  //   const newMsg = await queryClient("post", "/messages", { text, userId });
  //   if (!newMsg) throw Error("something wrong!");
  //   // const newMsg = {
  //   //   id: msgs.length + 1,
  //   //   userId: getRandomUserId(),
  //   //   timestamp: Date.now(),
  //   //   text,
  //   // };
  //   setMsgs((msgs) => [newMsg, ...msgs]);
  // };

  const { mutate: onUpdate } = useMutation(
    ({ text, id }) => fetcher(UPDATE_MESSAGE, { text, id, userId }),
    {
      onSuccess: ({ updateMessage }) => {
        client.setQueryData(QueryKeys.MESSAGES, (old) => {
          const targetIdx = old.messages.findIndex(
            (msg) => msg.id === updateMessage.id
          );
          if (targetIdx < 0) return old;
          const newMsgs = [...old.messages];
          newMsgs.splice(targetIdx, 1, updateMessage);
          return {
            messages: newMsgs,
          };
        });
        doneEdit();
      },
    }
  );

  // const onUpdate = async (text, id) => {
  //   const newMsg = await queryClient("put", `/messages/${id}`, {
  //     text,
  //     userId,
  //   });
  //   if (!newMsg) throw Error("something wrong!");
  //   setMsgs((msgs) => {
  //     const targetIdx = msgs.findIndex((msg) => msg.id === id);
  //     if (targetIdx < 0) return msgs;
  //     const newMsgs = [...msgs];
  //     // newMsgs.splice(targetIdx, 1, {
  //     //   ...msgs[targetIdx],
  //     //   text,
  //     // });
  //     newMsgs.splice(targetIdx, 1, newMsg);
  //     return newMsgs;
  //   });
  //   doneEdit();
  // };

  const doneEdit = () => setEditingId(null);

  const { mutate: onDelete } = useMutation(
    (id) => fetcher(DELETE_MESSAGE, { id, userId }),
    {
      onSuccess: ({ deleteMessage: deleteId }) => {
        client.setQueryData(QueryKeys.MESSAGES, (old) => {
          const targetIdx = old.messages.findIndex(
            (msg) => msg.id === deleteId
          );
          if (targetIdx < 0) return old;
          const newMsgs = [...old.messages];
          newMsgs.splice(targetIdx, 1);
          return {
            messages: newMsgs,
          };
        });
      },
    }
  );

  // const onDelete = async (id) => {
  //   const receivedId = await queryClient("delete", `/messages/${id}`, {
  //     params: { userId }, // 서버에서는 query로 받아야 함
  //   });
  //   setMsgs((msgs) => {
  //     const targetIdx = msgs.findIndex((msg) => msg.id === receivedId + "");
  //     if (targetIdx < 0) return msgs;
  //     const newMsgs = [...msgs];
  //     newMsgs.splice(targetIdx, 1);
  //     return newMsgs;
  //   });
  // };

  // const getMsgs = async () => {
  //   const newMsgs = await queryClient("get", "/messages", {
  //     params: { cursor: msgs[msgs.length - 1]?.id || "" },
  //   });
  //   if (newMsgs.length === 0) {
  //     setHasNext(false);
  //     return;
  //   }
  //   setMsgs((msgs) => [...msgs, ...newMsgs]);
  // };
  const { data, error, isError } = useQuery(QueryKeys.MESSAGES, () =>
    fetcher(GET_MESSAGES)
  ); // 즉시 호출을 막기 위해 함수를 한 번 더 감싸준다. 기본적으로 윈도우 포커스 시 리패치한다.
  console.log("render");

  // console.log(data);
  useEffect(() => {
    if (!data?.messages) return;
    console.log("messages changed!");
    setMsgs(data?.messages || []);
  }, [data?.messages]);

  if (isError) {
    console.error(error);
    return null;
  }

  // useEffect(() => {
  //   if (intersecting && hasNext) getMsgs();
  // }, [intersecting]);

  return (
    <>
      <MsgInput mutate={onCreate} />
      <ul className="messages">
        {msgs.map((msg) => {
          return (
            <MsgItem
              key={msg.id}
              {...msg}
              onUpdate={onUpdate}
              isEditing={editingId === msg.id}
              startEdit={() => setEditingId(msg.id)}
              onDelete={() => onDelete(msg.id)}
              me={userId}
              // user={users[msg.userId]}
              user={users.find((user) => user.id === msg.userId)}
            />
          );
        })}
      </ul>
      <div ref={fetchMoreEl} />
    </>
  );
};

export default MsgList;
