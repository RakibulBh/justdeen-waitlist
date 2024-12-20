import { tableData } from "@/Constants";
import { CircleCheck, CircleX } from "lucide-react";
import React, { ReactNode } from "react";

const TableData = ({ children }: { children: string | boolean }) => {
  return (
    <td className="px-6 py-4 text-center text-gray-700">
      <div className="flex items-center justify-center">
        {typeof children === "string" && (
          <p className="text-center">{children}</p>
        )}
        {typeof children !== "string" && !children && (
          <CircleX width={30} height={30} className="text-red-500" />
        )}
        {typeof children !== "string" && children && (
          <CircleCheck width={30} height={30} className="text-green-500" />
        )}
      </div>
    </td>
  );
};

const TableRow = ({ children }: { children: React.ReactNode }) => {
  return (
    <tr className="even:bg-gray-50 odd:bg-white hover:bg-gray-100 transition-colors">
      {children}
    </tr>
  );
};

const FeatureTable = () => {
  return (
    <div className="overflow-hidden rounded-lg border border-gray-200 shadow-md">
      <table className="w-full table-auto text-sm text-left">
        <thead className="bg-gray-100 text-gray-700">
          <tr>
            <th className="px-6 py-4 text-center text-sm font-semibold">
              Feature
            </th>
            <th className="px-6 py-4 text-center text-sm font-semibold">
              MyDeen
            </th>
            <th className="px-6 py-4 text-center text-sm font-semibold">
              Other Apps
            </th>
          </tr>
        </thead>
        <tbody>
          {tableData.map((row) => (
            <TableRow>
              <TableData>{row.feature}</TableData>
              <TableData>{row.myDeen}</TableData>
              <TableData>{row.other}</TableData>
            </TableRow>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default FeatureTable;

/* Tailwind CSS classes for styling */
