import { Integer, Max, Min } from "./math"

// Numeric types where parameter is not numeric
type Index<T = void> = Integer & { _IndexBrand: "Index" } & (T extends void ? {} : { _IndexOfBrand: T })
type Id<T = void> = Integer & { _IdBrand: "Id" } & (T extends void ? {} : { _IdOfBrand: T })
type Count<T = void> = Integer & { _CountBrand: "Count" } & (T extends void ? {} : { _CountOfBrand: T })

// Numeric types where parameter is also numeric
type Proportion<T extends number | void = void> =
    number
    & { _ProportionBrand: "Proportion" }
    & (T extends void ? {} : T & { _ProportionOfBrand: T })
type Sum<T extends number | void = void> =
    number
    & { _SumBrand: "Sum" }
    & (T extends void ? {} : T & { _SumOfBrand: T })

// These are more just like labels, not changing the fundamental numeric nature of the quantity
type Span<T extends number = number> = T & { _SpanBrand: "Span" }
type Unit<T extends number = number> = T & { _UnitBrand: "Unit" }
type Resolution<T extends number = number> = T & { _ResolutionBrand: "Resolution" }

type Name<T = void> = string & { _NameBrand: "Name" } & (T extends void ? {} : { _NameOfBrand: T })

type Extrema<T extends number = number, Open extends "open" | void = void> = [
    Open extends "open" ? undefined | Min<T> : Min<T>,
    Open extends "open" ? undefined | Max<T> : Max<T>,
]

type Ms = number & { _MsBrand: "Ms" }

export {
    Proportion,
    Index,
    Count,
    Sum,
    Id,
    Span,
    Unit,
    Resolution,
    Name,
    Extrema,
    Ms,
}
