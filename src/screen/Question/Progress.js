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

class Progress extends Component {
    
    render() {
        return (
            <Card>
                <CardSection>
                    <Text>
                        No of Questions visited: {this.props.questionsVisited}
                    </Text>
                </CardSection>
                <CardSection>
                    <Text>
                        Total Questions: {this.props.totalQuestions}
                    </Text>
                </CardSection>
            </Card>
        );
    }
}

const mapStateToProps = ({ question }) => {
    
    console.log("Progress-mapStateToProps question:", question)
    
    const {  currentQuestion, totalQuestions, questionsVisited } = question;
    
    console.log("Progress-mapStateToProps totalQuestions:", totalQuestions)
    console.log("Progress-mapStateToProps questionsVisited:", questionsVisited)
    
    return { totalQuestions, questionsVisited };
};

export default connect(mapStateToProps, {
})(Progress);
