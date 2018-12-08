//imrc import react components snippet
import React, { Component } from "react";

//cc class component snippet
class Counter extends Component {
  //state objects include any data in this counter class
  /*state = {
    value: this.props.counter.value,
    tags: [
      "tag1", "tag2", "tag3"
    ]
  };*/
  styles = {
    fontSize: 10,
    fontWeight: "bold"
  };

  //use this life cycle method to optimize app so you don't get multi ajax calls
  componentDidUpdate(prevProps, prevState) {
    console.log("prevProps", prevProps);
    console.log("prevState", prevState);
    if (prevProps.counter.value !== this.props.counter.value) {
      //Ajax call and get new data from the server
    }
  }
  //render method that will create a new react element that has div with 3 children (span, button, list)
  render() {
    //console.log("props", this.props);

    return (
      //(not used anymore)created react.fragment instead of <div> so we don't have extra div due to index.html
      //<h4>Product ID #{this.props.id}</h4>
      <div>
        <div style={this.styles} className={this.getBadgeClasses()}>
          {this.formatCount()}
        </div>
        <button
          //onClick={this.handleIncrement} was deleted
          onClick={() => this.props.onIncrement(this.props.counter)}
          className="btn btn-secondary btn-sm"
        >
          Increment
        </button>
        <button
          onClick={() => this.props.onDelete(this.props.counter.cs)}
          className="btn btn-danger btn-sm m-2"
        >
          Delete
        </button>
      </div>
    );
  }
  /*this constructor method binds "this" to the onClick event handler method called handleIncrement for the button
  //need this binding method to allow method handleIncrement() to see state attributes
  constructor() {
    super();
    this.handleIncrement = this.handleIncrement.bind(this);
  }
  //method to handle increment clicks and setState updates count in state object
  handleIncrement(product) {
    //console.log("Increment Clicked", this);
    console.log(product);
    this.setState({ count: this.state.count + 1 });
  }
  handleIncrement = () => {
    this.setState({ value: this.state.value + 1 });
  };*/
  //pass arguments to the handleIncrement method.  this is too cumbersome so instead I used an inline fuction, see onClick
  //doHandleIcrement = () => {
  //this.handleIncrement({ id: 1 });};
  //adding

  getBadgeClasses() {
    //use let since we are modifying the classes variable.  add warning or primary to end ot badge-
    let classes = "badge m-2 badge-";
    classes += this.props.counter.value === 0 ? "warning" : "primary";
    return classes;
  }
  //adding formatCount Method. used to update count property in object "state"
  formatCount() {
    //destructure the object and calling the count property so don't have to keep typing this.state.count
    const { value } = this.props.counter;
    return value === 0 ? "Zero " : value; //if count = 0 then return "zero else return count value"
  }
  //rendertags is a method to create list iteratively if tags array has values and outputs text if array is empty
  /*renderTags() {
    if (this.state.tags.length === 0) return null;
    return (
      <ul>
        {this.state.tags.map(tag => (
          <li key={tag}>{tag}</li>
        ))}
      </ul>
    );
  }*/
}

export default Counter;

/*
<React.Fragment>
        <span style={this.styles} className={this.getBadgeClasses()}>
          {this.formatCount()}
        </span>
        <button className="btn btn-secondary btn-sm">Increment</button>
        <ul>
          {this.state.tags.map(tag => (
            <li key={tag}>{tag}</li>
          ))}
        </ul>
      </React.Fragment>
*/
