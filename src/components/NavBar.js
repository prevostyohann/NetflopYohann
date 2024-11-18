import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import SearchBox from './SearchBox';
import ButtonDeco from './ButtonDeco';

const chemin = '/';
const NomButton = 'Déconnexion';

const NavBar = ({ brandName, navItems, searchValue, setSearchValue, isLoggedIn, setIsLoggedIn }) => {
  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-2xl font-bold text-lime-500">{brandName}</div>
        <ul className="flex space-x-4">
          {navItems.map((item, index) => {
            if (item.label === 'Movies' && !isLoggedIn) return null;
            if (item.label === 'Register' && isLoggedIn) return null;
            if (item.label === 'Login' && isLoggedIn) return null;

            return (
              <li key={index}>
                <NavLink to={item.path} className="text-orange-600 hover:text-gray-400">
                  {item.label}
                </NavLink>
              </li>
            );
          })}
        </ul>
        <div>
        {isLoggedIn && (
  <ButtonDeco chemin={chemin} NomButton={NomButton} setIsLoggedIn={setIsLoggedIn} />
)};
        </div>
      </div>
    </nav>
  );
};

NavBar.propTypes = {
  brandName: PropTypes.string.isRequired,
  navItems: PropTypes.arrayOf(
    PropTypes.shape({
      path: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
    })
  ).isRequired,
  searchValue: PropTypes.string.isRequired,
  setSearchValue: PropTypes.func.isRequired,
  isLoggedIn: PropTypes.bool.isRequired,
  setIsLoggedIn: PropTypes.func.isRequired, // Added prop validation
};

export default NavBar;
