import { Cents, Name, Pitch } from "../../../../../src/general"
import { Level } from "../../../../../src/sagittal/notations/ji"
import { EventType, HistoricalEvent, History } from "../../../../../src/scripts/bound/histories"
import { computeExtendedHistories } from "../../../../../src/scripts/bound/histories/extendedHistories"
import { boundFixture } from "../../../../helpers/src/scripts/bound/fixtures"

describe("computeExtendedHistories", (): void => {
    let history: History

    let passedInHistoryEvent: HistoricalEvent = {
        level: Level.HIGH,
        type: EventType.INA,
        name: "16.5°47" as Name<Pitch>,
        cents: 45.45 as Cents,
    }
    beforeEach((): void => {
        history = [
            passedInHistoryEvent,
        ]
    })

    it("returns an array with potentially many elements: for each snappable position of any event type, a new history which is like the passed-in history extended with a new event of snapping to that position, and its rank updated if necessary", (): void => {
        const actualBoundCents = 45.4 as Cents

        const actual = computeExtendedHistories(history, Level.ULTRA, {
            ...boundFixture,
            cents: actualBoundCents,
            levels: [Level.ULTRA, Level.EXTREME],
        })

        const expected = [
            [
                passedInHistoryEvent,
                {
                    level: Level.ULTRA,
                    type: EventType.INA,
                    name: "23.5°58" as Name<Pitch>,
                    cents: 46.062028 as Cents,
                },
            ],
            [
                passedInHistoryEvent,
                {
                    level: Level.ULTRA,
                    type: EventType.MEAN,
                    name: "'//| )//|" as Name<Pitch>,
                    cents: 45.681795 as Cents,
                },
            ],
            [
                passedInHistoryEvent,
                {
                    level: Level.ULTRA,
                    type: EventType.SIZE,
                    name: "S|M" as Name<Pitch>,
                    cents: 45.112498 as Cents,
                },
            ],
        ]
        expect(actual).toBeArrayWithDeepCloseContents(expected)
    })
})
