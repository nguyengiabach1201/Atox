const MEMORY_SIZE = 256;

export function main(code) {
  if (!code) return;

  const memory = new Uint8Array(MEMORY_SIZE);
  let ptr = 0; // pointer to memory location

  for (let i = 0; i < code.length; i++) {
    switch (code[i]) {
      case '>':
        ptr++;
        break;
      case '<':
        ptr--;
        break;
      case '+':
        memory[ptr]++;
        break;
      case '-':
        memory[ptr]--;
        break;
      case '.':
        console.log(memory[ptr]);
        break;
      case ',':
        memory[ptr] = "";
        break;
      case '[':
        if (memory[ptr] === 0) {
          i++;
          while (code[i] !== ']' || code[i - 1] === '[') {
            if (code[i] === '[') {
              i++;
            } else if (code[i] === ']') {
              i--;
            }
            i++;
          }
        }
        break;
      case ']':
        if (memory[ptr] !== 0) {
          i--;
          while (code[i] !== '[' || code[i - 1] === ']') {
            if (code[i] === ']') {
              i--;
            } else if (code[i] === '[') {
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
