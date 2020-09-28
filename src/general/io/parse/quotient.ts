import { Denominator, FractionalPart, NumTypeParameters, Quotient } from "../../math"
import { BLANK, SUPERSCRIPT_NUMS } from "../constants"
import { split } from "../typedOperations"
import { Char, Io } from "../types"
import { parseInteger } from "./integer"

const superscriptNums = SUPERSCRIPT_NUMS.join()

const parseQuotient = <T extends NumTypeParameters>(quotientIo: Io): Quotient<T> => {
    const quotient = split(quotientIo, /[\/:]/).map((fractionalPartIo: Io): FractionalPart => {
        if (fractionalPartIo.match(new RegExp(`[${superscriptNums}.]`))) {
            const factorPowers = fractionalPartIo.split(".")
            return factorPowers.reduce(
                (product: FractionalPart, factorPower: string): FractionalPart => {
                    const exponentPartOfFactorPower: string = factorPower.replace(new RegExp(`[^${superscriptNums}]`, "g"), "")
                    const basePartOfFactorPower = factorPower.replace(exponentPartOfFactorPower, "")

                    const base = parseInteger(basePartOfFactorPower)
                    const power = exponentPartOfFactorPower === BLANK ?
                        1 :
                        SUPERSCRIPT_NUMS.indexOf(exponentPartOfFactorPower as Char)

                    return product * base ** power as FractionalPart
                },
                1 as FractionalPart,
            )
        } else {
            return parseFloat(fractionalPartIo) as FractionalPart
        }
    })

    if (quotient.length === 1) {
        quotient.push(1 as Denominator)
    }

    if (quotientIo.includes(":")) {
        quotient.reverse()
    }

    return quotient as Quotient<T>
}

export {
    parseQuotient,
}
