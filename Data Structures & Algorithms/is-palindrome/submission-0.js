class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
        let left = 0, right = s.length - 1;

        while(left < right) {
            while(this.isNonAlphanumericChar(s[left]) && left < right) {
                left++;
            }
            while(this.isNonAlphanumericChar(s[right]) && left < right) {
                right--;
            }

            if(s[left].toLocaleLowerCase() != s[right].toLocaleLowerCase()) {
                return false;
            }

            left++;
            right--;
        }

        return true;
    }

    /**
     * @param (string) c
     */
    isNonAlphanumericChar(c) {
       const regex = /[a-z]|[A-Z]|[0-9]/gi;
       return !regex.test(c);
    }
}
