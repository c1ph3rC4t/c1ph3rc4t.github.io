try {
  navigator.clipboard.writeText(cmdList[cmd.args.l])
} catch(err) {
  navigator.clipboard.writeText(cmdList[cmdList.length - 1])
}
