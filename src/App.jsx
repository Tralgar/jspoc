import { hot } from 'react-hot-loader/root';
import React, { Component, lazy, Suspense } from 'react';
import Immutable from './Immutable';
import SentryPOC from './Sentry';
import logo from './react-elib.png';
import './App.css';
import Hook from './Hook';
import FunctionalComponent from './FunctionalComponent';
import User from './User';
import Filepond from './Filepond';
import ReusableHook from './ReusableHook';
import RenderProps from './RenderProps';
import BigCalendar from './BigCalendar';
import './helpers';
import MaterialUIBundleSize from "./MaterialUIBundleSize";
// const Lazy = lazy(() => import('./Lazy'));

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      functionalComponentName: '',
    };

    // cors test
    fetch('https://api.github.com/orgs/nodejs', {
      mode: 'cors', // Useful for including session ID (and, IIRC, authorization headers)
    })
      .then(response => response.json())
      .then(data => {
        console.log(data) // Prints result from `response.json()`
      })
      .catch(error => console.error(error))

    console.log('App::this.props -> ', this.props);

    this.inputFunctionalComponentRef = React.createRef();
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
        <div>
          <User />
          <Immutable />
          <SentryPOC />
          <Hook />
          <div
            className="lazy"
            style={{marginTop: "20px", borderTop: "2px dashed black"}}
          >
            {/*<Suspense fallback={<div>Lazy component loading…</div>}>*/}
            {/*  <Lazy />*/}
            {/*</Suspense>*/}
          </div>
          <div
            className="functionalComponent"
            style={{marginTop: "20px", borderTop: "2px dashed black"}}
          >
            <FunctionalComponent name={this.state.functionalComponentName} />
            <input type="text" ref={this.inputFunctionalComponentRef} />
            <button onClick={() => this.setState({
              functionalComponentName: this.inputFunctionalComponentRef.current.value,
            })}>
              Click to change functionalComponentName
            </button>
            <div>
              hot reload is enabled...
            </div>
            <ReusableHook />
            <Filepond />
            <RenderProps />
            <BigCalendar />
            <MaterialUIBundleSize />
          </div>
        </div>
      </div>
    );
  }
}

export default hot(App);
