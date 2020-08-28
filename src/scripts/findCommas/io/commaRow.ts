import { Comma, formatMonzo, formatRatio, IO, Row } from "../../../general"

// TODO: could row be parameterized to indicate what it is a row of?
const computeCommaRow = (comma: Comma): Row => {
    const {
        name,
        limit,
        fiveRoughSopfr,
        cents,
        monzo,
        ratio,
        apotomeSlope,
        n2d3p9,
    } = comma

    return [
        name,
        limit.toString(), // TODO: really we should just have formatters for each of these (also boundRow needs them)
        fiveRoughSopfr.toString(),
        cents.toString(),
        formatMonzo(monzo),
        formatRatio(ratio),
        apotomeSlope.toString(),
        n2d3p9.toString(),
    ] as Row
}

export {
    computeCommaRow,
}
