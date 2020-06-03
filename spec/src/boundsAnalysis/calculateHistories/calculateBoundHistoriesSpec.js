const {calculateBoundHistories} = require("../../../../src/boundsAnalysis/calculateHistories/calculateBoundHistories")

describe("calculateBoundHistories", () => {
    it("given a bound, returns an array of all of its possible histories", () => {
        const bound = {
            position: 9.5,
            levels: ["Medium", "VeryHigh", "Extreme"],
        }

        const result = calculateBoundHistories(bound)

        expect(result).toEqual(jasmine.arrayWithExactContents([
            {
                position: 8.120357575550852,
                events: [
                    {
                        level: "Medium",
                        type: "EDA",
                        name: "1.5/21",
                        position: 8.120357575550852,
                    },
                    {
                        level: "VeryHigh",
                        type: "impossible",
                        name: "impossible",
                        position: 8.120357575550852,
                    },
                ],
            },
            {
                position: 7.72288142310195,
                events: [
                    {
                        level: "Medium",
                        type: "MEAN",
                        name: "|( )|(",
                        position: 7.72288142310195,
                    },
                    {
                        level: "VeryHigh",
                        type: "impossible",
                        name: "impossible",
                        position: 7.72288142310195,
                    },
                ],
            },
            {
                position: 9.514410378220525,
                overridden: true,
                events: [
                    {
                        level: "Medium",
                        type: "override",
                        name: "override",
                        position: 9.5
                    },
                    {
                        level: "VeryHigh",
                        type: "MEAN",
                        name: "~| )|(",
                        position: 9.208778600061725
                    },
                    {
                        level: "Extreme",
                        type: "EDA",
                        name: "19.5/233",
                        position: 9.514410378220525
                    }
                ],
            },
            {
                position: 9.514410378220525,
                overridden: true,
                events: [
                    {
                        level: "Medium",
                        type: "override",
                        name: "override",
                        position: 9.5
                    },
                    {
                        level: "VeryHigh",
                        type: "MEAN",
                        name: "~| )|(",
                        position: 9.208778600061725
                    },
                    {
                        level: "Extreme",
                        type: "EDA",
                        name: "19.5/233",
                        position: 9.514410378220525
                    }
                ]
            },
            {
                position: 9.434865916310185,
                overridden: true,
                events: [
                    {
                        level: "Medium",
                        type: "override",
                        name: "override",
                        position: 9.5
                    },
                    {
                        level: "VeryHigh",
                        type: "MEAN",
                        name: "~| )|(",
                        position: 9.208778600061725
                    },
                    {
                        level: "Extreme",
                        type: "MEAN",
                        name: ",)|( )|(",
                        position: 9.434865916310185
                    }
                ],
            },
        ]))
    })

    it("works for the final bound", () => {
        const bound = {
            position: 68.5725082211804,
            levels: ["Medium", "High", "VeryHigh", "Extreme", "Insane"],
        }

        const result = calculateBoundHistories(bound)

        expect(result).toEqual(jasmine.arrayWithExactContents([
            {
                position: 67.62297774122518,
                events: [
                    {
                        level: "Medium",
                        type: "EDA",
                        name: "12.5/21",
                        position: 67.66964646292375,
                    },
                    {
                        level: "High",
                        type: "SIZE",
                        name: "L|SS",
                        position: 68.5725082211804,
                    },
                    {
                        level: "VeryHigh",
                        type: "EDA",
                        name: "34.5/58",
                        position: 67.62297774122518,
                    },
                    {
                        level: "Extreme",
                        type: "impossible",
                        name: "impossible",
                        position: 67.62297774122518,
                    },
                ],
            },
            {
                position: 68.22505616936851,
                events: [
                    {
                        level: "Medium",
                        type: "EDA",
                        name: "12.5/21",
                        position: 67.66964646292375,
                    },
                    {
                        level: "High",
                        type: "SIZE",
                        name: "L|SS",
                        position: 68.5725082211804,
                    },
                    {
                        level: "VeryHigh",
                        type: "SIZE",
                        name: "L|SS",
                        position: 68.5725082211804,
                    },
                    {
                        level: "Extreme",
                        type: "EDA",
                        name: "140.5/233",
                        position: 68.55254657128121,
                    },
                    {
                        level: "Insane",
                        type: "EDA",
                        name: "485.5/809",
                        position: 68.22505616936851,
                    },
                ],
            },
            {
                position: 68.36558151678226,
                events: [
                    {
                        level: "Medium",
                        type: "EDA",
                        name: "12.5/21",
                        position: 67.66964646292375,
                    },
                    {
                        level: "High",
                        type: "SIZE",
                        name: "L|SS",
                        position: 68.5725082211804,
                    },
                    {
                        level: "VeryHigh",
                        type: "SIZE",
                        name: "L|SS",
                        position: 68.5725082211804,
                    },
                    {
                        level: "Extreme",
                        type: "EDA",
                        name: "140.5/233",
                        position: 68.55254657128121,
                    },
                    {
                        level: "Insane",
                        type: "EDA",
                        name: "486.5/809",
                        position: 68.36558151678226,
                    },
                ],
            },
            {
                position: 68.50610686419598,
                events: [
                    {
                        level: "Medium",
                        type: "EDA",
                        name: "12.5/21",
                        position: 67.66964646292375,
                    },
                    {
                        level: "High",
                        type: "SIZE",
                        name: "L|SS",
                        position: 68.5725082211804,
                    },
                    {
                        level: "VeryHigh",
                        type: "SIZE",
                        name: "L|SS",
                        position: 68.5725082211804,
                    },
                    {
                        level: "Extreme",
                        type: "EDA",
                        name: "140.5/233",
                        position: 68.55254657128121,
                    },
                    {
                        level: "Insane",
                        type: "EDA",
                        name: "487.5/809",
                        position: 68.50610686419598,
                    },
                ],
            },
            {
                position: 68.5725082211804,
                events: [
                    {
                        level: "Medium",
                        type: "EDA",
                        name: "12.5/21",
                        position: 67.66964646292375,
                    },
                    {
                        level: "High",
                        type: "SIZE",
                        name: "L|SS",
                        position: 68.5725082211804,
                    },
                    {
                        level: "VeryHigh",
                        type: "SIZE",
                        name: "L|SS",
                        position: 68.5725082211804,
                    },
                    {
                        level: "Extreme",
                        type: "EDA",
                        name: "140.5/233",
                        position: 68.55254657128121,
                    },
                    {
                        level: "Insane",
                        type: "SIZE",
                        name: "L|SS",
                        position: 68.5725082211804,
                    },
                ],
            },
            {
                position: 68.22505616936851,
                events: [
                    {
                        level: "Medium",
                        type: "EDA",
                        name: "12.5/21",
                        position: 67.66964646292375,
                    },
                    {
                        level: "High",
                        type: "SIZE",
                        name: "L|SS",
                        position: 68.5725082211804,
                    },
                    {
                        level: "VeryHigh",
                        type: "SIZE",
                        name: "L|SS",
                        position: 68.5725082211804,
                    },
                    {
                        level: "Extreme",
                        type: "SIZE",
                        name: "L|SS",
                        position: 68.5725082211804,
                    },
                    {
                        level: "Insane",
                        type: "EDA",
                        name: "485.5/809",
                        position: 68.22505616936851,
                    },
                ],
            },
            {
                position: 68.36558151678226,
                events: [
                    {
                        level: "Medium",
                        type: "EDA",
                        name: "12.5/21",
                        position: 67.66964646292375,
                    },
                    {
                        level: "High",
                        type: "SIZE",
                        name: "L|SS",
                        position: 68.5725082211804,
                    },
                    {
                        level: "VeryHigh",
                        type: "SIZE",
                        name: "L|SS",
                        position: 68.5725082211804,
                    },
                    {
                        level: "Extreme",
                        type: "SIZE",
                        name: "L|SS",
                        position: 68.5725082211804,
                    },
                    {
                        level: "Insane",
                        type: "EDA",
                        name: "486.5/809",
                        position: 68.36558151678226,
                    },
                ],
            },
            {
                position: 68.50610686419598,
                events: [
                    {
                        level: "Medium",
                        type: "EDA",
                        name: "12.5/21",
                        position: 67.66964646292375,
                    },
                    {
                        level: "High",
                        type: "SIZE",
                        name: "L|SS",
                        position: 68.5725082211804,
                    },
                    {
                        level: "VeryHigh",
                        type: "SIZE",
                        name: "L|SS",
                        position: 68.5725082211804,
                    },
                    {
                        level: "Extreme",
                        type: "SIZE",
                        name: "L|SS",
                        position: 68.5725082211804,
                    },
                    {
                        level: "Insane",
                        type: "EDA",
                        name: "487.5/809",
                        position: 68.50610686419598,
                    },
                ],
            },
            {
                position: 68.5725082211804,
                events: [
                    {
                        level: "Medium",
                        type: "EDA",
                        name: "12.5/21",
                        position: 67.66964646292375,
                    },
                    {
                        level: "High",
                        type: "SIZE",
                        name: "L|SS",
                        position: 68.5725082211804,
                    },
                    {
                        level: "VeryHigh",
                        type: "SIZE",
                        name: "L|SS",
                        position: 68.5725082211804,
                    },
                    {
                        level: "Extreme",
                        type: "SIZE",
                        name: "L|SS",
                        position: 68.5725082211804,
                    },
                    {
                        level: "Insane",
                        type: "SIZE",
                        name: "L|SS",
                        position: 68.5725082211804,
                    },
                ],
            },
            {
                position: 67.62297774122518,
                events: [
                    {
                        level: "Medium",
                        type: "SIZE",
                        name: "L|SS",
                        position: 68.5725082211804,
                    },
                    {
                        level: "High",
                        type: "SIZE",
                        name: "L|SS",
                        position: 68.5725082211804,
                    },
                    {
                        level: "VeryHigh",
                        type: "EDA",
                        name: "34.5/58",
                        position: 67.62297774122518,
                    },
                    {
                        level: "Extreme",
                        type: "impossible",
                        name: "impossible",
                        position: 67.62297774122518,
                    },
                ],
            },
            {
                position: 68.22505616936851,
                events: [
                    {
                        level: "Medium",
                        type: "SIZE",
                        name: "L|SS",
                        position: 68.5725082211804,
                    },
                    {
                        level: "High",
                        type: "SIZE",
                        name: "L|SS",
                        position: 68.5725082211804,
                    },
                    {
                        level: "VeryHigh",
                        type: "SIZE",
                        name: "L|SS",
                        position: 68.5725082211804,
                    },
                    {
                        level: "Extreme",
                        type: "EDA",
                        name: "140.5/233",
                        position: 68.55254657128121,
                    },
                    {
                        level: "Insane",
                        type: "EDA",
                        name: "485.5/809",
                        position: 68.22505616936851,
                    },
                ],
            },
            {
                position: 68.36558151678226,
                events: [
                    {
                        level: "Medium",
                        type: "SIZE",
                        name: "L|SS",
                        position: 68.5725082211804,
                    },
                    {
                        level: "High",
                        type: "SIZE",
                        name: "L|SS",
                        position: 68.5725082211804,
                    },
                    {
                        level: "VeryHigh",
                        type: "SIZE",
                        name: "L|SS",
                        position: 68.5725082211804,
                    },
                    {
                        level: "Extreme",
                        type: "EDA",
                        name: "140.5/233",
                        position: 68.55254657128121,
                    },
                    {
                        level: "Insane",
                        type: "EDA",
                        name: "486.5/809",
                        position: 68.36558151678226,
                    },
                ],
            },
            {
                position: 68.50610686419598,
                events: [
                    {
                        level: "Medium",
                        type: "SIZE",
                        name: "L|SS",
                        position: 68.5725082211804,
                    },
                    {
                        level: "High",
                        type: "SIZE",
                        name: "L|SS",
                        position: 68.5725082211804,
                    },
                    {
                        level: "VeryHigh",
                        type: "SIZE",
                        name: "L|SS",
                        position: 68.5725082211804,
                    },
                    {
                        level: "Extreme",
                        type: "EDA",
                        name: "140.5/233",
                        position: 68.55254657128121,
                    },
                    {
                        level: "Insane",
                        type: "EDA",
                        name: "487.5/809",
                        position: 68.50610686419598,
                    },
                ],
            },
            {
                position: 68.5725082211804,
                events: [
                    {
                        level: "Medium",
                        type: "SIZE",
                        name: "L|SS",
                        position: 68.5725082211804,
                    },
                    {
                        level: "High",
                        type: "SIZE",
                        name: "L|SS",
                        position: 68.5725082211804,
                    },
                    {
                        level: "VeryHigh",
                        type: "SIZE",
                        name: "L|SS",
                        position: 68.5725082211804,
                    },
                    {
                        level: "Extreme",
                        type: "EDA",
                        name: "140.5/233",
                        position: 68.55254657128121,
                    },
                    {
                        level: "Insane",
                        type: "SIZE",
                        name: "L|SS",
                        position: 68.5725082211804,
                    },
                ],
            },
            {
                position: 68.22505616936851,
                events: [
                    {
                        level: "Medium",
                        type: "SIZE",
                        name: "L|SS",
                        position: 68.5725082211804,
                    },
                    {
                        level: "High",
                        type: "SIZE",
                        name: "L|SS",
                        position: 68.5725082211804,
                    },
                    {
                        level: "VeryHigh",
                        type: "SIZE",
                        name: "L|SS",
                        position: 68.5725082211804,
                    },
                    {
                        level: "Extreme",
                        type: "SIZE",
                        name: "L|SS",
                        position: 68.5725082211804,
                    },
                    {
                        level: "Insane",
                        type: "EDA",
                        name: "485.5/809",
                        position: 68.22505616936851,
                    },
                ],
            },
            {
                position: 68.36558151678226,
                events: [
                    {
                        level: "Medium",
                        type: "SIZE",
                        name: "L|SS",
                        position: 68.5725082211804,
                    },
                    {
                        level: "High",
                        type: "SIZE",
                        name: "L|SS",
                        position: 68.5725082211804,
                    },
                    {
                        level: "VeryHigh",
                        type: "SIZE",
                        name: "L|SS",
                        position: 68.5725082211804,
                    },
                    {
                        level: "Extreme",
                        type: "SIZE",
                        name: "L|SS",
                        position: 68.5725082211804,
                    },
                    {
                        level: "Insane",
                        type: "EDA",
                        name: "486.5/809",
                        position: 68.36558151678226,
                    },
                ],
            },
            {
                position: 68.50610686419598,
                events: [
                    {
                        level: "Medium",
                        type: "SIZE",
                        name: "L|SS",
                        position: 68.5725082211804,
                    },
                    {
                        level: "High",
                        type: "SIZE",
                        name: "L|SS",
                        position: 68.5725082211804,
                    },
                    {
                        level: "VeryHigh",
                        type: "SIZE",
                        name: "L|SS",
                        position: 68.5725082211804,
                    },
                    {
                        level: "Extreme",
                        type: "SIZE",
                        name: "L|SS",
                        position: 68.5725082211804,
                    },
                    {
                        level: "Insane",
                        type: "EDA",
                        name: "487.5/809",
                        position: 68.50610686419598,
                    },
                ],
            },
            {
                position: 68.5725082211804,
                events: [
                    {
                        level: "Medium",
                        type: "SIZE",
                        name: "L|SS",
                        position: 68.5725082211804,
                    },
                    {
                        level: "High",
                        type: "SIZE",
                        name: "L|SS",
                        position: 68.5725082211804,
                    },
                    {
                        level: "VeryHigh",
                        type: "SIZE",
                        name: "L|SS",
                        position: 68.5725082211804,
                    },
                    {
                        level: "Extreme",
                        type: "SIZE",
                        name: "L|SS",
                        position: 68.5725082211804,
                    },
                    {
                        level: "Insane",
                        type: "SIZE",
                        name: "L|SS",
                        position: 68.5725082211804,
                    },
                ],
            },
        ]))
    })
})
