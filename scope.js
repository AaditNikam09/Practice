function show() {
    var functionVar = "I'm a function-scoped var";
    let functionLet = "I'm a block-scoped let";
    const functionConst = "I'm a block-scoped const";
}

show();

// These will throw ReferenceError if not commented
// console.log(functionVar);  // Throws ReferenceError
// console.log(functionLet);  // Throws ReferenceError
// console.log(functionConst);  // Throws ReferenceError