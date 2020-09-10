import { formatMonzo } from "../../io"
import { computeRatioFromMonzo } from "./ratioFromMonzo"
import { Direction, Monzo } from "./types"

const computeIsSubMonzo = (monzo: Monzo): monzo is Monzo<{ direction: Direction.SUB }> => {
    if (monzo.every(term => term >= 0)) return false
    if (monzo.every(term => term <= 0)) return true

    let ratio
    try {
        ratio = computeRatioFromMonzo(monzo)
    } catch (e) {
        const numeratorMonzo = monzo.map(term => term > 0 ? term : 0) as Monzo
        const denominatorMonzo = monzo.map(term => term < 0 ? -term : 0) as Monzo

        let numeratorError = false
        try {
            computeRatioFromMonzo(numeratorMonzo)
        } catch (e) {
            numeratorError = true
        }

        let denominatorError = false
        try {
            computeRatioFromMonzo(denominatorMonzo)
        } catch (e) {
            denominatorError = true
        }

        if (numeratorError && !denominatorError) {
            return false
        } else if (denominatorError && !numeratorError) {
            return true
        } else {
            throw new Error(`Both the denominator and the numerator are huge for ${formatMonzo(monzo)} so it is not possible to tell whether it is sub.`)
        }
    }

    const value = ratio[ 0 ] / ratio[ 1 ]

    return value < 1
}

const computeIsSuperMonzo = (monzo: Monzo): monzo is Monzo<{ direction: Direction.SUPER }> => {
    return !computeIsSubMonzo(monzo)
}

export {
    computeIsSubMonzo,
    computeIsSuperMonzo,
}
