const {getInitials, createSlug, average, isPalindrome} = require("./test-vari.js")

//🏆 Snack 1
//Creare un test che verifichi la seguente descrizione:
//👉 "La funzione getInitials restituisce le iniziali di un nome completo.

test('La funzione getInitials restituisce le iniziali di un nome completo',() => {
    expect(getInitials("Fabio")).toBe("F")
    expect(getInitials("Giusy")).toBe("G")
    expect(getInitials("ciao")).toBe("c")
})

//🏆 Snack 2
//Creare un test che verifichi la seguente descrizione:
//👉 "La funzione createSlug restituisce una stringa in lowercase."

test("La funzione createSlug restituisce una stringa in lowercase.",() => {
    expect(createSlug("Ciao Mi Chiamo Fabio")).toBe("ciao-mi-chiamo-fabio")
})

//🏆 Snack 3
//Creare un test che verifichi la seguente descrizione:
//👉 "La funzione average calcola la media aritmetica di un array di numeri."

test("La funzione average calcola la media aritmetica di un array di numeri.", () => {
    expect(average([5, 5, 5])).toBe(5);
    expect(average([9, 5])).toBe(7);
    expect(average([15, 12, 6])).toBe(11);
})

//🏆 Snack 4
//Creare un test che verifichi la seguente descrizione:
//👉 "La funzione createSlug sostituisce gli spazi con -."
//📌 Esempi:
//createSlug("Questo è un test") → "questo-e-un-test"

test("La funzione createSlug sostituisce gli spazi con -.",() => {
    expect(createSlug("Ciao Mi Chiamo Fabio")).toBe("ciao-mi-chiamo-fabio")
})

//🏆 Snack 5
//Creare un test che verifichi la seguente descrizione:
//👉 "La funzione isPalindrome verifica se una stringa è un palindromo."
//📌 Nota: una stringa palindroma è una sequenza di caratteri che si legge uguale sia da sinistra a destra che da destra a sinistra.

test("La funzione isPalindrome verifica se una stringa è un palindromo.",() => {
    expect(isPalindrome("anna")).toBeTruthy()
    expect(isPalindrome("fabio")).toBeFalsy()
})
