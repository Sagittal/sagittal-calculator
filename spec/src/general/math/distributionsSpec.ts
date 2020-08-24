import { arraysHaveSameContents } from "../../../../src/general/code/arraysHaveSameContents"
import { computeDistributions } from "../../../../src/general/math"
import { Distribution } from "../../../../src/general/math/types"

describe("computeDistributions", () => {
    it("given an array and a resolution of buckets, will return all the possible ways of distributing the elements across the buckets", () => {
        const array = ["a", "b", "c", "d"]
        const bucketCount = 3

        const actual = computeDistributions(array, bucketCount)

        const expected = [
            // 4 0 0
            [
                ["a", "b", "c", "d"],
                [],
                [],
            ],

            // 3 1 0
            [
                ["a", "b", "c"],
                ["d"],
                [],
            ],
            [
                ["a", "b", "d"],
                ["c"],
                [],
            ],
            [
                ["a", "c", "d"],
                ["b"],
                [],
            ],
            [
                ["b", "c", "d"],
                ["a"],
                [],
            ],

            // 2 2 0
            [
                ["a", "b"],
                ["c", "d"],
                [],
            ],
            [
                ["a", "c"],
                ["b", "d"],
                [],
            ],
            [
                ["a", "d"],
                ["b", "c"],
                [],
            ],
            [
                ["b", "c"],
                ["a", "d"],
                [],
            ],
            [
                ["b", "d"],
                ["a", "c"],
                [],
            ],
            [
                ["c", "d"],
                ["a", "b"],
                [],
            ],

            // 1 3 0
            [
                ["a"],
                ["b", "c", "d"],
                [],
            ],
            [
                ["b"],
                ["a", "c", "d"],
                [],
            ],
            [
                ["c"],
                ["a", "b", "d"],
                [],
            ],
            [
                ["d"],
                ["a", "b", "c"],
                [],
            ],

            // 0 4 0
            [
                [],
                ["a", "b", "c", "d"],
                [],
            ],

            // 3 0 1
            [
                ["a", "b", "c"],
                [],
                ["d"],
            ],
            [
                ["a", "b", "d"],
                [],
                ["c"],
            ],
            [
                ["a", "d", "c"],
                [],
                ["b"],
            ],
            [
                ["d", "b", "c"],
                [],
                ["a"],
            ],

            // 2 0 2
            [
                ["a", "b"],
                [],
                ["c", "d"],
            ],
            [
                ["a", "c"],
                [],
                ["b", "d"],
            ],
            [
                ["a", "d"],
                [],
                ["b", "c"],
            ],
            [
                ["b", "c"],
                [],
                ["a", "d"],
            ],
            [
                ["b", "d"],
                [],
                ["a", "c"],
            ],
            [
                ["c", "d"],
                [],
                ["a", "b"],
            ],

            // 1 0 3
            [
                ["a"],
                [],
                ["b", "c", "d"],
            ],
            [
                ["b"],
                [],
                ["a", "c", "d"],
            ],
            [
                ["c"],
                [],
                ["b", "a", "d"],
            ],
            [
                ["d"],
                [],
                ["b", "c", "a"],
            ],

            // 0 0 4
            [
                [],
                [],
                ["a", "b", "c", "d"],
            ],

            // 0 3 1
            [
                [],
                ["b", "c", "d"],
                ["a"],
            ],
            [
                [],
                ["a", "c", "d"],
                ["b"],
            ],
            [
                [],
                ["b", "a", "d"],
                ["c"],
            ],
            [
                [],
                ["b", "c", "a"],
                ["d"],
            ],

            // 0 2 2
            [
                [],
                ["a", "b"],
                ["c", "d"],
            ],
            [
                [],
                ["a", "c"],
                ["b", "d"],
            ],
            [
                [],
                ["a", "d"],
                ["b", "c"],
            ],
            [
                [],
                ["b", "c"],
                ["a", "d"],
            ],
            [
                [],
                ["b", "d"],
                ["a", "c"],
            ],
            [
                [],
                ["c", "d"],
                ["a", "b"],
            ],

            // 0 1 3
            [
                [],
                ["a"],
                ["b", "c", "d"],
            ],
            [
                [],
                ["b"],
                ["a", "c", "d"],
            ],
            [
                [],
                ["c"],
                ["b", "a", "d"],
            ],
            [
                [],
                ["d"],
                ["b", "c", "a"],
            ],

            // 2 1 1
            [
                ["a", "b"],
                ["c"],
                ["d"],
            ],
            [
                ["a", "b"],
                ["d"],
                ["c"],
            ],
            [
                ["a", "c"],
                ["b"],
                ["d"],
            ],
            [
                ["a", "c"],
                ["d"],
                ["b"],
            ],
            [
                ["a", "d"],
                ["b"],
                ["c"],
            ],
            [
                ["a", "d"],
                ["c"],
                ["b"],
            ],
            [
                ["b", "c"],
                ["a"],
                ["d"],
            ],
            [
                ["b", "c"],
                ["d"],
                ["a"],
            ],
            [
                ["b", "d"],
                ["a"],
                ["c"],
            ],
            [
                ["b", "d"],
                ["c"],
                ["a"],
            ],
            [
                ["c", "d"],
                ["a"],
                ["b"],
            ],
            [
                ["c", "d"],
                ["b"],
                ["a"],
            ],

            // 1 2 1
            [
                ["c"],
                ["a", "b"],
                ["d"],
            ],
            [
                ["d"],
                ["a", "b"],
                ["c"],
            ],
            [
                ["b"],
                ["a", "c"],
                ["d"],
            ],
            [
                ["d"],
                ["a", "c"],
                ["b"],
            ],
            [
                ["b"],
                ["a", "d"],
                ["c"],
            ],
            [
                ["c"],
                ["a", "d"],
                ["b"],
            ],
            [
                ["a"],
                ["b", "c"],
                ["d"],
            ],
            [
                ["d"],
                ["b", "c"],
                ["a"],
            ],
            [
                ["a"],
                ["b", "d"],
                ["c"],
            ],
            [
                ["c"],
                ["b", "d"],
                ["a"],
            ],
            [
                ["a"],
                ["c", "d"],
                ["b"],
            ],
            [
                ["b"],
                ["c", "d"],
                ["a"],
            ],

            // 1 1 2
            [
                ["c"],
                ["d"],
                ["a", "b"],
            ],
            [
                ["d"],
                ["c"],
                ["a", "b"],
            ],
            [
                ["b"],
                ["d"],
                ["a", "c"],
            ],
            [
                ["d"],
                ["b"],
                ["a", "c"],
            ],
            [
                ["b"],
                ["c"],
                ["a", "d"],
            ],
            [
                ["c"],
                ["b"],
                ["a", "d"],
            ],
            [
                ["a"],
                ["d"],
                ["b", "c"],
            ],
            [
                ["d"],
                ["a"],
                ["b", "c"],
            ],
            [
                ["a"],
                ["c"],
                ["b", "d"],
            ],
            [
                ["c"],
                ["a"],
                ["b", "d"],
            ],
            [
                ["a"],
                ["b"],
                ["c", "d"],
            ],
            [
                ["b"],
                ["a"],
                ["c", "d"],
            ],
        ]

        expect(actual.length).toBe(expected.length)
        expected.forEach(expectedResultElement => {
            expect(actual.some(resultElement => {
                return resultElement.every((bucket, index) => {
                    return arraysHaveSameContents(bucket, expectedResultElement[ index ])
                })
            })).toBeTruthy(`This expected element was not found: ${JSON.stringify(expectedResultElement)}`)
        })
    })

    it("works for 1 element across two bins", () => {
        const array = ["a"]
        const bucketCount = 2

        const actual = computeDistributions(array, bucketCount)

        expect(actual.length).toBe(2)
        const expected: Distribution<string>[] = [
            [
                ["a"],
                [],
            ],
            [
                [],
                ["a"],
            ],
        ] as Distribution<string>[]
        expect(actual).toEqual(expected)
    })
})
