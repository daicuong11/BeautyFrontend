import { useGlobalContext } from "../../context";

const CosmeticsManagementPage = () => {
    const [state,] = useGlobalContext();
    const { currentUser } = state;
    return (
        <div className="w-full h-screen bg-red-100">
            Admin page
            <div className="">{currentUser.fullName}</div>
        </div>
    )
}

export default CosmeticsManagementPage;
