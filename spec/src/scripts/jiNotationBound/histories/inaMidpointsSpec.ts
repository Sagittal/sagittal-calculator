import { Cents, Decimal, Name } from "../../../../../src/general"
import { JiNotationLevel } from "../../../../../src/sagittal/notations/ji"
import { InaMidpoint } from "../../../../../src/scripts/jiNotationBound/histories"
import { computeInaMidpoints } from "../../../../../src/scripts/jiNotationBound/histories/inaMidpoints"

describe("computeInaMidpoints", (): void => {
    it("works for the Medium JI notation level, only including midpoints below the max position", (): void => {
        const jiNotationLevel = JiNotationLevel.MEDIUM

        const actual = computeInaMidpoints(jiNotationLevel)

        const expected = [
            {
                name: "0.5°21" as Name<InaMidpoint>,
                cents: 2.7067858585169504 as Cents,
                decimal: 1.0015647237265066 as Decimal,
            },
            {
                name: "1.5°21" as Name<InaMidpoint>,
                cents: 8.120357575550852 as Cents,
                decimal: 1.004701520091548 as Decimal,
            },
            {
                name: "2.5°21" as Name<InaMidpoint>,
                cents: 13.533929292584752 as Cents,
                decimal: 1.0078481405759925 as Decimal,
            },
            {
                name: "3.5°21" as Name<InaMidpoint>,
                cents: 18.94750100961865 as Cents,
                decimal: 1.0110046159479582 as Decimal,
            },
            {
                name: "4.5°21" as Name<InaMidpoint>,
                cents: 24.361072726652555 as Cents,
                decimal: 1.0141709770719265 as Decimal,
            },
            {
                name: "5.5°21" as Name<InaMidpoint>,
                cents: 29.774644443686455 as Cents,
                decimal: 1.0173472549090425 as Decimal,
            },
            {
                name: "6.5°21" as Name<InaMidpoint>,
                cents: 35.18821616072036 as Cents,
                decimal: 1.0205334805174187 as Decimal,
            },
            {
                name: "7.5°21" as Name<InaMidpoint>,
                cents: 40.601787877754255 as Cents,
                decimal: 1.023729685052438 as Decimal,
            },
            {
                name: "8.5°21" as Name<InaMidpoint>,
                cents: 46.01535959478816 as Cents,
                decimal: 1.0269358997670592 as Decimal,
            },
            {
                name: "9.5°21" as Name<InaMidpoint>,
                cents: 51.42893131182206 as Cents,
                decimal: 1.030152156012122 as Decimal,
            },
            {
                name: "10.5°21" as Name<InaMidpoint>,
                cents: 56.84250302885595 as Cents,
                decimal: 1.0333784852366532 as Decimal,
            },
            {
                name: "11.5°21" as Name<InaMidpoint>,
                cents: 62.25607474588986 as Cents,
                decimal: 1.0366149189881753 as Decimal,
            },
            {
                name: "12.5°21" as Name<InaMidpoint>,
                cents: 67.66964646292375 as Cents,
                decimal: 1.039861488913014 as Decimal,
            },
        ]
        expect(actual).toBeCloseToObject(expected)
    })
})
