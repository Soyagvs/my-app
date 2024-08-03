'use client'
import { useState, useEffect } from "react";
import { CardAvailables } from "@/ui/CardAvailables";
import { useRouter } from 'next/navigation';

const apiBase = 'http://localhost:3001/api/mesas';

export default function TablesAvailablesPage() {
    const [mesasDisponibles, setMesasDisponibles] = useState([]);
    const [numeroMesa, setNumeroMesa] = useState("");
    const [numeroEliminar, setNumeroEliminar] = useState("");
    const [errorCrear, setErrorCrear] = useState("");
    const [errorEliminar, setErrorEliminar] = useState("");
    const router = useRouter();

    useEffect(() => {
        fetch(`${apiBase}?estado=disponible`)
            .then(response => response.json())
            .then(data => setMesasDisponibles(data))
            .catch(error => console.error("Error al cargar mesas disponibles:", error));
    }, []);

    const handleCrearMesa = async () => {
        if (numeroMesa.trim() === "") {
            setErrorCrear("Ingrese un número de mesa válido.");
            return;
        }

        if (mesasDisponibles.some((mesa) => mesa.nombre === `MESA N • ${numeroMesa}`)) {
            setErrorCrear("Ya existe una mesa con este número.");
            return;
        }

        const nuevaMesa = {
            nombre: `MESA N • ${numeroMesa}`,
        };

        try {
            const response = await fetch(apiBase, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(nuevaMesa),
            });
            const data = await response.json();
            setMesasDisponibles([...mesasDisponibles, data]);
            setNumeroMesa("");
            setErrorCrear("");
        } catch (error) {
            setErrorCrear("Error al crear la mesa.");
            console.error("Error:", error);
        }
    };

    const handleEliminarMesa = async () => {
        if (numeroEliminar.trim() === "") {
            setErrorEliminar("Ingrese un número de mesa válido.");
            return;
        }

        const mesaAEliminar = mesasDisponibles.find((mesa) => mesa.nombre === `MESA N • ${numeroEliminar}`);
        if (!mesaAEliminar) {
            setErrorEliminar("No existe una mesa con este número.");
            return;
        }

        try {
            await fetch(apiBase, {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ id: mesaAEliminar.id }),
            });
            const nuevasMesas = mesasDisponibles.filter((mesa) => mesa.id !== mesaAEliminar.id);
            setMesasDisponibles(nuevasMesas);
            setNumeroEliminar("");
            setErrorEliminar("");
        } catch (error) {
            setErrorEliminar("Error al eliminar la mesa.");
            console.error("Error:", error);
        }
    };

    const handleUsarMesa = async (id) => {
        try {
            await fetch(`${apiBase}/usar`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ id }),
            });
            // Actualiza las listas de mesas
            setMesasDisponibles(mesasDisponibles.filter(mesa => mesa.id !== id));
            router.push('/tables-in-use'); // Redirige a la página de mesas en uso
        } catch (error) {
            console.error("Error al usar la mesa:", error);
        }
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
                {mesasDisponibles.map((mesa) => (
                    <CardAvailables
                        key={mesa.id}
                        mesa={mesa}
                        onEliminar={() => handleUsarMesa(mesa.id)}
                    />
                ))}
            </div>
        </main>
    );
}
