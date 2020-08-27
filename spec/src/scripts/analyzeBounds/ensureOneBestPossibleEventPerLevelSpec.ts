import { Level } from "../../../../src/notations/ji"
import { ensureOneBestPossibleEventPerLevel } from "../../../../src/scripts/analyzeBounds/ensureOneBestPossibleEventPerLevel"
import { ConsolidatedHistories } from "../../../../src/scripts/analyzeBounds/types"
import { consolidatedEventFixture } from "../../../helpers/src/scripts/analyzeBounds/fixtures"

describe("ensureOneBestPossibleEventPerLevel", () => {
    it(
        `throws an error if a consolidated history has more than one event in a single level 
        which is considered to be the one which is a member of the best possible history`,
        () => {
            const consolidatedHistories: ConsolidatedHistories = {
                [ Level.MEDIUM ]: [
                    { ...consolidatedEventFixture, isBestPossibleHistoryMember: true },
                    { ...consolidatedEventFixture, isBestPossibleHistoryMember: true },
                ],
                [ Level.HIGH ]: [
                    { ...consolidatedEventFixture, isBestPossibleHistoryMember: true },
                ],
                [ Level.EXTREME ]: [
                    { ...consolidatedEventFixture, isBestPossibleHistoryMember: true },
                    { ...consolidatedEventFixture, isBestPossibleHistoryMember: false },
                    { ...consolidatedEventFixture, isBestPossibleHistoryMember: false },
                ],
            }

            expect(() => ensureOneBestPossibleEventPerLevel(consolidatedHistories))
                .toThrow(new Error("History had at the medium level more than one event marked as member of the best possible history."))
        },
    )

    it(
        `throws an error if a consolidated history has, at a particular level, 
        no event which is identified as being the member of the best possible history`,
        () => {
            const consolidatedHistories: ConsolidatedHistories = {
                [ Level.MEDIUM ]: [
                    { ...consolidatedEventFixture, isBestPossibleHistoryMember: false },
                    { ...consolidatedEventFixture, isBestPossibleHistoryMember: false },
                ],
                [ Level.HIGH ]: [
                    { ...consolidatedEventFixture, isBestPossibleHistoryMember: true },
                ],
                [ Level.EXTREME ]: [
                    { ...consolidatedEventFixture, isBestPossibleHistoryMember: true },
                    { ...consolidatedEventFixture, isBestPossibleHistoryMember: false },
                    { ...consolidatedEventFixture, isBestPossibleHistoryMember: false },
                ],
            }

            expect(() => ensureOneBestPossibleEventPerLevel(consolidatedHistories))
                .toThrow(new Error("History had at the medium level no event marked as member of the best possible history."))
        },
    )

    it(
        `does not throw an error if a consolidated history does not have more than one best possible event per level`,
        () => {
            const consolidatedHistories: ConsolidatedHistories = {
                [ Level.MEDIUM ]: [
                    { ...consolidatedEventFixture, isBestPossibleHistoryMember: true },
                    { ...consolidatedEventFixture, isBestPossibleHistoryMember: false },
                ],
                [ Level.HIGH ]: [
                    { ...consolidatedEventFixture, isBestPossibleHistoryMember: true },
                ],
                [ Level.EXTREME ]: [
                    { ...consolidatedEventFixture, isBestPossibleHistoryMember: true },
                    { ...consolidatedEventFixture, isBestPossibleHistoryMember: false },
                    { ...consolidatedEventFixture, isBestPossibleHistoryMember: false },
                ],
            }

            expect(() => ensureOneBestPossibleEventPerLevel(consolidatedHistories)).not.toThrow()
        },
    )
})
