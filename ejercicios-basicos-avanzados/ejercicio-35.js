const mutants = [
  { name: 'Wolverine', power: 'regeneration' },
  { name: 'Magneto', power: 'magnetism' },
  { name: 'Professor X', power: 'telepathy' },
  { name: 'Jean Grey', power: 'telekinesis' },
  { name: 'Rogue', power: 'power absorption' },
  { name: 'Storm', power: 'weather manipulation' },
  { name: 'Mystique', power: 'shape-shifting' },
  { name: 'Beast', power: 'superhuman strength' },
  { name: 'Colossus', power: 'steel skin' },
  { name: 'Nightcrawler', power: 'teleportation' }
];

function findMutantByPower(mutants, power) {
  let found = false;

  for (const mutant of mutants) {
    if (mutant.power === power) {
      found = true;
      break; // ya sabemos que existe, no hace falta seguir
    }
  }

  return found
    ? `Sí, existe al menos un mutante con el poder "${power}".`
    : `No se encontró ningún mutante con el poder "${power}".`;
}

console.log(findMutantByPower(mutants, "telepathy"));       // Sí, existe...
console.log(findMutantByPower(mutants, "flight"));          // No se encontró...
console.log(findMutantByPower(mutants, "telekinesis"));     // Sí, existe...
