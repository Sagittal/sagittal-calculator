import { Cents } from "../../../utilities/types"
import { Bound, BoundedSymbols, Mina, SymbolLongAscii } from "../../../notations/ji/types"

interface BoundIdentifiers {
    extremeLevelLesserBoundedSymbol: SymbolLongAscii,
    extremeLevelGreaterBoundedSymbol: SymbolLongAscii,
    position: Cents,
    boundedSymbols: BoundedSymbols,
    lesserBoundedMina: Mina | undefined,
    greaterBoundedMina: Mina | undefined,
}

enum AnalysisMode {
    DETAILS = "DETAILS",
    SUMMARY = "SUMMARY",
}

interface PresentBoundAnalysisParameters {
    mode?: AnalysisMode,
    bound: Bound
}

type ColorMethods = "green" | "blue" | "cyan"

export {
    BoundIdentifiers,
    PresentBoundAnalysisParameters,
    AnalysisMode,
    ColorMethods,
}
