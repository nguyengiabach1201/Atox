export const instructions = {
  mov: "mov",
  add: "add",
  sub: "sub",
  mul: "mul",
  div: "div",
  and: "and",
  or: "or",
  xor: "xor",
  not: "not",
  jmp: "jmp", // go to a if b
};

export const parameter = {
  mov: ["r", ""],
  add: ["r", ""],
  sub: ["r", ""],
  mul: ["r", ""],
  div: ["r", ""],
  and: ["r", ""],
  or: ["r", ""],
  xor: ["r", ""],
  not: ["r", ""],
  jmp: [""],
};

export const registers = {
  v0: "v0",
  v1: "v1",
  v2: "v2",
  v3: "v3",
  v4: "v4",
  v5: "v5",
  v6: "v6",
  v7: "v7",
  v8: "v8",
  v9: "v9",
  vA: "vA",
  vB: "vB",
  vC: "vC",
  vD: "vD",
  vE: "vE",
  vF: "vF",
};

export class Instruction {
  constructor(id, args) {
    this.id = id;
    this.args = args;
  }
}

export class Disassembler {
  constructor(src) {
    this.src = src;
    this.instructions = [];
  }

  error(msg, line) {
    console.error(`Error: ${msg} at line ${line}`);
  }

  disassemble() {
    const lines = this.src.split("\n");
    for (let i = 0; i < lines.length; i++) {
      const line = lines[i].trim();
      if (line === "") continue;
      const parts = line.split(" ");
      const instruction = parts[0];
      const args = parts.slice(1);

      if (!(instruction in instructions))
        this.error(`Unknown instruction: ${instruction}`, i + 1);

      for (let j = 0; j < args.length; j++) {
        if (parameter.instruction[j]) {
          if (parameter.instruction[j] === "r" && args[j] in registers)
            continue;
        }
        throw new Error(`Invalid argument: ${args[j]}`);
      }

      this.instructions.push(new Instruction(instruction, args));
    }
  }
}
