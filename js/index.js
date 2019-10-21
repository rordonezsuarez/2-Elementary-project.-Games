class Game {
  constructor(name, date, pegi, gender, developer) {
    this.name = name;
    this.date = date;
    this.pegi = pegi;
    this.gender = gender;
    this.developer = developer;
  }
}

let games = [];



function tablePrint(){

let printGame = document.getElementById('myTable');
printGame.innerHTML = "";
    games.forEach((e) => {

    printGame.innerHTML += `

<tr>
<td>${e.name}</td>
<td>${e.date}</td>
<td>${e.pegi}</td>
<td>${e.gender}</td>
<td>${e.developer}</td>
</tr>  `
});
}

function getCosa() {
  let name = document.getElementById('name').value;
  let date = document.getElementById('date').value;
  let pegi = document.getElementById('pegi').value;
  let gen = document.getElementById('gender');
  let gender = gen.options[gen.selectedIndex].value;
  let developer = document.getElementById('developer').value;
  games.push(new Game(name,date,pegi,gender,developer))
tablePrint();
console.log(games);
}
