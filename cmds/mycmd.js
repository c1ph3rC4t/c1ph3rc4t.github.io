if ('c' in cmd.args) {
  eval(cmd.args.c)
} else {
  getInput('Custom JS code: ').then((input) => {
    eval(input);
  });
};
