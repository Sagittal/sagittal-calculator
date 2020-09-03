import { Cents, Formatted, Id, Io, Monzo, Popularity, Rank, Ratio, Votes } from "../../general"
import { JiSymbol, N2D3P9, Tina } from "../../sagittal"

interface SharedPopularRatioContents {
    n2d3p9: N2D3P9,
    formattedRatio: Formatted<Ratio>,
    formattedN2D3P9: Formatted<N2D3P9>,
    votes: Votes,
    popularityRank: Rank<Popularity> | Io,
}

interface PopularRatio extends SharedPopularRatioContents {
    symbolSubsets: Io,
    formattedExactlyNotatingJiSymbols: Io,
}

interface PopularRatioWithBestNotatingComma extends SharedPopularRatioContents {
    // TODO: why does this conflict with Io for plain PopularRatio?
    //  if you could resolve that, this could simply extend the other one
    symbolSubsets: Array<Id<JiSymbol>>,
    centsOfNotatingCommaWithLeastAbsoluteApotomeSlope: Formatted<Cents>,
    monzoOfNotatingCommaWithLeastAbsoluteApotomeSlope: Formatted<Monzo>,
    maybeSymbolForNotatingCommaWithLeastAbsoluteApotomeSlope: Io,
}

export {
    PopularRatio,
    PopularRatioWithBestNotatingComma,
}
