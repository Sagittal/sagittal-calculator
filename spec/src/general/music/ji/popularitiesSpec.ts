import {
    computeRatioFromMonzo,
    computeRationalMonzoFromRationalRatio,
    Direction,
    KeyPath,
    Popularity,
    rank,
    Ranked,
    RankStrategy,
    RationalMonzo,
    RationalRatio,
} from "../../../../../src/general"
import { COMMA_POPULARITIES } from "../../../../../src/general/music"
import { onlyRunInCi } from "../../../../helpers/onlyRunInCi"

describe("COMMA_POPULARITIES", (): void => {
    it("is the case that all the ratios capable of being parsed by monzo from ratio correctly when only top is 80 or less", (): void => {
        const originalRatios: Array<RationalRatio<{ irrational: false, rough: 5, direction: Direction.SUPER }>> =
            COMMA_POPULARITIES.map((
                popularity: Popularity,
            ): RationalRatio<{ irrational: false, rough: 5, direction: Direction.SUPER }> => {
                return popularity.twoThreeFreeClass.ratio!
            })

        const rationalMonzos: Array<RationalMonzo<{ irrational: false, rough: 5, direction: Direction.SUPER }>> =
            originalRatios.map((
                rationalRatio: RationalRatio<{ irrational: false, rough: 5, direction: Direction.SUPER }>,
            ): RationalMonzo<{ irrational: false, rough: 5, direction: Direction.SUPER }> => {
                return computeRationalMonzoFromRationalRatio(rationalRatio)
            })
        const rationalRatios: Array<RationalRatio<{ rough: 5, direction: Direction.SUPER }>> = rationalMonzos.map((
            rationalMonzo: RationalMonzo<{ rough: 5, direction: Direction.SUPER }>,
        ): RationalRatio<{ rough: 5, direction: Direction.SUPER }> => {
            return computeRatioFromMonzo(rationalMonzo)
        })

        expect(rationalRatios).toEqual(originalRatios)
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
