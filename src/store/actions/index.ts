// Hier kommen die action kreators rein
import axios from "axios";
import { Dispatch } from "redux";
import { ActionTypes, postAction } from "../reducers/postReducer";
import {
  ActionTypes as UserActionTypes,
  userAction,
} from "../reducers/userReducer";
const URL_SERV = "http://localhost:3004";

export const getPost = (
  prevState: any,
  page = 1,
  order = "asc",
  limit = 10
) => {
  return async (dispatch: Dispatch<postAction>) => {
    dispatch({ type: ActionTypes.LOADING });
    try {
      const { data } = await axios.get(
        `${URL_SERV}/posts?_page=${page}&_limit=${limit}&_order=${order}&_sort=id`
      );

      const payload = {
        posts: prevState.posts ? [...prevState.posts, ...data] : data,
        page: page,
        end: data.length === 0 ? true : false,
      };

      dispatch({ type: ActionTypes.GET_POSTS, payload });
    } catch (error) {
      dispatch({ type: ActionTypes.ERROR });
    }
  };
};

export const getPostByID = (id: number) => {
  return async (dispatch: Dispatch<postAction>) => {
    dispatch({ type: ActionTypes.LOADING });
    try {
      const { data } = await axios.get(`${URL_SERV}/posts/${id}`);

      dispatch({ type: ActionTypes.GET_POST_BY_ID, payload: data });
    } catch (error) {
      dispatch({ type: ActionTypes.ERROR });
    }
  };
};

export const addNewsletter = (data: any) => {
  return async (dispatch: Dispatch<userAction>) => {
    let payload;
    try {
      const findUser = await axios.get(
        `${URL_SERV}/newsletter?email=${data.email}`
      );
      if (!Array.isArray(findUser.data) || !findUser.data.length) {
        const response = await axios({
          method: "POST",
          url: `${URL_SERV}/newsletter`,
          data: { email: data.email },
        });
        payload = { newsletter: "added", email: response.data };
      } else {
        payload = { newsletter: "failed" };
      }
      dispatch({ type: UserActionTypes.ADD_NEWSLETTER, payload });
    } catch (error) {
      dispatch({ type: UserActionTypes.ERROR });
    }
  };
};

export const clearNewsletter = () => {
  return async (dispatch: Dispatch<userAction>) => {
    dispatch({ type: UserActionTypes.CLEAR_NEWSLETTER });
  };
};
