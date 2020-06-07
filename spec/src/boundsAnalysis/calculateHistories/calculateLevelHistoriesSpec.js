const {calculateLevelHistories} = require("../../../../src/boundsAnalysis/calculateHistories/calculateLevelHistories")

describe("calculateLevelHistories", () => {
    it("given the histories for a bound up to the current level, returns the histories extended for all possible events at this level", () => {
        const firstHistoryPriorEvent = {
            level: "MEDIUM",
            type: "EDA",
            name: "1.5/21",
            position: 8.120357575550852,
        }
        const secondHistoryPriorEvent = {
            level: "MEDIUM",
            type: "MEAN",
            name: "|( )|(",
            position: 7.72288142310195,
        }
        const histories = [
            [firstHistoryPriorEvent],
            [secondHistoryPriorEvent],
        ]
        const level = "HIGH"
        const bound = {
            position: 8.1,
            levels: ["MEDIUM", "HIGH"],
        }

        const result = calculateLevelHistories(histories, level, bound)

        expect(result).toEqual([
            [
                firstHistoryPriorEvent,
                {level: "HIGH", type: "EDA", name: "2.5/47", position: 6.047074790303825},
            ],
            [
                firstHistoryPriorEvent,
                {level: "HIGH", type: "EDA", name: "3.5/47", position: 8.465904706425356},
            ],
            [
                firstHistoryPriorEvent,
                {level: "HIGH", type: "MEAN", name: "|( ~|", position: 7.243699380344975},
            ],
            [
                secondHistoryPriorEvent,
                {level: "HIGH", type: "EDA", name: "2.5/47", position: 6.047074790303825},
            ],
            [
                secondHistoryPriorEvent,
                {level: "HIGH", type: "EDA", name: "3.5/47", position: 8.465904706425356},
            ],
            [
                secondHistoryPriorEvent,
                {level: "HIGH", type: "MEAN", name: "|( ~|", position: 7.243699380344975},
            ],

        ])
    })

    describe("when all the histories at this level are impossible, meaning that none of their positions are between the bounded commas", () => {
        it("adds a new history, restarting from the previous level with an override event which resets the position to the actual bound position so that it's definitely between the bounded commas at this level", () => {
            const eventThatWillBeImpossibleAtNextLevel = {
                level: "HIGH",
                type: "EDA",
                name: "1.5/47",
                position: 6.12, // very far from actualBoundPosition
            }
            const historyThatWillBeImpossibleAtNextLevel = [
                eventThatWillBeImpossibleAtNextLevel,
            ]
            const histories = [
                historyThatWillBeImpossibleAtNextLevel,
                historyThatWillBeImpossibleAtNextLevel, // just showing that there are multiples; should probably test a mixed condition
            ]
            const level = "VERY_HIGH"
            const bound = {
                position: 9.1,
                levels: ["MEDIUM", "HIGH", "VERY_HIGH"],
            }

            const result = calculateLevelHistories(histories, level, bound)

            const expectedOverrideEvent = {
                level: "HIGH",
                type: "OVERRIDE",
                name: "overridden to stay within ~| and )|( at the VERY_HIGH level",
                position: 9.208778600061725,
            }
            const expectedHistoryThatBecameImpossible = [
                eventThatWillBeImpossibleAtNextLevel,
                {
                    level: "VERY_HIGH",
                    type: "IMPOSSIBLE",
                    name: "not between ~| @8.730 and )|( @9.688 at the VERY_HIGH level",
                    position: 6.12,
                },
            ]
            expect(result).toEqual(jasmine.arrayWithExactContents([
                expectedHistoryThatBecameImpossible,
                expectedHistoryThatBecameImpossible,
                [
                    expectedOverrideEvent,
                    {
                        level: "VERY_HIGH",
                        type: "EDA",
                        name: "4.5/58",
                        position: 8.820388401029373,
                    },
                ],
                [
                    expectedOverrideEvent,
                    {
                        level: "VERY_HIGH",
                        type: "MEAN",
                        name: "~| )|(",
                        position: 9.208778600061725,
                    },
                ],
            ]))
        })

        describe("when the bound has skipped a level", () => {
            it("sets the override event at the correct level", () => {
                const historyThatWillBeImpossibleAtThisLevel = [
                    {
                        level: "MEDIUM",
                        type: "IMPOSSIBLE",
                        name: "not between 88.8 and 99.9",
                        position: 6.12, // very far from actualBoundPosition
                    },
                ]
                const histories = [
                    historyThatWillBeImpossibleAtThisLevel,
                ]
                const level = "VERY_HIGH"
                const bound = {
                    position: 9.1,
                    levels: ["MEDIUM", "VERY_HIGH"], // level skip!
                }

                const result = calculateLevelHistories(histories, level, bound)

                const expectedOverrideEvent = {
                    level: "MEDIUM",
                    type: "OVERRIDE",
                    name: "overridden to stay within ~| and )|( at the VERY_HIGH level",
                    position: 9.208778600061725,
                }
                expect(result[0]).toEqual(historyThatWillBeImpossibleAtThisLevel)
                expect(result[1]).toEqual([
                    expectedOverrideEvent,
                    {
                        level: "VERY_HIGH",
                        type: "EDA",
                        name: "4.5/58",
                        position: 8.820388401029373,
                    },
                ])
                expect(result[2]).toEqual([
                    expectedOverrideEvent,
                    {
                        level: "VERY_HIGH",
                        type: "MEAN",
                        name: "~| )|(",
                        position: 9.208778600061725,
                    },
                ])
            })
        })
    })
})
