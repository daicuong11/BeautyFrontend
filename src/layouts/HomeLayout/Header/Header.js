import { Link } from "react-router-dom";
import { actions, useGlobalContext } from "../../../context";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSignIn, faSignOut, faSun } from "@fortawesome/free-solid-svg-icons";
import { faMoon } from "@fortawesome/free-regular-svg-icons";
import Button from "../../../components/Button/Button";


const Header = (props) => {
    const [state, dispatch] = useGlobalContext();
    const { theme } = state;

    const handleChangeTheme = () => {
        dispatch(actions.setTheme(theme));
    }
    return (
        <header className="h-[48px] bg-gradient-to-r fromh-14 bg-gradient-to-r from-violet-500 to-fuchsia-500">
            <button onClick={handleChangeTheme} className="px-3 py-[6px] bg-zinc-300 text-gray-700 dark:bg-zinc-700 dark:text-gray-300 rounded-md">
                {theme === 'dark' ? <FontAwesomeIcon className="transition-all rotate-45" size="xl" color="white" icon={faSun} /> : <FontAwesomeIcon className="transition-all" size="xl" color="dark" icon={faMoon} />}
            </button>
        </header>
    );
}

export default Header;
