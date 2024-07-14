export default function Caixa(props: any) {
  return (
    <div className="w-20 h-20 bg-red-500 border-2 border-zinc-300 rounded-md">
      <span>{props.text}</span>
    </div>
  );
}
