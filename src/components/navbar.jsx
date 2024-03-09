export default function Navbar() {
  return (
    <>
      <div className="fixed top-5 right-5 text-4xl text-legivegold cursor-pointer">
        <ion-icon name="menu-outline"></ion-icon>
      </div>
      <nav className=" grid fixed w-[100%] h-[100vh] place-content-center">
        <ul className="flex flex-col justify-center gap-y-10 text-white text-3xl">
          <li className="hover:translate-y-[-5px] duration-500">
            <a href="#" className="hover:textShadow">
              Inicio
            </a>
          </li>
          <li className="hover:translate-y-[-5px] duration-500">
            <a href="#" className="hover:textShadow">
              Quienes somos
            </a>
          </li>
          <li className="hover:translate-y-[-5px] duration-500">
            <a href="#" className="hover:textShadow">
              Servicios
            </a>
          </li>
          <li className="hover:translate-y-[-5px] duration-500">
            <a href="#" className="hover:textShadow">
              Nuestros Clientes
            </a>
          </li>
          <li className="hover:translate-y-[-5px] duration-500">
            <a href="#" className="hover:textShadow">
              Contacto
            </a>
          </li>
        </ul>
      </nav>
    </>
  );
}
