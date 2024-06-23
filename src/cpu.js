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
    for (let i = 0; i < rom.length; i++) {
      this.memory[this.PC + 2 * i] = rom[i] >> 8;
      this.memory[this.PC + 2 * i + 1] = rom[i] & 0x00ff;
    }
  }
  fetch() {
    if (this.PC > 4095) throw new Error("Memory out of bounds.");
    return (this.memory[this.PC] << 8) | (this.memory[this.PC + 1] << 0);
  }
  step() {
    const op = this.fetch();
    // console.log(op);
    this.execute(op);
  }
  execute(op) {
    // console.log(op.toString());
    op = Buffer.from(op.toString(), "hex");
    console.log("" + op);
  }
}
