import {
    computeMonzoFromRatio,
    computeRatioFromMonzo,
    Direction,
    Monzo,
    Popularity,
    rank,
    Ranked,
    RankStrategy,
    Ratio,
} from "../../../../src/general"
import { COMMA_POPULARITIES } from "../../../../src/general/music"
import { onlyRunInCi } from "../../../helpers/onlyRunInCi"

describe("COMMA_POPULARITIES", (): void => {
    // TODO: something recently caused this test to start going at least 3 times slower, since it's now a slow test
    //  ... you should figure out why. probably something to do with the whole pitch-level stuff instead of monzo-
    //  (mostly monzo) and ratio level stuff.
    it("is the case that all the ratios capable of being parsed by monzo from ratio correctly when only top is 80 or less", (): void => {
        onlyRunInCi()
        const originalRatios: Array<Ratio<{ rough: 5, direction: Direction.SUPER }>> =
            COMMA_POPULARITIES.map((popularity: Popularity): Ratio<{ rough: 5, direction: Direction.SUPER }> => {
                return popularity.twoThreeFreeClass.ratio!
            })

        const monzos = originalRatios
            .map((ratio: Ratio<{ rough: 5, direction: Direction.SUPER }>): Monzo => computeMonzoFromRatio(ratio))
        const ratios = monzos.map((monzo: Monzo): Ratio => computeRatioFromMonzo(monzo))

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
            by: "votes",
            strategy: RankStrategy.FRACTIONAL,
            descending: true,
        })

        expect(rerankedPopularities).toEqual(COMMA_POPULARITIES)
    })
})
