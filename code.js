function allPairsShortestPaths(graph) {
    graphSize = Object.keys(graph).length;
    graphCopy = Object.entries(graph);
    // Initialize distance matrix
    dist = new Array(graphSize);
    // V^2 complexity here regardless of case
    for (l = 0; l < graphSize; l++) {
        dist[l] = new Array(graphSize);
        for (j = 0; j < graphSize; j++) {
            if (l === j) {
                dist[l][j] = 0;
            } else {
                dist[l][j] = Infinity;
            }
        }
    }
    
    // Full V^2 complexity regardless of case
    for (u = 0; u < graphSize; u++) {
        for (v = 0; v < graphSize; v++) {
            dist[u][v] = graphCopy[u][1][v];
        }
    }

    // Full V^3 complexity here regardless of case (highest order)
    for (k = 0; k < graphSize; k++) {
        for (i = 0; i < graphSize; i++) {
            for (m = 0; m < graphSize; m++) {
                if (dist[i][m] > dist[i][k] + dist[k][m]) {
                    dist[i][m] = dist[i][k] + dist[k][m];
                }
            }
        }
    }
    
    return dist;
}
