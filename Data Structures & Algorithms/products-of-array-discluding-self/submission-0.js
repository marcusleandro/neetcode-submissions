class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
        let zerosQty = 0;
        let product = 1;

        for(let num of nums) {
            if(num === 0) {
                zerosQty++;
                if(zerosQty > 1) {
                    product *= num;
                }
            }
            else {
                product *= num;
            }
        }

        const result = [];
        
        for(let num of nums) {
            if(num === 0) {
                result.push(product);
            }
            else {
                result.push(zerosQty === 1 ? 0 : product / num);
            }
        }

        return result;
    }
}
