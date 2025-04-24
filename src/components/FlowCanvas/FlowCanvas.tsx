import ReactFlow, {
  Background,
  Connection,
  Controls,
  MiniMap,
  addEdge,
} from "reactflow";
import useFlowData from "../hooks/useFlowData";
import { generateNode } from "../utils/nodeHelpers";
import { nodeTypes } from "../../nodeTypes";
import { useState } from "react";

function FlowCanvas() {
  const { nodes, setNodes, onNodesChange, edges, setEdges, onEdgesChange } = useFlowData();
  const [showJson, setShowJson] = useState(false);

  const onConnect = (params: Connection) => setEdges((eds) => addEdge(params, eds));

  const togglePreview = () => setShowJson(!showJson);

  const addNewNode = (type = "custom") => {
    setNodes((nds) => [...nds, generateNode(nds.length, type)]);
  };

  const saveFlow = () => {
    const data = JSON.stringify({ nodes, edges }, null, 2);
    const blob = new Blob([data], { type: "application/json" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = "flow.json";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const loadFlow = (event: React.ChangeEvent<HTMLInputElement>) => {
    const fileReader = new FileReader();
    fileReader.onload = (e) => {
      try {
        const parsed = JSON.parse(e.target?.result as string);
        if (parsed.nodes && parsed.edges) {
          setNodes(parsed.nodes);
          setEdges(parsed.edges);
        }
      } catch (error) {
        console.error("Invalid JSON file.", error);
      }
    };
    if (event.target.files?.[0]) {
      fileReader.readAsText(event.target.files[0]);
    }
  };

  return (
    <div style={{ width: "100vw", height: "100vh" }}>
      <div style={{ position: "absolute", zIndex: 10, top: 10, left: 10 }}>
        <button onClick={() => addNewNode("custom")}>Add Logic Node</button>
        <button onClick={() => addNewNode("table")} style={{ marginLeft: 10 }}>Add Table Node</button>
        <button onClick={saveFlow} style={{ marginLeft: 10 }}>Save Flow</button>
        <label style={{ marginLeft: 10 }}>
          <input type="file" accept="application/json" onChange={loadFlow} style={{ display: "none" }} />
          <span style={{ cursor: "pointer", textDecoration: "underline" }}>Load Flow</span>
        </label>
        <button onClick={togglePreview} style={{ marginLeft: 10 }}>
          {showJson ? "Hide" : "Show"} JSON
        </button>
        {showJson && (
          <div style={{ width: 400, padding: 10, background: "#f8fafc", borderLeft: "1px solid #ccc", overflow: "auto" }}>
            <h4>Flow Preview</h4>
            <pre style={{ fontSize: 12 }}>
              {JSON.stringify({ nodes, edges }, null, 2)}
            </pre>
          </div>
        )}
      </div>
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