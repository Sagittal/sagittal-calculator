const {computeBestPossibleHistories} = require("../../../../src/boundsAnalysis/analyze/bestPossibleHistories")

describe("computeBestPossibleHistories", () => {
    it(`
returns the history which is the one among the ones tied for the best score the one which has the best sleda, 
and any histories which have better sleda than that one's sleda and better score than any other history with that sleda; 
plus the history which among the ones tied for the best sleda has the best score, 
and any histories which have better score than that one's score and better sleda than any other history with that score
        `,
        () => {
            const histories = [
                {                               // among the ones tied for the best score, the one with the best sleda = INCLUDE!
                    score: 11111,               // best
                    sleda: 5555555,             // medium
                },
                {                               // among the ones tied for the best score, NOT the one with the best sleda = EXCLUDE!
                    score: 11111,               // best
                    sleda: 77777777,            // bad
                },
                {                               // among the ones tied for the best sleda, the one with the best score = INCLUDE!
                    score: 5555555,             // medium
                    sleda: 11111,               // best
                },
                {                               // among the ones tied for the best sleda, NOT the one with the best score = EXCLUDE!
                    score: 77777777,            // bad
                    sleda: 11111,               // best
                },
                {                               // better sleda than the one with the best sleda among the ones tied for the best score, but NOT best score among any with its sleda = EXCLUDE!
                    score: 999999999,           // worst
                    sleda: 333333,              // medium
                },
                {                               // better sleda than the one with the best sleda among the ones tied for the best score, and best score among any with its sleda = INCLUDE!
                    score: 88888888,            // almost worst
                    sleda: 333333,              // medium
                },
                {                               // better sleda than the one with the best sleda among the ones tied for the best score, but NOT best score among any with its sleda = EXCLUDE!
                    score: 999999999,           // worst
                    sleda: 444444,              // medium
                },
                {                               // better sleda than the one with the best sleda among the ones tied for the best score, and best score among any with its sleda = INCLUDE!
                    score: 88888888,            // almost worst
                    sleda: 444444,              // medium
                },
                {                               // better score than the one with the best score among the ones tied for the best sleda, but NOT best sleda among any with its score = EXCLUDE!
                    score: 333333,              // good
                    sleda: 999999999,           // worst
                },
                {                               // better score than the one with the best score among the ones tied for the best sleda, and best sleda among any with its score = INCLUDE!
                    score: 333333,              // good
                    sleda: 88888888,            // almost worst
                },
                {                               // better score than the one with the best score among the ones tied for the best sleda, but NOT best sleda among any with its score = EXCLUDE!
                    score: 444444,              // good
                    sleda: 999999999,           // worst
                },
                {                               // better score than the one with the best score among the ones tied for the best sleda, and best sleda among any with its score = INCLUDE!
                    score: 444444,              // good
                    sleda: 88888888,            // almost worst
                },
                {                               // neither tied for best score or best sleda, nor better sleda than the one with the best sleda among the ones tied for the best score, nor better score than the one with the best score among the ones tied for the best sleda
                    score: 77777777,            // bad
                    sleda: 77777777,            // bad
                },
            ]

            const result = computeBestPossibleHistories(histories)

            expect(result).toEqual(jasmine.arrayWithExactContents([
                {
                    score: 11111,               // best
                    sleda: 5555555,             // medium
                },
                {
                    score: 5555555,             // medium
                    sleda: 11111,               // best
                },
                {
                    score: 88888888,            // almost worst
                    sleda: 333333,              // medium
                },
                {
                    score: 333333,              // good
                    sleda: 88888888,            // almost worst
                },
                {
                    score: 88888888,            // almost worst
                    sleda: 444444,              // medium
                },
                {
                    score: 444444,              // good
                    sleda: 88888888,            // almost worst
                },
            ]))
        }
    )

    it("because my most valiant attempt above to test this has failed to prevent an obvious simple example from doing the right thing, here is a real world example I found", () => {
        const histories = [
            {
                score: 4,                       // best
                sleda: 0.006031130790290717     // best
            },
            {
                score: 66,                      // worst
                sleda: 0.05728146494968733      // worst
            }
        ]

        const result = computeBestPossibleHistories(histories)

        expect(result).toEqual(jasmine.arrayWithExactContents([
            {
                score: 4,                       // best
                sleda: 0.006031130790290717     // best
            },
        ]))
    })
})
