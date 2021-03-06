import React from 'react';

class Pet extends React.Component {
  constructor(props) {
    super(props);
  }

  amIAdopted = () => {
    return this.props.adoptedArray.includes(this.props.pet.id);
  }

  render() {
    return (
      <div className="card">
        <div className="content">
          <a className="header">Name: {this.props.pet.name} {(this.props.pet.gender === "male") ? "♂" : "♀" }</a>
          <div className="meta">
            <span className="date">Type: {this.props.pet.type}</span>
          </div>
          <div className="description">
            <p>Age: {this.props.pet.age}</p>
            <p>Weight: {this.props.pet.weight}</p>
          </div>
        </div>
        <div className="extra content">
          { this.amIAdopted() ? (<button className="ui disabled button">Already adopted</button>) : (<button id={this.props.pet.id} className="ui primary button" onClick={this.props.onAdoptPet} >Adopt pet</button>)}
        </div>
      </div>
    );
  }
}

export default Pet;
