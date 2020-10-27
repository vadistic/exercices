/**
 * Initialize your data structure here.
 *
 * @this {any}
 */
var MyLinkedList = function () {
  /**
   * @type {number}
   */
  this.headRef = null
  /**
   * @type {number}
   */
  this.lastPointer = 0

  this.length = 0

  /**
   * @type {Record<number, [number, number | null]>}
   */
  this.map = {}
}

/**
 * Get the value of the index-th node in the linked list. If the index is invalid, return -1.
 * @param {number} index
 * @return {number}
 */
MyLinkedList.prototype.get = function (index) {
  // invalid range
  if (index > this.length - 1 || index < 0) return -1

  let pointer = this.headRef

  // invalid head (should be catched by range)
  if (pointer === null) return -1

  for (let i = 0; i <= index; i++) {
    const current = this.map[pointer]
    if (!current || current[1] === null) return -1 // means integrity failed somehow
    if (i === index) return current[0]

    pointer = current[1]
  }

  return -1
}

/**
 * Add a node of value val before the first element of the linked list. After the insertion, the new node will be the first node of the linked list.
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtHead = function (val) {
  const pointer = this.lastPointer + 1

  this.map[pointer] = [val, this.headRef] // pointing to prev head

  this.lastPointer = pointer
  this.headRef = pointer
  this.length += 1
}

/**
 * Append a node of value val to the last element of the linked list.
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtTail = function (val) {
  const pointer = this.lastPointer + 1

  this.map[pointer] = [val, null]

  if (this.lastPointer !== 0) {
    this.map[this.lastPointer][1] = pointer // old tail need to point to next one
  }

  this.lastPointer = pointer
  this.length += 1
}

/**
 * Add a node of value val before the index-th node in the linked list. If index equals to the length of linked list, the node will be appended to the end of linked list. If index is greater than the length, the node will not be inserted.
 * @param {number} index
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtIndex = function (index, val) {
  if (index > this.length - 1 || index < 0) return
  if (index === this.length - 1) return this.addAtTail(val)
  if (index === 0) return this.addAtHead(val)

  let pointer = this.headRef

  for (let i = 0; i <= index; i++) {
    const prev = this.map[pointer]

    if (!prev || prev[1] === null) return // means integrity failed somehow

    // will not be -1 because i=0 is handled with addAtHead
    if (i === index - 1) {
      this.lastPointer += 1
      this.length += 1

      // new one is pointing to where old one did
      this.map[this.lastPointer] = [val, prev[1]] // pointing to next
      // old one goes before
      prev[1] = this.lastPointer

      return
    }

    pointer = prev[1]
  }
}

/**
 * Delete the index-th node in the linked list, if the index is valid.
 * @param {number} index
 * @return {void}
 */
MyLinkedList.prototype.deleteAtIndex = function (index) {
  if (index < -1 || index > this.length - 1) return

  // handle deleting head
  if (index === 0) {
    const deleted = this.map[this.headRef]
    delete this.map[this.headRef]

    // this was last element
    if (!deleted[1]) {
      this.map = {}
      this.length = 0
      this.headRef = null
      this.lastPointer = 0
      return
    }

    this.headRef = deleted[1]
    this.length -= 1
  }

  let pointer = this.headRef

  for (let i = 0; i <= index; i++) {
    const prev = this.map[pointer]
    if (!prev) return // means integrity failed somehow

    if (i === index - 1) {
      if (prev[1] === null) return // should not happen - means prev is actually last?
      const deleted = this.map[prev[1]]
      delete this.map[prev[1]]

      prev[1] = deleted[1]
      this.length--
    }
  }
}

/**
 * Your MyLinkedList object will be instantiated and called as such:
 * var obj = new MyLinkedList()
 * var param_1 = obj.get(index)
 * obj.addAtHead(val)
 * obj.addAtTail(val)
 * obj.addAtIndex(index,val)
 * obj.deleteAtIndex(index)
 */
