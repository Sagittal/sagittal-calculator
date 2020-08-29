import { Ratio } from "../math"
import { Formatted } from "./types"

const parseRatio = (ratioText: Formatted<Ratio>): Ratio => {
    const ratio = ratioText.split(/[\/:]/).map(n => parseInt(n))

    if (ratioText.includes(":")) {
        ratio.reverse()
    }

    return ratio as Ratio
}

export {
    parseRatio,
}
