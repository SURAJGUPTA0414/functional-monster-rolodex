<<<<<<< HEAD
import React from 'react';
import './Search-box.styles.css'


const SearchBox = (props) => {
    const {className,type,placeholder,onChangeHandler} = props;
    
        return(
            <input
          className={`search-box ${className}`}
          type={type}
          placeholder={placeholder}
          onChange={onChangeHandler}
        />
        );
    }

=======
import React,{Component} from "react";
import './Search-box.styles.css'


class SearchBox extends Component{
    render(){
        return(
            <input
          className={`search-box ${this.props.className}`}
          type={this.props.type}
          placeholder={this.props.placeholder}
          onChange={this.props.onChangeHandler}
        />
        );
    }
}
>>>>>>> ff0d43ca2dd6acfaa6925d8ce4fce0f0bc78f518

export default SearchBox;