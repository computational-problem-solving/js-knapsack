import assert from 'assert';

const integerKnapsack = (v, w, n, W, m = new w.constructor(W + 1).fill(0)) => {
	assert(v.length === n);
	assert(w.length === n);
	assert(Number.isInteger(W) && W >= 0);
	assert(m.length >= W + 1);
	for (let i = 0; i < n; ++i) {
		const x = w[i];
		for (let j = W; j >= x; --j) {
			m[j] = Math.max(m[j], m[j - x] + v[i]);
		}
	}

	return m[W];
};

export default integerKnapsack;
