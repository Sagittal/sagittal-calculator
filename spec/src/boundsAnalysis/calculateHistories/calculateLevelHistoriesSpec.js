const {calculateLevelHistories} = require("../../../../src/boundsAnalysis/calculateHistories/calculateLevelHistories")

describe("calculateLevelHistories", () => {
    it("given the histories for a bound up to the current level, returns the histories extended for all possible events at this level", () => {
        const firstHistoryPriorEvent = {
            level: "medium",
            type: "EDA",
            name: "1.5/21",
            position: 8.120357575550852,
            rank: 1,
        }
        const secondHistoryPriorEvent = {
            level: "medium",
            type: "MEAN",
            name: "|( )|(",
            position: 7.72288142310195,
            rank: 2,
        }
        const histories = [
            {
                position: 8.120357575550852,
                rank: 1,
                events: [
                    firstHistoryPriorEvent,
                ],
            },
            {
                position: 8.120357575550852,
                rank: 2,
                events: [
                    secondHistoryPriorEvent,
                ],
            },
        ]
        const level = "high"
        const bound = {
            position: 8.1,
            levels: ["medium", "high"],
        }

        const result = calculateLevelHistories(histories, level, bound)

        expect(result).toEqual([
            {
                position: 6.047074790303825,
                rank: 4,
                events: [
                    firstHistoryPriorEvent,
                    {level: "high", type: "EDA", name: "2.5/47", position: 6.047074790303825, rank: 4},
                ],
            },
            {
                position: 8.465904706425356,
                rank: 1,
                events: [
                    firstHistoryPriorEvent,
                    {level: "high", type: "EDA", name: "3.5/47", position: 8.465904706425356, rank: 1},
                ],
            },
            {
                position: 7.243699380344975,
                rank: 2,
                events: [
                    firstHistoryPriorEvent,
                    {level: "high", type: "MEAN", name: "|( ~|", position: 7.243699380344975, rank: 2},
                ],
            },
            {
                position: 6.047074790303825,
                rank: 4,
                events: [
                    secondHistoryPriorEvent,
                    {level: "high", type: "EDA", name: "2.5/47", position: 6.047074790303825, rank: 4},
                ],
            },
            {
                position: 8.465904706425356,
                rank: 2,
                events: [
                    secondHistoryPriorEvent,
                    {level: "high", type: "EDA", name: "3.5/47", position: 8.465904706425356, rank: 1},
                ],
            },
            {
                position: 7.243699380344975,
                rank: 2,
                events: [
                    secondHistoryPriorEvent,
                    {level: "high", type: "MEAN", name: "|( ~|", position: 7.243699380344975, rank: 2},
                ],
            },
        ])
    })

    describe("when all the histories at this level are impossible, meaning that none of their positions are between the neighbor commas", () => {
        it("adds a new history, restarting from the previous level with an override event which resets the position to the actual bound position so that it's definitely between the neighbor commas at this level", () => {
            const eventThatWillBeImpossibleAtNextLevel = {
                level: "high",
                type: "EDA",
                name: "1.5/47",
                position: 6.12, // very far from actualBoundPosition
                rank: 4,
            }
            const historyThatWillBeImpossibleAtNextLevel = {
                position: 8.12,
                rank: 4,
                events: [
                    eventThatWillBeImpossibleAtNextLevel,
                ],
            }
            const histories = [
                historyThatWillBeImpossibleAtNextLevel,
                historyThatWillBeImpossibleAtNextLevel, // just showing that there are multiples; should probably test a mixed condition
            ]
            const level = "veryHigh"
            const bound = {
                position: 9.1,
                levels: ["medium", "high", "veryHigh"],
            }

            const result = calculateLevelHistories(histories, level, bound)

            const expectedOverrideEvent = {
                level: "high",
                type: "override",
                name: "override",
                position: 9.1,
                rank: 7,
            }
            const expectedHistoryThatBecameImpossible = {
                position: 8.12,
                rank: 8,
                events: [
                    eventThatWillBeImpossibleAtNextLevel,
                    {
                        level: "veryHigh",
                        type: "impossible",
                        name: "not between ~| @8.7296 and )|( @9.6880 at the veryHigh level",
                        position: 8.12,
                        rank: 8,
                    },
                ],
            }
            expect(result).toEqual(jasmine.arrayWithExactContents([
                expectedHistoryThatBecameImpossible,
                expectedHistoryThatBecameImpossible,
                {
                    position: 8.820388401029373,
                    rank: 7,
                    events: [
                        expectedOverrideEvent,
                        {
                            level: "veryHigh",
                            type: "EDA",
                            name: "4.5/58",
                            position: 8.820388401029373,
                            rank: 1,
                        },
                    ],
                },
                {
                    position: 9.208778600061725,
                    rank: 7,
                    events: [
                        expectedOverrideEvent,
                        {
                            level: "veryHigh",
                            type: "MEAN",
                            name: "~| )|(",
                            position: 9.208778600061725,
                            rank: 2,
                        },
                    ],
                },
            ]))
        })

        describe("when the bound has skipped a level", () => {
            it("sets the override event at the correct level", () => {
                const historyThatWillBeImpossibleAtThisLevel = {
                    position: 8.12,
                    rank: 7,
                    events: [
                        {
                            level: "medium",
                            type: "impossible",
                            name: "not between 88.8 and 99.9",
                            position: 6.12, // very far from actualBoundPosition
                            rank: 7,
                        },
                    ],
                }
                const histories = [
                    historyThatWillBeImpossibleAtThisLevel,
                ]
                const level = "veryHigh"
                const bound = {
                    position: 9.1,
                    levels: ["medium", "veryHigh"], // level skip!
                }

                const result = calculateLevelHistories(histories, level, bound)

                const expectedOverrideEvent = {
                    level: "medium",
                    type: "override",
                    name: "override",
                    position: 9.1,
                    rank: 7,
                }
                expect(result[0]).toEqual(historyThatWillBeImpossibleAtThisLevel)
                expect(result[1]).toEqual({
                    position: 8.820388401029373,
                    rank: 7,
                    events: [
                        expectedOverrideEvent,
                        {
                            level: "veryHigh",
                            type: "EDA",
                            name: "4.5/58",
                            position: 8.820388401029373,
                            rank: 1,
                        },
                    ],
                })
                expect(result[2]).toEqual({
                    position: 9.208778600061725,
                    rank: 7,
                    events: [
                        expectedOverrideEvent,
                        {
                            level: "veryHigh",
                            type: "MEAN",
                            name: "~| )|(",
                            position: 9.208778600061725,
                            rank: 2,
                        },
                    ],
                })
            })
        })
    })
})
