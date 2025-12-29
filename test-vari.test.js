const {getInitials, createSlug} = require("./test-vari.js")

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
    expect(createSlug("Ciao Mi Chiamo Fabio")).toBe("ciao mi chiamo fabio")
})
