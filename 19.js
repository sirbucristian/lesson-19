function makeCounter(initialCount, increment) {
  let initial = +initialCount;
  console.log('initial: ', initial);
  console.log('increment: ', increment);
  let count = isNaN(initial) ? 0: initial;
  let countIncrement = isNaN(increment) ? 0: increment;

  console.log('count: ', count);

  return function() {
    if (countIncrement === 0) {
      count ++;
      console.log('count: ', count);
    } else {
        count += countIncrement;
        console.log('count', count)
      }
  }
}


  let c1 = makeCounter(0, 5);
  console.log( c1() );
  console.log( c1() );
  console.log( c1() );
  let c2 = makeCounter(0, -5);
  console.log( c2() );
  console.log( c2() );
  console.log( c2() );
  let c3 = makeCounter(0);
  console.log( c3() );
  console.log( c3() );
  console.log( c3() );