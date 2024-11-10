import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = () => {
  const location = useLocation(); // Hook para acceder a la ubicación actual

  useEffect(() => {
    window.scrollTo(0, 0); // Desplazamiento al inicio de la página
  }, [location]); // Se ejecuta cada vez que cambie la ubicación

  return null; // No renderiza nada
};

export default ScrollToTop;
