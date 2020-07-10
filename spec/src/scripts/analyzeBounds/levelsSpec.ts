import {updateLevelAnalysis, levelsBestHistoryRanks, levelsBestCumulativeHistoryRanks} from "../../../../src/scripts/analyzeBounds/levels"

describe("updateLevelAnalysis", () => {
    describe("levelsBestHistoryRanks", () => {
        it("initializes a rank at a level when it doesn't exist yet", () => {
            const bestPossibleHistory = {
                events: [
                    {level: "MEDIUM", rank: 0},
                ],
            }
            if ("MEDIUM" in levelsBestHistoryRanks) delete levelsBestHistoryRanks["MEDIUM"]
            expect(levelsBestHistoryRanks["MEDIUM"]).toBeUndefined()

            updateLevelAnalysis(bestPossibleHistory)

            expect(levelsBestHistoryRanks["MEDIUM"][0]).toBe(1)
        })

        it("increments ranks at levels when they exist", () => {
            const bestPossibleHistory = {
                events: [
                    {level: "MEDIUM", rank: 0},
                    {level: "HIGH", rank: 1},
                ],
            }
            let formerMediumIna = 3
            let formerHighMean = 4
            levelsBestHistoryRanks["MEDIUM"] = [formerMediumIna]
            levelsBestHistoryRanks["HIGH"] = [undefined, formerHighMean]

            updateLevelAnalysis(bestPossibleHistory)

            expect(levelsBestHistoryRanks["MEDIUM"][0]).toBe(formerMediumIna + 1)
            expect(levelsBestHistoryRanks["HIGH"][1]).toBe(formerHighMean + 1)
        })
    })

    describe("levelsBestCumulativeHistoryRanks", () => {
        it("increments ranks at levels", () => {
            const bestPossibleHistory = {
                events: [
                    {level: "MEDIUM", rank: 0},
                    {level: "HIGH", rank: 2},
                    {level: "ULTRA", rank: 1},
                    {level: "EXTREME", rank: 3},
                ],
            }
            if ("MEDIUM" in levelsBestCumulativeHistoryRanks) delete levelsBestCumulativeHistoryRanks["MEDIUM"]
            if ("HIGH" in levelsBestCumulativeHistoryRanks) delete levelsBestCumulativeHistoryRanks["HIGH"]
            if ("ULTRA" in levelsBestCumulativeHistoryRanks) delete levelsBestCumulativeHistoryRanks["ULTRA"]
            if ("EXTREME" in levelsBestCumulativeHistoryRanks) delete levelsBestCumulativeHistoryRanks["EXTREME"]

            updateLevelAnalysis(bestPossibleHistory)

            expect(levelsBestCumulativeHistoryRanks["MEDIUM"][0]).toBe(1)
            expect(levelsBestCumulativeHistoryRanks["HIGH"][2]).toBe(1)
            expect(levelsBestCumulativeHistoryRanks["ULTRA"][2]).toBe(1)
            expect(levelsBestCumulativeHistoryRanks["EXTREME"][3]).toBe(1)
        })
    })
})
