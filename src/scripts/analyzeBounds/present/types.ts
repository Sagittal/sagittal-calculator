import { Cents } from "../../../general"
import { Bound, BoundedSymbols, Mina, SymbolLongAscii } from "../../../notations"

interface BoundIdentifiers {
    boundedSymbols: BoundedSymbols,
    extremeLevelGreaterBoundedSymbol: SymbolLongAscii,
    extremeLevelLesserBoundedSymbol: SymbolLongAscii,
    greaterBoundedMina: Mina | undefined,
    lesserBoundedMina: Mina | undefined,
    cents: Cents,
}

enum AnalysisMode {
    DETAILS = "DETAILS",
    SUMMARY = "SUMMARY",
}

interface PresentBoundParameters {
    bound: Bound
    mode?: AnalysisMode,
}

export {
    BoundIdentifiers,
    PresentBoundParameters,
    AnalysisMode,
}
