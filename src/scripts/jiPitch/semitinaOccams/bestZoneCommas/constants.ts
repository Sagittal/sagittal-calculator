import {computeRange, Decimal, Index, Max, ONE, Prime, Quotient, scaleScamon, Scamon} from "@sagittal/general"
import {SEMITINA} from "../constants"
import {Semitina} from "../types"

const SEMITINA_ZONES: Array<Index<Semitina>> =
    computeRange(810 as Decimal<{integer: true}>) as number[] as Array<Index<Semitina>>
const SEMITINA_PLUS_MINUS_RANGE = 0.5
const MAX_SIZE_PER_SEMITINA_ZONE: Scamon[] = SEMITINA_ZONES.map((semitinaZone: Index<Semitina>): Scamon => {
    return scaleScamon(SEMITINA, [semitinaZone + SEMITINA_PLUS_MINUS_RANGE, ONE] as Quotient<{rational: true}>)
})

const MAX_PRIME_LIMIT_OF_ANY_SEMITINA_BUCKET_BEST_COMMA = 233 as Max<Max<Prime>>

export {
    SEMITINA_ZONES,
    SEMITINA_PLUS_MINUS_RANGE,
    MAX_SIZE_PER_SEMITINA_ZONE,
    MAX_PRIME_LIMIT_OF_ANY_SEMITINA_BUCKET_BEST_COMMA,
}
