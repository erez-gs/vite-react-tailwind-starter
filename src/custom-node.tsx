import React from "react";
import { Handle, Position } from "@xyflow/react";

export const IconNode = ({
  data,
}: {
  data: { title: string; content: string };
}) => {
  return (
    <div className="flex flex-row gap-3">
      <Handle
        type="target"
        position={Position.Left}
        className="w-2 h-2 bg-blue-500"
      />

      <img src={data.content} alt="new" style={{ width: 20, height: 20 }} />

      <div>{data.title}</div>
      <Handle
        type="source"
        position={Position.Right}
        className="w-2 h-2 bg-blue-500"
      />
    </div>
  );
};

export const TableNode = ({
  data,
}: {
  data: { title: string; content: string };
}) => {
  return (
    <div className="flex flex-row gap-3">
      <Handle
        type="target"
        position={Position.Left}
        className="w-2 h-2 bg-blue-500"
      />

      <div>{data.title}</div>
      <Handle
        type="source"
        position={Position.Right}
        className="w-2 h-2 bg-blue-500"
      />
    </div>
  );
};
