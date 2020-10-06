const data = [
  ["Mallory", "Everest", "Mont Blanc", "Pillar Rock"],
  ["Mawson", "South Pole", "New Hebrides"],
  ["Hillary", "Everest", "South Pole"],
];

const prs = (explorers) => {
  const notSortedToponims = [];

  for (const explorer of explorers) {
    notSortedToponims.push(...explorer.slice(1, explorer.length));
  }

  const uniqueToponyms = [...new Set(notSortedToponims)];

  const returnArray = [];

  for (const toponym of uniqueToponyms) {
    const toSave = [toponym];

    for (const explorer of explorers) {
      const toponyms = explorer.slice(1, explorer.length);
      if (toponyms.includes(toponym)) {
        toSave.push(explorer[0]);
      }
    }

    returnArray.push(toSave);
  }
  return returnArray;
};

console.log(prs(data));
