import { useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import * as action from "../store/actions";

export const useAction = () => {
  const dispatch = useDispatch();
  return bindActionCreators(action, dispatch);
};
