import { increment } from "../../../code"
import { Step, Window } from "../../../types"
import { abs } from "../../typedOperations"
import { Exponent } from "../../types"
import { PRIMES } from "../primes"
import { Integer } from "../types"
import { PatentValOptions, Val } from "./types"

const computePatentVal = <T extends Window>(options: PatentValOptions<T>): Val => {
    const { ed, window, primeLimit } = options

    const stepSize: number = window ** (1 / ed)

    const maxPrimeIndex = PRIMES.indexOf(primeLimit)

    let patentVal: Val = []
    for (let primeIndex = 0; primeIndex <= maxPrimeIndex; primeIndex = increment(primeIndex)) {
        const prime = PRIMES[ primeIndex ]

        let previousApproximation = undefined
        let currentApproximation = undefined
        let term = 0 as Integer & Exponent<Step>
        while (true) {
            previousApproximation = currentApproximation
            currentApproximation = stepSize ** term

            if (currentApproximation > prime) {
                const currentDiff = abs(currentApproximation - prime)
                const previousDiff = previousApproximation ? abs(previousApproximation - prime) : Infinity

                if (currentDiff < previousDiff) {
                    patentVal.push(term)
                } else {
                    patentVal.push(term - 1 as Integer & Exponent<Step>)
                }
                break
            }

            term = increment(term)
        }
    }

    return patentVal
}

export {
    computePatentVal,
}
