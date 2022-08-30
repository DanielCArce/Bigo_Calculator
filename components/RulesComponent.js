const RulesComponent = (props) => {
  return (
    <div {...props}>
      <div className="mb-3">
        <h1 className="font-bold text-4xl">Calculadora de Bigo</h1>
        <h2 className="font-light text-2xl">Balance de % Exterior</h2>
      </div>
      <h3 className="mb-2">Aclaración del calculador</h3>
      <ul className="list-disc list-outside">
        <li className="mb-4">
          Este calculador no esta asociado de ninguna manera con Bigo Live ni
          ninguna empresa asociada.
        </li>
        <li className="mb-4">
          Los calculos se realizan de acuerdo a la información suministrada por
          el usuario.
        </li>
        <li className="mb-4">
          Se recomienda agregar 100 al monto calculado para evitar margen error.
        </li>
      </ul>
    </div>
  );
};
export default RulesComponent;
