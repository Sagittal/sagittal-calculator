import { Cents, Name, Pitch } from "../../../../../src/general"
import { Level } from "../../../../../src/sagittal/notations/ji"
import {
    BoundedSymbolPositions,
    computeBoundedJiSymbolPositions,
} from "../../../../../src/scripts/bound/boundedPositions"
import { EventType, HistoricalEvent } from "../../../../../src/scripts/bound/histories"
import { computeEvents } from "../../../../../src/scripts/bound/histories/events"

describe("computeEvents", (): void => {
    let level: Level
    let boundedSymbolPositions: BoundedSymbolPositions
    let eventType: EventType

    describe("returns an event for each snappable position between the bounded symbol positions for this event type and level", (): void => {
        describe("for events of snapping to ina midpoint positions", (): void => {
            beforeEach((): void => {
                eventType = EventType.INA
            })

            it("works when only one ina midpoint is between the bounded symbols", (): void => {
                level = Level.ULTRA
                boundedSymbolPositions = computeBoundedJiSymbolPositions(4.5 as Cents, level)

                const actual: HistoricalEvent[] = computeEvents(level, boundedSymbolPositions, eventType)

                const expected: HistoricalEvent[] = [
                    {
                        level: Level.ULTRA,
                        type: EventType.INA,
                        name: "2.5°58" as Name<HistoricalEvent>,
                        cents: 4.900215 as Cents,
                    },
                ]
                expect(actual).toBeCloseToObject(expected)
            })

            it(
                `works when only one ina midpoint is between the bounded symbols, even if it is not within a half-ina`,
                (): void => {
                    level = Level.ULTRA
                    boundedSymbolPositions = computeBoundedJiSymbolPositions(4.5 as Cents, level)

                    const actual: HistoricalEvent[] = computeEvents(level, boundedSymbolPositions, eventType)

                    const expected: HistoricalEvent[] = [
                        {
                            level: Level.ULTRA,
                            type: EventType.INA,
                            name: "2.5°58" as Name<HistoricalEvent>,
                            cents: 4.900215 as Cents,
                        },
                    ]
                    expect(actual).toBeCloseToObject(expected)
                },
            )

            it("works when multiple INA midpoints are between the bounded symbols", (): void => {
                level = Level.HIGH
                boundedSymbolPositions = computeBoundedJiSymbolPositions(28.0 as Cents, level)

                const actual = computeEvents(level, boundedSymbolPositions, eventType)

                const expected = [
                    {
                        level: Level.HIGH,
                        type: EventType.INA,
                        name: "11.5°47" as Name<HistoricalEvent>,
                        cents: 27.816544 as Cents,
                    },
                    {
                        level: Level.HIGH,
                        type: EventType.INA,
                        name: "12.5°47" as Name<HistoricalEvent>,
                        cents: 30.235373 as Cents,
                    },
                ]
                expect(actual).toBeArrayWithDeepCloseContents(expected)
            })

            it(
                "returns an empty array if there are no INA midpoints between the position's bounded symbols",
                (): void => {
                    level = Level.ULTRA
                    boundedSymbolPositions = computeBoundedJiSymbolPositions(6.05 as Cents, level)

                    const actual = computeEvents(level, boundedSymbolPositions, eventType)

                    const expected = [] as HistoricalEvent[]
                    expect(actual).toEqual(expected)
                },
            )
        })

        describe("for events of snapping to comma mean positions", (): void => {
            beforeEach((): void => {
                eventType = EventType.MEAN
            })

            it("works at the Medium level", (): void => {
                level = Level.MEDIUM
                boundedSymbolPositions = computeBoundedJiSymbolPositions(26.25 as Cents, level)

                const actual = computeEvents(level, boundedSymbolPositions, eventType)

                const expected = [
                    {
                        level: Level.MEDIUM,
                        type: EventType.MEAN,
                        name: "/| |)" as Name<Pitch>,
                        cents: 24.385190 as Cents,
                    },
                ]
                expect(actual).toBeCloseToObject(expected)
            })

            it("works at the High level", (): void => {
                level = Level.HIGH
                boundedSymbolPositions = computeBoundedJiSymbolPositions(26.25 as Cents, level)

                const actual = computeEvents(level, boundedSymbolPositions, eventType)

                const expected = [
                    {
                        level: Level.HIGH,
                        type: EventType.MEAN,
                        name: ")/| |)" as Name<Pitch>,
                        cents: 26.074200 as Cents,
                    },
                ]
                expect(actual).toBeCloseToObject(expected)
            })

            it("works at the Ultra level", (): void => {
                level = Level.ULTRA
                boundedSymbolPositions = computeBoundedJiSymbolPositions(26.25 as Cents, level)

                const actual = computeEvents(level, boundedSymbolPositions, eventType)

                const expected = [
                    {
                        level: Level.ULTRA,
                        type: EventType.MEAN,
                        name: ".|) |)" as Name<Pitch>,
                        cents: 26.287231 as Cents,
                    },
                ]
                expect(actual).toBeCloseToObject(expected)
            })

            it("works at the Extreme level", (): void => {
                level = Level.EXTREME
                boundedSymbolPositions = computeBoundedJiSymbolPositions(26.25 as Cents, level)

                const actual = computeEvents(level, boundedSymbolPositions, eventType)

                const expected = [
                    {
                        level: Level.EXTREME,
                        type: EventType.MEAN,
                        name: "`.|) ,,|)" as Name<Pitch>,
                        cents: 26.220209 as Cents,
                    },
                ]
                expect(actual).toBeCloseToObject(expected)
            })

            it(
                `works even if there is a closer comma mean to the position but it is not between the bounded symbols`,
                (): void => {
                    // mean between )|) and |\ is 31.204382, 0.20 away
                    // mean between |) and )|) is 28.953101, 2.05 away
                    // however, )|) is at 30.985839,
                    // so the 30.5 position is between it and |), not between it and |\

                    level = Level.HIGH
                    boundedSymbolPositions = computeBoundedJiSymbolPositions(30.5 as Cents, level)

                    const actual = computeEvents(level, boundedSymbolPositions, eventType)

                    const expected = [
                        {
                            level: Level.HIGH,
                            type: EventType.MEAN,
                            name: "|) )|)" as Name<Pitch>,
                            cents: 28.953101 as Cents,
                        },
                    ]
                    expect(actual).toBeCloseToObject(expected)
                },
            )
        })

        describe("for events of snapping to size category bound positions", (): void => {
            beforeEach((): void => {
                eventType = EventType.SIZE
            })

            it("returns one event for each size category bound between the position's bounded symbols", (): void => {
                level = Level.MEDIUM
                boundedSymbolPositions = computeBoundedJiSymbolPositions(34.0 as Cents, level)

                const actual = computeEvents(level, boundedSymbolPositions, eventType)

                const expected = [
                    {
                        level: Level.MEDIUM,
                        type: EventType.SIZE,
                        name: "C|S" as Name<Pitch>,
                        cents: 33.382492 as Cents,
                    },
                ]
                expect(actual).toBeCloseToObject(expected)
            })

            it(
                `returns an empty array if there are no size category bounds between the position's bounded symbols`,
                (): void => {
                    level = Level.ULTRA
                    boundedSymbolPositions = computeBoundedJiSymbolPositions(6.05 as Cents, level)

                    const actual = computeEvents(level, boundedSymbolPositions, eventType)

                    const expected = [] as HistoricalEvent[]
                    expect(actual).toEqual(expected)
                },
            )
        })
    })
})
