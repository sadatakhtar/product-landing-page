import React, { Component } from 'react';
import Footer from './Components/Footer';
import Header from './Components/Header';
import './App.css';
import Form from './Components/Form';
import Bulletpoints from './Components/Bulletpoints';
import Video from './Components/video';

class App extends Component {
  render() {
    return (
   <div>
     <Header />
     <Form />
     <Video />
     <Footer />
   </div>
    );
  }
}

export default App;
