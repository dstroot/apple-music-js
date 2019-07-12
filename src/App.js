import React, { Component } from "react";
import MusicJS from "./js";
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
   body {
      font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
      -webkit-tap-highlight-color: rgba(0,0,0,0);
   }
`;

class App extends Component {
  render() {
    return (
      <>
        <GlobalStyle />
        <div className="App">
          <MusicJS />
        </div>
      </>
    );
  }
}

document.addEventListener("touchstart", function() {}, true);

export default App;
