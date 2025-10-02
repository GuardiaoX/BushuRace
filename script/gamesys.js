const botoes = document.querySelectorAll(".option")
let ingamekanji

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

let kanjiList = [kanji, kanji1, kanji2]

bushuRace()

botoes.forEach(e => e.addEventListener("click",a => selectOption(e)));

function bushuRace(){
    ingamekanji = kanjiList[0]
    let options = ingamekanji.radicals.concat(ingamekanji.lookalike)
    botoes.forEach((e,i) => e.innerHTML = options[i])
    
}

function selectOption(button){
    console.log(button)
    if(ingamekanji.radicals.includes(button.innerHTML)){
        ingamekanji.radicals.includes(button.innerHTML)
        button.color = "red"
    }
}

















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
