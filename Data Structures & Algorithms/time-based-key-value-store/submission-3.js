class TimeMap {
    constructor() {
        this.keyStore = new Map();
    }

    /**
     * @param {string} key
     * @param {string} value
     * @param {number} timestamp
     * @return {void}
     */
    set(key, value, timestamp) {
        if(this.keyStore.has(key)) {
            const valueKey = this.keyStore.get(key);
            valueKey.timestamps.push(timestamp);
            valueKey.values.push(value);
        }
        else {
            this.keyStore.set(key, { timestamps: [timestamp], values: [value] })
        }
    }

    /**
     * @param {string} key
     * @param {number} timestamp
     * @return {string}
     */
    get(key, timestamp) {
        if(!this.keyStore.has(key)) {
            return "";
        }
        const keyValues = this.keyStore.get(key);        
        const maxIndex = this.binarySearch(keyValues.timestamps, timestamp);
        return maxIndex === -1 ? "" : keyValues.values[maxIndex];
    }

    binarySearch(array, value) {
        let left = 0;
        let right = array.length - 1;
        let result = -1;
        while(left <= right) {
            const middle = Math.floor((left + right) / 2);
            if(array[middle] <= value) {
                result = middle;
                left = middle + 1;
            }
            else {
                right = middle - 1;
            }
        }
        return result;
    }
}


// var _keyStore = {
//     "test": {
//         timestamps: [10, 20, 30],  ||| 25
//         values: ["one", "two", "three"]
//     },
//     // ...
// }

// [1, 2, 3, 4, 5] | ts = 4.5



