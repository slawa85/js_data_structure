function Node(data){
  this.data = data;
  this.next = null;
}

function SinglyList(){
  this._length = 0;
  this.head = null;
}

SinglyList.prototype.add = function(value){
  var node = new Node(value),
      currentNode = this.head;

  // 1st case: empty list
  if(!currentNode){
    this.head = node;
    this._length++;
    return node;
  }

  // 2nd case: non-empty list
  while(currentNode.next){
    currentNode = currentNode.next;
  }

  currentNode.next = node;
  this._length++;

  return node;
}

SinglyList.prototype.searchNodeAt = function(position) {
  var currentNode = this.head,
      length = this._length,
      count=1,
      message = {failure: 'Failure: non-existent node in this list.'};

  // 1st use-case: an invalid position
  if(length == 0 || position > length || position < 1){
    throw new Error(message.failure);
  }

  // 2nd use-case: a valid position
  while(count < position){
    currentNode = currentNode.next;
    count++;
  }

  return currentNode;
};

SinglyList.prototype.remove = function(position) {
  var currentNode = this.head,
      length = this._length,
      count = 1,
      message = { failure: 'Failure: non-existent node in this list.' },
      nodeToDelete = false,
      beforeNodeToDelete = false,
      deletedNode = false;

  // 1st use-case: an invalid position
  if(position < 1 || position > length){
    throw new Error(message.failure);
  }

  // 2st use-case: remove head of the list
  if(position === 1){
    this.head = currentNode.next;
    nodeToDelete = currentNode;
    currentNode = null;
    this._length--;
    return nodeToDelete;
  }

  // 3nd use-case: remove any element from list
  while(count < position){
    beforeNodeToDelete = currentNode;
    nodeToDelete = currentNode.next;
    count++;
  }

  beforeNodeToDelete.next = nodeToDelete.next;
  deletedNode = nodeToDelete;
  nodeToDelete = null;

  this._length--;

  return deletedNode;
};

