import React, { Component } from 'react';
import Header from './component/shared/header/header.js';
import Footer from './component/shared/footer/footer.js';
import './Main.css';

class Main extends Component {
  render() {
    return (
      <div className="main">
        <Header />
        <Footer />
      </div>
    );
  }
}

export default Main;
