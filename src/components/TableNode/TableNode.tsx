import { memo } from "react";
import { Handle, Position } from "reactflow";

interface ITableRow {
  key: string;
  value: string;
}

interface ITableNodeData {
  rows: ITableRow[];
  label?: string;
}

const TableNode = memo(({ data }: { data: ITableNodeData }) => {
  return (
    <div style={{ padding: 10, border: '2px solid #7c3aed', borderRadius: 8, background: '#ede9fe', minWidth: 200 }}>
      <Handle type="target" position={Position.Top} />
      <div style={{ fontWeight: 600 }}>{data.label || 'Table Node'}</div>
      <table style={{ width: '100%', marginTop: 6, fontSize: '0.8em' }}>
        <thead>
          <tr>
            <th>Key</th>
            <th>Value</th>
          </tr>
        </thead>
        <tbody>
          {(data.rows || [{ key: 'A', value: '1' }, { key: 'B', value: '2' }]).map((row, idx) => (
            <tr key={idx}>
              <td>{row.key}</td>
              <td>{row.value}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <Handle type="source" position={Position.Bottom} />
    </div>
  );
});

export default TableNode;