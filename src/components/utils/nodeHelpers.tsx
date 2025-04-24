export const generateNode = (id: number, type: string = "custom") => {
    return {
      id: (id + 1).toString(),
      type,
      data: { label: `Node ${id + 1}` },
      position: {
        x: Math.random() * 400,
        y: Math.random() * 400,
      },
    };
  };
  