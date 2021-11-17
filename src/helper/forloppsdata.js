const dummyData = () => {
  let dummy = [];

  for (let i = 0; i < 10; i++) {
    dummy.push(i);
  }

  return dummy;
};

const dummyData2 = () => {
  let dummy = [];

  for (let i = 0; i < 10; i++) {
    dummy.push(i + "asbc");
  }

  return dummy;
};
export { dummyData, dummyData2 };
