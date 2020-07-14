import { Index, Ratio } from "../../../general"

type SumOfSquares = number & { _SumOfSquaresBrand: "SumOfSquares" }
type UnpopularityRank = number & { _UnpopularityRankBrand: "UnpopularityRank" }
type PopularityRank = number & { _PopularityRankBrand: "PopularityRank" }
type Votes = number & { _VotesBrand: "Votes" }
type Antivotes = number & { _AntivotesBrand: "Antivotes" }

interface Unpopularity {
    antivotes: Antivotes,
    fiveRoughRatio: Ratio,
    index: Index<Unpopularity>,
}

interface RankedUnpopularity extends Unpopularity {
    rank: UnpopularityRank,
}

interface Popularity {
    fiveRoughRatio: Ratio,
    rank: PopularityRank,
    votes: Votes,
}

export {
    SumOfSquares,
    Unpopularity,
    UnpopularityRank,
    Popularity,
    Votes,
    PopularityRank,
    Antivotes,
    RankedUnpopularity,
}
