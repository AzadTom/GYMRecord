export const Header = () => {
    return (
      <header className="flex justify-between px-4 py-4 mt-2 bg-black text-white">
        <h1 className="flex  gap-1 items-center text-3xl font-semibold">
          GYM
          <span className="flex flex-col text-xs">
            <span>Fitness</span> <span>records</span>
          </span>
        </h1>
        <nav>
          <ul></ul>
        </nav>
      </header>
    );
  };