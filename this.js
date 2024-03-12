function User(first, last) {
  this.first = first;
  this.last = last;
  return this;
}

const onetime = User('ishwor', 'gautam');
const twotime = User('bibek', 'shah');
console.log(onetime.first);
