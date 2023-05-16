// VARIABILE NOME 
let name = prompt('Iserisci il tuo nome');

// VARIABILE COGNOME 
let surname = prompt('Iserisci il tuo cognome');

// VARIABILE COLORE 
let preferite_color = prompt('Iserisci il tuo colore preferito');

// VARIABILE ANNO DI NASCITA  
let number = '21';

let password = name + surname + preferite_color + number

document.getElementById('password').innerHTML = password