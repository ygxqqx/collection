// 题目描述
// 输入一个整数，输出该数二进制表示中1的个数。其中负数用补码表示。

class Solution {
public:
    int NumberOf1(int n) {
        int count = 0;
        int flag = 1;
        while (flag) {
            if (n & flag) {
                count++;
            }
            flag = flag << 1;
        }
        return count;
    }
};
// 1010110011