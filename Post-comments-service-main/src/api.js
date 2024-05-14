export const getComments = async () => {
  return [
    {
      id: "1",
      body: "Hey, have you heard about the recent agreement between India and Iran regarding the Chabahar Port?",
      username: "Asritha",
      userId: "1",
      parentId: null,
      createdAt: "2024-05-12T23:00:33.010",
    },
    {
      id: "2",
      body: "Hey, have you been keeping up with the latest news on renewable energy?",
      username: "Sudha",
      userId: "2",
      parentId: null,
      createdAt: "2024-05-12T23:00:33.010",
    },
    {
      id: "3",
      body: "Yes, I have heard about it. It's a great opportunity for India to expand its trade and economic influence in the region.",
      username: "Jagadeesh",
      userId: "1",
      parentId: "1",
      createdAt: "2024-05-13T10:30:00.000",
    },

  ];
};

export const createComment = async (text, parentId = null) => {
  return {
    id: Math.random().toString(36).substr(2, 9),
    body: text,
    parentId,
    userId: "1",
    username: "Asritha",
    createdAt: new Date().toISOString(),
  };
};

export const updateComment = async (text) => {
  return { text };
};

export const deleteComment = async () => {
  return {};
};
