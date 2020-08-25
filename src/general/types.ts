// Numeric types where parameter is not numeric
import { Integer } from "./math"

type Index<T = void> = Integer & { _IndexBrand: "Index" } & (T extends void ? {} : { _IndexOfBrand: T })
type Id<T = void> = Integer & { _IdBrand: "Id" } & (T extends void ? {} : { _IdOfBrand: T })
type Count<T = void> = Integer & { _CountBrand: "Count" } & (T extends void ? {} : { _CountOfBrand: T })

// Numeric types where parameter is also numeric
type Proportion<T extends number | void = void> = number & { _ProportionBrand: "Proportion" } & (T extends void ? {} : T & { _ProportionOfBrand: T })
type Sum<T extends number | void = void> = number & { _SumBrand: "Sum" } & (T extends void ? {} : T & { _SumOfBrand: T })
type Span<T extends number | void = void> = number & { _SpanBrand: "Span" } & (T extends void ? {} : T & { _SpanOfBrand: T })
type Unit<T extends number | void = void> = number & { _UnitBrand: "Unit" } & (T extends void ? {} : T & { _UnitOfBrand: T })
type Max<T extends number | void = void> = number & { _MaxBrand: "Max" } & (T extends void ? {} : T & { _MaxOfBrand: T })
type Min<T extends number | void = void> = number & { _MinBrand: "Min" } & (T extends void ? {} : T & { _MinOfBrand: T })
type Resolution<T = void> = number & { _ResolutionBrand: "Resolution" } & (T extends void ? {} : T & { _ResolutionOfBrand: T })
type Prime<T = void> = Integer & { _PrimeBrand: "Prime" } & (T extends void ? {} : T & { _PrimeOfBrand: T })

type Name<T = void> = string & { _NameBrand: "Name" } & (T extends void ? {} : { _NameOfBrand: T })

enum Justification {
    LEFT = "left",
    RIGHT = "right",
    CENTER = "center",
}

type JustificationOption = Justification | Array<Justification | undefined>

export {
    Prime,
    Justification,
    Proportion,
    Index,
    Count,
    Sum,
    JustificationOption,
    Id,
    Span,
    Unit,
    Resolution,
    Name,
    Max,
    Min,
}
