import { Cents, Name } from "../../../../../src/general"
import { JiNotationLevel } from "../../../../../src/sagittal/notations/ji"
import { InaMidpoint } from "../../../../../src/scripts/jiNotationBound/histories"
import { computeInaMidpoints } from "../../../../../src/scripts/jiNotationBound/histories/inaMidpoints"

describe("computeInaMidpoints", (): void => {
    it("works for the Medium JI notation level, only including midpoints below the max position", (): void => {
        const jiNotationLevel = JiNotationLevel.MEDIUM

        const actual = computeInaMidpoints(jiNotationLevel)

        const expected = [
            { name: "0.5°21" as Name<InaMidpoint>, cents: 2.706785 as Cents },
            { name: "1.5°21" as Name<InaMidpoint>, cents: 8.120357 as Cents },
            { name: "2.5°21" as Name<InaMidpoint>, cents: 13.533929 as Cents },
            { name: "3.5°21" as Name<InaMidpoint>, cents: 18.947501 as Cents },
            { name: "4.5°21" as Name<InaMidpoint>, cents: 24.361072 as Cents },
            { name: "5.5°21" as Name<InaMidpoint>, cents: 29.774644 as Cents },
            { name: "6.5°21" as Name<InaMidpoint>, cents: 35.188216 as Cents },
            { name: "7.5°21" as Name<InaMidpoint>, cents: 40.601787 as Cents },
            { name: "8.5°21" as Name<InaMidpoint>, cents: 46.015359 as Cents },
            { name: "9.5°21" as Name<InaMidpoint>, cents: 51.428931 as Cents },
            { name: "10.5°21" as Name<InaMidpoint>, cents: 56.842503 as Cents },
            { name: "11.5°21" as Name<InaMidpoint>, cents: 62.256074 as Cents },
            { name: "12.5°21" as Name<InaMidpoint>, cents: 67.669646 as Cents },
        ]
        expect(actual).toBeCloseToObject(expected)
    })
})
