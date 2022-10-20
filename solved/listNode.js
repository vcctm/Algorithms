/**
 * Definition for singly-linked list.
 * function listNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function (l1, l2) {
  getVals(l1);
  return {
    l1,
    l2,
  };
};

const getVals = (listNode = null) => {
  const next = listNode.next;
  while (next !== null) {
    console.log(1);
  }
  return listNode.val;
};

function listNode(val, next = null) {
  return {
    val,
    next,
  };
}

const l1 = listNode(2, listNode(4, listNode(3, null)));
const l2 = listNode(5, listNode(6, listNode(4, null)));

console.log(addTwoNumbers(l1, l2)); // return
