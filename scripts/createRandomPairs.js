// Developed by REPL:
// - https://ramdajs.com/repl/#?%2F%2F%20https%3A%2F%2Fstackoverflow.com%2Fquestions%2F521295%2Fseeding-the-random-number-generator-in-javascript%0Afunction%20mulberry32%28a%29%20%7B%0A%20%20%20%20return%20function%28%29%20%7B%0A%20%20%20%20%20%20var%20t%20%3D%20a%20%2B%3D%200x6D2B79F5%3B%0A%20%20%20%20%20%20t%20%3D%20Math.imul%28t%20%5E%20t%20%3E%3E%3E%2015%2C%20t%20%7C%201%29%3B%0A%20%20%20%20%20%20t%20%5E%3D%20t%20%2B%20Math.imul%28t%20%5E%20t%20%3E%3E%3E%207%2C%20t%20%7C%2061%29%3B%0A%20%20%20%20%20%20return%20%28%28t%20%5E%20t%20%3E%3E%3E%2014%29%20%3E%3E%3E%200%29%20%2F%204294967296%3B%0A%20%20%20%20%7D%0A%7D%0A%0Aconst%20shuffle%20%3D%20%28random%2C%20array%29%20%3D%3E%20array.sort%28%28%29%20%3D%3E%20random%28%29%20-%200.5%29%3B%0A%0Aconst%20createPairs%20%3D%20%28random%2C%20previousPairs%2C%20names%29%20%3D%3E%20%7B%0A%20%20const%20attempt%20%3D%20shuffle%28random%2C%20names%29%3B%0A%20%20const%20pairs%20%3D%20splitEvery%282%2C%20attempt%29%3B%0A%20%20const%20rejector%20%3D%20pair%20%3D%3E%20find%28prevPair%20%3D%3E%20%7B%0A%20%20%20%20return%20prevPair.includes%28pair%5B0%5D%29%20%26%26%20prevPair.includes%28pair%5B1%5D%29%0A%20%20%7D%2C%20previousPairs%29%20%3D%3D%3D%20undefined%3B%0A%20%20const%20hasAnyAlreadyUsedPairs%20%3D%20reject%28rejector%2C%20pairs%29.length%20%3E%200%3B%0A%20%20%2F%2F%20if%20%28hasAnyAlreadyUsedPairs%29%20console.log%28%27Throwing%20dice%20again%21%27%29%3B%20%20%0A%20%20return%20hasAnyAlreadyUsedPairs%20%3F%20createPairs%28random%2C%20previousPairs%2C%20names%29%20%3A%20pairs%3B%0A%7D%0A%0Aconst%20nextPairs%20%3D%20%28random%2C%20previousPairs%2C%20names%29%20%3D%3E%20%7B%0A%20%20const%20pairs%20%3D%20createPairs%28random%2C%20previousPairs%2C%20names%29%3B%0A%20%20const%20newPreviousPairs%20%3D%20%5B...previousPairs%2C%20...pairs%5D%3B%0A%20%20return%20%7B%0A%20%20%20%20pairs%2C%0A%20%20%20%20previousPairs%2C%0A%20%20%20%20next%3A%20%28%29%20%3D%3E%20nextPairs%28random%2C%20newPreviousPairs%2C%20names%29%2C%0A%20%20%7D%3B%0A%7D%20%0A%0Aconst%20createPairRandomizer%20%3D%20%28seed%2C%20names%29%20%3D%3E%20%7B%0A%20%20const%20random%20%3D%20mulberry32%28seed%29%3B%0A%20%20return%20%7B%20next%3A%20%28%29%20%3D%3E%20nextPairs%28random%2C%20%5B%5D%2C%20names%29%20%7D%3B%0A%7D%0A%0Aconst%20PAIR_PROGRAMMING_LINKS%20%3D%20%5B%0A%20%20%27https%3A%2F%2Fgoogle%2Fsome-meeting-url-1454HVBBJGZ65FTV65FR54%27%2C%0A%20%20%27https%3A%2F%2Fgoogle%2Fsome-meeting-url-JSAJHU7665R6UHNDMSNDas%27%2C%0A%20%20%27https%3A%2F%2Fgoogle%2Fsome-meeting-url-akjs978BAgZAGS6ASGIJAI%27%2C%0A%20%20%27https%3A%2F%2Fgoogle%2Fsome-meeting-url-AMNSjahs89A79TRQAJSNB3%27%2C%0A%20%20%27https%3A%2F%2Fgoogle%2Fsome-meeting-url-11K2NBJ3767dAS7676AAS8%27%2C%0A%20%20%27https%3A%2F%2Fgoogle%2Fsome-meeting-url-MAKSN-Aajaajbaj7656bja%27%2C%0A%5D%3B%0A%0Aconst%20NAMES%20%3D%20%5B%0A%20%20%27Luk%C3%A1%C5%A1%27%2C%20%0A%20%20%27Marek%27%2C%20%0A%20%20%27Ale%C5%A1%27%2C%20%0A%20%20%27Martin%27%2C%20%0A%20%20%27Viktor%27%2C%20%0A%20%20%27Michal%27%2C%20%0A%20%20%27Jan%27%2C%20%0A%20%20%27Adam%27%2C%20%0A%20%20%27Jonas%27%2C%20%0A%20%20%27Elon%27%0A%5D%3B%0A%0Aconst%20SEED%20%3D%201%3B%0A%0Alet%20%7B%20next%20%7D%20%3D%20createPairRandomizer%28SEED%2C%20NAMES%29%3B%0A%20%20%0Alet%20data%20%3D%20%5B%5D%3B%0A%0Afor%28%20var%20i%20%3D%201%3B%20i%20%3C%3D%206%3B%20i%2B%2B%29%20%7B%0A%20%20%20%20const%20result%20%3D%20next%28%29%3B%20%0A%20%20%20%20next%20%3D%20result.next%3B%0A%20%20%20%20data%20%3D%20%5B%0A%20%20%20%20%20%20...data%2C%20%0A%20%20%20%20%20%20prepend%28%27Session%20%23%20%27%20%2B%20i%2C%0A%20%20%20%20%20%20result.pairs.map%28%28pair%2C%20pi%29%20%3D%3E%20%5B...pair%2C%20PAIR_PROGRAMMING_LINKS%5Bpi%5D%5D%29%2C%0A%20%20%29%0A%20%20%20%20%20%20%20%20%2F%2F%20previousPairs%3A%20result.previousPairs%2C%0A%20%20%20%20%5D%3B%0A%7D%0A%0Aconst%20createPairTable%20%3D%20%28pair%29%20%3D%3E%20%7B%0A%20%20return%20%60%7C%24%7Bpair%5B0%5D%7D%20%7C%20%24%7Bpair%5B1%5D%7D%20%7C%20%24%7Bpair%5B2%5D%7D%20%7C%0A%60%3B%0A%7D%3B%0A%0Aconst%20sessionReducer%20%3D%20%28buffer%2C%20sessionValue%29%20%3D%3E%20%7B%0A%20%20const%20isName%20%3D%20typeof%20sessionValue%20%3D%3D%3D%20%27string%27%3B%0A%20%20const%20result%20%3D%20isName%20%3F%20%20%60%0A%23%23%23%20%24%7BsessionValue%7D%0A%0A%7C%20Participant%20A%20%7C%20Participant%20B%20%7C%20Room%20%20%20%20%20%20%20%7C%0A%7C%20%3A-----------%3A%20%7C%3A-------------%3A%7C%20%3A---------%3A%7C%0A%60%20%3A%20createPairTable%28sessionValue%29%3B%0A%20%20return%20%60%24%7Bbuffer%7D%24%7Bresult%7D%60%3B%0A%7D%3B%0A%0Aconst%20markdown%20%3D%20data.reduce%28%28buffer%2C%20sessionB%29%20%3D%3E%20%7B%0A%20%20return%20%60%24%7Bbuffer%7D%0A---%0A%24%7BsessionB.reduce%28sessionReducer%2C%20%27%27%29%7D%0A%60%3B%0A%7D%2C%20%27%23%23%20Sessions%27%29%3B%0A%0A%2F%2F%20Replace%20%60%5Cn%60%20characters%20with%20tool%20like%3A%20http%3A%2F%2Fwww.unit-conversion.info%2Ftexttools%2Fadd-line-breaks%2F%0A%0A%28%7B%0A%20%20data%2C%0A%20%20markdown%2C%0A%7D%29%0A%0A

