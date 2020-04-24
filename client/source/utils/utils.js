export const someFunc = (props, callback) => {
  console.log(props);
  const status = {
    count: 10,
  };
  callback(status);
};
