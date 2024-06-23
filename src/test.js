import { CPU, Rom } from "./atox.js";

const rom = new Rom("++++++++++[>+++++++>++++++++++>+++>+<<<<-]>++.>+.+++++++..+++.>++.<<+++++++++++++++.>.+++.------.--------.>+.>.");

const cpu = new CPU();
cpu.load(rom);
cpu.execute();