const { 
  splitEvery, 
  reject, 
  find, 
  prepend,
} = require('ramda');
const yargs = require('yargs/yargs')

const { argv } = yargs(process.argv.slice(2))
  .number('seed')
  .number('numberOfSessions')
  .array('participants');

const SEED = argv.seed;
const NUMBER_OF_SESSIONS = argv.numberOfSessions;
const NAMES = argv.participants;

const googleHangoutLinks = [
  'https://hangouts.google.com/call/Z4bgiI56eIARj9BGypxyACEI?no_rd',
  'https://hangouts.google.com/call/Z7StD6iLyPMNMn3GNl24ACEI?no_rd',
  'https://hangouts.google.com/call/Sby41nQmIvpfRpQEektWACEI?no_rd',
  'https://hangouts.google.com/call/O33OXx57WIobEoYi_61EACEI?no_rd',
  'https://hangouts.google.com/call/EEW2cquAKJMB0Jb788emACEI?no_rd',
  'https://hangouts.google.com/call/_puYmhgQad_6hKHIhhHhACEI?no_rd',
  'https://hangouts.google.com/call/dThojSzF9k8BREKbyDudACEI?no_rd',
  'https://hangouts.google.com/call/sQL50LAkGLwBzgTFSkMbACEI?no_rd',
  'https://hangouts.google.com/call/LfGOfmiZzNS6FJ9DZRsYACEI?no_rd',
  'https://hangouts.google.com/call/OM3Bo34E3DRMffX8CggXACEI?no_rd',
];

