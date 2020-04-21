import fontforge, psMat

# Calculate the wonky Sagittal grid positions in PostScript font-units

# tt = TrueType
# ps = PostScript
# fu = font-unit

tt_fu_per_em = 2048
ps_fu_per_em = 1000
tt_to_ps_fu_conversion_factor = ps_fu_per_em / tt_fu_per_em # 0.48828125

sagittal_grid_spacing_in_tt_fu = 32

sagittal_grid_step_count = tt_fu_per_em // sagittal_grid_spacing_in_tt_fu # 64
inclusive = 1
grid_range = range(-sagittal_grid_step_count, sagittal_grid_step_count + inclusive)

ideal_sagittal_grid_spacing_in_ps_fu = sagittal_grid_spacing_in_tt_fu * tt_to_ps_fu_conversion_factor # 15.625

def round_ideal_to_real(grid_step):
	return round(grid_step * ideal_sagittal_grid_spacing_in_ps_fu)

wonky_sagittal_grid_positions_in_ps_fu = list(map(round_ideal_to_real, grid_range))

#[	-1000,	-984,	-969,	-953,	-938,	-922,	-906,	-891,	-875,	-859,	-844,	-828,	-812,	-797,	-781,	-766,
#	-750,	-734,	-719,	-703,	-688,	-672,	-656,	-641,	-625,	-609,	-594,	-578,	-562,	-547,	-531,	-516,
#	-500,	-484,	-469,	-453,	-438,	-422,	-406,	-391,	-375,	-359,	-344,	-328,	-312,	-297,	-281,	-266,
#	-250,	-234,	-219,	-203,	-188,	-172,	-156,	-141,	-125,	-109,	-94,	-78,	-62,	-47,	-31,	-16,
#	0,		16,		31,		47,		62,		78,		94,		109,	125,	141,	156,	172,	188,	203,	219,	234,
#	250,	266,	281,	297,	312,	328,	344,	359,	375,	391,	406,	422,	438,	453,	469,	484,
#	500,	516,	531,	547,	562,	578,	594,	609,	625,	641,	656,	672,	688,	703,	719,	734,
#	750,	766,	781,	797,	812,	828,	844,	859,	875,	891,	906,	922,	938,	953,	969,	984,
#	1000	]

# Utilities

def find_nearest(lst, K):
    return lst[min(range(len(lst)), key = lambda i: abs(lst[i]-K))]

def snap_upwards_glyph_to_wonky_grid(glyph):
	contours = glyph.layers["Fore"]
	pen = glyph.glyphPen()

	for contour in contours:
		# print(contour)
		snapped_contour = contour.dup()

		for point in snapped_contour.__iter__():
			snap_point(point)

		snapped_contour.draw(pen)

	pen = None

def snap_point(point):
	nearest_x = find_nearest(wonky_sagittal_grid_positions_in_ps_fu, point.x)
	if (abs(nearest_x - point.x) == 1):
		print("snapping x; ", [point.x, point.y], "goes to", [nearest_x, point.y])
		transformation_matrix = psMat.translate(nearest_x - point.x, 0)
		point.transform(transformation_matrix)

	nearest_y = find_nearest(wonky_sagittal_grid_positions_in_ps_fu, point.y)
	if (abs(nearest_y - point.y) == 1):
		print("snapping y; ", [point.x, point.y], "goes to", [point.x, nearest_y])
		transformation_matrix = psMat.translate(0, nearest_y - point.y)
		point.transform(transformation_matrix)

def replace_downwards_glyph_with_mirrored_snapped_upwards_glyph(glyph, inverted_version_of_glyph):
	pen = inverted_version_of_glyph.glyphPen()

	contours = glyph.layers["Fore"]
	for contour in contours:
		inverted_contour = contour.dup()
		for point in inverted_contour.__iter__():
			point.y = -point.y

		inverted_contour.draw(pen)

	pen = None

def fix_side_bearing(glyph, unicode):
	glyph.condenseExtend(1, 0, 0, 0)  # remove existing side-bearing
	if unicode >= 0xe3f2: # diacritics
		glyph.right_side_bearing = 62 # 1/16 em
	else:
		glyph.right_side_bearing = 0

# Fix up the font!

bravura = fontforge.open("C:/Users/DouglasBlumeyer/Desktop/BravuraSagittalUpdate.sfd")

