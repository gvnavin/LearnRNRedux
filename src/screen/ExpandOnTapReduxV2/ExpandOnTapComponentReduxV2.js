import React, { Component } from 'react';
import { Text } from 'react-native';
import { connect } from 'react-redux';
import { expandOnTap } from '../../actions';
import {
    Button,
    Card,
    CardSection
} from '../../components/common';

class ExpandOnTapComponentReduxV2 extends Component {
    
    onButtonPress() {
        const { title, message, isClosed } = this.props;
        const closed = !isClosed;
        console.log("isClosed:" + isClosed)
        console.log("closed:" + closed)
        this.props.expandOnTap({ title, message, isClosed: closed });
    }
    
    renderMessage() {
        console.log("renderMessage this.state.isClosed:" + this.props.isClosed)
        
        if (!this.props.isClosed) {
            
            console.log("renderMessage this.state.isClosed:" + this.props.isClosed)
            console.log(this.props.isClosed)
            
            console.log("renderMessage this.state.message:" + this.props.message)
            console.log(this.props.message)
            
            return (
                <Text style={{ flex: 1 }}>
                    {this.props.message}
                </Text>
            );
        }
    }
    
    render() {
        console.log("this.props.message: " + this.props.message)
        console.log("this.props.title: " + this.props.title)
        return (
            <Card>
                <CardSection>
                    <Button onPress={() => this.onButtonPress()}>
                        {this.props.title}
                    </Button>
                </CardSection>
                <CardSection>
                    {this.renderMessage()}
                </CardSection>
            </Card>
        );
    }
}

const mapStateToProps = ({expandOnTap}) => {
    
    //console.dir(expandOnTap)
    
    const { title, message, isClosed } = expandOnTap;
    
    return { title, message, isClosed };
};

export default connect(mapStateToProps, { expandOnTap })(ExpandOnTapComponentReduxV2);
