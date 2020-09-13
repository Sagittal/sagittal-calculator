import { Integer, Name, Pitch, Rank } from "../../../../../src/general"
import { Level } from "../../../../../src/sagittal/notations/ji"
import { EventAnalysis } from "../../../../../src/scripts/bound/analyzeHistory"
import { computeDoEventsContainEvent } from "../../../../../src/scripts/bound/consolidateHistories/doEventsContainEvent"
import { eventAnalysisFixture } from "../../../../helpers/src/scripts/bound/fixtures"

describe("computeDoEventsContainEvent", (): void => {
    it("returns true when the events contain an event which has the same name and the same level", (): void => {
        const eventAnalyses: EventAnalysis[] = [
            {
                ...eventAnalysisFixture,
                name: "someName" as Name<Pitch>,
                level: "someLevel" as Level,
                rank: 1 as Integer & Rank<EventAnalysis>,
            },
        ]
        const targetEvent = {
            ...eventAnalysisFixture,
            name: "someName" as Name<Pitch>,
            level: "someLevel" as Level,
            rank: 2 as Integer & Rank<EventAnalysis>,
        }

        const actual = computeDoEventsContainEvent(eventAnalyses, targetEvent)

        expect(actual).toBeTruthy()
    })

    it("returns false when the events contain an event which has the same name but not the same level", (): void => {
        const eventAnalyses = [
            {
                ...eventAnalysisFixture,
                name: "someName" as Name<Pitch>,
                level: "someLevel" as Level,
                rank: 1 as Integer & Rank<EventAnalysis>,
            },
        ]
        const targetEvent = {
            ...eventAnalysisFixture,
            name: "someName" as Name<Pitch>, level: "otherLevel" as Level, rank: 2 as Integer & Rank<EventAnalysis>,
        }

        const actual = computeDoEventsContainEvent(eventAnalyses, targetEvent)

        expect(actual).toBeFalsy()
    })

    it("returns false when the events contain an event which has the same level but not the same name", (): void => {
        const eventAnalyses = [
            {
                ...eventAnalysisFixture,
                name: "someName" as Name<Pitch>,
                level: "someLevel" as Level,
                rank: 1 as Integer & Rank<EventAnalysis>,
            },
        ]
        const targetEvent = {
            ...eventAnalysisFixture,
            name: "otherName" as Name<Pitch>,
            level: "someLevel" as Level,
            rank: 2 as Integer & Rank<EventAnalysis>,
        }

        const actual = computeDoEventsContainEvent(eventAnalyses, targetEvent)

        expect(actual).toBeFalsy()
    })

    it(
        "returns false when the events contain no events which have either the same name or the same level",
        (): void => {
            const eventAnalyses = [
                {
                    ...eventAnalysisFixture,
                    name: "someName" as Name<Pitch>,
                    level: "someLevel" as Level,
                    rank: 1 as Integer & Rank<EventAnalysis>,
                },
            ]
            const targetEvent = {
                ...eventAnalysisFixture,
                name: "otherName" as Name<Pitch>,
                level: "otherLevel" as Level,
                rank: 1 as Integer & Rank<EventAnalysis>,
            }

            const actual = computeDoEventsContainEvent(eventAnalyses, targetEvent)

            expect(actual).toBeFalsy()
        },
    )
})
