const quiz = [
  {
    question: "漫画、ワールドトリガーの主人公の中で近界民（ネイバー）なのは誰？",
    answers: [ "空閑 遊真","三雲 修","雨取 千佳","迅 悠一"],
    correct: "空閑 遊真"
  },{
    question: "漫画、ワンピースで登場するMr.2の本名といえば？",
    answers: [ "ベンサム","ベンジャミン","ニューカマー","イワンコフ"],
    correct: "ベンサム"
  },{
    question: "ファイナルファンタジーXの中で召喚獣として登場しないのは？",
    answers: ["トンベリ","イフリート", "イクシオン","シヴァ"],
    correct:  "トンベリ"
  }
];

const $window = window;
const $doc = document;
const $question = $doc.getElementById("js-question");
const $buttons =$doc.querySelectorAll(".btn");

const quizLength = quiz.length;
let quizIndex = 0;
let score = 0;

const init = () => {
  $question.textContent = quiz[quizIndex].question;

  const buttonLength = $buttons.length;
  let buttonIndex = 0;

  while(buttonIndex < buttonLength){
  $buttons[buttonIndex].textContent = quiz[quizIndex].answers[buttonIndex];  
  buttonIndex++;
  }
};

const setupQuiz = () => {
   quizIndex++;
  if(quizIndex < quizLength){
    init(quizIndex);
  } else {
    // $window.alert("クイズ終了！");
    showEnd();
  }
};

const clickHandler = (elm) => {
  if(elm.textContent === quiz[quizIndex].correct){
    $window.alert("正解！");
    score++;
  } else {
    $window.alert("不正解!");
  } 
  setupQuiz();
};

const showEnd = () => {
  $question.textContent = "終了！あなたのスコアは" + score + "/" + quizLength + "です";
  
const $items = $doc.getElementById("js-items");
$items.style.visibility = "hidden";
};

init();

let answersIndex = 0;
let answersLength = quiz[quizIndex].answers.length;

while(answersIndex < answersLength){
  $buttons[answersIndex].addEventListener("click", (e) => {
    clickHandler(e.target);
  });
  answersIndex++;
}
