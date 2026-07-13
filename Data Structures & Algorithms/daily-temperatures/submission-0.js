class Solution {
    /**
     * @param {number[]} temperatures
     * @return {number[]}
     */
    dailyTemperatures(temperatures) {
        const result = new Array(temperatures.length).fill(0);
        const stack = [];

        for(let i = 0; i < temperatures.length; i++) {
            const temp = temperatures[i];            
            
            while(stack.length && temp > stack[stack.length - 1][0]) {
                const [_, indice] = stack.pop();
                result[indice] = i - indice;
            }            

            stack.push([temp, i]);
        }

        return result;
    }
}
