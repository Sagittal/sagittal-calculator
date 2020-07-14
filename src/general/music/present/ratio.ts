import { Ratio } from "../../math"

const presentRatio = (ratio: Ratio): string =>
    `${ratio[ 0 ]}/${ratio[ 1 ]}`

export {
    presentRatio,
}
