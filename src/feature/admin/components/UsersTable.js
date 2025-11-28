import {
  useReactTable,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  flexRender,
} from "@tanstack/react-table";
import { useMemo } from "react";

export default function UsersTable({
  data,
  globalFilter,
  setGlobalFilter,
  pageIndex,
  setPageIndex,
  pageSize,
  setPageSize,
  onEdit,   
  onDelete, 
}) {
  const columns = useMemo(
    () => [
      { accessorKey: "id", header: "ID" },
      { accessorKey: "name", header: "Name" },
      { accessorKey: "email", header: "Email" },
      { accessorKey: "role", header: "Role" },
      {
  header: "Actions",
  cell: ({ row }) => (
    <div className="flex gap-2">
      <button
        className="bg-yellow-500 text-white px-2 py-1 rounded text-sm"
        onClick={() => onEdit(row.original)}
      >
        Edit
      </button>
      <button
        className="bg-red-500 text-white px-2 py-1 rounded text-sm"
        onClick={() => onDelete(row.original)}
      >
        Delete
      </button>
    </div>
  ),
},

    ],
    [onEdit, onDelete]
  );

  const table = useReactTable({
    data,
    columns,
    state: {
      globalFilter,
      pagination: { pageIndex, pageSize },
    },
    onPaginationChange: (updater) => {
      const newState =
        typeof updater === "function"
          ? updater({ pageIndex, pageSize })
          : updater;

      setPageIndex(newState.pageIndex ?? 0);
      setPageSize(newState.pageSize ?? pageSize);
    },
    globalFilterFn: (row, _columnId, filterValue) =>
      row.original.name.toLowerCase().includes(String(filterValue).toLowerCase()),
    getCoreRowModel: getCoreRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
  });

  return (
    <>
      {/* ENTRIES + SEARCH */}
      <div className="flex justify-between items-center mb-3">
        <div className="flex items-center gap-3">
          <label className="text-sm text-gray-600">Entries:</label>
          <select
            className="border rounded px-2 py-1"
            value={pageSize}
            onChange={(e) => {
              const newSize = Number(e.target.value);
              setPageSize(newSize);
              table.setPageSize(newSize);
              setPageIndex(0);
              table.setPageIndex(0);
            }}
          >
            {[5, 10, 20, 50].map((size) => (
              <option key={size} value={size}>
                Show {size}
              </option>
            ))}
          </select>
        </div>

        <input
          type="text"
          placeholder="Search by name"
          className="border rounded px-3 py-1 w-40"
          value={globalFilter}
          onChange={(e) => {
            setGlobalFilter(e.target.value);
            setPageIndex(0);
            table.setPageIndex(0);
          }}
        />
      </div>

      {/* TABLE */}
      <div className="overflow-hidden border rounded-xl shadow bg-white">
        <table className="w-full text-left">
          <thead className="bg-gray-100">
            {table.getHeaderGroups().map((headerGroup) => (
              <tr key={headerGroup.id}>
                {headerGroup.headers.map((header) => (
                  <th key={header.id} className="p-3 border-b text-sm font-semibold">
                    {flexRender(header.column.columnDef.header, header.getContext())}
                  </th>
                ))}
              </tr>
            ))}
          </thead>

          <tbody>
            {table.getRowModel().rows.length === 0 ? (
              <tr>
                <td colSpan={columns.length} className="p-4 text-center text-sm text-gray-500">
                  No records found.
                </td>
              </tr>
            ) : (
              table.getRowModel().rows.map((row) => (
                <tr key={row.id} className="hover:bg-gray-50">
                  {row.getVisibleCells().map((cell) => (
                    <td key={cell.id} className="p-3 border-b text-sm">
                      {flexRender(cell.column.columnDef.cell, cell.getContext())}
                    </td>
                  ))}
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>

      {/* PAGINATION */}
      <div className="flex justify-between items-center mt-4">
        <button
          onClick={() => table.previousPage()}
          disabled={!table.getCanPreviousPage()}
          className="px-4 py-2 bg-gray-300 rounded disabled:opacity-40"
        >
          Previous
        </button>

        <span className="text-sm">
          Page {pageIndex + 1} of {table.getPageCount()}
        </span>

        <button
          onClick={() => table.nextPage()}
          disabled={!table.getCanNextPage()}
          className="px-4 py-2 bg-gray-300 rounded disabled:opacity-40"
        >
          Next
        </button>
      </div>
    </>
  );
}
