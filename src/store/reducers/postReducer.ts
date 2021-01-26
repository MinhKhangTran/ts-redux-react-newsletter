const initState = {
  posts: [],
  post: null,
  page: 1,
  end: false,
  newsletter: false,
  email: "",
  error: false,
  loading: false,
  prevState: {},
};
export interface Post {
  id: number;
  title: string;
  excerpt: string;
  content: string;
  image: string;
  imagexl: string;
  author: string;
  createdAt: string;
}

export interface postState {
  posts: Post[];
  post: Post | null;
  page: number;
  end: boolean;
  newsletter: boolean;
  email: string;
  error: boolean;
  loading: boolean;
  prevState: Post | {};
}

export enum ActionTypes {
  GET_POSTS = "GET_POSTS",
  LOADING = "LOADING",
  ERROR = "ERROR",
  GET_POST_BY_ID = "GET_POST_BY_ID",
}

export type postAction =
  | { type: ActionTypes.GET_POSTS; payload: any }
  | { type: ActionTypes.ERROR }
  | { type: ActionTypes.LOADING }
  | { type: ActionTypes.GET_POST_BY_ID; payload: Post };

export const postReducer = (
  state: postState = initState,
  action: postAction
): postState => {
  switch (action.type) {
    case ActionTypes.LOADING:
      return { ...state, loading: true };
    case ActionTypes.GET_POSTS:
      return {
        ...state,
        loading: false,
        ...action.payload,
      };
    case ActionTypes.GET_POST_BY_ID:
      return { ...state, loading: false, post: action.payload };
    case ActionTypes.ERROR:
      return { ...state, error: true };
    default:
      return state;
  }
};
