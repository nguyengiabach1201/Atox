export class Rom {
  constructor(src) {
    this.data = src
      .split("")
      .filter((char) => [">", "<", "+", "-", ".", ",", "[", "]"].includes(char))
      .join("");
  }
}

export class CPU {
  constructor() {
    this.reset();
  }
  reset() {
    this.memory = new Array(1024);
    this.ptr = 0;
  }
  load(rom) {
    this.reset();
    
    for (let i = 0; i < rom.data.length; i++) {
      // console.log(rom.data[i]);
      this.memory[i] = rom.data[i];
    }
    // this.execute();
    // console.log(this.memory[0]);
  }
  execute() {
    // console.log(this.memory);
    for (let i = 0; i < this.memory.length; i++) {
      switch (this.memory[i]) {
        case ">":
          this.ptr++;
          break;
        case "<":
          this.ptr--;
          break;
        case "+":
          this.memory[this.ptr]++;
          break;
        case "-":
          this.memory[this.ptr]--;
          break;
        case ".":
          console.log(String.fromCharCode(this.memory[this.ptr]));
          break;
        case ",":
          this.memory[this.ptr] = 0;
          break;
        case "[":
          if (this.memory[this.ptr] === 0) {
            i++;
            while (this.memory[i] !== "]" || this.memory[i - 1] === "[") {
              if (this.memory[i] === "[") {
                i++;
              } else if (this.memory[i] === "]") {
                i--;
              }
              i++;
            }
          }
          break;
        case "]":
          if (this.memory[this.ptr] !== 0) {
            i--;
            while (this.memory[i] !== "[" || this.memory[i - 1] === "]") {
              if (this.memory[i] === "]") {
                i--;
              } else if (this.memory[i] === "[") {
                i++;
              }
              i--;
            }
            i--;
          }
          break;
      }
    }
  }
}
