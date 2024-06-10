
/**
 * Déclarer une fonction fléchée qui renvoi l'argument + 1
 * Le return est explicite
 * 
 * contrainte: 
 *   - le mot clé "function" est interdit
 */

const arrow1 = (arg) => {
  return arg + 1;
};

/**
 * Déclarer une fonction fléchée qui renvoi l'argument + 1
 * Le return est implicite
 * 
 * contrainte: 
 *   - le mot clé "function" est interdit
 *   - le mot clé "return" est interdit
 */

// const arrow2 ...
const arrow2 = (arg) => arg + 1;
module.exports = {arrow1, arrow2};