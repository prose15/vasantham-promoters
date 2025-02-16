import AboutUs from "@/components/AboutUs";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Image from "next/image";

export default function Home() {
  return (
    <main className="relative">
      <Navbar/>
      <Hero/>
      <AboutUs/>
    </main>
  );
}
