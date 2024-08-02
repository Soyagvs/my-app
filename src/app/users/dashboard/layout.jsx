import { Aside } from "@/ui/Aside";
import { Navigation } from "@/ui/Navigation";

export const metadata = {
    title: "Resto Mesas",
    description: "Saas para Resto Bar",
};

export default function UserLayout({ children }) {
    return (
        <html lang="es">
            <body>
                <Navigation />
                <div className="flex">
                    <Aside />
                    {children}
                </div>
            </body>
        </html>
    )
}