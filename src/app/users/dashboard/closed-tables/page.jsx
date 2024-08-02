import { DateTable } from "@/ui/DateTable";

export default function ClosedTablesPage() {
    return (
        <main className="h-screen w-full flex flex-col justify-start items-center">
            <div className="h-16 flex justify-center items-center gap-20 mt-5">
                <div>
                    <h2 className="text-3xl font-semibold uppercase">Mesas cerradas</h2>
                </div>
            </div>
            <DateTable />
        </main>
    )
}