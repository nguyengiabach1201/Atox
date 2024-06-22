import { Disassembler } from "./instruction.js";

class CPU {
  constructor(src) {
    this.memory = new Uint8Array(4096);
    this.registers = new Uint8Array(16);
    this.stack = new Uint16Array(16);

    this.ST = 0;
    this.DT = 0;
    this.I = 0;
    this.SP = -1;
    this.PC = 0x200;

    this.disassembler = new Disassembler(src);
    this.disassembler.disassemble();
    this.instructions = this.disassembler.instructions;
  }

  run() {
    
  }

  execute(instruction) {
    const id = instruction.instruction.id;
    const args = instruction.args;

    switch (id) {
      case "mov": {
        const reg = args[0],
          val = args[1];

        if (val in registers) this.registers[reg] = this.registers[val];
        else this.registers[reg] = parseInt(val);

        break;
      }
      case "add": {
        const reg = args[0],
          val = args[1];

        if (val in registers) this.registers[reg] += this.registers[val];
        else this.registers[reg] += parseInt(val);

        break;
      }
      case "sub": {
        const reg = args[0],
          val = args[1];

        if (val in registers) this.registers[reg] -= this.registers[val];
        else this.registers[reg] -= parseInt(val);

        break;
      }
    }
  }
}
