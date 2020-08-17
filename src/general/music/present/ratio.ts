import { Ratio } from "../../math"

const presentRatio = (ratio: Ratio, { directed }: { directed: boolean } = { directed: true }): string => {
    const first = !directed && ratio[ 1 ] < ratio[ 0 ] ? ratio[ 1 ] : ratio[ 0 ]
    const vinculum = directed ? "/" : ":"
    const second = !directed && ratio[ 1 ] < ratio[ 0 ] ? ratio[ 0 ] : ratio[ 1 ]

    return `${first}${vinculum}${second}`
}

export {
    presentRatio,
}
