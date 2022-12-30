import React from "react";
import './Card-list.styles.css'
import Card from "../Card/Card.component";

<<<<<<< HEAD
const CardList = (props) => {
  
    const { monsters } = props;
=======
class CardList extends React.Component {
  render() {
    const { monsters } = this.props;
>>>>>>> ff0d43ca2dd6acfaa6925d8ce4fce0f0bc78f518
    return (
      <div className="card-list">
        {monsters.map((monster) => {

            const {name,id,email} = monster;
            return(
                <Card 
                    name={name}
                    id={id}
                    email={email}
                />
          
        )})}
      </div>
    );
  }
<<<<<<< HEAD

=======
}
>>>>>>> ff0d43ca2dd6acfaa6925d8ce4fce0f0bc78f518

export default CardList;
