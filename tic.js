console.log("Welcome to Tic Tac Toe");
let music = new Audio("audio/music.mp3");
let audioturn = new Audio("audio/ting.mp3");
let gameover = new Audio("audio/gameover.mp3");
let turn = "X";
let isGameover = false;

// function to change the turn

const changeturn = () => {
	return turn === "X" ? "O" : "X";
};

// function to check for a WIN
const checkwin = () => {
	let boxtexts = document.getElementsByClassName("boxtext");
	let wins = [
		[0, 1, 2],
		[3, 4, 5],
		[6, 7, 8],
		[0, 3, 6],
		[1, 4, 7],
		[2, 5, 8],
		[0, 4, 8],
		[2, 4, 6],
	];
	wins.forEach((e) => {
		if (
			boxtexts[e[0]].innerText === boxtexts[e[1]].innerText &&
			boxtexts[e[1]].innerText === boxtexts[e[2]].innerText &&
			boxtexts[e[0]].innerText !== ""
		) {
			document.querySelector(".info").innerText =
				boxtexts[e[0]].innerText + " has won";

			isGameover = true;
			document
				.querySelector(".imagebox")
				.getElementsByTagName("img")[0].style.width = "200px";
		}
	});
};

//game logic

let boxes = document.getElementsByClassName("box");
Array.from(boxes).forEach((element) => {
	let boxtext = element.querySelector(".boxtext");
	element.addEventListener("click", () => {
		if (boxtext.innerText === "") {
			boxtext.innerText = turn;
			audioturn.play();
			turn = changeturn();
			//	audioturn.play();
			checkwin();
			if (!isGameover) {
				document.getElementsByClassName(
					"info"
				)[0].innerText = `Turn for ${turn}`;
			}
		}
	});
});

//Reset button logic

reset.addEventListener("click", () => {
	let boxtexts = document.querySelectorAll(".boxtext");
	Array.from(boxtexts).forEach((element) => {
		element.innerText = "";
	});
	turn = "X";
	isGameover = false;
	document.getElementsByClassName("info")[0].innerText = `Turn for ${turn}`;
	document
		.querySelector(".imagebox")
		.getElementsByTagName("img")[0].style.width = "0px";
});
