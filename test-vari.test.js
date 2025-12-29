const {getInitials} = require("./test-vari.js")

//🏆 Snack 1
//Creare un test che verifichi la seguente descrizione:
//👉 "La funzione getInitials restituisce le iniziali di un nome completo.

test('La funzione getInitials restituisce le iniziali di un nome completo',() => {
    expect(getInitials("Fabio")).toBe("F")
    expect(getInitials("Giusy")).toBe("G")
    expect(getInitials("ciao")).toBe("c")
})
