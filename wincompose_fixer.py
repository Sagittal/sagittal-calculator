import os

seen_sequences = []

with open('wincompose.txt', encoding='utf8') as file:
	line = file.readline()
	line_number = 1
	while line:
		sequence = line.split(':')[0].strip()

		line_number += 1
		line = file.readline()

		if len(sequence) == 0 or sequence[0] == '#':
			continue

		seen_sequences.append(sequence)

os.rename('wincompose.txt', '~wincompose.txt')
destination = open('wincompose.txt', "w", encoding='utf8')
source = open("~wincompose.txt", encoding='utf8')

for line in source:
	sequence = line.split(':')[0].strip()

	if len(sequence) == 0 or sequence[0] == '#':
		destination.write(line)
		continue

	fixed_sequence = None
	for seen_sequence in seen_sequences:
		if sequence != seen_sequence and sequence in seen_sequence:
			fixed_sequence = sequence + " <space>"
			fixed_line = line.replace(sequence + "	", fixed_sequence)
			destination.write(fixed_line)
			print("problem fixed between", sequence, "and", seen_sequence)
			break

	if fixed_sequence is None:
		destination.write(line)

source.close()
destination.close()
