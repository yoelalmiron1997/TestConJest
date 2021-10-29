const text = "Buenas Tardes";
const fruits = ["manzana", "melon", "banana"];
const numero = 35;
//Ejemplo de Match
test("Debe contener texto", () => {
  expect(text).toMatch(/Tardes/);
});

//Ejemplo de Contain, es con un arreglo.
test(" tenemos una banana?", () => {
  expect(fruits).toContain("banana");
});

//Ejemplo de toBeGreaterThan, le pase una variable.
test("Mayor que", () => {
  expect(numero).toBeGreaterThan(25);
});

//Ejemplo de Booleano,solo para true
//Paraunfalse  se usa un toBeFalsy()
test("Verdadero", () => {
  expect(true).toBeTruthy();
});

//Ejemplo de Callback

const reverseString = (str, callback) => {
  callback(str.split("").reverse().join(""));
};

test("Probbar un Callback", () => {
  reverseString("Hola", (str) => {
    expect(str).toBe("aloH");
  });
});

//Ejemplo de promesa

const reverseString2 = (str) => {
  return new Promise((resolve, reject) => {
    if (!str) {
      reject(Error("Error"));
    }
    resolve(str.split("").reverse().join(""));
  });
};

test("Probar  una promesa", () => {
  return reverseString2("Hola").then((String) => {
    expect(String).toBe("aloH");
  });
});

//Ejemplo de Async/await

test("", async () => {
  const string = await reverseString2("hola");
  expect(string).toBe("aloh");
});

//corro el codigo antes de las pruebas

//afterEach(() => console.log("Despues de cada prueba"));
//afterAll(() => console.log("Despues de todas las pruebas"));

//beforeEach(() => console.log("Antes de cada prueba"));
//beforeAll(() => console.log("Antes de todas las pruebas"));
//Esto esta documentado para que no moleste en el npm run test:watch