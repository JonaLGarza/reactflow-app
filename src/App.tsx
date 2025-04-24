import ReactDOM from "react-dom/client";
import { ReactFlowProvider } from "reactflow";
import "reactflow/dist/style.css";
import FlowCanvas from "./components/FlowCanvas/FlowCanvas";

export default function App() {
  return (
    <ReactFlowProvider>
      <FlowCanvas />
    </ReactFlowProvider>
  );
}

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(<App />);
