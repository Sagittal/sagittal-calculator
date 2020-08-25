import { Ratio } from "../math"

const parseRatio = (ratioString: string): Ratio => {
    const ratio = ratioString.split(/[\/:]/).map(n => parseInt(n))

    if (ratioString.includes(":")) {
        ratio.reverse()
    }

    return ratio as Ratio
}

export {
    parseRatio,
}
