const {DATA} = require("./data/data")
const {calculateBoundHistories} = require("./calculateHistories/calculateBoundHistories")
const {processHistories, HEADER_ROW} = require("./analyzeHistories/processHistories")

const args = process.argv.slice(2)

if (args.length) {
    const datumIndex = args[0]
    const datum = DATA[datumIndex]

    const histories = calculateBoundHistories(datum.bound)
    const processedHistories = processHistories(histories, datum, datumIndex, {summary: false})
    console.log(processedHistories)
} else {
    console.log(HEADER_ROW)

    let totalPossible = 0
    DATA.map((datum, datumIndex) => {
        const histories = calculateBoundHistories(datum.bound)
        const processedHistories = processHistories(histories, datum, datumIndex, {summary: true})
        console.log(processedHistories)

        if (processedHistories.includes(true)) totalPossible += 1
    })

    console.log(`\nFor ${totalPossible} out of 150 bounds, it is possible that they were set by working up through each level they appear in, each time changing no further than by snapping to any of the three irrational bound types between the commas they bound at that level.`)
}
