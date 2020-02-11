import React from "react";
import "./App.css";
import Axios from "axios";
import ReactPageScroller from "react-page-scroller";
import Home from "./Home";
import Contact from "./Contact";
import About from "./About";
import Products from "./Products";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      pics: [],
      currentPage: null,
      products: []
    };
    this.handlePageChange = this.handlePageChange.bind(this);
  }

  handlePageChange(number) {
    this.setState({ currentPage: number });
  }

  componentDidMount() {
    Axios.get("https://picsum.photos/v2/list").then(response => {
      // Shuffle pics and extract download_url
      const pics = response.data
        .sort(() => Math.random() - 0.5)
        .map(item => item.download_url);
      this.setState({ pics });
    });
    Axios.get(
      "https://europe-west1-ynov-crea-b3.cloudfunctions.net/products"
    ).then(response => {
      const products = response.data.products;
      console.log(products);
      this.setState({ products });
    });
  }

  render() {
    return (
      <div className="App">
        <div className="Menu">
          <a href="#" onClick={() => this.handlePageChange(0)}>
            Home
          </a>
          <a href="#" onClick={() => this.handlePageChange(1)}>
            Products
          </a>
          <a href="#" onClick={() => this.handlePageChange(2)}>
            About
          </a>
          <a href="#" onClick={() => this.handlePageChange(3)}>
            Contact
          </a>
        </div>
        <ReactPageScroller
          pageOnChange={this.handlePageChange}
          customPageNumber={this.state.currentPage}
        >
          <Home pic={this.state.pics.length > 3 ? this.state.pics[0] : ""} />
          <Products
            pic={this.state.pics.length > 3 ? this.state.pics[1] : ""}
            products={this.state.products}
          />
          <About pic={this.state.pics.length > 3 ? this.state.pics[2] : ""} />
          <Contact pic={this.state.pics.length > 3 ? this.state.pics[3] : ""} />
        </ReactPageScroller>
      </div>
    );
  }
}

export default App;
