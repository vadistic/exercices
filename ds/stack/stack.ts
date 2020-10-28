export class Stack {
  constructor(readonly values: number[]) {}

  push(value: number) {
    return this.values.push(value)
  }

  pop(): number {
    return this.values.pop() as number
  }

  top(): number {
    return this.values[this.values.length - 1]
  }

  isEmpty(): boolean {
    return this.values.length === 0
  }
}
