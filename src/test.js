import { CPU, Rom } from "./cpu.js";

const rom = new Rom("++++++++++[>+++++++>++++++++++>+++>+<<<<-]>++.>+.+++++++..+++.>++.<<+++++++++++++++.>.+++.------.--------.>+.>.");

const cpu = new CPU();
cpu.load(rom);
cpu.execute();
