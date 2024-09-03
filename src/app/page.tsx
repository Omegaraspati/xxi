import Image from "next/image";
import Navbar from "./components/Navbar";
import Navbar2 from "./components/Navbar2";
import Carousel from "./components/Carousel";
import GridFilm from "./components/GridFilm";

export default function Home() {
  return (
    <>
    <Navbar/>
    <Navbar2/>
    <Carousel/>
    <GridFilm/>
    </>
  );
}
