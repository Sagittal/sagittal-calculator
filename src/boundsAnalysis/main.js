const colors = require("colors")
const {BOUNDS} = require("./data/bounds")
const {COLORS} = require("./format/colors")
const {RANKS} = require("./data/ranks")
const {calculateBoundHistories} = require("./calculateHistories/calculateBoundHistories")
const {processHistories, HEADER_ROWS} = require("./analyzeHistories/processHistories")
const {rankSummary, rankBounds} = require("./analyzeHistories/rankSummary")

const args = process.argv.slice(2)

if (args.length) {
    const boundIndex = args[0]
    const bound = BOUNDS[boundIndex]

    const histories = calculateBoundHistories(bound)
    const processedHistories = processHistories(histories, bound, boundIndex, {summary: false})
    console.log(processedHistories)
} else {
    console.log(HEADER_ROWS)

    BOUNDS.map((bound, boundIndex) => {
        const histories = calculateBoundHistories(bound)
        const processedHistories = processHistories(histories, bound, boundIndex, {summary: true})
        console.log(processedHistories)
    })

    if (rankSummary[1] > 0) console.log(colors[COLORS[RANKS["EDA"]]](`\nFor ${rankSummary[1]} bounds (${rankBounds[1].join(", ")}), the best possible explanation for how they were set was by working up through each level they appear in, each time staying between the bounded commas of the bound, snapping only to an EDA midpoint which is close to the position it was already at, where close is defined as within a half-step of that EDA.`))
    if (rankSummary[2] > 0) console.log(colors[COLORS[RANKS["MEAN"]]](`\nFor ${rankSummary[2]} bounds (${rankBounds[2].join(", ")}), the best possible explanation for how they were set was by working up through each level they appear in, each time staying between the bounded commas of the bound, each time snapping only either to an EDA midpoint or a comma mean which is close to the position it was already at, where close is defined as within a half-step of that EDA.`))
    if (rankSummary[3] > 0) console.log(colors[COLORS[RANKS["SIZE"]]](`\nFor ${rankSummary[3]} bounds (${rankBounds[3].join(", ")}), the best possible explanation for how they were set was by working up through each level they appear in, each time staying between the bounded commas of the bound, each time snapping only either to an EDA midpoint, a comma mean, or a size category bound which is close to the position it was already at, where close is defined as within a half-step of that EDA.`))
    if (rankSummary[4] > 0) console.log(colors[COLORS[RANKS["INFERIOR_EDA"]]](`\nFor ${rankSummary[4]} bounds (${rankBounds[4].join(", ")}), the best possible explanation for how they were set was by working up through each level they appear in, each time staying between the bounded commas of the bound, each time snapping only either to an EDA midpoint, a comma mean, or a size category bound which is close to the position it was already at, where close is defined as within a half-step of that EDA, or an EDA midpoint which was further than a half-step of that EDA away.`))
    if (rankSummary[5] > 0) console.log(colors[COLORS[RANKS["INFERIOR_MEAN"]]](`\nFor ${rankSummary[5]} bounds (${rankBounds[5].join(", ")}), the best possible explanation for how they were set was by working up through each level they appear in, each time staying between the bounded commas of the bound, each time snapping only either to an EDA midpoint, a comma mean, or a size category bound which is close to the position it was already at, where close is defined as within a half-step of that EDA, or an EDA midpoint or comma mean which was further than a half-step of that EDA away.`))
    if (rankSummary[6] > 0) console.log(colors[COLORS[RANKS["INFERIOR_SIZE"]]](`\nFor ${rankSummary[6]} bounds (${rankBounds[6].join(", ")}), the best possible explanation for how they were set was by working up through each level they appear in, each time staying between the bounded commas of the bound, each time snapping only either to an EDA midpoint, a comma mean, or a size category bound which is close to the position it was already at, where close is defined as within a half-step of that EDA, or an EDA midpoint, comma mean, or size category bound which was further than a half-step of that EDA away.`))
    if (rankSummary[7] > 0) console.log(colors[COLORS[RANKS["OVERRIDE"]]](`\nFor ${rankSummary[7]} bounds (${rankBounds[7].join(", ")}), the best possible explanation for how they were set necessitated an override of a bound at a lower level, in the sense that none of the possible places it could have been at the lower level were within the bounded commas of the level.`))
    if (rankSummary[8] > 0) console.log(colors[COLORS[RANKS["IMPOSSIBLE"]]](`\nFor ${rankSummary[8]} bounds (${rankBounds[8].join(", ")}), there was no way to explain how the bound was set at all.`))
}
