# isValidMove

Given an 8x8 chess board, a piece, and a move coordinate, determine if the given move is a valid chess move. Capital letters represent white pieces, lowercase letters represent black pieces, where P is a white pawn, n is a black knight, K is a white king, and so on. A ~ represents a blank square, and you can use [this tool](https://lichess.org/analysis/atomic) if you need a helpful visual! You can choose to do absolute coordinates or relative ones, and decide how you want to differentiate between duplicate pieces.

## Example

```js
let board =
  [
    `~~~~~~~~
      ~~kb~~~~
      ~~K~~~~~
      ~~~~~~~~
      ~~~~~~~~
      ~~~~~~~~
      ~~~~~~~~
      ~~~R~~~~`,
  ] >
  isValidMove(board, 'R', [0, 0]) >
  false > // A rook can only move horizontally and vertically
  isValidMove(board, 'k', [0, 1]) >
  true > // A king can move one square at a time in any direction
  isValidMove(board, 'Q', [5, 7]) >
  false // The queen is not on the board
```
