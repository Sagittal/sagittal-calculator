const {calculateBoundHistories} = require("../../../../src/boundsAnalysis/calculateHistories/calculateBoundHistories")

describe("calculateBoundHistories", () => {
    it("given a bound, returns an array of all of its possible histories", () => {
        const bound = {
            position: 9.5,
            levels: ["medium", "veryHigh", "extreme"],
        }

        const result = calculateBoundHistories(bound)

        expect(result).toEqual(jasmine.arrayWithExactContents([
            {
                position: 8.120357575550852,
                events: [
                    {
                        level: "medium",
                        type: "EDA",
                        name: "1.5/21",
                        position: 8.120357575550852,
                    },
                    {
                        level: "veryHigh",
                        type: "impossible",
                        name: "not between ~| @8.7296 and )|( @9.6880 at the veryHigh level",
                        position: 8.120357575550852,
                    },
                ],
            },
            {
                position: 7.72288142310195,
                events: [
                    {
                        level: "medium",
                        type: "MEAN",
                        name: "|( )|(",
                        position: 7.72288142310195,
                    },
                    {
                        level: "veryHigh",
                        type: "impossible",
                        name: "not between ~| @8.7296 and )|( @9.6880 at the veryHigh level",
                        position: 7.72288142310195,
                    },
                ],
            },
            {
                position: 9.514410378220525,
                overridden: true,
                events: [
                    {
                        level: "medium",
                        type: "override",
                        name: "override",
                        position: 9.5,
                    },
                    {
                        level: "veryHigh",
                        type: "MEAN",
                        name: "~| )|(",
                        position: 9.208778600061725,
                    },
                    {
                        level: "extreme",
                        type: "EDA",
                        name: "19.5/233",
                        position: 9.514410378220525,
                    },
                ],
            },
            {
                position: 9.514410378220525,
                overridden: true,
                events: [
                    {
                        level: "medium",
                        type: "override",
                        name: "override",
                        position: 9.5,
                    },
                    {
                        level: "veryHigh",
                        type: "MEAN",
                        name: "~| )|(",
                        position: 9.208778600061725,
                    },
                    {
                        level: "extreme",
                        type: "EDA",
                        name: "19.5/233",
                        position: 9.514410378220525,
                    },
                ],
            },
            {
                position: 9.434865916310185,
                overridden: true,
                events: [
                    {
                        level: "medium",
                        type: "override",
                        name: "override",
                        position: 9.5,
                    },
                    {
                        level: "veryHigh",
                        type: "MEAN",
                        name: "~| )|(",
                        position: 9.208778600061725,
                    },
                    {
                        level: "extreme",
                        type: "MEAN",
                        name: ",)|( )|(",
                        position: 9.434865916310185,
                    },
                ],
            },
        ]))
    })

    it("works for the final bound", () => {
        const bound = {
            position: 68.5725082211804,
            levels: ["medium", "high", "veryHigh", "extreme", "insane"],
        }

        const result = calculateBoundHistories(bound)

        expect(result).toEqual(jasmine.arrayWithExactContents([
            {
                position: 67.62297774122518,
                events: [
                    {
                        level: "medium",
                        type: "EDA",
                        name: "12.5/21",
                        position: 67.66964646292375,
                    },
                    {
                        level: "high",
                        type: "SIZE",
                        name: "L|SS",
                        position: 68.5725082211804,
                    },
                    {
                        level: "veryHigh",
                        type: "EDA",
                        name: "34.5/58",
                        position: 67.62297774122518,
                    },
                    {
                        level: "extreme",
                        type: "impossible",
                        name: "not between ``)|\\\\ @68.124 and the maximum position @68.573 at the extreme level",
                        position: 67.62297774122518,
                    },
                ],
            },
            {
                position: 68.22505616936851,
                events: [
                    {
                        level: "medium",
                        type: "EDA",
                        name: "12.5/21",
                        position: 67.66964646292375,
                    },
                    {
                        level: "high",
                        type: "SIZE",
                        name: "L|SS",
                        position: 68.5725082211804,
                    },
                    {
                        level: "veryHigh",
                        type: "SIZE",
                        name: "L|SS",
                        position: 68.5725082211804,
                    },
                    {
                        level: "extreme",
                        type: "EDA",
                        name: "140.5/233",
                        position: 68.55254657128121,
                    },
                    {
                        level: "insane",
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
                        level: "medium",
                        type: "EDA",
                        name: "12.5/21",
                        position: 67.66964646292375,
                    },
                    {
                        level: "high",
                        type: "SIZE",
                        name: "L|SS",
                        position: 68.5725082211804,
                    },
                    {
                        level: "veryHigh",
                        type: "SIZE",
                        name: "L|SS",
                        position: 68.5725082211804,
                    },
                    {
                        level: "extreme",
                        type: "EDA",
                        name: "140.5/233",
                        position: 68.55254657128121,
                    },
                    {
                        level: "insane",
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
                        level: "medium",
                        type: "EDA",
                        name: "12.5/21",
                        position: 67.66964646292375,
                    },
                    {
                        level: "high",
                        type: "SIZE",
                        name: "L|SS",
                        position: 68.5725082211804,
                    },
                    {
                        level: "veryHigh",
                        type: "SIZE",
                        name: "L|SS",
                        position: 68.5725082211804,
                    },
                    {
                        level: "extreme",
                        type: "EDA",
                        name: "140.5/233",
                        position: 68.55254657128121,
                    },
                    {
                        level: "insane",
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
                        level: "medium",
                        type: "EDA",
                        name: "12.5/21",
                        position: 67.66964646292375,
                    },
                    {
                        level: "high",
                        type: "SIZE",
                        name: "L|SS",
                        position: 68.5725082211804,
                    },
                    {
                        level: "veryHigh",
                        type: "SIZE",
                        name: "L|SS",
                        position: 68.5725082211804,
                    },
                    {
                        level: "extreme",
                        type: "EDA",
                        name: "140.5/233",
                        position: 68.55254657128121,
                    },
                    {
                        level: "insane",
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
                        level: "medium",
                        type: "EDA",
                        name: "12.5/21",
                        position: 67.66964646292375,
                    },
                    {
                        level: "high",
                        type: "SIZE",
                        name: "L|SS",
                        position: 68.5725082211804,
                    },
                    {
                        level: "veryHigh",
                        type: "SIZE",
                        name: "L|SS",
                        position: 68.5725082211804,
                    },
                    {
                        level: "extreme",
                        type: "SIZE",
                        name: "L|SS",
                        position: 68.5725082211804,
                    },
                    {
                        level: "insane",
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
                        level: "medium",
                        type: "EDA",
                        name: "12.5/21",
                        position: 67.66964646292375,
                    },
                    {
                        level: "high",
                        type: "SIZE",
                        name: "L|SS",
                        position: 68.5725082211804,
                    },
                    {
                        level: "veryHigh",
                        type: "SIZE",
                        name: "L|SS",
                        position: 68.5725082211804,
                    },
                    {
                        level: "extreme",
                        type: "SIZE",
                        name: "L|SS",
                        position: 68.5725082211804,
                    },
                    {
                        level: "insane",
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
                        level: "medium",
                        type: "EDA",
                        name: "12.5/21",
                        position: 67.66964646292375,
                    },
                    {
                        level: "high",
                        type: "SIZE",
                        name: "L|SS",
                        position: 68.5725082211804,
                    },
                    {
                        level: "veryHigh",
                        type: "SIZE",
                        name: "L|SS",
                        position: 68.5725082211804,
                    },
                    {
                        level: "extreme",
                        type: "SIZE",
                        name: "L|SS",
                        position: 68.5725082211804,
                    },
                    {
                        level: "insane",
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
                        level: "medium",
                        type: "EDA",
                        name: "12.5/21",
                        position: 67.66964646292375,
                    },
                    {
                        level: "high",
                        type: "SIZE",
                        name: "L|SS",
                        position: 68.5725082211804,
                    },
                    {
                        level: "veryHigh",
                        type: "SIZE",
                        name: "L|SS",
                        position: 68.5725082211804,
                    },
                    {
                        level: "extreme",
                        type: "SIZE",
                        name: "L|SS",
                        position: 68.5725082211804,
                    },
                    {
                        level: "insane",
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
                        level: "medium",
                        type: "SIZE",
                        name: "L|SS",
                        position: 68.5725082211804,
                    },
                    {
                        level: "high",
                        type: "SIZE",
                        name: "L|SS",
                        position: 68.5725082211804,
                    },
                    {
                        level: "veryHigh",
                        type: "EDA",
                        name: "34.5/58",
                        position: 67.62297774122518,
                    },
                    {
                        level: "extreme",
                        type: "impossible",
                        name: "not between ``)|\\\\ @68.124 and the maximum position @68.573 at the extreme level",
                        position: 67.62297774122518,
                    },
                ],
            },
            {
                position: 68.22505616936851,
                events: [
                    {
                        level: "medium",
                        type: "SIZE",
                        name: "L|SS",
                        position: 68.5725082211804,
                    },
                    {
                        level: "high",
                        type: "SIZE",
                        name: "L|SS",
                        position: 68.5725082211804,
                    },
                    {
                        level: "veryHigh",
                        type: "SIZE",
                        name: "L|SS",
                        position: 68.5725082211804,
                    },
                    {
                        level: "extreme",
                        type: "EDA",
                        name: "140.5/233",
                        position: 68.55254657128121,
                    },
                    {
                        level: "insane",
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
                        level: "medium",
                        type: "SIZE",
                        name: "L|SS",
                        position: 68.5725082211804,
                    },
                    {
                        level: "high",
                        type: "SIZE",
                        name: "L|SS",
                        position: 68.5725082211804,
                    },
                    {
                        level: "veryHigh",
                        type: "SIZE",
                        name: "L|SS",
                        position: 68.5725082211804,
                    },
                    {
                        level: "extreme",
                        type: "EDA",
                        name: "140.5/233",
                        position: 68.55254657128121,
                    },
                    {
                        level: "insane",
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
                        level: "medium",
                        type: "SIZE",
                        name: "L|SS",
                        position: 68.5725082211804,
                    },
                    {
                        level: "high",
                        type: "SIZE",
                        name: "L|SS",
                        position: 68.5725082211804,
                    },
                    {
                        level: "veryHigh",
                        type: "SIZE",
                        name: "L|SS",
                        position: 68.5725082211804,
                    },
                    {
                        level: "extreme",
                        type: "EDA",
                        name: "140.5/233",
                        position: 68.55254657128121,
                    },
                    {
                        level: "insane",
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
                        level: "medium",
                        type: "SIZE",
                        name: "L|SS",
                        position: 68.5725082211804,
                    },
                    {
                        level: "high",
                        type: "SIZE",
                        name: "L|SS",
                        position: 68.5725082211804,
                    },
                    {
                        level: "veryHigh",
                        type: "SIZE",
                        name: "L|SS",
                        position: 68.5725082211804,
                    },
                    {
                        level: "extreme",
                        type: "EDA",
                        name: "140.5/233",
                        position: 68.55254657128121,
                    },
                    {
                        level: "insane",
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
                        level: "medium",
                        type: "SIZE",
                        name: "L|SS",
                        position: 68.5725082211804,
                    },
                    {
                        level: "high",
                        type: "SIZE",
                        name: "L|SS",
                        position: 68.5725082211804,
                    },
                    {
                        level: "veryHigh",
                        type: "SIZE",
                        name: "L|SS",
                        position: 68.5725082211804,
                    },
                    {
                        level: "extreme",
                        type: "SIZE",
                        name: "L|SS",
                        position: 68.5725082211804,
                    },
                    {
                        level: "insane",
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
                        level: "medium",
                        type: "SIZE",
                        name: "L|SS",
                        position: 68.5725082211804,
                    },
                    {
                        level: "high",
                        type: "SIZE",
                        name: "L|SS",
                        position: 68.5725082211804,
                    },
                    {
                        level: "veryHigh",
                        type: "SIZE",
                        name: "L|SS",
                        position: 68.5725082211804,
                    },
                    {
                        level: "extreme",
                        type: "SIZE",
                        name: "L|SS",
                        position: 68.5725082211804,
                    },
                    {
                        level: "insane",
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
                        level: "medium",
                        type: "SIZE",
                        name: "L|SS",
                        position: 68.5725082211804,
                    },
                    {
                        level: "high",
                        type: "SIZE",
                        name: "L|SS",
                        position: 68.5725082211804,
                    },
                    {
                        level: "veryHigh",
                        type: "SIZE",
                        name: "L|SS",
                        position: 68.5725082211804,
                    },
                    {
                        level: "extreme",
                        type: "SIZE",
                        name: "L|SS",
                        position: 68.5725082211804,
                    },
                    {
                        level: "insane",
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
                        level: "medium",
                        type: "SIZE",
                        name: "L|SS",
                        position: 68.5725082211804,
                    },
                    {
                        level: "high",
                        type: "SIZE",
                        name: "L|SS",
                        position: 68.5725082211804,
                    },
                    {
                        level: "veryHigh",
                        type: "SIZE",
                        name: "L|SS",
                        position: 68.5725082211804,
                    },
                    {
                        level: "extreme",
                        type: "SIZE",
                        name: "L|SS",
                        position: 68.5725082211804,
                    },
                    {
                        level: "insane",
                        type: "SIZE",
                        name: "L|SS",
                        position: 68.5725082211804,
                    },
                ],
            },
        ]))
    })
})
