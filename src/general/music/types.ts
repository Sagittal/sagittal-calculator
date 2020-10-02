import { NumericProperties, Real, RealDecimal, RealMonzo, RealQuotient } from "../math"
import { Extrema } from "../types"

type Cents = number & { _CentsBrand: boolean }

// Todo: DEFER UNTIL AFTER SCALED MONZO
//  2,3-FREE IN MUSIC MODULE WHILE 5-ROUGH UNDERNEATH IN MATH MODULE
//  So we've established that prime limit is the direct musical equivalent of smooth in math
//  Perhaps there is some way to fernangle it so that pitches could have free: [2,3] and then potentially you know
//  Like [3,5,7] such as is the case in the Yer tuning system, where it's a chunk in the middle, nonconsecutive
//  And ji: true could map to rational: true
//  To do that though you'd have to bring back the type Pitch as an alias type essentially

type Zone<T = void> = Extrema<Real> & (T extends void ? {} : { _ZoneOfBrand: T })

// Todo: DEFER UNTIL AFTER SCALED MONZO
//  Maybe Pitch should be a branded Real, and Interval another branded Real
//  So would that make a JiPitch a Rational & Pitch? we'd use Interval in tests for mina name and half-apotome mirror

type PitchAnalysis<T extends NumericProperties = {}> = Real<T> & {
    cents: Cents,
    decimal: RealDecimal<T>,
    quotient?: RealQuotient<T>,
    monzo?: RealMonzo<T>,
}

export {
    Cents,
    Zone,
    PitchAnalysis,
}
