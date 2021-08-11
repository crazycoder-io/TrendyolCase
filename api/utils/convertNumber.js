module.exports = (value) => `${value.toString().split(".")[0]}.${value.toString().split(".")[1].toString().substring(0, 3)}`;
