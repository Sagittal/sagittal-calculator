import {
    computeQuotientFromMonzo,
    computeRationalMonzoFromRationalQuotient,
    Direction,
    KeyPath,
    Popularity,
    rank,
    Ranked,
    RankStrategy,
    RationalMonzo,
    RationalQuotient,
} from "../../../../../src/general"
import { COMMA_POPULARITIES } from "../../../../../src/general/music"
import { onlyRunInCi } from "../../../../helpers/onlyRunInCi"

describe("COMMA_POPULARITIES", (): void => {
    it("is the case that all the quotients capable of being parsed by monzo from quotient correctly when only top is 80 or less", (): void => {
        const originalQuotients: Array<RationalQuotient<{ irrational: false, rough: 5, direction: Direction.SUPER }>> =
            COMMA_POPULARITIES.map((
                popularity: Popularity,
            ): RationalQuotient<{ irrational: false, rough: 5, direction: Direction.SUPER }> => {
                return popularity.twoThreeFreeClass.quotient!
            })

        const rationalMonzos: Array<RationalMonzo<{ irrational: false, rough: 5, direction: Direction.SUPER }>> =
            originalQuotients.map((
                rationalQuotient: RationalQuotient<{ irrational: false, rough: 5, direction: Direction.SUPER }>,
            ): RationalMonzo<{ irrational: false, rough: 5, direction: Direction.SUPER }> => {
                return computeRationalMonzoFromRationalQuotient(rationalQuotient)
            })
        const rationalQuotients: Array<RationalQuotient<{ rough: 5, direction: Direction.SUPER }>> = rationalMonzos
            .map((
                rationalMonzo: RationalMonzo<{ rough: 5, direction: Direction.SUPER }>,
            ): RationalQuotient<{ rough: 5, direction: Direction.SUPER }> => {
                return computeQuotientFromMonzo(rationalMonzo)
            })

        expect(rationalQuotients).toEqual(originalQuotients)
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
