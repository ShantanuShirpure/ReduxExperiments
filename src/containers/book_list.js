import React, {Component} from 'react';
import {connect} from 'react-redux';
import {selectBook} from '../actions/index';
import {bindActionCreators} from 'redux';

class BookList extends Component{
    renderList() {
        return this.props.books.map((book)=>{
            return(
                <li 
                key={book.title}
                onClick={()=>this.props.selectBook(book)}
                className="list-group-item">
                {book.title}
                </li>
            );
        });
    }


render() {
    return(
        <ul className="list-group col-sm-4">
        {this.renderList()}
        </ul>
        
        )
    }
}

function mapStateToProps(state){
// this function will assign application state to props, chose variables to be assigned, state has state for whole app
return {
    books: state.books
};
}

function mapDispatchtoProps(dispatch){
    // action is passed to props using this function
    return bindActionCreators({selectBook:selectBook},dispatch);
}


export default connect(mapStateToProps,mapDispatchtoProps)(BookList);
