import { Id, Name } from "../../../general"
import { Ascii, CommaAnalysis, CommaClass, JiNotationLevel, Mina, SymbolSubset, Unicode } from "../../../sagittal"

// TODO: I really think there's no need for this to be separate from a BoundedCommaClassInfo
//  We currently calculate everything but the distances in one place, and then spread the distances and this stuff 
//  Together... but we should just do it in one place.

type CommaClassInfo = {
    id: Id<CommaClass>,
    commaAnalysis: CommaAnalysis,
    representativeSymbol: {
        ascii: Ascii,
        unicode: Unicode,
        smallestSymbolSubset: SymbolSubset,
    }
    introducingJiNotationLevel: JiNotationLevel,
    minaName: Name<Mina>,
}

export {
    CommaClassInfo,
}
