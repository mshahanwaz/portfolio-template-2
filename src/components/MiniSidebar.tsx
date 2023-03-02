export default function MiniSidebar() {
  return (
    <aside className="w-16 p-2 flex flex-col gap-2 items-center bg-gray-100 border-l border-gray-200 backdrop-blur-md">
      <a
        href="#"
        className="w-full aspect-square bg-gray-200 grid place-items-center rounded-full hover:bg-gray-300 group"
      >
        <div className="m-auto flex items-center gap-1">
          <div
            className="music-bar"
            style={{ animationDelay: '300ms', height: '16px' }}
          ></div>
          <div
            className="music-bar"
            style={{ animationDelay: '700ms', height: '20px' }}
          ></div>
          <div
            className="music-bar"
            style={{ animationDelay: '500ms', height: '16px' }}
          ></div>
        </div>
      </a>
      <a
        href="#"
        className="mt-auto w-full aspect-square bg-gray-200 grid place-items-center rounded-full"
      >
        H
      </a>
      <a
        href="#"
        className="w-full aspect-square bg-gray-200 grid place-items-center rounded-full"
      >
        &
      </a>
      <a
        href="#"
        className="w-full aspect-square bg-gray-200 grid place-items-center rounded-full"
      >
        M
      </a>
    </aside>
  );
}
