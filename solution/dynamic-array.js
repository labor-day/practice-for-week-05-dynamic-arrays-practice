class DynamicArray {

  constructor(defaultSize=4) {

    // Your code here
    this.data = new Array(defaultSize);
    this.length = 0;
    this.capacity = defaultSize;

  }

  read(index) {
    return this.data[index];
  }

  unshift(val) {
    let bigger = new Array(this.capacity+1);
    for (let i = this.data.length - 1; i >= 0; i--) {
      bigger[i+1] = this.data[i];
    }
    bigger[0] = val;
    this.data = bigger;
    this.length++;
  }

}


module.exports = DynamicArray;
