/*
let pointsCheckedCount = 0
for (let k = 0.4; k < 0.8; k += 0.05) {
    for (let a = 1.2; a < 1.4; a += 0.02) {
        for (let w = -5.0; w < -3.0; w += 0.2) {
            for (let x = -5.0; x < -3.0; x += 0.2) {
                for (let y = 0.85; y < 0.95; y += 0.01) {
                    for (let v = -5.0; v < -3.0; v += 0.2) {
                        for (let t = -5.0; t < -3.0; t += 0.2) {
                            const aIsBaseNotPowerPossibilities = [true, false]
                            aIsBaseNotPowerPossibilities.forEach(aIsBaseNotPower => {

                                // adjustments used in each prime content unpopularity submetric
                                const adjustments = {
                                    k: k,                               // diminuator coefficient
                                    a: a,                               // prime power or base
                                    aIsBaseNotPower: aIsBaseNotPower,   // use the prime power or base as a base, not a power
                                    w: w,                               // prime constant (after power or base)
                                    x: x,                               // prime constant (before power or base)
                                    y: y,                               // term power
                                    v: v,                               // term constant (before power)
                                    t: t,                               // term constant (after power)
                                }

                                tryWithTheseAdjustments(adjustments)
                            })
                        }
                    }
                }
            }
        }
    }
}
 */
