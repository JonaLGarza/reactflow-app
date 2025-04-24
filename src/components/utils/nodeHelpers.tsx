import { Node } from "reactflow";

interface IBaseNodeData {
  label: string;
  rows?: { key: string; value: string; }[];
}

export const generateNode = (id: number, type: string = "custom"): Node<IBaseNodeData> => {
  const baseData: IBaseNodeData = { 
    label: `Node ${id + 1}` 
  };
  if (type === "table") {
    baseData.rows = [
      { key: "Item 1", value: "100" },
      { key: "Item 2", value: "200" },
    ];
  }
  return {
    id: (id + 1).toString(),
    type,
    data: baseData,
    position: {
      x: Math.random() * 400,
      y: Math.random() * 400,
    },
  };
};
  