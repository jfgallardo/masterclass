import { IconHeartFilled } from "@tabler/icons-react";

export default function Footer() {
  return (
    <footer>
      <div className="bg-zinc-700 p-4 flex justify-end items-center gap-2 text-zinc-400">
        <span>Desenvolvido com</span>
        <IconHeartFilled size={18} className="text-red-800" />
        <strong>Cod3 - {new Date().getFullYear()}</strong>
      </div>
    </footer>
  );
}
