import { Route } from "react-router-dom"
import { EjemploPage } from "../../pages"

const PublicRouter = () => {
    return (
        <>
        <Route path = '/ejemplo' element = {<EjemploPage/>}/>
        </>
    )
}

export default PublicRouter