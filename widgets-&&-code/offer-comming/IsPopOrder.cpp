// 题目描述
// 输入两个整数序列，第一个序列表示栈的压入顺序，请判断第二个序列是否为该栈的弹出顺序。
// 假设压入栈的所有数字均不相等。例如序列1,2,3,4,5是某栈的压入顺序，
// 序列4,5,3,2,1是该压栈序列对应的一个弹出序列，
// 但4,3,5,1,2就不可能是该压栈序列的弹出序列。（注意：这两个序列的长度是相等的）

class Solution {
public:
    bool IsPopOrder(vector<int> pushV,vector<int> popV) {
        bool isPopOrder = false;
        stack<int> s;
        int push_i = 0;
        int pop_i = 0;
        while (push_i < pushV.size() && pop_i < popV.size()) {
            if (s.empty()) {
                s.push(pushV[push_i]);
            }
            if (s.top() == popV[pop_i]) {
                s.pop();
                pop_i++;
            } else {
                push_i++;
                s.push(pushV[push_i]);
            }
        }
        if (pop_i >= popV.size() && s.empty()) isPopOrder = true;
        return isPopOrder;
    }
};

