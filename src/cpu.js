export class CPU {
  constructor() {
    this.reset();
  }
  reset() {
    this.memory = new Uint8Array(1024);
    this.PC = 0;
  }
  load(rom) {
    this.reset();
    for (let i = 0; i < rom.length; i++) this.memory[this.PC + i] = rom[i];
  }
  fetch() {
    if (this.PC > 1024) throw new Error("Memory out of bounds.");
    return this.memory[this.PC];
  }
  step() {
    const op = this.fetch();
    this.execute(op);
  }
  execute(op) {
    op = op.toString(16);
    console.log(op);
  }
}
