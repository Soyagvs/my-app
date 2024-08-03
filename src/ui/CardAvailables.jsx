import Image from "next/image";

export const CardAvailables = ({ mesa, onUsarMesa }) => {
    const handleUsarMesa = () => {
        onUsarMesa(mesa);
    };

    return (
        <div className="w-[300px] h-[300px] bg-[#CDCDCD] rounded-xl shadow-md shadow-slate-500 flex flex-col justify-center items-center hover:scale-105 duration-100">
            <div className="flex justify-center items-center mb-10">
                <p className="text-3xl font-semibold">{mesa.nombre}</p>
            </div>
            <div className="flex justify-center items-center mb-10">
                <Image src="/img/icon.png" width={100} height={100} alt="Imagen de mesa" />
            </div>
            <div className="flex flex-col justify-center items-center mb-[-10px]">
                <div className="border w-64 border-b-black mb-3"></div>
                <button className="w-52 h-10 rounded-md text-xl font-medium bg-orange-500" onClick={handleUsarMesa}>
                    Usar mesa
                </button>
            </div>
        </div>
    );
};
