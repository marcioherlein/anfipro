import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "AnfiPro | Gestión de Propiedades Airbnb en Argentina",
  description: "Maximizá tus ingresos en Airbnb con AnfiPro. Gestión profesional de propiedades, atención a huéspedes y optimización de listados para anfitriones en Argentina.",
  keywords: "Airbnb Argentina, gestión de propiedades, anfitrión Airbnb, alquiler temporario, Buenos Aires, administración Airbnb, property management Argentina",
  openGraph: {
    title: "AnfiPro | Gestión de Propiedades Airbnb en Argentina",
    description: "Maximizá tus ingresos en Airbnb con gestión profesional de tu propiedad en Argentina.",
    locale: "es_AR",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
