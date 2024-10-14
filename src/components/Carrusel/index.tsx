import { useEffect, useRef, useState } from "react";
import CarruselPresentation from "./CarruselPresentation";

interface Carrusel {
  background: string;
  icon: string;
  sub: string;
}

const Carrusel = () => {
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const intervalRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const slides: Carrusel[] = [
    {
      background:
        "https://res.cloudinary.com/dvuyt52aq/image/upload/v1724359223/IMAGINARIOS_URBANISMO_1_aglkau.jpg",
      icon: "./favicon.jpg",
      sub: "Urbanismo de Primer Nivel Seguridad 24/7",
    },
    {
      background:
        "https://res.cloudinary.com/dvuyt52aq/image/upload/v1724359405/IMAGINARIOS_URBANISMO_2_kkxoh7.jpg",
      icon: "./favicon.jpg",
      sub: "Senderos ecológicos",
    },
    {
      background:
        "https://res.cloudinary.com/dvuyt52aq/image/upload/v1724359405/IMAGINARIOS_URBANISMO_3_jmusnz.jpg",
      icon: "./favicon.jpg",
      sub: "Lago Privado",
    },
    {
      background:
        "https://res.cloudinary.com/dvuyt52aq/image/upload/v1724359406/IMAGINARIOS_URBANISMO_5_lqbmi1.jpg",
      icon: "./favicon.jpg",
      sub: "Cercanía a la ciudad",
    },
    {
      background:
        "https://res.cloudinary.com/dvuyt52aq/image/upload/v1724359405/IMAGINARIOS_URBANISMO_4_ud0qgx.jpg",
      icon: "./favicon.jpg",
      sub: "Vías en excelente estado",
    },
  ];

  useEffect(() => {
    intervalRef.current = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % slides.length);
    }, 4000);

    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [slides.length]);

  const handleSlideClick = (index: number): void => {
    setActiveIndex(index);
    if (intervalRef.current) clearInterval(intervalRef.current);
    intervalRef.current = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % slides.length);
    }, 4000);
  };
  return (
    <CarruselPresentation
      slides={slides}
      activeIndex={activeIndex}
      handleSlideClick={handleSlideClick}
    />
  );
};

export default Carrusel;
