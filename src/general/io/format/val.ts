import {Val} from "../../math"
import {spaceMonzoOrValExponent} from "./spaceMonzoOrValExponent"
import {Formatted} from "./types"

const formatVal = (val: Val): Formatted<Val> => {
    const contents = val.map(spaceMonzoOrValExponent).join(" ")

    return `⟨ ${contents} ]` as Formatted<Val>
}

export {
    formatVal,
}
