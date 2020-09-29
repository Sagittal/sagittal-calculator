import { Decimal, Monzo, Num, NumTypeParameters, Quotient } from "../math"
import { Extrema } from "../types"

type Cents = number & { _CentsBrand: boolean }

// TODO: 2,3-FREE IN MUSIC MODULE WHILE 5-ROUGH UNDERNEATH IN MATH MODULE
//  So we've established that prime limit is the direct musical equivalent of smooth in math
//  Perhaps there is some way to fernangle it so that pitches could have free: [2,3] and then potentially you know
//  Like [3,5,7] such as is the case in the Yer tuning system, where it's a chunk in the middle, nonconsecutive
//  And ji: true could map to rational: true
//  To do that though you'd have to bring back the type Pitch as an alias type essentially

type Zone<T = void> = Extrema<Num> & (T extends void ? {} : { _ZoneOfBrand: T })

type PitchAnalysis<T extends NumTypeParameters = {}> = Num<T> & {
    cents: Cents,
    decimal: Decimal<T>,
    quotient?: Quotient<T>,
    monzo?: Monzo<T>,
}

export {
    Cents,
    Zone,
    PitchAnalysis,
}
