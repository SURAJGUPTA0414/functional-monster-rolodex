<<<<<<< HEAD
import React from "react";
import "./Card.styles.css";

const Card = (props) => {
  const { id, name, email } = props;
  return (
    <div className="card-container" key={id}>
      <img
        alt={`monster ${name}`}
        src={`https://robohash.org/${id}?set=set2&size=180x180`}
      />
      <h2>{name}</h2>
      <p>{email}</p>
    </div>
  );
};

export default Card;
=======
import { Component } from "react";
import './Card.styles.css'

class Card extends Component{
render(){
    
    return(
        
        <div className="card-container" key={this.props.id}>
            <img
              alt={`monster ${this.props.name}`}
              src={`https://robohash.org/${this.props.id}?set=set2&size=180x180`}
            />
            <h2>{this.props.name}</h2>
            <p>{this.props.email}</p>
          </div>

    );

}
}
export default Card;
>>>>>>> ff0d43ca2dd6acfaa6925d8ce4fce0f0bc78f518
