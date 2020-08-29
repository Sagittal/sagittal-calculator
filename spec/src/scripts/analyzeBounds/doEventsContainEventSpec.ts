import { Integer, Name, Pitch, Rank } from "../../../../src/general"
import { Level } from "../../../../src/sagittal/notations/ji"
import { computeDoEventsContainEvent } from "../../../../src/scripts/analyzeBounds/doEventsContainEvent"
import { AnalyzedEvent } from "../../../../src/scripts/analyzeBounds/types"
import { analyzedEventFixture } from "../../../helpers/src/scripts/analyzeBounds/fixtures"

describe("computeDoEventsContainEvent", () => {
    it("returns true when the events contain an event which has the same name and the same level", () => {
        const analyzedEvents: AnalyzedEvent[] = [
            {
                ...analyzedEventFixture,
                name: "someName" as Name<Pitch>,
                level: "someLevel" as Level,
                rank: 1 as Rank<AnalyzedEvent, Integer>,
            },
        ]
        const targetEvent = {
            ...analyzedEventFixture,
            name: "someName" as Name<Pitch>,
            level: "someLevel" as Level,
            rank: 2 as Rank<AnalyzedEvent, Integer>,
        }

        const actual = computeDoEventsContainEvent(analyzedEvents, targetEvent)

        expect(actual).toBeTruthy()
    })

    it("returns false when the events contain an event which has the same name but not the same level", () => {
        const analyzedEvents = [
            {
                ...analyzedEventFixture,
                name: "someName" as Name<Pitch>,
                level: "someLevel" as Level,
                rank: 1 as Rank<AnalyzedEvent, Integer>,
            },
        ]
        const targetEvent = {
            ...analyzedEventFixture,
            name: "someName" as Name<Pitch>, level: "otherLevel" as Level, rank: 2 as Rank<AnalyzedEvent, Integer>,
        }

        const actual = computeDoEventsContainEvent(analyzedEvents, targetEvent)

        expect(actual).toBeFalsy()
    })

    it("returns false when the events contain an event which has the same level but not the same name", () => {
        const analyzedEvents = [
            {
                ...analyzedEventFixture,
                name: "someName" as Name<Pitch>,
                level: "someLevel" as Level,
                rank: 1 as Rank<AnalyzedEvent, Integer>,
            },
        ]
        const targetEvent = {
            ...analyzedEventFixture,
            name: "otherName" as Name<Pitch>,
            level: "someLevel" as Level,
            rank: 2 as Rank<AnalyzedEvent, Integer>,
        }

        const actual = computeDoEventsContainEvent(analyzedEvents, targetEvent)

        expect(actual).toBeFalsy()
    })

    it("returns false when the events contain no events which have either the same name or the same level", () => {
        const analyzedEvents = [
            {
                ...analyzedEventFixture,
                name: "someName" as Name<Pitch>,
                level: "someLevel" as Level,
                rank: 1 as Rank<AnalyzedEvent, Integer>,
            },
        ]
        const targetEvent = {
            ...analyzedEventFixture,
            name: "otherName" as Name<Pitch>,
            level: "otherLevel" as Level,
            rank: 1 as Rank<AnalyzedEvent, Integer>,
        }

        const actual = computeDoEventsContainEvent(analyzedEvents, targetEvent)

        expect(actual).toBeFalsy()
    })
})
