import React, { useState } from "react";
import MsgItem from "./MsgItem";
import MsgInput from "./MsgInput";

const UserIds = ["sean", "moon"];
const getRandomUserId = () => {
  return UserIds[Math.round(Math.random())];
};

const originalMsgs = Array(50)
  .fill(0)
  .map((_, i) => {
    return {
      id: i + 1,
      userId: getRandomUserId(),
      timestamp: 1234567890123 + i * 1000 * 60, // 밀리세컨드 -> 분 단위로 변경
      text: `mock-${i + 1}`,
    };
  });

// const msgs = [{
//     id: 1,
//     userId: getRandomUserId(),
//     timestamp: 1234567890123, // 13자리 필요
//     text: 'mock-1'
// }]

const MsgList = () => {
  const [msgs, setMsgs] = useState(originalMsgs);
  const [editingId, setEditingId] = useState(null);

  const onCreate = (text) => {
    const newMsg = {
      id: msgs.length + 1,
      userId: getRandomUserId(),
      timestamp: Date.now(),
      text,
    };
    setMsgs((msgs) => [newMsg, ...msgs]);
  };

  const onUpdate = (text, id) => {
    setMsgs((msgs) => {
      const targetIdx = msgs.findIndex((msg) => msg.id === id);
      if (targetIdx < 0) return msgs;
      const newMsgs = [...msgs];
      newMsgs.splice(targetIdx, 1, {
        ...msgs[targetIdx],
        text,
      });
      return newMsgs;
    });
    doneEdit();
  };

  const doneEdit = () => setEditingId(null);

  const onDelete = (id) => {
    setMsgs((msgs) => {
      const targetIdx = msgs.findIndex((msg) => msg.id === id);
      if (targetIdx < 0) return msgs;
      const newMsgs = [...msgs];
      newMsgs.splice(targetIdx, 1);
      return newMsgs;
    });
  };

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
            />
          );
        })}
      </ul>
    </>
  );
};

export default MsgList;
