import { Name, RealDecimal } from "../../../../../src/general"
import { InaMidpoint, JiNotationLevel } from "../../../../../src/sagittal/notations/ji"
import { computeInaMidpoints } from "../../../../../src/scripts/jiNotationBound/histories/inaMidpoints"

describe("computeInaMidpoints", (): void => {
    it("works for the Medium JI notation level, only including midpoints below the max position", (): void => {
        const jiNotationLevel = JiNotationLevel.MEDIUM

        const actual = computeInaMidpoints(jiNotationLevel)

        const expected = [
            {
                name: "0.5°21" as Name<InaMidpoint>,
                decimal: 1.0015647237265066 as RealDecimal, // 2.7067858585169504¢
            },
            {
                name: "1.5°21" as Name<InaMidpoint>,
                decimal: 1.004701520091548 as RealDecimal,  // 8.120357575550852¢
            },
            {
                name: "2.5°21" as Name<InaMidpoint>,
                decimal: 1.0078481405759925 as RealDecimal, // 13.533929292584752¢
            },
            {
                name: "3.5°21" as Name<InaMidpoint>,
                decimal: 1.0110046159479582 as RealDecimal, // 18.94750100961865¢
            },
            {
                name: "4.5°21" as Name<InaMidpoint>,
                decimal: 1.0141709770719265 as RealDecimal, // 24.361072726652555¢
            },
            {
                name: "5.5°21" as Name<InaMidpoint>,
                decimal: 1.0173472549090425 as RealDecimal, // 29.774644443686455¢
            },
            {
                name: "6.5°21" as Name<InaMidpoint>,
                decimal: 1.0205334805174187 as RealDecimal, // 35.18821616072036¢
            },
            {
                name: "7.5°21" as Name<InaMidpoint>,
                decimal: 1.023729685052438 as RealDecimal,  // 40.601787877754255¢
            },
            {
                name: "8.5°21" as Name<InaMidpoint>,
                decimal: 1.0269358997670592 as RealDecimal, // 46.01535959478816¢
            },
            {
                name: "9.5°21" as Name<InaMidpoint>,
                decimal: 1.030152156012122 as RealDecimal,  // 51.42893131182206¢
            },
            {
                name: "10.5°21" as Name<InaMidpoint>,
                decimal: 1.0333784852366532 as RealDecimal, // 56.84250302885595¢
            },
            {
                name: "11.5°21" as Name<InaMidpoint>,
                decimal: 1.0366149189881753 as RealDecimal, // 62.25607474588986¢
            },
            {
                name: "12.5°21" as Name<InaMidpoint>,
                decimal: 1.039861488913014 as RealDecimal,  // 67.66964646292375¢
            },
        ] as InaMidpoint[]
        expect(actual).toBeCloseToObject(expected)
    })
})
