"use client";
import { IconSend, IconTrash } from "@tabler/icons-react";
import { useState } from "react";

export default function Page() {
  const [tarefas, setTarefas] = useState<string[]>([]);
  const [nome, setNome] = useState<string>("");

  function adicionarTarefa() {
    if (nome) {
      setTarefas([...tarefas, nome]);
      setNome("");
    }
  }

  function exluirTarefa(i: number) {
    setTarefas(tarefas.filter((_, index) => index !== i));
  }

  return (
    <div className="flex flex-col gap-10">
      <div className="flex flex-col">
        <label htmlFor="tarefa">Tarefa</label>
        <div className="flex items-center">
          <input
            id="tarefa"
            type="text"
            value={nome}
            onChange={(e) => setNome(e.target.value)}
            className="bg-zinc-800 px-4 py-2 flex-grow"
            onKeyUp={(e) => {
              if (e.key === "Enter") {
                adicionarTarefa();
              }
            }}
          />
          <button className="bg-blue-500 p-2" onClick={adicionarTarefa}>
            <IconSend />
          </button>
        </div>
      </div>
      <div className="flex flex-col gap-4">
        <h2 className="text-xl font-black text-zinc-400">Lista de tarefas</h2>
        <ul className="flex flex-col gap-2">
          {tarefas.map((tarefa, i) => {
            return (
              <li
                key={i}
                className="bg-zinc-800 py-2 px-4 rounded-md flex items-center"
              >
                <span className="flex-grow">{tarefa}</span>
                <IconTrash
                  size={18}
                  className="text-red-500 hover:cursor-pointer"
                  onClick={() => exluirTarefa(i)}
                />
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
