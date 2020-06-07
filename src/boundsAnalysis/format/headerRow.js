const {formatHeaderRow} = require("./formatHeaderRow")

const HEADER_ROW = "   ---   Bound Summaries   ---   \n\n\n" + formatHeaderRow([
    [
        "bound",
        "index",
    ],
    [
        "lesser",
        "mina"
    ],
    [
        "greater",
        "mina"
    ],
    [
        "  lesser",
        "  extreme",
        "  level ",
        "  symbol"
    ],
    [
        "  greater",
        "  extreme",
        "  level ",
        "  symbol"
    ],
    [
        "medium",
        "level",
        "rank",
    ],
    [
        "high",
        "level",
        "rank",
    ],
    [
        "very",
        "high",
        "level",
        "rank",
    ],
    [
        "extreme",
        "level",
        "rank",
    ],
    [
        "insane",
        "level",
        "rank",
    ],
    [
        "best",
        "history",
        "overall",
        "rank",
    ],
    [
        " actual",
        "  bound",
        "pos (¢)"
    ],
    [
        "initial",
        "  comma",
        "   mean",
        "pos (¢)"
    ],
    [
        "a.b. vs",
        " i.c.m.",
        "  error",
        "(tinas)",
    ]
])

module.exports = {
    HEADER_ROW,
}
