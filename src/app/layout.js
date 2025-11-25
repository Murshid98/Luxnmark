import "./globals.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export const metadata = {
  title: "Premium Car Perfume | Exclusive Fragrance & Badge",
  description: "Elevate your driving experience with our exclusive car perfume. Includes a free premium car badge. Order now for just ₹249.",
  keywords: ["car perfume", "car fragrance", "car badge", "premium car accessories", "car scent", "India"],
  openGraph: {
    title: "Premium Car Perfume | Exclusive Fragrance & Badge",
    description: "Elevate your driving experience with our exclusive car perfume. Includes a free premium car badge.",
    url: "https://your-domain.com", // Replace with actual domain
    siteName: "Car Perfume",
    images: [
      {
        url: "/product-perfume.png",
        width: 1200,
        height: 630,
        alt: "Premium Car Perfume and Badge",
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="antialiased bg-brand-black text-white">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
