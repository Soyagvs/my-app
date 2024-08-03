import { CardInUse } from "@/ui/CardInUse";

export default function TablesInUsePage() {
    return (
        <main className="h-screen w-full flex flex-col justify-start items-center">
            <div className="h-16 flex justify-center items-center gap-20 mt-5">
                <div>
                    <h2 className="text-3xl font-semibold uppercase">mesas en uso</h2>
                </div>
            </div>
            <div className="grid grid-cols-3 gap-20 mt-20">
                <CardInUse />
                
            </div>
        </main>
    )
}