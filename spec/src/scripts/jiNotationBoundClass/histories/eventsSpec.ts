import { Cents, computePitchFromCents, HALF_SCALER, Monzo, Name, Scamon } from "../../../../../src/general"
import { APOTOME } from "../../../../../src/sagittal"
import { BoundClass, BoundType, JiNotationLevel } from "../../../../../src/sagittal/notations/ji"
import { HIGH_EDA, ULTRA_EDA } from "../../../../../src/sagittal/notations/ji/levelEdas"
import {
    BoundedCommaClassPositions,
    computeBoundedCommaClassPositions,
} from "../../../../../src/scripts/jiNotationBoundClass/boundedPositions"
import { BoundClassEvent } from "../../../../../src/scripts/jiNotationBoundClass/histories"
import { computeBoundClassEvents } from "../../../../../src/scripts/jiNotationBoundClass/histories/events"

describe("computeBoundClassEvents", (): void => {
    let jiNotationLevel: JiNotationLevel
    let boundedCommaClassPositions: BoundedCommaClassPositions
    let boundType: BoundType

    describe("returns an event for each bound position between the bounded comma class positions for this bound type and JI notation level", (): void => {
        describe("for events of snapping to ina midpoint positions", (): void => {
            beforeEach((): void => {
                boundType = BoundType.INA_MIDPOINT
            })

            it("works when only one ina midpoint is between the bounded comma class positions", (): void => {
                jiNotationLevel = JiNotationLevel.ULTRA
                boundedCommaClassPositions =
                    computeBoundedCommaClassPositions(computePitchFromCents(4.5 as Cents), jiNotationLevel)

                const actual: BoundClassEvent[] =
                    computeBoundClassEvents(jiNotationLevel, boundedCommaClassPositions, boundType)

                const expected: BoundClassEvent[] = [
                    {
                        jiNotationLevel: JiNotationLevel.ULTRA,
                        boundType: BoundType.INA_MIDPOINT,
                        name: "2.5°58" as Name<BoundClass>,
                        pitch: { monzo: APOTOME.monzo, scaler: [2.5, ULTRA_EDA] } as Scamon<{ rational: false }>,
                    },
                ]
                expect(actual).toEqual(expected)
            })

            it("works when only one ina midpoint is between the bounded comma class positions, even if it is not within a half-ina            ", (): void => {
                jiNotationLevel = JiNotationLevel.ULTRA
                boundedCommaClassPositions =
                    computeBoundedCommaClassPositions(computePitchFromCents(4.5 as Cents), jiNotationLevel)

                const actual: BoundClassEvent[] =
                    computeBoundClassEvents(jiNotationLevel, boundedCommaClassPositions, boundType)

                const expected: BoundClassEvent[] = [
                    {
                        jiNotationLevel: JiNotationLevel.ULTRA,
                        boundType: BoundType.INA_MIDPOINT,
                        name: "2.5°58" as Name<BoundClass>,
                        pitch: { monzo: APOTOME.monzo, scaler: [2.5, ULTRA_EDA] } as Scamon<{ rational: false }>,
                    },
                ]
                expect(actual).toEqual(expected)
            })

            it("works when multiple INA_MIDPOINT midpoints are between the bounded comma class positions", (): void => {
                jiNotationLevel = JiNotationLevel.HIGH
                boundedCommaClassPositions =
                    computeBoundedCommaClassPositions(computePitchFromCents(28.0 as Cents), jiNotationLevel)

                const actual = computeBoundClassEvents(jiNotationLevel, boundedCommaClassPositions, boundType)

                const expected = [
                    {
                        jiNotationLevel: JiNotationLevel.HIGH,
                        boundType: BoundType.INA_MIDPOINT,
                        name: "11.5°47" as Name<BoundClass>,
                        pitch: { monzo: APOTOME.monzo, scaler: [11.5, HIGH_EDA] } as Scamon<{ rational: false }>,
                    },
                    {
                        jiNotationLevel: JiNotationLevel.HIGH,
                        boundType: BoundType.INA_MIDPOINT,
                        name: "12.5°47" as Name<BoundClass>,
                        pitch: { monzo: APOTOME.monzo, scaler: [12.5, HIGH_EDA] } as Scamon<{ rational: false }>,
                    },
                ]
                expect(actual).toEqual(expected)
            })

            it("returns an empty array if there are no INA_MIDPOINT midpoints between the position's bounded comma class positions            ", (): void => {
                jiNotationLevel = JiNotationLevel.ULTRA
                boundedCommaClassPositions =
                    computeBoundedCommaClassPositions(computePitchFromCents(6.05 as Cents), jiNotationLevel)

                const actual = computeBoundClassEvents(jiNotationLevel, boundedCommaClassPositions, boundType)

                const expected = [] as BoundClassEvent[]
                expect(actual).toEqual(expected)
            })
        })

        describe("for events of snapping to comma mean positions", (): void => {
            beforeEach((): void => {
                boundType = BoundType.COMMA_MEAN
            })

            it("works at the Medium JI notation level", (): void => {
                jiNotationLevel = JiNotationLevel.MEDIUM
                boundedCommaClassPositions =
                    computeBoundedCommaClassPositions(computePitchFromCents(26.25 as Cents), jiNotationLevel)

                const actual = computeBoundClassEvents(jiNotationLevel, boundedCommaClassPositions, boundType)

                const expected = [
                    {
                        jiNotationLevel: JiNotationLevel.MEDIUM,
                        boundType: BoundType.COMMA_MEAN,
                        name: "/| |)" as Name<BoundClass>,
                        pitch: {
                            monzo: [2, 2, -1, -1],
                            scaler: HALF_SCALER,
                        } as Scamon<{ rational: false }>,
                    },
                ]
                expect(actual).toEqual(expected)
            })

            it("works at the High JI notation level", (): void => {
                jiNotationLevel = JiNotationLevel.HIGH
                boundedCommaClassPositions =
                    computeBoundedCommaClassPositions(computePitchFromCents(26.25 as Cents), jiNotationLevel)

                const actual = computeBoundClassEvents(jiNotationLevel, boundedCommaClassPositions, boundType)

                const expected = [
                    {
                        jiNotationLevel: JiNotationLevel.HIGH,
                        boundType: BoundType.COMMA_MEAN,
                        name: ")/| |)" as Name<BoundClass>,
                        pitch: {
                            monzo: [-7, 5, -1, -1, 0, 0, 0, 1],
                            scaler: HALF_SCALER,
                        } as Scamon<{ rational: false }>,
                    },
                ]
                expect(actual).toEqual(expected)
            })

            it("works at the Ultra JI notation level", (): void => {
                jiNotationLevel = JiNotationLevel.ULTRA
                boundedCommaClassPositions =
                    computeBoundedCommaClassPositions(computePitchFromCents(26.25 as Cents), jiNotationLevel)

                const actual = computeBoundClassEvents(jiNotationLevel, boundedCommaClassPositions, boundType)

                const expected = [
                    {
                        jiNotationLevel: JiNotationLevel.ULTRA,
                        boundType: BoundType.COMMA_MEAN,
                        name: ".|) |)" as Name<BoundClass>,
                        pitch: {
                            monzo: [27, -12, -1, -2],
                            scaler: HALF_SCALER,
                        } as Scamon<{ rational: false }>,
                    },
                ]
                expect(actual).toEqual(expected)
            })

            it("works at the Extreme JI notation level", (): void => {
                jiNotationLevel = JiNotationLevel.EXTREME
                boundedCommaClassPositions =
                    computeBoundedCommaClassPositions(computePitchFromCents(26.25 as Cents), jiNotationLevel)

                const actual = computeBoundClassEvents(jiNotationLevel, boundedCommaClassPositions, boundType)

                const expected = [
                    {
                        jiNotationLevel: JiNotationLevel.EXTREME,
                        boundType: BoundType.COMMA_MEAN,
                        name: "`.|) ,,|)" as Name<BoundClass>,
                        pitch: {
                            monzo: [-10, 4, -1, 1, 2, -1],
                            scaler: HALF_SCALER,
                        } as Scamon<{ rational: false }>,
                    },
                ]
                expect(actual).toEqual(expected)
            })

            it("works even if there is a closer comma mean to the position but it is not between the bounded comma class positions         ", (): void => {
                // Mean between )|) and |\ is 31.204382, 0.20 away
                // Mean between |) and )|) is 28.953101, 2.05 away
                // However, )|) is at 30.985839,
                // So the 30.5 position is between it and |), not between it and |\

                jiNotationLevel = JiNotationLevel.HIGH
                boundedCommaClassPositions =
                    computeBoundedCommaClassPositions(computePitchFromCents(30.5 as Cents), jiNotationLevel)

                const actual = computeBoundClassEvents(jiNotationLevel, boundedCommaClassPositions, boundType)

                const expected = [
                    {
                        jiNotationLevel: JiNotationLevel.HIGH,
                        boundType: BoundType.COMMA_MEAN,
                        name: "|) )|)" as Name<BoundClass>,
                        pitch: {
                            monzo: [3, -1, 0, -2, 0, 0, 0, 1],
                            scaler: HALF_SCALER,
                        } as Scamon<{ rational: false }>,
                    },
                ]
                expect(actual).toEqual(expected)
            })
        })

        describe("for events of snapping to size category bound positions", (): void => {
            beforeEach((): void => {
                boundType = BoundType.SIZE_CATEGORY_BOUND
            })

            it("returns one event for each size category bound between the position's bounded comma class positions         ", (): void => {
                jiNotationLevel = JiNotationLevel.MEDIUM
                boundedCommaClassPositions =
                    computeBoundedCommaClassPositions(computePitchFromCents(34.0 as Cents), jiNotationLevel)

                const actual = computeBoundClassEvents(jiNotationLevel, boundedCommaClassPositions, boundType)

                const expected = [
                    {
                        jiNotationLevel: JiNotationLevel.MEDIUM,
                        boundType: BoundType.SIZE_CATEGORY_BOUND,
                        name: "C|S" as Name<BoundClass>,
                        pitch: {
                            monzo: [27, -17] as Monzo<{ rational: true }>,
                            scaler: HALF_SCALER,
                        } as Scamon<{ rational: false }>,
                    },
                ]
                expect(actual).toEqual(expected)
            })

            it("returns an empty array if there are no size category bounds between the position's bounded comma class positions         ", (): void => {
                jiNotationLevel = JiNotationLevel.ULTRA
                boundedCommaClassPositions =
                    computeBoundedCommaClassPositions(computePitchFromCents(6.05 as Cents), jiNotationLevel)

                const actual = computeBoundClassEvents(jiNotationLevel, boundedCommaClassPositions, boundType)

                const expected = [] as BoundClassEvent[]
                expect(actual).toEqual(expected)
            })
        })
    })
})
