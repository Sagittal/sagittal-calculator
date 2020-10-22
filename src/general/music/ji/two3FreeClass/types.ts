import {Decimal, Direction, Scamon} from "../../../math"

type Two3FreeClass =
    Scamon<{rational: true, rough: 5, direction: Direction.SUPER}
        | {rational: true, rough: 5, direction: Direction.UNISON}>
    & {_Two3FreeClassBrand: boolean}

type Votes = Decimal<{integer: true}> & {_VotesBrand: boolean}

interface Popularity {
    two3FreeClass: Two3FreeClass,
    votes: Votes,
}

export {
    Votes,
    Popularity,
    Two3FreeClass,
}
