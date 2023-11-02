import config from "../config";

const USER_ROUTES = {
    loginUser: `${config.URL_BACK}/loginUser`,
    registerUser: `${config.URL_BACK}/registerUser`,
}

const ADMIN_ROUTES = {
    ban: `${config.URL_BACK}/ban`
}

export {
    USER_ROUTES,
    ADMIN_ROUTES
}

// import {USER_ROUTES} from '...'
// axios(USER_ROUTES.registerUser)