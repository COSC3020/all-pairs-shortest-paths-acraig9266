const fs = require('fs');
const assert = require('assert');

eval(fs.readFileSync('code.js') + '')

const graph1 = {
    A: [0,2,12],
    B: [2,0,4],
    C: [1,3,0]
}
assert(JSON.stringify(allPairsShortestPaths(graph1)) == JSON.stringify([[0, 2, 6], [2, 0, 4], [1, 3, 0]]));

const graph2 = {
    A: [0, 1, 2, 3],
    B: [2, 0, 3, 4],
    C: [4, 1, 0, 5],
    D: [5, 9, 9, 0]
}
assert(JSON.stringify(allPairsShortestPaths(graph2)) == JSON.stringify([[0, 1, 2, 3], [2, 0, 3, 4], [3, 1, 0, 5], [5, 6, 7, 0]]));
