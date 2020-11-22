var countPrimes = (n: number): number => {
  var sieve = [], i: number, j: number, primes = [];
  for (i = 2; i < n; ++i) {
      if (!sieve[i]) {
          primes.push(i);
          for (j = i << 1; j <= n; j += i) {
              sieve[j] = true;
          }
      }
  }
  return primes.length;
};

console.log(countPrimes(2));
