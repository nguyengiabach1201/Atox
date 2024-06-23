export class Rom {
  constructor(src) {
    this.src = src;
    this.data = this.compile(sr);
  }

  compile(src) {
    let data = "";
    for (let i = 0; i < src.length; i++) {
      switch (src[i]) {
        case ">":
          data += ">";
          break;
        case "<":
          data += "<";
          break;
        case "+":
          data += "+";
          break;
        case "-":
          data += "-";
          break;
        case ".":
          data += ".";
          break;
        case ",":
          data += ",";
          break;
        case "[":
          data += "[";
          break;
        case "]":
          data += "]";
          break;
      }
    }
    return data;
  }
}

export class CPU {
  constructor() {
    this.reset();
  }
  reset() {
    this.memory = new Uint8Array(1024);

    this.PC = 0x200;
    this.ptr = 0;
  }
  load(rom) {
    this.reset();
    for (let i = 0; i < rom.length; i++) this.memory[i] = rom[i];
  }
  fetch() {
    if (this.PC > 1024) throw new Error("Memory out of bounds.");
    return this.memory[this.PC];
  }
  run() {
    while (1) {
      try {
        this.step();
      } catch {
        break;
      }
    }
  }
  step() {
    const op = this.fetch();
    this.execute(op);
  }
  execute(op) {
    op = op.toString(16);
    console.log(op);

    switch (op) {
      case ">":
        this.ptr++;
        break;
      case "<":
        this.ptr--;
        break;
      case "+":
        this.memory[this.ptrptr]++;
        break;
      case "-":
        this.memory[this.ptrptr]--;
        break;
      case ".":
        console.log(String.fromCharCode(memory[this.ptrptr]));
        break;
      case ",":
        this.memory[this.ptrptr] = 0;
        break;
      case "[":
        if (this.memory[this.ptrptr] === 0) {
          i++;
          while (code[i] !== "]" || code[i - 1] === "[") {
            if (code[i] === "[") {
              i++;
            } else if (code[i] === "]") {
              i--;
            }
            i++;
          }
        }
        break;
      case "]":
        if (this.memory[this.ptr] !== 0) {
          i--;
          while (code[i] !== "[" || code[i - 1] === "]") {
            if (code[i] === "]") {
              i--;
            } else if (code[i] === "[") {
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
