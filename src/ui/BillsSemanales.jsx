export const BillsSemanales = ({ gastos, onDelete }) => {
  return (
    <div className="w-[300px] bg-purple-500 rounded-xl flex flex-col justify-center items-center">
      <table className="w-full">
        <thead className="bg-purple-400">
          <tr className="flex justify-center items-center">
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Nombre
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Monto
            </th>
            <th className="px-6 py-3"></th>
          </tr>
        </thead>
        <tbody className="flex flex-col justify-center items-center">
          {gastos.map((gasto, index) => (
            <tr key={index} className="flex justify-center items-center">
              <td className="px-6  py-4 whitespace-nowrap">
                <div className="text-sm text-gray-900">{gasto.nombre}</div>
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                <div className="text-sm text-gray-900">${gasto.monto}</div>
              </td>
              <td className="py-4 whitespace-nowrap">
                <button onClick={() => onDelete(index)}>❌</button>
              </td>
            </tr>
          ))}
        </tbody>
        <tfoot>
          <tr className="flex justify-start items-center">
            <td colSpan="2" className="border-t border-gray-500 px-6 py-3">
              <div className=" h-10 flex justify-start items-center gap-5">
                <p className="font-bold">Total:</p>
                <p>$</p>
              </div>
            </td>
          </tr>
        </tfoot>
      </table>
    </div>
  );
};
