import { Cents, Formatted, Io, Monzo, Popularity, Rank, TwoThreeFreeClass, Votes } from "../../general"
import { N2D3P9 } from "../../sagittal"

interface SharedPopular23FreeClassProperties {
    n2d3p9: N2D3P9,
    formatted23FreeClass: Formatted<TwoThreeFreeClass>,
    formattedN2D3P9: Formatted<N2D3P9>,
    votes: Votes,
    popularityRank: Rank<Popularity> | Io,
}

interface Popular23FreeClass extends SharedPopular23FreeClassProperties {
    symbolSubsets: Io,
    formattedExactlyNotatingJiSymbols: Io,
}

interface Popular23FreeClassWithBestNotatingComma extends SharedPopular23FreeClassProperties {
    centsOfBestNotatingComma: Formatted<Cents>,
    monzoOfBestNotatingComma: Formatted<Monzo>,
    maybeSymbolForBestNotatingComma: Io,
}

export {
    Popular23FreeClass,
    Popular23FreeClassWithBestNotatingComma,
}
