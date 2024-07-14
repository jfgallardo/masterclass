import {
  IconApps,
  IconHexagonNumber1,
  IconStatusChange,
} from "@tabler/icons-react";
import MenuItem from "./MenuItem";

export default function MenuPrincipal() {
  return (
    <aside className="w-80 bg-zinc-900">
      <nav className="flex flex-col p-5">
        <MenuItem link="/flexbox">
          <IconHexagonNumber1 />
          <span>Flexbox</span>
        </MenuItem>
        <MenuItem link="/pagina">
          <IconApps />
          <span>Pagina</span>
        </MenuItem>
        <MenuItem link="/estado">
          <IconStatusChange />
          <span>Estado</span>
        </MenuItem>
      </nav>
    </aside>
  );
}
