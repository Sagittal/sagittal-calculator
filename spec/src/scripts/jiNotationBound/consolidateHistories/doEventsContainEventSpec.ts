import { Integer, Name, Pitch, Rank } from "../../../../../src/general"
import { JiNotationLevel } from "../../../../../src/sagittal/notations/ji"
import { computeDoEventsContainEvent } from "../../../../../src/scripts/jiNotationBound/consolidateHistories/doEventsContainEvent"
import { EventAnalysis } from "../../../../../src/scripts/jiNotationBound/history"
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
                    rank: 1 as Integer & Rank<EventAnalysis>,
                },
            ]
            const targetEvent = {
                ...eventAnalysisFixture,
                name: "someName" as Name<Pitch>,
                jiNotationLevel: "someLevel" as JiNotationLevel,
                rank: 2 as Integer & Rank<EventAnalysis>,
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
                    rank: 1 as Integer & Rank<EventAnalysis>,
                },
            ]
            const targetEvent = {
                ...eventAnalysisFixture,
                name: "someName" as Name<Pitch>,
                jiNotationLevel: "otherLevel" as JiNotationLevel,
                rank: 2 as Integer & Rank<EventAnalysis>,
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
                    rank: 1 as Integer & Rank<EventAnalysis>,
                },
            ]
            const targetEvent = {
                ...eventAnalysisFixture,
                name: "otherName" as Name<Pitch>,
                jiNotationLevel: "someLevel" as JiNotationLevel,
                rank: 2 as Integer & Rank<EventAnalysis>,
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
                    rank: 1 as Integer & Rank<EventAnalysis>,
                },
            ]
            const targetEvent = {
                ...eventAnalysisFixture,
                name: "otherName" as Name<Pitch>,
                jiNotationLevel: "otherLevel" as JiNotationLevel,
                rank: 1 as Integer & Rank<EventAnalysis>,
            }

            const actual = computeDoEventsContainEvent(eventAnalyses, targetEvent)

            expect(actual).toBeFalsy()
        },
    )
})
