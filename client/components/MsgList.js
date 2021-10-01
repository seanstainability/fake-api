import React, { useEffect, useRef, useState } from "react";
import MsgItem from "./MsgItem";
import MsgInput from "./MsgInput";
import fetcher from "../fetcher";
import { useRouter } from "next/router";
import useInfiniteScroll from "../hooks/useInfiniteScroll";

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
  const {
    query: { userId = "" },
  } = useRouter();
  const [msgs, setMsgs] = useState(smsgs);
  const [editingId, setEditingId] = useState(null);
  const fetchMoreEl = useRef(null);
  const intersecting = useInfiniteScroll(fetchMoreEl);
  const [hasNext, setHasNext] = useState(true);

  const onCreate = async (text) => {
    const newMsg = await fetcher("post", "/messages", { text, userId });
    if (!newMsg) throw Error("something wrong!");
    // const newMsg = {
    //   id: msgs.length + 1,
    //   userId: getRandomUserId(),
    //   timestamp: Date.now(),
    //   text,
    // };
    setMsgs((msgs) => [newMsg, ...msgs]);
  };

  const onUpdate = async (text, id) => {
    const newMsg = await fetcher("put", `/messages/${id}`, { text, userId });
    if (!newMsg) throw Error("something wrong!");
    setMsgs((msgs) => {
      const targetIdx = msgs.findIndex((msg) => msg.id === id);
      if (targetIdx < 0) return msgs;
      const newMsgs = [...msgs];
      // newMsgs.splice(targetIdx, 1, {
      //   ...msgs[targetIdx],
      //   text,
      // });
      newMsgs.splice(targetIdx, 1, newMsg);
      return newMsgs;
    });
    doneEdit();
  };

  const doneEdit = () => setEditingId(null);

  const onDelete = async (id) => {
    const receivedId = await fetcher("delete", `/messages/${id}`, {
      params: { userId }, // 서버에서는 query로 받아야 함
    });
    setMsgs((msgs) => {
      const targetIdx = msgs.findIndex((msg) => msg.id === receivedId + "");
      if (targetIdx < 0) return msgs;
      const newMsgs = [...msgs];
      newMsgs.splice(targetIdx, 1);
      return newMsgs;
    });
  };

  const getMsgs = async () => {
    const newMsgs = await fetcher("get", "/messages", {
      params: { cursor: msgs[msgs.length - 1]?.id || "" },
    });
    if (newMsgs.length === 0) {
      setHasNext(false);
      return;
    }
    setMsgs((msgs) => [...msgs, ...newMsgs]);
  };
  console.log("render");

  useEffect(() => {
    if (intersecting && hasNext) getMsgs();
  }, [intersecting]);

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
              user={users[msg.userId]}
            />
          );
        })}
      </ul>
      <div ref={fetchMoreEl} />
    </>
  );
};

export default MsgList;
