// simple test: check if 2+2 equals 4
function testSum() {
  if (2 + 2 !== 4) throw new Error('Math is broken');
}
testSum();
console.log('All tests passed!');