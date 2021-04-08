import React, { Component } from "react";
import ReactDOM from "react-dom";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Image from "./Components/Image";



import "./styles.css";
const POST_LIMIT = 5
// Get cute pictures from reddit!
const POSTS_URL =
  `https://www.reddit.com/r/dogswithjobs/.json?limit=${POST_LIMIT}&raw_json=1`;

class App extends Component {
  constructor() {
    super();
    this.state = {
      posts: [],
			slideShowOptions: {
				autoPlay:true,
				interval:500,
				infiniteLoop:true,
				showThumbs:false
			}
    };
  }

  componentDidMount() {
    this.getRedditPostWithImages()
  }

	renderImages = () => {
		return this.state.posts.map((post) => {
			const imageObject = post.preview.images.[0]
			return <Image key={imageObject.id} img={imageObject.source.url} />;
		});
	};

	getPost = async () => {
		const res = await fetch(POSTS_URL);
		const {data} = await res.json();
		return data
	}

	getRedditPostWithImages = async () => {
		const data = await this.getPost()
		
		const posts = data.children.map(post => {
			return post.data
		})

		const images = posts.filter(image => {
			return image.preview
		})
		this.setState({posts: images})
	}

  render() {
		const { autoPlay, interval, infiniteLoop, showThumbs } = this.state.slideShowOptions
    return (
      <section>
				<Carousel
	      	autoPlay={autoPlay}
      		interval={interval}
      		infiniteLoop={infiniteLoop}
      		showThumbs={showThumbs}				
				>
					{this.renderImages()}
				</Carousel>
      </section>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
