if ('c' in cmd.args) {
  eval(cmd.args.c)
} else {
  getInput('Input: ').then((input) => {
    eval(input);
  });
};
