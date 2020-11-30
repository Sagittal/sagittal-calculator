import {
    COMMA_POPULARITIES,
    KeyPath,
    rank,
    Ranked,
    RankStrategy,
    ScalaPopularityStat,
} from "../../../../../../src/general"
import {onlyRunInCi} from "../../../../../helpers/onlyRunInCi"

describe("COMMA_POPULARITIES", (): void => {
    it("the fractional ranks are correct", (): void => {
        onlyRunInCi()

        const unrankedPopularities: ScalaPopularityStat[] = COMMA_POPULARITIES
            .map((popularity: Ranked<ScalaPopularityStat>): ScalaPopularityStat => ({
                two3FreeClass: popularity.two3FreeClass,
                votes: popularity.votes,
            }))

        const reRankedPopularities: Array<Ranked<ScalaPopularityStat>> = rank(unrankedPopularities, {
            by: "votes" as KeyPath,
            strategy: RankStrategy.FRACTIONAL,
            descending: true,
        })

        expect(reRankedPopularities).toEqual(COMMA_POPULARITIES)
    })
})
