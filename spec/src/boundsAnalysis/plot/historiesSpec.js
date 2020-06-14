const {computeHistories} = require("../../../../src/boundsAnalysis/plot/histories")

describe("computeHistories", () => {
    it("given a bound, returns an array of all of its possible histories", () => {
        const bound = {
            position: 9.5,
            levels: ["MEDIUM", "ULTRA", "EXTREME", "INSANE"],
        }

        const result = computeHistories(bound)

        expect(result).toEqual(jasmine.arrayWithExactContents([
            [
                {
                    level: "MEDIUM",
                    type: "INA",
                    name: "1.5°21",
                    position: 8.120357575550852
                },
                {
                    level: "ULTRA",
                    type: "INA",
                    name: "4.5°58",
                    position: 8.820388401029373
                },
                {
                    level: "EXTREME",
                    type: "INA",
                    name: "19.5°233",
                    position: 9.514410378220525
                },
                {
                    level: "INSANE",
                    type: "INA",
                    name: "65.5°809",
                    position: 9.204410255599667
                }
            ],
            [
                {
                    level: "MEDIUM",
                    type: "INA",
                    name: "1.5°21",
                    position: 8.120357575550852
                },
                {
                    level: "ULTRA",
                    type: "INA",
                    name: "4.5°58",
                    position: 8.820388401029373
                },
                {
                    level: "EXTREME",
                    type: "INA",
                    name: "19.5°233",
                    position: 9.514410378220525
                },
                {
                    level: "INSANE",
                    type: "INA",
                    name: "66.5°809",
                    position: 9.344935603013402
                }
            ],
            [
                {
                    level: "MEDIUM",
                    type: "INA",
                    name: "1.5°21",
                    position: 8.120357575550852
                },
                {
                    level: "ULTRA",
                    type: "INA",
                    name: "4.5°58",
                    position: 8.820388401029373
                },
                {
                    level: "EXTREME",
                    type: "INA",
                    name: "19.5°233",
                    position: 9.514410378220525
                },
                {
                    level: "INSANE",
                    type: "INA",
                    name: "67.5°809",
                    position: 9.485460950427138
                }
            ],
            [
                {
                    level: "MEDIUM",
                    type: "INA",
                    name: "1.5°21",
                    position: 8.120357575550852
                },
                {
                    level: "ULTRA",
                    type: "INA",
                    name: "4.5°58",
                    position: 8.820388401029373
                },
                {
                    level: "EXTREME",
                    type: "INA",
                    name: "19.5°233",
                    position: 9.514410378220525
                },
                {
                    level: "INSANE",
                    type: "INA",
                    name: "68.5°809",
                    position: 9.625986297840873
                }
            ],
            [
                {
                    level: "MEDIUM",
                    type: "INA",
                    name: "1.5°21",
                    position: 8.120357575550852
                },
                {
                    level: "ULTRA",
                    type: "INA",
                    name: "4.5°58",
                    position: 8.820388401029373
                },
                {
                    level: "EXTREME",
                    type: "INA",
                    name: "19.5°233",
                    position: 9.514410378220525
                },
                {
                    level: "INSANE",
                    type: "MEAN",
                    name: ",)|( )|(",
                    position: 9.434865916310185
                }
            ],
            [
                {
                    level: "MEDIUM",
                    type: "INA",
                    name: "1.5°21",
                    position: 8.120357575550852
                },
                {
                    level: "ULTRA",
                    type: "INA",
                    name: "4.5°58",
                    position: 8.820388401029373
                },
                {
                    level: "EXTREME",
                    type: "MEAN",
                    name: ",)|( )|(",
                    position: 9.434865916310185
                },
                {
                    level: "INSANE",
                    type: "INA",
                    name: "65.5°809",
                    position: 9.204410255599667
                }
            ],
            [
                {
                    level: "MEDIUM",
                    type: "INA",
                    name: "1.5°21",
                    position: 8.120357575550852
                },
                {
                    level: "ULTRA",
                    type: "INA",
                    name: "4.5°58",
                    position: 8.820388401029373
                },
                {
                    level: "EXTREME",
                    type: "MEAN",
                    name: ",)|( )|(",
                    position: 9.434865916310185
                },
                {
                    level: "INSANE",
                    type: "INA",
                    name: "66.5°809",
                    position: 9.344935603013402
                }
            ],
            [
                {
                    level: "MEDIUM",
                    type: "INA",
                    name: "1.5°21",
                    position: 8.120357575550852
                },
                {
                    level: "ULTRA",
                    type: "INA",
                    name: "4.5°58",
                    position: 8.820388401029373
                },
                {
                    level: "EXTREME",
                    type: "MEAN",
                    name: ",)|( )|(",
                    position: 9.434865916310185
                },
                {
                    level: "INSANE",
                    type: "INA",
                    name: "67.5°809",
                    position: 9.485460950427138
                }
            ],
            [
                {
                    level: "MEDIUM",
                    type: "INA",
                    name: "1.5°21",
                    position: 8.120357575550852
                },
                {
                    level: "ULTRA",
                    type: "INA",
                    name: "4.5°58",
                    position: 8.820388401029373
                },
                {
                    level: "EXTREME",
                    type: "MEAN",
                    name: ",)|( )|(",
                    position: 9.434865916310185
                },
                {
                    level: "INSANE",
                    type: "INA",
                    name: "68.5°809",
                    position: 9.625986297840873
                }
            ],
            [
                {
                    level: "MEDIUM",
                    type: "INA",
                    name: "1.5°21",
                    position: 8.120357575550852
                },
                {
                    level: "ULTRA",
                    type: "INA",
                    name: "4.5°58",
                    position: 8.820388401029373
                },
                {
                    level: "EXTREME",
                    type: "MEAN",
                    name: ",)|( )|(",
                    position: 9.434865916310185
                },
                {
                    level: "INSANE",
                    type: "MEAN",
                    name: ",)|( )|(",
                    position: 9.434865916310185
                }
            ],
            [
                {
                    level: "MEDIUM",
                    type: "INA",
                    name: "1.5°21",
                    position: 8.120357575550852
                },
                {
                    level: "ULTRA",
                    type: "MEAN",
                    name: "~| )|(",
                    position: 9.208778600061725
                },
                {
                    level: "EXTREME",
                    type: "INA",
                    name: "19.5°233",
                    position: 9.514410378220525
                },
                {
                    level: "INSANE",
                    type: "INA",
                    name: "65.5°809",
                    position: 9.204410255599667
                }
            ],
            [
                {
                    level: "MEDIUM",
                    type: "INA",
                    name: "1.5°21",
                    position: 8.120357575550852
                },
                {
                    level: "ULTRA",
                    type: "MEAN",
                    name: "~| )|(",
                    position: 9.208778600061725
                },
                {
                    level: "EXTREME",
                    type: "INA",
                    name: "19.5°233",
                    position: 9.514410378220525
                },
                {
                    level: "INSANE",
                    type: "INA",
                    name: "66.5°809",
                    position: 9.344935603013402
                }
            ],
            [
                {
                    level: "MEDIUM",
                    type: "INA",
                    name: "1.5°21",
                    position: 8.120357575550852
                },
                {
                    level: "ULTRA",
                    type: "MEAN",
                    name: "~| )|(",
                    position: 9.208778600061725
                },
                {
                    level: "EXTREME",
                    type: "INA",
                    name: "19.5°233",
                    position: 9.514410378220525
                },
                {
                    level: "INSANE",
                    type: "INA",
                    name: "67.5°809",
                    position: 9.485460950427138
                }
            ],
            [
                {
                    level: "MEDIUM",
                    type: "INA",
                    name: "1.5°21",
                    position: 8.120357575550852
                },
                {
                    level: "ULTRA",
                    type: "MEAN",
                    name: "~| )|(",
                    position: 9.208778600061725
                },
                {
                    level: "EXTREME",
                    type: "INA",
                    name: "19.5°233",
                    position: 9.514410378220525
                },
                {
                    level: "INSANE",
                    type: "INA",
                    name: "68.5°809",
                    position: 9.625986297840873
                }
            ],
            [
                {
                    level: "MEDIUM",
                    type: "INA",
                    name: "1.5°21",
                    position: 8.120357575550852
                },
                {
                    level: "ULTRA",
                    type: "MEAN",
                    name: "~| )|(",
                    position: 9.208778600061725
                },
                {
                    level: "EXTREME",
                    type: "INA",
                    name: "19.5°233",
                    position: 9.514410378220525
                },
                {
                    level: "INSANE",
                    type: "MEAN",
                    name: ",)|( )|(",
                    position: 9.434865916310185
                }
            ],
            [
                {
                    level: "MEDIUM",
                    type: "INA",
                    name: "1.5°21",
                    position: 8.120357575550852
                },
                {
                    level: "ULTRA",
                    type: "MEAN",
                    name: "~| )|(",
                    position: 9.208778600061725
                },
                {
                    level: "EXTREME",
                    type: "MEAN",
                    name: ",)|( )|(",
                    position: 9.434865916310185
                },
                {
                    level: "INSANE",
                    type: "INA",
                    name: "65.5°809",
                    position: 9.204410255599667
                }
            ],
            [
                {
                    level: "MEDIUM",
                    type: "INA",
                    name: "1.5°21",
                    position: 8.120357575550852
                },
                {
                    level: "ULTRA",
                    type: "MEAN",
                    name: "~| )|(",
                    position: 9.208778600061725
                },
                {
                    level: "EXTREME",
                    type: "MEAN",
                    name: ",)|( )|(",
                    position: 9.434865916310185
                },
                {
                    level: "INSANE",
                    type: "INA",
                    name: "66.5°809",
                    position: 9.344935603013402
                }
            ],
            [
                {
                    level: "MEDIUM",
                    type: "INA",
                    name: "1.5°21",
                    position: 8.120357575550852
                },
                {
                    level: "ULTRA",
                    type: "MEAN",
                    name: "~| )|(",
                    position: 9.208778600061725
                },
                {
                    level: "EXTREME",
                    type: "MEAN",
                    name: ",)|( )|(",
                    position: 9.434865916310185
                },
                {
                    level: "INSANE",
                    type: "INA",
                    name: "67.5°809",
                    position: 9.485460950427138
                }
            ],
            [
                {
                    level: "MEDIUM",
                    type: "INA",
                    name: "1.5°21",
                    position: 8.120357575550852
                },
                {
                    level: "ULTRA",
                    type: "MEAN",
                    name: "~| )|(",
                    position: 9.208778600061725
                },
                {
                    level: "EXTREME",
                    type: "MEAN",
                    name: ",)|( )|(",
                    position: 9.434865916310185
                },
                {
                    level: "INSANE",
                    type: "INA",
                    name: "68.5°809",
                    position: 9.625986297840873
                }
            ],
            [
                {
                    level: "MEDIUM",
                    type: "INA",
                    name: "1.5°21",
                    position: 8.120357575550852
                },
                {
                    level: "ULTRA",
                    type: "MEAN",
                    name: "~| )|(",
                    position: 9.208778600061725
                },
                {
                    level: "EXTREME",
                    type: "MEAN",
                    name: ",)|( )|(",
                    position: 9.434865916310185
                },
                {
                    level: "INSANE",
                    type: "MEAN",
                    name: ",)|( )|(",
                    position: 9.434865916310185
                }
            ],
            [
                {
                    level: "MEDIUM",
                    type: "MEAN",
                    name: "|( )|(",
                    position: 7.72288142310195
                },
                {
                    level: "ULTRA",
                    type: "INA",
                    name: "4.5°58",
                    position: 8.820388401029373
                },
                {
                    level: "EXTREME",
                    type: "INA",
                    name: "19.5°233",
                    position: 9.514410378220525
                },
                {
                    level: "INSANE",
                    type: "INA",
                    name: "65.5°809",
                    position: 9.204410255599667
                }
            ],
            [
                {
                    level: "MEDIUM",
                    type: "MEAN",
                    name: "|( )|(",
                    position: 7.72288142310195
                },
                {
                    level: "ULTRA",
                    type: "INA",
                    name: "4.5°58",
                    position: 8.820388401029373
                },
                {
                    level: "EXTREME",
                    type: "INA",
                    name: "19.5°233",
                    position: 9.514410378220525
                },
                {
                    level: "INSANE",
                    type: "INA",
                    name: "66.5°809",
                    position: 9.344935603013402
                }
            ],
            [
                {
                    level: "MEDIUM",
                    type: "MEAN",
                    name: "|( )|(",
                    position: 7.72288142310195
                },
                {
                    level: "ULTRA",
                    type: "INA",
                    name: "4.5°58",
                    position: 8.820388401029373
                },
                {
                    level: "EXTREME",
                    type: "INA",
                    name: "19.5°233",
                    position: 9.514410378220525
                },
                {
                    level: "INSANE",
                    type: "INA",
                    name: "67.5°809",
                    position: 9.485460950427138
                }
            ],
            [
                {
                    level: "MEDIUM",
                    type: "MEAN",
                    name: "|( )|(",
                    position: 7.72288142310195
                },
                {
                    level: "ULTRA",
                    type: "INA",
                    name: "4.5°58",
                    position: 8.820388401029373
                },
                {
                    level: "EXTREME",
                    type: "INA",
                    name: "19.5°233",
                    position: 9.514410378220525
                },
                {
                    level: "INSANE",
                    type: "INA",
                    name: "68.5°809",
                    position: 9.625986297840873
                }
            ],
            [
                {
                    level: "MEDIUM",
                    type: "MEAN",
                    name: "|( )|(",
                    position: 7.72288142310195
                },
                {
                    level: "ULTRA",
                    type: "INA",
                    name: "4.5°58",
                    position: 8.820388401029373
                },
                {
                    level: "EXTREME",
                    type: "INA",
                    name: "19.5°233",
                    position: 9.514410378220525
                },
                {
                    level: "INSANE",
                    type: "MEAN",
                    name: ",)|( )|(",
                    position: 9.434865916310185
                }
            ],
            [
                {
                    level: "MEDIUM",
                    type: "MEAN",
                    name: "|( )|(",
                    position: 7.72288142310195
                },
                {
                    level: "ULTRA",
                    type: "INA",
                    name: "4.5°58",
                    position: 8.820388401029373
                },
                {
                    level: "EXTREME",
                    type: "MEAN",
                    name: ",)|( )|(",
                    position: 9.434865916310185
                },
                {
                    level: "INSANE",
                    type: "INA",
                    name: "65.5°809",
                    position: 9.204410255599667
                }
            ],
            [
                {
                    level: "MEDIUM",
                    type: "MEAN",
                    name: "|( )|(",
                    position: 7.72288142310195
                },
                {
                    level: "ULTRA",
                    type: "INA",
                    name: "4.5°58",
                    position: 8.820388401029373
                },
                {
                    level: "EXTREME",
                    type: "MEAN",
                    name: ",)|( )|(",
                    position: 9.434865916310185
                },
                {
                    level: "INSANE",
                    type: "INA",
                    name: "66.5°809",
                    position: 9.344935603013402
                }
            ],
            [
                {
                    level: "MEDIUM",
                    type: "MEAN",
                    name: "|( )|(",
                    position: 7.72288142310195
                },
                {
                    level: "ULTRA",
                    type: "INA",
                    name: "4.5°58",
                    position: 8.820388401029373
                },
                {
                    level: "EXTREME",
                    type: "MEAN",
                    name: ",)|( )|(",
                    position: 9.434865916310185
                },
                {
                    level: "INSANE",
                    type: "INA",
                    name: "67.5°809",
                    position: 9.485460950427138
                }
            ],
            [
                {
                    level: "MEDIUM",
                    type: "MEAN",
                    name: "|( )|(",
                    position: 7.72288142310195
                },
                {
                    level: "ULTRA",
                    type: "INA",
                    name: "4.5°58",
                    position: 8.820388401029373
                },
                {
                    level: "EXTREME",
                    type: "MEAN",
                    name: ",)|( )|(",
                    position: 9.434865916310185
                },
                {
                    level: "INSANE",
                    type: "INA",
                    name: "68.5°809",
                    position: 9.625986297840873
                }
            ],
            [
                {
                    level: "MEDIUM",
                    type: "MEAN",
                    name: "|( )|(",
                    position: 7.72288142310195
                },
                {
                    level: "ULTRA",
                    type: "INA",
                    name: "4.5°58",
                    position: 8.820388401029373
                },
                {
                    level: "EXTREME",
                    type: "MEAN",
                    name: ",)|( )|(",
                    position: 9.434865916310185
                },
                {
                    level: "INSANE",
                    type: "MEAN",
                    name: ",)|( )|(",
                    position: 9.434865916310185
                }
            ],
            [
                {
                    level: "MEDIUM",
                    type: "MEAN",
                    name: "|( )|(",
                    position: 7.72288142310195
                },
                {
                    level: "ULTRA",
                    type: "MEAN",
                    name: "~| )|(",
                    position: 9.208778600061725
                },
                {
                    level: "EXTREME",
                    type: "INA",
                    name: "19.5°233",
                    position: 9.514410378220525
                },
                {
                    level: "INSANE",
                    type: "INA",
                    name: "65.5°809",
                    position: 9.204410255599667
                }
            ],
            [
                {
                    level: "MEDIUM",
                    type: "MEAN",
                    name: "|( )|(",
                    position: 7.72288142310195
                },
                {
                    level: "ULTRA",
                    type: "MEAN",
                    name: "~| )|(",
                    position: 9.208778600061725
                },
                {
                    level: "EXTREME",
                    type: "INA",
                    name: "19.5°233",
                    position: 9.514410378220525
                },
                {
                    level: "INSANE",
                    type: "INA",
                    name: "66.5°809",
                    position: 9.344935603013402
                }
            ],
            [
                {
                    level: "MEDIUM",
                    type: "MEAN",
                    name: "|( )|(",
                    position: 7.72288142310195
                },
                {
                    level: "ULTRA",
                    type: "MEAN",
                    name: "~| )|(",
                    position: 9.208778600061725
                },
                {
                    level: "EXTREME",
                    type: "INA",
                    name: "19.5°233",
                    position: 9.514410378220525
                },
                {
                    level: "INSANE",
                    type: "INA",
                    name: "67.5°809",
                    position: 9.485460950427138
                }
            ],
            [
                {
                    level: "MEDIUM",
                    type: "MEAN",
                    name: "|( )|(",
                    position: 7.72288142310195
                },
                {
                    level: "ULTRA",
                    type: "MEAN",
                    name: "~| )|(",
                    position: 9.208778600061725
                },
                {
                    level: "EXTREME",
                    type: "INA",
                    name: "19.5°233",
                    position: 9.514410378220525
                },
                {
                    level: "INSANE",
                    type: "INA",
                    name: "68.5°809",
                    position: 9.625986297840873
                }
            ],
            [
                {
                    level: "MEDIUM",
                    type: "MEAN",
                    name: "|( )|(",
                    position: 7.72288142310195
                },
                {
                    level: "ULTRA",
                    type: "MEAN",
                    name: "~| )|(",
                    position: 9.208778600061725
                },
                {
                    level: "EXTREME",
                    type: "INA",
                    name: "19.5°233",
                    position: 9.514410378220525
                },
                {
                    level: "INSANE",
                    type: "MEAN",
                    name: ",)|( )|(",
                    position: 9.434865916310185
                }
            ],
            [
                {
                    level: "MEDIUM",
                    type: "MEAN",
                    name: "|( )|(",
                    position: 7.72288142310195
                },
                {
                    level: "ULTRA",
                    type: "MEAN",
                    name: "~| )|(",
                    position: 9.208778600061725
                },
                {
                    level: "EXTREME",
                    type: "MEAN",
                    name: ",)|( )|(",
                    position: 9.434865916310185
                },
                {
                    level: "INSANE",
                    type: "INA",
                    name: "65.5°809",
                    position: 9.204410255599667
                }
            ],
            [
                {
                    level: "MEDIUM",
                    type: "MEAN",
                    name: "|( )|(",
                    position: 7.72288142310195
                },
                {
                    level: "ULTRA",
                    type: "MEAN",
                    name: "~| )|(",
                    position: 9.208778600061725
                },
                {
                    level: "EXTREME",
                    type: "MEAN",
                    name: ",)|( )|(",
                    position: 9.434865916310185
                },
                {
                    level: "INSANE",
                    type: "INA",
                    name: "66.5°809",
                    position: 9.344935603013402
                }
            ],
            [
                {
                    level: "MEDIUM",
                    type: "MEAN",
                    name: "|( )|(",
                    position: 7.72288142310195
                },
                {
                    level: "ULTRA",
                    type: "MEAN",
                    name: "~| )|(",
                    position: 9.208778600061725
                },
                {
                    level: "EXTREME",
                    type: "MEAN",
                    name: ",)|( )|(",
                    position: 9.434865916310185
                },
                {
                    level: "INSANE",
                    type: "INA",
                    name: "67.5°809",
                    position: 9.485460950427138
                }
            ],
            [
                {
                    level: "MEDIUM",
                    type: "MEAN",
                    name: "|( )|(",
                    position: 7.72288142310195
                },
                {
                    level: "ULTRA",
                    type: "MEAN",
                    name: "~| )|(",
                    position: 9.208778600061725
                },
                {
                    level: "EXTREME",
                    type: "MEAN",
                    name: ",)|( )|(",
                    position: 9.434865916310185
                },
                {
                    level: "INSANE",
                    type: "INA",
                    name: "68.5°809",
                    position: 9.625986297840873
                }
            ],
            [
                {
                    level: "MEDIUM",
                    type: "MEAN",
                    name: "|( )|(",
                    position: 7.72288142310195
                },
                {
                    level: "ULTRA",
                    type: "MEAN",
                    name: "~| )|(",
                    position: 9.208778600061725
                },
                {
                    level: "EXTREME",
                    type: "MEAN",
                    name: ",)|( )|(",
                    position: 9.434865916310185
                },
                {
                    level: "INSANE",
                    type: "MEAN",
                    name: ",)|( )|(",
                    position: 9.434865916310185
                }
            ]
        ]))
    })

    it("works for the final bound", () => {
        const bound = {
            position: 68.5725082211804,
            levels: ["MEDIUM", "HIGH", "ULTRA", "EXTREME", "INSANE"],
        }

        const result = computeHistories(bound)

        expect(result).toEqual(jasmine.arrayWithExactContents([
            [
                {
                    level: "MEDIUM",
                    type: "INA",
                    name: "12.5°21",
                    position: 67.66964646292375
                },
                {
                    level: "HIGH",
                    type: "SIZE",
                    name: "L|SS",
                    position: 68.5725082211804
                },
                {
                    level: "ULTRA",
                    type: "INA",
                    name: "34.5°58",
                    position: 67.62297774122518
                },
                {
                    level: "EXTREME",
                    type: "INA",
                    name: "140.5°233",
                    position: 68.55254657128121
                },
                {
                    level: "INSANE",
                    type: "INA",
                    name: "485.5°809",
                    position: 68.22505616936851
                }
            ],
            [
                {
                    level: "MEDIUM",
                    type: "INA",
                    name: "12.5°21",
                    position: 67.66964646292375
                },
                {
                    level: "HIGH",
                    type: "SIZE",
                    name: "L|SS",
                    position: 68.5725082211804
                },
                {
                    level: "ULTRA",
                    type: "INA",
                    name: "34.5°58",
                    position: 67.62297774122518
                },
                {
                    level: "EXTREME",
                    type: "INA",
                    name: "140.5°233",
                    position: 68.55254657128121
                },
                {
                    level: "INSANE",
                    type: "INA",
                    name: "486.5°809",
                    position: 68.36558151678226
                }
            ],
            [
                {
                    level: "MEDIUM",
                    type: "INA",
                    name: "12.5°21",
                    position: 67.66964646292375
                },
                {
                    level: "HIGH",
                    type: "SIZE",
                    name: "L|SS",
                    position: 68.5725082211804
                },
                {
                    level: "ULTRA",
                    type: "INA",
                    name: "34.5°58",
                    position: 67.62297774122518
                },
                {
                    level: "EXTREME",
                    type: "INA",
                    name: "140.5°233",
                    position: 68.55254657128121
                },
                {
                    level: "INSANE",
                    type: "INA",
                    name: "487.5°809",
                    position: 68.50610686419598
                }
            ],
            [
                {
                    level: "MEDIUM",
                    type: "INA",
                    name: "12.5°21",
                    position: 67.66964646292375
                },
                {
                    level: "HIGH",
                    type: "SIZE",
                    name: "L|SS",
                    position: 68.5725082211804
                },
                {
                    level: "ULTRA",
                    type: "INA",
                    name: "34.5°58",
                    position: 67.62297774122518
                },
                {
                    level: "EXTREME",
                    type: "INA",
                    name: "140.5°233",
                    position: 68.55254657128121
                },
                {
                    level: "INSANE",
                    type: "SIZE",
                    name: "L|SS",
                    position: 68.5725082211804
                }
            ],
            [
                {
                    level: "MEDIUM",
                    type: "INA",
                    name: "12.5°21",
                    position: 67.66964646292375
                },
                {
                    level: "HIGH",
                    type: "SIZE",
                    name: "L|SS",
                    position: 68.5725082211804
                },
                {
                    level: "ULTRA",
                    type: "INA",
                    name: "34.5°58",
                    position: 67.62297774122518
                },
                {
                    level: "EXTREME",
                    type: "SIZE",
                    name: "L|SS",
                    position: 68.5725082211804
                },
                {
                    level: "INSANE",
                    type: "INA",
                    name: "485.5°809",
                    position: 68.22505616936851
                }
            ],
            [
                {
                    level: "MEDIUM",
                    type: "INA",
                    name: "12.5°21",
                    position: 67.66964646292375
                },
                {
                    level: "HIGH",
                    type: "SIZE",
                    name: "L|SS",
                    position: 68.5725082211804
                },
                {
                    level: "ULTRA",
                    type: "INA",
                    name: "34.5°58",
                    position: 67.62297774122518
                },
                {
                    level: "EXTREME",
                    type: "SIZE",
                    name: "L|SS",
                    position: 68.5725082211804
                },
                {
                    level: "INSANE",
                    type: "INA",
                    name: "486.5°809",
                    position: 68.36558151678226
                }
            ],
            [
                {
                    level: "MEDIUM",
                    type: "INA",
                    name: "12.5°21",
                    position: 67.66964646292375
                },
                {
                    level: "HIGH",
                    type: "SIZE",
                    name: "L|SS",
                    position: 68.5725082211804
                },
                {
                    level: "ULTRA",
                    type: "INA",
                    name: "34.5°58",
                    position: 67.62297774122518
                },
                {
                    level: "EXTREME",
                    type: "SIZE",
                    name: "L|SS",
                    position: 68.5725082211804
                },
                {
                    level: "INSANE",
                    type: "INA",
                    name: "487.5°809",
                    position: 68.50610686419598
                }
            ],
            [
                {
                    level: "MEDIUM",
                    type: "INA",
                    name: "12.5°21",
                    position: 67.66964646292375
                },
                {
                    level: "HIGH",
                    type: "SIZE",
                    name: "L|SS",
                    position: 68.5725082211804
                },
                {
                    level: "ULTRA",
                    type: "INA",
                    name: "34.5°58",
                    position: 67.62297774122518
                },
                {
                    level: "EXTREME",
                    type: "SIZE",
                    name: "L|SS",
                    position: 68.5725082211804
                },
                {
                    level: "INSANE",
                    type: "SIZE",
                    name: "L|SS",
                    position: 68.5725082211804
                }
            ],
            [
                {
                    level: "MEDIUM",
                    type: "INA",
                    name: "12.5°21",
                    position: 67.66964646292375
                },
                {
                    level: "HIGH",
                    type: "SIZE",
                    name: "L|SS",
                    position: 68.5725082211804
                },
                {
                    level: "ULTRA",
                    type: "SIZE",
                    name: "L|SS",
                    position: 68.5725082211804
                },
                {
                    level: "EXTREME",
                    type: "INA",
                    name: "140.5°233",
                    position: 68.55254657128121
                },
                {
                    level: "INSANE",
                    type: "INA",
                    name: "485.5°809",
                    position: 68.22505616936851
                }
            ],
            [
                {
                    level: "MEDIUM",
                    type: "INA",
                    name: "12.5°21",
                    position: 67.66964646292375
                },
                {
                    level: "HIGH",
                    type: "SIZE",
                    name: "L|SS",
                    position: 68.5725082211804
                },
                {
                    level: "ULTRA",
                    type: "SIZE",
                    name: "L|SS",
                    position: 68.5725082211804
                },
                {
                    level: "EXTREME",
                    type: "INA",
                    name: "140.5°233",
                    position: 68.55254657128121
                },
                {
                    level: "INSANE",
                    type: "INA",
                    name: "486.5°809",
                    position: 68.36558151678226
                }
            ],
            [
                {
                    level: "MEDIUM",
                    type: "INA",
                    name: "12.5°21",
                    position: 67.66964646292375
                },
                {
                    level: "HIGH",
                    type: "SIZE",
                    name: "L|SS",
                    position: 68.5725082211804
                },
                {
                    level: "ULTRA",
                    type: "SIZE",
                    name: "L|SS",
                    position: 68.5725082211804
                },
                {
                    level: "EXTREME",
                    type: "INA",
                    name: "140.5°233",
                    position: 68.55254657128121
                },
                {
                    level: "INSANE",
                    type: "INA",
                    name: "487.5°809",
                    position: 68.50610686419598
                }
            ],
            [
                {
                    level: "MEDIUM",
                    type: "INA",
                    name: "12.5°21",
                    position: 67.66964646292375
                },
                {
                    level: "HIGH",
                    type: "SIZE",
                    name: "L|SS",
                    position: 68.5725082211804
                },
                {
                    level: "ULTRA",
                    type: "SIZE",
                    name: "L|SS",
                    position: 68.5725082211804
                },
                {
                    level: "EXTREME",
                    type: "INA",
                    name: "140.5°233",
                    position: 68.55254657128121
                },
                {
                    level: "INSANE",
                    type: "SIZE",
                    name: "L|SS",
                    position: 68.5725082211804
                }
            ],
            [
                {
                    level: "MEDIUM",
                    type: "INA",
                    name: "12.5°21",
                    position: 67.66964646292375
                },
                {
                    level: "HIGH",
                    type: "SIZE",
                    name: "L|SS",
                    position: 68.5725082211804
                },
                {
                    level: "ULTRA",
                    type: "SIZE",
                    name: "L|SS",
                    position: 68.5725082211804
                },
                {
                    level: "EXTREME",
                    type: "SIZE",
                    name: "L|SS",
                    position: 68.5725082211804
                },
                {
                    level: "INSANE",
                    type: "INA",
                    name: "485.5°809",
                    position: 68.22505616936851
                }
            ],
            [
                {
                    level: "MEDIUM",
                    type: "INA",
                    name: "12.5°21",
                    position: 67.66964646292375
                },
                {
                    level: "HIGH",
                    type: "SIZE",
                    name: "L|SS",
                    position: 68.5725082211804
                },
                {
                    level: "ULTRA",
                    type: "SIZE",
                    name: "L|SS",
                    position: 68.5725082211804
                },
                {
                    level: "EXTREME",
                    type: "SIZE",
                    name: "L|SS",
                    position: 68.5725082211804
                },
                {
                    level: "INSANE",
                    type: "INA",
                    name: "486.5°809",
                    position: 68.36558151678226
                }
            ],
            [
                {
                    level: "MEDIUM",
                    type: "INA",
                    name: "12.5°21",
                    position: 67.66964646292375
                },
                {
                    level: "HIGH",
                    type: "SIZE",
                    name: "L|SS",
                    position: 68.5725082211804
                },
                {
                    level: "ULTRA",
                    type: "SIZE",
                    name: "L|SS",
                    position: 68.5725082211804
                },
                {
                    level: "EXTREME",
                    type: "SIZE",
                    name: "L|SS",
                    position: 68.5725082211804
                },
                {
                    level: "INSANE",
                    type: "INA",
                    name: "487.5°809",
                    position: 68.50610686419598
                }
            ],
            [
                {
                    level: "MEDIUM",
                    type: "INA",
                    name: "12.5°21",
                    position: 67.66964646292375
                },
                {
                    level: "HIGH",
                    type: "SIZE",
                    name: "L|SS",
                    position: 68.5725082211804
                },
                {
                    level: "ULTRA",
                    type: "SIZE",
                    name: "L|SS",
                    position: 68.5725082211804
                },
                {
                    level: "EXTREME",
                    type: "SIZE",
                    name: "L|SS",
                    position: 68.5725082211804
                },
                {
                    level: "INSANE",
                    type: "SIZE",
                    name: "L|SS",
                    position: 68.5725082211804
                }
            ],
            [
                {
                    level: "MEDIUM",
                    type: "SIZE",
                    name: "L|SS",
                    position: 68.5725082211804
                },
                {
                    level: "HIGH",
                    type: "SIZE",
                    name: "L|SS",
                    position: 68.5725082211804
                },
                {
                    level: "ULTRA",
                    type: "INA",
                    name: "34.5°58",
                    position: 67.62297774122518
                },
                {
                    level: "EXTREME",
                    type: "INA",
                    name: "140.5°233",
                    position: 68.55254657128121
                },
                {
                    level: "INSANE",
                    type: "INA",
                    name: "485.5°809",
                    position: 68.22505616936851
                }
            ],
            [
                {
                    level: "MEDIUM",
                    type: "SIZE",
                    name: "L|SS",
                    position: 68.5725082211804
                },
                {
                    level: "HIGH",
                    type: "SIZE",
                    name: "L|SS",
                    position: 68.5725082211804
                },
                {
                    level: "ULTRA",
                    type: "INA",
                    name: "34.5°58",
                    position: 67.62297774122518
                },
                {
                    level: "EXTREME",
                    type: "INA",
                    name: "140.5°233",
                    position: 68.55254657128121
                },
                {
                    level: "INSANE",
                    type: "INA",
                    name: "486.5°809",
                    position: 68.36558151678226
                }
            ],
            [
                {
                    level: "MEDIUM",
                    type: "SIZE",
                    name: "L|SS",
                    position: 68.5725082211804
                },
                {
                    level: "HIGH",
                    type: "SIZE",
                    name: "L|SS",
                    position: 68.5725082211804
                },
                {
                    level: "ULTRA",
                    type: "INA",
                    name: "34.5°58",
                    position: 67.62297774122518
                },
                {
                    level: "EXTREME",
                    type: "INA",
                    name: "140.5°233",
                    position: 68.55254657128121
                },
                {
                    level: "INSANE",
                    type: "INA",
                    name: "487.5°809",
                    position: 68.50610686419598
                }
            ],
            [
                {
                    level: "MEDIUM",
                    type: "SIZE",
                    name: "L|SS",
                    position: 68.5725082211804
                },
                {
                    level: "HIGH",
                    type: "SIZE",
                    name: "L|SS",
                    position: 68.5725082211804
                },
                {
                    level: "ULTRA",
                    type: "INA",
                    name: "34.5°58",
                    position: 67.62297774122518
                },
                {
                    level: "EXTREME",
                    type: "INA",
                    name: "140.5°233",
                    position: 68.55254657128121
                },
                {
                    level: "INSANE",
                    type: "SIZE",
                    name: "L|SS",
                    position: 68.5725082211804
                }
            ],
            [
                {
                    level: "MEDIUM",
                    type: "SIZE",
                    name: "L|SS",
                    position: 68.5725082211804
                },
                {
                    level: "HIGH",
                    type: "SIZE",
                    name: "L|SS",
                    position: 68.5725082211804
                },
                {
                    level: "ULTRA",
                    type: "INA",
                    name: "34.5°58",
                    position: 67.62297774122518
                },
                {
                    level: "EXTREME",
                    type: "SIZE",
                    name: "L|SS",
                    position: 68.5725082211804
                },
                {
                    level: "INSANE",
                    type: "INA",
                    name: "485.5°809",
                    position: 68.22505616936851
                }
            ],
            [
                {
                    level: "MEDIUM",
                    type: "SIZE",
                    name: "L|SS",
                    position: 68.5725082211804
                },
                {
                    level: "HIGH",
                    type: "SIZE",
                    name: "L|SS",
                    position: 68.5725082211804
                },
                {
                    level: "ULTRA",
                    type: "INA",
                    name: "34.5°58",
                    position: 67.62297774122518
                },
                {
                    level: "EXTREME",
                    type: "SIZE",
                    name: "L|SS",
                    position: 68.5725082211804
                },
                {
                    level: "INSANE",
                    type: "INA",
                    name: "486.5°809",
                    position: 68.36558151678226
                }
            ],
            [
                {
                    level: "MEDIUM",
                    type: "SIZE",
                    name: "L|SS",
                    position: 68.5725082211804
                },
                {
                    level: "HIGH",
                    type: "SIZE",
                    name: "L|SS",
                    position: 68.5725082211804
                },
                {
                    level: "ULTRA",
                    type: "INA",
                    name: "34.5°58",
                    position: 67.62297774122518
                },
                {
                    level: "EXTREME",
                    type: "SIZE",
                    name: "L|SS",
                    position: 68.5725082211804
                },
                {
                    level: "INSANE",
                    type: "INA",
                    name: "487.5°809",
                    position: 68.50610686419598
                }
            ],
            [
                {
                    level: "MEDIUM",
                    type: "SIZE",
                    name: "L|SS",
                    position: 68.5725082211804
                },
                {
                    level: "HIGH",
                    type: "SIZE",
                    name: "L|SS",
                    position: 68.5725082211804
                },
                {
                    level: "ULTRA",
                    type: "INA",
                    name: "34.5°58",
                    position: 67.62297774122518
                },
                {
                    level: "EXTREME",
                    type: "SIZE",
                    name: "L|SS",
                    position: 68.5725082211804
                },
                {
                    level: "INSANE",
                    type: "SIZE",
                    name: "L|SS",
                    position: 68.5725082211804
                }
            ],
            [
                {
                    level: "MEDIUM",
                    type: "SIZE",
                    name: "L|SS",
                    position: 68.5725082211804
                },
                {
                    level: "HIGH",
                    type: "SIZE",
                    name: "L|SS",
                    position: 68.5725082211804
                },
                {
                    level: "ULTRA",
                    type: "SIZE",
                    name: "L|SS",
                    position: 68.5725082211804
                },
                {
                    level: "EXTREME",
                    type: "INA",
                    name: "140.5°233",
                    position: 68.55254657128121
                },
                {
                    level: "INSANE",
                    type: "INA",
                    name: "485.5°809",
                    position: 68.22505616936851
                }
            ],
            [
                {
                    level: "MEDIUM",
                    type: "SIZE",
                    name: "L|SS",
                    position: 68.5725082211804
                },
                {
                    level: "HIGH",
                    type: "SIZE",
                    name: "L|SS",
                    position: 68.5725082211804
                },
                {
                    level: "ULTRA",
                    type: "SIZE",
                    name: "L|SS",
                    position: 68.5725082211804
                },
                {
                    level: "EXTREME",
                    type: "INA",
                    name: "140.5°233",
                    position: 68.55254657128121
                },
                {
                    level: "INSANE",
                    type: "INA",
                    name: "486.5°809",
                    position: 68.36558151678226
                }
            ],
            [
                {
                    level: "MEDIUM",
                    type: "SIZE",
                    name: "L|SS",
                    position: 68.5725082211804
                },
                {
                    level: "HIGH",
                    type: "SIZE",
                    name: "L|SS",
                    position: 68.5725082211804
                },
                {
                    level: "ULTRA",
                    type: "SIZE",
                    name: "L|SS",
                    position: 68.5725082211804
                },
                {
                    level: "EXTREME",
                    type: "INA",
                    name: "140.5°233",
                    position: 68.55254657128121
                },
                {
                    level: "INSANE",
                    type: "INA",
                    name: "487.5°809",
                    position: 68.50610686419598
                }
            ],
            [
                {
                    level: "MEDIUM",
                    type: "SIZE",
                    name: "L|SS",
                    position: 68.5725082211804
                },
                {
                    level: "HIGH",
                    type: "SIZE",
                    name: "L|SS",
                    position: 68.5725082211804
                },
                {
                    level: "ULTRA",
                    type: "SIZE",
                    name: "L|SS",
                    position: 68.5725082211804
                },
                {
                    level: "EXTREME",
                    type: "INA",
                    name: "140.5°233",
                    position: 68.55254657128121
                },
                {
                    level: "INSANE",
                    type: "SIZE",
                    name: "L|SS",
                    position: 68.5725082211804
                }
            ],
            [
                {
                    level: "MEDIUM",
                    type: "SIZE",
                    name: "L|SS",
                    position: 68.5725082211804
                },
                {
                    level: "HIGH",
                    type: "SIZE",
                    name: "L|SS",
                    position: 68.5725082211804
                },
                {
                    level: "ULTRA",
                    type: "SIZE",
                    name: "L|SS",
                    position: 68.5725082211804
                },
                {
                    level: "EXTREME",
                    type: "SIZE",
                    name: "L|SS",
                    position: 68.5725082211804
                },
                {
                    level: "INSANE",
                    type: "INA",
                    name: "485.5°809",
                    position: 68.22505616936851
                }
            ],
            [
                {
                    level: "MEDIUM",
                    type: "SIZE",
                    name: "L|SS",
                    position: 68.5725082211804
                },
                {
                    level: "HIGH",
                    type: "SIZE",
                    name: "L|SS",
                    position: 68.5725082211804
                },
                {
                    level: "ULTRA",
                    type: "SIZE",
                    name: "L|SS",
                    position: 68.5725082211804
                },
                {
                    level: "EXTREME",
                    type: "SIZE",
                    name: "L|SS",
                    position: 68.5725082211804
                },
                {
                    level: "INSANE",
                    type: "INA",
                    name: "486.5°809",
                    position: 68.36558151678226
                }
            ],
            [
                {
                    level: "MEDIUM",
                    type: "SIZE",
                    name: "L|SS",
                    position: 68.5725082211804
                },
                {
                    level: "HIGH",
                    type: "SIZE",
                    name: "L|SS",
                    position: 68.5725082211804
                },
                {
                    level: "ULTRA",
                    type: "SIZE",
                    name: "L|SS",
                    position: 68.5725082211804
                },
                {
                    level: "EXTREME",
                    type: "SIZE",
                    name: "L|SS",
                    position: 68.5725082211804
                },
                {
                    level: "INSANE",
                    type: "INA",
                    name: "487.5°809",
                    position: 68.50610686419598
                }
            ],
            [
                {
                    level: "MEDIUM",
                    type: "SIZE",
                    name: "L|SS",
                    position: 68.5725082211804
                },
                {
                    level: "HIGH",
                    type: "SIZE",
                    name: "L|SS",
                    position: 68.5725082211804
                },
                {
                    level: "ULTRA",
                    type: "SIZE",
                    name: "L|SS",
                    position: 68.5725082211804
                },
                {
                    level: "EXTREME",
                    type: "SIZE",
                    name: "L|SS",
                    position: 68.5725082211804
                },
                {
                    level: "INSANE",
                    type: "SIZE",
                    name: "L|SS",
                    position: 68.5725082211804
                }
            ]
        ]))
    })
})
