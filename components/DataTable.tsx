import React from 'react';

interface DataTableProps {
  headers: string[];
  dataRows: (string | number)[][];
  totalRow?: (string | number)[];
  highlightedColumnIndex?: number;
}

const DataTable: React.FC<DataTableProps> = ({ headers, dataRows, totalRow, highlightedColumnIndex }) => {
  return (
    <div className="overflow-x-auto rounded-lg border border-custom-border">
      <table className="min-w-full divide-y divide-custom-border bg-custom-card">
        <thead className="bg-gray-700/50">
          <tr>
            {headers.map((header, index) => (
              <th
                key={index}
                scope="col"
                className={`px-6 py-3 text-left text-xs font-bold text-custom-text-secondary uppercase tracking-wider ${index > 1 ? 'text-center' : ''}`}
              >
                {header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="divide-y divide-custom-border">
          {dataRows.map((row, rowIndex) => (
            <tr key={rowIndex} className="hover:bg-gray-700/40 transition-colors duration-150">
              {row.map((cell, cellIndex) => {
                const isHighlighted = cellIndex === highlightedColumnIndex;
                const cellClasses = `
                  px-6 py-4 whitespace-nowrap text-sm
                  ${typeof cell === 'number' && cell < 0 ? 'text-red-400' : 'text-custom-text-primary'}
                  ${cellIndex > 1 ? 'text-center' : ''}
                  ${isHighlighted ? 'bg-sky-900/50 font-semibold' : ''}
                `;
                return (
                  <td key={cellIndex} className={cellClasses.trim()}>
                    {cell}
                  </td>
                );
              })}
            </tr>
          ))}
           {totalRow && (
            <tr className="bg-gray-800 font-bold">
                 {totalRow.map((cell, cellIndex) => {
                    const isHighlighted = cellIndex === highlightedColumnIndex;
                    const cellClasses = `
                      px-6 py-4 whitespace-nowrap text-sm text-white
                      ${cellIndex > 1 ? 'text-center' : ''}
                      ${isHighlighted ? 'bg-sky-800/60' : ''}
                    `;
                    return (
                      <td key={cellIndex} className={cellClasses.trim()}>
                        {cell}
                      </td>
                    );
                 })}
            </tr>
           )}
        </tbody>
      </table>
    </div>
  );
};

export default DataTable;