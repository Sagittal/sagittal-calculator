const cp = require("child_process")

const HEADER_LINES_COUNT = 4
const SKIP_THE_FINAL_EMPTY_LINE = 1

describe("appraiseMonzo/main", () => {
    it("runs without error", () => {
        const result = cp.execSync("npm run appraise-monzo [3,-2,-1,1]").toString()

        const resultLines = result.split('\n')
        const answer = resultLines.slice(HEADER_LINES_COUNT, resultLines.length - SKIP_THE_FINAL_EMPTY_LINE)

        expect(answer).toEqual([
            'ratio: 56/45',
            'SoPF>3: 12',
            'apotome slope: -25.31191621496006',
        ])
    })
})
