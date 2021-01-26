const initState = {
  error: false,
  newsletter: "",
  email: "",
};

interface userState {
  error: boolean;
  newsletter: string;
  email: string;
}

export enum ActionTypes {
  ADD_NEWSLETTER = "ADD_NEWSLETTER",
  ERROR = "ERROR",
  CLEAR_NEWSLETTER = "CLEAR_NEWSLETTER",
}

export type userAction =
  | { type: ActionTypes.ADD_NEWSLETTER; payload: any }
  | { type: ActionTypes.ERROR }
  | { type: ActionTypes.CLEAR_NEWSLETTER };

export const userReducer = (
  state: userState = initState,
  action: userAction
): userState => {
  switch (action.type) {
    case ActionTypes.ERROR:
      return { ...state, error: true };
    case ActionTypes.ADD_NEWSLETTER:
      return { ...state, ...action.payload };
    case ActionTypes.CLEAR_NEWSLETTER:
      return { ...state, newsletter: "", email: "" };
    default:
      return state;
  }
};
