import {Count, deepEquals, increment, isUndefined, stringify} from "../../../general"
import {CORE_GLYPHS} from "./glyphs"
import {Aim, CoreName, Element, Symbol} from "./types"

const apotomeShift = (symbol: Symbol): Symbol => {
    if (symbol.core?.aim === Aim.DOWN) {
        throw new Error(`Do not shift symbols aiming down; tried to shift ${stringify(symbol)}`)
    }

    if (isUndefined(symbol.core) || deepEquals(symbol.core, CORE_GLYPHS[CoreName.BARE_SHAFT_UP])) {
        return {...symbol, core: CORE_GLYPHS[CoreName.DOUBLE_BARB_DOUBLE_UP]}
    }

    const maybeAddShafts = (): void => {
        if (shaftCount > 0) {
            for (let i = 0; i < shaftCount + 2; i = i + 1) {
                apotomeShiftedElements.push(Element.SHAFT)
            }
            shaftCount = 0 as Count
        }
    }

    const apotomeShiftedElements = [] as Element[]
    let shaftCount = 0 as Count
    symbol.core.elements.forEach((element: Element): void => {
        if (element === Element.SHAFT) {
            shaftCount = increment(shaftCount)
        } else {
            maybeAddShafts()
            apotomeShiftedElements.push(element)
        }
    })

    maybeAddShafts()

    return {
        ...symbol,
        core: {
            ...symbol.core,
            elements: apotomeShiftedElements,
        },
    }
}

export {
    apotomeShift,
}
