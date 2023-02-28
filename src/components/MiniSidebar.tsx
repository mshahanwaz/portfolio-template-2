export default function MiniSidebar() {
  return (
    <aside className="w-16 p-2 flex flex-col gap-2 items-center bg-gray-100 border-l border-gray-200 backdrop-blur-md">
      <button className="w-full aspect-square bg-gray-200 grid place-items-center rounded-full">
        MS
      </button>
      <button className="mt-auto w-full aspect-square bg-gray-200 grid place-items-center rounded-full">
        H
      </button>
      <button className="w-full aspect-square bg-gray-200 grid place-items-center rounded-full">
        &
      </button>
      <button className="w-full aspect-square bg-gray-200 grid place-items-center rounded-full">
        M
      </button>
    </aside>
  );
}
