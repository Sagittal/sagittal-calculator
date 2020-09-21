import { Denominator, FractionalPart, NumericTypeParameters, parseInteger, Ratio } from "../../math"
import { BLANK, SUPERSCRIPT_NUMS } from "../constants"
import { Formatted } from "../format"
import { Char } from "../types"

const superscriptNums = ["⁰", "¹", "²", "³", "⁴", "⁵", "⁶", "⁷", "⁸", "⁹"].join()

const parseRatio = <T extends Ratio<{ unreduced: true }>>(ratioText: Formatted<T>): T => {
    const ratio = ratioText.split(/[\/:]/).map((fractionalPartText: string): FractionalPart => {
        if (fractionalPartText.match(new RegExp(`[${superscriptNums}.]`))) {
            const factorPowers = fractionalPartText.split(".")
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
            return parseInteger(fractionalPartText) as FractionalPart
        }
    })

    if (ratio.length === 1) {
        ratio.push(1 as Denominator)
    }

    if (ratioText.includes(":")) {
        ratio.reverse()
    }

    return ratio as T
}

export {
    parseRatio,
}
