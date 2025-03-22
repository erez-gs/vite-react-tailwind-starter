import { Handle, Position } from "@xyflow/react";

const handleStyle = { left: 10 };

export function TextUpdaterNode() {
  return (
    <>
      <Handle type="target" position={Position.Top} />
      <div className="flex flex-row items-center justify-center gap-3">
        <img
          src="data:image/png;base64,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"
          alt="new"
          style={{ width: 20, height: 20 }}
        />
        <span>DataSource 2.1</span>
      </div>
      <Handle type="source" position={Position.Bottom} id="a" />
      <Handle
        type="source"
        position={Position.Bottom}
        id="b"
        style={handleStyle}
      />
    </>
  );
}
