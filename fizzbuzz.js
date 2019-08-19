class FizzBuzz {


    async multipleThree(value) {
        const result = value % 3
        return result === 0 ?'Fizz' : value
    }

    async multipleFive(value) {
        const result = value % 5
        return result === 0 ? 'Buzz' : value
    }

}
module.exports = new FizzBuzz();