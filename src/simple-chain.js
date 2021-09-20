import { NotImplementedError } from '../extensions/index.js';

/**
 * Implement chainMaker object according to task description
 * 
 */
export default {
  chain: [],

  getLength() {
    return this.chain.length;
  },

  addLink(value) {
    if (value !== undefined) {
      this.chain.push('( ' + value + ' )');
    }
    else {
      this.chain.push('(  )');
    }
    return this;
  },

  removeLink(position) {
    
    if (!Number.isInteger(position) || position <= 0 || this.chain[position - 1] === undefined) {
      this.chain = [];
      throw new Error("You can't remove incorrect link!");
    }
    else {
      this.chain.splice(position - 1, 1);
    }

    return this;
  },

  reverseChain() {
    this.chain.reverse();
    return this;
  },

  finishChain() {
    let finalChain = '';
    finalChain = this.chain.join('~~');
    this.chain = [];
    return finalChain;
  }
};
