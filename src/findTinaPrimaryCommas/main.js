const {PRIMES} = require("./constants")

const args = process.argv.slice(2)

const lowerBound = args[0]
const upperBound = args[1]

console.log(typeof lowerBound, lowerBound)

const noTwosThreesTerms = [1,1,5,7,11,13,17,19,23,29,31,37]

const results = []

const findComma = (five, seven, eleven, thirteen, seventeen, nineteen, twentythree, twentynine, thirtyone, thirtyseven) => {
    [...Array(61).keys()].map(k => k - 30).forEach(two => {
        [...Array(31).keys()].map(k => k - 15).forEach(three => {
            const result = Math.log2(
                2 ** two *
                3 ** three *
                5 ** five *
                7 ** seven *
                11 ** eleven *
                13 ** thirteen *
                17 ** seventeen *
                19 ** nineteen *
                23 ** twentythree *
                29 ** twentynine *
                31 ** thirtyone *
                37 ** thirtyseven
            ) * 1200
            // if (result > 36.325 && result < 36.5293) {
            if (result > lowerBound && result < upperBound) {
                const monzo = [two, three, five, seven, eleven, thirteen, seventeen, nineteen, twentythree, twentynine, thirtyone, thirtyseven]
                while(monzo[monzo.length - 1] === 0){
                    monzo.pop()
                }

                const numerator = monzo.reduce((a, m, i) => m > 0 ? a * PRIMES[i] ** m : a, 1)
                const denominator = monzo.reduce((a, m, i) => m < 0 ? a * PRIMES[i] ** -m : a, 1)
                const noTwosThreesNumerator = monzo.reduce((a, m, i) => m > 0 ? a * noTwosThreesTerms[i] ** m : a, 1)
                const noTwosThreesDenominator = monzo.reduce((a, m, i) => m < 0 ? a * noTwosThreesTerms[i] ** -m : a, 1)
                const sopfgtt = computeSopfgtt(monzo)
                const apotomeSlope = (three - 7) * result/113.685
                const limit = PRIMES[monzo.length - 1]

                const output = `${result}\t| ${monzo.join(' ')} >\t\t${numerator}/${denominator}\t\t${noTwosThreesNumerator}/${noTwosThreesDenominator}S\t\t${limit}\t\t${apotomeSlope}\t\t${sopfgtt}`
                results.push({sopfgtt, output})
            }
        })
    })
}

[-4, -3, -2, -1, 0, 1, 2, 3, 4].forEach(five => {
    [-4, -3, -2, -1, 0, 1, 2, 3, 4].forEach(seven => {
        [-4, -3, -2, -1, 0, 1, 2, 3, 4].forEach(eleven => {
            [-3, -2, -1, 0, 1, 2, 3].forEach(thirteen => {
                [-3, -2, -1, 0, 1, 2, 3].forEach(seventeen => {
                    [-2, -1, 0, 1, 2].forEach(nineteen => {
                        [-1, 0, 1].forEach(twentythree => {
                            [-1, 0, 1].forEach(twentynine => {
                                [-1, 0, 1].forEach(thirtyone => {
                                    [-1, 0, 1].forEach(thirtyseven => {
                                        const totalPrimes = [five, seven, eleven, thirteen, seventeen, nineteen, twentythree, twentynine, thirtyone, thirtyseven].reduce((acc, prime) => {
                                            return acc + Math.abs(prime)
                                        }, 0)

                                        let MAXIMUM_PRIMES_GREATER_THAN_THREE = 5
                                        if (totalPrimes < MAXIMUM_PRIMES_GREATER_THAN_THREE) {
                                            findComma(five, seven, eleven, thirteen, seventeen, nineteen, twentythree, twentynine, thirtyone, thirtyseven)
                                        }
                                    })
                                })
                            })
                        })
                    })
                })
            })
        })
    })
})

results.sort(({ sumOfPrimes}, {sumOfPrimes: nextSumOfPrimes}) => sumOfPrimes - nextSumOfPrimes)

results.forEach(({ output }) => console.log(output))

/*
// script for appraising a monzo

const terms = [2,3,5,7,11,13,17,19,23,29,31,37]
const sumOfPrimesTerms = [0,0,5,7,11,13,17,19,23,29,31,37]

const monzo = [-7, 1, 0, -3, 4]
const result = (Math.log2(
        2 ** (monzo[0] || 0) *
        3 ** (monzo[1] || 0) *
        5 ** (monzo[2] || 0) *
        7 ** (monzo[3] || 0) *
        11 ** (monzo[4] || 0) *
  13 ** (monzo[5] || 0)
      ) * 1200) % 1200
const numerator = monzo.reduce((a, m, i) => m > 0 ? a * terms[i] ** m : a, 1)
const denominator = monzo.reduce((a, m, i) => m < 0 ? a * terms[i] ** -m : a, 1)
const sumOfPrimes = monzo.reduce((a, m, i) => a + sumOfPrimesTerms[i] * Math.abs(m), 0)
const apotomeSlope = monzo[1] - 7 * result/113.685

console.log(`${numerator}/${denominator}`)
console.log(apotomeSlope.toPrecision(3))
console.log(sumOfPrimes)
 */

// TODO: per https://docs.google.com/spreadsheets/d/1fUXdga6ID1Myt6LfFBBYTjNsh7XC-lEV8SsLuS_nyJU/edit#gid=1736127328, should be able to find commas within a certain range, yes, but also for specific prime content
