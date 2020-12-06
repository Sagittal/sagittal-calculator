import {
    Copfr,
    Decimal,
    Direction,
    Grade,
    Max,
    Monzo,
    Name,
    Prime,
    Rank,
    Ranked,
    ScalaPopularityStat,
    Sopfr,
    Two3FreeClass,
    two3FreeClassFixture,
} from "@sagittal/general"
import {N2D3P9, Two3FreeClassAnalysis} from "@sagittal/system"
import {
    Popular23FreeClass,
    SharedPopular23FreeClassProperties,
} from "../../../../../src/scripts/popular23FreeClass/types"

const two3FreeClassAnalysisFixture: Two3FreeClassAnalysis = {
    two3FreeClass: two3FreeClassFixture,
    name: "" as Name<Two3FreeClass>,
    two3FreePrimeLimit: 1 as Max<Prime<{rough: 5}>>,
    two3FreeCopfr: 0 as Copfr<{rough: 5}>,
    two3FreeSopfr: 0 as Sopfr<{rough: 5}>,
    n2d3p9: 1 as N2D3P9,
}

const rankedPopular23FreeClassFixture: Ranked<SharedPopular23FreeClassProperties> = {
    two3FreePrimeLimit: 1 as Max<Prime<{rough: 5}>>,
    two3FreeCopfr: 0 as Copfr<{rough: 5}>,
    two3FreeSopfr: 0 as Sopfr<{rough: 5}>,
    name: "{7/5}₂,₃" as Name<Two3FreeClass>,
    rank: 4 as Rank<Popular23FreeClass>,
    n2d3p9: 2 as N2D3P9,
    votes: 7 as Decimal<{integer: true}> & Grade<ScalaPopularityStat>,
    popularityRank: 3 as Rank<ScalaPopularityStat>,
    two3FreeClass: {
        monzo: [0, 0, -1, 1] as Monzo<{rational: true, rough: 5, direction: Direction.SUPER}>,
    } as Two3FreeClass,
}

export {
    two3FreeClassAnalysisFixture,
    rankedPopular23FreeClassFixture,
}
