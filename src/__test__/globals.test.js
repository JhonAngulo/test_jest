const text = 'Hola Mundo'

const fruits = ['manzana', 'melon', 'banana']

test('Debe contener un texto', () => {
    expect(text).toMatch(/Mundo/)
})

test('Tenemos una banana?', () => {
    expect(fruits).toContain('banana')
})


test('Mayor que', () => { 
    expect(10).toBeGreaterThan(9)
})

test('Verdadero, Booleano', () => { 
    expect(true).toBeTruthy()
 })

 const reverseString = (str, callback) => {
    callback(str.split("").reverse().join(""))
 }

 test('Probar un callback', () => { 
    reverseString('Hola', (str) => {
        expect(str).toBe('aloH')
    })
  })


// ________________________ promesas ________________________ 

const reverseString2 = str => {
    return new Promise((resolve, reject) => {
        if (!str) {
            reject(Error('Error'))
        }

        resolve(str.split("").reverse().join(""))
    })
}

test('Probar una promesa', () => {
    return reverseString2("Hola")
    .then(string => {
        console.log(string)
        expect(string).toBe('aloH')
    })
 })

 test('Probar async/await', async () => { 
    const string = await reverseString2('Hola')
    expect(string).toBe('aloH')
  })

  // ________________________ antes y despues de las pruebas ________________________ 

afterEach(() => console.log('Despues de cada prueba'))
afterAll(() => console.log('Despues de todas las prueba'))
beforeEach(() => console.log('Antes de cada prueba'))
beforeAll(() => console.log('Antes de todas las prueba'))

