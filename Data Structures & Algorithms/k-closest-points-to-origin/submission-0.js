class Solution {
    /**
     * @param {number[][]} points
     * @param {number} k
     * @return {number[][]}
     */
    kClosest(points, k) {
        const distances = points.map(([x, y]) => ({ 
            point: [x, y], 
            dist: Math.sqrt(x ** 2 + y ** 2) }));

        distances.sort((a, b) => a.dist - b.dist);

        return distances
            .filter((d, i) => i < k)
            .map(d => d.point);
    }
}
