if ('u' in cmd.args) {
  redir(cmd.args.u);
} else if ('url' in cmd.args) {
  redir(cmd.args.url);
} else {
  getInput('URL: ').then((input) => {
    redir(input);
  });
};
