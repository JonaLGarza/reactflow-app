import ReactFlow, {
  Background,
  Connection,
  Controls,
  Edge,
  MiniMap,
  addEdge,
  Node,
} from "reactflow";
import useFlowData from "../hooks/useFlowData";
import { generateNode } from "../utils/nodeHelpers";
import CustomLogicNode from "../CustomLogicNode/CustomLogicNode";

const nodeTypes = { custom: CustomLogicNode };

function FlowCanvas() {
  const { nodes, setNodes, onNodesChange, edges, setEdges, onEdgesChange } = useFlowData();
  const onConnect = (params: Connection) => setEdges((eds: Edge[]) => addEdge(params, eds));
  const addNewNode = () => setNodes((nds: Node[]) => [...nds, generateNode(nds.length, "custom")]);

  return (
    <div style={{ width: "100vw", height: "100vh" }}>
      <button
        onClick={addNewNode}
        style={{ position: "absolute", zIndex: 10, top: 10, left: 10 }}
      >
        Add Node
      </button>
      <ReactFlow
        nodes={nodes}
        edges={edges}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        onConnect={onConnect}
        nodeTypes={nodeTypes}
        fitView
      >
        <MiniMap />
        <Controls />
        <Background color="#aaa" gap={16} />
      </ReactFlow>
    </div>
  );
}

export default FlowCanvas;