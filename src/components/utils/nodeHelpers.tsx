export const generateNode = (id: number) => {
    return {
      id: (id + 1).toString(),
      type: "default",
      data: { label: `Node ${id + 1}` },
      position: {
        x: Math.random() * 400,
        y: Math.random() * 400,
      },
    };
};
  