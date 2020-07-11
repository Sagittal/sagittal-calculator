import { Ratio } from "../../../utilities/types"

type SumOfSquares = number & { _SumOfSquaresBrand: "SumOfSquares" }
type UnpopularityRank = number & { _UnpopularityRankBrand: "UnpopularityRank" }
type PopularityRank = number & { _PopularityRankBrand: "PopularityRank" }
type Votes = number & { _VotesBrand: "VotesRank" }
type Antivotes = number & { _AntivotesBrand: "Antivotes" }

type SumsOfSquares = Array<SumsOfSquares | SumOfSquares | undefined>

interface Unpopularity {
    antivotes: Antivotes,
    index: number,
    fiveRoughRatio: Ratio,
}

interface RankedUnpopularity extends Unpopularity {
    rank: UnpopularityRank,
}

interface Popularity {
    // index: number,
    fiveRoughRatio: Ratio,
    rank: PopularityRank,
    votes: Votes,
}

export {
    SumOfSquares,
    SumsOfSquares,
    Unpopularity,
    UnpopularityRank,
    Popularity,
    Votes,
    PopularityRank,
    Antivotes,
    RankedUnpopularity,
}
