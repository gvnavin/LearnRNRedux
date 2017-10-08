import React, { Component } from 'react';
import {
    Card,
    CardSection
} from '../../components/common';
import { connect } from 'react-redux';
import { Text } from 'react-native';

class ProgressV2 extends Component {
    
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

const mapStateToProps = ({ questionV2 }) => {
    
    console.log("Progress-mapStateToProps questionV2:", questionV2)
    
    const {  currentQuestion, totalQuestions, questionsVisited } = questionV2;
    
    console.log("Progress-mapStateToProps totalQuestions:", totalQuestions)
    console.log("Progress-mapStateToProps questionsVisited:", questionsVisited)
    
    return { totalQuestions, questionsVisited };
};

export default connect(mapStateToProps, {
})(ProgressV2);
