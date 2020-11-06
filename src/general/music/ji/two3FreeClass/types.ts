import {Score} from "../../../lfc"
import {Decimal, Direction, Scamon} from "../../../math"

type Two3FreeClass =
    Scamon<{rational: true, rough: 5, direction: Direction.SUPER}
        | {rational: true, rough: 5, direction: Direction.UNISON}>
    & {_Two3FreeClassBrand: boolean}

interface ScalaPopularityStat {
    two3FreeClass: Two3FreeClass,
    votes: Decimal<{integer: true}> & Score<ScalaPopularityStat>,
}

export {
    ScalaPopularityStat,
    Two3FreeClass,
}
