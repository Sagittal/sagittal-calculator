type Prime = number & { _PrimeBrand: "Prime" }
type Proportion<ProportionOf = void> =
    number
    & { _ProportionBrand: "Proportion" }
    & (ProportionOf extends void ? {} : { _ProportionOfBrand: ProportionOf })
type Index<T = void> = number & { _IndexBrand: "Index" } & (T extends void ? {} : { _IndexOfBrand: T })
type Count<T = void> = number & { _CountBrand: "Count" } & (T extends void ? {} : { _CountOfBrand: T })
type Sum<T = void> = number & { _SumBrand: "Sum" } & (T extends void ? {} : { _SumOfBrand: T })
type Id<T = void> = number & { _IdBrand: "Id" } & (T extends void ? {} : { _IdOfBrand: T })
type Span<T = void> = number & { _SpanBrand: "Span" } & (T extends void ? {} : { _SpanOfBrand: T })
type Unit<T = void> = number & { _UnitBrand: "Unit" } & (T extends void ? {} : { _UnitOfBrand: T })
type Resolution<T = void> = number & { _ResolutionBrand: "Resolution" } & (T extends void ? {} : { _UnitOfBrand: T })
type Name<T = void> = string & { _NameBrand: "Name" } & (T extends void ? {} : { _UnitOfBrand: T })

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
}
