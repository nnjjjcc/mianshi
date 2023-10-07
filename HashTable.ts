class HashTable {
  private storage: any[];
  private size: number;
  private count: number;
  constructor() {
    this.storage = [];
    this.size = 11;
    this.count = 0;
  }
  hashFn(str: string, size: number) {
    let hashCode = 0;
    for (let i = 0; i < str.length; i++) {
      hashCode = hashCode * 37 + str.charCodeAt(i);
    }
    return hashCode % size;
  }
  update(key: string, value: any) {
    const index = this.hashFn(key, this.size);

    let bucket = this.storage[index];

    if (!bucket) {
      this.storage[index] = bucket = [];
    }
    for (let i = 0; i < bucket.length; i++) {
      if (key === bucket[i][0]) {
        bucket[i][1] = value;
        return;
      }
    }
    bucket.push([key, value]);
    this.count++;
    // if (this.count > this.size * 0.75){
    //     this.resize(this.getPrime(this.size * 2)

    // }
  }
  find(key) {
    const index = this.hashFn(key, this.size);
    let bucket = this.storage[index];
    if (bucket) {
      const found = bucket.find((item) => {
        item[0] === key;
        return found ? found[1] : undefined;
      });
    } else {
      return undefined;
    }
  }
  remove(key) {
    const index = this.hashFn(key, this.size);
    let bucket = this.storage[index];
    if (bucket) {
      const index = bucket.findIndex((item) => item[0] === key);
      if (index !== -1) {
        this.count--;
        if (this.size > 11 && this.count < this.size * 0.25) {
          this.resize(this.getPrime(Math.floor(this.size / 2)));
        }
        return bucket.splice(index, 1)[0];
      }
    }
    return [];
  }
  resize(newSize) {
    const oldStorage = this.storage;
    this.storage = [];
    this.size = newSize;
    this.count = 0;
    oldStorage.forEach((bucket) => {
      if (bucket) {
        bucket.forEach((item) => this.update(item[0], item[1]));
      }
    });
  }
  getPrime(num) {
    while (!this.isPrime(num)) {
      num++;
    }
    return num;
  }
  isPrime(num) {
    // 获取 num 的平方根
    const squareRoot = Math.sqrt(num);
    for (let i = 2; i <= squareRoot; i++) {
      if (num % i === 0) {
        return false;
      }
    }
    return true;
  }
}
const hashTable = new HashTable();
hashTable.update("Jay", { name: "Jay", age: 22 }); // 新增
hashTable.update("Zhou", { name: "Zhou", age: 23 }); // 新增
hashTable.update("Chaim", { name: "Chaim", age: 28 }); // 新增
hashTable.update("Chaim", { name: "ChaimHL", age: 28 }); // 修改
console.log(hashTable);
