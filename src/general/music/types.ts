import { Irrational, NumericTypeParameters } from "../math"
import { Extrema } from "../types"
import { JiPitch } from "./ji"

type Cents = number & { _CentsBrand: boolean }

// TODO: 2,3-FREE IN MUSIC MODULE WHILE 5-ROUGH UNDERNEATH IN MATH MODULE
//  So we've established that prime limit is the direct musical equivalent of smooth in math
//  perhaps there is some way to fernangle it so that pitches could have free: [2,3] and then potentially you know
//  like [3,5,7] such as is the case in the Yer tuning system, where it's a chunk in the middle, nonconsecutive
//  and ji: true could map to irrational: false
type CentsPosition<T extends NumericTypeParameters = {}> = Irrational<T> & {
    cents: Cents,
}

type Pitch<T extends NumericTypeParameters = {}> =
    JiPitch<T> | CentsPosition<T>

type Zone<T = void> = Extrema<Cents> & (T extends void ? {} : { _ZoneOfBrand: T })

export {
    CentsPosition,
    Cents,
    Zone,
    Pitch,
}
