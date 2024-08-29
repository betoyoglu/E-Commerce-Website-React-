import { createStore} from "redux"
import rootReducer from "./rootReducer";
import {devToolsEnhancer} from "redux-devtools-extension"


export function configureAppStore() {
    return createStore(rootReducer, devToolsEnhancer())
}