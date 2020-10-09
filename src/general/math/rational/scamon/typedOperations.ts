import { addMonzos, NumericProperties, Quotient, Scamon, subtractMonzos, sumMonzos } from "../../numeric"
import { Mean, MeanType } from "../../types"
import { computeRationalMonzoFromRationalScamon } from "../monzo"

const addRationalScamons = <T extends NumericProperties>(
    rationalScamonA: Scamon<T & { rational: true }>,
    rationalScamonB: Scamon<T & { rational: true }>,
): Scamon<T & { direction: undefined, integer: false, rational: true }> =>
    ({
        monzo: addMonzos(rationalScamonA.monzo, rationalScamonB.monzo),
    }) as Scamon<T & { direction: undefined, integer: false, rational: true }>

const subtractRationalScamons = <T extends NumericProperties>(
    fromRationalScamon: Scamon<T & { rational: true }>,
    toRationalScamon: Scamon<T & { rational: true }>,
): Scamon<T & { direction: undefined, integer: false, rational: true }> =>
    ({
        monzo: subtractMonzos(toRationalScamon.monzo, fromRationalScamon.monzo),
    }) as Scamon<T & { direction: undefined, integer: false, rational: true }>

const computeRationalScamonGeometricMean = (
    ...rationalScamons: Array<Scamon<{ rational: true }>>
): Mean<{ of: Scamon<{ rational: false }>, meanType: MeanType.GEOMETRIC }> => {
    return {
        monzo: sumMonzos(...rationalScamons.map(computeRationalMonzoFromRationalScamon)),
        scaler: [1, rationalScamons.length] as Quotient,
    } as Mean<{ of: Scamon<{ rational: false }>, meanType: MeanType.GEOMETRIC }>
}

export {
    subtractRationalScamons,
    addRationalScamons,
    computeRationalScamonGeometricMean,
}
