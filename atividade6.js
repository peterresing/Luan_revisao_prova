const Cartao = ({ titulo, descricao }) => {
  return (
    <div className="cartao">
      <h3>{titulo}</h3>
      <p>{descricao}</p>
    </div>
  );
};

const App = () => {
  return (
    <div>
      <Cartao 
        titulo="React" 
        descricao="Biblioteca JavaScript para construir interfaces de usuário." 
      />
      <Cartao 
        titulo="Components" 
        descricao="Blocos reutilizáveis que dividem a interface em partes independentes." 
      />
      <Cartao 
        titulo="Props" 
        descricao="Dados passados de um componente pai para um componente filho." 
      />
    </div>
  );
};

export default App;
