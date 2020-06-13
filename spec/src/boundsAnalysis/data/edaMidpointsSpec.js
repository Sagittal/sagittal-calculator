const {computeEdaMidpoints} = require("../../../../src/boundsAnalysis/data/edaMidpoints")

describe("computeEdaMidpoints", () => {
    it("works for the MEDIUM level, only including midpoints below the maximum position", () => {
        expect(computeEdaMidpoints("MEDIUM")).toEqual([
            {name: "0.5°21", position: 2.7067858585169504},
            {name: "1.5°21", position: 8.120357575550852},
            {name: "2.5°21", position: 13.533929292584752},
            {name: "3.5°21", position: 18.94750100961865},
            {name: "4.5°21", position: 24.361072726652555},
            {name: "5.5°21", position: 29.774644443686455},
            {name: "6.5°21", position: 35.18821616072036},
            {name: "7.5°21", position: 40.601787877754255},
            {name: "8.5°21", position: 46.01535959478816},
            {name: "9.5°21", position: 51.42893131182206},
            {name: "10.5°21", position: 56.84250302885595},
            {name: "11.5°21", position: 62.25607474588986},
            {name: "12.5°21", position: 67.66964646292375},
        ])
    })
})
