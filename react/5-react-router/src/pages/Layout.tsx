import { NavLink, Outlet } from "react-router-dom";

export const Layout = () => {
  return (
    <>
      <header>
        <nav>
          <ul>
            <li>
              <NavLink to={"/"}>Hem</NavLink>
            </li>
            <li>
              <NavLink to={"/about"}>Om oss</NavLink>
            </li>
            <li>
              <NavLink to={"/contact"}>Kontakt</NavLink>
            </li>
            <li>
              <NavLink to={"/movies"}>Filmer</NavLink>
            </li>
          </ul>
        </nav>
      </header>
      <main>
        <Outlet></Outlet>
      </main>
      <footer></footer>
    </>
  );
};
