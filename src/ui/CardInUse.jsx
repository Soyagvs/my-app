import Image from "next/image";

export const CardInUse = ({ mesa, onCerrar }) => {
    return (
        <div className="w-[300px] h-[380px] bg-[#CDCDCD] rounded-xl shadow-md shadow-slate-500 flex flex-col justify-center items-center hover:scale-105 duration-100">
            <div className="flex justify-center items-center mb-10">
                <p className="text-3xl font-semibold">{mesa.nombre}</p>
            </div>
            <div className="flex justify-center items-center mb-10">
                <Image src="/img/icon.png" width={100} height={100} alt="Imagen de mesa" />
            </div>
            <div className="flex flex-col justify-center items-center mb-[-10px] gap-2">
                <div className="border w-64 border-b-black mb-3"></div>
                <button className="w-52 h-10 rounded-md text-xl font-medium bg-blue-500">Ver mesa</button>
                <button
                    className="w-52 h-10 rounded-md text-xl font-medium bg-green-500"
                    onClick={() => onCerrar()}
                >
                    Cerrar mesa
                </button>
            </div>
        </div>
    );
};
