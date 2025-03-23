import { Node, Edge } from "@xyflow/react";

const position = { x: 0, y: 0 };
const edgeType = "smoothstep";

export function generateTableNodes(numTables: number): Node[] {
  const tableNodes: Node[] = [];
  for (let i = 1; i <= numTables; i++) {
    tableNodes.push({
      id: `table${i}`,
      data: { label: ` table ${i}` },
      position: { x: i * 100, y: 0 }, // Adjust position as needed
      type: "default",
      parentId: "10", // Assign to the group node
      extent: "parent",
      style: {
        width: 50,
      },
    });
  }
  return tableNodes;
}

export const initialNodes: Node[] = [
  {
    id: "1",
    type: "input",
    data: { label: "WorkSpace 2" },
    position,
  },
  {
    id: "2.1",
    type: "iconNode",
    data: {
      title: "DataSource 2.1",
      content:
        "https://wiki.postgresql.org/images/3/30/PostgreSQL_logo.3colors.120x120.png",
    },
    position,
  },
  {
    id: "2",
    type: "iconNode",
    data: {
      title: "DataSource 2.2",
      content:
        "https://logos-world.net/wp-content/uploads/2020/09/Oracle-Symbol.png",
    },
    position,
  },

  {
    id: "4",
    data: { label: "WorkSpace 1" },
    position,
  },
  {
    id: "1.1",
    data: { label: "DataSource 1.1" },

    position,
  },
  {
    id: "2.2.1",
    data: { label: "Catalog 2.2.1" },

    position,
  },
  {
    id: "1.1.1",

    data: { label: "Catalog 1.1.1" },
    position,
  },
  {
    id: "10",
    type: "group",
    data: {
      label: "Catalog 1.1.5",
      content: "https://cdn.worldvectorlogo.com/logos/sqlite.svg",
    },

    position,
    style: {
      width: 570,
      height: 540,
      borderRadius: "50%",
      backgroundColor: "skyblue",
      opacity: 0.2,
    },
  },
  {
    id: "table1",
    data: { label: "table 1" },
    parentId: "10",
    position,

    extent: "parent",
    style: { borderRadius: "50%" },
  },
  {
    id: "table2",
    data: { label: "table 2" },
    parentId: "10",
    position,

    extent: "parent",
    style: { borderRadius: "50%" },
  },
  {
    id: "1233213",
    type: "group",
    data: { label: "Catalog 1.1.5" },

    position,
    style: {
      width: 370,
      height: 340,
      borderRadius: "50%",
      backgroundColor: "skyblue",
      opacity: 0.2,
    },
  },
  {
    id: "1asdsd2",
    data: { label: "table 3" },
    parentId: "1233213",
    position,
    type: "output",
    extent: "parent",
    style: { borderRadius: "50%" },
  },
  ...generateTableNodes(25), // Example: Add 5 table nodes
];

export const initialEdges = [
  { id: "e12", source: "1", target: "2", type: edgeType, animated: false },
  { id: "e13", source: "1", target: "2.1", type: edgeType, animated: false },
  { id: "e45", source: "4", target: "1.1", type: edgeType, animated: true },
  { id: "e56", source: "1.1", target: "1.1.1", type: edgeType, animated: true },
  { id: "e57", source: "1.1", target: "7", type: edgeType, animated: true },
  {
    id: "1233123",
    source: "1.1.1",
    target: "1233213",
    type: edgeType,
    animated: true,
  },
  {
    id: "e34543557",
    source: "1.1",
    target: "1.1.1",
    type: edgeType,
    animated: true,
  },
  {
    id: "321434",
    source: "2.1",
    target: "2.2.1",
    type: edgeType,
    animated: true,
  },

  {
    id: "edfgfd",
    source: "2.2.1",
    target: "table2",
    type: edgeType,
    animated: true,
  },
  {
    id: "edfgfd123",
    source: "2.2.1",
    target: "table1",
    type: edgeType,
    animated: true,
  },
  {
    id: "1r32r32r42",
    source: "1.1.1",
    target: "1asdsd2",
    type: edgeType,
    animated: true,
  },
  {
    id: "dfgdfgfg",
    source: "table1",
    target: "table2",
    type: edgeType,
    animated: true,
  },
];
