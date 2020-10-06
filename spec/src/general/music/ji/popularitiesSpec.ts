import { KeyPath, Popularity, rank, Ranked, RankStrategy } from "../../../../../src/general"
import { COMMA_POPULARITIES } from "../../../../../src/general/music"
import { onlyRunInCi } from "../../../../helpers/onlyRunInCi"

describe("COMMA_POPULARITIES", (): void => {
    it("the fractional ranks are correct", (): void => {
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
