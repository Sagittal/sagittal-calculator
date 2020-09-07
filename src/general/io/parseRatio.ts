import { parseInteger, Ratio } from "../math"
import { BLANK, SUPERSCRIPT_NUMS } from "./constants"
import { Char, Formatted } from "./types"

const superscriptNums = ["⁰", "¹", "²", "³", "⁴", "⁵", "⁶", "⁷", "⁸", "⁹"].join()

const parseRatio = (ratioText: Formatted<Ratio>): Ratio => {
    const ratio = ratioText.split(/[\/:]/).map(fractionalPartText => {
        if (fractionalPartText.match(new RegExp(`[${superscriptNums}.]`))) {
            const factorPowers = fractionalPartText.split(".")
            return factorPowers.reduce(
                (product, factorPower) => {
                    const exponentPartOfFactorPower: string = factorPower.replace(new RegExp(`[^${superscriptNums}]`, "g"), "")
                    const basePartOfFactorPower = factorPower.replace(exponentPartOfFactorPower, "")

                    const base = parseInteger(basePartOfFactorPower)
                    const power = exponentPartOfFactorPower === BLANK ?
                        1 :
                        SUPERSCRIPT_NUMS.indexOf(exponentPartOfFactorPower as Char)

                    return product * base ** power
                },
                1,
            )
        } else {
            return parseInteger(fractionalPartText)
        }
    })

    if (ratio.length === 1) {
        ratio.push(1)
    }

    if (ratioText.includes(":")) {
        ratio.reverse()
    }

    return ratio as Ratio
}

export {
    parseRatio,
}
