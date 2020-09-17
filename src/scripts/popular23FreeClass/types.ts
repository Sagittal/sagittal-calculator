import { Cents, Formatted, Io, Monzo, Popularity, Rank, TwoThreeFreeClass, Votes } from "../../general"
import { N2D3P9 } from "../../sagittal"

interface SharedPopular23FreeClassAnalysisProperties {
    n2d3p9: N2D3P9,
    formatted23FreeClass: Formatted<TwoThreeFreeClass>,
    formattedN2D3P9: Formatted<N2D3P9>,
    votes: Votes,
    popularityRank: Rank<Popularity> | Io,
}

interface Popular23FreeClassAnalysis extends SharedPopular23FreeClassAnalysisProperties {
    symbolSubsets: Io,
    formattedExactlyNotatingSymbolClasses: Io,
}

interface Popular23FreeClassAnalysisWithBestExactlyNotatingComma extends SharedPopular23FreeClassAnalysisProperties {
    centsOfBestExactlyNotatingComma: Formatted<Cents>,
    monzoOfBestExactlyNotatingComma: Formatted<Monzo>,
    maybeSymbolForBestExactlyNotatingComma: Io,
}

export {
    Popular23FreeClassAnalysis,
    Popular23FreeClassAnalysisWithBestExactlyNotatingComma,
}
