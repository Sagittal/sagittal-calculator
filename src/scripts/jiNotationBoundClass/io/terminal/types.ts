import {Abs, Cents, Id, Maybe, Multiplier, Name} from "../../../../general"
import {
    Ascii,
    BoundClass,
    CommaAnalysis,
    CommaClass,
    FlaccoSubset,
    Ina,
    JiNotationLevel,
    Mina,
    Unicode,
} from "../../../../sagittal"

// Building up to BoundedCommaClassIdPairs

type BoundedCommaClassIdPair = [Maybe<Id<CommaClass>>, Maybe<Id<CommaClass>>]

type BoundedCommaClassIdPairs =
    {boundClassId: Id<BoundClass>}
    & Partial<Record<JiNotationLevel, BoundedCommaClassIdPair>>

// Building up to JiNotationBoundClassIdentifiers

interface BoundedCommaClassInfo {
    id: Id<CommaClass>,
    commaAnalysis: CommaAnalysis,
    representativeSagittal: {
        ascii: Ascii,
        unicode: Unicode,
        smallestFlaccoSubset: FlaccoSubset,
    }
    introducingJiNotationLevel: JiNotationLevel,
    minaName: Name<Mina>,
    distance: Abs<Cents>,
    inaDistance: Multiplier<Ina>,
}

type BoundedCommaClassInfoPair = [Maybe<BoundedCommaClassInfo>, Maybe<BoundedCommaClassInfo>]

type BoundedCommaClassInfoPairs =
    {boundClassId: Id<BoundClass>}
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
