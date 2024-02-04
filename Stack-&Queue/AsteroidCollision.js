// Problem: https://leetcode.com/problems/asteroid-collision/

// Brute Force Approach

// function asteroidCollision(asteroid) {
//     let map = new Set();
//     let res = [];
//     for (let i = 0; i < asteroid.length; i++) {
//         if (asteroid[i] > 0) {
//             for (let j = i + 1; j < asteroid.length; j++) {
//                 if (asteroid[j] > 0) break;
//                 if (asteroid[i] == Math.abs(asteroid[j])) {
//                     map.add(i);
//                     map.add(j);
//                     break;
//                 } else if (asteroid[i] < Math.abs(asteroid[j])) {
//                     map.add(i);
//                     break;
//                 } else if (asteroid[i] > Math.abs(asteroid[j])) {
//                     map.add(j);
//                 }
//             }
//         } else {
//             for (let k = i - 1; k >= 0; k--) {
//                 // if (asteroid[k] < 0) break;
//                 if (asteroid[k] > 0) {
//                     if (Math.abs(asteroid[i]) == asteroid[k]) {
//                         map.add(i);
//                         map.add(k);
//                         break;
//                     } else if (Math.abs(asteroid[i]) < asteroid[k]) {
//                         map.add(i);
//                         break;
//                     } else if (Math.abs(asteroid[i]) > asteroid[k]) {
//                         map.add(k);
//                     }
//                 }
//             }
//         }
//     }
//     for (let p = 0; p < asteroid.length; p++) {
//         if (!map.has(p)) res.push(asteroid[p]);
//     }
//     return res;
// }

// Time: O(n^2) Space: O(n)

// Optimal Approach

function asteroidCollision(asteroid) {
    let stack = [];
    for (let i = 0; i < asteroids.length; i++) {
        if (asteroids[i] < 0) {
            while (
                stack.length > 0 &&
                stack[stack.length - 1] > 0 &&
                Math.abs(asteroids[i]) > stack[stack.length - 1]
            ) {
                stack.pop();
            }
            if (stack.length === 0 || stack[stack.length - 1] < 0) {
                stack.push(asteroids[i]);
            }
            if (
                stack.length > 0 &&
                stack[stack.length - 1] > 0 &&
                Math.abs(asteroids[i]) == stack[stack.length - 1]
            ) {
                stack.pop();
            }
        } else {
            stack.push(asteroids[i]);
        }
    }
    return stack;
}

// Time: O(n) Space: O(n)
console.log(asteroidCollision([-2, 8, 4, -6, 7, -9]));
console.log(asteroidCollision([5, 10, -5]));
console.log(asteroidCollision([5, -5]));
console.log(asteroidCollision([10, 2, -5]));
