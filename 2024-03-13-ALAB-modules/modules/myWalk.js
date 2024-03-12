const name = 'myModule';

function getMiles() {
    return 'this is getMiles';
}

function findPath(a, b) {
    return `this is findPath and the arguments are: ${a} and ${b}`;
}

function walkPath() {
    return 'walk along the path';
}

function walkFaster() {
    return 'walk a little bit faster';
}

function notShared() {
    console.log('this function is not exported so I can only access it in here');
}

export { name, getMiles, findPath, walkPath, walkFaster };