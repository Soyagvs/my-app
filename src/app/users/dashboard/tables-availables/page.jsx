'use client'
import { useState } from "react";
import { CardAvailables } from "@/ui/CardAvailables";

export default function TablesAvailablesPage() {
    const [mesas, setMesas] = useState([]);
    const [numeroMesa, setNumeroMesa] = useState("");
    const [numeroEliminar, setNumeroEliminar] = useState("");
    const [errorCrear, setErrorCrear] = useState("");
    const [errorEliminar, setErrorEliminar] = useState("");

    const handleCrearMesa = () => {
        if (numeroMesa.trim() === "") {
            setErrorCrear("Ingrese un número de mesa válido.");
            return;
        }

        if (mesas.some((mesa) => mesa.numero === `MESA N • ${numeroMesa}`)) {
            setErrorCrear("Ya existe una mesa con este número.");
            return;
        }

        const nuevaMesa = {
            id: Date.now(),
            numero: `MESA N • ${numeroMesa}`,
            editando: false,
            seleccionadaEliminar: false,
        };

        setMesas([...mesas, nuevaMesa]);
        setNumeroMesa("");
        setErrorCrear("");
    };

    const handleEliminarMesa = () => {
        if (numeroEliminar.trim() === "") {
            setErrorEliminar("Ingrese un número de mesa válido.");
            return;
        }

        const mesaAEliminar = mesas.find((mesa) => mesa.numero === `MESA N • ${numeroEliminar}`);
        if (!mesaAEliminar) {
            setErrorEliminar("No existe una mesa con este número.");
            return;
        }

        const nuevasMesas = mesas.filter((mesa) => mesa.numero !== `MESA N • ${numeroEliminar}`);
        setMesas(nuevasMesas);
        setNumeroEliminar("");
        setErrorEliminar("");
    };

    return (
        <main className="h-screen w-full flex flex-col justify-start items-center">
            <div className="h-16 flex justify-between items-center gap-20 mt-5">
                <div>
                    <h2 className="text-3xl font-semibold uppercase">Mesas disponibles</h2>
                </div>
                <div className="flex justify-center items-center gap-5">
                    <input
                        type="text"
                        placeholder="Número de mesa"
                        value={numeroMesa}
                        onChange={(e) => setNumeroMesa(e.target.value)}
                        className="border border-gray-300 rounded-md px-3 py-1"
                    />
                    <button
                        className="w-36 h-10 rounded-md text-xl font-medium bg-blue-500"
                        onClick={handleCrearMesa}
                    >
                        Crear mesa
                    </button>
                    <input
                        type="text"
                        placeholder="Número de mesa a eliminar"
                        value={numeroEliminar}
                        onChange={(e) => setNumeroEliminar(e.target.value)}
                        className="border border-gray-300 rounded-md px-3 py-1"
                    />
                    <button
                        className="w-36 h-10 rounded-md text-xl font-medium bg-red-500"
                        onClick={handleEliminarMesa}
                    >
                        Eliminar mesa
                    </button>
                </div>
            </div>
            {errorCrear && <p className="text-red-500 mt-2">{errorCrear}</p>}
            {errorEliminar && <p className="text-red-500 mt-2">{errorEliminar}</p>}
            <div className="grid grid-cols-3 gap-20 mt-20">
                {mesas.map((mesa) => (
                    <CardAvailables
                        key={mesa.id}
                        mesa={mesa}
                        onEliminar={() => handleEliminarMesa(mesa.numero)}
                    />
                ))}
            </div>
        </main>
    );
}
