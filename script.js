//Exercise1
//Part I

//question1
const people = ["Greg", "Mary", "Devon", "James"];
let peoplefistremove = people.shift();
console.log(people);

//question2
let replacepeople = people.splice(2,1,"Jason");
console.log(people);

//question3

let lastpeople= people.push("Ruisha");
console.log(people);

//question4

console.log(people.indexOf("Mary"));

//question5

newpeople = people.splice(1,3);
console.log(newpeople);

//question6

indexfoo= console.log(people.indexOf("foo"));
//il retourne -1 car   "foo" n'est pas dans le tableau

//Part II

for(let personne in people)
{
    console.log(people[personne]);
}



for(let personne in people)
{
    if(people[personne] == 'Jason')
    {
        break;
    }
    console.log(people[personne]);
}

/******************Exercise2*************************/

const colors = ['white','red','blue','black'];

for(let color in colors)
{
    console.log(`Mon ${Number(color) + 1} est ${colors[color]}`);
}



/******************Exercise3*************************/

let checker = true;

while(checker)
{
    entree = prompt('Entrer un nombre');

    type = typeof(entree);

    console.log(type);

    nombre = Number(entree);

    if(!isNaN(nombre) && nombre > 10 )
    {
        break
    }
}

/******************Exercise4*************************/
//question1
const building = {
    numberOfFloors: 4,
    numberOfAptByFloor: {
        firstFloor: 3,
        secondFloor: 4,
        thirdFloor: 9,
        fourthFloor: 2,
    },
    nameOfTenants: ["Sarah", "Dan", "David"],
    numberOfRoomsAndRent:  {
        sarah: [3, 990],
        dan:  [4, 1000],
        david: [1, 500],
    },
}

//question2
console.log(building.numberOfFloors);


//Question3
console.log(building.numberOfAptByFloor.firstFloor);
console.log(building.numberOfAptByFloor.thirdFloor);

//question4
console.log(building.nameOfTenants[1]);

//question5
 sarahAndDavidRent = building.numberOfRoomsAndRent.sarah[1] + building.numberOfRoomsAndRent.david[1];
 danRent = building.numberOfRoomsAndRent.dan[1];

 if (sarahAndDavidRent > danRent) {
    danRent += 1200
 }

 /******************Exercise5*************************/
const famille = {
    nom : "KOUABENAN",
    prenom:"Raissa",
    pays: "Cote d'Ivoire",
}

for(let enfant in famille)
{
    console.log(enfant);
}

for(let child in famille)
{
    console.log(famille[child]);
}
 /******************Exercise6*************************/


const details = {
    my: 'name',
    is: 'Rudolf',
    the: 'raindeer'
  }

  let text = "";

  for(let x in details)
  {
    text += x + ' ' + details[x] + ' ';
  }

  console.log(text);

   /******************Exercise7*************************/
const names = ["Jack", "Philip", "Sarah", "Amanda", "Bernard", "Kyle"];

names.sort();

let secret = '';
for(let x of names)
{
    secret += x[0]
}
console.log(secret);