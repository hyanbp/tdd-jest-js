class FizzBuzz {


    async multipleThree(value) {
        const result = value % 3
        return result === 0 ? 'Fizz' : value
    }

    async multipleFive(value) {
        const result = value % 5
        return result === 0 ? 'Buzz' : value
    }

    async multipleFiveAndThree(value) {
        const fiveDivision = value % 5
        const threeDivision = value % 3
        if (threeDivision === 0 && fiveDivision === 0) return 'FizzBuzz'
        return value
    }

    async pipeFizzBuzz(value) {
        const twoValues = await this.multipleFiveAndThree(value)
        if (twoValues !== value) return twoValues

        const three = await this.multipleThree(value)
        if (three !== value) return three

        const fiveDivision = await this.multipleFive(value)
        if (fiveDivision !== value) return fiveDivision

        return value

    }

}
module.exports = new FizzBuzz();