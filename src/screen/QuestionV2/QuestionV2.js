import React, { Component } from 'react';
import {
    Card,
    CardSection,
    Button
} from '../../components/common';
import { connect } from 'react-redux';
import {
    nextQuestionV2,
    previousQuestionV2
} from './QuestionActionV2';
import { Text } from 'react-native';
import ProgressV2 from './ProgressV2';

class QuestionV2 extends Component {
    
    static navigationOptions = {
        title: 'QuestionV2',
    };
    
    onPreviousQuestion() {
        const { currentQuestion, totalQuestions, questionsVisited } = this.props;
        console.log("currentQuestion: ", currentQuestion)
        this.props.previousQuestionV2({ currentQuestion, totalQuestions, questionsVisited });
    }
    
    onNextQuestion() {
        const { currentQuestion, totalQuestions, questionsVisited } = this.props;
        console.log("onNextQuestion currentQuestion: ", currentQuestion)
        console.log("onNextQuestion totalQuestions: ", totalQuestions)
        console.log("onNextQuestion questionsVisited: ", questionsVisited)
        console.log("onNextQuestion: ", this.props)
        this.props.nextQuestionV2({ currentQuestion, totalQuestions, questionsVisited });
    }
    
    render() {
        return (
            <Card>
                <ProgressV2/>
                <Card>
                    <CardSection>
                        <Text>
                            {this.props.currentQuestion}. Question: The characters are
                        </Text>
                    </CardSection>
                    <CardSection>
                        <Text>
                            Option 0: Rajini {"\n\n"}
                            Option 1: Kamal {"\n\n"}
                            Option 2: Elon {"\n\n"}
                            Option 3: Bezos {"\n\n"}
                        </Text>
                    </CardSection>
                    <CardSection>
                        <Button onPress={() => this.onPreviousQuestion()}>
                            Previous Question
                        </Button>
                        <Button onPress={() => this.onNextQuestion()}>
                            Next Question
                        </Button>
                    </CardSection>
                </Card>
            </Card>
        );
    }
}

const mapStateToProps = ({ questionV2 }) => {
    
    console.log("Question-mapStateToProps questionV2:", questionV2)
    
    const { currentQuestion, totalQuestions, questionsVisited } = questionV2;
    
    console.log("Question-mapStateToProps currentQuestion", currentQuestion)
    
    return { currentQuestion, totalQuestions, questionsVisited };
};

export default connect(mapStateToProps, {
    nextQuestionV2,
    previousQuestionV2
})(QuestionV2);
