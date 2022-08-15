const randomString = require('../index')


describe('Probar grupo de funcionalidades', () => {

    test('Probar la funcionalidad', () => {
        expect(typeof (randomString())).toBe('string')
    })

    test('Probar que no existe una ciudad', () => { 
        expect(randomString()).not.toMatch(/Cordoba/)
     })
})

