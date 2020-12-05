import {APOTOME, Cents, computePitchFromCents, HALF_SCALER, Monzo, Name, Scamon} from "@sagittal/general"
import {BoundType, HIGH_EDA, JiNotationBound, JiNotationLevelId, ULTRA_EDA} from "@sagittal/system"
import {
    BoundedCommaClassPositions,
    computeBoundedCommaClassPositions,
} from "../../../../../src/scripts/jiNotationBoundClass/boundedPositions"
import {BoundEvent} from "../../../../../src/scripts/jiNotationBoundClass/histories"
import {computeBoundEvents} from "../../../../../src/scripts/jiNotationBoundClass/histories/events"

describe("computeBoundEvents", (): void => {
    let jiNotationLevel: JiNotationLevelId
    let boundedCommaClassPositions: BoundedCommaClassPositions
    let boundType: BoundType

    describe("returns an event for each bound position between the bounded comma class positions for this bound type and JI notation level", (): void => {
        describe("for events of snapping to ina midpoint positions", (): void => {
            beforeEach((): void => {
                boundType = BoundType.INA_MIDPOINT
            })

            it("works when only one ina midpoint is between the bounded comma class positions", (): void => {
                jiNotationLevel = JiNotationLevelId.ULTRA
                boundedCommaClassPositions =
                    computeBoundedCommaClassPositions(computePitchFromCents(4.5 as Cents), jiNotationLevel)

                const actual: BoundEvent[] =
                    computeBoundEvents(jiNotationLevel, boundedCommaClassPositions, boundType)

                const expected: BoundEvent[] = [
                    {
                        jiNotationLevel: JiNotationLevelId.ULTRA,
                        boundType: BoundType.INA_MIDPOINT,
                        name: "2.5°58" as Name<JiNotationBound>,
                        pitch: {monzo: APOTOME.monzo, scaler: [2.5, ULTRA_EDA]} as Scamon<{rational: false}>,
                    },
                ]
                expect(actual).toEqual(expected)
            })

            it("works when only one ina midpoint is between the bounded comma class positions, even if it is not within a half-ina            ", (): void => {
                jiNotationLevel = JiNotationLevelId.ULTRA
                boundedCommaClassPositions =
                    computeBoundedCommaClassPositions(computePitchFromCents(4.5 as Cents), jiNotationLevel)

                const actual: BoundEvent[] =
                    computeBoundEvents(jiNotationLevel, boundedCommaClassPositions, boundType)

                const expected: BoundEvent[] = [
                    {
                        jiNotationLevel: JiNotationLevelId.ULTRA,
                        boundType: BoundType.INA_MIDPOINT,
                        name: "2.5°58" as Name<JiNotationBound>,
                        pitch: {monzo: APOTOME.monzo, scaler: [2.5, ULTRA_EDA]} as Scamon<{rational: false}>,
                    },
                ]
                expect(actual).toEqual(expected)
            })

            it("works when multiple INA_MIDPOINT midpoints are between the bounded comma class positions", (): void => {
                jiNotationLevel = JiNotationLevelId.HIGH
                boundedCommaClassPositions =
                    computeBoundedCommaClassPositions(computePitchFromCents(28.0 as Cents), jiNotationLevel)

                const actual = computeBoundEvents(jiNotationLevel, boundedCommaClassPositions, boundType)

                const expected = [
                    {
                        jiNotationLevel: JiNotationLevelId.HIGH,
                        boundType: BoundType.INA_MIDPOINT,
                        name: "11.5°47" as Name<JiNotationBound>,
                        pitch: {monzo: APOTOME.monzo, scaler: [11.5, HIGH_EDA]} as Scamon<{rational: false}>,
                    },
                    {
                        jiNotationLevel: JiNotationLevelId.HIGH,
                        boundType: BoundType.INA_MIDPOINT,
                        name: "12.5°47" as Name<JiNotationBound>,
                        pitch: {monzo: APOTOME.monzo, scaler: [12.5, HIGH_EDA]} as Scamon<{rational: false}>,
                    },
                ]
                expect(actual).toEqual(expected)
            })

            it("returns an empty array if there are no INA_MIDPOINT midpoints between the position's bounded comma class positions            ", (): void => {
                jiNotationLevel = JiNotationLevelId.ULTRA
                boundedCommaClassPositions =
                    computeBoundedCommaClassPositions(computePitchFromCents(6.05 as Cents), jiNotationLevel)

                const actual = computeBoundEvents(jiNotationLevel, boundedCommaClassPositions, boundType)

                const expected = [] as BoundEvent[]
                expect(actual).toEqual(expected)
            })
        })

        describe("for events of snapping to comma mean positions", (): void => {
            beforeEach((): void => {
                boundType = BoundType.COMMA_MEAN
            })

            it("works at the Medium JI notation level", (): void => {
                jiNotationLevel = JiNotationLevelId.MEDIUM
                boundedCommaClassPositions =
                    computeBoundedCommaClassPositions(computePitchFromCents(26.25 as Cents), jiNotationLevel)

                const actual = computeBoundEvents(jiNotationLevel, boundedCommaClassPositions, boundType)

                const expected = [
                    {
                        jiNotationLevel: JiNotationLevelId.MEDIUM,
                        boundType: BoundType.COMMA_MEAN,
                        name: "/| |)" as Name<JiNotationBound>,
                        pitch: {
                            monzo: [2, 2, -1, -1],
                            scaler: HALF_SCALER,
                        } as Scamon<{rational: false}>,
                    },
                ]
                expect(actual).toEqual(expected)
            })

            it("works at the High JI notation level", (): void => {
                jiNotationLevel = JiNotationLevelId.HIGH
                boundedCommaClassPositions =
                    computeBoundedCommaClassPositions(computePitchFromCents(26.25 as Cents), jiNotationLevel)

                const actual = computeBoundEvents(jiNotationLevel, boundedCommaClassPositions, boundType)

                const expected = [
                    {
                        jiNotationLevel: JiNotationLevelId.HIGH,
                        boundType: BoundType.COMMA_MEAN,
                        name: ")/| |)" as Name<JiNotationBound>,
                        pitch: {
                            monzo: [-7, 5, -1, -1, 0, 0, 0, 1],
                            scaler: HALF_SCALER,
                        } as Scamon<{rational: false}>,
                    },
                ]
                expect(actual).toEqual(expected)
            })

            it("works at the Ultra JI notation level", (): void => {
                jiNotationLevel = JiNotationLevelId.ULTRA
                boundedCommaClassPositions =
                    computeBoundedCommaClassPositions(computePitchFromCents(26.25 as Cents), jiNotationLevel)

                const actual = computeBoundEvents(jiNotationLevel, boundedCommaClassPositions, boundType)

                const expected = [
                    {
                        jiNotationLevel: JiNotationLevelId.ULTRA,
                        boundType: BoundType.COMMA_MEAN,
                        name: ".|) |)" as Name<JiNotationBound>,
                        pitch: {
                            monzo: [27, -12, -1, -2],
                            scaler: HALF_SCALER,
                        } as Scamon<{rational: false}>,
                    },
                ]
                expect(actual).toEqual(expected)
            })

            it("works at the Extreme JI notation level", (): void => {
                jiNotationLevel = JiNotationLevelId.EXTREME
                boundedCommaClassPositions =
                    computeBoundedCommaClassPositions(computePitchFromCents(26.25 as Cents), jiNotationLevel)

                const actual = computeBoundEvents(jiNotationLevel, boundedCommaClassPositions, boundType)

                const expected = [
                    {
                        jiNotationLevel: JiNotationLevelId.EXTREME,
                        boundType: BoundType.COMMA_MEAN,
                        name: "`.|) ,,|)" as Name<JiNotationBound>,
                        pitch: {
                            monzo: [-10, 4, -1, 1, 2, -1],
                            scaler: HALF_SCALER,
                        } as Scamon<{rational: false}>,
                    },
                ]
                expect(actual).toEqual(expected)
            })

            it("works even if there is a closer comma mean to the position but it is not between the bounded comma class positions         ", (): void => {
                // Mean between )|) and |\ is 31.204382, 0.20 away
                // Mean between |) and )|) is 28.953101, 2.05 away
                // However, )|) is at 30.985839,
                // So the 30.5 position is between it and |), not between it and |\

                jiNotationLevel = JiNotationLevelId.HIGH
                boundedCommaClassPositions =
                    computeBoundedCommaClassPositions(computePitchFromCents(30.5 as Cents), jiNotationLevel)

                const actual = computeBoundEvents(jiNotationLevel, boundedCommaClassPositions, boundType)

                const expected = [
                    {
                        jiNotationLevel: JiNotationLevelId.HIGH,
                        boundType: BoundType.COMMA_MEAN,
                        name: "|) )|)" as Name<JiNotationBound>,
                        pitch: {
                            monzo: [3, -1, 0, -2, 0, 0, 0, 1],
                            scaler: HALF_SCALER,
                        } as Scamon<{rational: false}>,
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
                jiNotationLevel = JiNotationLevelId.MEDIUM
                boundedCommaClassPositions =
                    computeBoundedCommaClassPositions(computePitchFromCents(34.0 as Cents), jiNotationLevel)

                const actual = computeBoundEvents(jiNotationLevel, boundedCommaClassPositions, boundType)

                const expected = [
                    {
                        jiNotationLevel: JiNotationLevelId.MEDIUM,
                        boundType: BoundType.SIZE_CATEGORY_BOUND,
                        name: "C|S" as Name<JiNotationBound>,
                        pitch: {
                            monzo: [27, -17] as Monzo<{rational: true}>,
                            scaler: HALF_SCALER,
                        } as Scamon<{rational: false}>,
                    },
                ]
                expect(actual).toEqual(expected)
            })

            it("returns an empty array if there are no size category bounds between the position's bounded comma class positions         ", (): void => {
                jiNotationLevel = JiNotationLevelId.ULTRA
                boundedCommaClassPositions =
                    computeBoundedCommaClassPositions(computePitchFromCents(6.05 as Cents), jiNotationLevel)

                const actual = computeBoundEvents(jiNotationLevel, boundedCommaClassPositions, boundType)

                const expected = [] as BoundEvent[]
                expect(actual).toEqual(expected)
            })
        })
    })
})
