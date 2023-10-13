let names = ["ahmad", "omer", "eman", "rawan", "rami", "feras", "ghadeer", "eyad"]
var lowercaseLetters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
let MyRandomIndex = Math.floor(Math.random()*lowercaseLetters.length)
let Genratedletter = lowercaseLetters[MyRandomIndex]
console.log(Genratedletter)
function checkName(TheLatter) {
    for (let i = 0; i < names.length; i++) {
        if (names[i][0] == Genratedletter) {
            console.log(`The index ${[i]} is the name ${names[i]} is starting with the letter ${Genratedletter}`)
        }
    }
}
checkName()