import {Link} from "react-router-dom";


const Navbar = () => {
  return <div className="navbar bg-base-100 flex justify-between items-center">
    <div>
      <a className="btn btn-ghost text-xl">TOYA</a>
      <div className="form-control ml-2">
        <input type="text" placeholder="Search" className="input input-bordered w-24 md:w-auto" />
      </div>
    </div>
    <div className="flex-none gap-2">
      <div className="dropdown dropdown-end">
        <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
          <div className="w-10 rounded-full">
            <img alt="Tailwind CSS Navbar component" src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
          </div>
        </div>
        <ul className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52">
          <li>
            <Link to="/profile" className="justify-between">
              Profile
              <span className="badge badge-info">soon</span>
            </Link>
          </li>
          <li><Link to="/profile/settings">Settings</Link></li>
        </ul>
      </div>
    </div>
  </div>
}

export default Navbar