import React from "react";
import { StyledFooter } from "../Styles/StyledFooter.js";

export default function Footer() {
  return (
    <StyledFooter>
      <div className="flex-footer contenedor">
        <div>
          <h3 className="titleFooter">Refugios</h3>
          <nav className="footer-menu">
            <a href="#">Ver listado de Refugios</a>
            <a href="#">Donar</a>
            <a href="#">Alertas</a>
          </nav>
        </div>
        <div>
          <h3 className="titleFooter">Sobre Nosotros</h3>
          <nav className="footer-menu">
            <a href="#">Nuestra Historia</a>
            <a href="#">Misión, Visión y Valores</a>
            <a href="#">Carreras</a>
            <a href="#">Politica y Provacidad</a>
            <a href="#">Terminos del Servicio</a>
          </nav>
        </div>
        <div>
          <h3 className="titleFooter">Soporte</h3>
          <nav className="footer-menu">
            <a href="#">Preguntas frecuentes</a>
            <a href="#">Ayuda en Línea</a>
            <a href="#">Confianza y Seguridad</a>
          </nav>
        </div>
      </div>
      <p className="copyright">Todos los derechos reservados - RescuePets</p>
    </StyledFooter>
  );
}
