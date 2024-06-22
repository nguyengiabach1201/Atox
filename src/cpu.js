class CPU {
  constructor() {
    this.memory = new Uint8Array(4096);
    this.registers = new Uint8Array(16);
    this.stack = new Uint16Array(16);

    this.ST = 0;
    this.DT = 0;
    this.I = 0;
    this.SP = -1;
    this.PC = 0x200;

    this.registers = {
      v0: 0,
      v1: 0,
      v2: 0,
      v3: 0,
      v4: 0,
      v5: 0,
      v6: 0,
      v7: 0,
      v8: 0,
      v9: 0,
      vA: 0,
      vB: 0,
      vC: 0,
      vD: 0,
      vE: 0,
      vF: 0,
    };
  }

  execute(instruction) {
    const id = instruction.instruction.id;
    const args = instruction.args;

    switch (id) {
      case "mov": {
        const reg = args[0];
        const val = args[1];

        if (val in registers) {
          this.registers[reg] = this.registers[val];
        } else {
          this.registers[reg] = parseInt(val);
        }

        break;
      }
    }
  }
}
