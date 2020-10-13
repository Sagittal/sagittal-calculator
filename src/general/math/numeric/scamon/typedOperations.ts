import { Decimal, divide, Max, Min, multiply, NumericProperties } from "../../../math"
import { computeIrrationalDecimalFromScamon, computeIrrationalScamonFromDecimal, HALF_SCALER } from "../../irrational"
import { Scamon } from "./types"

const addScamons = (scamonA: Scamon, scamonB: Scamon): Scamon<{ direction: undefined, rational: false }> =>
    computeIrrationalScamonFromDecimal(
        multiply(computeIrrationalDecimalFromScamon(scamonA), computeIrrationalDecimalFromScamon(scamonB)),
    ) as Scamon<{ direction: undefined, rational: false }>

const subtractScamons = (fromScamon: Scamon, toScamon: Scamon): Scamon<{ direction: undefined, rational: false }> =>
    computeIrrationalScamonFromDecimal(
        divide(computeIrrationalDecimalFromScamon(toScamon), computeIrrationalDecimalFromScamon(fromScamon)),
    ) as Scamon<{ direction: undefined, rational: false }>

const halfScamon = <T extends NumericProperties>(scamon: Scamon<T>): Scamon<T & { rational: false }> =>
    ({ ...scamon, scaler: HALF_SCALER } as Scamon<T & { rational: false }>)

const maxScamon = (...scamons: Array<Scamon>): Max<Scamon> => {
    let maxDecimal = -Infinity as Decimal
    let maxIndex = undefined

    scamons.map(computeIrrationalDecimalFromScamon).forEach((decimal: Decimal, index: number): void => {
        if (decimal > maxDecimal) {
            maxDecimal = decimal
            maxIndex = index
        }
    })

    return scamons[ maxIndex as unknown as number ] as Max<Scamon>
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

    return scamons[ minIndex as unknown as number ] as Min<Scamon>
}

export {
    addScamons,
    halfScamon,
    maxScamon,
    minScamon,
    subtractScamons,
}
