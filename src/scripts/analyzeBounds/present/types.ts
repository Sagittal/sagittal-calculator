import { Cents, Id, Proportion } from "../../../general"
import { Bound, JiSymbol, Level, Mina, SymbolLongAscii } from "../../../notations"

interface BoundedSymbol extends JiSymbol {
    distance: Cents,
    inaDistance: Proportion,
}

type BoundedSymbolPair = [BoundedSymbol | undefined, BoundedSymbol | undefined]

type BoundedSymbols = { id: Id<Bound> }
    & Partial<Record<Level, BoundedSymbolPair>>

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
    BoundedSymbol,
    BoundedSymbols,
    BoundIdentifiers,
    PresentBoundParameters,
    AnalysisMode,
}
