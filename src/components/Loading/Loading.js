import { faSpinner } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Loading = ({ className = '' }) => {

    return (
        <div className="mx-2 text-white">
            <FontAwesomeIcon className={`animate-spin ${className}`} icon={faSpinner} />
        </div>
    );
}

export default Loading;