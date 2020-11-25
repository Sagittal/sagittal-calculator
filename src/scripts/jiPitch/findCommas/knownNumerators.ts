import {
    computeRationalMonzoCopfr,
    computeRationalMonzoFromRationalQuotient,
    computeRationalMonzoSmoothness,
    computeRationalMonzoSopfr,
    EMPTY_MONZO,
    invertMonzo,
    isUndefined,
    Monzo,
} from "../../../general"
import { computeKnownRationalQuotients, MAX_N2D3P9_FOR_WHICH_POSSIBLE_NUMERATORS_ARE_KNOWN } from "../../../sagittal"
import { Two3FreeMonzosToCheckOptions } from "./types"

const compute23FreeRationalMonzosToCheckFromKnownLowN2D3P9Numerators = (
    options: Two3FreeMonzosToCheckOptions = {},
): Array<Monzo<{ rational: true, rough: 5 }>> => {
    const {
        maxPrimeLimit,
        max23FreeSopfr,
        max23FreeCopfr,
        maxN2D3P9 = MAX_N2D3P9_FOR_WHICH_POSSIBLE_NUMERATORS_ARE_KNOWN,
    } = options

    const monzosToCheck: Array<Monzo<{ rational: true, rough: 5 }>> = [
        EMPTY_MONZO as Monzo<{ rational: true, rough: 5 }>,
    ] as Array<Monzo<{ rational: true, rough: 5 }>>
    computeKnownRationalQuotients(maxN2D3P9)
        .map(computeRationalMonzoFromRationalQuotient)
        .forEach((rationalMonzo: Monzo<{ rational: true, rough: 5 }>): void => {
            monzosToCheck.push(rationalMonzo)
            monzosToCheck.push(invertMonzo(rationalMonzo))
        })

    return monzosToCheck.filter((monzoToCheck: Monzo<{ rational: true, rough: 5 }>): boolean => {
        if (!isUndefined(max23FreeSopfr) && computeRationalMonzoSopfr(monzoToCheck) > max23FreeSopfr) {
            return false
        }
        if (!isUndefined(max23FreeCopfr) && computeRationalMonzoCopfr(monzoToCheck) > max23FreeCopfr) {
            return false
        }
        return !(!isUndefined(maxPrimeLimit) && computeRationalMonzoSmoothness(monzoToCheck) > maxPrimeLimit)
    })
}

export {
    compute23FreeRationalMonzosToCheckFromKnownLowN2D3P9Numerators,
}
