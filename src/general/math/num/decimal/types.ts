import { NumTypeParameterEffects, NumTypeParameters } from "../types"

// TODO: hunt down and eliminate places Decimal is being used outside of Num; in general only should live inside one

// This is the one place where we default the NumTypeParameters to something other than {}
// but things seem to massively blow up otherwise.
type Decimal<T extends NumTypeParameters = { potentiallyIrrational?: true }> = number & NumTypeParameterEffects<T>
type DecimalNotDefaultingToPotentiallyIrrational<T extends NumTypeParameters = {}> = number & NumTypeParameterEffects<T>

export {
    Decimal,
    DecimalNotDefaultingToPotentiallyIrrational,
}
