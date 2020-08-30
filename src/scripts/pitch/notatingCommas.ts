import {
    Cents,
    computeMonzoSlicedToPrimeIndex,
    concat,
    Exponent,
    Integer,
    invertMonzo,
    Max,
    Min,
    Monzo,
    Prime,
} from "../../general"
import { AnalyzedRationalPitch, MAX_SINGLE_SHAFT_CENTS } from "../../sagittal"
import { computeCommasFromFiveSlicedMonzo } from "./commasFromFiveSlicedMonzo"

const computeNotatingCommas = (monzo: Monzo): Array<AnalyzedRationalPitch> => {
    const fiveSlicedMonzo: Monzo<Integer, 5> = computeMonzoSlicedToPrimeIndex(monzo, 5)

    // TODO: for now we're just using the same default max abs3exp from the other script,
    //  but should probably be a CLI arg...
    //  along with all the other args also used by findCommas...

    let notatingCommas = computeCommasFromFiveSlicedMonzo(fiveSlicedMonzo, {
        minCents: 0 as Min<Cents>,
        maxCents: MAX_SINGLE_SHAFT_CENTS,
        maxAbsoluteThreeExponent: 15 as Max<Exponent<Prime>>,
    })
    const inversedMonzo = invertMonzo(fiveSlicedMonzo)
    const notatingCommasFromInverseMonzo = computeCommasFromFiveSlicedMonzo(inversedMonzo, {
        minCents: 0 as Min<Cents>,
        maxCents: MAX_SINGLE_SHAFT_CENTS,
        maxAbsoluteThreeExponent: 15 as Max<Exponent<Prime>>,
    })
    notatingCommas = concat(notatingCommas, notatingCommasFromInverseMonzo)

    return notatingCommas
}

// TODO: this should sort them by something reasonable, such as cents

export {
    computeNotatingCommas,
}
