import { formatInteger, formatNumber, Io } from "../../../general"
import { FindCommasOptions } from "../types"

const formatFindCommasOptions = (
    { max23FreeSopfr, max23FreeCopfr, maxPrimeLimit, maxN2D3P9, minCents, maxCents, maxAte, maxAas }: FindCommasOptions
): Io => {
    return [
        "",
        `cents range:       \t${formatNumber(minCents)} - ${formatNumber(maxCents)}`,
        `max ATE:           \t${formatInteger(maxAte)}`,
        `max AAS:           \t${formatNumber(maxAas)}`,
        `max N2D3P9:        \t${formatNumber(maxN2D3P9)}`,
        `max 2,3-free sopfr:\t${formatInteger(max23FreeSopfr)}`,
        `max 2,3-free copfr:\t${formatInteger(max23FreeCopfr)}`,
        `max prime limit:   \t${formatInteger(maxPrimeLimit)}`,
        "",
    ].join("\n") as Io
}

export {
    formatFindCommasOptions,
}
