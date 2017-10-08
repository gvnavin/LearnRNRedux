import { combineReducers } from 'redux';
import ExpandOnTapReducer from './ExpandOnTapReducer';
import QuestionReducer from '../screen/Question/QuestionReducer';
import QuestionReducerV2 from "../screen/QuestionV2/QuestionReducerV2";

export default combineReducers({
    expandOnTap: ExpandOnTapReducer,
    question: QuestionReducer,
    questionV2: QuestionReducerV2
});
