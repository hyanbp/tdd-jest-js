const FizzBuzz = require('./fizzbuzz.js')

describe('[GIVEN] Para cada múltiplo de 3, imprima "Fizz" em vez do número \n'
         + ' Para cada múltiplo de 5, imprima "Buzz" em vez do número \n'
         + ' Para números que são múltiplos de 3 e 5, imprima "FizzBuzz" em vez do número.', () => {

    test('[THEN] - For numbers multiples of three should print FIZZ', async () => {
        const result = await FizzBuzz.multipleThree(3)
        expect(result).toBe('Fizz')
    })


    test('[THEN] - For numbers NOT multiples of three should print value', async () => {
        const value = 5
        const result = await FizzBuzz.multipleThree(value)
        expect(result).toBe(value)
    })

    test('[THEN] - For numbers multiples of five should print BUZZ', async () => {
        const result = await FizzBuzz.multipleFive(5)
        expect(result).toBe('Buzz')
    })


    test('[THEN] - For numbers NOT multiples of three should print value', async () => {
        const value = 6
        const result = await FizzBuzz.multipleFive(value)
        expect(result).toBe(value)
    })


    test('[THEN] - Multiple two Five And Three should print FIZZBUZZ', async () => {
        const result = await FizzBuzz.multipleFiveAndThree(15)
        expect(result).toBe('FizzBuzz')
    })

    test('[THEN] - Zero to fifteen shoud to list mock', async() => {
        const mock = [1,2,'Fizz',4,'Buzz','Fizz',7,8,'Fizz','Buzz',11,'Fizz',13,14,'FizzBuzz']
        const result = []   
        for(i = 1 ; i <= 15 ; i++){
            result.push(await FizzBuzz.pipeFizzBuzz(i))
        }   
        expect(result).toEqual(mock)
    })

});