sagittal_unicode_range_start = 0xe300
sagittal_unicode_range_end = 0xe41e
skip_every_other = 2

for unicode in range(sagittal_unicode_range_start, sagittal_unicode_range_end, skip_every_other):
	try:
		glyph = bravura[unicode]
	except TypeError:
		continue # skip empty code point
	print(hex(unicode))

	snap_upwards_glyph_to_wonky_grid(glyph)

	fix_side_bearing(glyph, unicode)

	next_unicode = unicode + 1
	inverted_version_of_glyph = bravura[next_unicode]
	replace_downwards_glyph_with_mirrored_snapped_upwards_glyph(glyph, inverted_version_of_glyph)

	fix_side_bearing(inverted_version_of_glyph, next_unicode)


bravura.save()


# 0xe300
# snapping y;  [0.0, -360.0] goes to [0.0, -359]
# snapping y;  [0.0, 171.0] goes to [0.0, 172]
# snapping x;  [15.0, 171.0] goes to [16, 171.0]
# snapping y;  [16.0, 171.0] goes to [16.0, 172]
# snapping y;  [31.0, -360.0] goes to [31.0, -359]
# 0xe302
# 0xe304
# 0xe306
# snapping y;  [219.0, 93.0] goes to [219.0, 94]
# snapping y;  [219.0, -63.0] goes to [219.0, -62]
# 0xe308
# snapping x;  [187.0, 78.0] goes to [188, 78.0]
# 0xe30a
# snapping y;  [0.0, -63.0] goes to [0.0, -62]
# snapping y;  [344.0, -63.0] goes to [344.0, -62]
# snapping x;  [187.0, 37.0] goes to [188, 37.0]
# snapping x;  [187.0, -359.0] goes to [188, -359.0]
# 0xe30c
# snapping x;  [187.0, 78.0] goes to [188, 78.0]
# snapping x;  [187.0, -359.0] goes to [188, -359.0]
# 0xe30e
# snapping x;  [187.0, 40.0] goes to [188, 40.0]
# snapping x;  [187.0, -359.0] goes to [188, -359.0]
# 0xe310
# snapping x;  [-1.0, 47.0] goes to [0, 47.0]
# snapping x;  [30.0, 47.0] goes to [31, 47.0]
# snapping x;  [171.0, 171.0] goes to [172, 171.0]
# snapping y;  [172.0, 171.0] goes to [172.0, 172]
# snapping y;  [250.0, -77.0] goes to [250.0, -78]
# snapping x;  [218.0, -359.0] goes to [219, -359.0]
# snapping x;  [218.0, -61.0] goes to [219, -61.0]
# snapping y;  [219.0, -61.0] goes to [219.0, -62]
# snapping x;  [171.0, 18.0] goes to [172, 18.0]
# snapping x;  [124.0, -61.0] goes to [125, -61.0]
# snapping y;  [125.0, -61.0] goes to [125.0, -62]
# snapping x;  [124.0, -359.0] goes to [125, -359.0]
# snapping x;  [93.0, -359.0] goes to [94, -359.0]
# snapping x;  [93.0, -77.0] goes to [94, -77.0]
# snapping y;  [94.0, -77.0] goes to [94.0, -78]
# snapping x;  [77.0, -78.0] goes to [78, -78.0]
# 0xe312
# snapping y;  [156.0, 61.0] goes to [156.0, 62]
# 0xe314
# 0xe316
# snapping y;  [344.0, -171.0] goes to [344.0, -172]
# snapping y;  [312.0, -171.0] goes to [312.0, -172]
# snapping y;  [312.0, -46.0] goes to [312.0, -47]
# snapping y;  [219.0, 79.0] goes to [219.0, 78]
# snapping x;  [187.0, 79.0] goes to [188, 79.0]
# snapping y;  [188.0, 79.0] goes to [188.0, 78]
# 0xe318
# snapping y;  [250.0, 1.0] goes to [250.0, 0]
# snapping y;  [156.0, 1.0] goes to [156.0, 0]
# 0xe31c
# snapping y;  [31.0, -360.0] goes to [31.0, -359]
# snapping y;  [0.0, -360.0] goes to [0.0, -359]
# snapping y;  [0.0, 171.0] goes to [0.0, 172]
# snapping y;  [16.0, 171.0] goes to [16.0, 172]
# snapping y;  [281.0, 46.0] goes to [281.0, 47]
# snapping y;  [312.0, 46.0] goes to [312.0, 47]
# snapping x;  [187.0, -359.0] goes to [188, -359.0]
# snapping x;  [187.0, -78.0] goes to [188, -78.0]
# 0xe31e
# snapping x;  [187.0, -359.0] goes to [188, -359.0]
# snapping x;  [187.0, -27.0] goes to [188, -27.0]
# 0xe320
# snapping x;  [187.0, -359.0] goes to [188, -359.0]
# snapping x;  [187.0, 63.0] goes to [188, 63.0]
# snapping y;  [188.0, 63.0] goes to [188.0, 62]
# 0xe322
# snapping x;  [187.0, -112.0] goes to [188, -112.0]
# snapping x;  [187.0, -359.0] goes to [188, -359.0]
# 0xe324
# snapping x;  [187.0, -359.0] goes to [188, -359.0]
# snapping x;  [187.0, 40.0] goes to [188, 40.0]
# 0xe326
# 0xe328
# snapping x;  [437.0, -172.0] goes to [438, -172.0]
# snapping x;  [437.0, -47.0] goes to [438, -47.0]
# snapping y;  [312.0, 77.0] goes to [312.0, 78]
# snapping x;  [187.0, 78.0] goes to [188, 78.0]
# snapping y;  [156.0, 77.0] goes to [156.0, 78]
# 0xe32a
# snapping x;  [187.0, 78.0] goes to [188, 78.0]
# snapping y;  [156.0, 77.0] goes to [156.0, 78]
# 0xe32c
# snapping x;  [1.0, 47.0] goes to [0, 47.0]
# snapping x;  [32.0, 47.0] goes to [31, 47.0]
# snapping x;  [77.0, -3.0] goes to [78, -3.0]
# snapping x;  [204.0, 171.0] goes to [203, 171.0]
# snapping y;  [203.0, 171.0] goes to [203.0, 172]
# snapping x;  [204.0, -57.0] goes to [203, -57.0]
# snapping x;  [63.0, -349.0] goes to [62, -349.0]
# snapping x;  [95.0, -78.0] goes to [94, -78.0]
# 0xe32e
# snapping x;  [187.0, 75.0] goes to [188, 75.0]
# 0xe330
# snapping y;  [105.0, 46.0] goes to [105.0, 47]
# 0xe332
# 0xe334
# snapping y;  [205.0, 30.0] goes to [205.0, 31]
# snapping y;  [264.0, 30.0] goes to [264.0, 31]
# 0xe340
# snapping x;  [46.0, -78.0] goes to [47, -78.0]
# snapping x;  [-1.0, 47.0] goes to [0, 47.0]
# snapping x;  [30.0, 47.0] goes to [31, 47.0]
# snapping y;  [109.0, 171.0] goes to [109.0, 172]
# snapping x;  [187.0, 47.0] goes to [188, 47.0]
# snapping x;  [124.0, -359.0] goes to [125, -359.0]
# snapping x;  [93.0, -359.0] goes to [94, -359.0]
# snapping x;  [93.0, -31.0] goes to [94, -31.0]
# 0xe342
# 0xe344
# 0xe346
# snapping x;  [187.0, 172.0] goes to [188, 172.0]
# snapping x;  [187.0, -359.0] goes to [188, -359.0]
# 0xe348
# snapping x;  [93.0, 172.0] goes to [94, 172.0]
# snapping x;  [171.0, 172.0] goes to [172, 172.0]
# snapping x;  [187.0, -28.0] goes to [188, -28.0]
# snapping x;  [187.0, -359.0] goes to [188, -359.0]
# 0xe34a
# snapping y;  [31.0, -142.0] goes to [31.0, -141]
# snapping y;  [0.0, -142.0] goes to [0.0, -141]
# snapping y;  [62.0, 46.0] goes to [62.0, 47]
# snapping y;  [109.0, 46.0] goes to [109.0, 47]
# snapping x;  [171.0, 171.0] goes to [172, 171.0]
# snapping y;  [172.0, 171.0] goes to [172.0, 172]
# snapping y;  [250.0, -77.0] goes to [250.0, -78]
# snapping x;  [218.0, -360.0] goes to [219, -360.0]
# snapping y;  [219.0, -360.0] goes to [219.0, -359]
# snapping x;  [218.0, -61.0] goes to [219, -61.0]
# snapping y;  [219.0, -61.0] goes to [219.0, -62]
# snapping y;  [125.0, -360.0] goes to [125.0, -359]
# snapping x;  [93.0, -360.0] goes to [94, -360.0]
# snapping y;  [94.0, -360.0] goes to [94.0, -359]
# snapping x;  [93.0, -16.0] goes to [94, -16.0]
# 0xe34c
# snapping x;  [187.0, -359.0] goes to [188, -359.0]
# snapping x;  [187.0, -16.0] goes to [188, -16.0]
# snapping x;  [93.0, -66.0] goes to [94, -66.0]
# snapping x;  [93.0, -359.0] goes to [94, -359.0]
# 0xe34e
# snapping y;  [0.0, -187.0] goes to [0.0, -188]
# 0xe350
# snapping y;  [125.0, 171.0] goes to [125.0, 172]
# snapping y;  [203.0, 171.0] goes to [203.0, 172]
# snapping x;  [282.0, -77.0] goes to [281, -77.0]
# snapping y;  [281.0, -77.0] goes to [281.0, -78]
# snapping x;  [282.0, -359.0] goes to [281, -359.0]
# snapping y;  [250.0, -61.0] goes to [250.0, -62]
# snapping x;  [187.0, 78.0] goes to [188, 78.0]
# 0xe352
# snapping x;  [187.0, -100.0] goes to [188, -100.0]
# snapping x;  [187.0, -359.0] goes to [188, -359.0]
# 0xe354
# snapping x;  [95.0, -78.0] goes to [94, -78.0]
# snapping x;  [1.0, 47.0] goes to [0, 47.0]
# snapping x;  [32.0, 47.0] goes to [31, 47.0]
# snapping x;  [77.0, -3.0] goes to [78, -3.0]
# snapping x;  [204.0, 171.0] goes to [203, 171.0]
# snapping y;  [203.0, 171.0] goes to [203.0, 172]
# snapping y;  [219.0, -15.0] goes to [219.0, -16]
# snapping x;  [187.0, -359.0] goes to [188, -359.0]
# snapping x;  [187.0, -15.0] goes to [188, -15.0]
# snapping y;  [188.0, -15.0] goes to [188.0, -16]
# snapping x;  [126.0, -73.0] goes to [125, -73.0]
# snapping x;  [126.0, -359.0] goes to [125, -359.0]
# snapping x;  [95.0, -359.0] goes to [94, -359.0]
# 0xe356
# snapping y;  [219.0, -15.0] goes to [219.0, -16]
# snapping x;  [187.0, -359.0] goes to [188, -359.0]
# snapping x;  [187.0, 10.0] goes to [188, 10.0]
# 0xe358
# snapping x;  [187.0, -359.0] goes to [188, -359.0]
# snapping x;  [187.0, -64.0] goes to [188, -64.0]
# snapping y;  [125.0, -17.0] goes to [125.0, -16]
# 0xe35a
# snapping x;  [313.0, -359.0] goes to [312, -359.0]
# snapping x;  [313.0, 79.0] goes to [312, 79.0]
# snapping y;  [312.0, 79.0] goes to [312.0, 78]
# snapping x;  [282.0, 79.0] goes to [281, 79.0]
# snapping y;  [281.0, 79.0] goes to [281.0, 78]
# 0xe35c
# snapping x;  [157.0, 171.0] goes to [156, 171.0]
# snapping y;  [156.0, 171.0] goes to [156.0, 172]
# snapping x;  [235.0, 171.0] goes to [234, 171.0]
# snapping y;  [234.0, 171.0] goes to [234.0, 172]
# snapping x;  [437.0, 47.0] goes to [438, 47.0]
# snapping y;  [250.0, -15.0] goes to [250.0, -16]
# snapping x;  [187.0, 78.0] goes to [188, 78.0]
# snapping y;  [156.0, 77.0] goes to [156.0, 78]
# 0xe35e
# 0xe360
# snapping x;  [171.0, -56.0] goes to [172, -56.0]
# 0xe362
# 0xe364
# snapping x;  [157.0, 171.0] goes to [156, 171.0]
# snapping y;  [156.0, 171.0] goes to [156.0, 172]
# snapping x;  [235.0, 171.0] goes to [234, 171.0]
# snapping y;  [234.0, 171.0] goes to [234.0, 172]
# snapping x;  [437.0, 47.0] goes to [438, 47.0]
# snapping x;  [187.0, 78.0] goes to [188, 78.0]
# 0xe366
# snapping x;  [437.0, -349.0] goes to [438, -349.0]
# snapping y;  [245.0, -93.0] goes to [245.0, -94]
# snapping y;  [272.0, -15.0] goes to [272.0, -16]
# 0xe370
# snapping x;  [187.0, -141.0] goes to [188, -141.0]
# 0xe372
# 0xe374
# snapping x;  [187.0, 47.0] goes to [188, 47.0]
# 0xe376
# 0xe378
# snapping y;  [0.0, 48.0] goes to [0.0, 47]
# snapping y;  [31.0, 48.0] goes to [31.0, 47]
# snapping y;  [70.0, 1.0] goes to [70.0, 0]
# snapping y;  [312.0, -171.0] goes to [312.0, -172]
# snapping y;  [281.0, -171.0] goes to [281.0, -172]
# snapping y;  [281.0, -46.0] goes to [281.0, -47]
# snapping x;  [187.0, -358.0] goes to [188, -358.0]
# snapping y;  [188.0, -358.0] goes to [188.0, -359]
# snapping x;  [187.0, 79.0] goes to [188, 79.0]
# snapping y;  [188.0, 79.0] goes to [188.0, 78]
# snapping y;  [156.0, 79.0] goes to [156.0, 78]
# snapping x;  [93.0, -66.0] goes to [94, -66.0]
# snapping x;  [93.0, -358.0] goes to [94, -358.0]
# snapping y;  [94.0, -358.0] goes to [94.0, -359]
# snapping y;  [62.0, -358.0] goes to [62.0, -359]
# snapping y;  [62.0, -77.0] goes to [62.0, -78]
# 0xe37a
# 0xe37c
# snapping x;  [187.0, -359.0] goes to [188, -359.0]
# snapping x;  [187.0, -16.0] goes to [188, -16.0]
# 0xe37e
# snapping x;  [77.0, -14.0] goes to [78, -14.0]
# snapping x;  [32.0, 109.0] goes to [31, 109.0]
# snapping x;  [282.0, -359.0] goes to [281, -359.0]
# snapping x;  [282.0, 52.0] goes to [281, 52.0]
# 0xe380
# snapping x;  [187.0, -359.0] goes to [188, -359.0]
# snapping x;  [187.0, 40.0] goes to [188, 40.0]
# 0xe382
# 0xe384
# snapping y;  [375.0, -171.0] goes to [375.0, -172]
# snapping x;  [343.0, -171.0] goes to [344, -171.0]
# snapping y;  [344.0, -171.0] goes to [344.0, -172]
# snapping x;  [343.0, -46.0] goes to [344, -46.0]
# snapping y;  [344.0, -46.0] goes to [344.0, -47]
# snapping x;  [218.0, 79.0] goes to [219, 79.0]
# snapping y;  [219.0, 79.0] goes to [219.0, 78]
# snapping x;  [171.0, -56.0] goes to [172, -56.0]
# 0xe386
# 0xe390
# snapping x;  [46.0, -78.0] goes to [47, -78.0]
# snapping x;  [46.0, -2.0] goes to [47, -2.0]
# snapping x;  [93.0, -359.0] goes to [94, -359.0]
# snapping x;  [93.0, -30.0] goes to [94, -30.0]
# snapping y;  [94.0, -30.0] goes to [94.0, -31]
# 0xe392
# 0xe394
# 0xe396
# snapping x;  [32.0, -203.0] goes to [31, -203.0]
# snapping x;  [157.0, -25.0] goes to [156, -25.0]
# snapping x;  [157.0, 58.0] goes to [156, 58.0]
# snapping x;  [187.0, 172.0] goes to [188, 172.0]
# snapping x;  [187.0, -359.0] goes to [188, -359.0]
# snapping x;  [157.0, -359.0] goes to [156, -359.0]
# snapping x;  [157.0, -99.0] goes to [156, -99.0]
# snapping x;  [63.0, -109.0] goes to [62, -109.0]
# 0xe398
# snapping x;  [46.0, -2.0] goes to [47, -2.0]
# snapping x;  [46.0, -78.0] goes to [47, -78.0]
# 0xe39a
# snapping x;  [46.0, -2.0] goes to [47, -2.0]
# snapping x;  [187.0, 172.0] goes to [188, 172.0]
# snapping x;  [46.0, -78.0] goes to [47, -78.0]
# 0xe39c
# snapping x;  [187.0, 78.0] goes to [188, 78.0]
# 0xe39e
# 0xe3a0
# snapping y;  [219.0, 93.0] goes to [219.0, 94]
# snapping y;  [219.0, -63.0] goes to [219.0, -62]
# 0xe3a2
# snapping x;  [187.0, -3.0] goes to [188, -3.0]
# snapping x;  [187.0, -359.0] goes to [188, -359.0]
# 0xe3a4
# 0xe3a6
# snapping y;  [344.0, -63.0] goes to [344.0, -62]
# snapping x;  [187.0, 37.0] goes to [188, 37.0]
# snapping x;  [187.0, -359.0] goes to [188, -359.0]
# snapping y;  [0.0, -171.0] goes to [0.0, -172]
# 0xe3a8
# snapping y;  [31.0, -63.0] goes to [31.0, -62]
# 0xe3aa
# 0xe3ac
# snapping x;  [437.0, 47.0] goes to [438, 47.0]
# snapping x;  [437.0, -21.0] goes to [438, -21.0]
# snapping x;  [437.0, -109.0] goes to [438, -109.0]
# snapping x;  [437.0, -178.0] goes to [438, -178.0]
# 0xe3b0
# snapping y;  [219.0, -360.0] goes to [219.0, -359]
# snapping x;  [187.0, -16.0] goes to [188, -16.0]
# snapping y;  [125.0, -360.0] goes to [125.0, -359]
# snapping y;  [94.0, -360.0] goes to [94.0, -359]
# 0xe3b2
# snapping x;  [-1.0, -203.0] goes to [0, -203.0]
# snapping x;  [171.0, -47.0] goes to [172, -47.0]
# snapping x;  [218.0, -22.0] goes to [219, -22.0]
# snapping x;  [218.0, 62.0] goes to [219, 62.0]
# snapping x;  [187.0, 47.0] goes to [188, 47.0]
# snapping x;  [171.0, 109.0] goes to [172, 109.0]
# snapping x;  [218.0, -359.0] goes to [219, -359.0]
# snapping x;  [218.0, -94.0] goes to [219, -94.0]
# snapping x;  [187.0, -109.0] goes to [188, -109.0]
# snapping x;  [93.0, -359.0] goes to [94, -359.0]
# snapping x;  [93.0, -109.0] goes to [94, -109.0]
# snapping x;  [77.0, -109.0] goes to [78, -109.0]
# snapping x;  [30.0, -203.0] goes to [31, -203.0]
# 0xe3b4
# snapping x;  [61.0, -14.0] goes to [62, -14.0]
# snapping y;  [0.0, -187.0] goes to [0.0, -188]
# 0xe3b6
# snapping x;  [282.0, 172.0] goes to [281, 172.0]
# snapping x;  [282.0, -359.0] goes to [281, -359.0]
# 0xe3b8
# snapping y;  [344.0, -171.0] goes to [344.0, -172]
# snapping y;  [312.0, -171.0] goes to [312.0, -172]
# snapping y;  [312.0, -46.0] goes to [312.0, -47]
# snapping y;  [219.0, 79.0] goes to [219.0, 78]
# snapping x;  [187.0, 79.0] goes to [188, 79.0]
# snapping y;  [188.0, 79.0] goes to [188.0, 78]
# snapping y;  [125.0, -15.0] goes to [125.0, -16]
# snapping y;  [94.0, -15.0] goes to [94.0, -16]
# snapping y;  [78.0, -15.0] goes to [78.0, -16]
# 0xe3ba
# 0xe3bc
# snapping x;  [187.0, -100.0] goes to [188, -100.0]
# snapping x;  [187.0, -359.0] goes to [188, -359.0]
# 0xe3be
# snapping x;  [187.0, 78.0] goes to [188, 78.0]
# 0xe3c0
# snapping x;  [187.0, -65.0] goes to [188, -65.0]
# snapping x;  [187.0, -359.0] goes to [188, -359.0]
# snapping x;  [93.0, -75.0] goes to [94, -75.0]
# snapping x;  [93.0, -359.0] goes to [94, -359.0]
# 0xe3c2
# snapping x;  [187.0, -359.0] goes to [188, -359.0]
# snapping x;  [187.0, -16.0] goes to [188, -16.0]
# 0xe3c4
# snapping y;  [31.0, -140.0] goes to [31.0, -141]
# snapping y;  [0.0, -140.0] goes to [0.0, -141]
# snapping x;  [46.0, 37.0] goes to [47, 37.0]
# snapping y;  [234.0, -15.0] goes to [234.0, -16]
# snapping y;  [219.0, -15.0] goes to [219.0, -16]
# snapping x;  [187.0, -359.0] goes to [188, -359.0]
# snapping x;  [187.0, -15.0] goes to [188, -15.0]
# snapping y;  [188.0, -15.0] goes to [188.0, -16]
# snapping y;  [125.0, -15.0] goes to [125.0, -16]
# snapping y;  [94.0, -15.0] goes to [94.0, -16]
# 0xe3c6
# snapping x;  [32.0, -47.0] goes to [31, -47.0]
# snapping x;  [79.0, 109.0] goes to [78, 109.0]
# snapping x;  [187.0, -359.0] goes to [188, -359.0]
# snapping x;  [187.0, -109.0] goes to [188, -109.0]
# snapping x;  [282.0, -19.0] goes to [281, -19.0]
# snapping x;  [282.0, 66.0] goes to [281, 66.0]
# snapping x;  [235.0, 47.0] goes to [234, 47.0]
# 0xe3c8
# snapping y;  [281.0, -15.0] goes to [281.0, -16]
# snapping y;  [250.0, -15.0] goes to [250.0, -16]
# snapping y;  [234.0, -15.0] goes to [234.0, -16]
# snapping x;  [187.0, 10.0] goes to [188, 10.0]
# snapping x;  [187.0, -359.0] goes to [188, -359.0]
# snapping x;  [93.0, -76.0] goes to [94, -76.0]
# snapping x;  [93.0, -359.0] goes to [94, -359.0]
# 0xe3ca
# snapping y;  [375.0, -171.0] goes to [375.0, -172]
# snapping y;  [344.0, -171.0] goes to [344.0, -172]
# snapping y;  [344.0, -46.0] goes to [344.0, -47]
# snapping y;  [219.0, 79.0] goes to [219.0, 78]
# snapping x;  [187.0, 79.0] goes to [188, 79.0]
# snapping y;  [188.0, 79.0] goes to [188.0, 78]
# snapping x;  [187.0, -359.0] goes to [188, -359.0]
# snapping x;  [93.0, -76.0] goes to [94, -76.0]
# snapping x;  [93.0, -359.0] goes to [94, -359.0]
# 0xe3cc
# snapping x;  [187.0, -359.0] goes to [188, -359.0]
# snapping x;  [187.0, 10.0] goes to [188, 10.0]
# 0xe3ce
# snapping x;  [187.0, -359.0] goes to [188, -359.0]
# snapping x;  [187.0, 10.0] goes to [188, 10.0]
# 0xe3d0
# snapping x;  [343.0, 98.0] goes to [344, 98.0]
# snapping y;  [0.0, 46.0] goes to [0.0, 47]
# snapping x;  [187.0, -112.0] goes to [188, -112.0]
# snapping x;  [187.0, -359.0] goes to [188, -359.0]
# snapping y;  [156.0, -360.0] goes to [156.0, -359]
# snapping y;  [156.0, -124.0] goes to [156.0, -125]
# snapping y;  [0.0, -110.0] goes to [0.0, -109]
# snapping x;  [343.0, 10.0] goes to [344, 10.0]
# 0xe3d2
# snapping x;  [437.0, -141.0] goes to [438, -141.0]
# snapping x;  [187.0, 78.0] goes to [188, 78.0]
# snapping y;  [156.0, 77.0] goes to [156.0, 78]
# 0xe3d4
# snapping x;  [187.0, -115.0] goes to [188, -115.0]
# snapping x;  [187.0, -359.0] goes to [188, -359.0]
# snapping y;  [156.0, -126.0] goes to [156.0, -125]
# 0xe3d6
# snapping y;  [74.0, 1.0] goes to [74.0, 0]
# 0xe3d8
# snapping x;  [187.0, -359.0] goes to [188, -359.0]
# snapping x;  [187.0, -109.0] goes to [188, -109.0]
# 0xe3da
# snapping x;  [437.0, 47.0] goes to [438, 47.0]
# snapping x;  [437.0, -21.0] goes to [438, -21.0]
# snapping x;  [437.0, -109.0] goes to [438, -109.0]
# snapping x;  [437.0, -177.0] goes to [438, -177.0]
# snapping x;  [187.0, -359.0] goes to [188, -359.0]
# snapping x;  [187.0, -103.0] goes to [188, -103.0]
# 0xe3dc
# snapping x;  [187.0, 98.0] goes to [188, 98.0]
# snapping x;  [187.0, 10.0] goes to [188, 10.0]
# snapping x;  [187.0, -59.0] goes to [188, -59.0]
# snapping x;  [187.0, -359.0] goes to [188, -359.0]
# snapping x;  [93.0, -76.0] goes to [94, -76.0]
# snapping x;  [93.0, -359.0] goes to [94, -359.0]
# 0xe3e0
# snapping x;  [46.0, 37.0] goes to [47, 37.0]
# snapping x;  [95.0, -16.0] goes to [94, -16.0]
# 0xe3e2
# snapping x;  [1.0, -204.0] goes to [0, -204.0]
# snapping y;  [0.0, -204.0] goes to [0.0, -203]
# snapping x;  [63.0, -47.0] goes to [62, -47.0]
# snapping y;  [199.0, 46.0] goes to [199.0, 47]
# snapping x;  [95.0, 46.0] goes to [94, 46.0]
# snapping y;  [94.0, 46.0] goes to [94.0, 47]
# snapping x;  [32.0, -47.0] goes to [31, -47.0]
# snapping x;  [1.0, -47.0] goes to [0, -47.0]
# snapping x;  [79.0, 109.0] goes to [78, 109.0]
# snapping x;  [220.0, 109.0] goes to [219, 109.0]
# snapping y;  [297.0, 171.0] goes to [297.0, 172]
# snapping x;  [313.0, 171.0] goes to [312, 171.0]
# snapping y;  [312.0, 171.0] goes to [312.0, 172]
# snapping x;  [313.0, 109.0] goes to [312, 109.0]
# snapping y;  [275.0, 61.0] goes to [275.0, 62]
# snapping y;  [340.0, -360.0] goes to [340.0, -359]
# snapping x;  [235.0, -57.0] goes to [234, -57.0]
# snapping y;  [130.0, -360.0] goes to [130.0, -359]
# snapping x;  [95.0, -349.0] goes to [94, -349.0]
# snapping y;  [178.0, -110.0] goes to [178.0, -109]
# snapping x;  [79.0, -110.0] goes to [78, -110.0]
# snapping y;  [78.0, -110.0] goes to [78.0, -109]
# snapping x;  [32.0, -204.0] goes to [31, -204.0]
# snapping y;  [31.0, -204.0] goes to [31.0, -203]
# 0xe3e4
# snapping x;  [77.0, -14.0] goes to [78, -14.0]
# snapping x;  [32.0, 109.0] goes to [31, 109.0]
# 0xe3e6
# snapping x;  [220.0, 76.0] goes to [219, 76.0]
# 0xe3e8
# 0xe3ea
# 0xe3ec
# snapping x;  [437.0, -349.0] goes to [438, -349.0]
# snapping x;  [296.0, -57.0] goes to [297, -57.0]
# snapping y;  [245.0, -93.0] goes to [245.0, -94]
# snapping y;  [271.0, -15.0] goes to [271.0, -16]
# 0xe3ee
# snapping x;  [437.0, -141.0] goes to [438, -141.0]
# snapping x;  [187.0, 78.0] goes to [188, 78.0]
# 0xe3f0
# 0xe3f2
# snapping y;  [125.0, 63.0] goes to [125.0, 62]
