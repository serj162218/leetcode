#
# @lc app=leetcode id=146 lang=python3
#
# [146] LRU Cache
#
class Node:
    def __init__(self, val, key):
        self.val, self.key = val, key
        self.prev, self.next = None, None


class LRUCache:

    def __init__(self, capacity: int):
        self.cap = capacity
        # least recently use node | most recently use node
        self.left, self.right = Node(0, 0), Node(0, 0)
        self.cache = {}
        self.left.next, self.right.prev = self.right, self.left
    # Remove the LRU node
    def remove(self, node):
        nxt, prev =  node.next, node.prev
        nxt.prev, prev.next = prev, nxt

    # Insert to the MRU node
    def insert(self, node):
        prev, nxt = self.right.prev, self.right
        prev.next, nxt.prev = node, node
        node.prev, node.next = prev, nxt

    def get(self, key: int) -> int:
        if key in self.cache:
            self.remove(self.cache[key])
            self.insert(self.cache[key])
            return self.cache[key].val
        return -1

    def put(self, key: int, value: int) -> None:
        if key in self.cache:
            self.remove(self.cache[key])
        
        self.cache[key] = Node(value, key)
        self.insert(self.cache[key])

        if len(self.cache) > self.cap:
            lru = self.left.next
            self.remove(lru)
            self.cache.pop(lru.key, None)
            
# @lc code=end
