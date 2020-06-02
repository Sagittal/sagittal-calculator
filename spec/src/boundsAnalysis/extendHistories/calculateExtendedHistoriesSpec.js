const {calculateNeighborCommaPositions} = require("../../../../src/boundsAnalysis/utilities/calculateNeighborCommaPositions")
const {calculateExtendedHistories} = require("../../../../src/boundsAnalysis/extendHistories/calculateExtendedHistories")

describe("calculateExtendedHistories", () => {
    let level
    let position
    let history
    let neighborCommaPositions
    let eventType

    describe("with an EDA midpoint event", () => {
        beforeEach(() => {
            eventType = "EDA"
        })

        describe("returns all EDA midpoints between the position's neighbor commas", () => {
            it("works when only one EDA midpoint is present", () => {
                position = 4.5
                history = {
                    events: ["previous events"],
                    position,
                }
                level = "VeryHigh"
                neighborCommaPositions = calculateNeighborCommaPositions(position, level)

                const result = calculateExtendedHistories(history, level, neighborCommaPositions, eventType)

                expect(result).toEqual([
                    {
                        events: ["previous events", "VeryHigh_EDA_2.5/58_@4.90"],
                        position: 4.900215778349652,
                    },
                ])
            })

            it("works when multiple EDA midpoints are present", () => {
                position = 28.0
                history = {
                    events: ["previous events"],
                    position,
                }
                level = "High"
                neighborCommaPositions = calculateNeighborCommaPositions(position, level)

                const result = calculateExtendedHistories(history, level, neighborCommaPositions, eventType)

                expect(result).toEqual([
                    {
                        events: ["previous events", "High_EDA_11.5/47_@27.8"],
                        position: 27.816544035397598,
                    },
                    {
                        events: ["previous events", "High_EDA_12.5/47_@30.2"],
                        position: 30.235373951519126,
                    },
                ])
            })
        })

        it("returns an empty array if there are no EDA midpoints between the position's neighbor commas", () => {
            position = 6.05
            history = {
                events: ["previous events"],
                position,
            }
            level = "VeryHigh"
            neighborCommaPositions = calculateNeighborCommaPositions(position, level)

            const result = calculateExtendedHistories(history, level, neighborCommaPositions, eventType)

            expect(result).toEqual([])
        })
    })

    describe("with a comma mean event", () => {
        beforeEach(() => {
            eventType = "MEAN"
        })

        describe("returns the history extended with a new event: snapping to the geometric mean of the neighbor commas to the position", () => {
            beforeEach(() => {
                position = 26.25
                history = {
                    events: ["previous events"],
                    position,
                }
            })

            it("works at the Medium level", () => {
                level = "Medium"
                neighborCommaPositions = calculateNeighborCommaPositions(position, level)

                const result = calculateExtendedHistories(history, level, neighborCommaPositions, eventType)

                expect(result).toEqual([
                    {
                        events: ["previous events", "Medium_MEAN_/|-|)_@24.4"],
                        position: 24.38519069840745,
                    },
                ])
            })

            it("works at the High level", () => {
                level = "High"
                neighborCommaPositions = calculateNeighborCommaPositions(position, level)

                const result = calculateExtendedHistories(history, level, neighborCommaPositions, eventType)

                expect(result).toEqual([
                    {
                        events: ["previous events", "High_MEAN_)/|-|)_@26.1"],
                        position: 26.07420006263995,
                    },
                ])
            })

            it("works at the VeryHigh level", () => {
                level = "VeryHigh"
                neighborCommaPositions = calculateNeighborCommaPositions(position, level)

                const result = calculateExtendedHistories(history, level, neighborCommaPositions, eventType)

                expect(result).toEqual([
                    {
                        events: ["previous events", "VeryHigh_MEAN_.|)-|)_@26.3"],
                        position: 26.287231406133,
                    },
                ])
            })

            it("works at the Extreme level", () => {
                level = "Extreme"
                neighborCommaPositions = calculateNeighborCommaPositions(position, level)

                const result = calculateExtendedHistories(history, level, neighborCommaPositions, eventType)

                expect(result).toEqual([
                    {
                        events: ["previous events", "Extreme_MEAN_`.|)-,,|)_@26.2"],
                        position: 26.220209513021253,
                    },
                ])
            })
        })

        it("snaps to the comma midpoint of the neighbor commas to the position, even if there is a closer comma midpoint beyond them", () => {
            // mean between )|) and |\ is 31.2043820809972, 0.20 away
            // mean between |) and )|) is 28.95310116433255, 2.05 away
            // however, )|) is at 30.985839104729000, so the 30.5 position is between it and |), not between it and |\

            position = 30.5
            history = {
                events: ["previous events"],
                position,
            }
            level = "High"
            neighborCommaPositions = calculateNeighborCommaPositions(position, level)

            const result = calculateExtendedHistories(history, level, neighborCommaPositions, eventType)

            expect(result).toEqual([
                {
                    events: ["previous events", "High_MEAN_|)-)|)_@29.0"],
                    position: 28.95310116433255,
                },
            ])
        })
    })

    describe("with a size category bound event", () => {
        beforeEach(() => {
            eventType = "SIZE"
        })

        it("returns one extended history for each size category bound between the position's neighbor commas", () => {
            position = 34.0
            history = {
                events: ["previous events"],
                position,
            }
            level = "Medium"
            neighborCommaPositions = calculateNeighborCommaPositions(position, level)

            const result = calculateExtendedHistories(history, level, neighborCommaPositions, eventType)

            expect(result).toEqual([
                {
                    events: ["previous events", "Medium_SIZE_C-S_@33.4"],
                    position: 33.382492644207100,
                },
            ])
        })

        it("returns an empty array if there are no size category bounds between the position's neighbor commas", () => {
            position = 6.05
            history = {
                events: ["previous events"],
                position,
            }
            level = "VeryHigh"
            neighborCommaPositions = calculateNeighborCommaPositions(position, level)

            const result = calculateExtendedHistories(history, level, neighborCommaPositions, eventType)

            expect(result).toEqual([])
        })
    })
})
