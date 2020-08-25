import { Cents, Name, Position } from "../../../../src/general"
import { computeInaMidpoints, Level } from "../../../../src/notations/ji"

describe("computeInaMidpoints", () => {
    it("works for the MEDIUM level, only including midpoints below the max position", () => {
        expect(computeInaMidpoints(Level.MEDIUM)).toEqual([
            { name: "0.5°21" as Name<Position>, cents: 2.7067858585169504 as Cents },
            { name: "1.5°21" as Name<Position>, cents: 8.120357575550852 as Cents },
            { name: "2.5°21" as Name<Position>, cents: 13.533929292584752 as Cents },
            { name: "3.5°21" as Name<Position>, cents: 18.94750100961865 as Cents },
            { name: "4.5°21" as Name<Position>, cents: 24.361072726652555 as Cents },
            { name: "5.5°21" as Name<Position>, cents: 29.774644443686455 as Cents },
            { name: "6.5°21" as Name<Position>, cents: 35.18821616072036 as Cents },
            { name: "7.5°21" as Name<Position>, cents: 40.601787877754255 as Cents },
            { name: "8.5°21" as Name<Position>, cents: 46.01535959478816 as Cents },
            { name: "9.5°21" as Name<Position>, cents: 51.42893131182206 as Cents },
            { name: "10.5°21" as Name<Position>, cents: 56.84250302885595 as Cents },
            { name: "11.5°21" as Name<Position>, cents: 62.25607474588986 as Cents },
            { name: "12.5°21" as Name<Position>, cents: 67.66964646292375 as Cents },
        ])
    })
})
