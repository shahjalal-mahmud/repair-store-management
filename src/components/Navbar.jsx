const Navbar = () => {
  return (
    <div className="navbar bg-base-200 shadow-md">
      <div className="flex-1">
        <a className="btn btn-ghost normal-case text-xl">Repair Store</a>
      </div>
      <div className="flex-none hidden md:flex">
        <ul className="menu menu-horizontal px-1">
          <li><a href="#home">Home</a></li>
          <li><a href="#features">Features</a></li>
          <li><a href="#pricing">Pricing</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
