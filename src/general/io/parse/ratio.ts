import { Denominator, FractionalPart, NumTypeParameters, Ratio } from "../../math"
import { BLANK, SUPERSCRIPT_NUMS } from "../constants"
import { split } from "../typedOperations"
import { Char, Io } from "../types"
import { parseInteger } from "./integer"

const superscriptNums = SUPERSCRIPT_NUMS.join()

const parseRatio = <T extends NumTypeParameters>(ratioIo: Io): Ratio<T> => {
    const ratio = split(ratioIo, /[\/:]/).map((fractionalPartIo: Io): FractionalPart => {
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

    if (ratio.length === 1) {
        ratio.push(1 as Denominator)
    }

    if (ratioIo.includes(":")) {
        ratio.reverse()
    }

    return ratio as Ratio<T>
}

export {
    parseRatio,
}
