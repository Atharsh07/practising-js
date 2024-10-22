function  getlength(name) {
    return name.length;
}
try {
    const name = getlength()
    console.log(name);
} catch (error) {
    console.log("catched the error ")
}
