import { IState } from '@/types/types';

const initialState: IState = {
  teachers: {
    items: [],
    favorites: [],
  },
  auth: {
    user: {
      name: null,
      email: null,
    },
    isLoggedIn: false,
  },
};

export default initialState;
