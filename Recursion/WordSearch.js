// Problem: https://leetcode.com/problems/word-search/description/

// Time: (m*n*4^k) Space: O(k)

var exist = function (board, word) {
    const row = board.length;
    const col = board[0].length;
    let idx = 0;
    for (let i = 0; i < row; i++) {
        for (let j = 0; j < col; j++) {
            let res = search(board, i, j, word, idx);
            if (res) return true;
        }
    }
    return false;

    function search(board, r, c, word, idx) {
        if (idx === word.length) return true;

        if (
            r < 0 ||
            c < 0 ||
            r == board.length ||
            c == board[0].length ||
            board[r][c] !== word[idx] ||
            board[r][c] == '1'
        )
            return false;

        let ch = board[r][c];
        board[r][c] = '1';
        let top = search(board, r - 1, c, word, idx + 1);
        let down = search(board, r + 1, c, word, idx + 1);
        let left = search(board, r, c - 1, word, idx + 1);
        let right = search(board, r, c + 1, word, idx + 1);
        board[r][c] = ch;
        return top || down || left || right;
    }
};
