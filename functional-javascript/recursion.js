function getDependencies(tree) {
    var list = [];
    getDependenciesRecursive(tree, list);
    return list.sort();
}

function getDependenciesRecursive(tree, list) {
    if (!tree || !tree.dependencies) return;
    Object.keys(tree.dependencies).forEach(function (dependency) {
        var str = dependency + '@' + tree.dependencies[dependency].version;
        if (list.indexOf(str) < 0) list.push(str);
        getDependenciesRecursive(tree.dependencies[dependency], list);
    });
}

module.exports = getDependencies;
