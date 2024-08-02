export const DateTable = () => {
  return (
      <div className="w-full">
          <table className="w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                  <tr>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Monto
                      </th>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Nombre
                      </th>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Número de Mesa
                      </th>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Fecha
                      </th>
                  </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                  <tr>
                      <td className="px-6 py-4 whitespace-nowrap">
                          <div className="text-sm text-gray-900">$100</div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                          <div className="text-sm text-gray-900">Juan</div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                          <div className="text-sm text-gray-900">3</div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                          <div className="text-sm text-gray-900">2024-08-01</div>
                      </td>
                  </tr>
                  <tr>
                      <td className="px-6 py-4 whitespace-nowrap">
                          <div className="text-sm text-gray-900">$150</div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                          <div className="text-sm text-gray-900">María</div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                          <div className="text-sm text-gray-900">5</div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                          <div className="text-sm text-gray-900">2024-08-02</div>
                      </td>
                  </tr>
                  <tr>
                      <td className="px-6 py-4 whitespace-nowrap">
                          <div className="text-sm text-gray-900">$120</div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                          <div className="text-sm text-gray-900">Pedro</div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                          <div className="text-sm text-gray-900">2</div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                          <div className="text-sm text-gray-900">2024-08-03</div>
                      </td>
                  </tr>
              </tbody>
          </table>
      </div>

  )
}

