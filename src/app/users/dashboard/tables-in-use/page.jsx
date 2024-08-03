'use client'
import { useState, useEffect } from "react";
import { CardInUse } from "@/ui/CardInUse";
import { useRouter } from 'next/navigation';

const apiBase = 'http://localhost:3001/api/mesas';

export default function TablesInUsePage() {
    const [mesasEnUso, setMesasEnUso] = useState([]);
    const router = useRouter();

    useEffect(() => {
        fetch(`${apiBase}?estado=en uso`)
            .then(response => response.json())
            .then(data => setMesasEnUso(data))
            .catch(error => console.error("Error al cargar mesas en uso:", error));
    }, []);

    const handleCerrarMesa = async (id) => {
        try {
            await fetch(`${apiBase}/cerrar`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ id }),
            });
            // Actualiza las listas de mesas
            setMesasEnUso(mesasEnUso.filter(mesa => mesa.id !== id));
            router.push('/tables-available'); // Redirige a la página de mesas disponibles
        } catch (error) {
            console.error("Error al cerrar la mesa:", error);
        }
    };

    return (
        <main className="h-screen w-full flex flex-col justify-start items-center">
            <div className="h-16 flex justify-center items-center gap-20 mt-5">
                <div>
                    <h2 className="text-3xl font-semibold uppercase">Mesas en uso</h2>
                </div>
            </div>
            <div className="grid grid-cols-3 gap-20 mt-20">
                {mesasEnUso.map((mesa) => (
                    <CardInUse
                        key={mesa.id}
                        mesa={mesa}
                        onCerrar={() => handleCerrarMesa(mesa.id)}
                    />
                ))}
            </div>
        </main>
    );
}
