let A, B;

var MinStack = function () {
  A = [];
  B = [];
};

/**
 * @param {number} x
 * @return {void}
 */
MinStack.prototype.push = function (x) {
  A.push(x);
  const m = this.getMin();
  B.push(m === undefined ? x : Math.min(m, x));
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function () {
  A.pop();
  B.pop();
};
/**
 * @return {number}
 */
MinStack.prototype.top = function () {
  return A[A.length - 1];
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function () {
  return B[B.length - 1];
};
