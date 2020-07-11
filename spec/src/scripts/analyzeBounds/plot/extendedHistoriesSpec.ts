import { computeExtendedHistories } from "../../../../../src/scripts/analyzeBounds/plot/extendedHistories"
import { BoundId, Level } from "../../../../../src/notations/ji/types"
import { EventName, EventType, HistoricalEvent, History } from "../../../../../src/scripts/analyzeBounds/types"
import { Cents } from "../../../../../src/utilities/types"

describe("computeExtendedHistories", () => {
    let history: History

    let passedInHistoryEvent: HistoricalEvent = {
        level: Level.HIGH,
        type: EventType.INA,
        name: "16.5°47" as EventName,
        position: 45.45 as Cents,
    }
    beforeEach(() => {
        history = [
            passedInHistoryEvent,
        ]
    })

    it("returns an array with potentially many elements: for each snappable position of any event type, a new history which is like the passed-in history extended with a new event of snapping to that position, and its rank updated if necessary", () => {
        const actualBoundPosition = 45.4 as Cents

        const result = computeExtendedHistories(history, Level.ULTRA, {
            position: actualBoundPosition,
            levels: [ Level.ULTRA, Level.EXTREME ],
            id: 0 as BoundId,
        })

        expect(result).toEqual(jasmine.arrayWithExactContents([
            [
                passedInHistoryEvent,
                {
                    level: Level.ULTRA,
                    type: EventType.INA,
                    name: "23.5°58",
                    position: 46.062028316486725,
                },
            ],
            [
                passedInHistoryEvent,
                {
                    level: Level.ULTRA,
                    type: EventType.MEAN,
                    name: "'//| )//|",
                    position: 45.681795472660895,
                },
            ],
            [
                passedInHistoryEvent,
                {
                    level: Level.ULTRA,
                    type: EventType.SIZE,
                    name: "S|M",
                    position: 45.1124978365313,
                },
            ],
        ]))
    })
})
