import React from "react";

class App extends React.Component {
  state = {
    person: {
      fullName: "Mounir",
      bio: "I'm a JS developer",
      imgsrc: "https://eww-wp-new.s3.ap-south-1.amazonaws.com/wp-content/uploads/2021/11/22114256/best-combine-a-node.js-with-a-react.js-for-web-development.jpg",
      profession: "developer",
    },
    shows: false,
  };

  toggle = () => {
    this.setState({ shows: !this.state.shows });
  };

  render() {
    return (
      <div>
        <button onClick={this.toggle}>Toggle</button>
        {this.state.shows === true ? (
          <>
        <h1>{this.state.person.fullName}</h1> 
        <h2>{this.state.person.bio}</h2>
        <h2>{this.state.person.profession}</h2>
        <img src={this.state.person.imgsrc} alt="profile"/>
        </>
        ) 
        : null}
      </div>
    );
  }
}

export default App;