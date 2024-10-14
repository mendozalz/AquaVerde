import useTextAnimation from "../../Hooks/useTextAnimation";
import "./formulario.css";

const FormularioPresentation = () => {
  useTextAnimation();
  return (
    <form>
      <section className="segment">
        <h1 className="tituloForm ml4">
          <span className="letters letters-1">
            Con nosotros, tu inversión es sinónimo de seguridad y valorización.
          </span>
          <span className="letters letters-2">
            ¿Estás listo para adquirir tu lote campestre en Aqua Verde?
          </span>
        </h1>
      </section>

      <label>
        <input type="text" placeholder="Nombre completo" />
      </label>
      <label>
        <input
          type="number"
          min="3"
          max="10"
          placeholder="Número de teléfono"
        />
      </label>
      <label>
        <input type="email" placeholder="Correo electrónico" />
      </label>
      <button className="red" type="button">
        Enviar
      </button>
    </form>
  );
};

export default FormularioPresentation;
