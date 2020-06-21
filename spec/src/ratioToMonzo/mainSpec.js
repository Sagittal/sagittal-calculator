const cp = require("child_process")

const LAST_LINE_IS_EMPTY_BUT_ANSWER_IS_JUST_BEFORE_THAT = 2

describe("monzoToRatio/main", () => {
    it("runs without error", () => {
        const result = cp.execSync("npm run ratio-to-monzo 8/9").toString()

        const resultLines = result.split('\n')
        const answer = resultLines[resultLines.length - LAST_LINE_IS_EMPTY_BUT_ANSWER_IS_JUST_BEFORE_THAT]

        expect(answer).toBe('[ 3, -2 ]')
    })
})
