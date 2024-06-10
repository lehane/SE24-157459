
/**
 * Créez une fonction asynchrone qui attend 2 seconde
 * 
 * utilisez new Promise 
 */

const sleep = (ms) => new Promise(resolve => setTimeout(resolve, ms));

module.exports = {sleep};