'use client'
import { useState } from "react";
import { BillsMensuales } from "@/ui/BillsMensuales";
import { BillsSemanales } from "@/ui/BillsSemanales";

export default function BillsPage() {
    const [gastosSemanales, setGastosSemanales] = useState(true); // Estado para controlar qué componente mostrar
    const [nuevoNombre, setNuevoNombre] = useState(""); // Estado para el nombre del nuevo gasto
    const [nuevoMonto, setNuevoMonto] = useState(""); // Estado para el monto del nuevo gasto
    const [gastosSemanalesArray, setGastosSemanalesArray] = useState([]); // Estado para almacenar los gastos semanales
    const [gastosMensualesArray, setGastosMensualesArray] = useState([]); // Estado para almacenar los gastos mensuales

    const handleAgregarGasto = () => {
        if (nuevoNombre.trim() !== "" && nuevoMonto.trim() !== "") {
            const nuevoGasto = {
                nombre: nuevoNombre,
                monto: nuevoMonto,
            };
            if (gastosSemanales) {
                setGastosSemanalesArray([...gastosSemanalesArray, nuevoGasto]);
            } else {
                setGastosMensualesArray([...gastosMensualesArray, nuevoGasto]);
            }
            setNuevoNombre(""); // Limpiar el campo de nombre después de agregar el gasto
            setNuevoMonto(""); // Limpiar el campo de monto después de agregar el gasto
        }
    };

    const handleEliminarGasto = (index) => {
        if (gastosSemanales) {
            const nuevosGastos = [...gastosSemanalesArray];
            nuevosGastos.splice(index, 1);
            setGastosSemanalesArray(nuevosGastos);
        } else {
            const nuevosGastos = [...gastosMensualesArray];
            nuevosGastos.splice(index, 1);
            setGastosMensualesArray(nuevosGastos);
        }
    };

    return (
        <main className="h-screen w-full flex flex-col justify-start items-center">
            <div className="h-16 flex justify-between items-center gap-20 mt-5 mb-10">
                <div>
                    <h2 className="text-3xl font-semibold uppercase">Estadisticas</h2>
                </div>
                <div>
                    <div className="flex gap-3">
                        <input
                            type="text"
                            placeholder="Nombre del gasto"
                            value={nuevoNombre}
                            onChange={(e) => setNuevoNombre(e.target.value)}
                            className="border border-gray-300 rounded-md px-3 py-1"
                            required
                        />
                        <input
                            type="number"
                            placeholder="Precio"
                            value={nuevoMonto}
                            onChange={(e) => setNuevoMonto(e.target.value)}
                            className="border border-gray-300 rounded-md px-3 py-1"
                            required
                        />
                        <button
                            className="w-40 rounded-lg bg-green-500 h-12"
                            onClick={handleAgregarGasto}
                        >
                            Agregar gasto
                        </button>
                    </div>
                </div>
            </div>
            <div className="flex justify-center items-center gap-5">
                <button
                    className={`text-3xl font-semibold w-52 h-16 border rounded-md ${gastosSemanales ? 'bg-blue-500' : 'bg-white hover:bg-blue-500'}`}
                    onClick={() => setGastosSemanales(true)}
                >
                    Semanales
                </button>
                <button
                    className={`text-3xl font-semibold w-52 h-16 border rounded-md ${!gastosSemanales ? 'bg-blue-500' : 'bg-white hover:bg-blue-500'}`}
                    onClick={() => setGastosSemanales(false)}
                >
                    Mensuales
                </button>
            </div>
            <div className="flex justify-center items-center gap-10 mt-5">
                {gastosSemanales ? (
                    <BillsSemanales gastos={gastosSemanalesArray} onDelete={handleEliminarGasto} />
                ) : (
                    <BillsMensuales gastos={gastosMensualesArray} onDelete={handleEliminarGasto} />
                )}
            </div>
        </main>
    );
}
