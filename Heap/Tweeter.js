class Twitter {
    constructor() {
        this.timeStamp = 0;
        this.userTweets = new Map();
        this.userFollows = new Map();
    }

    postTweet(userId, tweetId) {
        if (!this.userTweets.has(userId)) {
            this.userTweets.set(userId, []);
        }
        this.userTweets
            .get(userId)
            .push({ tweetId, timeStamp: this.timeStamp++ });
    }

    getNewsFeed(userId) {
        const minHeap = new PriorityQueue((a, b) => b.timeStamp - a.timeStamp);
        const follows = this.userFollows.get(userId) || new Set();
        follows.add(userId); // Include user's own tweets
        for (const followeeId of follows) {
            const tweets = this.userTweets.get(followeeId) || [];
            const tweetCount = tweets.length;
            const startIndex = Math.max(0, tweetCount - 10); // Start index for getting last 10 tweets
            for (let i = startIndex; i < tweetCount; i++) {
                minHeap.offer(tweets[i]);
                if (minHeap.size() > 10) minHeap.poll(); // Maintain heap size of 10
            }
        }
        const newsFeed = [];
        while (!minHeap.isEmpty()) {
            newsFeed.push(minHeap.poll().tweetId); // Extract tweetId from max heap
        }
        return newsFeed.reverse(); // Reverse to get tweets in descending order of timestamp
    }

    follow(followerId, followeeId) {
        if (!this.userFollows.has(followerId)) {
            this.userFollows.set(followerId, new Set());
        }
        this.userFollows.get(followerId).add(followeeId);
    }

    unfollow(followerId, followeeId) {
        if (followerId !== followeeId) {
            // User cannot unfollow himself
            const follows = this.userFollows.get(followerId) || new Set();
            follows.delete(followeeId);
        }
    }
}

class PriorityQueue {
    constructor(comparator) {
        this.comparator = comparator;
        this.heap = [];
    }

    offer(item) {
        this.heap.push(item);
        this.bubbleUp(this.heap.length - 1);
    }

    poll() {
        if (this.isEmpty()) return null;
        const removedItem = this.heap[0];
        const lastItem = this.heap.pop();
        if (!this.isEmpty()) {
            this.heap[0] = lastItem;
            this.bubbleDown(0);
        }
        return removedItem;
    }

    peek() {
        return this.isEmpty() ? null : this.heap[0];
    }

    size() {
        return this.heap.length;
    }

    isEmpty() {
        return this.heap.length === 0;
    }

    bubbleUp(index) {
        while (index > 0) {
            const parentIndex = Math.floor((index - 1) / 2);
            if (this.comparator(this.heap[index], this.heap[parentIndex]) > 0) {
                [this.heap[index], this.heap[parentIndex]] = [
                    this.heap[parentIndex],
                    this.heap[index],
                ];
                index = parentIndex;
            } else {
                break;
            }
        }
    }

    bubbleDown(index) {
        while (true) {
            let leftChild = 2 * index + 1;
            let rightChild = 2 * index + 2;
            let smallestIndex = index;
            if (
                leftChild < this.heap.length &&
                this.comparator(
                    this.heap[leftChild],
                    this.heap[smallestIndex],
                ) > 0
            ) {
                smallestIndex = leftChild;
            }
            if (
                rightChild < this.heap.length &&
                this.comparator(
                    this.heap[rightChild],
                    this.heap[smallestIndex],
                ) > 0
            ) {
                smallestIndex = rightChild;
            }
            if (smallestIndex !== index) {
                [this.heap[index], this.heap[smallestIndex]] = [
                    this.heap[smallestIndex],
                    this.heap[index],
                ];
                index = smallestIndex;
            } else {
                break;
            }
        }
    }
}

const twitter = new Twitter();

// Post tweets for 5 users
twitter.postTweet(1, 101);
twitter.postTweet(1, 102);
twitter.postTweet(2, 201);
twitter.postTweet(2, 202);
twitter.postTweet(3, 301);
twitter.postTweet(3, 302);
twitter.postTweet(4, 401);
twitter.postTweet(4, 402);
twitter.postTweet(5, 501);
twitter.postTweet(5, 502);
twitter.postTweet(1, 103);
twitter.postTweet(2, 203);
twitter.postTweet(3, 303);
twitter.postTweet(4, 403);
twitter.postTweet(5, 503);
twitter.postTweet(1, 104);
twitter.postTweet(2, 204);
twitter.postTweet(3, 304);
twitter.postTweet(4, 404);
twitter.postTweet(5, 504);

// User follows all other users
for (let i = 1; i <= 5; i++) {
    for (let j = 1; j <= 5; j++) {
        if (i !== j) {
            twitter.follow(i, j);
        }
    }
}

// Get news feed for User 1
const user1NewsFeed = twitter.getNewsFeed(1);
console.log('User 1 News Feed:', user1NewsFeed); // Expected output: [104, 103, 504, 503, 404, 403, 304, 303, 204, 203]
