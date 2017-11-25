var BinarySearchTree = function(value) {
    var instance = Object.create(BinarySearchTree.prototype);
  
      instance.value = value;
      instance.right = undefined;
      instance.left = undefined;
  
    return instance
  };
  
  BinarySearchTree.prototype.insert = function (value) {

    var node = BinarySearchTree(value);
  
    function recurse(bst) {
      if (bst.value > value && bst.left === undefined) {
        bst.left = node;
      } else if (bst.value > value) {
        recurse(bst.left);
      } else if (bst.value < value && bst.right === undefined) {
        bst.right = node;
      } else if (bst.value < value) {
        recurse(bst.right);
      }
    }
  
    recurse(this);
  }
  
  BinarySearchTree.prototype.contains = function (value) {
    var doesContain = false;

    function recurse(bst) {
      if (bst.value === value) {
        doesContain = true;;
      } else if (bst.left !== undefined && value < bst.value) {
        recurse(bst.left);
      } else if (bst.right !== undefined && value > bst.value) {
        recurse(bst.right)
      }
    }
  
    recurse(this);
    return doesContain;
  }
  
  BinarySearchTree.prototype.depthFirstLog = function (callback) {

    function recurse(bst) {
      callback.call(bst, bst.value)
  
      if (bst.left !== undefined) {
        recurse(bst.left)
      }
  
      if (bst.right !== undefined) {
        recurse(bst.right);
      }
    }
  
    recurse(this);
  }