import {Abs, Cents, Maybe, Multiplier, Name} from "../../../../general"
import {
    Ascii,
    BoundClassId,
    CommaAnalysis,
    CommaClassId,
    Ina,
    JiNotationLevel,
    Mina,
    SymbolSubset,
    Unicode,
} from "../../../../sagittal"

// Building up to BoundedCommaClassIdPairs

type BoundedCommaClassIdPair = [Maybe<CommaClassId>, Maybe<CommaClassId>]

type BoundedCommaClassIdPairs =
    {boundClassId: BoundClassId}
    & Partial<Record<JiNotationLevel, BoundedCommaClassIdPair>>

// Building up to JiNotationBoundClassIdentifiers

interface BoundedCommaClassInfo {
    id: CommaClassId,
    commaAnalysis: CommaAnalysis,
    representativeSagittal: {
        ascii: Ascii,
        unicode: Unicode,
        smallestSymbolSubset: SymbolSubset,
    }
    introducingJiNotationLevel: JiNotationLevel,
    minaName: Name<Mina>,
    distance: Abs<Cents>,
    inaDistance: Multiplier<Ina>,
}

type BoundedCommaClassInfoPair = [Maybe<BoundedCommaClassInfo>, Maybe<BoundedCommaClassInfo>]

type BoundedCommaClassInfoPairs =
    {boundClassId: BoundClassId}
    & Partial<Record<JiNotationLevel, BoundedCommaClassInfoPair>>

interface JiNotationBoundClassIdentifiers {
    boundedCommaClassInfoPairs: BoundedCommaClassInfoPairs,
    extremeLevelGreaterBoundedCommaClass: Ascii,
    extremeLevelLesserBoundedCommaClass: Ascii,
    greaterBoundedMinaName: Maybe<Name<Mina>>,
    lesserBoundedMinaName: Maybe<Name<Mina>>,
    cents: Cents,
}

export {
    BoundedCommaClassInfo,
    BoundedCommaClassInfoPairs,
    JiNotationBoundClassIdentifiers,
    BoundedCommaClassIdPairs,
    BoundedCommaClassIdPair,
}
