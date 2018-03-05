module.exports = function longestConsecutiveLength(array) {
  // your solution here



    var mergeSort = function(arrayExample){
        var chunkSize = arrayExample.length / 2;
        if(chunkSize >= 1){
            var left = mergeSort(arrayExample.slice(0, chunkSize));
            var right = mergeSort(arrayExample.slice(chunkSize));

            var result = [];
            while(left.length && right.length){
                if(left[0] < right[0]){
                    result.push(left.shift());
                } else{
                    result.push(right.shift());
                }
            }

            return result.concat(left, right);
        }

        return arrayExample;
    };


    array=mergeSort(array);
    var length=1,  curLength=1;


    if(array.length!=0) {
        for (let i = 0; i < array.length; i++) {
            if (array[i] + 1 == array[i + 1] || array[i] == array[i + 1]) {
                if (array[i] + 1 == array[i + 1]) {
                    curLength++;
                }
                else continue;
            }
            else {
                if (curLength > length) {
                    length = curLength;
                    curLength = 1;
                }
                curLength = 1;
            }
        }

        return length;
    }
    else return 0;
}
