import { reducerTypeMyPortofolios } from '../../constanta';
import portos from './Porto';

const initialState = {
  myPortofolios: portos,
  myPortofolioDetail: {}
}

function myPortofoliosReducer(state = initialState, actions) {
  const { type, payload } = actions;

  if (type === reducerTypeMyPortofolios.myPortofolios) {
    return { ...state, myPortofolios: payload };
  } else if (type === reducerTypeMyPortofolios.myPortofolioDetail) {
    return { ...state, myPortofolioDetail: payload };
  }

  return state;
}

export default myPortofoliosReducer;