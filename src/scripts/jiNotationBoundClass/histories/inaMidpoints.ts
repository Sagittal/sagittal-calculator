import {APOTOME, isScamonGreater, Maybe, Name, Quotient, Scamon} from "@sagittal/general"
import {
    HALF_APOTOME,
    InaMidpoint,
    JiNotationLevelId,
    JI_NOTATION_LEVELS,
    JI_NOTATION_LEVEL_EDAS,
} from "@sagittal/system"

const computeInaMidpoints = (jiNotationLevel: JiNotationLevelId): InaMidpoint[] => {
    const eda = JI_NOTATION_LEVEL_EDAS[JI_NOTATION_LEVELS.indexOf(jiNotationLevel)]

    const inaMidpoints = [...Array(eda).keys()].map((degree: number): Maybe<InaMidpoint> => {
        const midpoint = degree + 0.5
        const pitch = {
            monzo: APOTOME.monzo,
            scaler: [midpoint, eda as number] as Quotient,
        } as Scamon<{rational: false}>

        if (isScamonGreater(pitch, HALF_APOTOME)) {
            return undefined
        }

        const name: Name<InaMidpoint> = `${midpoint}°${eda}` as Name<InaMidpoint>

        return {name, pitch}
    })

    return inaMidpoints.filter((inaMidpoint: Maybe<InaMidpoint>): boolean => !!inaMidpoint) as InaMidpoint[]
}

export {
    computeInaMidpoints,
}
