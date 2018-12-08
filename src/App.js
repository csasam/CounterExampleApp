import React, { Component } from "react";
//import logo from './logo.svg';
import NavBar from "./components/navBar";
import "./App.css";
//import Counter from "./components/counter";
import Counters from "./components/counters";

class App extends Component {
  state = {
    counters: [{ cs: 1, value: 0 }, { cs: 2, value: 0 }, { cs: 3, value: 0 }]
  };
  //lifecycle hooks phases in react (mount phase, update phase, Unmount phase)
  constructor(props) {
    super(props);
    console.log("App - Constructor", this.props);
    //this.state = this.props.something;
  }
  //this is where you make ajax calls to get data from the server
  componentDidMount() {
    console.log("App - Mounted");
    //Ajax Call
    this.setState({
      /*ajax call here*/
    });
  }

  handleIncrement = counter => {
    //console.log("1st counter", counter);
    const counters = [...this.state.counters];
    const index = counters.indexOf(counter);
    //create a clone of counter array so you don't edit state counters.  gets index of what is being clicked.
    counters[index] = { ...counter };
    counters[index].value++;
    console.log(this.state.counters[index]);
    this.setState({ counters });
  };
  handleReset = () => {
    //call a new array and reset to zero using arrow function and map function, then return
    const counters = this.state.counters.map(c => {
      c.value = 0;
      return c;
    });
    console.log("Handler Reset", counters);
    this.setState({ counters });
  };
  handleDelete = counterId => {
    console.log("Handler Delete", counterId);
    //list comprehension to use filter method that only shows items that was not clicked.
    const counters = this.state.counters.filter(c => c.cs !== counterId);
    this.setState({ counters });
  };
  render() {
    return (
      <React.Fragment>
        <NavBar
          //creates counter of total items in array that are not zero
          totalCounters={this.state.counters.filter(c => c.value > 0).length}
        />
        <main className="container">
          <Counters
            //events that are raised by the Counters component
            counters={this.state.counters}
            onReset={this.handleReset}
            onIncrement={this.handleIncrement}
            onDelete={this.handleDelete}
          />
        </main>
      </React.Fragment>
    );
  }
}

export default App;
