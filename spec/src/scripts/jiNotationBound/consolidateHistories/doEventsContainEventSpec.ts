import { Name, Pitch } from "../../../../../src/general"
import { JiNotationLevel } from "../../../../../src/sagittal/notations/ji"
import { computeDoEventsContainEvent } from "../../../../../src/scripts/jiNotationBound/consolidateHistories/doEventsContainEvent"
import { EventType } from "../../../../../src/scripts/jiNotationBound/histories"
import { EventAnalysis } from "../../../../../src/scripts/jiNotationBound/history"
import { RANKS } from "../../../../../src/scripts/jiNotationBound/ranks"
import { eventAnalysisFixture } from "../../../../helpers/src/scripts/jiNotationBound/fixtures"

describe("computeDoEventsContainEvent", (): void => {
    it(
        "returns true when the events contain an event which has the same name and the same JI notation level",
        (): void => {
            const eventAnalyses: EventAnalysis[] = [
                {
                    ...eventAnalysisFixture,
                    name: "someName" as Name<Pitch>,
                    jiNotationLevel: "someLevel" as JiNotationLevel,
                    rank: RANKS[ EventType.COMMA_MEAN ],
                },
            ]
            const targetEvent = {
                ...eventAnalysisFixture,
                name: "someName" as Name<Pitch>,
                jiNotationLevel: "someLevel" as JiNotationLevel,
                rank: RANKS[ EventType.SIZE_CATEGORY_BOUND ],
            }

            const actual = computeDoEventsContainEvent(eventAnalyses, targetEvent)

            expect(actual).toBeTruthy()
        },
    )

    it(
        "returns false when the events contain an event which has the same name but not the same JI notation level",
        (): void => {
            const eventAnalyses = [
                {
                    ...eventAnalysisFixture,
                    name: "someName" as Name<Pitch>,
                    jiNotationLevel: "someLevel" as JiNotationLevel,
                    rank: RANKS[ EventType.COMMA_MEAN ],
                },
            ]
            const targetEvent = {
                ...eventAnalysisFixture,
                name: "someName" as Name<Pitch>,
                jiNotationLevel: "otherLevel" as JiNotationLevel,
                rank: RANKS[ EventType.SIZE_CATEGORY_BOUND ],
            }

            const actual = computeDoEventsContainEvent(eventAnalyses, targetEvent)

            expect(actual).toBeFalsy()
        },
    )

    it(
        "returns false when the events contain an event which has the same JI notation level but not the same name",
        (): void => {
            const eventAnalyses = [
                {
                    ...eventAnalysisFixture,
                    name: "someName" as Name<Pitch>,
                    jiNotationLevel: "someLevel" as JiNotationLevel,
                    rank: RANKS[ EventType.COMMA_MEAN ],
                },
            ]
            const targetEvent = {
                ...eventAnalysisFixture,
                name: "otherName" as Name<Pitch>,
                jiNotationLevel: "someLevel" as JiNotationLevel,
                rank: RANKS[ EventType.SIZE_CATEGORY_BOUND ],
            }

            const actual = computeDoEventsContainEvent(eventAnalyses, targetEvent)

            expect(actual).toBeFalsy()
        },
    )

    it(
        "returns false when the events contain no events which have either the same name or the same JI notation level",
        (): void => {
            const eventAnalyses = [
                {
                    ...eventAnalysisFixture,
                    name: "someName" as Name<Pitch>,
                    jiNotationLevel: "someLevel" as JiNotationLevel,
                    rank: RANKS[ EventType.COMMA_MEAN ],
                },
            ]
            const targetEvent = {
                ...eventAnalysisFixture,
                name: "otherName" as Name<Pitch>,
                jiNotationLevel: "otherLevel" as JiNotationLevel,
                rank: RANKS[ EventType.COMMA_MEAN ],
            }

            const actual = computeDoEventsContainEvent(eventAnalyses, targetEvent)

            expect(actual).toBeFalsy()
        },
    )
})
