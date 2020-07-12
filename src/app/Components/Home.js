import React from 'react';
import ReactDOM from 'react-dom';
import {connect} from 'react-redux';
import {Message, Button, Input} from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';
import { DataItem } from './DataItem';
import { ActionConstants } from '../Constants/ActionConstants';

class Home extends React.Component{
    constructor(props){
        super(props);
        this.state={
            searchValue: null
        }
        this.saveListener = this.saveListener.bind(this);
        this.actionCreator = this.actionCreator.bind(this);
        this.likeListener = this.likeListener.bind(this);
        this.dislikeListener = this.dislikeListener.bind(this);
        this.onInputChangeListener = this.onInputChangeListener.bind(this);
    }
    /**
     * On Input change listener
     * @param {event} e 
     */
    onInputChangeListener(e){
        if(e.charCode === 13){
            this.saveListener(e.target.value);
        }
        this.setState({searchValue:e.target.value})
    }

    /**
     * Submit Listener
     * @param {event} data 
     */
    saveListener(data){
        const value = typeof data == 'string' && data || this.state.searchValue;
        if(value.length <10){
            alert("Minimum Length Expected is 10")
        } else {
            this.setState({searchValue:''})
            this.props.actionHandler({type: ActionConstants.ADD_DATA, value: value});
        }
    }

    /**
     * On Dislike Click Listener
     * @param {event} event 
     */
    dislikeListener(event){
        event.persist();
        this.props.actionHandler({type: ActionConstants.UPDATE_DISLIKE_COUNT, value: event.target.id});
    }

    /**
    * On Like Click Listener
    * @param {event} event 
    */
    likeListener(event){
        event.preventDefault();
        this.props.actionHandler({type: ActionConstants.UPDATE_LIKE_COUNT, value: event.target.id});
    }
    
    actionCreator(type, value){
        return {
            type,
            value  
        }
    }

    render(){
        return(
            <div>
                <div className='input-bar'>
                    <Input 
                        className = 'input-box'
                        type="text"
                        id="description"
                        placeholder="Enter a new topic title" 
                        onChange = {this.onInputChangeListener}
                        onBlur= {this.onInputChangeListener}
                        value={this.state.searchValue}
                    />
                    <Button primary onClick={this.saveListener}>Submit</Button>
                </div>
                {this.props.data.length ? 
                    this.props.data.map((item, index) => {
                        return (<DataItem item={item} key={index} dislikeListener={this.dislikeListener} likeListener={this.likeListener}/>)
                    }) : 
                <Message>
                    <Message.Header>No Item Present</Message.Header>
                    <p>
                    Please add items to display.
                    </p>
              </Message>}
            </div>
        )
    }
}

function mapStateToProps(state){
    return {
        data: state.data
    }
}

function mapDispatchToProps(dispatch){
    return {
        actionHandler(data){
        return dispatch(data)
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);