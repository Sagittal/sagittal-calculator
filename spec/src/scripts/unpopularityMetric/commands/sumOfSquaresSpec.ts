import { runCommandAndGetConsoleOutput } from "../../../../helpers/specHelper"

describe("sum-of-squares", () => {
    it("gives you the sum-of-squares given the submetric combination in the file, and also logs the full list of unpopularities", () => {
        const command = "npm run sos -- -d --no-color --no-write"

        const result = runCommandAndGetConsoleOutput(command)

        expect(result[ 0 ]).toBe(`{"index":0,"antivotes":0,"fiveRoughRatio":[1,1],"rank":1}`)
        expect(result[ result.length - 2 ]).toBe(`0.004260809896143936`)
        expect(result[ result.length - 1 ]).toBe(`[{"sum":true,"kAsCoefficient":0.038,"aAsBase":1.994,"y":0.455,"w":-2.08,"useNuminator":true},{"count":true,"weightAsCoefficient":0.577,"useNuminator":true}]`)
    })
})
