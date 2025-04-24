import { Handle, Position } from "reactflow";

const CustomLogicNode = ({ data }: { data: { label?: string } }) => {
  return (
    <div style={{ padding: 10, border: '2px solid #0d9488', borderRadius: 8, background: '#ecfdf5' }}>
      <Handle type="target" position={Position.Top} />
      <div style={{ fontWeight: 600 }}>{data.label || 'Logic Node'}</div>
      <select style={{ marginTop: 6, width: '100%' }}>
        <option value="equals">Equals</option>
        <option value="greater">Greater Than</option>
        <option value="less">Less Than</option>
      </select>
      <input
        style={{ marginTop: 6, width: '100%' }}
        type="text"
        placeholder="Enter value"
      />
      <Handle type="source" position={Position.Bottom} />
    </div>
  );
};

export default CustomLogicNode;