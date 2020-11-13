import {
    APOTOME,
    Decimal,
    deepEquals,
    invertScamon,
    isUndefined,
    Maybe,
    Multiplier,
    multiplyScamon,
    Scamon, stringify,
    sumRationalScamons,
    UNISON,
} from "../../general"
import {
    getCommaClass,
    getSymbolClass,
    Section,
    SECTION_N1T,
    SECTION_N2A,
    SECTION_N2T,
    SECTION_P1T,
    SECTION_P2A,
    SECTION_P2T,
    SymbolClass,
    SymbolClassId,
    SYMBOL_CLASSES,
} from "../notation"
import {Accidental, Compatible} from "./flavor"
import {computeApotomeComplement, computeSagittalFromSymbolClass, Sagittal, Shafts} from "./sagittal"

// TODO: perhaps this whole module should become a directory, cuz this turned out to just be so complex...
const computeSymbolClassIdAndSectionFromSagittal = (sagittal: Maybe<Sagittal>): [SymbolClassId, Section] => {
    const section = {negated: false, shifted: false, mirrored: false}
    let inputSagittal = sagittal

    if (isUndefined(inputSagittal)) return [SymbolClassId.NULL, section]

    if (inputSagittal.shafts === Shafts.TRIPLE) {
        inputSagittal.shafts = Shafts.SINGLE
        section.shifted = true
    } else if (inputSagittal.shafts === Shafts.EX) {
        inputSagittal.shafts = Shafts.DOUBLE
        section.shifted = true
    }

    if (inputSagittal.down) {
        delete inputSagittal.down
        section.negated = true
    }

    const symbolClassEntries = Object.entries(SYMBOL_CLASSES) as Array<[SymbolClassId, SymbolClass]>
    let symbolClassEntry = symbolClassEntries.find(([_, symbolClass]: [SymbolClassId, SymbolClass]): boolean => {
        const sagittal = computeSagittalFromSymbolClass(symbolClass)
        return deepEquals(inputSagittal, sagittal)
    })

    if (isUndefined(symbolClassEntry)) {
        section.mirrored = true
        inputSagittal = computeApotomeComplement(inputSagittal)

        symbolClassEntry = symbolClassEntries.find(([_, symbolClass]: [SymbolClassId, SymbolClass]): boolean => {
            const thisSagittal = computeSagittalFromSymbolClass(symbolClass)
            return deepEquals(inputSagittal, thisSagittal)
        })
    }

    if (isUndefined(symbolClassEntry)) {
        throw new Error(`Could not find symbol class ID and section for sagittal ${stringify(sagittal)}`)
    }

    const [symbolClassId, _] = symbolClassEntry

    return [symbolClassId, section]
}

const APOTOME_DOWN =
    multiplyScamon(APOTOME, -1 as Decimal<{integer: true}> & Multiplier) as Scamon<{rational: true}>
const DOUBLE_APOTOME =
    multiplyScamon(APOTOME, 2 as Decimal<{integer: true}> & Multiplier) as Scamon<{rational: true}>
const DOUBLE_APOTOME_DOWN =
    multiplyScamon(APOTOME, -2 as Decimal<{integer: true}> & Multiplier) as Scamon<{rational: true}>

const COMPATIBLE_TO_PITCH_MAP: Record<Compatible, Scamon<{rational: true}>> = {
    [Compatible.STEIN_SEMISHARP]: {monzo: [-5, 1, 0, 0, 1]} as Scamon<{rational: true}>,
    [Compatible.STEIN_SEMIFLAT]: {monzo: [5, -1, 0, 0, -1]} as Scamon<{rational: true}>,
    [Compatible.STEIN_SESQUISHARP]: {monzo: [-16, 8, 0, 0, 1]} as Scamon<{rational: true}>,
    [Compatible.ZIMMERMANN_SESQUIFLAT]: {monzo: [16, -8, 0, 0, -1]} as Scamon<{rational: true}>,
    [Compatible.WILSON_PLUS]: {monzo: [-4, 4, -1]} as Scamon<{rational: true}>,
    [Compatible.WILSON_MINUS]: {monzo: [4, -4, 1]} as Scamon<{rational: true}>,
    [Compatible.NATURAL]: UNISON,
    [Compatible.SHARP]: APOTOME,
    [Compatible.FLAT]: APOTOME_DOWN,
    [Compatible.DOUBLE_SHARP]: DOUBLE_APOTOME,
    [Compatible.DOUBLE_FLAT]: DOUBLE_APOTOME_DOWN,
}

const computeJiPitchFromAccidental = (accidental: Maybe<Accidental>): Scamon<{rational: true}> => {
    if (isUndefined(accidental)) return UNISON

    const {compatible, ...sagittal} = accidental

    const [symbolClassId, section] = computeSymbolClassIdAndSectionFromSagittal(sagittal)

    const pitchAlterations = [] as Array<Scamon<{rational: true}>>

    if (deepEquals(section, SECTION_P1T) || deepEquals(section, SECTION_P2A)) {
        pitchAlterations.push(APOTOME)
    } else if (deepEquals(section, SECTION_P2T)) {
        pitchAlterations.push(DOUBLE_APOTOME)
    } else if (deepEquals(section, SECTION_N1T) || deepEquals(section, SECTION_N2A)) {
        pitchAlterations.push(APOTOME_DOWN)
    } else if (deepEquals(section, SECTION_N2T)) {
        pitchAlterations.push(DOUBLE_APOTOME_DOWN)
    }

    const symbolClass = getSymbolClass(symbolClassId)
    const commaClass = getCommaClass(symbolClass.commaClassId)
    const pitch = commaClass.pitch
    const pitchToPush = section.mirrored ?
        section.negated ? pitch : invertScamon(pitch) as Scamon<{rational: true}> :
        section.negated ? invertScamon(pitch) as Scamon<{rational: true}> : pitch
    pitchAlterations.push(pitchToPush)

    if (!isUndefined(compatible)) {
        pitchAlterations.push(COMPATIBLE_TO_PITCH_MAP[compatible])
    }

    return sumRationalScamons(...pitchAlterations)
}

export {
    computeJiPitchFromAccidental,
    computeSymbolClassIdAndSectionFromSagittal,
}
