import React, { Component } from "react";
import "./normalize.css";
import "./style.css";
import './banner.js';
import './monster.js';
class App extends Component {
  componentDidMount() {
    [
      "https://cdnjs.cloudflare.com/ajax/libs/three.js/96/three.min.js",
      "https://threejs.org/examples/js/controls/OrbitControls.js",
      "https://cdnjs.cloudflare.com/ajax/libs/stats.js/r16/Stats.min.js"
    ].map((item, index) => {
      const script = document.createElement("script");
      script.src = item;
      script.type="text/jsx";
      document.body.appendChild(script);
      return undefined;
    });
  }
  render() {
    return (
      // <!--開場文字部分開始-->
      <>
        <div style={{ "position": "relative" }}>
          {/* <!-- <div style="text-align:center;clear:both;position:absolute;top:0;left:260px">
          <script src="/gg_bd_ad_720x90.js" type="text/javascript"></script>
          <script src="/follow.js" type="text/javascript"></script>
        </div> --> */}
          <canvas className="canvas" />

          <div className="help">?</div>

          <div className="ui">
            <input className="ui-input" class='ui-imput' type="text" />
            <span className="ui-return">↵</span>
          </div>

          <div className="overlay">
            <div className="tabs">
              <div className="tabs-labels">
                <span className="tabs-label">Commands</span>
                <span className="tabs-label">Info</span>
                <span className="tabs-label">Share</span>
              </div>

              <div className="tabs-panels">
                <ul className="tabs-panel commands">
                  <li className="commands-item">
                    <span className="commands-item-title">Text</span>
                    <span className="commands-item-info" data-demo="Hello :)">
                      Type anything
                    </span>
                    <span className="commands-item-action">Demo</span>
                  </li>
                  <li className="commands-item">
                    <span className="commands-item-title">Countdown</span>
                    <span className="commands-item-info" data-demo="#countdown 10">
                      #countdown<span className="commands-item-mode">number</span>
                    </span>
                    <span className="commands-item-action">Demo</span>
                  </li>
                  <li className="commands-item">
                    <span className="commands-item-title">Time</span>
                    <span className="commands-item-info" data-demo="#time">
                      #time
                    </span>
                    <span className="commands-item-action">Demo</span>
                  </li>
                  <li className="commands-item">
                    <span className="commands-item-title">Rectangle</span>
                    <span
                      className="commands-item-info"
                      data-demo="#rectangle 30x15"
                    >
                      #rectangle
                      <span className="commands-item-mode">width x height</span>
                    </span>
                    <span className="commands-item-action">Demo</span>
                  </li>
                  <li className="commands-item">
                    <span className="commands-item-title">Circle</span>
                    <span className="commands-item-info" data-demo="#circle 25">
                      #circle<span className="commands-item-mode">diameter</span>
                    </span>
                    <span className="commands-item-action">Demo</span>
                  </li>

                  <li className="commands-item commands-item--gap">
                    <span className="commands-item-title">Animate</span>
                    <span
                      className="commands-item-info"
                      data-demo="The time is|#time|#countdown 3|#icon thumbs-up"
                    >
                      <span className="commands-item-mode">command1</span>&nbsp;|
                      <span className="commands-item-mode">command2</span>
                    </span>
                    <span className="commands-item-action">Demo</span>
                  </li>
                </ul>

                <div className="tabs-panel ui-details">
                  <div className="ui-details-content">
                    <h1>Shape Shifter</h1>
                    <p>
                      An experiment by{" "}
                      <a href="//www.kennethcachia.com">Kenneth Cachia</a>.
                      <br />
                      <a href="//fortawesome.github.io/Font-Awesome/#icons-new">
                        Font Awesome
                      </a>{" "}
                      is being used to render all #icons.
                    </p>

                    <br />
                    <p>
                      Visit{" "}
                      <a href="http://www.kennethcachia.com/shape-shifter/?a=#icon thumbs-up">
                        Shape Shifter
                      </a>{" "}
                      to use icons.
                    </p>
                  </div>
                </div>

                <div className="tabs-panel ui-share">
                  <div className="ui-share-content">
                    <h1>Sharing</h1>
                    <p>
                      Simply add <em>?a=</em> to the current URL to share any
                      static or animated text. Examples:
                    </p>
                    <p>
                      <a href="http://www.kennethcachia.com/shape-shifter?a=Hello">
                        www.kennethcachia.com/shape-shifter?a=Hello
                      </a>
                      <br />
                      <a href="http://www.kennethcachia.com/shape-shifter?a=Hello|#countdown 3">
                        www.kennethcachia.com/shape-shifter?a=Hello|#countdown 3
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <!--開場文字部分結束-->
      <!--monter 部分開始--> */}
        <div style={{ "position": "relative" }}>
          <div id="stats" />
        </div>

        {/* <!-- monter 部分結束--> */}
      </>
    );
  }
}

export default App;
