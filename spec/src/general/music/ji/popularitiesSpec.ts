import {
    computeMonzoFromRatio,
    computeRatioFromMonzo,
    Direction,
    KeyPath,
    Monzo,
    Popularity,
    rank,
    Ranked,
    RankStrategy,
    Ratio,
} from "../../../../../src/general"
import { COMMA_POPULARITIES } from "../../../../../src/general/music"
import { onlyRunInCi } from "../../../../helpers/onlyRunInCi"

describe("COMMA_POPULARITIES", (): void => {
    it("is the case that all the ratios capable of being parsed by monzo from ratio correctly when only top is 80 or less", (): void => {
        const originalRatios: Array<Ratio<{ irrational: false, rough: 5, direction: Direction.SUPER }>> =
            COMMA_POPULARITIES.map((
                popularity: Popularity,
            ): Ratio<{ irrational: false, rough: 5, direction: Direction.SUPER }> => {
                return popularity.twoThreeFreeClass.ratio!
            })

        const monzos: Array<Monzo<{ irrational: false, rough: 5, direction: Direction.SUPER }>> = originalRatios.map((
            ratio: Ratio<{ irrational: false, rough: 5, direction: Direction.SUPER }>,
        ): Monzo<{ irrational: false, rough: 5, direction: Direction.SUPER }> => {
            return computeMonzoFromRatio(ratio)
        })
        const ratios: Array<Ratio<{ rough: 5, direction: Direction.SUPER }>> = monzos.map((
            monzo: Monzo<{ rough: 5, direction: Direction.SUPER }>,
        ): Ratio<{ rough: 5, direction: Direction.SUPER }> => {
            return computeRatioFromMonzo(monzo)
        })

        expect(ratios).toEqual(originalRatios)
    })

    it("is the case that the fractional ranks are correct", (): void => {
        onlyRunInCi()

        const unrankedPopularities: Popularity[] = COMMA_POPULARITIES
            .map((popularity: Ranked<Popularity>): Popularity => ({
                twoThreeFreeClass: popularity.twoThreeFreeClass,
                votes: popularity.votes,
            }))

        const rerankedPopularities: Array<Ranked<Popularity>> = rank(unrankedPopularities, {
            by: "votes" as KeyPath,
            strategy: RankStrategy.FRACTIONAL,
            descending: true,
        })

        expect(rerankedPopularities).toEqual(COMMA_POPULARITIES)
    })
})
