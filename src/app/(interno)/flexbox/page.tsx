import Caixa from "../../components/Caixa";

export default function Page() {
  return (
    <div>
      <h1>Flexbox</h1>
      <div className="flex">
        <Caixa text="#1" />
        <Caixa text="#2" />
        <Caixa text="#3" />
      </div>
    </div>
  );
}
