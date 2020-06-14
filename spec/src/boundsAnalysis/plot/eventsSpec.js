const {computeBoundedCommaPositions} = require("../../../../src/boundsAnalysis/data/boundedCommaPositions")
const {computeEvents} = require("../../../../src/boundsAnalysis/plot/events")

describe("computeEvents", () => {
    let level
    let boundedCommaPositions
    let eventType
    let position

    describe("returns an event for each snappable position between the bounded comma positions for this event type and level", () => {
        describe("for events of snapping to INA midpoint positions", () => {
            beforeEach(() => {
                eventType = "INA"
            })

            it("works when only one INA midpoint is between the bounded commas", () => {
                level = "ULTRA"
                boundedCommaPositions = computeBoundedCommaPositions(4.5, level)
                position = 5.1

                const result = computeEvents(level, boundedCommaPositions, eventType, position)

                expect(result).toEqual(jasmine.arrayWithExactContents([
                    {
                        level: "ULTRA",
                        type: "INA",
                        name: "2.5°58",
                        position: 4.900215778349652,
                    },
                ]))
            })

            it("works when only one INA midpoint is between the bounded commas, even if it is not within a half-ina", () => {
                level = "ULTRA"
                boundedCommaPositions = computeBoundedCommaPositions(4.5, level)
                position = 3.1 // not carefully chosen; may not even be between the bounded commas

                const result = computeEvents(level, boundedCommaPositions, eventType, position)

                expect(result).toEqual(jasmine.arrayWithExactContents([
                    {
                        level: "ULTRA",
                        type: "INA",
                        name: "2.5°58",
                        position: 4.900215778349652,
                    },
                ]))
            })

            it("works when multiple INA midpoints are between the bounded commas", () => {
                level = "HIGH"
                boundedCommaPositions = computeBoundedCommaPositions(28.0, level)
                position = 28.1

                const result = computeEvents(level, boundedCommaPositions, eventType, position)

                expect(result).toEqual(jasmine.arrayWithExactContents([
                    {
                        level: "HIGH",
                        type: "INA",
                        name: "11.5°47",
                        position: 27.816544035397598,
                    },
                    {
                        level: "HIGH",
                        type: "INA",
                        name: "12.5°47",
                        position: 30.235373951519126,
                    },
                ]))
            })

            it("returns an empty array if there are no INA midpoints between the position's bounded commas", () => {
                level = "ULTRA"
                boundedCommaPositions = computeBoundedCommaPositions(6.05, level)

                const result = computeEvents(level, boundedCommaPositions, eventType, position)

                expect(result).toEqual([])
            })
        })

        describe("for events of snapping to comma mean positions", () => {
            beforeEach(() => {
                eventType = "MEAN"
            })

            it("works at the Medium level", () => {
                level = "MEDIUM"
                boundedCommaPositions = computeBoundedCommaPositions(26.25, level)
                position = 28.3

                const result = computeEvents(level, boundedCommaPositions, eventType, position)

                expect(result).toEqual([
                    {
                        level: "MEDIUM",
                        type: "MEAN",
                        name: "/| |)",
                        position: 24.38519069840745,
                    },
                ])
            })

            it("works at the High level", () => {
                level = "HIGH"
                boundedCommaPositions = computeBoundedCommaPositions(26.25, level)
                position = 28.3

                const result = computeEvents(level, boundedCommaPositions, eventType, position)

                expect(result).toEqual([
                    {
                        level: "HIGH",
                        type: "MEAN",
                        name: ")/| |)",
                        position: 26.07420006263995,
                    },
                ])
            })

            it("works at the Ultra level", () => {
                level = "ULTRA"
                boundedCommaPositions = computeBoundedCommaPositions(26.25, level)
                position = 28.3

                const result = computeEvents(level, boundedCommaPositions, eventType, position)

                expect(result).toEqual([
                    {
                        level: "ULTRA",
                        type: "MEAN",
                        name: ".|) |)",
                        position: 26.287231406133,
                    },
                ])
            })

            it("works at the Extreme level", () => {
                level = "EXTREME"
                boundedCommaPositions = computeBoundedCommaPositions(26.25, level)
                position = 28.3

                const result = computeEvents(level, boundedCommaPositions, eventType, position)

                expect(result).toEqual([
                    {
                        level: "EXTREME",
                        type: "MEAN",
                        name: "`.|) ,,|)",
                        position: 26.220209513021253,
                    },
                ])
            })

            it("works even if there is a closer comma mean to the position but it is not between the bounded commas", () => {
                // mean between )|) and |\ is 31.2043820809972, 0.20 away
                // mean between |) and )|) is 28.95310116433255, 2.05 away
                // however, )|) is at 30.98583910472900, so the 30.5 position is between it and |), not between it and |\

                level = "HIGH"
                boundedCommaPositions = computeBoundedCommaPositions(30.5, level)
                position = 27.3

                const result = computeEvents(level, boundedCommaPositions, eventType, position)

                expect(result).toEqual([
                    {
                        level: "HIGH",
                        type: "MEAN",
                        name: "|) )|)",
                        position: 28.95310116433255,
                    },
                ])
            })
        })

        describe("for events of snapping to size category bound positions", () => {
            beforeEach(() => {
                eventType = "SIZE"
            })

            it("returns one event for each size category bound between the position's bounded commas", () => {
                level = "MEDIUM"
                boundedCommaPositions = computeBoundedCommaPositions(34.0, level)

                const result = computeEvents(level, boundedCommaPositions, eventType, position)

                expect(result).toEqual([
                    {
                        level: "MEDIUM",
                        type: "SIZE",
                        name: "C|S",
                        position: 33.38249264420710,
                    },
                ])
            })

            it("returns an empty array if there are no size category bounds between the position's bounded commas", () => {
                level = "ULTRA"
                boundedCommaPositions = computeBoundedCommaPositions(6.05, level)

                const result = computeEvents(level, boundedCommaPositions, eventType, position)

                expect(result).toEqual([])
            })
        })
    })
})
