
var generateParenthesis = function (n) {
  if (n == 1) return ["()"];
  if (n > 1) {
    let set = new Set();
    generateParenthesis(n - 1).forEach((combination) => {
      for (let index = 0; index < n; index++) {
        set.add(
          combination.substring(0, index) + "()" + combination.substring(index)
        );
      }
    });
    n -= 1;
    return Array.from(set);
  }
};

generateParenthesis(3);