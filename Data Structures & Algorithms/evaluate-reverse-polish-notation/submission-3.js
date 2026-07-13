class Solution {
    /**
     * @param {string[]} tokens
     * @return {number}
     */
    evalRPN(tokens) {
        const stack = [];
        const operators = ['+', '-', '*', '/'];

        for(let token of tokens) {
            if(operators.includes(token)) {
                const second = stack.pop();
                const first = stack.pop();
                let result;
                if(token === '+') {
                    result = first + second;
                }
                else if(token === '-') {
                    result = first - second;
                }
                else if(token === '*') {
                    result = first * second;
                }
                else if(token === '/') {
                    result = Math.trunc(first / second);
                }
                stack.push(result);
            } 
            else {
                stack.push(Number(token));
            }
        }

        return stack.pop();
    }
}
