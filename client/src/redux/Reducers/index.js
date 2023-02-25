import { combineReducers } from "redux";
import authReducer from "./authReducer";
import postReducer from "./postReducer";
import bookingReducer from "./bookingReducer";
import messagesReducer from "./contactUsReducer";
import myPostsReducer from "./myPostsReducer";
import subscriptionsReducer from "./subscriptionsReducer";

export default combineReducers({
  authReducer,
  postReducer,
  bookingReducer,
  messagesReducer,
  myPostsReducer,
  subscriptionsReducer,
});
