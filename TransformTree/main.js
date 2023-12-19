function transformTree(tree, index = 0) {
  if (index >= tree.length || tree[index] === null) {
    return null;
  }

  const root = { value: tree[index] };
  root.left = transformTree(tree, 2 * index + 1);
  root.right = transformTree(tree, 2 * index + 2);

  return root;
}

console.log(transformTree([3,1,0,8,12,null,1]))
