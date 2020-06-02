const {calculateBoundHistories} = require("../../../../src/boundsAnalysis/extendHistories/calculateBoundHistories")

describe("calculateBoundHistories", () => {
    it("given a bound, returns an array of all of its possible histories", () => {
        const bound = {
            position: 9.5,
            levels: ["Medium", "VeryHigh", "Extreme"],
        }

        const result = calculateBoundHistories(bound)

        expect(result).toEqual([
            {
                events: ["Medium_EDA_1.5/21_@8.12", "VeryHigh_impossible"],
                position: 8.120357575550852,
            },
            {
                events: ["Medium_MEAN_|(-)|(_@7.72", "VeryHigh_impossible"],
                position: 7.72288142310195,
            },
        ])
    })

    it("works for the final bound", () => {
        const bound = {
            position: 68.5725082211804,
            levels: ["Medium", "High", "VeryHigh", "Extreme", "Insane"],
        }

        const result = calculateBoundHistories(bound)

        expect(result).toEqual([
            {
                events: ["Medium_EDA_12.5/21_@67.7", "High_SIZE_L-SS_@68.6", "VeryHigh_EDA_34.5/58_@67.6", "Extreme_impossible"],
                position: 67.62297774122518,
            },
            {
                events: ["Medium_EDA_12.5/21_@67.7", "High_SIZE_L-SS_@68.6", "VeryHigh_SIZE_L-SS_@68.6", "Extreme_EDA_140.5/233_@68.6", "Insane_EDA_485.5/809_@68.2"],
                position: 68.22505616936851,
            },
            {
                events: ["Medium_EDA_12.5/21_@67.7", "High_SIZE_L-SS_@68.6", "VeryHigh_SIZE_L-SS_@68.6", "Extreme_EDA_140.5/233_@68.6", "Insane_EDA_486.5/809_@68.4"],
                position: 68.36558151678226,
            },
            {
                events: ["Medium_EDA_12.5/21_@67.7", "High_SIZE_L-SS_@68.6", "VeryHigh_SIZE_L-SS_@68.6", "Extreme_EDA_140.5/233_@68.6", "Insane_EDA_487.5/809_@68.5"],
                position: 68.50610686419598,
            },
            {
                events: ["Medium_EDA_12.5/21_@67.7", "High_SIZE_L-SS_@68.6", "VeryHigh_SIZE_L-SS_@68.6", "Extreme_EDA_140.5/233_@68.6", "Insane_SIZE_L-SS_@68.6"],
                position: 68.5725082211804,
            },
            {
                events: ["Medium_EDA_12.5/21_@67.7", "High_SIZE_L-SS_@68.6", "VeryHigh_SIZE_L-SS_@68.6", "Extreme_SIZE_L-SS_@68.6", "Insane_EDA_485.5/809_@68.2"],
                position: 68.22505616936851,
            },
            {
                events: ["Medium_EDA_12.5/21_@67.7", "High_SIZE_L-SS_@68.6", "VeryHigh_SIZE_L-SS_@68.6", "Extreme_SIZE_L-SS_@68.6", "Insane_EDA_486.5/809_@68.4"],
                position: 68.36558151678226,
            },
            {
                events: ["Medium_EDA_12.5/21_@67.7", "High_SIZE_L-SS_@68.6", "VeryHigh_SIZE_L-SS_@68.6", "Extreme_SIZE_L-SS_@68.6", "Insane_EDA_487.5/809_@68.5"],
                position: 68.50610686419598,
            },
            {
                events: ["Medium_EDA_12.5/21_@67.7", "High_SIZE_L-SS_@68.6", "VeryHigh_SIZE_L-SS_@68.6", "Extreme_SIZE_L-SS_@68.6", "Insane_SIZE_L-SS_@68.6"],
                position: 68.5725082211804,
            },
            {
                events: ["Medium_SIZE_L-SS_@68.6", "High_SIZE_L-SS_@68.6", "VeryHigh_EDA_34.5/58_@67.6", "Extreme_impossible"],
                position: 67.62297774122518,
            },
            {
                events: ["Medium_SIZE_L-SS_@68.6", "High_SIZE_L-SS_@68.6", "VeryHigh_SIZE_L-SS_@68.6", "Extreme_EDA_140.5/233_@68.6", "Insane_EDA_485.5/809_@68.2"],
                position: 68.22505616936851,
            },
            {
                events: ["Medium_SIZE_L-SS_@68.6", "High_SIZE_L-SS_@68.6", "VeryHigh_SIZE_L-SS_@68.6", "Extreme_EDA_140.5/233_@68.6", "Insane_EDA_486.5/809_@68.4"],
                position: 68.36558151678226,
            },
            {
                events: ["Medium_SIZE_L-SS_@68.6", "High_SIZE_L-SS_@68.6", "VeryHigh_SIZE_L-SS_@68.6", "Extreme_EDA_140.5/233_@68.6", "Insane_EDA_487.5/809_@68.5"],
                position: 68.50610686419598,
            },
            {
                events: ["Medium_SIZE_L-SS_@68.6", "High_SIZE_L-SS_@68.6", "VeryHigh_SIZE_L-SS_@68.6", "Extreme_EDA_140.5/233_@68.6", "Insane_SIZE_L-SS_@68.6"],
                position: 68.5725082211804,
            },
            {
                events: ["Medium_SIZE_L-SS_@68.6", "High_SIZE_L-SS_@68.6", "VeryHigh_SIZE_L-SS_@68.6", "Extreme_SIZE_L-SS_@68.6", "Insane_EDA_485.5/809_@68.2"],
                position: 68.22505616936851,
            },
            {
                events: ["Medium_SIZE_L-SS_@68.6", "High_SIZE_L-SS_@68.6", "VeryHigh_SIZE_L-SS_@68.6", "Extreme_SIZE_L-SS_@68.6", "Insane_EDA_486.5/809_@68.4"],
                position: 68.36558151678226,
            },
            {
                events: ["Medium_SIZE_L-SS_@68.6", "High_SIZE_L-SS_@68.6", "VeryHigh_SIZE_L-SS_@68.6", "Extreme_SIZE_L-SS_@68.6", "Insane_EDA_487.5/809_@68.5"],
                position: 68.50610686419598,
            },
            {
                events: ["Medium_SIZE_L-SS_@68.6", "High_SIZE_L-SS_@68.6", "VeryHigh_SIZE_L-SS_@68.6", "Extreme_SIZE_L-SS_@68.6", "Insane_SIZE_L-SS_@68.6"],
                position: 68.5725082211804,
            },
        ])
    })
})
