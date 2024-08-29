//tüm stateleri topladığım yer

import {combineReducers} from "redux";
import cartReducer from "./reducers/cartReducer";

const rootReducer = combineReducers({
    cart : cartReducer //adını cart yaptım
})

export default rootReducer;