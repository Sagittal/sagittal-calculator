bravura = fontforge.open("C:/Users/DouglasBlumeyer/Desktop/BravuraSagittalUpdate.sfd")
source_glyph = bravura[0xe3f3]
print(source_glyph.getPosSub("'kern' Horizontal Kerning lookup 0 subtable"))
