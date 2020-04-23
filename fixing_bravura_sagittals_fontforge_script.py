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
#	0,	16,	31,	47,	62,	78,	94,	109,	125,	141,	156,	172,	188,	203,	219,	234,
#	250,	266,	281,	297,	312,	328,	344,	359,	375,	391,	406,	422,	438,	453,	469,	484,
#	500,	516,	531,	547,	562,	578,	594,	609,	625,	641,	656,	672,	688,	703,	719,	734,
#	750,	766,	781,	797,	812,	828,	844,	859,	875,	891,	906,	922,	938,	953,	969,	984,
#	1000	]

# Utilities

def find_nearest(lst, K):
    return lst[min(range(len(lst)), key = lambda i: abs(lst[i]-K))]

def snap_glyph_to_wonky_grid(glyph, layer):
	glyph.activeLayer = layer
	contours = glyph.layers[layer]
	pen = glyph.glyphPen()

	for contour in contours:
		snapped_contour = contour.dup()
		for point in snapped_contour.__iter__():
			snap_point(point)

		snapped_contour.draw(pen)

	pen = None

def snap_point(point):
	nearest_x = find_nearest(wonky_sagittal_grid_positions_in_ps_fu, point.x)
	diff_x = abs(nearest_x - point.x)
	if diff_x <= 1 and diff_x > 0:
		print("snapping x; ", [point.x, point.y], "goes to", [nearest_x, point.y])
		transformation_matrix = psMat.translate(nearest_x - point.x, 0)
		point.transform(transformation_matrix)

	nearest_y = find_nearest(wonky_sagittal_grid_positions_in_ps_fu, point.y)
	diff_y = abs(nearest_y - point.y)
	if diff_y <= 1 and diff_y > 0:
		print("snapping y; ", [point.x, point.y], "goes to", [point.x, nearest_y])
		transformation_matrix = psMat.translate(0, nearest_y - point.y)
		point.transform(transformation_matrix)

def replace_downward_glyph_with_mirrored_snapped_upward_glyph(glyph, downward_version_of_glyph, layer):
	downward_version_of_glyph.activeLayer = layer
	contours = glyph.layers[layer]
	pen = downward_version_of_glyph.glyphPen()

	for contour in contours:
		downward_contour = contour.dup()
		for point in downward_contour.__iter__():
			point.y = -point.y

		downward_contour.draw(pen)

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
sagittal_unicode_range_end = 0xe40c
skip_every_other = 2

for unicode in range(sagittal_unicode_range_start, sagittal_unicode_range_end, skip_every_other):
	try:
		glyph = bravura[unicode]
	except TypeError:
		continue # skip empty code point
	print(hex(unicode))

	snap_glyph_to_wonky_grid(glyph, "Fore")
	snap_glyph_to_wonky_grid(glyph, "Back")

	fix_side_bearing(glyph, unicode)

	downward_version_of_glyph_unicode = unicode + 1
	downward_version_of_glyph = bravura[downward_version_of_glyph_unicode]
	replace_downward_glyph_with_mirrored_snapped_upward_glyph(glyph, downward_version_of_glyph, "Fore")
	replace_downward_glyph_with_mirrored_snapped_upward_glyph(glyph, downward_version_of_glyph, "Back")

	fix_side_bearing(downward_version_of_glyph, downward_version_of_glyph_unicode)


for unicode in [0xe284, 0xe285, 0xe47b, 0xe47c, 0xe47d]: # sagittal_compatibles
	glyph = bravura[unicode]
	print(hex(unicode))
	snap_glyph_to_wonky_grid(glyph, "Fore")
	snap_glyph_to_wonky_grid(glyph, "Back")
	fix_side_bearing(glyph, unicode)


# Add kerning between diacritics and symbols

glyphs_to_kern_with = ['uniE3EA', 'uniE3E8', 'uniE3CE', 'uniE3CC', 'uniE3C2', 'uniE3BA', 'uniE3B8',
'uniE39E', 'uniE39C', 'uniE392', 'uniE386', 'uniE382', 'uniE380', 'uniE37A', 'uniE374', 'uniE362',
'uniE35E', 'uniE356', 'uniE34E', 'uniE34A', 'uniE342', 'uniE334', 'uniE332', 'uniE330', 'uniE32E',
'uniE326', 'uniE324', 'uniE31E', 'uniE318', 'uniE316', 'uniE30A', 'uniE308', 'uniE302']

sagittal_diacritic_unicode_range_start = 0xe3f2
sagittal_unicode_range_end = 0xe40c

table = "'kern' Horizontal Kerning lookup 0 subtable"

for unicode in range(sagittal_diacritic_unicode_range_start, sagittal_unicode_range_end):
	diacritic_glyph = bravura[unicode]
	print(hex(unicode))
	for kerning_glyph in glyphs_to_kern_with:
		diacritic_glyph.addPosSub(table, kerning_glyph, 0, 0, -62, 0, 0, 0, 0, 0)


# Add kerning between half-tinas and other tina diacritics (and minas)

upward_half_tina_glyph = bravura[0xe40a]
upward_tina_glyphs_to_kern_with = ['uniE3F4', 'uniE3F6', 'uniE3F8', 'uniE3FA',
'uniE3FC', 'uniE3FE', 'uniE400', 'uniE402', 'uniE404', 'uniE406', 'uniE408']
for upward_tina_glyph in upward_tina_glyphs_to_kern_with:
	upward_half_tina_glyph.addPosSub(table, upward_tina_glyph, 0, 0, -30, 0, 0, 0, 0, 0)

downward_half_tina_glyph = bravura[0xe40b]
downward_tina_glyphs_to_kern_with = ['uniE3F5', 'uniE3F7', 'uniE3F9', 'uniE3FB',
'uniE3FD', 'uniE3FF', 'uniE401', 'uniE403', 'uniE405', 'uniE407', 'uniE409']
for downward_tina_glyph in downward_tina_glyphs_to_kern_with:
	downward_half_tina_glyph.addPosSub(table, downward_tina_glyph, 0, 0, -30, 0, 0, 0, 0, 0)


bravura.save()
