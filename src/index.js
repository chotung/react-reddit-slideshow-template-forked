import React, { Component } from "react";
import ReactDOM from "react-dom";
import Slider from "./Components/Slider";

import "./styles.css";

// Get cute pictures from reddit!
const POSTS_URL =
  "https://www.reddit.com/r/dogswithjobs/.json?limit=10&raw_json=1";

class App extends Component {
  constructor() {
    super();
    this.state = {
      top5: []
    };
  }

  componentDidMount() {
    this.getRedditPhotos();
  }

  getRedditPhotos = async () => {
    const res = await fetch(POSTS_URL);
    const { data } = await res.json();
    const { children } = data;
    const tempArr = [];
    for (let i = 0; i <= 5; i++) {
      if (children[i].data.thumbnail && i !== 0) {
        tempArr.push({
          id: children[i].data.id,
          thumbnails: children[i].data.thumbnail
        });
      }
    }
    this.setState({
      top5: tempArr
    });
  };

  render() {
    return (
      <section>
        <Slider post={this.state.top5} />
      </section>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
