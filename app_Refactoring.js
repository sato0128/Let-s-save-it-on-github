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

// 一般的にはhtmlのオブジェクトを定数定義した場合、$を頭に入れてあげるのが一般的
// 数字、関数、定数にもいれる場合がある
const $button = document.getElementsByTagName("button");
const buttonLength = $button.length;

// クイズの問題文、選択肢を定義
const setupQuiz = () => {
  // getElementById...divのID属性を一つに絞ってConsoleに表示するこおが出来る
  // getElementsByTagName...html上の全てのdivを取って来てくれる
  // textContent...divの文字だけを抽出してくれる またtextContent = html上の文を書き換えることが出来る
  document.getElementById("js-question").textContent = quiz[quizIndex].question;

  let buttonIndex = 0;
  // 4未満(buttonの数)なら
  while(buttonIndex < buttonLength){
    //ここに命令文
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

// ボタンをクリックしたら正誤判定（リファクタリング2）↓
let handlerIndex = 0;
while (handlerIndex < buttonLength){
  $button[handlerIndex].addEventListener("click", (e) => {
    clickHandler(e);
  });
  handlerIndex++;
}

// 文字列を比較して一致するかどうかを判定する場合「===」を使う！！！！
// terget...クリックされたボタン
// eとは...マウスイベント（イベントのオブジェクト）
// $button[0].addEventListener("click", (e) => {
//   console.log(e);
//   if(correct === e.target.textContent){
//     window,alert("正解！");
//   } else {
//     window.alert("不正解!");
//   }
// });
// ボタンをクリックしたら正誤判定（リファクタリング1）↓
// $button[0].addEventListener("click", (e) => {
//   clickHandler(e);
// });
// $button[1].addEventListener("click", (e) => {
//   clickHandler(e);
// });
// $button[2].addEventListener("click", (e) => {
//   clickHandler(e);
// });
// $button[3].addEventListener("click", (e) => {
//   clickHandler(e);
// });