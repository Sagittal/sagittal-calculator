type Cents = number & { _CentsBrand: "Cents" }
type Numerator = number & { _NumeratorBrand: "Numerator" }
type Denominator = number & { _DenominatorBrand: "Denominator" }
type Prime = number & { _PrimeBrand: "Prime" }

type Ratio = [Numerator, Denominator]

enum Justification {
    LEFT = "left",
    RIGHT = "right",
    CENTER = "center",
}

export {
    Cents,
    Ratio,
    Numerator,
    Denominator,
    Prime,
    Justification,
}
