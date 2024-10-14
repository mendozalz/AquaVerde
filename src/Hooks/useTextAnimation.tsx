import { useEffect, useRef } from "react";
import anime from "animejs";

// Hook personalizado para manejar la animación del texto
const useTextAnimation = () => {
  const animationRef = useRef<anime.AnimeTimelineInstance | null>(null);

  useEffect(() => {
    const ml4 = {
      opacityIn: [0, 1],
      scaleIn: [0.7, 1],
      scaleOut: 1.1,
      durationIn: 800,
      durationOut: 600,
      delay: 2500,
    };

    // Crear la animación usando animejs
    animationRef.current = anime
      .timeline({ loop: true })
      .add({
        targets: ".ml4 .letters-1",
        opacity: ml4.opacityIn,
        scale: ml4.scaleIn,
        duration: ml4.durationIn,
      })
      .add({
        targets: ".ml4 .letters-1",
        opacity: 0,
        scale: ml4.scaleOut,
        duration: ml4.durationOut,
        easing: "easeInExpo",
        delay: ml4.delay,
      })
      .add({
        targets: ".ml4 .letters-2",
        opacity: ml4.opacityIn,
        scale: ml4.scaleIn,
        duration: ml4.durationIn,
      })
      .add({
        targets: ".ml4 .letters-2",
        opacity: 0,
        scale: ml4.scaleOut,
        easing: "easeInExpo",
        delay: ml4.delay,
      })
      .add({
        targets: ".ml4",
        opacity: 0,
        duration: 500,
        delay: 500,
      });

    return () => {
      if (animationRef.current) animationRef.current.pause();
    };
  }, []);
};

export default useTextAnimation;
