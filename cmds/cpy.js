if (cmd.flags.includes('p')) {
  getInput('Input: ').then((input) => {
    navigator.clipboard.writeText(cmdHistory[cmdHistory.length - 1 - input]);
    console.log(input);
  });

} else if ('i' in cmd.args) {
  navigator.clipboard.writeText(cmdHistory[cmdHistory.length - 1 - cmd.args.i]);
} else if ('item' in cmd.args) {
  navigator.clipboard.writeText(cmdHistory[cmdHistory.length - 1 - cmd.args.item]);
} else {
  navigator.clipboard.writeText(cmdHistory[cmdHistory.length - 2]);
};
