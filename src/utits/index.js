const convertStringtoMoney = (value) => {
  const convert = value.toLocaleString("it-IT", { style: "currency", currency: "VND" });
  return convert;
};

export { convertStringtoMoney };
