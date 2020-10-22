// tslint:disable max-line-length

import {CommaMean, HALF_SCALER, Id, Monzo, Name, PYTHAGOREAN_LIMMA, Scamon} from "../../../general"
import { APOTOME } from "../../constants"
import { SizeCategoryBound } from "../../ji"
import { INSANE_EDA } from "./levelEdas"
import {BoundClass, BoundType, InaMidpoint, JiNotationBoundClass, JiNotationLevel} from "./types"

const JI_NOTATION_BOUND_CLASSES: JiNotationBoundClass[] = [
    {
        id: 0 as Id<BoundClass>,
        name: "1.5°809" as Name<InaMidpoint>,
        pitch: {
            monzo: APOTOME.monzo as Monzo<{ rational: true }>,
            scaler: [1.5, INSANE_EDA],
        } as Scamon<{ rational: false }>,
        boundType: BoundType.INA_MIDPOINT,
        jiNotationLevels: [JiNotationLevel.EXTREME, JiNotationLevel.INSANE],
    },
    {
        id: 1 as Id<BoundClass>,
        name: "5.5°809" as Name<InaMidpoint>,
        pitch: {
            monzo: APOTOME.monzo as Monzo<{ rational: true }>,
            scaler: [5.5, INSANE_EDA],
        } as Scamon<{ rational: false }>,
        boundType: BoundType.INA_MIDPOINT,
        jiNotationLevels: [JiNotationLevel.EXTREME, JiNotationLevel.INSANE],
    },
    {
        id: 2 as Id<BoundClass>,
        name: "8.5°809" as Name<InaMidpoint>,
        pitch: {
            monzo: APOTOME.monzo as Monzo<{ rational: true }>,
            scaler: [8.5, INSANE_EDA],
        } as Scamon<{ rational: false }>,
        boundType: BoundType.INA_MIDPOINT,
        jiNotationLevels: [JiNotationLevel.HIGH, JiNotationLevel.ULTRA, JiNotationLevel.EXTREME, JiNotationLevel.INSANE],
    },
    {
        id: 3 as Id<BoundClass>,
        name: "12.5°809" as Name<InaMidpoint>,
        pitch: {
            monzo: APOTOME.monzo as Monzo<{ rational: true }>,
            scaler: [12.5, INSANE_EDA],
        } as Scamon<{ rational: false }>,
        boundType: BoundType.INA_MIDPOINT,
        jiNotationLevels: [JiNotationLevel.ULTRA, JiNotationLevel.EXTREME, JiNotationLevel.INSANE],
    },
    {
        id: 4 as Id<BoundClass>,
        name: "15.5°809" as Name<InaMidpoint>,
        pitch: {
            monzo: APOTOME.monzo as Monzo<{ rational: true }>,
            scaler: [15.5, INSANE_EDA],
        } as Scamon<{ rational: false }>,
        boundType: BoundType.INA_MIDPOINT,
        jiNotationLevels: [JiNotationLevel.EXTREME, JiNotationLevel.INSANE],
    },
    {
        id: 5 as Id<BoundClass>,
        name: "19.5°809" as Name<InaMidpoint>,
        pitch: {
            monzo: APOTOME.monzo as Monzo<{ rational: true }>,
            scaler: [19.5, INSANE_EDA],
        } as Scamon<{ rational: false }>,
        boundType: BoundType.INA_MIDPOINT,
        jiNotationLevels: [JiNotationLevel.MEDIUM, JiNotationLevel.ULTRA, JiNotationLevel.EXTREME, JiNotationLevel.INSANE],
    },
    {
        id: 6 as Id<BoundClass>,
        name: "22.5°809" as Name<InaMidpoint>,
        pitch: {
            monzo: APOTOME.monzo as Monzo<{ rational: true }>,
            scaler: [22.5, INSANE_EDA],
        } as Scamon<{ rational: false }>,
        boundType: BoundType.INA_MIDPOINT,
        jiNotationLevels: [JiNotationLevel.EXTREME, JiNotationLevel.INSANE],
    },
    {
        id: 7 as Id<BoundClass>,
        name: "26.5°809" as Name<InaMidpoint>,
        pitch: {
            monzo: APOTOME.monzo as Monzo<{ rational: true }>,
            scaler: [26.5, INSANE_EDA],
        } as Scamon<{ rational: false }>,
        boundType: BoundType.INA_MIDPOINT,
        jiNotationLevels: [JiNotationLevel.EXTREME, JiNotationLevel.INSANE],
    },
    {
        id: 8 as Id<BoundClass>,
        name: "29.5°809" as Name<InaMidpoint>,
        pitch: {
            monzo: APOTOME.monzo as Monzo<{ rational: true }>,
            scaler: [29.5, INSANE_EDA],
        } as Scamon<{ rational: false }>,
        boundType: BoundType.INA_MIDPOINT,
        jiNotationLevels: [JiNotationLevel.EXTREME, JiNotationLevel.INSANE],
    },
    {
        id: 9 as Id<BoundClass>,
        name: "32.5°809" as Name<InaMidpoint>,
        pitch: {
            monzo: APOTOME.monzo as Monzo<{ rational: true }>,
            scaler: [32.5, INSANE_EDA],
        } as Scamon<{ rational: false }>,
        boundType: BoundType.INA_MIDPOINT,
        jiNotationLevels: [JiNotationLevel.HIGH, JiNotationLevel.ULTRA, JiNotationLevel.EXTREME, JiNotationLevel.INSANE],
    },
    {
        id: 10 as Id<BoundClass>,
        name: "36.5°809" as Name<InaMidpoint>,
        pitch: {
            monzo: APOTOME.monzo as Monzo<{ rational: true }>,
            scaler: [36.5, INSANE_EDA],
        } as Scamon<{ rational: false }>,
        boundType: BoundType.INA_MIDPOINT,
        jiNotationLevels: [JiNotationLevel.EXTREME, JiNotationLevel.INSANE],
    },
    {
        id: 11 as Id<BoundClass>,
        name: "39.5°809" as Name<InaMidpoint>,
        pitch: {
            monzo: APOTOME.monzo as Monzo<{ rational: true }>,
            scaler: [39.5, INSANE_EDA],
        } as Scamon<{ rational: false }>,
        boundType: BoundType.INA_MIDPOINT,
        jiNotationLevels: [JiNotationLevel.EXTREME, JiNotationLevel.INSANE],
    },
    {
        id: 12 as Id<BoundClass>,
        name: "43.5°809" as Name<InaMidpoint>,
        pitch: {
            monzo: APOTOME.monzo as Monzo<{ rational: true }>,
            scaler: [43.5, INSANE_EDA],
        } as Scamon<{ rational: false }>,
        boundType: BoundType.INA_MIDPOINT,
        jiNotationLevels: [JiNotationLevel.EXTREME, JiNotationLevel.INSANE],
    },
    {
        id: 13 as Id<BoundClass>,
        name: "46.5°809" as Name<InaMidpoint>,
        pitch: {
            monzo: APOTOME.monzo as Monzo<{ rational: true }>,
            scaler: [46.5, INSANE_EDA],
        } as Scamon<{ rational: false }>,
        boundType: BoundType.INA_MIDPOINT,
        jiNotationLevels: [JiNotationLevel.HIGH, JiNotationLevel.ULTRA, JiNotationLevel.EXTREME, JiNotationLevel.INSANE],
    },
    {
        id: 14 as Id<BoundClass>,
        name: "50.5°809" as Name<InaMidpoint>,
        pitch: {
            monzo: APOTOME.monzo as Monzo<{ rational: true }>,
            scaler: [50.5, INSANE_EDA],
        } as Scamon<{ rational: false }>,
        boundType: BoundType.INA_MIDPOINT,
        jiNotationLevels: [JiNotationLevel.ULTRA, JiNotationLevel.EXTREME, JiNotationLevel.INSANE],
    },
    {
        id: 15 as Id<BoundClass>,
        name: "53.5°809" as Name<InaMidpoint>,
        pitch: {
            monzo: APOTOME.monzo as Monzo<{ rational: true }>,
            scaler: [53.5, INSANE_EDA],
        } as Scamon<{ rational: false }>,
        boundType: BoundType.INA_MIDPOINT,
        jiNotationLevels: [JiNotationLevel.EXTREME, JiNotationLevel.INSANE],
    },
    {
        id: 16 as Id<BoundClass>,
        name: "57.5°809" as Name<InaMidpoint>,
        pitch: {
            monzo: APOTOME.monzo as Monzo<{ rational: true }>,
            scaler: [57.5, INSANE_EDA],
        } as Scamon<{ rational: false }>,
        boundType: BoundType.INA_MIDPOINT,
        jiNotationLevels: [JiNotationLevel.MEDIUM, JiNotationLevel.ULTRA, JiNotationLevel.EXTREME, JiNotationLevel.INSANE],
    },
    {
        id: 17 as Id<BoundClass>,
        name: "60.5°809" as Name<InaMidpoint>,
        pitch: {
            monzo: APOTOME.monzo as Monzo<{ rational: true }>,
            scaler: [60.5, INSANE_EDA],
        } as Scamon<{ rational: false }>,
        boundType: BoundType.INA_MIDPOINT,
        jiNotationLevels: [JiNotationLevel.EXTREME, JiNotationLevel.INSANE],
    },
    {
        id: 18 as Id<BoundClass>,
        name: "64.5°809" as Name<InaMidpoint>,
        pitch: {
            monzo: APOTOME.monzo as Monzo<{ rational: true }>,
            scaler: [64.5, INSANE_EDA],
        } as Scamon<{ rational: false }>,
        boundType: BoundType.INA_MIDPOINT,
        jiNotationLevels: [JiNotationLevel.HIGH, JiNotationLevel.ULTRA, JiNotationLevel.EXTREME, JiNotationLevel.INSANE],
    },
    {
        id: 19 as Id<BoundClass>,
        name: "67.5°809" as Name<InaMidpoint>,
        pitch: {
            monzo: APOTOME.monzo as Monzo<{ rational: true }>,
            scaler: [67.5, INSANE_EDA],
        } as Scamon<{ rational: false }>,
        boundType: BoundType.INA_MIDPOINT,
        jiNotationLevels: [JiNotationLevel.EXTREME, JiNotationLevel.INSANE],
    },
    {
        id: 20 as Id<BoundClass>,
        name: "71.5°809" as Name<InaMidpoint>,
        pitch: {
            monzo: APOTOME.monzo as Monzo<{ rational: true }>,
            scaler: [71.5, INSANE_EDA],
        } as Scamon<{ rational: false }>,
        boundType: BoundType.INA_MIDPOINT,
        jiNotationLevels: [JiNotationLevel.EXTREME, JiNotationLevel.INSANE],
    },
    {
        id: 21 as Id<BoundClass>,
        name: "74.5°809" as Name<InaMidpoint>,
        pitch: {
            monzo: APOTOME.monzo as Monzo<{ rational: true }>,
            scaler: [74.5, INSANE_EDA],
        } as Scamon<{ rational: false }>,
        boundType: BoundType.INA_MIDPOINT,
        jiNotationLevels: [JiNotationLevel.EXTREME, JiNotationLevel.INSANE],
    },
    {
        id: 22 as Id<BoundClass>,
        name: "78.5°809" as Name<InaMidpoint>,
        pitch: {
            monzo: APOTOME.monzo as Monzo<{ rational: true }>,
            scaler: [78.5, INSANE_EDA],
        } as Scamon<{ rational: false }>,
        boundType: BoundType.INA_MIDPOINT,
        jiNotationLevels: [JiNotationLevel.HIGH, JiNotationLevel.ULTRA, JiNotationLevel.EXTREME, JiNotationLevel.INSANE],
    },
    {
        id: 23 as Id<BoundClass>,
        name: "81.5°809" as Name<InaMidpoint>,
        pitch: {
            monzo: APOTOME.monzo as Monzo<{ rational: true }>,
            scaler: [81.5, INSANE_EDA],
        } as Scamon<{ rational: false }>,
        boundType: BoundType.INA_MIDPOINT,
        jiNotationLevels: [JiNotationLevel.EXTREME, JiNotationLevel.INSANE],
    },
    {
        id: 24 as Id<BoundClass>,
        name: "85.5°809" as Name<InaMidpoint>,
        pitch: {
            monzo: APOTOME.monzo as Monzo<{ rational: true }>,
            scaler: [85.5, INSANE_EDA],
        } as Scamon<{ rational: false }>,
        boundType: BoundType.INA_MIDPOINT,
        jiNotationLevels: [JiNotationLevel.ULTRA, JiNotationLevel.EXTREME, JiNotationLevel.INSANE],
    },
    {
        id: 25 as Id<BoundClass>,
        name: "88.5°809" as Name<InaMidpoint>,
        pitch: {
            monzo: APOTOME.monzo as Monzo<{ rational: true }>,
            scaler: [88.5, INSANE_EDA],
        } as Scamon<{ rational: false }>,
        boundType: BoundType.INA_MIDPOINT,
        jiNotationLevels: [JiNotationLevel.ULTRA, JiNotationLevel.EXTREME, JiNotationLevel.INSANE],
    },
    {
        id: 26 as Id<BoundClass>,
        name: "92.5°809" as Name<InaMidpoint>,
        pitch: {
            monzo: APOTOME.monzo as Monzo<{ rational: true }>,
            scaler: [92.5, INSANE_EDA],
        } as Scamon<{ rational: false }>,
        boundType: BoundType.INA_MIDPOINT,
        jiNotationLevels: [JiNotationLevel.EXTREME, JiNotationLevel.INSANE],
    },
    {
        id: 27 as Id<BoundClass>,
        name: "95.5°809" as Name<InaMidpoint>,
        pitch: {
            monzo: APOTOME.monzo as Monzo<{ rational: true }>,
            scaler: [95.5, INSANE_EDA],
        } as Scamon<{ rational: false }>,
        boundType: BoundType.INA_MIDPOINT,
        jiNotationLevels: [JiNotationLevel.MEDIUM, JiNotationLevel.HIGH, JiNotationLevel.ULTRA, JiNotationLevel.EXTREME, JiNotationLevel.INSANE],
    },
    {
        id: 28 as Id<BoundClass>,
        name: "98.5°809" as Name<InaMidpoint>,
        pitch: {
            monzo: APOTOME.monzo as Monzo<{ rational: true }>,
            scaler: [98.5, INSANE_EDA],
        } as Scamon<{ rational: false }>,
        boundType: BoundType.INA_MIDPOINT,
        jiNotationLevels: [JiNotationLevel.EXTREME, JiNotationLevel.INSANE],
    },
    {
        id: 29 as Id<BoundClass>,
        name: "102.5°809" as Name<InaMidpoint>,
        pitch: {
            monzo: APOTOME.monzo as Monzo<{ rational: true }>,
            scaler: [102.5, INSANE_EDA],
        } as Scamon<{ rational: false }>,
        boundType: BoundType.INA_MIDPOINT,
        jiNotationLevels: [JiNotationLevel.EXTREME, JiNotationLevel.INSANE],
    },
    {
        id: 30 as Id<BoundClass>,
        name: "105.5°809" as Name<InaMidpoint>,
        pitch: {
            monzo: APOTOME.monzo as Monzo<{ rational: true }>,
            scaler: [105.5, INSANE_EDA],
        } as Scamon<{ rational: false }>,
        boundType: BoundType.INA_MIDPOINT,
        jiNotationLevels: [JiNotationLevel.EXTREME, JiNotationLevel.INSANE],
    },
    {
        id: 31 as Id<BoundClass>,
        name: "109.5°809" as Name<InaMidpoint>,
        pitch: {
            monzo: APOTOME.monzo as Monzo<{ rational: true }>,
            scaler: [109.5, INSANE_EDA],
        } as Scamon<{ rational: false }>,
        boundType: BoundType.INA_MIDPOINT,
        jiNotationLevels: [JiNotationLevel.HIGH, JiNotationLevel.ULTRA, JiNotationLevel.EXTREME, JiNotationLevel.INSANE],
    },
    {
        id: 32 as Id<BoundClass>,
        name: "112.5°809" as Name<InaMidpoint>,
        pitch: {
            monzo: APOTOME.monzo as Monzo<{ rational: true }>,
            scaler: [112.5, INSANE_EDA],
        } as Scamon<{ rational: false }>,
        boundType: BoundType.INA_MIDPOINT,
        jiNotationLevels: [JiNotationLevel.EXTREME, JiNotationLevel.INSANE],
    },
    {
        id: 33 as Id<BoundClass>,
        name: "116.5°809" as Name<InaMidpoint>,
        pitch: {
            monzo: APOTOME.monzo as Monzo<{ rational: true }>,
            scaler: [116.5, INSANE_EDA],
        } as Scamon<{ rational: false }>,
        boundType: BoundType.INA_MIDPOINT,
        jiNotationLevels: [JiNotationLevel.EXTREME, JiNotationLevel.INSANE],
    },
    {
        id: 34 as Id<BoundClass>,
        name: "119.5°809" as Name<InaMidpoint>,
        pitch: {
            monzo: APOTOME.monzo as Monzo<{ rational: true }>,
            scaler: [119.5, INSANE_EDA],
        } as Scamon<{ rational: false }>,
        boundType: BoundType.INA_MIDPOINT,
        jiNotationLevels: [JiNotationLevel.EXTREME, JiNotationLevel.INSANE],
    },
    {
        id: 35 as Id<BoundClass>,
        name: "123.5°809" as Name<InaMidpoint>,
        pitch: {
            monzo: APOTOME.monzo as Monzo<{ rational: true }>,
            scaler: [123.5, INSANE_EDA],
        } as Scamon<{ rational: false }>,
        boundType: BoundType.INA_MIDPOINT,
        jiNotationLevels: [JiNotationLevel.HIGH, JiNotationLevel.ULTRA, JiNotationLevel.EXTREME, JiNotationLevel.INSANE],
    },
    {
        id: 36 as Id<BoundClass>,
        name: "126.5°809" as Name<InaMidpoint>,
        pitch: {
            monzo: APOTOME.monzo as Monzo<{ rational: true }>,
            scaler: [126.5, INSANE_EDA],
        } as Scamon<{ rational: false }>,
        boundType: BoundType.INA_MIDPOINT,
        jiNotationLevels: [JiNotationLevel.EXTREME, JiNotationLevel.INSANE],
    },
    {
        id: 37 as Id<BoundClass>,
        name: "130.5°809" as Name<InaMidpoint>,
        pitch: {
            monzo: APOTOME.monzo as Monzo<{ rational: true }>,
            scaler: [130.5, INSANE_EDA],
        } as Scamon<{ rational: false }>,
        boundType: BoundType.INA_MIDPOINT,
        jiNotationLevels: [JiNotationLevel.EXTREME, JiNotationLevel.INSANE],
    },
    {
        id: 38 as Id<BoundClass>,
        name: "133.5°809" as Name<InaMidpoint>,
        pitch: {
            monzo: APOTOME.monzo as Monzo<{ rational: true }>,
            scaler: [133.5, INSANE_EDA],
        } as Scamon<{ rational: false }>,
        boundType: BoundType.INA_MIDPOINT,
        jiNotationLevels: [JiNotationLevel.MEDIUM, JiNotationLevel.HIGH, JiNotationLevel.ULTRA, JiNotationLevel.EXTREME, JiNotationLevel.INSANE],
    },
    {
        id: 39 as Id<BoundClass>,
        name: "137.5°809" as Name<InaMidpoint>,
        pitch: {
            monzo: APOTOME.monzo as Monzo<{ rational: true }>,
            scaler: [137.5, INSANE_EDA],
        } as Scamon<{ rational: false }>,
        boundType: BoundType.INA_MIDPOINT,
        jiNotationLevels: [JiNotationLevel.EXTREME, JiNotationLevel.INSANE],
    },
    {
        id: 40 as Id<BoundClass>,
        name: "140.5°809" as Name<InaMidpoint>,
        pitch: {
            monzo: APOTOME.monzo as Monzo<{ rational: true }>,
            scaler: [140.5, INSANE_EDA],
        } as Scamon<{ rational: false }>,
        boundType: BoundType.INA_MIDPOINT,
        jiNotationLevels: [JiNotationLevel.ULTRA, JiNotationLevel.EXTREME, JiNotationLevel.INSANE],
    },
    {
        id: 41 as Id<BoundClass>,
        name: "144.5°809" as Name<InaMidpoint>,
        pitch: {
            monzo: APOTOME.monzo as Monzo<{ rational: true }>,
            scaler: [144.5, INSANE_EDA],
        } as Scamon<{ rational: false }>,
        boundType: BoundType.INA_MIDPOINT,
        jiNotationLevels: [JiNotationLevel.HIGH, JiNotationLevel.ULTRA, JiNotationLevel.EXTREME, JiNotationLevel.INSANE],
    },
    {
        id: 42 as Id<BoundClass>,
        name: "147.5°809" as Name<InaMidpoint>,
        pitch: {
            monzo: APOTOME.monzo as Monzo<{ rational: true }>,
            scaler: [147.5, INSANE_EDA],
        } as Scamon<{ rational: false }>,
        boundType: BoundType.INA_MIDPOINT,
        jiNotationLevels: [JiNotationLevel.EXTREME, JiNotationLevel.INSANE],
    },
    {
        id: 43 as Id<BoundClass>,
        name: "151.5°809" as Name<InaMidpoint>,
        pitch: {
            monzo: APOTOME.monzo as Monzo<{ rational: true }>,
            scaler: [151.5, INSANE_EDA],
        } as Scamon<{ rational: false }>,
        boundType: BoundType.INA_MIDPOINT,
        jiNotationLevels: [JiNotationLevel.EXTREME, JiNotationLevel.INSANE],
    },
    {
        id: 44 as Id<BoundClass>,
        name: "154.5°809" as Name<InaMidpoint>,
        pitch: {
            monzo: APOTOME.monzo as Monzo<{ rational: true }>,
            scaler: [154.5, INSANE_EDA],
        } as Scamon<{ rational: false }>,
        boundType: BoundType.INA_MIDPOINT,
        jiNotationLevels: [JiNotationLevel.EXTREME, JiNotationLevel.INSANE],
    },
    {
        id: 45 as Id<BoundClass>,
        name: "157.5°809" as Name<InaMidpoint>,
        pitch: {
            monzo: APOTOME.monzo as Monzo<{ rational: true }>,
            scaler: [157.5, INSANE_EDA],
        } as Scamon<{ rational: false }>,
        boundType: BoundType.INA_MIDPOINT,
        jiNotationLevels: [JiNotationLevel.EXTREME, JiNotationLevel.INSANE],
    },
    {
        id: 46 as Id<BoundClass>,
        name: "161.5°809" as Name<InaMidpoint>,
        pitch: {
            monzo: APOTOME.monzo as Monzo<{ rational: true }>,
            scaler: [161.5, INSANE_EDA],
        } as Scamon<{ rational: false }>,
        boundType: BoundType.INA_MIDPOINT,
        jiNotationLevels: [JiNotationLevel.HIGH, JiNotationLevel.ULTRA, JiNotationLevel.EXTREME, JiNotationLevel.INSANE],
    },
    {
        id: 47 as Id<BoundClass>,
        name: "164.5°809" as Name<InaMidpoint>,
        pitch: {
            monzo: APOTOME.monzo as Monzo<{ rational: true }>,
            scaler: [164.5, INSANE_EDA],
        } as Scamon<{ rational: false }>,
        boundType: BoundType.INA_MIDPOINT,
        jiNotationLevels: [JiNotationLevel.ULTRA, JiNotationLevel.EXTREME, JiNotationLevel.INSANE],
    },
    {
        id: 48 as Id<BoundClass>,
        name: "168.5°809" as Name<InaMidpoint>,
        pitch: {
            monzo: APOTOME.monzo as Monzo<{ rational: true }>,
            scaler: [168.5, INSANE_EDA],
        } as Scamon<{ rational: false }>,
        boundType: BoundType.INA_MIDPOINT,
        jiNotationLevels: [JiNotationLevel.EXTREME, JiNotationLevel.INSANE],
    },
    {
        id: 49 as Id<BoundClass>,
        name: "`'/| ,,)/|" as Name<CommaMean>,
        pitch: {
            monzo: [-16, 0, 3, 2, 1] as Monzo<{ rational: true }>,
            scaler: HALF_SCALER,
        } as Scamon<{ rational: false }>,
        boundType: BoundType.COMMA_MEAN,
        jiNotationLevels: [JiNotationLevel.ULTRA, JiNotationLevel.EXTREME, JiNotationLevel.INSANE],
    },
    {
        id: 50 as Id<BoundClass>,
        name: "171.5°809" as Name<InaMidpoint>,
        pitch: {
            monzo: APOTOME.monzo as Monzo<{ rational: true }>,
            scaler: [171.5, INSANE_EDA],
        } as Scamon<{ rational: false }>,
        boundType: BoundType.INA_MIDPOINT,
        jiNotationLevels: [JiNotationLevel.EXTREME, JiNotationLevel.INSANE],
    },
    {
        id: 51 as Id<BoundClass>,
        name: "175.5°809" as Name<InaMidpoint>,
        pitch: {
            monzo: APOTOME.monzo as Monzo<{ rational: true }>,
            scaler: [175.5, INSANE_EDA],
        } as Scamon<{ rational: false }>,
        boundType: BoundType.INA_MIDPOINT,
        jiNotationLevels: [JiNotationLevel.MEDIUM, JiNotationLevel.EXTREME, JiNotationLevel.INSANE],
    },
    {
        id: 52 as Id<BoundClass>,
        name: ")/| ,.|)" as Name<CommaMean>,
        pitch: {
            monzo: [-4, -1, -1, 0, 0, 1, 0, 1] as Monzo<{ rational: true }>,
            scaler: HALF_SCALER,
        } as Scamon<{ rational: false }>,
        boundType: BoundType.COMMA_MEAN,
        jiNotationLevels: [JiNotationLevel.ULTRA, JiNotationLevel.EXTREME, JiNotationLevel.INSANE],
    },
    {
        id: 53 as Id<BoundClass>,
        name: "178.5°809" as Name<InaMidpoint>,
        pitch: {
            monzo: APOTOME.monzo as Monzo<{ rational: true }>,
            scaler: [178.5, INSANE_EDA],
        } as Scamon<{ rational: false }>,
        boundType: BoundType.INA_MIDPOINT,
        jiNotationLevels: [JiNotationLevel.EXTREME, JiNotationLevel.INSANE],
    },
    {
        id: 54 as Id<BoundClass>,
        name: "182.5°809" as Name<InaMidpoint>,
        pitch: {
            monzo: APOTOME.monzo as Monzo<{ rational: true }>,
            scaler: [182.5, INSANE_EDA],
        } as Scamon<{ rational: false }>,
        boundType: BoundType.INA_MIDPOINT,
        jiNotationLevels: [JiNotationLevel.EXTREME, JiNotationLevel.INSANE],
    },
    {
        id: 55 as Id<BoundClass>,
        name: "185.5°809" as Name<InaMidpoint>,
        pitch: {
            monzo: APOTOME.monzo as Monzo<{ rational: true }>,
            scaler: [185.5, INSANE_EDA],
        } as Scamon<{ rational: false }>,
        boundType: BoundType.INA_MIDPOINT,
        jiNotationLevels: [JiNotationLevel.HIGH, JiNotationLevel.ULTRA, JiNotationLevel.EXTREME, JiNotationLevel.INSANE],
    },
    {
        id: 56 as Id<BoundClass>,
        name: "189.5°809" as Name<InaMidpoint>,
        pitch: {
            monzo: APOTOME.monzo as Monzo<{ rational: true }>,
            scaler: [189.5, INSANE_EDA],
        } as Scamon<{ rational: false }>,
        boundType: BoundType.INA_MIDPOINT,
        jiNotationLevels: [JiNotationLevel.EXTREME, JiNotationLevel.INSANE],
    },
    {
        id: 57 as Id<BoundClass>,
        name: "192.5°809" as Name<InaMidpoint>,
        pitch: {
            monzo: APOTOME.monzo as Monzo<{ rational: true }>,
            scaler: [192.5, INSANE_EDA],
        } as Scamon<{ rational: false }>,
        boundType: BoundType.INA_MIDPOINT,
        jiNotationLevels: [JiNotationLevel.EXTREME, JiNotationLevel.INSANE],
    },
    {
        id: 58 as Id<BoundClass>,
        name: "196.5°809" as Name<InaMidpoint>,
        pitch: {
            monzo: APOTOME.monzo as Monzo<{ rational: true }>,
            scaler: [196.5, INSANE_EDA],
        } as Scamon<{ rational: false }>,
        boundType: BoundType.INA_MIDPOINT,
        jiNotationLevels: [JiNotationLevel.EXTREME, JiNotationLevel.INSANE],
    },
    {
        id: 59 as Id<BoundClass>,
        name: "199.5°809" as Name<InaMidpoint>,
        pitch: {
            monzo: APOTOME.monzo as Monzo<{ rational: true }>,
            scaler: [199.5, INSANE_EDA],
        } as Scamon<{ rational: false }>,
        boundType: BoundType.INA_MIDPOINT,
        jiNotationLevels: [JiNotationLevel.EXTREME, JiNotationLevel.INSANE],
    },
    {
        id: 60 as Id<BoundClass>,
        name: "203.5°809" as Name<InaMidpoint>,
        pitch: {
            monzo: APOTOME.monzo as Monzo<{ rational: true }>,
            scaler: [203.5, INSANE_EDA],
        } as Scamon<{ rational: false }>,
        boundType: BoundType.INA_MIDPOINT,
        jiNotationLevels: [JiNotationLevel.HIGH, JiNotationLevel.ULTRA, JiNotationLevel.EXTREME, JiNotationLevel.INSANE],
    },
    {
        id: 61 as Id<BoundClass>,
        name: "206.5°809" as Name<InaMidpoint>,
        pitch: {
            monzo: APOTOME.monzo as Monzo<{ rational: true }>,
            scaler: [206.5, INSANE_EDA],
        } as Scamon<{ rational: false }>,
        boundType: BoundType.INA_MIDPOINT,
        jiNotationLevels: [JiNotationLevel.EXTREME, JiNotationLevel.INSANE],
    },
    {
        id: 62 as Id<BoundClass>,
        name: "210.5°809" as Name<InaMidpoint>,
        pitch: {
            monzo: APOTOME.monzo as Monzo<{ rational: true }>,
            scaler: [210.5, INSANE_EDA],
        } as Scamon<{ rational: false }>,
        boundType: BoundType.INA_MIDPOINT,
        jiNotationLevels: [JiNotationLevel.EXTREME, JiNotationLevel.INSANE],
    },
    {
        id: 63 as Id<BoundClass>,
        name: "213.5°809" as Name<InaMidpoint>,
        pitch: {
            monzo: APOTOME.monzo as Monzo<{ rational: true }>,
            scaler: [213.5, INSANE_EDA],
        } as Scamon<{ rational: false }>,
        boundType: BoundType.INA_MIDPOINT,
        jiNotationLevels: [JiNotationLevel.MEDIUM, JiNotationLevel.ULTRA, JiNotationLevel.EXTREME, JiNotationLevel.INSANE],
    },
    {
        id: 64 as Id<BoundClass>,
        name: "217.5°809" as Name<InaMidpoint>,
        pitch: {
            monzo: APOTOME.monzo as Monzo<{ rational: true }>,
            scaler: [217.5, INSANE_EDA],
        } as Scamon<{ rational: false }>,
        boundType: BoundType.INA_MIDPOINT,
        jiNotationLevels: [JiNotationLevel.EXTREME, JiNotationLevel.INSANE],
    },
    {
        id: 65 as Id<BoundClass>,
        name: "220.5°809" as Name<InaMidpoint>,
        pitch: {
            monzo: APOTOME.monzo as Monzo<{ rational: true }>,
            scaler: [220.5, INSANE_EDA],
        } as Scamon<{ rational: false }>,
        boundType: BoundType.INA_MIDPOINT,
        jiNotationLevels: [JiNotationLevel.HIGH, JiNotationLevel.ULTRA, JiNotationLevel.EXTREME, JiNotationLevel.INSANE],
    },
    {
        id: 66 as Id<BoundClass>,
        name: "223.5°809" as Name<InaMidpoint>,
        pitch: {
            monzo: APOTOME.monzo as Monzo<{ rational: true }>,
            scaler: [223.5, INSANE_EDA],
        } as Scamon<{ rational: false }>,
        boundType: BoundType.INA_MIDPOINT,
        jiNotationLevels: [JiNotationLevel.ULTRA, JiNotationLevel.EXTREME, JiNotationLevel.INSANE],
    },
    {
        id: 67 as Id<BoundClass>,
        name: "227.5°809" as Name<InaMidpoint>,
        pitch: {
            monzo: APOTOME.monzo as Monzo<{ rational: true }>,
            scaler: [227.5, INSANE_EDA],
        } as Scamon<{ rational: false }>,
        boundType: BoundType.INA_MIDPOINT,
        jiNotationLevels: [JiNotationLevel.EXTREME, JiNotationLevel.INSANE],
    },
    {
        id: 68 as Id<BoundClass>,
        name: "230.5°809" as Name<InaMidpoint>,
        pitch: {
            monzo: APOTOME.monzo as Monzo<{ rational: true }>,
            scaler: [230.5, INSANE_EDA],
        } as Scamon<{ rational: false }>,
        boundType: BoundType.INA_MIDPOINT,
        jiNotationLevels: [JiNotationLevel.HIGH, JiNotationLevel.ULTRA, JiNotationLevel.EXTREME, JiNotationLevel.INSANE],
    },
    {
        id: 69 as Id<BoundClass>,
        name: "234.5°809" as Name<InaMidpoint>,
        pitch: {
            monzo: APOTOME.monzo as Monzo<{ rational: true }>,
            scaler: [234.5, INSANE_EDA],
        } as Scamon<{ rational: false }>,
        boundType: BoundType.INA_MIDPOINT,
        jiNotationLevels: [JiNotationLevel.EXTREME, JiNotationLevel.INSANE],
    },
    {
        id: 70 as Id<BoundClass>,
        name: "237.5°809" as Name<InaMidpoint>,
        pitch: {
            monzo: APOTOME.monzo as Monzo<{ rational: true }>,
            scaler: [237.5, INSANE_EDA],
        } as Scamon<{ rational: false }>,
        boundType: BoundType.INA_MIDPOINT,
        jiNotationLevels: [JiNotationLevel.EXTREME, JiNotationLevel.INSANE],
    },
    {
        id: 71 as Id<BoundClass>,
        name: "241.5°809" as Name<InaMidpoint>,
        pitch: {
            monzo: APOTOME.monzo as Monzo<{ rational: true }>,
            scaler: [241.5, INSANE_EDA],
        } as Scamon<{ rational: false }>,
        boundType: BoundType.INA_MIDPOINT,
        jiNotationLevels: [JiNotationLevel.EXTREME, JiNotationLevel.INSANE],
    },
    {
        id: 72 as Id<BoundClass>,
        name: "244.5°809" as Name<InaMidpoint>,
        pitch: {
            monzo: APOTOME.monzo as Monzo<{ rational: true }>,
            scaler: [244.5, INSANE_EDA],
        } as Scamon<{ rational: false }>,
        boundType: BoundType.INA_MIDPOINT,
        jiNotationLevels: [JiNotationLevel.HIGH, JiNotationLevel.ULTRA, JiNotationLevel.EXTREME, JiNotationLevel.INSANE],
    },
    {
        id: 73 as Id<BoundClass>,
        name: "248.5°809" as Name<InaMidpoint>,
        pitch: {
            monzo: APOTOME.monzo as Monzo<{ rational: true }>,
            scaler: [248.5, INSANE_EDA],
        } as Scamon<{ rational: false }>,
        boundType: BoundType.INA_MIDPOINT,
        jiNotationLevels: [JiNotationLevel.EXTREME, JiNotationLevel.INSANE],
    },
    {
        id: 74 as Id<BoundClass>,
        name: "'(| ,~|)" as Name<CommaMean>,
        pitch: {
            monzo: [4, -5, 2, -2, 0, 0, 0, 0, 0, 0, 1] as Monzo<{ rational: true }>,
            scaler: HALF_SCALER,
        } as Scamon<{ rational: false }>,
        boundType: BoundType.COMMA_MEAN,
        jiNotationLevels: [JiNotationLevel.MEDIUM, JiNotationLevel.ULTRA, JiNotationLevel.EXTREME, JiNotationLevel.INSANE],
    },
    {
        id: 75 as Id<BoundClass>,
        name: "251.5°809" as Name<InaMidpoint>,
        pitch: {
            monzo: APOTOME.monzo as Monzo<{ rational: true }>,
            scaler: [251.5, INSANE_EDA],
        } as Scamon<{ rational: false }>,
        boundType: BoundType.INA_MIDPOINT,
        jiNotationLevels: [JiNotationLevel.EXTREME, JiNotationLevel.INSANE],
    },
    {
        id: 76 as Id<BoundClass>,
        name: "255.5°809" as Name<InaMidpoint>,
        pitch: {
            monzo: APOTOME.monzo as Monzo<{ rational: true }>,
            scaler: [255.5, INSANE_EDA],
        } as Scamon<{ rational: false }>,
        boundType: BoundType.INA_MIDPOINT,
        jiNotationLevels: [JiNotationLevel.EXTREME, JiNotationLevel.INSANE],
    },
    {
        id: 77 as Id<BoundClass>,
        name: "258.5°809" as Name<InaMidpoint>,
        pitch: {
            monzo: APOTOME.monzo as Monzo<{ rational: true }>,
            scaler: [258.5, INSANE_EDA],
        } as Scamon<{ rational: false }>,
        boundType: BoundType.INA_MIDPOINT,
        jiNotationLevels: [JiNotationLevel.ULTRA, JiNotationLevel.EXTREME, JiNotationLevel.INSANE],
    },
    {
        id: 78 as Id<BoundClass>,
        name: "262.5°809" as Name<InaMidpoint>,
        pitch: {
            monzo: APOTOME.monzo as Monzo<{ rational: true }>,
            scaler: [262.5, INSANE_EDA],
        } as Scamon<{ rational: false }>,
        boundType: BoundType.INA_MIDPOINT,
        jiNotationLevels: [JiNotationLevel.EXTREME, JiNotationLevel.INSANE],
    },
    {
        id: 79 as Id<BoundClass>,
        name: "265.5°809" as Name<InaMidpoint>,
        pitch: {
            monzo: APOTOME.monzo as Monzo<{ rational: true }>,
            scaler: [265.5, INSANE_EDA],
        } as Scamon<{ rational: false }>,
        boundType: BoundType.INA_MIDPOINT,
        jiNotationLevels: [JiNotationLevel.HIGH, JiNotationLevel.ULTRA, JiNotationLevel.EXTREME, JiNotationLevel.INSANE],
    },
    {
        id: 80 as Id<BoundClass>,
        name: "269.5°809" as Name<InaMidpoint>,
        pitch: {
            monzo: APOTOME.monzo as Monzo<{ rational: true }>,
            scaler: [269.5, INSANE_EDA],
        } as Scamon<{ rational: false }>,
        boundType: BoundType.INA_MIDPOINT,
        jiNotationLevels: [JiNotationLevel.ULTRA, JiNotationLevel.EXTREME, JiNotationLevel.INSANE],
    },
    {
        id: 81 as Id<BoundClass>,
        name: "/|~ ,,(|(" as Name<CommaMean>,
        pitch: {
            monzo: [-6, 3, -1, 1, 0, -1, 0, 0, 1] as Monzo<{ rational: true }>,
            scaler: HALF_SCALER,
        } as Scamon<{ rational: false }>,
        boundType: BoundType.COMMA_MEAN,
        jiNotationLevels: [JiNotationLevel.HIGH, JiNotationLevel.ULTRA, JiNotationLevel.EXTREME, JiNotationLevel.INSANE],
    },
    {
        id: 82 as Id<BoundClass>,
        name: "272.5°809" as Name<InaMidpoint>,
        pitch: {
            monzo: APOTOME.monzo as Monzo<{ rational: true }>,
            scaler: [272.5, INSANE_EDA],
        } as Scamon<{ rational: false }>,
        boundType: BoundType.INA_MIDPOINT,
        jiNotationLevels: [JiNotationLevel.EXTREME, JiNotationLevel.INSANE],
    },
    {
        id: 83 as Id<BoundClass>,
        name: "276.5°809" as Name<InaMidpoint>,
        pitch: {
            monzo: APOTOME.monzo as Monzo<{ rational: true }>,
            scaler: [276.5, INSANE_EDA],
        } as Scamon<{ rational: false }>,
        boundType: BoundType.INA_MIDPOINT,
        jiNotationLevels: [JiNotationLevel.EXTREME, JiNotationLevel.INSANE],
    },
    {
        id: 84 as Id<BoundClass>,
        name: "279.5°809" as Name<InaMidpoint>,
        pitch: {
            monzo: APOTOME.monzo as Monzo<{ rational: true }>,
            scaler: [279.5, INSANE_EDA],
        } as Scamon<{ rational: false }>,
        boundType: BoundType.INA_MIDPOINT,
        jiNotationLevels: [JiNotationLevel.EXTREME, JiNotationLevel.INSANE],
    },
    {
        id: 85 as Id<BoundClass>,
        name: "282.5°809" as Name<InaMidpoint>,
        pitch: {
            monzo: APOTOME.monzo as Monzo<{ rational: true }>,
            scaler: [282.5, INSANE_EDA],
        } as Scamon<{ rational: false }>,
        boundType: BoundType.INA_MIDPOINT,
        jiNotationLevels: [JiNotationLevel.HIGH, JiNotationLevel.ULTRA, JiNotationLevel.EXTREME, JiNotationLevel.INSANE],
    },
    {
        id: 86 as Id<BoundClass>,
        name: "286.5°809" as Name<InaMidpoint>,
        pitch: {
            monzo: APOTOME.monzo as Monzo<{ rational: true }>,
            scaler: [286.5, INSANE_EDA],
        } as Scamon<{ rational: false }>,
        boundType: BoundType.INA_MIDPOINT,
        jiNotationLevels: [JiNotationLevel.MEDIUM, JiNotationLevel.ULTRA, JiNotationLevel.EXTREME, JiNotationLevel.INSANE],
    },
    {
        id: 87 as Id<BoundClass>,
        name: "289.5°809" as Name<InaMidpoint>,
        pitch: {
            monzo: APOTOME.monzo as Monzo<{ rational: true }>,
            scaler: [289.5, INSANE_EDA],
        } as Scamon<{ rational: false }>,
        boundType: BoundType.INA_MIDPOINT,
        jiNotationLevels: [JiNotationLevel.EXTREME, JiNotationLevel.INSANE],
    },
    {
        id: 88 as Id<BoundClass>,
        name: "293.5°809" as Name<InaMidpoint>,
        pitch: {
            monzo: APOTOME.monzo as Monzo<{ rational: true }>,
            scaler: [293.5, INSANE_EDA],
        } as Scamon<{ rational: false }>,
        boundType: BoundType.INA_MIDPOINT,
        jiNotationLevels: [JiNotationLevel.EXTREME, JiNotationLevel.INSANE],
    },
    {
        id: 89 as Id<BoundClass>,
        name: "296.5°809" as Name<InaMidpoint>,
        pitch: {
            monzo: APOTOME.monzo as Monzo<{ rational: true }>,
            scaler: [296.5, INSANE_EDA],
        } as Scamon<{ rational: false }>,
        boundType: BoundType.INA_MIDPOINT,
        jiNotationLevels: [JiNotationLevel.HIGH, JiNotationLevel.ULTRA, JiNotationLevel.EXTREME, JiNotationLevel.INSANE],
    },
    {
        id: 90 as Id<BoundClass>,
        name: "300.5°809" as Name<InaMidpoint>,
        pitch: {
            monzo: APOTOME.monzo as Monzo<{ rational: true }>,
            scaler: [300.5, INSANE_EDA],
        } as Scamon<{ rational: false }>,
        boundType: BoundType.INA_MIDPOINT,
        jiNotationLevels: [JiNotationLevel.EXTREME, JiNotationLevel.INSANE],
    },
    {
        id: 91 as Id<BoundClass>,
        name: "303.5°809" as Name<InaMidpoint>,
        pitch: {
            monzo: APOTOME.monzo as Monzo<{ rational: true }>,
            scaler: [303.5, INSANE_EDA],
        } as Scamon<{ rational: false }>,
        boundType: BoundType.INA_MIDPOINT,
        jiNotationLevels: [JiNotationLevel.EXTREME, JiNotationLevel.INSANE],
    },
    {
        id: 92 as Id<BoundClass>,
        name: "307.5°809" as Name<InaMidpoint>,
        pitch: {
            monzo: APOTOME.monzo as Monzo<{ rational: true }>,
            scaler: [307.5, INSANE_EDA],
        } as Scamon<{ rational: false }>,
        boundType: BoundType.INA_MIDPOINT,
        jiNotationLevels: [JiNotationLevel.EXTREME, JiNotationLevel.INSANE],
    },
    {
        id: 93 as Id<BoundClass>,
        name: "310.5°809" as Name<InaMidpoint>,
        pitch: {
            monzo: APOTOME.monzo as Monzo<{ rational: true }>,
            scaler: [310.5, INSANE_EDA],
        } as Scamon<{ rational: false }>,
        boundType: BoundType.INA_MIDPOINT,
        jiNotationLevels: [JiNotationLevel.EXTREME, JiNotationLevel.INSANE],
    },
    {
        id: 94 as Id<BoundClass>,
        name: "314.5°809" as Name<InaMidpoint>,
        pitch: {
            monzo: APOTOME.monzo as Monzo<{ rational: true }>,
            scaler: [314.5, INSANE_EDA],
        } as Scamon<{ rational: false }>,
        boundType: BoundType.INA_MIDPOINT,
        jiNotationLevels: [JiNotationLevel.ULTRA, JiNotationLevel.EXTREME, JiNotationLevel.INSANE],
    },
    {
        id: 95 as Id<BoundClass>,
        name: "317.5°809" as Name<InaMidpoint>,
        pitch: {
            monzo: APOTOME.monzo as Monzo<{ rational: true }>,
            scaler: [317.5, INSANE_EDA],
        } as Scamon<{ rational: false }>,
        boundType: BoundType.INA_MIDPOINT,
        jiNotationLevels: [JiNotationLevel.EXTREME, JiNotationLevel.INSANE],
    },
    {
        id: 96 as Id<BoundClass>,
        name: "S|M" as Name<SizeCategoryBound>,
        pitch: {
            monzo: PYTHAGOREAN_LIMMA.monzo,
            scaler: HALF_SCALER,
        } as Scamon<{ rational: false }>,
        boundType: BoundType.SIZE_CATEGORY_BOUND,
        jiNotationLevels: [JiNotationLevel.MEDIUM, JiNotationLevel.HIGH, JiNotationLevel.ULTRA, JiNotationLevel.EXTREME, JiNotationLevel.INSANE],
    },
    {
        id: 97 as Id<BoundClass>,
        name: "324.5°809" as Name<InaMidpoint>,
        pitch: {
            monzo: APOTOME.monzo,
            scaler: [324.5, INSANE_EDA],
        } as Scamon<{ rational: false }>,
        boundType: BoundType.INA_MIDPOINT,
        jiNotationLevels: [JiNotationLevel.EXTREME, JiNotationLevel.INSANE],
    },
    {
        id: 98 as Id<BoundClass>,
        name: "328.5°809" as Name<InaMidpoint>,
        pitch: {
            monzo: APOTOME.monzo as Monzo<{ rational: true }>,
            scaler: [328.5, INSANE_EDA],
        } as Scamon<{ rational: false }>,
        boundType: BoundType.INA_MIDPOINT,
        jiNotationLevels: [JiNotationLevel.EXTREME, JiNotationLevel.INSANE],
    },
    {
        id: 99 as Id<BoundClass>,
        name: "331.5°809" as Name<InaMidpoint>,
        pitch: {
            monzo: APOTOME.monzo as Monzo<{ rational: true }>,
            scaler: [331.5, INSANE_EDA],
        } as Scamon<{ rational: false }>,
        boundType: BoundType.INA_MIDPOINT,
        jiNotationLevels: [JiNotationLevel.EXTREME, JiNotationLevel.INSANE],
    },
    {
        id: 100 as Id<BoundClass>,
        name: "335.5°809" as Name<InaMidpoint>,
        pitch: {
            monzo: APOTOME.monzo as Monzo<{ rational: true }>,
            scaler: [335.5, INSANE_EDA],
        } as Scamon<{ rational: false }>,
        boundType: BoundType.INA_MIDPOINT,
        jiNotationLevels: [JiNotationLevel.EXTREME, JiNotationLevel.INSANE],
    },
    {
        id: 101 as Id<BoundClass>,
        name: "338.5°809" as Name<InaMidpoint>,
        pitch: {
            monzo: APOTOME.monzo as Monzo<{ rational: true }>,
            scaler: [338.5, INSANE_EDA],
        } as Scamon<{ rational: false }>,
        boundType: BoundType.INA_MIDPOINT,
        jiNotationLevels: [JiNotationLevel.HIGH, JiNotationLevel.ULTRA, JiNotationLevel.EXTREME, JiNotationLevel.INSANE],
    },
    {
        id: 102 as Id<BoundClass>,
        name: "342.5°809" as Name<InaMidpoint>,
        pitch: {
            monzo: APOTOME.monzo as Monzo<{ rational: true }>,
            scaler: [342.5, INSANE_EDA],
        } as Scamon<{ rational: false }>,
        boundType: BoundType.INA_MIDPOINT,
        jiNotationLevels: [JiNotationLevel.EXTREME, JiNotationLevel.INSANE],
    },
    {
        id: 103 as Id<BoundClass>,
        name: "345.5°809" as Name<InaMidpoint>,
        pitch: {
            monzo: APOTOME.monzo as Monzo<{ rational: true }>,
            scaler: [345.5, INSANE_EDA],
        } as Scamon<{ rational: false }>,
        boundType: BoundType.INA_MIDPOINT,
        jiNotationLevels: [JiNotationLevel.EXTREME, JiNotationLevel.INSANE],
    },
    {
        id: 104 as Id<BoundClass>,
        name: "348.5°809" as Name<InaMidpoint>,
        pitch: {
            monzo: APOTOME.monzo as Monzo<{ rational: true }>,
            scaler: [348.5, INSANE_EDA],
        } as Scamon<{ rational: false }>,
        boundType: BoundType.INA_MIDPOINT,
        jiNotationLevels: [JiNotationLevel.EXTREME, JiNotationLevel.INSANE],
    },
    {
        id: 105 as Id<BoundClass>,
        name: "352.5°809" as Name<InaMidpoint>,
        pitch: {
            monzo: APOTOME.monzo as Monzo<{ rational: true }>,
            scaler: [352.5, INSANE_EDA],
        } as Scamon<{ rational: false }>,
        boundType: BoundType.INA_MIDPOINT,
        jiNotationLevels: [JiNotationLevel.HIGH, JiNotationLevel.ULTRA, JiNotationLevel.EXTREME, JiNotationLevel.INSANE],
    },
    {
        id: 106 as Id<BoundClass>,
        name: "355.5°809" as Name<InaMidpoint>,
        pitch: {
            monzo: APOTOME.monzo as Monzo<{ rational: true }>,
            scaler: [355.5, INSANE_EDA],
        } as Scamon<{ rational: false }>,
        boundType: BoundType.INA_MIDPOINT,
        jiNotationLevels: [JiNotationLevel.ULTRA, JiNotationLevel.EXTREME, JiNotationLevel.INSANE],
    },
    {
        id: 107 as Id<BoundClass>,
        name: "359.5°809" as Name<InaMidpoint>,
        pitch: {
            monzo: APOTOME.monzo as Monzo<{ rational: true }>,
            scaler: [359.5, INSANE_EDA],
        } as Scamon<{ rational: false }>,
        boundType: BoundType.INA_MIDPOINT,
        jiNotationLevels: [JiNotationLevel.EXTREME, JiNotationLevel.INSANE],
    },
    {
        id: 108 as Id<BoundClass>,
        name: "362.5°809" as Name<InaMidpoint>,
        pitch: {
            monzo: APOTOME.monzo as Monzo<{ rational: true }>,
            scaler: [362.5, INSANE_EDA],
        } as Scamon<{ rational: false }>,
        boundType: BoundType.INA_MIDPOINT,
        jiNotationLevels: [JiNotationLevel.EXTREME, JiNotationLevel.INSANE],
    },
    {
        id: 109 as Id<BoundClass>,
        name: "`'/|) ./|\\" as Name<CommaMean>,
        pitch: {
            monzo: [-4, -4, 3, 0, 1] as Monzo<{ rational: true }>,
            scaler: HALF_SCALER,
        } as Scamon<{ rational: false }>,
        boundType: BoundType.COMMA_MEAN,
        jiNotationLevels: [JiNotationLevel.MEDIUM, JiNotationLevel.ULTRA, JiNotationLevel.EXTREME, JiNotationLevel.INSANE],
    },
    {
        id: 110 as Id<BoundClass>,
        name: "366.5°809" as Name<InaMidpoint>,
        pitch: {
            monzo: APOTOME.monzo as Monzo<{ rational: true }>,
            scaler: [366.5, INSANE_EDA],
        } as Scamon<{ rational: false }>,
        boundType: BoundType.INA_MIDPOINT,
        jiNotationLevels: [JiNotationLevel.EXTREME, JiNotationLevel.INSANE],
    },
    {
        id: 111 as Id<BoundClass>,
        name: "369.5°809" as Name<InaMidpoint>,
        pitch: {
            monzo: APOTOME.monzo as Monzo<{ rational: true }>,
            scaler: [369.5, INSANE_EDA],
        } as Scamon<{ rational: false }>,
        boundType: BoundType.INA_MIDPOINT,
        jiNotationLevels: [JiNotationLevel.HIGH, JiNotationLevel.ULTRA, JiNotationLevel.EXTREME, JiNotationLevel.INSANE],
    },
    {
        id: 112 as Id<BoundClass>,
        name: "373.5°809" as Name<InaMidpoint>,
        pitch: {
            monzo: APOTOME.monzo as Monzo<{ rational: true }>,
            scaler: [373.5, INSANE_EDA],
        } as Scamon<{ rational: false }>,
        boundType: BoundType.INA_MIDPOINT,
        jiNotationLevels: [JiNotationLevel.EXTREME, JiNotationLevel.INSANE],
    },
    {
        id: 113 as Id<BoundClass>,
        name: "376.5°809" as Name<InaMidpoint>,
        pitch: {
            monzo: APOTOME.monzo as Monzo<{ rational: true }>,
            scaler: [376.5, INSANE_EDA],
        } as Scamon<{ rational: false }>,
        boundType: BoundType.INA_MIDPOINT,
        jiNotationLevels: [JiNotationLevel.EXTREME, JiNotationLevel.INSANE],
    },
    {
        id: 114 as Id<BoundClass>,
        name: "380.5°809" as Name<InaMidpoint>,
        pitch: {
            monzo: APOTOME.monzo as Monzo<{ rational: true }>,
            scaler: [380.5, INSANE_EDA],
        } as Scamon<{ rational: false }>,
        boundType: BoundType.INA_MIDPOINT,
        jiNotationLevels: [JiNotationLevel.EXTREME, JiNotationLevel.INSANE],
    },
    {
        id: 115 as Id<BoundClass>,
        name: "383.5°809" as Name<InaMidpoint>,
        pitch: {
            monzo: APOTOME.monzo as Monzo<{ rational: true }>,
            scaler: [383.5, INSANE_EDA],
        } as Scamon<{ rational: false }>,
        boundType: BoundType.INA_MIDPOINT,
        jiNotationLevels: [JiNotationLevel.HIGH, JiNotationLevel.ULTRA, JiNotationLevel.EXTREME, JiNotationLevel.INSANE],
    },
    {
        id: 116 as Id<BoundClass>,
        name: "387.5°809" as Name<InaMidpoint>,
        pitch: {
            monzo: APOTOME.monzo as Monzo<{ rational: true }>,
            scaler: [387.5, INSANE_EDA],
        } as Scamon<{ rational: false }>,
        boundType: BoundType.INA_MIDPOINT,
        jiNotationLevels: [JiNotationLevel.EXTREME, JiNotationLevel.INSANE],
    },
    {
        id: 117 as Id<BoundClass>,
        name: "390.5°809" as Name<InaMidpoint>,
        pitch: {
            monzo: APOTOME.monzo as Monzo<{ rational: true }>,
            scaler: [390.5, INSANE_EDA],
        } as Scamon<{ rational: false }>,
        boundType: BoundType.INA_MIDPOINT,
        jiNotationLevels: [JiNotationLevel.EXTREME, JiNotationLevel.INSANE],
    },
    {
        id: 118 as Id<BoundClass>,
        name: "`(/| '/|\\" as Name<CommaMean>,
        pitch: {
            monzo: [-15, 9, 1, 0, 1, 0, 0, 0, 0, 0, -1] as Monzo<{ rational: true }>,
            scaler: HALF_SCALER,
        } as Scamon<{ rational: false }>,
        boundType: BoundType.COMMA_MEAN,
        jiNotationLevels: [JiNotationLevel.ULTRA, JiNotationLevel.EXTREME, JiNotationLevel.INSANE],
    },
    {
        id: 119 as Id<BoundClass>,
        name: "394.5°809" as Name<InaMidpoint>,
        pitch: {
            monzo: APOTOME.monzo as Monzo<{ rational: true }>,
            scaler: [394.5, INSANE_EDA],
        } as Scamon<{ rational: false }>,
        boundType: BoundType.INA_MIDPOINT,
        jiNotationLevels: [JiNotationLevel.EXTREME, JiNotationLevel.INSANE],
    },
    {
        id: 120 as Id<BoundClass>,
        name: "397.5°809" as Name<InaMidpoint>,
        pitch: {
            monzo: APOTOME.monzo as Monzo<{ rational: true }>,
            scaler: [397.5, INSANE_EDA],
        } as Scamon<{ rational: false }>,
        boundType: BoundType.INA_MIDPOINT,
        jiNotationLevels: [JiNotationLevel.HIGH, JiNotationLevel.ULTRA, JiNotationLevel.EXTREME, JiNotationLevel.INSANE],
    },
    {
        id: 121 as Id<BoundClass>,
        name: "401.5°809" as Name<InaMidpoint>,
        pitch: {
            monzo: APOTOME.monzo as Monzo<{ rational: true }>,
            scaler: [401.5, INSANE_EDA],
        } as Scamon<{ rational: false }>,
        boundType: BoundType.INA_MIDPOINT,
        jiNotationLevels: [JiNotationLevel.EXTREME, JiNotationLevel.INSANE],
    },
    {
        id: 122 as Id<BoundClass>,
        name: "404.5°809" as Name<InaMidpoint>,
        pitch: {
            monzo: APOTOME.monzo as Monzo<{ rational: true }>,
            scaler: [404.5, INSANE_EDA],
        } as Scamon<{ rational: false }>,
        boundType: BoundType.INA_MIDPOINT,
        jiNotationLevels: [JiNotationLevel.MEDIUM, JiNotationLevel.HIGH, JiNotationLevel.ULTRA, JiNotationLevel.EXTREME, JiNotationLevel.INSANE],
    },
]

export {
    JI_NOTATION_BOUND_CLASSES,
}
