import { Decimal, Monzo, NumTypeParameters, PotentiallyIrrationalNum, Ratio } from "../math"
import { Extrema } from "../types"
import { JiPitch } from "./ji"

type Cents = number & { _CentsBrand: boolean }

// TODO: 2,3-FREE IN MUSIC MODULE WHILE 5-ROUGH UNDERNEATH IN MATH MODULE
//  So we've established that prime limit is the direct musical equivalent of smooth in math
//  perhaps there is some way to fernangle it so that pitches could have free: [2,3] and then potentially you know
//  like [3,5,7] such as is the case in the Yer tuning system, where it's a chunk in the middle, nonconsecutive
//  and ji: true could map to potentiallyIrrational: false
type CentsPosition<T extends NumTypeParameters = {}> = (PotentiallyIrrationalNum<T> & { cents?: Cents }) | {
    cents: Cents,
    decimal?: Decimal<T>,
    monzo?: Monzo<T>,
    ratio?: Ratio<T>,
}

type Pitch<T extends NumTypeParameters = {}> =
    JiPitch<T> | CentsPosition<T>

type Zone<T = void> = Extrema<Pitch> & (T extends void ? {} : { _ZoneOfBrand: T })

export {
    CentsPosition,
    Cents,
    Zone,
    Pitch,
}
