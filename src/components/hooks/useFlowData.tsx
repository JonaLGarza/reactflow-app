import { useNodesState, useEdgesState, Edge, EdgeChange, NodeChange, Node } from "reactflow";


const initialNodes: Node[] = [
  {
    id: "1",
    type: "default",
    data: { label: "Start Node" },
    position: { x: 250, y: 5 },
  },
];

const initialEdges: Edge[] = [];

interface IUseFlowDataReturn {
  nodes: Node[];
  setNodes: React.Dispatch<React.SetStateAction<Node[]>>;
  onNodesChange: (changes: NodeChange[]) => void;
  edges: Edge[];
  setEdges: React.Dispatch<React.SetStateAction<Edge[]>>;
  onEdgesChange: (changes: EdgeChange[]) => void;
}


export default function useFlowData(): IUseFlowDataReturn {
  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);

  return { nodes, setNodes, onNodesChange, edges, setEdges, onEdgesChange };
}