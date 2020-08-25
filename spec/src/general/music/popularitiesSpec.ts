import {
    computeMonzoFromRatio,
    computeRatioFromMonzo,
    Popularity,
    rank,
    Ranked,
    RankStrategy,
} from "../../../../src/general"
import { COMMA_POPULARITIES } from "../../../../src/general/music"
import { onlyRunInCi } from "../../../helpers/onlyRunInCi"

describe("COMMA_POPULARITIES", () => {
    it("is the case that all the ratios capable of being parsed by monzo from ratio correctly when only top is 80 or less", () => {
        const originalRatios = COMMA_POPULARITIES.map(popularity => popularity.fiveRoughRatio)

        const monzos = originalRatios.map(computeMonzoFromRatio)
        const ratios = monzos.map(computeRatioFromMonzo)

        expect(ratios).toEqual(originalRatios)
    })

    it("is the case that the fractional ranks are correct", () => {
        onlyRunInCi()

        const unrankedPopularities: Popularity[] = COMMA_POPULARITIES.map(popularity => ({
            fiveRoughRatio: popularity.fiveRoughRatio,
            votes: popularity.votes,
        }))

        const rerankedPopularities: Array<Ranked<Popularity>> = rank(unrankedPopularities, {
            by: "votes",
            strategy: RankStrategy.FRACTIONAL,
            descending: true,
        })

        expect(rerankedPopularities).toEqual(COMMA_POPULARITIES)
    })
})
