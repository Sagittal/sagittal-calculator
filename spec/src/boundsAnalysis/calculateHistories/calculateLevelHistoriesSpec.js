const {calculateLevelHistories} = require("../../../../src/boundsAnalysis/calculateHistories/calculateLevelHistories")

describe("calculateLevelHistories", () => {
    it("given the histories for a bound up to the current level, returns the histories extended for all possible events at this level", () => {
        const firstHistoryPriorEvent = {
            level: "Medium",
            type: "EDA",
            name: "1.5/21",
            position: 8.120357575550852,
        }
        const secondHistoryPriorEvent = {
            level: "Medium",
            type: "MEAN",
            name: "|( )|(",
            position: 7.72288142310195,
        }
        const histories = [
            {
                position: 8.120357575550852,
                events: [
                    firstHistoryPriorEvent,
                ],
            },
            {
                position: 8.120357575550852,
                events: [
                    secondHistoryPriorEvent,
                ],
            },
        ]
        const level = "High"
        const bound = {
            position: 8.1,
            levels: ["Medium", "High"]
        }

        const result = calculateLevelHistories(histories, level, bound)

        expect(result).toEqual(jasmine.arrayWithExactContents([
            {
                position: 6.047074790303825,
                events: [
                    firstHistoryPriorEvent,
                    {level: "High", type: "EDA", name: "2.5/47", position: 6.047074790303825},
                ],
            },
            {
                position: 8.465904706425356,
                events: [
                    firstHistoryPriorEvent,
                    {level: "High", type: "EDA", name: "3.5/47", position: 8.465904706425356},
                ],
            },
            {
                position: 7.243699380344975,
                events: [
                    firstHistoryPriorEvent,
                    {level: "High", type: "MEAN", name: "|( ~|", position: 7.243699380344975},
                ],
            },
            {
                position: 6.047074790303825,
                events: [
                    secondHistoryPriorEvent,
                    {level: "High", type: "EDA", name: "2.5/47", position: 6.047074790303825},
                ],
            },
            {
                position: 8.465904706425356,
                events: [
                    secondHistoryPriorEvent,
                    {level: "High", type: "EDA", name: "3.5/47", position: 8.465904706425356},
                ],
            },
            {
                position: 7.243699380344975,
                events: [
                    secondHistoryPriorEvent,
                    {level: "High", type: "MEAN", name: "|( ~|", position: 7.243699380344975},
                ],
            },
        ]))
    })

    describe("when all the histories at this level are impossible, meaning that none of their positions are between the comma neighbors", () => {
        it("adds a new history, restarting from the previous level with an override event which resets the position to the actual bound position so that it's definitely between the comma neighbors at this level", () => {
            const eventThatWillBeImpossibleAtNextLevel = {
                level: "High",
                type: "EDA",
                name: "1.5/47",
                position: 6.12, // very far from actualBoundPosition
            }
            const historyThatWillBeImpossibleAtNextLevel = {
                position: 8.12,
                events: [
                    eventThatWillBeImpossibleAtNextLevel,
                ],
            }
            const histories = [
                historyThatWillBeImpossibleAtNextLevel,
                historyThatWillBeImpossibleAtNextLevel, // just showing that there are multiples; should probably test a mixed condition
            ]
            const level = "VeryHigh"
            const bound = {
                position: 9.1,
                levels: ["Medium", "High", "VeryHigh"]
            }

            const result = calculateLevelHistories(histories, level, bound)

            const expectedOverrideEvent = {
                level: "High",
                type: "override",
                name: "override",
                position: 9.1,
            }
            const expectedHistoryThatBecameImpossible = {
                position: 8.12,
                events: [
                    eventThatWillBeImpossibleAtNextLevel,
                    {
                        level: "VeryHigh",
                        type: "impossible",
                        name: "not between ~| @8.7296 and )|( @9.6880 at the VeryHigh level",
                        position: 8.12,
                    }
                ],
            }
            expect(result).toEqual(jasmine.arrayWithExactContents([
                expectedHistoryThatBecameImpossible,
                expectedHistoryThatBecameImpossible,
                {
                    position: 8.820388401029373,
                    overridden: true,
                    events: [
                        expectedOverrideEvent,
                        {
                            level: "VeryHigh",
                            type: "EDA",
                            name: "4.5/58",
                            position: 8.820388401029373,
                        }
                    ]
                },
                {
                    position: 9.208778600061725,
                    overridden: true,
                    events: [
                        expectedOverrideEvent,
                        {
                            level: "VeryHigh",
                            type: "MEAN",
                            name: "~| )|(",
                            position: 9.208778600061725,
                        }
                    ]
                },
            ]))
        })

        describe("when the bound has skipped a level", () => {
            it("sets the override event at the correct level", () => {
                const historyThatWillBeImpossibleAtThisLevel = {
                    position: 8.12,
                    events: [
                        {
                            level: "Medium",
                            type: "impossible",
                            name: "not between 88.8 and 99.9",
                            position: 6.12, // very far from actualBoundPosition
                        },
                    ],
                }
                const histories = [
                    historyThatWillBeImpossibleAtThisLevel,
                ]
                const level = "VeryHigh"
                const bound = {
                    position: 9.1,
                    levels: ["Medium", "VeryHigh"] // level skip!
                }

                const result = calculateLevelHistories(histories, level, bound)

                const expectedOverrideEvent = {
                    level: "Medium",
                    type: "override",
                    name: "override",
                    position: 9.1,
                }
                expect(result).toEqual([
                    historyThatWillBeImpossibleAtThisLevel,
                    {
                        position: 8.820388401029373,
                        overridden: true,
                        events: [
                            expectedOverrideEvent,
                            {
                                level: "VeryHigh",
                                type: "EDA",
                                name: "4.5/58",
                                position: 8.820388401029373,
                            }
                        ]
                    },
                    {
                        position: 9.208778600061725,
                        overridden: true,
                        events: [
                            expectedOverrideEvent,
                            {
                                level: "VeryHigh",
                                type: "MEAN",
                                name: "~| )|(",
                                position: 9.208778600061725,
                            }
                        ]
                    },

                ])
            })
        })
    })
})
