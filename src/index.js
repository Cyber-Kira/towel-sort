// You should implement your task here.

module.exports = function towelSort(matrix) {
    if (matrix <= 0 || !matrix) return [];
    return matrix
        .map((item, idx) => {
            if (idx % 2 !== 0) {
                return item.sort((a, b) => b - a);
            }
            return item;
        })
        .flat();
};
