import { NotImplementedError } from '../extensions/index.js';

/**
 * Extract season from given date and expose the enemy scout!
 * 
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 * 
 * @example
 * 
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 * 
 */
export default function getSeason(date) {
  const seasonsMapping = { 
                          "winter" : ["Jan", "Dec", "Feb"], 
                          "spring" : ["Mar", "Apr", "May"], 
                          "summer" : ["Jun", "Jul", "Aug"],
                          "fall" : ["Sep", "Oct", "Nov"]
                        }
  let season = 0;
  if (typeof(date) !== 'undefined') {
    if (Object.prototype.toString.call(date) !== '[object Date]' || !(date instanceof Date) || typeof date !== 'object' || Object.keys(date).length > 0) {
    throw new Error('Invalid date!');
  }
    let month = date.toDateString().split(" ")[1];
    for (var key in seasonsMapping)
      if (seasonsMapping[key].indexOf(month) !== -1) {
        season = key;
        break;
      }
    return season;
  }
  return 'Unable to determine the time of year!';
}
