import { CardAvailables } from "@/ui/CardAvailables";

export default function TablesAvailablesPage() {
    return (
        <main className="h-screen w-full flex flex-col justify-start items-center">
            <div className="h-16 flex justify-center items-center gap-20 mt-5">
                <div>
                    <h2 className="text-3xl font-semibold uppercase">mesas disponibles</h2>
                </div>
                <div className="flex justify-center items-center gap-5">
                    <button className="w-36 h-10 rounded-md text-xl font-medium bg-blue-500">Craer mesa</button>
                    <button className="w-36 h-10 rounded-md text-xl font-medium bg-green-500">Editar mesa</button>
                    <button className="w-36 h-10 rounded-md text-xl font-medium bg-red-500">Eliminar mesa</button>
                </div>
            </div>
            <div className="grid grid-cols-3 gap-20 mt-20">
                <CardAvailables />
                <CardAvailables />
                <CardAvailables />
                <CardAvailables />
                <CardAvailables />
                <CardAvailables />
            </div>
        </main>
    )
}