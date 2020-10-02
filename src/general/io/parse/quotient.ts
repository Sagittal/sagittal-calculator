import { Denominator, NumericProperties, QuotientPart, RealQuotient } from "../../math"
import { BLANK, SUPERSCRIPT_NUMBERS } from "../constants"
import { split } from "../typedOperations"
import { Char, Io } from "../types"
import { parseInteger } from "./integer"

const superscriptReals = SUPERSCRIPT_NUMBERS.join()

const parseQuotient = <T extends NumericProperties>(quotientIo: Io): RealQuotient<T> => {
    const realQuotient = split(quotientIo, /[\/:]/).map((quotientPartIo: Io): QuotientPart => {
        if (quotientPartIo.match(new RegExp(`[${superscriptReals}.]`))) {
            const factorPowers = quotientPartIo.split(".")
            return factorPowers.reduce(
                (product: QuotientPart, factorPower: string): QuotientPart => {
                    const exponentPartOfFactorPower: string = factorPower.replace(new RegExp(`[^${superscriptReals}]`, "g"), "")
                    const basePartOfFactorPower = factorPower.replace(exponentPartOfFactorPower, "")

                    const base = parseInteger(basePartOfFactorPower)
                    const power = exponentPartOfFactorPower === BLANK ?
                        1 :
                        SUPERSCRIPT_NUMBERS.indexOf(exponentPartOfFactorPower as Char)

                    return product * base ** power as QuotientPart
                },
                1 as QuotientPart,
            )
        } else {
            return parseFloat(quotientPartIo) as QuotientPart
        }
    })

    if (realQuotient.length === 1) {
        realQuotient.push(1 as Denominator)
    }

    if (quotientIo.includes(":")) {
        realQuotient.reverse()
    }

    return realQuotient as RealQuotient<T>
}

export {
    parseQuotient,
}
