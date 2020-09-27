import { MonzoNotDefaultingToRational } from "../monzo"
import { RatioNotDefaultingToRational } from "../ratio"
import { NumTypeParameterEffects, NumTypeParameters } from "../types"

// This is the one place where we default the NumTypeParameters to something other than {}
// But things seem to massively blow up otherwise.
type Decimal<T extends NumTypeParameters = { potentiallyIrrational?: true }> = number & NumTypeParameterEffects<T>
type DecimalNotDefaultingToPotentiallyIrrational<T extends NumTypeParameters = {}> = number & NumTypeParameterEffects<T>

// TODO: these NotDefaulting types
//  Are more just like neutral, neither Rational nor Irrational
//  That's why we need a RationalDecimal type
//  And correspondingly an IrrationalMonzo and IrrationalRatio type
//  This is to say: I'm afraid that currently it suggests that if it's not defaulting to Irrational or Rational
//  That it's falling to the other... when REALLY it's just saying that it could be either one
//  DecimalWithNeutralRationality
//  In which case maybe pretty much all utility functions want to accept the neutral type, unless there's some particul-
//  Ar reason it has to be rational in the case of Monzo or Ratio (then use just Monzo or Ratio) or has to be irrational
//  In the case of Decimal (in which case just use Decimal)
//  Although now I'm starting to think that when writing these utility functions, to be explicit might be better?
//  Just say RationalMonzo or RationalRatio, or Irrataional...
//  And also I've been thinking about parameterized, like Rational<Monzo>, like this
//  Rational<T> = T<{ potentiallyIrrational: false> ?
//  Or just friggin'........ make the neutral one the neutral one! and have IrrationalMonzo and RationalMonzo that are
//  Explicitly, and same for Decimal and Ratio...
//  It may not be that simple, though.
//  I just tried to switch a bunch of utility functions to "neutral" Ratios and Monzos
//  But then their output was unable to be recognized as being (default) rational Monzo when a (default) rational one
//  Had been passed in...
//  Like, do each and every one of them need an overload type signature where it can take either the neutral kind
//  Or the default kind??
//  ---- so anyway maybe you'd end up with IrrationalMonzo, Monzo, RationalMonzo, IntegerMonzo
//  IrrationalRatio, Ratio, RationalRatio, IntegerRatio
//  IrrationalDecimal, Decimal, RationalDecimal, IntegerDecimal

// TODO: Irrational could be Irr for short... but then what about Rational...
//  And potentially could be maybe

type PotentiallyIrrationalNumByDecimal<T extends NumTypeParameters> = {
    decimal: Decimal<T>,
    monzo?: MonzoNotDefaultingToRational<T>,
    ratio?: RatioNotDefaultingToRational<T>,
}

export {
    Decimal,
    DecimalNotDefaultingToPotentiallyIrrational,
    PotentiallyIrrationalNumByDecimal,
}
