/**
 * @param {number} n - a positive integer
 * @return {number} - a positive integer
 */
var reverseBits = function(n) {
    let res = 0
    let i = 32

    while(i--) {
        // res*2 is binary shift left by 1
        //  res <<= 1
        res *= 2
       
        // if last bit of n is 1 then add this
        // if(n & 1 == 1) res ^= 1
        res += n & 1

        n >>= 1
    }

    return res
};

export default reverseBits