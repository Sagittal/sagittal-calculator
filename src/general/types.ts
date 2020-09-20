import { Io } from "./io"
import { Integer, Max, Min } from "./math"

// TODO: I think we should go the way of Musical Patterns utilities and have brands be booleans instead of strings

// Numeric types where parameter is not numeric
type Index<T = void> = Integer & { _IndexBrand: "Index" } & (T extends void ? {} : { _IndexOfBrand: T })
type Id<T = void> = Integer & { _IdBrand: "Id" } & (T extends void ? {} : { _IdOfBrand: T })
type Count<T = void> = Integer & { _CountBrand: "Count" } & (T extends void ? {} : { _CountOfBrand: T })

// Numeric types where parameter is also numeric
type Addend<T extends number | void = void> =
    number
    & { _AddendBrand: "Addend" }
    & (T extends void ? {} : T & { _AddendOfBrand: T })
type Subtrahend<T extends number | void = void> =
    number
    & { _SubtrahendBrand: "Subtrahend" }
    & (T extends void ? {} : T & { _SubtrahendOfBrand: T })
type Multiplier<T extends number | void = void> =
    number
    & { _MultiplierBrand: "Multiplier" }
    & (T extends void ? {} : T & { _MultiplierOfBrand: T })
type Divisor<T extends number | void = void> =
    number
    & { _DivisorBrand: "Divisor" }
    & (T extends void ? {} : T & { _DivisorOfBrand: T })
type Sum<T extends number | void = void> =
    number
    & { _SumBrand: "Sum" }
    & (T extends void ? {} : T & { _SumOfBrand: T })
type Product<T extends number | void = void> =
    number
    & { _ProductBrand: "Product" }
    & (T extends void ? {} : T & { _ProductOfBrand: T })

type Step<EdCount extends number | void = void> =
    number & { _StepBrand: "Step", _StepOfEdBrand: EdCount }
type Ed<WindowSize extends number | void = void> =
    number & { _EdBrand: "Ed", _WindowSizeBrand: WindowSize }
type Window<WindowSize extends number | unknown = unknown> =
    number & { _WindowBrand: "Window", _WindowSizeBrand: WindowSize }

type Name<T = void> = Io & { _NameBrand: "Name" } & (T extends void ? {} : { _NameOfBrand: T })

type Extrema<T extends number = number> = [Min<T>, Max<T>]

type Ms = number & { _MsBrand: "Ms" }

export {
    Multiplier,
    Index,
    Count,
    Sum,
    Id,
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
}
