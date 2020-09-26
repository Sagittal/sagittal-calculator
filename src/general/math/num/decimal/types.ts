import { NumTypeParameterEffects, NumTypeParameters } from "../types"

// TODO: DECIMALS AS SPECIAL INSIDE NUMS
//  hunt down and eliminate places Decimal is being used outside of Num; in general only should live inside one
//  e.g. I don't think that Monzos should use them as their terms... maybe? or maybe it is fine that ratios and monzos
//  use them internally???

// This is the one place where we default the NumTypeParameters to something other than {}
// but things seem to massively blow up otherwise.
type Decimal<T extends NumTypeParameters = { potentiallyIrrational?: true }> = number & NumTypeParameterEffects<T>
type DecimalNotDefaultingToPotentiallyIrrational<T extends NumTypeParameters = {}> = number & NumTypeParameterEffects<T>

// TODO: these NotDefaulting types
//  are more just like neutral, neither Rational nor Irrational
//  that's why we need a RationalDecimal type
//  and correspondingly an IrrationalMonzo and IrrationalRatio type

// TODO: Irrational could be Irr for short
//  And potentially could be maybe

export {
    Decimal,
    DecimalNotDefaultingToPotentiallyIrrational,
}
