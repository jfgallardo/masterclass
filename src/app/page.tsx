import Link from "next/link";
import Pagina from "./components/template/Pagina";

export default function Home() {
  return (
    <div>
      <h1 className="font-black">Masterclass Next</h1>
      <nav className="flex flex-co">
        <Link href={"/flexbox"}>Flexbox</Link>
      </nav>
    </div>
  );
}
