import React, { useState, useRef } from "react";

export default function Body() {
  let counter = 0;
  let data = [];
  const buttonData = [
    { id: "0", text: "" },
    { id: "1", text: "" },
    { id: "2", text: "" },
    { id: "3", text: "" },
    { id: "4", text: "" },
    { id: "5", text: "" },
    { id: "6", text: "" },
    { id: "7", text: "" },
    { id: "8", text: "" },
  ];
  const buttonRefs = useRef([]);

  const [playerSectionStyle, setPlayerSectionStyle] = useState({
    display: "grid",
  });

  const [scoreBoardStyle, setScoreBoardStyle] = useState({
    display: "none",
  });
  const [play, setPlay] = useState(false);
  const [resultStyle, setResultStyle] = useState({
    display: "none",
  });
  const [player1, setPlayer1] = useState("");
  const [player2, setPlayer2] = useState("");
  const [winner, setWinner] = useState("");
  const [winScorePlayer1, setWinScorePlayer1] = useState(0);
  const [loseScorePlayer1, setLoseScorePlayer1] = useState(0);
  const [winScorePlayer2, setWinScorePlayer2] = useState(0);
  const [loseScorePlayer2, setLoseScorePlayer2] = useState(0);

  const input1 = useRef();
  const input2 = useRef();
  const startBTN = useRef();

  function player1WinResult() {
    setWinner(player1);
    setResultStyle({
      display: "grid",
    });
    setWinScorePlayer1((prevValue) => prevValue + 1);
    setLoseScorePlayer2((prevValue) => prevValue + 1);
  }

  function player2WinResult() {
    setWinner(player2);
    setResultStyle({
      display: "grid",
    });
    setWinScorePlayer2((prevValue) => prevValue + 1);
    setLoseScorePlayer1((prevValue) => prevValue + 1);
  }
  const check = () => {
    if (data[0] === data[1] && data[1] === data[2] && data[2] !== undefined) {
      if (data[0] === "X") {
        player1WinResult();
      } else {
        player2WinResult();
      }
    } else if (
      data[0] === data[3] &&
      data[3] === data[6] &&
      data[6] !== undefined
    ) {
      if (data[0] === "X") {
        player1WinResult();
      } else {
        player2WinResult();
      }
    } else if (
      data[0] === data[4] &&
      data[4] === data[8] &&
      data[8] !== undefined
    ) {
      if (data[0] === "X") {
        player1WinResult();
      } else {
        player2WinResult();
      }
    } else if (
      data[1] === data[4] &&
      data[4] === data[7] &&
      data[7] !== undefined
    ) {
      if (data[1] === "X") {
        player1WinResult();
      } else {
        player2WinResult();
      }
    } else if (
      data[2] === data[4] &&
      data[4] === data[6] &&
      data[6] !== undefined
    ) {
      if (data[2] === "X") {
        player1WinResult();
      } else {
        player2WinResult();
      }
    } else if (
      data[2] === data[5] &&
      data[5] === data[8] &&
      data[8] !== undefined
    ) {
      if (data[2] === "X") {
        player1WinResult();
      } else {
        player2WinResult();
      }
    } else if (
      data[3] === data[4] &&
      data[4] === data[5] &&
      data[5] !== undefined
    ) {
      if (data[3] === "X") {
        player1WinResult();
      } else {
        player2WinResult();
      }
    } else if (
      data[6] === data[7] &&
      data[7] === data[8] &&
      data[8] !== undefined
    ) {
      if (data[6] === "X") {
        player1WinResult();
      } else {
        player2WinResult();
      }
    } else if (
      data[0] !== undefined &&
      data[1] !== undefined &&
      data[2] !== undefined &&
      data[3] !== undefined &&
      data[4] !== undefined &&
      data[5] !== undefined &&
      data[6] !== undefined &&
      data[7] !== undefined &&
      data[8] !== undefined
    ) {
      setWinner("Match has been Draw");
      setResultStyle({
        display: "grid",
      });
    }
  };

  const playing = (e, num) => {
    if (e.target.textContent === "" && play && winner ==="") {
      if (counter % 2 === 0) {
        e.target.textContent = "X";
        data[num] = "X";
      } else {
        e.target.textContent = "0";
        data[num] = "O";
      }
      counter++;
    } else if (e.target.textContent !== "") {
      alert("This box is already filled");
    } else if(!play) {
      alert("You have first start the game");
    }
    check();
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      if (e.target.id === "name1") {
        input2.current.focus();
      } else if (e.target.id === "name2") {
        document.getElementById("start-Button").click();
      }
    }
  };
  function playAgain() {
    buttonRefs.current.forEach((buttonRef, index) => {
      if (buttonRef) {
        buttonRef.innerText = "";
      }
    });
    setResultStyle({
      display: "none",
    });
    setWinner("");
  }

  function restart() {
    window.location.reload();
  }
  const start = (input1Value, input2Value) => {
    if (input1.current.value !== "" && input2.current.value !== "") {
      setPlayer1(input1Value);
      setPlayer2(input2Value);
      setPlayerSectionStyle({
        display: "none",
      });
      setScoreBoardStyle({
        display: "flex",
      });
      setPlay(true);
    } else {
      alert(
        "First you have enter the Players name then and only it will start!!!"
      );
    }
  };
  return (
    <>
      <div id="result" style={resultStyle}>
        <span>{winner} is a winner</span>
      </div>
      <div className="container1">
        <div className="playingarea">
          <div className="parent">
          {buttonData.map((button, index) => (
            <button
              className="child"
              key={button.id}
              ref={(el) => (buttonRefs.current[index] = el)}
              id={button.id}
              onClick={(e) => {
                playing(e, button.id);
              }}
            >
              {button.text}
            </button>
          ))}
        </div>
        </div>
        
        <div className="startPoint">
          <div className="playerSection" style={playerSectionStyle}>
            <label>Enter the name of First Player</label>
            <input
              type="text"
              className="playerName"
              spellCheck={false}
              onKeyDown={handleKeyPress}
              ref={input1}
              id="name1"
            />
            <label>Enter the name of second Player</label>
            <input
              type="text"
              className="playerName"
              spellCheck={false}
              onKeyDown={handleKeyPress}
              ref={input2}
              id="name2"
            />
            <input
              type="button"
              value="Start"
              ref={startBTN}
              id="start-Button"
              onClick={() => start(input1.current.value, input2.current.value)}
              className="startBtn"
            />
          </div>
          <div className="score-board" style={scoreBoardStyle}>
            <table className="scoreTable">
              <caption>Score Board</caption>
              <tr>
                <th>Player Name</th>
                <th>Win</th>
                <th>Lose</th>
              </tr>
              <tr>
                <td>{player1}</td>
                <td>{winScorePlayer1}</td>
                <td>{loseScorePlayer1}</td>
              </tr>
              <tr>
                <td>{player2}</td>
                <td>{winScorePlayer2}</td>
                <td>{loseScorePlayer2}</td>
              </tr>
            </table>
          </div>
          <section className="result" style={resultStyle}>
            <button className="playAgain-btn" onClick={playAgain}>
              Play Again
            </button>
            <button className="restart-btn" onClick={restart}>
              Restart
            </button>
          </section>
        </div>
      </div>
    </>
  );
}
