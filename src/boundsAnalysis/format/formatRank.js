const FORMATTED_RANK_NAMES = [
    "initial",
    "EDA midpoint",
    "comma mean",
    "size category bound",
    "not-nearest EDA midpoint",
    "not-nearest comma mean",
    "not-nearest size category bound",
    "override",
    "impossible",
]

const formatRank = rank => FORMATTED_RANK_NAMES[rank]

module.exports = {
    formatRank,
}
