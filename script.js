let turn = "x";

function game(id) {
    let square = document.getElementById(id);
    if (turn === "x" && square.innerHTML === '') {
        square.innerHTML = "X";
        square.style.color = "white"
        turn = "o";
        document.getElementById("player").innerHTML = ' " O " ';
    } else if (turn === 'o' && square.innerHTML === "") {
        square.innerHTML = "O";
        square.style.color = "blue"

        turn = "x";
        document.getElementById("player").innerHTML = ' " X " ';
    }
    checkWinner();
}

function checkWinner() {
    const squares = [];
    for (let i = 1; i <= 9; i++) {
        squares.push(document.getElementById(i.toString()).innerHTML);
    }
    const checks = [
        [0, 1, 2], [3, 4, 5], [6, 7, 8], 
        [0, 3, 6], [1, 4, 7], [2, 5, 8], 
        [0, 4, 8], [2, 4, 6]
    ];

    for (const combo of checks) {
        const [a, b, c] = combo;
        if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
            setTimeout(() => {
                document.getElementById("overlay").style.display = "flex";
                document.getElementById("result").innerHTML = `Player ${squares[a]} wins`;
            }, 800);
            document.getElementById(a + 1).style.cssText = "background-color:black; color:red;";
            document.getElementById(b + 1).style.cssText = "background-color:black; color:red;";
            document.getElementById(c + 1).style.cssText ="background-color:black; color:red;";

            
            return;
        }
    }
    if (squares.every(square => square !== '')) {
        document.getElementById("overlay").style.display = "flex";
        document.getElementById("result").innerHTML = " It's a tie!";
    }
}

function resetGame() {
    for (let i = 1; i <= 9; i++) {
        document.getElementById(i.toString()).innerHTML = '';
        document.getElementById(i.toString()).style.background = ''; 
    }
    turn = "x";
    document.getElementById("player").innerHTML = ' " X " ';

}

function playAgain() {
    resetGame();
    document.getElementById("overlay").style.display = "none";

}

document.getElementById("play-again").addEventListener("click", playAgain);
document.getElementById("reset").addEventListener("click", resetGame);
