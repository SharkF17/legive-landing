let menu;

function Opn() {
  menu = document.getElementById("menu");
  menu.classList.add("w-[100%]");
}

function Clse() {
  menu = document.getElementById("menu");
  menu.classList.remove("w-[100%]");
}

function Navbar() {
  return (
    <>
      <div
        className="fixed top-5 right-5 text-4xl text-legivegold cursor-pointer"
        onClick={() => Opn()}
      >
        <ion-icon name="menu-outline"></ion-icon>
      </div>
      <nav
        className="bg-legiveblack grid fixed w-[0] h-[100vh] place-content-center overflow-hidden duration-1000 text-nowrap z-[100]"
        id="menu"
      >
        <ul className="flex flex-col justify-center gap-y-10 text-white text-3xl overflow-hidden text-nowrap">
          <li className="hover:translate-y-[-5px] duration-500">
            <a href="/espacios" className="hover:textShadow">
              XSPACXOS
            </a>
          </li>
          <li className="hover:translate-y-[-5px] duration-500">
            <a href="/arte" className="hover:textShadow">
              ARTX
            </a>
          </li>
          <li className="hover:translate-y-[-5px] duration-500">
            <a href="/diseño" className="hover:textShadow">
              DXSXÑO
            </a>
          </li>
        </ul>
        <div className="absolute bottom-5 right-5 text-4xl text-legivegold cursor-pointer duration-300 hover:rotate-90 z-[99]">
          <a href="/">
            <ion-icon name="egg-outline"></ion-icon>
          </a>
        </div>
        <div
          className="absolute top-5 right-5 text-4xl text-legivegold cursor-pointer duration-300 hover:rotate-90"
          onClick={() => Clse()}
        >
          <ion-icon name="close-outline"></ion-icon>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
