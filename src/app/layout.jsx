import "./globals.css";

export const metadata = {
  title: "Resto Mesas",
  description: "Saas para Resto Bar",
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body>
        {children}
      </body>
    </html>
  );
}
