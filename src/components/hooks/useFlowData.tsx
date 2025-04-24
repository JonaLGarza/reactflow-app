import { useNodesState, useEdgesState, Edge } from "reactflow";

const initialNodes = [
  {
    id: "1",
    type: "default",
    data: { label: "Start Node" },
    position: { x: 250, y: 5 },
  },
];

const initialEdges: Edge[] = [];

export default function useFlowData() {
  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);

  return { nodes, setNodes, onNodesChange, edges, setEdges, onEdgesChange };
}