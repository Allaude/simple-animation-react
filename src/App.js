import React, { Component } from "react";
import Transition from 'react-transition-group/Transition';
import "./App.css";
import Modal from "./components/Modal/Modal";
import Backdrop from "./components/Backdrop/Backdrop";
import List from "./components/List/List";

class App extends Component {

  state = {
    isShow: false,
    isShowBlock: false
  }

  onOpenModal = () => {
    this.setState({isShow: true});
  }

  onCloseModal = () => {
    this.setState({isShow: false});
  }


  render() {
    const animationTiming = {
      enter: 400,
      exit: 1000
    }
    return (
      <div className="App">
        <h1>React Animations</h1>
        <button className="Button" onClick={() => this.setState(prevState => ({isShowBlock: !prevState.isShowBlock}))}>Toggle Transition</button>
        <hr />
        <Transition 
        in={this.state.isShowBlock} 
        timeout={1000} 
        mountOnEnter 
        unmountOnExit 
        onEnter={() => console.log('on enter')}
        onEntering={() => console.log('on entering')}
        onEntered={() => console.log('on entered')}
        onExit={() => console.log('on exit')}
        onExiting={() => console.log('on exiting')}
        onExited={() => console.log('on exited')}>
          {
            state => (
              <div style={{backgroundColor:'red', width:100, height: 100, margin: 'auto', transition: 'opacity 1s ease-out', opacity: state === 'exiting' ? 0 : 1}}>
              </div>
            )
          }
        </Transition>
        <Transition in={this.state.isShow} timeout={animationTiming} unmountOnExit mountOnEnter>
          {(state) => (
            <Modal closed={this.onCloseModal} show={state} />
            )}
        </Transition>
        <Backdrop show={this.state.isShow} />
        <button className="Button" onClick={this.onOpenModal}>Open Modal</button>
        <h3>Animating Lists</h3>
        <List />
      </div>
    );
  }
}

export default App;
