import {Io} from "./io"
import {Decimal, Max, Min, Quotient} from "./math"

// Numeric types where parameter is not numeric
type Index<T = void> =
    Decimal<{integer: true}> & {_IndexBrand: boolean} & (T extends void ? {} : {_IndexOfBrand: T})
type Count<T = void> =
    Decimal<{integer: true}> & {_CountBrand: boolean} & (T extends void ? {} : {_CountOfBrand: T})

// TODO: shouldn't these really live in math?
// Numeric types where parameter is also numeric
type Addend<T extends number | void = void> =
    number
    & {_AddendBrand: boolean}
    & (T extends void ? {} : T & {_AddendOfBrand: T})
type Subtrahend<T extends number | void = void> =
    number
    & {_SubtrahendBrand: boolean}
    & (T extends void ? {} : T & {_SubtrahendOfBrand: T})
type Multiplier<T extends number | void = void> =
    number
    & {_MultiplierBrand: boolean}
    & (T extends void ? {} : T & {_MultiplierOfBrand: T})
type Divisor<T extends number | void = void> =
    number
    & {_DivisorBrand: boolean}
    & (T extends void ? {} : T & {_DivisorOfBrand: T})
type Sum<T extends number | void = void> =
    number
    & {_SumBrand: boolean}
    & (T extends void ? {} : T & {_SumOfBrand: T})
type Product<T extends number | void = void> =
    number
    & {_ProductBrand: boolean}
    & (T extends void ? {} : T & {_ProductOfBrand: T})

type Step<EdCount extends number | void = void> =                                               // Iteration?
    Decimal & {_StepBrand: boolean, _StepOfEdBrand: EdCount}
type Ed<WindowSize extends number | void = void> =                                              // Generator?
    Decimal<{integer: true}> & {_EdBrand: boolean, _WindowSizeBrand: WindowSize}
type Window<WindowSize extends number | unknown = unknown> =                                    // Period?
    Decimal & {_WindowBrand: boolean, _WindowSizeBrand: WindowSize}
type Degree = [Step<any>, Ed<any>] & Quotient

type Name<T = void> = Io & {_NameBrand: boolean} & (T extends void ? {} : {_NameOfBrand: T})

type Extrema<T extends unknown = number> = [Min<T>, Max<T>]

type Ms = number & {_MsBrand: boolean}

type Of<T> = {_OfBrand: T}

export {
    Multiplier,
    Index,
    Count,
    Sum,
    Window,
    Step,
    Ed,
    Name,
    Extrema,
    Ms,
    Divisor,
    Product,
    Addend,
    Subtrahend,
    Of,
    Degree,
}
