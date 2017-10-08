import { combineReducers } from 'redux';
import ExpandOnTapReducer from '../screen/ExpandOnTapReduxV1/ExpandOnTapReducer';
import QuestionReducer from '../screen/Question/QuestionReducer';
import QuestionReducerV2 from "../screen/QuestionV2/QuestionReducerV2";
import Reducer from "../screen/AlbumsReduxRender/Reducer";

export default combineReducers({
    expandOnTap: ExpandOnTapReducer,
    question: QuestionReducer,
    questionV2: QuestionReducerV2,
    albums: Reducer
});