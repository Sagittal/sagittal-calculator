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
//  this is to say: I'm afraid that currently it suggests that if it's not defaulting to Irrational or Rational
//  that it's falling to the other... when REALLY it's just saying that it could be either one
//  DecimalWithNeutralRationality
//  in which case maybe pretty much all utility functions want to accept the neutral type, unless there's some particul-
//  ar reason it has to be rational in the case of Monzo or Ratio (then use just Monzo or Ratio) or has to be irrational
//  in the case of Decimal (in which case just use Decimal)
//  although now I'm starting to think that when writing these utility functions, to be explicit might be better?
//  just say RationalMonzo or RationalRatio, or Irrataional...
//  and also I've been thinking about parameterized, like Rational<Monzo>, like this
//  Rational<T> = T<{ potentiallyIrrational: false> ?
//  or just friggin'........ make the neutral one the neutral one! and have IrrationalMonzo and RationalMonzo that are
//  explicitly, and same for Decimal and Ratio...
//  it may not be that simple, though.
//  I just tried to switch a bunch of utility functions to "neutral" Ratios and Monzos
//  but then their output was unable to be recognized as being (default) rational Monzo when a (default) rational one
//  had been passed in...
//  like, do each and every one of them need an overload type signature where it can take either the neutral kind
//  or the default kind??
//  ---- so anyway maybe you'd end up with IrrationalMonzo, Monzo, RationalMonzo, IntegerMonzo
//  IrrationalRatio, Ratio, RationalRatio, IntegerRatio
//  IrrationalDecimal, Decimal, RationalDecimal, IntegerDecimal

// TODO: Irrational could be Irr for short... but then what about Rational...
//  And potentially could be maybe

export {
    Decimal,
    DecimalNotDefaultingToPotentiallyIrrational,
}
