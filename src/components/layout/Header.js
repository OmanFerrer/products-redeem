import Points from '../Points';
import logo from '../../images/logo.svg';
import { usePointsMutation } from '../../services/api';

const Header = ({ user }) => {
  const [points] = usePointsMutation();

  const getPoints = () => {
    points(1000);
  };

  return (
    <div className="flex flex-wrap">
      <div className="w-full">
        <nav className="relative flex flex-wrap items-center justify-between px-2 py-3 bg-purple-500">
          <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
            <div className="w-auto px-4 static block justify-start">
              <img className="h-6" src={logo} alt="Logo" />
            </div>
            <div className="flex items-center" id="example-navbar-info">
              <ul className="flex flex-row list-none ml-auto">
                <li className="nav-item">
                  <p className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white">
                    {user?.name}
                  </p>
                </li>
                <li className="nav-item">
                  <div className="cursor-pointer px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white"
                    onClick={getPoints}>
                    <Points text={user?.points} />
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    </div>
  )
};

export default Header;