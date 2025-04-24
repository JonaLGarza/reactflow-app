import ReactFlow, {
  Background,
  Connection,
  Controls,
  MiniMap,
  addEdge,
  Node
} from "reactflow";
import useFlowData from "../hooks/useFlowData";
import { generateNode } from "../utils/nodeHelpers";
import { nodeTypes } from "../../nodeTypes";

function FlowCanvas() {
  const { nodes, setNodes, onNodesChange, edges, setEdges, onEdgesChange } = useFlowData();
  const onConnect = (params: Connection) => setEdges(addEdge(params, edges));
  const addNewNode = (type = "custom") => {
    setNodes((nds: Node[]) => [...nds, generateNode(nds.length, type)]);
  };

  return (
    <div style={{ width: "100vw", height: "100vh" }}>
      <button
        onClick={() => addNewNode("custom")}
        style={{ position: "absolute", zIndex: 10, top: 10, left: 10 }}
      >
        Add Node
      </button>
      <button
        onClick={() => addNewNode("table")}
        style={{ position: "absolute", zIndex: 10, top: 60, left: 10 }}
      >
        Add Table
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