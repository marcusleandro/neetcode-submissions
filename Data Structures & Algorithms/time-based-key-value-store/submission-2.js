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
        const timestamps = keyValues.timestamps;

        // console.log(`timestamps=${timestamps}`);
        // console.log(`values=${keyValues.values}`);


        let left = 0;
        let right = timestamps.length - 1;
        let result = -1;

        while(left <= right) {
            const middle = Math.floor((left + right) / 2);
            if(timestamps[middle] <= timestamp) {
                result = middle;
                left = middle + 1;
            }
            else {
                right = middle - 1;
            }
        }

        return result === -1 ? "" : keyValues.values[result];
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



