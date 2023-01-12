
class Node:
    def __init__(self, x: int, next: 'Node' = None, random: 'Node' = None):
        self.val = int(x)
        self.next = next
        self.random = random

class Solution:
    dic = {}
    def copyRandomList(self, head: 'Optional[Node]') -> 'Optional[Node]':
        h = head
        n = self.createList(head)
        np = n
        while np:
            if h.random == None:
                np.random = None
            else:
                np.random = self.dic[h.random]
            np = np.next
            h = h.next
        return n

    def createList(self, head):
        if head == None:
            return None

        n = Node(head.val, self.createList(head.next), None)
        self.dic[head] = n
        return n