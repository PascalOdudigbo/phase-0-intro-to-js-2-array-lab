const cats = ["Milo", "Otis", "Garfield"];
function destructivelyAppendCat(name){
    return cats.push(name);
}
const destructivelyPrependCat = name => cats.unshift(name);
const destructivelyRemoveLastCat = () => cats.pop();
const destructivelyRemoveFirstCat = () => cats.shift();
const appendCat = name => {
    const newArr = [...cats, name];
    return newArr;
}
const prependCat = name => {
    const newArr = [name, ...cats];
    return newArr;
}
const removeLastCat = () => {
    const newArr = cats.slice();
    newArr.splice(-1);
    return newArr;
}
const removeFirstCat = () => {
    const newArr = cats.slice();
    newArr.splice(0, 1);
    return newArr;
}