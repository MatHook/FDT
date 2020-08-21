function bestStats(passes, times, desiredPercentage) {
  let tries = 0;
  while (desiredPercentage >= passes/times) {
    passes++
    times++
    tries++
  }
  console.log(`The desired percentage is ${desiredPercentage}%\n
    passes made up ${passes}\n
    times made up ${times}\n
    ${passes}/${times} = ${passes/times}%\n
    You need to win ${tries} turns`)
  
  return tries
}

console.log(bestStats(136, 160, .99));

