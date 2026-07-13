class Solution {
    /**
     * @param {number} target
     * @param {number[]} position
     * @param {number[]} speed
     * @return {number}
     */
    carFleet(target, position, speed) {
        const tuplas = [];
        for(let i = 0; i < position.length; i++) {
            tuplas.push([position[i], speed[i]]);
        }
        // sorting by position desc:
        tuplas.sort((a, b) => b[0] - a[0]);

        //console.log(`tuplas:`, tuplas);

        let carFleets = 1;
        let prevTime = (target - tuplas[0][0]) / tuplas[0][1]

        for(let i = 0; i < tuplas.length; i++) {
            const [position, speed] = tuplas[i];
            const time = (target - position) / speed;

            if(time > prevTime) {
                carFleets++;
                prevTime = time;
            }
        }

        return carFleets;
    }
}
