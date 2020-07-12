import { computeBoundedSymbolPositions } from "../../../../../src/notations/ji/boundedSymbolPositions"
import { computeEvents } from "../../../../../src/scripts/analyzeBounds/plot/events"
import { Level } from "../../../../../src/notations/ji/types"
import { EventName, EventType } from "../../../../../src/scripts/analyzeBounds/types"
import { Cents } from "../../../../../src/utilities/types"

describe("computeEvents", () => {
    let level: Level
    let boundedSymbolPositions: [Cents | undefined, Cents | undefined]
    let eventType: EventType

    describe("returns an event for each snappable position between the bounded symbol positions for this event type and level", () => {
        describe("for events of snapping to INA midpoint positions", () => {
            beforeEach(() => {
                eventType = EventType.INA
            })

            it("works when only one INA midpoint is between the bounded symbols", () => {
                level = Level.ULTRA
                boundedSymbolPositions = computeBoundedSymbolPositions(4.5 as Cents, level)

                const result = computeEvents(level, boundedSymbolPositions, eventType)

                expect(result).toEqual(jasmine.arrayWithExactContents([
                    {
                        level: Level.ULTRA,
                        type: EventType.INA,
                        name: "2.5°58",
                        position: 4.900215778349652,
                    },
                ]))
            })

            it("works when only one INA midpoint is between the bounded symbols, even if it is not within a half-ina", () => {
                level = Level.ULTRA
                boundedSymbolPositions = computeBoundedSymbolPositions(4.5 as Cents, level)

                const result = computeEvents(level, boundedSymbolPositions, eventType)

                expect(result).toEqual(jasmine.arrayWithExactContents([
                    {
                        level: Level.ULTRA,
                        type: EventType.INA,
                        name: "2.5°58",
                        position: 4.900215778349652,
                    },
                ]))
            })

            it("works when multiple INA midpoints are between the bounded symbols", () => {
                level = Level.HIGH
                boundedSymbolPositions = computeBoundedSymbolPositions(28.0 as Cents, level)

                const result = computeEvents(level, boundedSymbolPositions, eventType)

                expect(result).toEqual(jasmine.arrayWithExactContents([
                    {
                        level: Level.HIGH,
                        type: EventType.INA,
                        name: "11.5°47",
                        position: 27.816544035397598,
                    },
                    {
                        level: Level.HIGH,
                        type: EventType.INA,
                        name: "12.5°47",
                        position: 30.235373951519126,
                    },
                ]))
            })

            it("returns an empty array if there are no INA midpoints between the position's bounded symbols", () => {
                level = Level.ULTRA
                boundedSymbolPositions = computeBoundedSymbolPositions(6.05 as Cents, level)

                const result = computeEvents(level, boundedSymbolPositions, eventType)

                expect(result).toEqual([])
            })
        })

        describe("for events of snapping to comma mean positions", () => {
            beforeEach(() => {
                eventType = EventType.MEAN
            })

            it("works at the Medium level", () => {
                level = Level.MEDIUM
                boundedSymbolPositions = computeBoundedSymbolPositions(26.25 as Cents, level)

                const result = computeEvents(level, boundedSymbolPositions, eventType)

                expect(result).toEqual([
                    {
                        level: Level.MEDIUM,
                        type: EventType.MEAN,
                        name: "/| |)" as EventName,
                        position: 24.38519069840745 as Cents,
                    },
                ])
            })

            it("works at the High level", () => {
                level = Level.HIGH
                boundedSymbolPositions = computeBoundedSymbolPositions(26.25 as Cents, level)

                const result = computeEvents(level, boundedSymbolPositions, eventType)

                expect(result).toEqual([
                    {
                        level: Level.HIGH,
                        type: EventType.MEAN,
                        name: ")/| |)" as EventName,
                        position: 26.07420006263995 as Cents,
                    },
                ])
            })

            it("works at the Ultra level", () => {
                level = Level.ULTRA
                boundedSymbolPositions = computeBoundedSymbolPositions(26.25 as Cents, level)

                const result = computeEvents(level, boundedSymbolPositions, eventType)

                expect(result).toEqual([
                    {
                        level: Level.ULTRA,
                        type: EventType.MEAN,
                        name: ".|) |)" as EventName,
                        position: 26.287231406133 as Cents,
                    },
                ])
            })

            it("works at the Extreme level", () => {
                level = Level.EXTREME
                boundedSymbolPositions = computeBoundedSymbolPositions(26.25 as Cents, level)

                const result = computeEvents(level, boundedSymbolPositions, eventType)

                expect(result).toEqual([
                    {
                        level: Level.EXTREME,
                        type: EventType.MEAN,
                        name: "`.|) ,,|)" as EventName,
                        position: 26.220209513021253 as Cents,
                    },
                ])
            })

            it("works even if there is a closer comma mean to the position but it is not between the bounded symbols", () => {
                // mean between )|) and |\ is 31.2043820809972, 0.20 away
                // mean between |) and )|) is 28.95310116433255, 2.05 away
                // however, )|) is at 30.98583910472900, so the 30.5 position is between it and |), not between it and |\

                level = Level.HIGH
                boundedSymbolPositions = computeBoundedSymbolPositions(30.5 as Cents, level)

                const result = computeEvents(level, boundedSymbolPositions, eventType)

                expect(result).toEqual([
                    {
                        level: Level.HIGH,
                        type: EventType.MEAN,
                        name: "|) )|)" as EventName,
                        position: 28.95310116433255 as Cents,
                    },
                ])
            })
        })

        describe("for events of snapping to size category bound positions", () => {
            beforeEach(() => {
                eventType = EventType.SIZE
            })

            it("returns one event for each size category bound between the position's bounded symbols", () => {
                level = Level.MEDIUM
                boundedSymbolPositions = computeBoundedSymbolPositions(34.0 as Cents, level)

                const result = computeEvents(level, boundedSymbolPositions, eventType)

                expect(result).toEqual([
                    {
                        level: Level.MEDIUM,
                        type: EventType.SIZE,
                        name: "C|S" as EventName,
                        position: 33.38249264420710 as Cents,
                    },
                ])
            })

            it("returns an empty array if there are no size category bounds between the position's bounded symbols", () => {
                level = Level.ULTRA
                boundedSymbolPositions = computeBoundedSymbolPositions(6.05 as Cents, level)

                const result = computeEvents(level, boundedSymbolPositions, eventType)

                expect(result).toEqual([])
            })
        })
    })
})
