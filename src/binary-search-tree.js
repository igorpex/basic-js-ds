const { NotImplementedError } = require('../extensions/index.js');

// const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
class BinarySearchTree {
  constructor() {
    this.treeRoot = null;
  }

  root() {
    return this.treeRoot
  }

  add(data) {
    this.treeRoot = addToNode(this.treeRoot, data);

    function addToNode(node, data) {
      if (!node) {
        // return new node object;
        return {
          data: data,
          left: null,
          right: null
        }
      }

      if (node.data === data) {
        return node;
      }

      if (data < node.data) {
        node.left = addToNode(node.left, data);
      } else {
        node.right = addToNode(node.right, data);
      }

      return node;
    }
  }

  has(data) {
    //return true if find node with data
    if (this.find(data, this.treeRoot)) {
      return true
    } else {
      return false
    }
  }

  find(data, node = this.treeRoot) {
    if (!node) {
      return null;
    }

    if (node.data === data) {
      return node;
    }

    if (data < node.data) {
      return this.find(data, node.left)
    } else {
      return this.find(data, node.right);
    }
  }

  remove(data) {
    this.treeRoot = removeNode(this.treeRoot, data);

    function removeNode(node, data) {
      if (!node) {
        return null;
      }
      //if data to remove is less than current data
      if (data < node.data) {
        node.left = removeNode(node.left, data);
        return node;
        //if data to remove is more than current data
      } else if (data > node.data) {
        node.right = removeNode(node.right, data);
        return node;
        //if it is node with data to remove
      } else if (data === node.data) {
        // if it is leaf node - just remove node
        if (!node.left && !node.right) {
          // remove - put null instead of item
          return null;
        }
        // if there is a right node only
        if (node.right && !node.left) {
          // then put right node instead of current node
          node = node.right;
          return node;
        }

        // if there is a left node only
        if (node.left && !node.right) {
          // then put left node instead of node
          node = node.left;
          return node;
        }

        // if there are both left and right child nodes

        // find max from left subtree to put instead of node
        let maxOnLeftBranch = node.left;
        // move right to find maximum while .right node esixt on nodes
        while (maxOnLeftBranch.right) {
          // move to right node on every step
          maxOnLeftBranch = maxOnLeftBranch.right;
        }
        // copy maximum data from left to replaced node
        node.data = maxOnLeftBranch.data;
        // remove node with previously copied data
        node.left = removeNode(node.left, maxOnLeftBranch.data);

        return node;
      }
    }

  }

  min() {
    if (!this.treeRoot) {
      return null;
    }
    let node = this.treeRoot;
    // find the most left node as it is minimum
    while (node.left) {
      node = node.left;
    }
    return node.data;
  }

  max() {

    if (!this.treeRoot) {
      return null;
    }
    // find the most right node as it is maximum
    let node = this.treeRoot;
    while (node.right) {
      node = node.right;
    }
    return node.data;
  }
}

module.exports = {
  BinarySearchTree
};
