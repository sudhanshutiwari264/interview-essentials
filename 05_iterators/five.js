const coding = ["js", "ruby", "java", "python", "cpp"]

hi = coding.reduce((acc, curr) =>
  curr[0] === 'j' ? [...acc, curr + '1'] : acc, []);
console.log(hi);