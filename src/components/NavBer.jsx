import Logo from '../assets/logo.png';
const NavBer = () => {
  return (
    <>
      <div className="container mx-auto">
        <div className="navbar">
          <div className="flex-1">
            <a className="text-xl">
              <img src={Logo} alt="logo" className="text-3lx" />
            </a>
          </div>
          <div className="flex-none">
            <ul className="flex gap-6 items-center justify-center text-2xl">
              <li>
                <a>Home</a>
              </li>
              <li>
                <a>Fixture</a>
              </li>
              <li>
                <a>Teams</a>
              </li>
              <li>
                <a>Schedules</a>
              </li>
              <li className="mx-1">
                <button className="btn">coin</button>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default NavBer;
