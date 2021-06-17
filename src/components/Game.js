import React from "react";
import Phaser from "phaser";
import Main from "./scenes/Main";
import Win from "./scenes/Win";
import Lose from "./scenes/Lose";
import Pause from "./scenes/Pause";
import Lobby from "./scenes/Lobby";
import NavBar from "./NavBar";
import Intro from "./scenes/Intro";
import "./Game.css";

export default class Game extends React.Component {
  componentDidMount() {
    const config = {
      scale: {
        parent: document.getElementById("game"),
        mode: Phaser.Scale.FIT,
        autoCenter: Phaser.Scale.CENTER_BOTH,
      },
      type: Phaser.AUTO,
      backgroundColor: "#000000",
      pixelArt: true,
      fps: {
        target: 30,
      },
      physics: {
        default: "arcade",
      },
      scene: [Intro, Lobby, Main, Win, Lose, Pause],
    };
    this.game = new Phaser.Game(config);
  }

  render() {
    return (
      <div className="display">
        <NavBar />
        <div className="gameScreen">
          <div className="gameCase">
            <div id="game" />
          </div>
        </div>
      </div>
    );
  }
}
