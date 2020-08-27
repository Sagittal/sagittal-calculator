import { Cents, Id, Proportion } from "../../../general"
import { Bound, JiSymbol, Level, Mina, SagittalComma, SymbolLongAscii } from "../../../notations"

interface BoundedJiSymbol extends JiSymbol {
    distance: Cents,
    inaDistance: Proportion,
}

interface BoundedJiSymbolWithPrimaryComma extends JiSymbolWithPrimaryComma {
    distance: Cents,
    inaDistance: Proportion,
}

type BoundedJiSymbolWithPrimaryCommaPair = [BoundedJiSymbolWithPrimaryComma | undefined, BoundedJiSymbolWithPrimaryComma | undefined]

type BoundedJiSymbolsWithPrimaryCommas = { id: Id<Bound> }
    & Partial<Record<Level, BoundedJiSymbolWithPrimaryCommaPair>>

interface BoundIdentifiers {
    boundedSymbols: BoundedJiSymbolsWithPrimaryCommas,
    extremeLevelGreaterBoundedSymbol: SymbolLongAscii,
    extremeLevelLesserBoundedSymbol: SymbolLongAscii,
    greaterBoundedMina: Mina | undefined,
    lesserBoundedMina: Mina | undefined,
    cents: Cents,
}

enum AnalysisMode {
    DETAILS = "details",
    SUMMARY = "summary",
}

interface FormatBoundParameters {
    bound: Bound
    mode?: AnalysisMode,
}

type JiSymbolWithPrimaryComma = Omit<JiSymbol, "primaryCommaId"> & {
    primaryComma: SagittalComma
}

export {
    BoundedJiSymbol,
    JiSymbolWithPrimaryComma,
    BoundedJiSymbolWithPrimaryComma,
    BoundedJiSymbolsWithPrimaryCommas,
    BoundIdentifiers,
    FormatBoundParameters,
    AnalysisMode,
}
