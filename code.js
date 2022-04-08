$(function(){

  //ジャンケンを管理するDOMを設定
  var jan = $('jan_area');
  

// // initialize!　ルーレット
// var option = {
//   speed : 10,
//   duration : 1000,
// }
// $('div.roulette').roulette(option);	

// // START!　ルーレット
// $('document').ready(function(){
//   $('div.roulette').roulette('start');	
// });

// // 画像ランダム表示
// $('.roulette img:nth-child(n+2)').hide();
//       setInterval(function() {
//         $(".roulette img:first-child").fadeOut(0);
//         $(".roulette img:nth-child(2)").fadeIn(0);
//         $(".roulette img:first-child").appendTo(".roulette");
//       }, 200);


var cnt = 0; //現在の対戦数を管理
var fin_cnt = 5; //何回で終了か設定

var PointCom = 0, PointMe = 0;

$("#gu").on("click", function(){
  var human_gu = 1;
  var pc = Math.floor(Math.random()*3+1 );
  $('#cnt').text(++ cnt);

  if(pc == 1){
    $("#pc").text("グー")
    $("#result").text("あいこです")
    $("#opponent").attr("src","img/gu.png")
   
    
    

  }
 else if(pc == 2){
    $("#pc").text("チョキ")
    $("#result").text("あなたの勝ちです")
    $('#point_me').text(++ PointMe);
    $("#opponent").attr("src","img/cho.png")

  
   
  }
  if(pc == 3){
    $("#pc").text("パー")
    $("#result").text("あなたの負けです")
    $('#point_com').text(++ PointCom);
    $("#opponent").attr("src","img/pa.png")
    
    
  }
});

$("#cho").on("click", function(){
  var human_cho = 2;
  var pc = Math.floor(Math.random()*3+1 );
  $('#cnt').text(++ cnt);

  $('.roulette').off();
  // //じゃんけんストップ
  // $('div.roulette').roulette('stop');
	// 	//ここまで
  
  if(pc == 1){
    $("#pc").text("グー")
    $("#result").text("あなたの負けです")
    $("#opponent").attr("src","img/gu.png")
    $('#point_com').text(++ PointCom);
   
   
  }
 else if(pc == 2){
    $("#pc").text("チョキ")
    $("#result").text("あいこです")
    $("#opponent").attr("src","img/cho.png")
  }
  if(pc == 3){
    $("#pc").text("パー")
    $("#result").text("あなたの勝ちです")
    $("#opponent").attr("src","img/pa.png")
    $('#point_me').text(++ PointMe);
  }
});

$("#pa").on("click", function(){
  var human_pa = 3;
  var pc = Math.floor(Math.random()*3+1 );
  $('#cnt').text(++ cnt);

  // //じゃんけんストップ
  // $('div.roulette').roulette('stop');
	// 	//ここまで
  
  if(pc == 1){
    $("#pc").text("グー")
    $("#result").text("あなたの勝ちです")
    $("#opponent").attr("src","img/gu.png")
    $('#point_me').text(++ PointMe);
   
  }
 else if(pc == 2){
    $("#pc").text("チョキ")
    $("#result").text("あなたの負けです")
    $("#opponent").attr("src","img/cho.png")
    $('#point_com').text(++ PointCom);
  }
  if(pc == 3){
    $("#pc").text("パー")
    $("#result").text("あいこです")
    $("#opponent").attr("src","img/pa.png")
  }
});





  
});