const createRoomLink = (sessionNumber, pairNumber) =>
  `https://meet.jit.si/CN-CODERETREAT-2020-${sessionNumber}-${pairNumber}-${new Date().getTime()}`;

const createRoomLinkSecondOption = (_sessionNumber, pairNumber) =>
  googleHangoutLinks[pairNumber];

const createPaperLink = (sessionNumber, pairNumber) => 
  `https://onthesamepage.online/CN-CODERETREAT-2020-${sessionNumber}-${pairNumber}-${new Date().getTime()}`;

// Based on:
// - https://stackoverflow.com/questions/521295/seeding-the-random-number-generator-in-javascript
function mulberry32(seed) {
  return () => {
    var t = seed += 0x6D2B79F5;
    t = Math.imul(t ^ t >>> 15, t | 1);
    t ^= t + Math.imul(t ^ t >>> 7, t | 61);
    return ((t ^ t >>> 14) >>> 0) / 4294967296;
  }
}

// Use "Stupid Sort", because why not:
// - https://en.wikipedia.org/wiki/Bogosort
const shuffle = (random, array) => array.sort(() => random() - 0.5);

const createPairs = (random, previousPairs, names) => {
  const randomlySortedNames = shuffle(random, names);
  const pairsAttempt = splitEvery(2, randomlySortedNames);

  const pairOccuredNotInPreviousPairs = (pair) => find(
    prevPair => prevPair.includes(pair[0]) && prevPair.includes(pair[1]),
    previousPairs,
  ) === undefined;
  const alreadyUsedPairs = reject(pairOccuredNotInPreviousPairs, pairsAttempt).length > 0;
  
  if (typeof debug !== 'undefined' && alreadyUsedPairs) console.log('Throwing dice again!');  
  
  return alreadyUsedPairs ? createPairs(random, previousPairs, names) : pairsAttempt;
}

const nextPairs = (random, previousPairs, names) => {
  const pairs = createPairs(random, previousPairs, names);
  const nextPreviousPairs = [...previousPairs, ...pairs];

  return {
    pairs,
    previousPairs,
    next: () => nextPairs(random, nextPreviousPairs, names),
  };
} 

const createPairRandomizer = (seed, names) => {
  const random = mulberry32(seed);
  return { next: () => nextPairs(random, [], names) };
}

let { next } = createPairRandomizer(SEED, NAMES);
let data = [];

for(let sessionNumber = 1; sessionNumber <= NUMBER_OF_SESSIONS; sessionNumber++) {
  const result = next(); 
  next = result.next;
  data = [
    ...data, 
    prepend('Session # ' + sessionNumber,
      result.pairs.map((pair, pairNumber) => [
        ...pair, 
        createRoomLink(sessionNumber, pairNumber), 
        createRoomLinkSecondOption(sessionNumber, pairNumber),
        createPaperLink(sessionNumber, pairNumber),
      ]),
    ),
  ];
}

const markdown = data.reduce((buffer, session) => 
`${buffer}${session.reduce((sessionValueBuffer, sessionValue) => {
  const isSessionName = typeof sessionValue === 'string';
  const result = isSessionName 
?  `
### ${sessionValue}

| Participant A | Participant B | Pair Space |
| :-----------: |:-------------:| :---------:|
` 
: `|${sessionValue[0]} | ${sessionValue[1]} | [meeting room](${sessionValue[3]}) + [paper](${sessionValue[4]}) |
`;
    return `${sessionValueBuffer}${result}`;
  }, '')}`,
`## Sessions
`,
);

console.log(markdown);
