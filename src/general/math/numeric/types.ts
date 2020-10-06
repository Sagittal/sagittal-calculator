enum Direction {
    SUPER = "super",
    SUB = "sub",
    UNISON = "unison",
}

// TODO: So it's still possible to extend this with anything you want. it'd be great if you could somehow prevent that
//  What if you tried having a different situation at the bedrock where it doesn’t actually extends
//  But must be the numeric properties itself? something like that
type NumericProperties = Partial<{
    integer: boolean,
    rational: boolean,
    direction: Direction,
    rough: number,
    smooth: number,
}>

type NumericPropertyEffects<T> =
    (T extends { direction: Direction.SUB } ? { _DirectionBrand: Direction.SUB } : {})
    & (T extends { direction: Direction.SUPER } ? { _DirectionBrand: Direction.SUPER } : {})
    & (T extends { direction: Direction.UNISON } ? { _DirectionBrand: Direction.UNISON } : {})
    & (T extends { rough: number } ? { _RoughBrand: Pick<T, "rough"> } : {})
    & (T extends { smooth: number } ? { _SmoothBrand: Pick<T, "smooth"> } : {})
    & (T extends { rational: true } ? { _RationalBrand: boolean } : {})
    & (T extends { rational: false } ? { _IrrationalBrand: boolean } : {})
    & (T extends { integer: true } ? { _RationalBrand: boolean, _IntegerBrand: boolean } : {})

type NumericPropertyTranslationForMonzosAndQuotientsToTheirTerms<T extends NumericProperties = {}> =
    & (T extends { rational: true } ? { integer: true } : {})

export {
    NumericProperties,
    Direction,
    NumericPropertyEffects,
    NumericPropertyTranslationForMonzosAndQuotientsToTheirTerms,
}
