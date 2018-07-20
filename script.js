const a = [0, 1, 0];
const b = [0, 1, 1];

console.log(a);
console.log(b);
let tr = 0;
const c = [];
for (let i = a.length - 1; i >= 0; i--) {
  c.push(a[i] ^ b[i] ^ tr);
  tr = tr & (a[i] ^ b[i]) | (a[i] & b[i]);
}
c.push(tr);
console.log(c.reverse());