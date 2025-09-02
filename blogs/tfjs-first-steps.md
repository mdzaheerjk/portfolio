---
title: First Steps with TensorFlow.js
date: 2025-02-10
---

TensorFlow.js lets you run ML in the browser. A minimal flow:

1. Build a model: layers, activation, loss, optimizer.
2. Prepare tensors: shapes and dtypes matter.
3. Fit the model: `await model.fit(xs, ys)`.
4. Predict: `model.predict(x)` returns tensors.

Example tiny classifier:

```js
const model = tf.sequential();
model.add(tf.layers.dense({ units: 8, inputShape: [2], activation: 'relu' }));
model.add(tf.layers.dense({ units: 1, activation: 'sigmoid' }));
model.compile({ optimizer: 'adam', loss: 'binaryCrossentropy' });
```

In browsers, keep models small and leverage WebGL acceleration when available.


