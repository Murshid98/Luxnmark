import Hero from "../components/Hero";
import ProductCard from "../components/ProductCard";
import ContactForm from "../components/ContactForm";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Hero />
      <ProductCard />
      <ContactForm />
    </div>
  );
}
