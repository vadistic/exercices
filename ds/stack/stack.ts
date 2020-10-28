export class Stack {
  values: number[]

  constructor(input: number[]) {
    this.values = input.slice()
  }

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
