const MatrixChainOrder = (p, n) => {
  let m = Array(n)
    .fill(0)
    .map(() => Array(n).fill(0));
  let i, j, k, L, q;
  for (i = 1; i < n; i++) m[i][i] = 0;
  for (L = 2; L < n; L++) {
    for (i = 1; i < n - L + 1; i++) {
      j = i + L - 1;
      if (j == n) continue;
      m[i][j] = Number.MAX_VALUE;
      for (k = i; k <= j - 1; k++) {
        q = m[i][k] + m[k + 1][j] + p[i - 1] * p[k] * p[j];
        if (q < m[i][j]) m[i][j] = q;
      }
    }
  }

  return m[1][n - 1];
};

const arr = [1, 2, 3, 4];
const size = arr.length;
let res = MatrixChainOrder(arr, size);
console.log(`Mohamad reza yarali ${res}`);
//18 is the answer
