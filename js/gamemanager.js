let playerHP=20;
let enemyHP=20;
let fight = document.querySelector(".game-board .arena .fight");
let strong = document.querySelector(".game-board .arena .fight .strong ");
GameManager = {
  test: function(){
    console.log(2);
  },
  setFight: function(playerMove){
    let fight = document.querySelector(".game-board .arena .fight");
    fight.style.visibility="visible";
    document.querySelector(".player-action").innerHTML = playerMove;
    let enemyAction = document.querySelector(".enemy-action");
    enemyAction.innerHTML = "";

 strong.style.background="rgba(255,255,255,0.1)";
    let random = Math.floor(Math.random()*3);
    console.log(random);
    switch (playerMove) {
      case "Attack":
        if(random == 0)
        {fight.removeAttribute("onclick");
        fight.setAttribute("onclick","AllCases.AtkxDef()");}
        else if(random==1)
        {fight.removeAttribute("onclick"); fight.setAttribute("onclick","AllCases.AtkxAtk()");}
        else if(random==2)
        {fight.removeAttribute("onclick"); fight.setAttribute("onclick","AllCases.AtkxDN()");}
        break;
      case "Defend":
        if(random == 0)
        {fight.removeAttribute("onclick");
        fight.setAttribute("onclick","AllCases.DefxDef()");}
        else if(random==1)
        {fight.removeAttribute("onclick"); fight.setAttribute("onclick","AllCases.DefxAtk()");}
        else if(random==2)
        {fight.removeAttribute("onclick"); fight.setAttribute("onclick","AllCases.DefxDN()");}
        break;
      case "Do Nothing":
        if(random == 0)
        {fight.removeAttribute("onclick");
        fight.setAttribute("onclick","AllCases.DNxDef()");}
        else if(random==1)
        {fight.removeAttribute("onclick"); fight.setAttribute("onclick","AllCases.DNxAtk()");}
        else if(random==2)
        {fight.removeAttribute("onclick"); fight.setAttribute("onclick","AllCases.DNxDN()");}
        break;
    }
  }
}
