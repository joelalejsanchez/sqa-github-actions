import ItemCounter from "./components/item-counter";

export default function App() {
  return (
    <div>
      <p>Mi aplicacion de React</p>
      <ItemCounter start={0} item="Manzana" />
      <ItemCounter start={0} item="Manzanas" />
    </div>
  );
}
