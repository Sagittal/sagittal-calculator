// TODO: and another semi-unrelated thought -- 
//  perhaps all the stuff that's in sagittal/comma right now actually belongs in
//  sagittal/notations/ji ?
//  or maybe it's just that one "analyzeJiPitch" module that's throwing me off
//  I mean I guess what caused me to start thinking about this is that if we have an analyze23FreeClass module
//  that would need to live in sagittal/ as well b/c it uses N2D3P9...
//  but then sagittal/comma has not only analyzeJiPitch but also analyze23FreeClass
//  which makes me start to wonder whether it's actually just sagittal/ji
//  but then why doesn't it just live in the notations/ji folder? 
//  I think it should NOT actually, and I think it has something to do with how Sagittal is rooted in JI always
//  like, the primary commas are per symbol class, and are still there even in the EDO notations, lurking
//  so maybe the folder should be sagittal/jiPitch, and then underneath we need comma/, twoThreeFreeClass/, and jiPitch/
//  and move each of the respective analyze methods into them
//  and then n2d3p9 should move under twoThreeFreeClass/, and usefulness under comma/, and apotomeSlope under jiPitch/
//  and find and name both go under comma/

import { computeJiPitchMonzo, computePrimeLimit, computeSopfr, Prime, Sopfr, TwoThreeFreeClass } from "../../general"
import { computeN2D3P9, N2D3P9 } from "./evaluation"
import { TwoThreeFreeClassAnalysis } from "./types"

const analyze23FreeClass = (twoThreeFreeClass: TwoThreeFreeClass): TwoThreeFreeClassAnalysis => {
    const primeLimit: Prime = computePrimeLimit(twoThreeFreeClass)

    const twoThreeFreeSopfr: Sopfr<{ rough: 5 }> = 
        computeSopfr(computeJiPitchMonzo(twoThreeFreeClass)) as Sopfr<{ rough: 5 }>
    const n2d3p9: N2D3P9 = computeN2D3P9(twoThreeFreeClass)

    return {
        ...twoThreeFreeClass,
        twoThreeFreePrimeLimit: primeLimit,
        twoThreeFreeSopfr,
        n2d3p9,
    }
}

export {
    analyze23FreeClass,
}
