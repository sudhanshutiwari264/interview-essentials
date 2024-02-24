const myobj = {
    js: "javascript",
    cpp: "C++",
    rb: "ruby",
    swift: "Swift by apple"
}

for (const key in myobj) {
    // console.log(`the ${key} for ${myobj[key]} value`);
    // console.log(key);
}

const prg = ["js", "rb", "py", "java", "cpp"]
for (const key in prg) {
    console.log(prg[key]);
}
