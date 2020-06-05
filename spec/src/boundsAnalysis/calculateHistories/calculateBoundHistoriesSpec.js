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
                rank: 8,
                events: [
                    {
                        level: "medium",
                        type: "EDA",
                        name: "1.5/21",
                        position: 8.120357575550852,
                        rank: 1,
                    },
                    {
                        level: "veryHigh",
                        type: "impossible",
                        name: "not between ~| @8.7296 and )|( @9.6880 at the veryHigh level",
                        position: 8.120357575550852,
                        rank: 8,
                    },
                ],
            },
            {
                position: 8.820388401029373,
                rank: 8,
                events:  [
                    {
                        level: "medium",
                        type: "override",
                        name: "override",
                        position: 9.5,
                        rank: 7
                    },
                    {
                        level: "veryHigh",
                        type: "EDA",
                        name: "4.5/58",
                        position: 8.820388401029373,
                        rank: 1
                    },
                    {
                        level: "extreme",
                        type: "impossible",
                        name: "not between ,)|( @9.1818 and )|( @9.6880 at the extreme level",
                        position: 8.820388401029373,
                        rank: 8
                    }
                ],
            },
            {
                position: 7.72288142310195,
                rank: 8,
                events: [
                    {
                        level: "medium",
                        type: "MEAN",
                        name: "|( )|(",
                        position: 7.72288142310195,
                        rank: 2,
                    },
                    {
                        level: "veryHigh",
                        type: "impossible",
                        name: "not between ~| @8.7296 and )|( @9.6880 at the veryHigh level",
                        position: 7.72288142310195,
                        rank: 8,
                    },
                ],
            },
            {
                position: 9.514410378220525,
                rank: 7,
                events: [
                    {
                        level: "medium",
                        type: "override",
                        name: "override",
                        position: 9.5, // TODO: so in analyze step, you should have a function which looks though all the histories and finds the one whose maximum rank is the minimum, and then bring special attention to it as the best history
                        rank: 7,
                    },
                    {
                        level: "veryHigh",
                        type: "MEAN",
                        name: "~| )|(",
                        position: 9.208778600061725,
                        rank: 2,
                    },
                    {
                        level: "extreme",
                        type: "EDA",
                        name: "19.5/233",
                        position: 9.514410378220525,
                        rank: 4,
                    },
                ],
            },
            {
                position: 9.434865916310185,
                rank: 7,
                events: [
                    {
                        level: "medium",
                        type: "override",
                        name: "override",
                        position: 9.5,
                        rank: 7,
                    },
                    {
                        level: "veryHigh",
                        type: "MEAN",
                        name: "~| )|(",
                        position: 9.208778600061725,
                        rank: 2,
                    },
                    {
                        level: "extreme",
                        type: "MEAN",
                        name: ",)|( )|(",
                        position: 9.434865916310185,
                        rank: 2,
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
                rank: 8,
                events: [
                    {
                        level: "medium",
                        type: "EDA",
                        name: "12.5/21",
                        position: 67.66964646292375,
                        rank: 1,
                    },
                    {
                        level: "high",
                        type: "SIZE",
                        name: "L|SS", // TODO: also remember to change the bound for the half-apotome mirror of the L|SS size category bound!
                        position: 68.5725082211804,
                        rank: 3, // TODO: keep an eye out for this one, that it still gets chosen as the most popular one
                    },
                    {
                        level: "veryHigh",
                        type: "EDA",
                        name: "34.5/58",
                        position: 67.62297774122518,
                        rank: 1,
                    },
                    {
                        level: "extreme",
                        type: "impossible",
                        name: "not between ``)|\\\\ @68.124 and the maximum position @68.573 at the extreme level",
                        position: 67.62297774122518,
                        rank: 8,
                    },
                ],
            },
            {
                position: 68.22505616936851,
                rank: 4,
                events: [
                    {
                        level: "medium",
                        type: "EDA",
                        name: "12.5/21",
                        position: 67.66964646292375,
                        rank: 1,
                    },
                    {
                        level: "high",
                        type: "SIZE",
                        name: "L|SS",
                        position: 68.5725082211804,
                        rank: 3,
                    },
                    {
                        level: "veryHigh",
                        type: "SIZE",
                        name: "L|SS",
                        position: 68.5725082211804,
                        rank: 3,
                    },
                    {
                        level: "extreme",
                        type: "EDA",
                        name: "140.5/233",
                        position: 68.55254657128121,
                        rank: 1,
                    },
                    {
                        level: "insane",
                        type: "EDA",
                        name: "485.5/809",
                        position: 68.22505616936851,
                        rank: 4,
                    },
                ],
            },
            {
                position: 68.36558151678226,
                rank: 4,
                events: [
                    {
                        level: "medium",
                        type: "EDA",
                        name: "12.5/21",
                        position: 67.66964646292375,
                        rank: 1,
                    },
                    {
                        level: "high",
                        type: "SIZE",
                        name: "L|SS",
                        position: 68.5725082211804,
                        rank: 3, // TODO: maybe you'll need logic to say that if the final bound from the beginning matches exactly one of these, then don't even bother calculating anything, just assume that's it ?
                    },
                    {
                        level: "veryHigh",
                        type: "SIZE",
                        name: "L|SS",
                        position: 68.5725082211804,
                        rank: 3,
                    },
                    {
                        level: "extreme",
                        type: "EDA",
                        name: "140.5/233",
                        position: 68.55254657128121,
                        rank: 1,
                    },
                    {
                        level: "insane",
                        type: "EDA",
                        name: "486.5/809",
                        position: 68.36558151678226,
                        rank: 4,
                    },
                ],
            },
            {
                position: 68.50610686419598,
                rank: 3,
                events: [
                    {
                        level: "medium",
                        type: "EDA",
                        name: "12.5/21",
                        position: 67.66964646292375,
                        rank: 1,
                    },
                    {
                        level: "high",
                        type: "SIZE",
                        name: "L|SS",
                        position: 68.5725082211804,
                        rank: 3,
                    },
                    {
                        level: "veryHigh",
                        type: "SIZE",
                        name: "L|SS",
                        position: 68.5725082211804,
                        rank: 3,
                    },
                    {
                        level: "extreme",
                        type: "EDA",
                        name: "140.5/233",
                        position: 68.55254657128121,
                        rank: 1,
                    },
                    {
                        level: "insane",
                        type: "EDA",
                        name: "487.5/809",
                        position: 68.50610686419598,
                        rank: 1,
                    },
                ],
            },
            {
                position: 68.5725082211804,
                rank: 3,
                events: [
                    {
                        level: "medium",
                        type: "EDA",
                        name: "12.5/21",
                        position: 67.66964646292375,
                        rank: 1,
                    },
                    {
                        level: "high",
                        type: "SIZE",
                        name: "L|SS",
                        position: 68.5725082211804,
                        rank: 3,
                    },
                    {
                        level: "veryHigh",
                        type: "SIZE",
                        name: "L|SS",
                        position: 68.5725082211804,
                        rank: 3,
                    },
                    {
                        level: "extreme",
                        type: "EDA",
                        name: "140.5/233",
                        position: 68.55254657128121,
                        rank: 1,
                    },
                    {
                        level: "insane",
                        type: "SIZE",
                        name: "L|SS",
                        position: 68.5725082211804,
                        rank: 3,
                    },
                ],
            },
            {
                position: 68.22505616936851,
                rank: 4,
                events: [
                    {
                        level: "medium",
                        type: "EDA",
                        name: "12.5/21",
                        position: 67.66964646292375,
                        rank: 1,
                    },
                    {
                        level: "high",
                        type: "SIZE",
                        name: "L|SS",
                        position: 68.5725082211804,
                        rank: 3,
                    },
                    {
                        level: "veryHigh",
                        type: "SIZE",
                        name: "L|SS",
                        position: 68.5725082211804,
                        rank: 3,
                    },
                    {
                        level: "extreme",
                        type: "SIZE",
                        name: "L|SS",
                        position: 68.5725082211804,
                        rank: 3,
                    },
                    {
                        level: "insane",
                        type: "EDA",
                        name: "485.5/809",
                        position: 68.22505616936851,
                        rank: 4,
                    },
                ],
            },
            {
                position: 68.36558151678226,
                rank: 4,
                events: [
                    {
                        level: "medium",
                        type: "EDA",
                        name: "12.5/21",
                        position: 67.66964646292375,
                        rank: 1,
                    },
                    {
                        level: "high",
                        type: "SIZE",
                        name: "L|SS",
                        position: 68.5725082211804,
                        rank: 3,
                    },
                    {
                        level: "veryHigh",
                        type: "SIZE",
                        name: "L|SS",
                        position: 68.5725082211804,
                        rank: 3,
                    },
                    {
                        level: "extreme",
                        type: "SIZE",
                        name: "L|SS",
                        position: 68.5725082211804,
                        rank: 3,
                    },
                    {
                        level: "insane",
                        type: "EDA",
                        name: "486.5/809",
                        position: 68.36558151678226,
                        rank: 4,
                    },
                ],
            },
            {
                position: 68.50610686419598,
                rank: 3,
                events: [
                    {
                        level: "medium",
                        type: "EDA",
                        name: "12.5/21",
                        position: 67.66964646292375,
                        rank: 1,
                    },
                    {
                        level: "high",
                        type: "SIZE",
                        name: "L|SS",
                        position: 68.5725082211804,
                        rank: 3,
                    },
                    {
                        level: "veryHigh",
                        type: "SIZE",
                        name: "L|SS",
                        position: 68.5725082211804,
                        rank: 3,
                    },
                    {
                        level: "extreme",
                        type: "SIZE",
                        name: "L|SS",
                        position: 68.5725082211804,
                        rank: 3,
                    },
                    {
                        level: "insane",
                        type: "EDA",
                        name: "487.5/809",
                        position: 68.50610686419598,
                        rank: 1,
                    },
                ],
            },
            {
                position: 68.5725082211804,
                rank: 3,
                events: [
                    {
                        level: "medium",
                        type: "EDA",
                        name: "12.5/21",
                        position: 67.66964646292375,
                        rank: 1,
                    },
                    {
                        level: "high",
                        type: "SIZE",
                        name: "L|SS",
                        position: 68.5725082211804,
                        rank: 3,
                    },
                    {
                        level: "veryHigh",
                        type: "SIZE",
                        name: "L|SS",
                        position: 68.5725082211804,
                        rank: 3,
                    },
                    {
                        level: "extreme",
                        type: "SIZE",
                        name: "L|SS",
                        position: 68.5725082211804,
                        rank: 3,
                    },
                    {
                        level: "insane",
                        type: "SIZE",
                        name: "L|SS",
                        position: 68.5725082211804,
                        rank: 3,
                    },
                ],
            },
            {
                position: 67.62297774122518,
                rank: 8,
                events: [
                    {
                        level: "medium",
                        type: "SIZE",
                        name: "L|SS",
                        position: 68.5725082211804,
                        rank: 3,
                    },
                    {
                        level: "high",
                        type: "SIZE",
                        name: "L|SS",
                        position: 68.5725082211804,
                        rank: 3,
                    },
                    {
                        level: "veryHigh",
                        type: "EDA",
                        name: "34.5/58",
                        position: 67.62297774122518,
                        rank: 1,
                    },
                    {
                        level: "extreme",
                        type: "impossible",
                        name: "not between ``)|\\\\ @68.124 and the maximum position @68.573 at the extreme level",
                        position: 67.62297774122518,
                        rank: 8,
                    },
                ],
            },
            {
                position: 68.22505616936851,
                rank: 4,
                events: [
                    {
                        level: "medium",
                        type: "SIZE",
                        name: "L|SS",
                        position: 68.5725082211804,
                        rank: 3,
                    },
                    {
                        level: "high",
                        type: "SIZE",
                        name: "L|SS",
                        position: 68.5725082211804,
                        rank: 3,
                    },
                    {
                        level: "veryHigh",
                        type: "SIZE",
                        name: "L|SS",
                        position: 68.5725082211804,
                        rank: 3,
                    },
                    {
                        level: "extreme",
                        type: "EDA",
                        name: "140.5/233",
                        position: 68.55254657128121,
                        rank: 1,
                    },
                    {
                        level: "insane",
                        type: "EDA",
                        name: "485.5/809",
                        position: 68.22505616936851,
                        rank: 4,
                    },
                ],
            },
            {
                position: 68.36558151678226,
                rank: 4,
                events: [
                    {
                        level: "medium",
                        type: "SIZE",
                        name: "L|SS",
                        position: 68.5725082211804,
                        rank: 3,
                    },
                    {
                        level: "high",
                        type: "SIZE",
                        name: "L|SS",
                        position: 68.5725082211804,
                        rank: 3,
                    },
                    {
                        level: "veryHigh",
                        type: "SIZE",
                        name: "L|SS",
                        position: 68.5725082211804,
                        rank: 3,
                    },
                    {
                        level: "extreme",
                        type: "EDA",
                        name: "140.5/233",
                        position: 68.55254657128121,
                        rank: 1,
                    },
                    {
                        level: "insane",
                        type: "EDA",
                        name: "486.5/809",
                        position: 68.36558151678226,
                        rank: 4,
                    },
                ],
            },
            {
                position: 68.50610686419598,
                rank: 3,
                events: [
                    {
                        level: "medium",
                        type: "SIZE",
                        name: "L|SS",
                        position: 68.5725082211804,
                        rank: 3,
                    },
                    {
                        level: "high",
                        type: "SIZE",
                        name: "L|SS",
                        position: 68.5725082211804,
                        rank: 3,
                    },
                    {
                        level: "veryHigh",
                        type: "SIZE",
                        name: "L|SS",
                        position: 68.5725082211804,
                        rank: 3,
                    },
                    {
                        level: "extreme",
                        type: "EDA",
                        name: "140.5/233",
                        position: 68.55254657128121,
                        rank: 1,
                    },
                    {
                        level: "insane",
                        type: "EDA",
                        name: "487.5/809",
                        position: 68.50610686419598,
                        rank: 1,
                    },
                ],
            },
            {
                position: 68.5725082211804,
                rank: 3,
                events: [
                    {
                        level: "medium",
                        type: "SIZE",
                        name: "L|SS",
                        position: 68.5725082211804,
                        rank: 3,
                    },
                    {
                        level: "high",
                        type: "SIZE",
                        name: "L|SS",
                        position: 68.5725082211804,
                        rank: 3,
                    },
                    {
                        level: "veryHigh",
                        type: "SIZE",
                        name: "L|SS",
                        position: 68.5725082211804,
                        rank: 3,
                    },
                    {
                        level: "extreme",
                        type: "EDA",
                        name: "140.5/233",
                        position: 68.55254657128121,
                        rank: 1,
                    },
                    {
                        level: "insane",
                        type: "SIZE",
                        name: "L|SS",
                        position: 68.5725082211804,
                        rank: 3,
                    },
                ],
            },
            {
                position: 68.22505616936851,
                rank: 4,
                events: [
                    {
                        level: "medium",
                        type: "SIZE",
                        name: "L|SS",
                        position: 68.5725082211804,
                        rank: 3,
                    },
                    {
                        level: "high",
                        type: "SIZE",
                        name: "L|SS",
                        position: 68.5725082211804,
                        rank: 3,
                    },
                    {
                        level: "veryHigh",
                        type: "SIZE",
                        name: "L|SS",
                        position: 68.5725082211804,
                        rank: 3,
                    },
                    {
                        level: "extreme",
                        type: "SIZE",
                        name: "L|SS",
                        position: 68.5725082211804,
                        rank: 3,
                    },
                    {
                        level: "insane",
                        type: "EDA",
                        name: "485.5/809",
                        position: 68.22505616936851,
                        rank: 4,
                    },
                ],
            },
            {
                position: 68.36558151678226,
                rank: 4,
                events: [
                    {
                        level: "medium",
                        type: "SIZE",
                        name: "L|SS",
                        position: 68.5725082211804,
                        rank: 3,
                    },
                    {
                        level: "high",
                        type: "SIZE",
                        name: "L|SS",
                        position: 68.5725082211804,
                        rank: 3,
                    },
                    {
                        level: "veryHigh",
                        type: "SIZE",
                        name: "L|SS",
                        position: 68.5725082211804,
                        rank: 3,
                    },
                    {
                        level: "extreme",
                        type: "SIZE",
                        name: "L|SS",
                        position: 68.5725082211804,
                        rank: 3,
                    },
                    {
                        level: "insane",
                        type: "EDA",
                        name: "486.5/809",
                        position: 68.36558151678226,
                        rank: 4,
                    },
                ],
            },
            {
                position: 68.50610686419598,
                rank: 3,
                events: [
                    {
                        level: "medium",
                        type: "SIZE",
                        name: "L|SS",
                        position: 68.5725082211804,
                        rank: 3,
                    },
                    {
                        level: "high",
                        type: "SIZE",
                        name: "L|SS",
                        position: 68.5725082211804,
                        rank: 3,
                    },
                    {
                        level: "veryHigh",
                        type: "SIZE",
                        name: "L|SS",
                        position: 68.5725082211804,
                        rank: 3,
                    },
                    {
                        level: "extreme",
                        type: "SIZE",
                        name: "L|SS",
                        position: 68.5725082211804,
                        rank: 3,
                    },
                    {
                        level: "insane",
                        type: "EDA",
                        name: "487.5/809",
                        position: 68.50610686419598,
                        rank: 1,
                    },
                ],
            },
            {
                position: 68.5725082211804,
                rank: 3,
                events: [
                    {
                        level: "medium",
                        type: "SIZE",
                        name: "L|SS",
                        position: 68.5725082211804,
                        rank: 3,
                    },
                    {
                        level: "high",
                        type: "SIZE",
                        name: "L|SS",
                        position: 68.5725082211804,
                        rank: 3,
                    },
                    {
                        level: "veryHigh",
                        type: "SIZE",
                        name: "L|SS",
                        position: 68.5725082211804,
                        rank: 3,
                    },
                    {
                        level: "extreme",
                        type: "SIZE",
                        name: "L|SS",
                        position: 68.5725082211804,
                        rank: 3,
                    },
                    {
                        level: "insane",
                        type: "SIZE",
                        name: "L|SS",
                        position: 68.5725082211804,
                        rank: 3,
                    },
                ],
            },
        ]))
    })
})
