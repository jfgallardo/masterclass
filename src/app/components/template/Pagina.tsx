import Cabecalho from "./Cabecalho";
import Footer from "./Footer";
import MenuPrincipal from "./MenuPrincipal";

export default function Pagina(props: any) {
  return (
    <div className="flex flex-col h-screen">
      <Cabecalho />
      <div className="flex flex-grow">
        <MenuPrincipal />
        <div className="flex flex-col flex-1">
          <main className="p-7 flex-1">{props.children}</main>
          <Footer />
        </div>
      </div>
    </div>
  );
}
