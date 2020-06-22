const cp = require("child_process")

const HEADER_LINES_COUNT = 4
const SKIP_THE_FINAL_EMPTY_LINE = 1

describe("appraiseMonzo/main", () => {
    it("runs without error", () => {
        const result = cp.execSync("npm run appraise-monzo [3,-7,2,0,1]").toString()

        const resultLines = result.split('\n')
        const answer = resultLines.slice(HEADER_LINES_COUNT, resultLines.length - SKIP_THE_FINAL_EMPTY_LINE)

        expect(answer).toEqual([
            'comma name:\t275k',
            'limit:\t11',
            'SoPF>3:\t21',
            'cents:\t10.26036403671435',
            'ratio:\t2200/2187',
            'apotome slope:\t-7.631767994281849',
        ])
    })
})
