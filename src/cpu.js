export class CPU {
  constructor() {
    this.reset();
  }
  reset() {
    this.memory = new Uint8Array(4096);
    this.registers = new Uint8Array(16);
    this.stack = new Uint16Array(16);

    this.ST = 0;
    this.DT = 0;
    this.I = 0;
    this.SP = -1;
    this.PC = 0x200;
  }
  load(rom) {
    this.reset();
  }
  fetch() {
    if (this.PC > 4095) throw new Error("Memory out of bounds.");
    return (this.memory[this.PC] << 8) | (this.memory[this.PC + 1] << 0);
  }
  step() {}
  execute() {}
}
