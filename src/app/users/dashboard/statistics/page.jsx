'use client'
import { useState } from "react";
import { GridsMensuales } from "@/ui/GridsMensuales";
import { GridsSemanales } from "@/ui/GridsSemanales";

export default function StatisticsPage() {
    const [mostrarSemanales, setMostrarSemanales] = useState(true); // Estado para controlar qué componente mostrar

    return (
        <main className="h-screen w-full flex flex-col justify-start items-center">
            <div className="h-16 flex justify-center items-center gap-20 mt-5 mb-10">
                <div>
                    <h2 className="text-3xl font-semibold uppercase">Estadisticas</h2>
                </div>
            </div>
            <div className="flex justify-center items-center gap-5">
                <button
                    className={`text-3xl font-semibold w-52 h-16 border rounded-md ${mostrarSemanales ? 'bg-blue-500' : 'bg-white hover:bg-blue-500'}`}
                    onClick={() => setMostrarSemanales(true)}
                >
                    Semanales
                </button>
                <button
                    className={`text-3xl font-semibold w-52 h-16 border rounded-md ${!mostrarSemanales ? 'bg-blue-500' : 'bg-white hover:bg-blue-500'}`}
                    onClick={() => setMostrarSemanales(false)}
                >
                    Mensuales
                </button>
            </div>
            <div className="flex justify-center items-center gap-10 mt-5">
                {mostrarSemanales ? <GridsSemanales /> : <GridsMensuales />}
            </div>
        </main>
    );
}
