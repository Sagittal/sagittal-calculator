import { Ratio } from "../../types"

const presentRatio = (ratio: Ratio): string => {
    return `${ratio[ 0 ]}/${ratio[ 1 ]}`
}

export {
    presentRatio,
}
