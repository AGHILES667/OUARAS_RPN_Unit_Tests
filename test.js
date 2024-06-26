import { expect } from 'chai';
import { mainFunction } from './rpn.js';

describe('RPN Calculator', function() {
  it('Retourner 0 pour une expression vide', function() {
    expect(mainFunction('')).to.equal(0);
  });

  it('Si on écrit un nombre seul, on le retourne', function() {
    expect(mainFunction('5')).to.equal(5);
  });

  it('Addition Simple', function() {
    expect(mainFunction('3 4 +')).to.equal(7);
  });

});
