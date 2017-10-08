import React, { Component } from 'react';
import {
    Card,
    CardSection,
    Button
} from '../../components/common';
import { connect } from 'react-redux';
import {
    nextQuestion,
    previousQuestion
} from './QuestionAction';
import { Text } from 'react-native';
import Progress from './Progress';

class Question extends Component {
    
    static navigationOptions = {
        title: 'Question-Redux',
    };
    
    onPreviousQuestion() {
        const { currentQuestion, totalQuestions, questionsVisited } = this.props;
        console.log("currentQuestion: ", currentQuestion)
        this.props.previousQuestion({ currentQuestion, totalQuestions, questionsVisited });
    }
    
    onNextQuestion() {
        const { currentQuestion, totalQuestions, questionsVisited } = this.props;
        console.log("currentQuestion: ", currentQuestion)
        this.props.nextQuestion({ currentQuestion, totalQuestions, questionsVisited });
    }
    
    render() {
        return (
            <Card>
                <Progress/>
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

const mapStateToProps = ({ question }) => {
    
    console.log("Question-mapStateToProps question:", question)
    
    const { currentQuestion, totalQuestions, questionsVisited } = question;
    
    console.log("Question-mapStateToProps currentQuestion", currentQuestion)
    
    return { currentQuestion, totalQuestions, questionsVisited };
};

export default connect(mapStateToProps, {
    nextQuestion,
    previousQuestion
})(Question);
