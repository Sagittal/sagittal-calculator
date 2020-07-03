const ZIPF_EXPONENT = -1    // applied to the ranks before calculating sum-of-squares, in accordance with the data, to capture how the ranks toward the top of the list are much more important to match
const CUT_OFF_POINT = 80    // the point where ratios no longer have >0.05% of votes, and drops from 19 votes suddenly to 16

module.exports = {
    ZIPF_EXPONENT,
    CUT_OFF_POINT
}
