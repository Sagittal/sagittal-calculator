type Px = number & { _PxBrand: "Px" }

type Scale<T extends number | void = void> =
    number
    & { _ScaleBrand: "Scale" }
    & (T extends void ? {} : { _ScaleOfBrand: T })
type Basis<T extends number | void = void> =
    number
    & { _BasisBrand: "Basis" }
    & (T extends void ? {} : { _BasisOfBrand: T })

export {
    Px,
    Scale,
    Basis,
}
