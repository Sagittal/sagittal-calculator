import { Cents, Name } from "../../../../../src/general"
import { Bound, BoundType, JiNotationLevel } from "../../../../../src/sagittal/notations/ji"
import {
    BoundedSymbolClassPositions,
    computeBoundedSymbolClassPositions,
} from "../../../../../src/scripts/jiNotationBound/boundedPositions"
import { BoundEvent } from "../../../../../src/scripts/jiNotationBound/histories"
import { computeBoundEvents } from "../../../../../src/scripts/jiNotationBound/histories/events"

describe("computeBoundEvents", (): void => {
    let jiNotationLevel: JiNotationLevel
    let boundedSymbolClassPositions: BoundedSymbolClassPositions
    let boundType: BoundType

    describe("returns an event for each bound position between the bounded symbol class positions for this bound type and JI notation level", (): void => {
        describe("for events of snapping to ina midpoint positions", (): void => {
            beforeEach((): void => {
                boundType = BoundType.INA_MIDPOINT
            })

            it("works when only one ina midpoint is between the bounded symbols", (): void => {
                jiNotationLevel = JiNotationLevel.ULTRA
                boundedSymbolClassPositions = computeBoundedSymbolClassPositions(4.5 as Cents, jiNotationLevel)

                const actual: BoundEvent[] = computeBoundEvents(jiNotationLevel, boundedSymbolClassPositions, boundType)

                const expected: BoundEvent[] = [
                    {
                        jiNotationLevel: JiNotationLevel.ULTRA,
                        boundType: BoundType.INA_MIDPOINT,
                        name: "2.5°58" as Name<Bound>,
                        cents: 4.900215 as Cents,
                    },
                ]
                expect(actual).toBeCloseToObject(expected)
            })

            it("works when only one ina midpoint is between the bounded symbols, even if it is not within a half-ina            ", (): void => {
                jiNotationLevel = JiNotationLevel.ULTRA
                boundedSymbolClassPositions = computeBoundedSymbolClassPositions(4.5 as Cents, jiNotationLevel)

                const actual: BoundEvent[] =
                    computeBoundEvents(jiNotationLevel, boundedSymbolClassPositions, boundType)

                const expected: BoundEvent[] = [
                    {
                        jiNotationLevel: JiNotationLevel.ULTRA,
                        boundType: BoundType.INA_MIDPOINT,
                        name: "2.5°58" as Name<Bound>,
                        cents: 4.900215 as Cents,
                    },
                ]
                expect(actual).toBeCloseToObject(expected)
            })

            it("works when multiple INA_MIDPOINT midpoints are between the bounded symbols", (): void => {
                jiNotationLevel = JiNotationLevel.HIGH
                boundedSymbolClassPositions = computeBoundedSymbolClassPositions(28.0 as Cents, jiNotationLevel)

                const actual = computeBoundEvents(jiNotationLevel, boundedSymbolClassPositions, boundType)

                const expected = [
                    {
                        jiNotationLevel: JiNotationLevel.HIGH,
                        boundType: BoundType.INA_MIDPOINT,
                        name: "11.5°47" as Name<Bound>,
                        cents: 27.816544 as Cents,
                    },
                    {
                        jiNotationLevel: JiNotationLevel.HIGH,
                        boundType: BoundType.INA_MIDPOINT,
                        name: "12.5°47" as Name<Bound>,
                        cents: 30.235373 as Cents,
                    },
                ]
                expect(actual).toBeArrayWithDeepCloseContents(expected)
            })

            it("returns an empty array if there are no INA_MIDPOINT midpoints between the position's bounded symbols            ", (): void => {
                jiNotationLevel = JiNotationLevel.ULTRA
                boundedSymbolClassPositions = computeBoundedSymbolClassPositions(6.05 as Cents, jiNotationLevel)

                const actual = computeBoundEvents(jiNotationLevel, boundedSymbolClassPositions, boundType)

                const expected = [] as BoundEvent[]
                expect(actual).toEqual(expected)
            })
        })

        describe("for events of snapping to comma mean positions", (): void => {
            beforeEach((): void => {
                boundType = BoundType.COMMA_MEAN
            })

            it("works at the Medium JI notation level", (): void => {
                jiNotationLevel = JiNotationLevel.MEDIUM
                boundedSymbolClassPositions = computeBoundedSymbolClassPositions(26.25 as Cents, jiNotationLevel)

                const actual = computeBoundEvents(jiNotationLevel, boundedSymbolClassPositions, boundType)

                const expected = [
                    {
                        jiNotationLevel: JiNotationLevel.MEDIUM,
                        boundType: BoundType.COMMA_MEAN,
                        name: "/| |)" as Name<Bound>,
                        cents: 24.385190 as Cents,
                    },
                ]
                expect(actual).toBeCloseToObject(expected)
            })

            it("works at the High JI notation level", (): void => {
                jiNotationLevel = JiNotationLevel.HIGH
                boundedSymbolClassPositions = computeBoundedSymbolClassPositions(26.25 as Cents, jiNotationLevel)

                const actual = computeBoundEvents(jiNotationLevel, boundedSymbolClassPositions, boundType)

                const expected = [
                    {
                        jiNotationLevel: JiNotationLevel.HIGH,
                        boundType: BoundType.COMMA_MEAN,
                        name: ")/| |)" as Name<Bound>,
                        cents: 26.074200 as Cents,
                    },
                ]
                expect(actual).toBeCloseToObject(expected)
            })

            it("works at the Ultra JI notation level", (): void => {
                jiNotationLevel = JiNotationLevel.ULTRA
                boundedSymbolClassPositions = computeBoundedSymbolClassPositions(26.25 as Cents, jiNotationLevel)

                const actual = computeBoundEvents(jiNotationLevel, boundedSymbolClassPositions, boundType)

                const expected = [
                    {
                        jiNotationLevel: JiNotationLevel.ULTRA,
                        boundType: BoundType.COMMA_MEAN,
                        name: ".|) |)" as Name<Bound>,
                        cents: 26.287231 as Cents,
                    },
                ]
                expect(actual).toBeCloseToObject(expected)
            })

            it("works at the Extreme JI notation level", (): void => {
                jiNotationLevel = JiNotationLevel.EXTREME
                boundedSymbolClassPositions = computeBoundedSymbolClassPositions(26.25 as Cents, jiNotationLevel)

                const actual = computeBoundEvents(jiNotationLevel, boundedSymbolClassPositions, boundType)

                const expected = [
                    {
                        jiNotationLevel: JiNotationLevel.EXTREME,
                        boundType: BoundType.COMMA_MEAN,
                        name: "`.|) ,,|)" as Name<Bound>,
                        cents: 26.220209 as Cents,
                    },
                ]
                expect(actual).toBeCloseToObject(expected)
            })

            it("works even if there is a closer comma mean to the position but it is not between the bounded symbols         ", (): void => {
                // Mean between )|) and |\ is 31.204382, 0.20 away
                // Mean between |) and )|) is 28.953101, 2.05 away
                // However, )|) is at 30.985839,
                // So the 30.5 position is between it and |), not between it and |\

                jiNotationLevel = JiNotationLevel.HIGH
                boundedSymbolClassPositions = computeBoundedSymbolClassPositions(30.5 as Cents, jiNotationLevel)

                const actual = computeBoundEvents(jiNotationLevel, boundedSymbolClassPositions, boundType)

                const expected = [
                    {
                        jiNotationLevel: JiNotationLevel.HIGH,
                        boundType: BoundType.COMMA_MEAN,
                        name: "|) )|)" as Name<Bound>,
                        cents: 28.953101 as Cents,
                    },
                ]
                expect(actual).toBeCloseToObject(expected)
            })
        })

        describe("for events of snapping to size category bound positions", (): void => {
            beforeEach((): void => {
                boundType = BoundType.SIZE_CATEGORY_BOUND
            })

            it("returns one event for each size category bound between the position's bounded symbols", (): void => {
                jiNotationLevel = JiNotationLevel.MEDIUM
                boundedSymbolClassPositions = computeBoundedSymbolClassPositions(34.0 as Cents, jiNotationLevel)

                const actual = computeBoundEvents(jiNotationLevel, boundedSymbolClassPositions, boundType)

                const expected = [
                    {
                        jiNotationLevel: JiNotationLevel.MEDIUM,
                        boundType: BoundType.SIZE_CATEGORY_BOUND,
                        name: "C|S" as Name<Bound>,
                        cents: 33.382492 as Cents,
                    },
                ]
                expect(actual).toBeCloseToObject(expected)
            })

            it("returns an empty array if there are no size category bounds between the position's bounded symbols         ", (): void => {
                jiNotationLevel = JiNotationLevel.ULTRA
                boundedSymbolClassPositions = computeBoundedSymbolClassPositions(6.05 as Cents, jiNotationLevel)

                const actual = computeBoundEvents(jiNotationLevel, boundedSymbolClassPositions, boundType)

                const expected = [] as BoundEvent[]
                expect(actual).toEqual(expected)
            })
        })
    })
})
