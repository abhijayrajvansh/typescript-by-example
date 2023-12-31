interface myObj {
    a: number;
    b: number;
}

function add(obj: myObj) {
    return obj.a + obj.b;
}

const r = add({
    // basically here the developer will know that they have to use 'a' and 'b' which is of type number
})