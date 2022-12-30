<<<<<<< HEAD
import { useState, useEffect } from "react";

import "./App.css";
import CardList from "./Component/Card-list/Card-list.component";
import SearchBox from "./Component/Search-box/Search-box.component";

const App = () => {
  const [searchField, setSearchField] = useState("");
  const [monsters, setMonsters] = useState([]);
  const [title,setTitle]=useState("")

  const [filteredMonster, setFilteredMonster] = useState(monsters);

  useEffect(() => {
    console.log("effect fired");
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) => setMonsters(users));
  }, []);

  useEffect(() => {
    const newfilteredMonster = monsters.filter((monster) => {
      return monster.name.toLocaleLowerCase().includes(searchField);
    });

    setFilteredMonster(newfilteredMonster);
  }, [monsters, searchField]);

  
  const onSearchChange = (event) => {
    const searchFieldString = event.target.value.toLocaleLowerCase();
    setSearchField(searchFieldString);
  };

  const onTitleChange = (event) => {
    const searchFieldString = event.target.value.toLocaleLowerCase();
    setTitle(searchFieldString);
  };

  return (
    <div className="App">
      <h1 className="app-title">{title}</h1>
      <SearchBox
        className="monster-search-box"
        type="search"
        placeholder="search monster"
        onChangeHandler={onSearchChange}
      />
      <br />

      <SearchBox
        className="monster-search-box"
        type="search"
        placeholder="set title"
        onChangeHandler={onTitleChange}
      />

      <CardList monsters={filteredMonster} />
    </div>
  );
};
=======
// import { Component } from "react";

// import logo from "./logo.svg";
// import "./App.css";

// class App extends Component {
//   constructor() {
//     super();

//     this.state = {
//       name: { firstname: "shyam", lastname: "gupta" },
//       company: "capgemini",
//     };
//   }

//   render() {
//     return (
//       <div className="App">
//         <header className="App-header">
//           <img src={logo} className="App-logo" alt="logo" />
//           <p>
//             Hi {this.state.name.firstname} {this.state.name.lastname} i work at
//             {this.state.company}
//           </p>

//           <button
//             onClick={() => {
//               // this.state.name = "suraj";
//               // console.log(this.state);
//               this.setState(
//                 () => {
//                   return {
//                     name: { firstname: "suraj", lastname: "yadav" },
//                     company: "accenture",
//                   };
//                 },
//                 () => {
//                   console.log(this.state);
//                 }
//               );
//             }}
//           >
//             change name
//           </button>
//         </header>
//       </div>
//     );
//   }
// }

// export default App;

import { Component } from "react";

import logo from "./logo.svg";
import "./App.css";
import CardList from "./Component/Card-list/Card-list.component";
import SearchBox from "./Component/Search-box/Search-box.component";

class App extends Component {
  
  constructor() {
    console.log('constructor');
    super();

    this.state = {
      // monster1 : {
      //   name:"suraj",

      // },
      // monster2 : {
      //   name:"shyam",

      // },
      // monster3 : {
      //   name:"ram",

      // }
      monsters: [],
      searchField: "",
    };
  }

  componentDidMount() {
    console.log("compendidmount");
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) =>
        this.setState(() => {
          return {
            monsters: users,
          };
        })
      );
  }

  onSearchChange = (event) => {
    const searchField = event.target.value.toLocaleLowerCase();

    this.setState(() => {
      return {
        searchField,
      };
    });
  };

  render() {
    
    console.log('render from aapjs');
    const { monsters, searchField } = this.state;
    const { onSearchChange } = this;

    const filteredMonster = monsters.filter((monster) => {
      return monster.name.toLocaleLowerCase().includes(searchField);
    });

    return (
      <div className="App">
      <h1 className="app-title">Monster Rolodex</h1>
      <SearchBox
      className="monster-search-box"
      type="search"
      placeholder="search monster"
       onChangeHandler={onSearchChange}/>
       
        {/* <h1>{this.state.monster1.name}</h1>
      <h1>{this.state.monster2.name}</h1>
      <h1>{this.state.monster3.name}</h1> */}
        {/* {filteredMonster.map((monster) => {
          return <div key={monster.id}><h1>{monster.name}</h1></div>;
        })} */}

        <CardList monsters={filteredMonster} />
      </div>
    );
  }
}
>>>>>>> ff0d43ca2dd6acfaa6925d8ce4fce0f0bc78f518

export default App;

