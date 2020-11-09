import {computeRange, Decimal, Index, ONE, Quotient, scaleScamon, Scamon} from "../../../../general"
import {SEMITINA} from "../constants"
import {Semitina} from "../types"

const SEMITINA_ZONES: Array<Index<Semitina>> =
    computeRange(810 as Decimal<{integer: true}>) as number[] as Array<Index<Semitina>>
const SEMITINA_PLUS_MINUS_RANGE = 0.5
const MAX_SIZE_PER_SEMITINA_ZONE: Scamon[] = SEMITINA_ZONES.map((semitinaZone: Index<Semitina>): Scamon => {
    return scaleScamon(SEMITINA, [semitinaZone + SEMITINA_PLUS_MINUS_RANGE, ONE] as Quotient<{rational: true}>)
})

export {
    SEMITINA_ZONES,
    SEMITINA_PLUS_MINUS_RANGE,
    MAX_SIZE_PER_SEMITINA_ZONE,
}
