const {computeLevelRank} = require("../../../../src/boundsAnalysis/analyze/levelRank")

describe("computeLevelRank", () => {
    const index = 2
    const previousPosition = 7.24369938035
    const history = [{}, {position: previousPosition}, {}]

    it("works for EDA midpoints events", () => {
        const event = {type: "EDA", level: "VERY_HIGH"}

        const result = computeLevelRank(event, index, history)

        expect(result).toBe(1)
    })

    it("works for comma mean events events", () => {
        const event = {type: "MEAN"}

        const result = computeLevelRank(event, index, history)

        expect(result).toBe(2)
    })

    it("works for size category bound events", () => {
        const event = {type: "SIZE"}

        const result = computeLevelRank(event, index, history)

        expect(result).toBe(3)
    })

    it("works for not-nearest EDA midpoints", () => {
        const event = {type: "EDA", level: "HIGH", position: 8.465904706425356, name: "3.5/47" } // 1.19662459005 away
        // The other, closer, EDA event between |( and ~| at the HIGH level would be {type: "EDA", level: "HIGH", position: 6.047074790303825, name: "2.5/47" }, and it is 1.22220532608 away, slightly further;
        // this is only one of two places where this ever happens, the other being between |) and )|), also at the HIGH level, where both 11.5/47 and 12.5/47 fall between the commas

        const result = computeLevelRank(event, index, history)

        expect(result).toBe(4)
    })

    it("gives the second-lowest rank to override events", () => {
        const event = {type: "OVERRIDE"}

        const result = computeLevelRank(event, index, history)

        expect(result).toBe(5)
    })

    it("gives the lowest rank to impossible events", () => {
        const event = {type: "IMPOSSIBLE"}

        const result = computeLevelRank(event, index, history)

        expect(result).toBe(6)
    })
})
