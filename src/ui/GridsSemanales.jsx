
export const GridsSemanales = () => {
    return (
        <>
            <div className="flex flex-col justify-center items-center gap-10">
                <div className="w-[475px] h-[157px] bg-[#CF059D] rounded-2xl hover:scale-105 duration-100 shadow-lg shadow-slate-500">
                    <p className="text-2xl font-bold text-center mt-2">Recaudacion Semanal</p>
                </div>
                <div className="w-[475px] h-[278px] bg-[#05CF60] rounded-2xl hover:scale-105 duration-100 shadow-lg shadow-slate-500">
                    <p className="text-2xl font-bold text-center mt-2">Ganancias</p>
                </div>
            </div>

            <div className="flex flex-col justify-center items-center gap-10">
                <div className="w-[475px] h-[157px] bg-[#FFBB28] rounded-2xl hover:scale-105 duration-100 shadow-lg shadow-slate-500">
                    <p className="text-2xl font-bold text-center mt-2">Productos mas vendidos</p>
                </div>
                <div className="w-[475px] h-[278px] bg-[#F52A45] rounded-2xl hover:scale-105 duration-100 shadow-lg shadow-slate-500">
                    <p className="text-2xl font-bold text-center mt-2">Perdidas</p>
                </div>
            </div>
        </>
    )
}

