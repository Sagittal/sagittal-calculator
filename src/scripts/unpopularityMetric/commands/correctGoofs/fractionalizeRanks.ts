import { computeTriangularNumber } from "../../../../general/math"
import { DebugTarget, saveDebugMessage } from "../../debug"
import { COMMA_POPULARITIES } from "../../sumOfSquares"
import { Popularity, PopularityRank } from "../../sumOfSquares/types"

interface FractionallyRankedPopularity extends Popularity {
    fractionalRank: PopularityRank,
}

const doThing = () => {
    const rankedUnpopularities: FractionallyRankedPopularity[] = COMMA_POPULARITIES.map((popularity, index): FractionallyRankedPopularity => {
        if ((popularity as FractionallyRankedPopularity).fractionalRank) {
            return popularity as FractionallyRankedPopularity
        }

        let tiesCount = 0
        COMMA_POPULARITIES.slice(index).forEach(worseOrTiedPopularity => {
            if (worseOrTiedPopularity.votes === popularity.votes) {
                tiesCount += 1
            }
        })

        if (tiesCount === 0) {
            return { ...popularity, fractionalRank: popularity.rank }
        } else {
            const fractionalRank = ((index * tiesCount) + computeTriangularNumber(tiesCount)) / tiesCount as PopularityRank

            for (let i = index; i < index + tiesCount; i++) {
                (COMMA_POPULARITIES[ i ] as FractionallyRankedPopularity).fractionalRank = fractionalRank as PopularityRank
            }

            return { ...popularity, fractionalRank }
        }
    })

   saveDebugMessage(JSON.stringify(rankedUnpopularities, null, 4), DebugTarget.ALL)
}

doThing()
