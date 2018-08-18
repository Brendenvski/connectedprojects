import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Card from './Card.js';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {storyIds: [], title: "Loading..", titles: []};
  }

  componentDidMount() {
    fetch('https://hacker-news.firebaseio.com/v0/topstories.json')
    .then(result => {
      result.json()
      .then(storyIds => {
        this.setState({storyIds});

        storyIds.forEach(id => {
          fetch(`https://hacker-news.firebaseio.com/v0/item/${id}.json`)
          .then(result2 => {
            result2.json().then(story => {
              //let temp = this.state.titles.length ? this.state.titles.slice(0) : [];
              //temp.push(story.title);

              this.state.titles.push(story.title);
              this.setState({titles: this.state.titles});
              // this.setState({title: story.title});
            });
          });
        });


        // fetch(`https://hacker-news.firebaseio.com/v0/item/${this.state.stories[0]}.json`)
        // .then(result2 => {
        //   result2.json().then(story => {
        //     this.setState({title: story.title});
        //   });
        // });
      })
      });
  };



  render() {

    let name = this.state.titles[0] ? this.state.titles[0] : "Loading...";

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Connected Projects</h1>
        </header>
        <p className="App-intro">
          Welcome to your future
        </p>
        {
          this.state.titles.map(title => {
            return (<Card title={title} />)
          })
        }
      </div>
    );
  }
}

export default App;
