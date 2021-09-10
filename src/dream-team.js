import { NotImplementedError } from '../extensions/index.js';

/**
 * Create name of dream team based on the names of its members
 *  
 * @param {Array} members names of the members 
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 * 
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
export default function createDreamTeam(members) {
  var dreamTeam = '';
  if (Array.isArray(members)) {
    for (let i = members.length; i--;) {
      if (typeof(members[i]) !== "string")
        members.splice(i, 1);
    }
    for (let i = 0; i < members.length; i++) {
      members[i] = members[i].trim().charAt(0).toUpperCase();
    }
    members.sort()
    dreamTeam = members.join("");
    return dreamTeam;
  }
  return false;
}