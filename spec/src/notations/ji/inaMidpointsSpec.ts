import { computeInaMidpoints } from "../../../../src/notations/ji/inaMidpoints"
import { Level } from "../../../../src/notations/ji/types"
import { EventName } from "../../../../src/scripts/analyzeBounds/types"
import { Cents } from "../../../../src/utilities/types"

describe("computeInaMidpoints", () => {
    it("works for the MEDIUM level, only including midpoints below the maximum position", () => {
        expect(computeInaMidpoints(Level.MEDIUM)).toEqual([
            { name: "0.5°21" as EventName, position: 2.7067858585169504 as Cents },
            { name: "1.5°21" as EventName, position: 8.120357575550852 as Cents },
            { name: "2.5°21" as EventName, position: 13.533929292584752 as Cents },
            { name: "3.5°21" as EventName, position: 18.94750100961865 as Cents },
            { name: "4.5°21" as EventName, position: 24.361072726652555 as Cents },
            { name: "5.5°21" as EventName, position: 29.774644443686455 as Cents },
            { name: "6.5°21" as EventName, position: 35.18821616072036 as Cents },
            { name: "7.5°21" as EventName, position: 40.601787877754255 as Cents },
            { name: "8.5°21" as EventName, position: 46.01535959478816 as Cents },
            { name: "9.5°21" as EventName, position: 51.42893131182206 as Cents },
            { name: "10.5°21" as EventName, position: 56.84250302885595 as Cents },
            { name: "11.5°21" as EventName, position: 62.25607474588986 as Cents },
            { name: "12.5°21" as EventName, position: 67.66964646292375 as Cents },
        ])
    })
})
