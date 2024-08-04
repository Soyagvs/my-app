'use client'
import { useState } from "react";
import { CardAvailables } from "@/ui/CardAvailables";

export default function TablesAvailablesPage() {
    const [mesasDisponibles, setMesasDisponibles] = useState([]);
    const [numeroMesa, setNumeroMesa] = useState("");
    const [numeroEliminar, setNumeroEliminar] = useState("");
    const [errorCrear, setErrorCrear] = useState("");
    const [errorEliminar, setErrorEliminar] = useState("");

    const handleCrearMesa = () => {
        if (!numeroMesa.trim()) {
            setErrorCrear("Ingrese un número de mesa válido.");
            return;
        }

        const nombreMesa = `MESA N • ${numeroMesa}`;

        if (mesasDisponibles.some(mesa => mesa.nombre === nombreMesa)) {
            setErrorCrear("Ya existe una mesa con este número.");
            return;
        }

        const nuevaMesa = {
            id: mesasDisponibles.length + 1,
            nombre: nombreMesa,
        };

        setMesasDisponibles([...mesasDisponibles, nuevaMesa]);
        setNumeroMesa("");
        setErrorCrear("");
    };

    const handleEliminarMesa = () => {
        if (numeroEliminar.trim() === "") {
            setErrorEliminar("Ingrese un número de mesa válido.");
            return;
        }

        const mesaAEliminar = mesasDisponibles.find((mesa) => mesa.nombre === `MESA N • ${numeroEliminar}`);
        if (!mesaAEliminar) {
            setErrorEliminar("No existe una mesa con este número.");
            return;
        }

        const nuevasMesas = mesasDisponibles.filter((mesa) => mesa.id !== mesaAEliminar.id);
        setMesasDisponibles(nuevasMesas);
        setNumeroEliminar("");
        setErrorEliminar("");
    };

    const handleUsarMesa = (mesa) => {
        console.log("Usar mesa:", mesa);
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
                    {errorCrear && <p className="text-red-500">{errorCrear}</p>}
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
                    {errorEliminar && <p className="text-red-500">{errorEliminar}</p>}
                </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-5">
                {mesasDisponibles.map((mesa) => (
                    <CardAvailables key={mesa.id} mesa={mesa} onUsarMesa={handleUsarMesa} />
                ))}
            </div>
        </main>
    );
}
