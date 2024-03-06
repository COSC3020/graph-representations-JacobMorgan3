function convertToAdjList(adjMatrix) {
    
    let list =[];
    for (let i = 0; i < adjMatrix.length; i++) {
        let row = [];
        for (let j = 0; j < adjMatrix[i].length; j++) {
            if (adjMatrix[i][j] == 1) {
                row.push(j);
            }
        }
        list.push(row);
    }
    
    return list;
}
