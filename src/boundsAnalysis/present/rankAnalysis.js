const {COLORS} = require("./colors")
const {rankBoundIndices} = require("../analyze/ranks")

const RANK_EXPLANATIONS = [
    "by working up through each level they appear in, each time staying between the bounded commas of the bound, snapping only to an EDA midpoint which is close to the position it was already at, where close is defined as within a half-step of that EDA",
    "by working up through each level they appear in, each time staying between the bounded commas of the bound, each time snapping only either to an EDA midpoint or a comma mean which is close to the position it was already at, where close is defined as within a half-step of that EDA",
    "by working up through each level they appear in, each time staying between the bounded commas of the bound, each time snapping only either to an EDA midpoint, a comma mean, or a size category bound which is close to the position it was already at, where close is defined as within a half-step of that EDA",
    "by working up through each level they appear in, each time staying between the bounded commas of the bound, each time snapping only either to an EDA midpoint, a comma mean, or a size category bound which is close to the position it was already at, where close is defined as within a half-step of that EDA, or an EDA midpoint which was further than a half-step of that EDA away",
    "by working up through each level they appear in, each time staying between the bounded commas of the bound, each time snapping only either to an EDA midpoint, a comma mean, or a size category bound which is close to the position it was already at, where close is defined as within a half-step of that EDA, or an EDA midpoint or comma mean which was further than a half-step of that EDA away",
    "by working up through each level they appear in, each time staying between the bounded commas of the bound, each time snapping only either to an EDA midpoint, a comma mean, or a size category bound which is close to the position it was already at, where close is defined as within a half-step of that EDA, or an EDA midpoint, comma mean, or size category bound which was further than a half-step of that EDA away",
    "unfortunately one which necessitated an override of a bound at a lower level, in the sense that none of the possible places it could have been at the lower level were within the bounded commas of the level",
    "unfortunately that there was no way to explain how the bound was set at all",
]

const presentRankAnalysis = (rankCount, rankIndex) =>
    `For ${rankCount} bounds (${rankBoundIndices[rankIndex].join(", ")}), the best possible explanation for how they were set was ${RANK_EXPLANATIONS[rankIndex]}.`[COLORS[rankIndex]]

module.exports = {
    presentRankAnalysis,
}
