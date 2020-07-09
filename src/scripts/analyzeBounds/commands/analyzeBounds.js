require('colors');
const {program} = require('commander');
const {BOUNDS} = require('../../../notations/ji/bounds');
const {computeHistories} = require('../plot/histories');
const {analyzeBound} = require('../bound');
const {BOUNDS_ANALYSIS_HEADER_ROW} = require('../present/headerRow');
const {presentBoundAnalysis} = require('../present/boundAnalysis');
const {presentRankAnalyses} = require('../present/rankAnalyses');
const {presentLevelAnalyses} = require('../present/levelAnalyses');
const {visualizeBounds} = require('../visualize/bounds');
const {updateFile} = require('../file');
const {BOUNDS_ANALYSIS_TEXT_FILE, BOUNDS_ANALYSIS_VISUALIZATION_FILE} = require('../constants');

program
  .option('-x, --do-not-update-files', 'do not update files')
  .parse(process.argv);

const shouldUpdateFiles = !program.doNotUpdateFiles;

let textOutput = BOUNDS_ANALYSIS_HEADER_ROW

const boundsAnalysis = [];
BOUNDS.map((bound, boundId) => {
  const histories = computeHistories(bound);
  const boundAnalysis = analyzeBound(histories, bound, boundId);

  textOutput = textOutput.concat(presentBoundAnalysis(boundAnalysis, {bound, boundId, mode: 'SUMMARY'}) + '\n');

  boundsAnalysis.push(boundAnalysis);
});

textOutput = textOutput.concat(presentLevelAnalyses());
textOutput = textOutput.concat(presentRankAnalyses());

if (shouldUpdateFiles) {
  updateFile(BOUNDS_ANALYSIS_TEXT_FILE, textOutput.replace(/\[\d\dm/g, '')); // remove colors

  const visualizationOutput = visualizeBounds(boundsAnalysis);
  updateFile(BOUNDS_ANALYSIS_VISUALIZATION_FILE, visualizationOutput);
}

console.log(textOutput);
