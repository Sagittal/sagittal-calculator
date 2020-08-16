import { Ratio } from "../../math"

const presentRatio = (ratio: Ratio, { directed }: { directed: boolean } = { directed: true }): string =>
    `${ratio[ 0 ]}${directed ? "/" : ":"}${ratio[ 1 ]}`

export {
    presentRatio,
}
