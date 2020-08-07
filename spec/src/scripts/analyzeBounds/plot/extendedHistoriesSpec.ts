import { Cents, Name, Position } from "../../../../../src/general"
import { Level } from "../../../../../src/notations/ji"
import { computeExtendedHistories } from "../../../../../src/scripts/analyzeBounds/plot/extendedHistories"
import { EventType, HistoricalEvent, History } from "../../../../../src/scripts/analyzeBounds/types"
import { boundFixture } from "../../../../helpers/scripts/analyzeBounds/fixtures"

describe("computeExtendedHistories", () => {
    let history: History

    let passedInHistoryEvent: HistoricalEvent = {
        level: Level.HIGH,
        type: EventType.INA,
        name: "16.5°47" as Name<Position>,
        cents: 45.45 as Cents,
    }
    beforeEach(() => {
        history = [
            passedInHistoryEvent,
        ]
    })

    it("returns an array with potentially many elements: for each snappable position of any event type, a new history which is like the passed-in history extended with a new event of snapping to that position, and its rank updated if necessary", () => {
        const actualBoundCents = 45.4 as Cents

        const result = computeExtendedHistories(history, Level.ULTRA, {
            ...boundFixture,
            cents: actualBoundCents,
            levels: [Level.ULTRA, Level.EXTREME],
        })

        expect(result).toEqual(jasmine.arrayWithExactContents([
            [
                passedInHistoryEvent,
                {
                    level: Level.ULTRA,
                    type: EventType.INA,
                    name: "23.5°58",
                    cents: 46.062028316486725,
                },
            ],
            [
                passedInHistoryEvent,
                {
                    level: Level.ULTRA,
                    type: EventType.MEAN,
                    name: "'//| )//|",
                    cents: 45.681795472660895,
                },
            ],
            [
                passedInHistoryEvent,
                {
                    level: Level.ULTRA,
                    type: EventType.SIZE,
                    name: "S|M",
                    cents: 45.1124978365313,
                },
            ],
        ]))
    })
})