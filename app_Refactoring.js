const quiz = [
  {
    question: "漫画、ワールドトリガーの主人公の中で近界民（ネイバー）なのは誰？",
    answers: [
      "空閑 遊真",
      "三雲 修",
      "雨取 千佳",
      "迅 悠一"
    ],
    correct: "空閑 遊真"
  },{
    question: "漫画、ワンピースで登場するMr.2の本名といえば？",
    answers: [
      "ベンサム",
      "ベンジャミン",
      "ニューカマー",
      "イワンコフ"
    ],
    correct: "ベンサム"
  },{
    question: "ファイナルファンタジーXの中で召喚獣として登場しないのは？",
    answers: [
      "トンベリ",
      "イフリート",
      "イクシオン",
      "シヴァ"
    ],
    correct:  "トンベリ"
  }
];

const quizLength = quiz.length;
let quizIndex = 0;

const $button = document.getElementsByTagName("button");
const buttonLength = $button.length;

// クイズの問題文、選択肢を定義
const setupQuiz = () => {
  document.getElementById("js-question").textContent = quiz[quizIndex].question;

  let buttonIndex = 0;
    //ここに命令文
  while(buttonIndex < buttonLength){
    $button[buttonIndex].textContent = quiz[quizIndex].answers[buttonIndex];  
    // 1ずつ足す
    buttonIndex++;
  }   
}
setupQuiz();

const clickHandler = (e) => {
  if(quiz[quizIndex].correct === e.target.textContent){
    window.alert("正解！");
  } else {
    window.alert("不正解!");
  } 
} 

quizIndex++;

  if(quizIndex < quizLength){
      // 問題数がまだあればこちらを実行 
      setupQuiz();
  } else {
      //問題数がもうなければこちらを実行 
     window.alert("終了！");
  }

// ボタンをクリックしたら正誤判定
let handlerIndex = 0;
while (handlerIndex < buttonLength){
  $button[handlerIndex].addEventListener("click", (e) => {
    clickHandler(e);
  });
  handlerIndex++;
}