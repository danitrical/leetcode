var isValidSudoku = function(board) {
    const seen = new Set();

    for (let i = 0; i < board.length; i++) {
        for (let j = 0; j < board[i].length; j++) {
            const value = board[i][j];
            if (value === '.') continue;

            const boxIndex = Math.floor(i / 3) * 3 + Math.floor(j / 3);

            const rowKey = `${value}-row-${i}`;
            const colKey = `${value}-col-${j}`;
            const boxKey = `${value}-box-${boxIndex}`;

            if (
                seen.has(rowKey) ||
                seen.has(colKey) ||
                seen.has(boxKey)
            ) {
                return false;
            }

            seen.add(rowKey);
            seen.add(colKey);
            seen.add(boxKey);
        }
    }

    return true;
};