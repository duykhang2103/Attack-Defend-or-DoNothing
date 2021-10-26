let enemyAction = document.querySelector(".enemy-action");
let ricardo = document.querySelector(".enemy-bot");
//let style = document.createElement("style");
//let node = document.createTextNode(".game-board .arena .fight:hover strong {background:rgba(0,0,255,1);}");
let AllCases = {
  AtkxAtk: function(){
    if(ricardo.innerHTML == "RICARDO MIBOT"){
      document.querySelector(".enemy-action").innerHTML = "ONE PUNCH";
      playerHP = -999;
      document.querySelector(".game-board .arena .fight").removeAttribute("onclick");
      document.querySelector(".game-board .arena .fight:hover strong").style.background= "rgba(255,255,255,0)";
      document.querySelector(".player-health").innerHTML="Health: "+playerHP;
      document.querySelector(".enemy-health").innerHTML="Health: "+enemyHP;
      this.gameOver();
    }
    else {
    document.querySelector(".enemy-action").innerHTML = "Attack";
    playerHP-=4;
    enemyHP-=4;
    if(playerHP <= 0 && enemyHP <= 0) {
      playerHP = 0;
      enemyHP = 0.1;
      this.gameOver();
    }
    else if(playerHP<=0 && enemyHP >0) {
      playerHP = 0;
      this.gameOver();
    }
    else if(playerHP>0 && enemyHP<=0){
      this.gameWin();
    }
    document.querySelector(".player-health").innerHTML="Health: "+playerHP;
    document.querySelector(".enemy-health").innerHTML="Health: "+enemyHP;

    document.querySelector(".game-board .arena .fight").removeAttribute("onclick");
    document.querySelector(".game-board .arena .fight:hover strong").style.background= "rgba(255,255,255,0)";
  }
  },

  AtkxDef: function(){
    if(ricardo.innerHTML == "RICARDO MIBOT"){
      document.querySelector(".enemy-action").innerHTML = "ONE PUNCH";
      playerHP = -999;
      document.querySelector(".game-board .arena .fight").removeAttribute("onclick");
      document.querySelector(".game-board .arena .fight:hover strong").style.background= "rgba(255,255,255,0)";
      document.querySelector(".player-health").innerHTML="Health: "+playerHP;
      document.querySelector(".enemy-health").innerHTML="Health: "+enemyHP;
      this.gameOver();
    }
    else {
    document.querySelector(".enemy-action").innerHTML = "Defend";
    playerHP-=4;
    enemyHP-=1;
    if(playerHP <= 0 && enemyHP <= 0) {
      playerHP = 0;
      enemyHP = 0.1;
      this.gameOver();
    }
    else if(playerHP<=0 && enemyHP >0) {
      playerHP = 0;
      this.gameOver();
    }
    else if(playerHP>0 && enemyHP<=0){
      this.gameWin();
    }
    document.querySelector(".player-health").innerHTML="Health: "+playerHP;
    document.querySelector(".enemy-health").innerHTML="Health: "+enemyHP;

    document.querySelector(".game-board .arena .fight").removeAttribute("onclick");
    document.querySelector(".game-board .arena .fight:hover strong").style.background= "rgba(255,255,255,0)";
  }
  },

  AtkxDN: function() {
    if(ricardo.innerHTML == "RICARDO MIBOT"){
      document.querySelector(".enemy-action").innerHTML = "ONE PUNCH";
      playerHP = -999;
      document.querySelector(".game-board .arena .fight").removeAttribute("onclick");
      document.querySelector(".game-board .arena .fight:hover strong").style.background= "rgba(255,255,255,0)";
      document.querySelector(".player-health").innerHTML="Health: "+playerHP;
      document.querySelector(".enemy-health").innerHTML="Health: "+enemyHP;
      this.gameOver();
    }
    else {
    document.querySelector(".enemy-action").innerHTML = "Do Nothing";
    playerHP-=1;
    enemyHP-=3;
    if(playerHP <= 0 && enemyHP <= 0) {
      playerHP = 0;
      enemyHP = 0.1;
      this.gameOver();
    }
    else if(playerHP<=0 && enemyHP >0) {
      playerHP = 0;
      this.gameOver();
    }
    else if(playerHP>0 && enemyHP<=0){
      this.gameWin();
    }
    document.querySelector(".player-health").innerHTML="Health: "+playerHP;
    document.querySelector(".enemy-health").innerHTML="Health: "+enemyHP;

    document.querySelector(".game-board .arena .fight").removeAttribute("onclick");
    document.querySelector(".game-board .arena .fight:hover strong").style.background= "rgba(255,255,255,0)";
  }
  },

  DefxAtk: function() {
    if(ricardo.innerHTML == "RICARDO MIBOT"){
      document.querySelector(".enemy-action").innerHTML = "ONE PUNCH";
      playerHP = -999;
      document.querySelector(".game-board .arena .fight").removeAttribute("onclick");
      document.querySelector(".game-board .arena .fight:hover strong").style.background= "rgba(255,255,255,0)";
      document.querySelector(".player-health").innerHTML="Health: "+playerHP;
      document.querySelector(".enemy-health").innerHTML="Health: "+enemyHP;
      this.gameOver();
    }
    else {
    document.querySelector(".enemy-action").innerHTML = "Attack";
    playerHP-=1;
    enemyHP-=4;
    if(playerHP <= 0 && enemyHP <= 0) {
      playerHP = 0;
      enemyHP = 0.1;
      this.gameOver();
    }
    else if(playerHP<=0 && enemyHP >0) {
      playerHP = 0;
      this.gameOver();
    }
    else if(playerHP>0 && enemyHP<=0){
      this.gameWin();
    }
    document.querySelector(".player-health").innerHTML="Health: "+playerHP;
    document.querySelector(".enemy-health").innerHTML="Health: "+enemyHP;

    document.querySelector(".game-board .arena .fight").removeAttribute("onclick");
    document.querySelector(".game-board .arena .fight:hover .strong").style.background= "rgba(255,255,255,0)";
  }
  },

  DefxDef: function() {
    if(ricardo.innerHTML == "RICARDO MIBOT"){
      document.querySelector(".enemy-action").innerHTML = "ONE PUNCH";
      playerHP = -999;
      document.querySelector(".game-board .arena .fight").removeAttribute("onclick");
      document.querySelector(".game-board .arena .fight:hover strong").style.background= "rgba(255,255,255,0)";
      document.querySelector(".player-health").innerHTML="Health: "+playerHP;
      document.querySelector(".enemy-health").innerHTML="Health: "+enemyHP;
      this.gameOver();
    }
    else {
    document.querySelector(".enemy-action").innerHTML = "Defend";
    playerHP-=1;
    enemyHP-=1;
    if(playerHP <= 0 && enemyHP <= 0) {
      playerHP = 0;
      enemyHP = 0.1;
      this.gameOver();
    }
    else if(playerHP<=0 && enemyHP >0) {
      playerHP = 0;
      this.gameOver();
    }
    else if(playerHP>0 && enemyHP<=0){
      this.gameWin();
    }
    document.querySelector(".player-health").innerHTML="Health: "+playerHP;
    document.querySelector(".enemy-health").innerHTML="Health: "+enemyHP;
    document.querySelector(".game-board .arena .fight").removeAttribute("onclick");
    document.querySelector(".game-board .arena .fight:hover .strong").style.background= "rgba(255,255,255,0)";
  }
  },

  DefxDN: function() {
    if(ricardo.innerHTML == "RICARDO MIBOT"){
      document.querySelector(".enemy-action").innerHTML = "ONE PUNCH";
      playerHP = -999;
      document.querySelector(".game-board .arena .fight").removeAttribute("onclick");
      document.querySelector(".game-board .arena .fight:hover strong").style.background= "rgba(255,255,255,0)";
      document.querySelector(".player-health").innerHTML="Health: "+playerHP;
      document.querySelector(".enemy-health").innerHTML="Health: "+enemyHP;
      this.gameOver();
    }
    else {
    document.querySelector(".enemy-action").innerHTML = "Do Nothing";
    playerHP-=1;
    if(playerHP <= 0 && enemyHP <= 0) {
      playerHP = 0;
      enemyHP = 0.1;
      this.gameOver();
    }
    else if(playerHP<=0 && enemyHP >0) {
      playerHP = 0;
      this.gameOver();
    }
    else if(playerHP>0 && enemyHP<=0){
      this.gameWin();
    }
    document.querySelector(".player-health").innerHTML="Health: "+playerHP;
    document.querySelector(".enemy-health").innerHTML="Health: "+enemyHP;
    document.querySelector(".game-board .arena .fight").removeAttribute("onclick");
    document.querySelector(".game-board .arena .fight:hover .strong").style.background= "rgba(255,255,255,0)";
  }
  },

  DNxAtk: function() {
    if(ricardo.innerHTML == "RICARDO MIBOT"){
      document.querySelector(".enemy-action").innerHTML = "ONE PUNCH";
      playerHP = -999;
      document.querySelector(".game-board .arena .fight").removeAttribute("onclick");
      document.querySelector(".game-board .arena .fight:hover strong").style.background= "rgba(255,255,255,0)";
      document.querySelector(".player-health").innerHTML="Health: "+playerHP;
      document.querySelector(".enemy-health").innerHTML="Health: "+enemyHP;
      this.gameOver();
    }
    else {
    document.querySelector(".enemy-action").innerHTML = "Attack";
    playerHP-=3;
    enemyHP-=1;
    if(playerHP <= 0 && enemyHP <= 0) {
      playerHP = 0;
      enemyHP = 0.1;
      this.gameOver();
    }
    else if(playerHP<=0 && enemyHP >0) {
      playerHP = 0;
      this.gameOver();
    }
    else if(playerHP>0 && enemyHP<=0){
      this.gameWin();
    }
    document.querySelector(".player-health").innerHTML="Health: "+playerHP;
    document.querySelector(".enemy-health").innerHTML="Health: "+enemyHP;
    document.querySelector(".game-board .arena .fight").removeAttribute("onclick");
    document.querySelector(".game-board .arena .fight:hover strong").style.background= "rgba(255,255,255,0)";
  }
  },

  DNxDef: function() {
    if(ricardo.innerHTML == "RICARDO MIBOT"){
      document.querySelector(".enemy-action").innerHTML = "ONE PUNCH";
      playerHP = -999;
      document.querySelector(".game-board .arena .fight").removeAttribute("onclick");
      document.querySelector(".game-board .arena .fight:hover strong").style.background= "rgba(255,255,255,0)";
      document.querySelector(".player-health").innerHTML="Health: "+playerHP;
      document.querySelector(".enemy-health").innerHTML="Health: "+enemyHP;
      this.gameOver();
    }
    else {
    document.querySelector(".enemy-action").innerHTML = "Defend";
    enemyHP-=1;
    if(playerHP <= 0 && enemyHP <= 0) {
      playerHP = 0;
      enemyHP = 0.1;
      this.gameOver();
    }
    else if(playerHP<=0 && enemyHP >0) {
      playerHP = 0;
      this.gameOver();
    }
    else if(playerHP>0 && enemyHP<=0){
      this.gameWin();
    }
    document.querySelector(".player-health").innerHTML="Health: "+playerHP;
    document.querySelector(".enemy-health").innerHTML="Health: "+enemyHP;
    document.querySelector(".game-board .arena .fight").removeAttribute("onclick");
    document.querySelector(".game-board .arena .fight:hover strong").style.background= "rgba(255,255,255,0)";
  }
  },

  DNxDN: function() {
    if(ricardo.innerHTML == "RICARDO MIBOT"){
      document.querySelector(".enemy-action").innerHTML = "ONE PUNCH";
      playerHP = -999;
      document.querySelector(".game-board .arena .fight").removeAttribute("onclick");
      document.querySelector(".game-board .arena .fight:hover strong").style.background= "rgba(255,255,255,0)";
      document.querySelector(".player-health").innerHTML="Health: "+playerHP;
      document.querySelector(".enemy-health").innerHTML="Health: "+enemyHP;
      this.gameOver();
    }
    else {
    document.querySelector(".enemy-action").innerHTML = "Do Nothing";

    if(playerHP <= 0 && enemyHP <= 0) {
      playerHP = 0;
      enemyHP = 0.1;
      this.gameOver();
    }
    else if(playerHP<=0 && enemyHP >0) {
      playerHP = 0;
      this.gameOver();
    }
    else if(playerHP>0 && enemyHP<=0){
      this.gameWin();
    }

    document.querySelector(".player-health").innerHTML="Health: "+playerHP;
    document.querySelector(".enemy-health").innerHTML="Health: "+enemyHP;
    document.querySelector(".game-board .arena .fight").removeAttribute("onclick");
    document.querySelector(".game-board .arena .fight:hover strong").style.background="rgba(255,255,255,0)";
  }
  },

  gameOver: function(){
    this.changeScene();
    document.querySelector(".game-preface").innerHTML = '<h4>Too bad.</h4><h4>Your mom must be very disappointed in you.</h4><h4>You should be ashamed of yourself.</h4><p>*Credit:</p><p>This game maybe just a failure</p><h3>Just like <h1>YOU</h1></h3><p>Click <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ" class="super">SUPER-MODE</a> to have your Health regenerate</p>';
  },

  changeScene: function(){
    document.querySelector(".game-preface").style.visibility="visible";
    document.querySelector(".game-preface").style.opacity="1";

  },

  changeSceneReverse: function(){
    document.querySelector(".game-preface").style.visibility="hidden";
    document.querySelector(".game-preface").style.opacity="0";
    document.querySelector(".enemy-bot").innerHTML = "RICARDO MIBOT";
    document.querySelector("body").style.backgroundImage = 'url("img/newbg1.png")';
    document.querySelector(".fight").setAttribute("onclick","AllCases.onePunch()");
    enemyHP=999;
    document.querySelector(".player-health").innerHTML="Health: "+playerHP;
    document.querySelector(".enemy-health").innerHTML="Health: "+enemyHP;
  },

  onePunch: function() {
    document.querySelector(".enemy-action").innerHTML="ONE PUNCH";

  },

  gameWin: function() {
    this.changeScene();
    document.querySelector(".game-preface").innerHTML = "<h4>So</h4><h4>You have defeated me ...</h4><h4>Or should I say</h4><h2>The weakest ME</h2><h3>Behold</h3><h1>My FINAL form !</h1>"
    document.querySelector(".game-preface").setAttribute("onclick","AllCases.changeSceneReverse()");
  }
}
