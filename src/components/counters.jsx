//component to call multiple counter components
import React, { Component } from "react";
import Counter from "./counter";

class Counters extends Component {
  //button.btn.btn-primary.btn-small.m-2
  render() {
    return (
      <div>
        <button
          onClick={this.props.onReset}
          className="btn btn-primary btn-small m-2"
        >
          Reset
        </button>
        {this.props.counters.map(counter => (
          //passing event handler to onDelete from Counter to modify state values in this component
          <Counter
            //key is used as general syntax in react that an array should have a unique key prop
            key={counter.cs}
            //event property to delete calling method handleDelete
            onDelete={this.props.onDelete}
            onIncrement={this.props.onIncrement}
            counter={counter} //passing all the data about the counter object instead of calling individual attributes.
            //value={counter.value}
            //id={counter.id}
          />
        ))}
      </div>
    );
  }
}

export default Counters;
