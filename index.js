// Write your solution here!
const cats = ["Milo", "Otis", "Garfield"];

const destructivelyAppendCat = cats.push("Ralph");

const destructivelyPrependCat = cats.unshift("Bob");

const destructivelyRemoveLastCat = cats.pop();

const destructivelyRemoveFirstCat = cats.shift();

const appendCat = [...cats,"Broom "];


const removeLastCat = cats.slice(0, cats.length-1);

const removeFirstCat = cats.slice(1);