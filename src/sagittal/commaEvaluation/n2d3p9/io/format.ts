import { Formatted, round } from "../../../../general"
import { DEFAULT_N2D3P9_PRECISION } from "../constants"
import { N2D3P9 } from "../types"

const formatN2D3P9 = (n2d3p9: N2D3P9): Formatted<N2D3P9> => {
    return `${round(n2d3p9, DEFAULT_N2D3P9_PRECISION)}` as Formatted<N2D3P9>
}

export {
    formatN2D3P9,
}
