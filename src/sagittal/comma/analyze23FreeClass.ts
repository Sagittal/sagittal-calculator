// TODO: it might actually be better if analyzeJiPitch only found the twoThreeFreeClass
//  and then there was a separate twoThreeFreeClassAnalysis
//  which was the thing which had prime limit, sopfr, n2d3p9
//  although you'd better stay consistent with how analyzeSymbolClass works, 
//  where it automatically gets the analysis of the primaryComma
//  I'm not sure which way is better yet
//  but in any case this should take a TwoThreeFreeClass as its argument instead
//  - and another semi-unrelated thought -- perhaps all the stuff that's in sagittal/comma right now actually belongs in
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
