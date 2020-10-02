import {
    computeRationalMonzoFromRationalQuotient,
    computeRealQuotientFromRealMonzo,
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
        const originalRationalQuotients: Array<RationalQuotient<{ rough: 5, direction: Direction.SUPER }>> =
            COMMA_POPULARITIES.map((
                popularity: Popularity,
            ): RationalQuotient<{ rough: 5, direction: Direction.SUPER }> => {
                return popularity.two3FreeClass.quotient!
            })

        const rationalMonzos: Array<RationalMonzo<{ rough: 5, direction: Direction.SUPER }>> =
            originalRationalQuotients.map((
                rationalQuotient: RationalQuotient<{ rough: 5, direction: Direction.SUPER }>,
            ): RationalMonzo<{ rough: 5, direction: Direction.SUPER }> => {
                return computeRationalMonzoFromRationalQuotient(rationalQuotient)
            })
        const rationalQuotients: Array<RationalQuotient<{ rough: 5, direction: Direction.SUPER }>> = rationalMonzos
            .map((
                rationalMonzo: RationalMonzo<{ rough: 5, direction: Direction.SUPER }>,
            ): RationalQuotient<{ rough: 5, direction: Direction.SUPER }> => {
                return computeRealQuotientFromRealMonzo(rationalMonzo)
            })

        expect(rationalQuotients).toEqual(originalRationalQuotients)
    })

    it("is the case that the fractional ranks are correct", (): void => {
        onlyRunInCi()

        const unrankedPopularities: Popularity[] = COMMA_POPULARITIES
            .map((popularity: Ranked<Popularity>): Popularity => ({
                two3FreeClass: popularity.two3FreeClass,
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
