import React, { Component } from 'react';
import {
    Card,
    CardSection,
} from '../../components/common';
import ExpandOnTapComponentReduxV1 from './ExpandOnTapComponentReduxV1'
import { connect } from 'react-redux';

class ExpandOnTapReduxV1 extends Component {
    
    static navigationOptions = {
        title: 'ExpandOnTapRedux-V1',
    };

    render() {
    
        const { params } = this.props.navigation.state;
        
        console.log("ExpandOnTapReduxV1 : " + params.data)
    
        console.log("ExpandOnTapReduxV1 this.props.message: " + this.props.message)
        console.log("ExpandOnTapReduxV1 this.props.title: " + this.props.title)
        
        return (
            <Card>
                <ExpandOnTapComponentReduxV1 title={"Physics"} message={"Physics message"} isClosed={false}/>
                <ExpandOnTapComponentReduxV1 title={"Chemistry"} message={"Chemistry message"} isClosed={false}/>
                <ExpandOnTapComponentReduxV1 title={"Maths"} message={"Maths message"} isClosed={false}/>
            </Card>
        );
    }
}

const mapStateToProps = ({expandOnTap}) => {
    
    //console.dir(expandOnTap)
    
    const { title, message, isClosed } = expandOnTap;
    
    return { title, message, isClosed };
};


// const mapStateToProps = state => {
//     return {  }
// };

export default connect(mapStateToProps)(ExpandOnTapReduxV1);