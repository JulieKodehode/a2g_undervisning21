// For Loops

for (
    let i = 5; // Declares a variable that starts with 0
    i < 10; // Checks if variable is less then 5
    i++ // Adds the index + index to count a iteration
    ) {
        console.log("Hello World!");
        console.log(i);
};

console.log("NY KODE UNDER");

for (let index = 0; index < 5; index++) {
    console.log("Hei Verden");
    console.log(index);
};

console.log("NY KODE UNDER");

// Oppgave: Lag en variabel som lagrer en basic array/flat array
const fruits = ["Apple", "Pear", "Banana"];
//console.log(fruits[0]);
//console.log(fruits[1]);
//console.log(fruits[2]);

for (let index = 0; index < fruits.length; index++) {
    console.log(index);
    console.log(fruits[index]);
}

// Oppgave: Lag en ny variabel som lagrer en basic array/flat array
//          Sett opp en 'for loop' som logger gjennom alle array elementene
const artists = ["Coldplay", "Imagine Dragons", "Eminem"];
//console.log(artists);

for (let index = 0; index < artists.length; index++) {
    console.log(artists[index]);
}

//
console.log("NY KODE UNDER")
//

for (let index = 5; index >= 0; index--) {
    console.log(index);
}