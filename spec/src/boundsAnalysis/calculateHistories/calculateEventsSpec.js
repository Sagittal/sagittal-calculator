const {calculateNeighborCommaPositions} = require("../../../../src/boundsAnalysis/data/calculateNeighborCommaPositions")
const {calculateEvents} = require("../../../../src/boundsAnalysis/calculateHistories/calculateEvents")

describe("calculateEvents", () => {
    let level
    let neighborCommaPositions
    let eventType
    let position

    describe("returns an event for each snappable position between the neighbor comma positions for this event type and level", () => {
        describe("for events of snapping to EDA midpoint positions", () => {
            beforeEach(() => {
                eventType = "EDA"
            })

            it("works when only one EDA midpoint is between the neighbor commas", () => {
                level = "VERY_HIGH"
                neighborCommaPositions = calculateNeighborCommaPositions(4.5, level)
                position = 5.1

                const result = calculateEvents(level, neighborCommaPositions, eventType, position)

                expect(result).toEqual(jasmine.arrayWithExactContents([
                    {
                        level: "VERY_HIGH",
                        type: "EDA",
                        name: "2.5/58",
                        position: 4.900215778349652,
                        rank: 1,
                    },
                ]))
            })

            it("works when only one EDA midpoint is between the neighbor commas, but it is not within a half-step of the EDA, so it gets a lower rank", () => {
                level = "VERY_HIGH"
                neighborCommaPositions = calculateNeighborCommaPositions(4.5, level)
                position = 3.1 // not carefully chosen; may not even be between the neighbor commas

                const result = calculateEvents(level, neighborCommaPositions, eventType, position)

                expect(result).toEqual(jasmine.arrayWithExactContents([
                    {
                        level: "VERY_HIGH",
                        type: "EDA",
                        name: "2.5/58",
                        position: 4.900215778349652,
                        rank: 4,
                    },
                ]))
            })

            it("works when multiple EDA midpoints are between the neighbor commas, assigning the close one a higher rank", () => {
                level = "HIGH"
                neighborCommaPositions = calculateNeighborCommaPositions(28.0, level)
                position = 28.1

                const result = calculateEvents(level, neighborCommaPositions, eventType, position)

                expect(result).toEqual(jasmine.arrayWithExactContents([
                    {
                        level: "HIGH",
                        type: "EDA",
                        name: "11.5/47",
                        position: 27.816544035397598,
                        rank: 1,
                    },
                    {
                        level: "HIGH",
                        type: "EDA",
                        name: "12.5/47",
                        position: 30.235373951519126,
                        rank: 4,
                    },
                ]))
            })

            it("returns an empty array if there are no EDA midpoints between the position's neighbor commas", () => {
                level = "VERY_HIGH"
                neighborCommaPositions = calculateNeighborCommaPositions(6.05, level)

                const result = calculateEvents(level, neighborCommaPositions, eventType, position)

                expect(result).toEqual([])
            })
        })

        describe("for events of snapping to comma mean positions", () => {
            beforeEach(() => {
                eventType = "MEAN"
            })

            it("works at the medium level", () => {
                level = "MEDIUM"
                neighborCommaPositions = calculateNeighborCommaPositions(26.25, level)
                position = 28.3

                const result = calculateEvents(level, neighborCommaPositions, eventType, position)

                expect(result).toEqual([
                    {
                        level: "MEDIUM",
                        type: "MEAN",
                        name: "/| |)",
                        position: 24.38519069840745,
                        rank: 5,
                    },
                ])
            })

            it("works at the high level", () => {
                level = "HIGH"
                neighborCommaPositions = calculateNeighborCommaPositions(26.25, level)
                position = 28.3

                const result = calculateEvents(level, neighborCommaPositions, eventType, position)

                expect(result).toEqual([
                    {
                        level: "HIGH",
                        type: "MEAN",
                        name: ")/| |)",
                        position: 26.07420006263995,
                        rank: 5,
                    },
                ])
            })

            it("works at the very high level", () => {
                level = "VERY_HIGH"
                neighborCommaPositions = calculateNeighborCommaPositions(26.25, level)
                position = 28.3

                const result = calculateEvents(level, neighborCommaPositions, eventType, position)

                expect(result).toEqual([
                    {
                        level: "VERY_HIGH",
                        type: "MEAN",
                        name: ".|) |)",
                        position: 26.287231406133,
                        rank: 5,
                    },
                ])
            })

            it("works at the extreme level", () => {
                level = "EXTREME"
                neighborCommaPositions = calculateNeighborCommaPositions(26.25, level)
                position = 28.3

                const result = calculateEvents(level, neighborCommaPositions, eventType, position)

                expect(result).toEqual([
                    {
                        level: "EXTREME",
                        type: "MEAN",
                        name: "`.|) ,,|)",
                        position: 26.220209513021253,
                        rank: 5,
                    },
                ])
            })

            it("works even if there is a closer comma mean to the position but it is not between the neighbor commas", () => {
                // mean between )|) and |\ is 31.2043820809972, 0.20 away
                // mean between |) and )|) is 28.95310116433255, 2.05 away
                // however, )|) is at 30.98583910472900, so the 30.5 position is between it and |), not between it and |\

                level = "HIGH"
                neighborCommaPositions = calculateNeighborCommaPositions(30.5, level)
                position = 27.3

                const result = calculateEvents(level, neighborCommaPositions, eventType, position)

                expect(result).toEqual([
                    {
                        level: "HIGH",
                        type: "MEAN",
                        name: "|) )|)",
                        position: 28.95310116433255,
                        rank: 5,
                    },
                ])
            })

            it("works when the comma mean is within a half-step of the EDA at that level, giving a better rank", () => {
                level = "MEDIUM"
                neighborCommaPositions = calculateNeighborCommaPositions(26.25, level)
                position = 26.22

                const result = calculateEvents(level, neighborCommaPositions, eventType, position)

                expect(result).toEqual([
                    {
                        level: "MEDIUM",
                        type: "MEAN",
                        name: "/| |)",
                        position: 24.38519069840745,
                        rank: 2,
                    },
                ])
            })
        })

        describe("for events of snapping to size category bound positions", () => {
            beforeEach(() => {
                eventType = "SIZE"
            })

            it("returns one event for each size category bound between the position's neighbor commas", () => {
                level = "MEDIUM"
                neighborCommaPositions = calculateNeighborCommaPositions(34.0, level)

                const result = calculateEvents(level, neighborCommaPositions, eventType, position)

                expect(result).toEqual([
                    {
                        level: "MEDIUM",
                        type: "SIZE",
                        name: "C|S",
                        position: 33.38249264420710,
                        rank: 6,
                    },
                ])
            })

            it("returns an empty array if there are no size category bounds between the position's neighbor commas", () => {
                level = "VERY_HIGH"
                neighborCommaPositions = calculateNeighborCommaPositions(6.05, level)

                const result = calculateEvents(level, neighborCommaPositions, eventType, position)

                expect(result).toEqual([])
            })
        })
    })
})
