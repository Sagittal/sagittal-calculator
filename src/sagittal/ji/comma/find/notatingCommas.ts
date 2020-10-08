import {
    areMonzosEqual,
    Comma,
    computeRoughRationalMonzo,
    FIVE_ROUGHNESS,
    invertMonzo,
    Monzo,
    NumericProperties,
    Pitch,
} from "../../../../general"
import { computeCommasFrom23FreeRationalMonzo } from "./commasFrom23FreeMonzo"
import { CommasFrom23FreeMonzoOptions } from "./types"

const computeNotatingCommas = <T extends NumericProperties>(
    { monzo }: Pitch<T & { rational: true }>,
    options?: CommasFrom23FreeMonzoOptions,
): Comma[] => {
    // Todo: DEFER UNTIL AFTER SCALED MONZO
    //  CONDUCT AT PITCH LEVEL
    //  Yes, see all of this should be conducted at the pitch level. just computeRoughRatio, equalRatios,
    //  And even, I think computeCommasFrom23FreeClass!
    //  The monzo in zone thing could also be a rational in zone I think... but the name should be improved to reflect
    //  How it's searching only by octave equivalence at this point...
    //  Except now since all JI pitches ARE monzos, it feels more reasonable the way it is...

    const two3FreeRationalMonzo: Monzo<{ rational: true, rough: 5 }> =
        computeRoughRationalMonzo(monzo, FIVE_ROUGHNESS) as Monzo<{ rational: true, rough: 5 }>

    if (areMonzosEqual(two3FreeRationalMonzo, [])) {
        return computeCommasFrom23FreeRationalMonzo(two3FreeRationalMonzo, options)
    }

    return [
        ...computeCommasFrom23FreeRationalMonzo(two3FreeRationalMonzo, options),
        ...computeCommasFrom23FreeRationalMonzo(invertMonzo(two3FreeRationalMonzo), options),
    ]
}

export {
    computeNotatingCommas,
}
