const {DATA} = require("./data/data")
const {calculateBoundHistories} = require("./calculateHistories/calculateBoundHistories")
const {processHistories, HEADER_ROW} = require("./analyzeHistories/processHistories")
const {rankSummary} = require("./analyzeHistories/rankSummary")

const args = process.argv.slice(2)

if (args.length) {
    const datumIndex = args[0]
    const datum = DATA[datumIndex]

    const histories = calculateBoundHistories(datum.bound)
    const processedHistories = processHistories(histories, datum, datumIndex, {summary: false})
    console.log(processedHistories)
} else {
    console.log(HEADER_ROW)

    DATA.map((datum, datumIndex) => {
        const histories = calculateBoundHistories(datum.bound) // TODO: and clearly the minimum error measure is not useful unless it's minimum error up to a certain rank
        const processedHistories = processHistories(histories, datum, datumIndex, {summary: true}) // TODO: I am curious to like, print out if any events ever have ranks 4, 5, and 6 or if I totally invented those
        console.log(processedHistories)
    })

    console.log(`\nFor ${rankSummary[1]} bounds, the best possible explanation for how they were set was by working up through each level they appear in, each time staying between the neighbor commas of the bound, snapping only to an EDA midpoint which is close to the position it was already at, where close is defined as within a half-step of that EDA.`)
    console.log(`\nFor ${rankSummary[2]} bounds, the best possible explanation for how they were set was by working up through each level they appear in, each time staying between the neighbor commas of the bound, each time snapping only either to an EDA midpoint or a comma mean which is close to the position it was already at, where close is defined as within a half-step of that EDA.`)
    console.log(`\nFor ${rankSummary[3]} bounds, the best possible explanation for how they were set was by working up through each level they appear in, each time staying between the neighbor commas of the bound, each time snapping only either to an EDA midpoint, a comma mean, or a size category bound which is close to the position it was already at, where close is defined as within a half-step of that EDA.`)
    console.log(`\nFor ${rankSummary[4]} bounds, the best possible explanation for how they were set was by working up through each level they appear in, each time staying between the neighbor commas of the bound, each time snapping only either to an EDA midpoint, a comma mean, or a size category bound which is close to the position it was already at, where close is defined as within a half-step of that EDA, or an EDA midpoint which was further than a half-step of that EDA away.`)
    console.log(`\nFor ${rankSummary[5]} bounds, the best possible explanation for how they were set was by working up through each level they appear in, each time staying between the neighbor commas of the bound, each time snapping only either to an EDA midpoint, a comma mean, or a size category bound which is close to the position it was already at, where close is defined as within a half-step of that EDA, or an EDA midpoint or comma mean which was further than a half-step of that EDA away.`)
    console.log(`\nFor ${rankSummary[6]} bounds, the best possible explanation for how they were set was by working up through each level they appear in, each time staying between the neighbor commas of the bound, each time snapping only either to an EDA midpoint, a comma mean, or a size category bound which is close to the position it was already at, where close is defined as within a half-step of that EDA, or an EDA midpoint, comma mean, or size category bound which was further than a half-step of that EDA away.`)
    console.log(`\nFor ${rankSummary[7]} bounds, the best possible explanation for how they were set necessitated an override of a bound at a lower level, in the sense that none of the possible places it could have been at the lower level were within the neighbor commas of the level.`)
    console.log(`\nFor ${rankSummary[8]} bounds, there was no way to explain how the bound was set at all.`)
}
