try {
  navigator.clipboard.writeText(cmdHistory[cmd.args.l])
} catch(err) {
  navigator.clipboard.writeText(cmdHistory[cmdHistory.length - 1])
}
