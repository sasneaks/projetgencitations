#!/usr/bin/env node

const citationAleatoire = require('../src/app');

function main() {
  const quote = citationAleatoire();
  console.log('Citation:');
  console.log(quote);
}

main();
