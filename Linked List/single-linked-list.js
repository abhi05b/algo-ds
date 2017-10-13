function Node(data, next){
  this.data = data;
  this.next = next;
}

function LinkedList(node) {
  this.head = node;
  this.tail=node;
  this.insertNode =function(node) {
    if(this.tail){
      this.tail.next = node;
      this.tail = node;
    }else{
      this.head = node;
      this.tail = node;
    }
  };

  this.traverseList = function() {
    if(!this.head){
      return;
    }else{
      var node = this.head;
      do {
        console.log(node.data + ' ');
        node = node.next;
      } while (node.next);
    }
  }

}

var list = new LinkedList(new Node(1));
list.insertNode(new Node(2));
list.insertNode(new Node(3));
list.insertNode(new Node(4));
list.traverseList();
