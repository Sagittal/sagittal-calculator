import { Cents, Name, Pitch } from "../../../../../src/general"
import { computeInaMidpoints, Level } from "../../../../../src/sagittal/notations/ji"

describe("computeInaMidpoints", (): void => {
    it("works for the MEDIUM level, only including midpoints below the max position", (): void => {
        const level = Level.MEDIUM

        const actual = computeInaMidpoints(level)

        const expected = [
            { name: "0.5°21" as Name<Pitch>, cents: 2.706785 as Cents },
            { name: "1.5°21" as Name<Pitch>, cents: 8.120357 as Cents },
            { name: "2.5°21" as Name<Pitch>, cents: 13.533929 as Cents },
            { name: "3.5°21" as Name<Pitch>, cents: 18.947501 as Cents },
            { name: "4.5°21" as Name<Pitch>, cents: 24.361072 as Cents },
            { name: "5.5°21" as Name<Pitch>, cents: 29.774644 as Cents },
            { name: "6.5°21" as Name<Pitch>, cents: 35.188216 as Cents },
            { name: "7.5°21" as Name<Pitch>, cents: 40.601787 as Cents },
            { name: "8.5°21" as Name<Pitch>, cents: 46.015359 as Cents },
            { name: "9.5°21" as Name<Pitch>, cents: 51.428931 as Cents },
            { name: "10.5°21" as Name<Pitch>, cents: 56.842503 as Cents },
            { name: "11.5°21" as Name<Pitch>, cents: 62.256074 as Cents },
            { name: "12.5°21" as Name<Pitch>, cents: 67.669646 as Cents },
        ]
        expect(actual).toBeCloseToObject(expected)
    })
})
