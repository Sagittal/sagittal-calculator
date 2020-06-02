const {DATA} = require("./data/data")
const {calculateBoundHistories} = require("./extendHistories/calculateBoundHistories")
const {processHistories, HEADER_ROW} = require("./analyzeHistories/processHistories")

const args = process.argv.slice(2)

let data
let summary
if (args.length) {
    const specificDatum = args[0]
    data = [DATA[specificDatum]]
    summary = false
} else {
    data = DATA
    summary = true
    console.log(HEADER_ROW)
}

data.map((datum, datumIndex) => {
    const histories = calculateBoundHistories(datum.bound)
    const processedHistories = processHistories(histories, datum, datumIndex, {summary})

    console.log(processedHistories)
})
