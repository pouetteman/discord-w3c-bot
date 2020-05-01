function checkBattleTag(battleTag) {
  return battleTag.match(/[[:alnum:]]+#{1}[0-9]+/gm);
}

module.exports.checkBattleTag = checkBattleTag;
