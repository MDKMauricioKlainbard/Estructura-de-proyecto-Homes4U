import { useSelector } from "react-redux";
import PrivateRouter from "./PrivateRouter";
import PublicRouter from "./PublicRouter";
import { Routes } from "react-router-dom";

const Routing = () => {
    const { isAuth } = useSelector(state => state.auth)
    return (
        <Routes>
            {isAuth ?
                <>
                    <PrivateRouter />
                    <PublicRouter />
                </> :
                <PublicRouter />}
        </Routes>
    )
}

export default Routing