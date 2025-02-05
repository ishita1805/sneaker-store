const Table = ({ data, colHeaders, rowHeaders }: { data: ( string[] | React.ReactNode[] | number[])[]; colHeaders?: string[]; rowHeaders?: string[]; }) => {

  
    return (
      <div className="overflow-x-auto mb-4 text-sm pb-2">
        <table className="table-auto w-full border-collapse border border-gray-300">
          <tbody>
            <tr>
                {rowHeaders?.map((header) => (
                    <th className="border min-w-36 border-gray-400 px-4 py-2 text-left bg-neutral-200">
                        {header}
                    </th>
                ))}
            </tr>
            {data.map((row, rowIndex) => (
              <tr key={rowIndex} className="odd:bg-white even:bg-neutral-100">
                {colHeaders && <th className="border border-gray-400 min-w-36 px-4 py-2 text-left bg-neutral-200">
                  {colHeaders[rowIndex]}
                </th>}
                {row.map((cell, colIndex) => (
                  <td key={colIndex} className="align-top border min-w-24 border-gray-300 px-4 py-2">
                    {cell}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  };

export default Table;
