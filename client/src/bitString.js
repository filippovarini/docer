const bitString = answers => {
  let result = "";
  answers.map(answer => {
    const chr = answer ? "1" : "0";
    result += chr;
  });
  return result;
};

module.exports = bitString;
