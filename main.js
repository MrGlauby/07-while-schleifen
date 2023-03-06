"use strict";
/*
While-Schleifen sollten verwendet werden, wenn:
Sie Ihren Code unbegrenzt lange ausführen möchten.
Sie den Programmcode ausführen möchten, bis eine Bedingung erfüllt ist.
Sie möchten, dass der Benutzer steuert, wann der Code anhalten sollte.
*/

/*
CONTINUE
- wird benutzt wenn man gewisse codeblöcke vermeiden mnöchte
*/

/*
BREAK
- schleife beenden
*/




// //während die Bedinungn erfüllt ist, führe diesen code aus - wenn nicht dann passiet nix
// while (Bedingung){
//     //anweisung
// };


let x= 0; //zählen
while(x < 5){
    // x += 1     //x = x +1;  // x++;
    console.log(`While: ${x} `);
    x++;
};

// let y= 0; //zählen
// while(x < 5){
//     // x += 1     //x = x +1;  // x++;
//     console.log(`While: ${x} `);
//     x++;
// };

//for schelife (wichtigste)

// Sie Code eine bestimmte Anzahl von Malen ausführen müssen.
// Sie eine festgelegte Anzahl von Messungen in eine Datei schreiben wollen.
// Sie eine bestimmte Anzahl von Datenpunkten erfassen möchten.

for (){
    
}


// -------------------------------------------------




/*
while (Bedingung) {
    ...
}
*/

// let x = 0; // <-- Zählvariable

// while (x < 5) {
//     //x++;
//     console.log(`While: ${x}`);
//     x++;
// }

// x = 1
// x = 2
// x = 3
// x = 4
// x = 5

// Vorsicht vor Endlosschleifen!
/*
let y = 0;

while (y >= 0) {
    console.log("TEST!");
    y++;
}
*/

// -------------------------


// Break und Continue

let z = 0;

while( z < 10){
    z++;
    if(z == 5){
        continue;
    };
    console.log(z);
};