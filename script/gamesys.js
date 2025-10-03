const botoes = document.querySelectorAll(".option")

let game = {
    kanjiList :  undefined,
    time : undefined,
    score : undefined
}

const kanji = {
    id : 0,
    shape : "国",
    radicals : ["囗","王","丶"],
    lookalike : ["⼀","⼁","⺃","⺅","⼍","⼕", "⼯"]
}
const kanji1 = {
    id : 1,
    shape : "右",
    radicals : ["一","ノ","口"],
    lookalike : ["⺃","⺅","⼍","⼕", "⼯","⼺","⺘"]
}
const kanji2 = {
    id : 2,
    shape : "円",
    radicals : ["一","｜","亠","冂"],
    lookalike : ["⺃","⺅","⼍","⼕", "⼯","⼺"]
}

let a = [kanji, kanji1, kanji2]

bushuRace()


function bushuRace(){
    game.kanjiList = a;
    let ingamekanji;
    let lifes = 3
       
}


/*function selectOption(button){
    console.log(ingamekanji.radicals.includes(button.innerHTML))
    if(ingamekanji.radicals.includes(button.innerHTML)){
        ingamekanji.radicals.includes(button.innerHTML)
        button.style.color = "red"
    }
}*/

















function radicalCheck(kanji, radical) {
    if(kanji.radicals.includes(radical)){
        return true;
    }else{
        return false
    }
}


function r(max) {
  return Math.floor(Math.random() * max);
}
