import {Decimal, divide, Exponent, Max, Min, multiply, NumericProperties, Prime} from "../../../math"
import {Multiplier} from "../../../types"
import {computeIrrationalDecimalFromScamon, computeIrrationalScamonFromDecimal, HALF_SCALER} from "../../irrational"
import {Scamon} from "./types"

// TODO: RESOLVE NUMERIC BRAND STRUGGLES
//  You can't easily add Commas; this doesn't handle passing through the Scamon's brand if it has one
const addScamons = (scamonA: Scamon, scamonB: Scamon): Scamon<{direction: undefined, rational: false}> =>
    computeIrrationalScamonFromDecimal(
        multiply(computeIrrationalDecimalFromScamon(scamonA), computeIrrationalDecimalFromScamon(scamonB)),
    ) as Scamon<{direction: undefined, rational: false}>

const subtractScamons = (fromScamon: Scamon, toScamon: Scamon): Scamon<{direction: undefined, rational: false}> =>
    computeIrrationalScamonFromDecimal(
        divide(computeIrrationalDecimalFromScamon(toScamon), computeIrrationalDecimalFromScamon(fromScamon)),
    ) as Scamon<{direction: undefined, rational: false}>

const halfScamon = <T extends NumericProperties>(scamon: Scamon<T>): Scamon<T & {rational: false}> =>
    ({...scamon, scaler: HALF_SCALER} as Scamon<T & {rational: false}>)

const maxScamon = (...scamons: Array<Scamon>): Max<Scamon> => {
    let maxDecimal = -Infinity as Decimal
    let maxIndex = undefined

    scamons.map(computeIrrationalDecimalFromScamon).forEach((decimal: Decimal, index: number): void => {
        if (decimal > maxDecimal) {
            maxDecimal = decimal
            maxIndex = index
        }
    })

    return scamons[maxIndex as unknown as number] as Max<Scamon>
}

const multiplyScamon = <T extends NumericProperties>(
    scamon: Scamon<T>,
    multiplier: Decimal<{integer: true}> & Multiplier,
): Scamon<T> => {
    return {
        ...scamon,
        monzo: scamon.monzo.map((primeExponent: Exponent<Prime>): Exponent<Prime> => {
            return multiply(primeExponent, multiplier as Decimal<{integer: true}> & Multiplier<Exponent<Prime>>)
        }),
    } as Scamon<T>
}

const minScamon = (...scamons: Array<Scamon>): Min<Scamon> => {
    let minDecimal = Infinity as Decimal
    let minIndex = undefined

    scamons.map(computeIrrationalDecimalFromScamon).forEach((decimal: Decimal, index: number): void => {
        if (decimal < minDecimal) {
            minDecimal = decimal
            minIndex = index
        }
    })

    return scamons[minIndex as unknown as number] as Min<Scamon>
}

export {
    addScamons,
    halfScamon,
    maxScamon,
    minScamon,
    subtractScamons,
    multiplyScamon,
}
