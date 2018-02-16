function theBeatlesPlay(musicians, instruments) {
  var allMusicians =[];
  for (var i = 0; i < musicians.length; i++) {
    allMusicians.push(musicians[i] + " plays " + instruments[i]);
  }
  return allMusicians;
}
function johnLennonFacts(facts) {
  const shoutedFacts = []

  let i = 0
  while (i < facts.length) {
    shoutedFacts.push(`${facts[i]}!!!`)
    i++
  }

  return shoutedFacts
}