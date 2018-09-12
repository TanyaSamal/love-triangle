/**
 * @param preferences - an array of integers. Indices of people, whom they love
 * @returns number of love triangles
 */
module.exports = function getLoveTrianglesCount(preferences = []) {
  var count = 0;
  for (var i = 0; i < preferences.length; i++){
    var x = i + 1;
    if (x == preferences[i]) continue;
    var y = preferences[x - 1];
    var z = preferences[y - 1];
    if (preferences[z - 1] == x){
      count++;
      preferences[x - 1] = preferences[y - 1] = preferences[z - 1] = 0;
    }
  }
  return count;
};
