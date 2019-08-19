const FizzBuzz = require('./fizzbuzz.js')

/**Escreva um pequeno programa que imprima cada número de 1 a 100 em uma nova linha.

Para cada múltiplo de 3, imprima "Fizz" em vez do número.

Para cada múltiplo de 5, imprima "Buzz" em vez do número.

Para números que são múltiplos de 3 e 5, imprima "FizzBuzz" em vez do número. */

describe('Hello TDD FizzBuz', () => {

    test('For numbers multiples of three should print FIZZ', async () => {
        const result = await FizzBuzz.multipleThree(3)
        expect(result).toBe('Fizz')
    })


    test('For numbers NOT multiples of three should print value', async () => {
        const value = 5
        const result = await FizzBuzz.multipleThree(value)
        expect(result).toBe(value)
    })

    test('For numbers multiples of five should print BUZZ', async () => {
        const result = await FizzBuzz.multipleFive(5)
        expect(result).toBe('Buzz')
    })


    test('For numbers NOT multiples of three should print value', async () => {
        const value = 6
        const result = await FizzBuzz.multipleFive(value)
        expect(result).toBe(value)
    })

});