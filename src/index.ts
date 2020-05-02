/*import * as tf from '@tensorflow/tfjs';
// Define a model for linear regression.
const model = tf.sequential();
model.add(tf.layers.dense({units: 1, inputShape: [1]}));

 
// Prepare the model for training: Specify the loss and the optimizer.
model.compile({loss: 'meanSquaredError', optimizer: 'sgd', metrics:['accuracy']});
 

const xs = tf.tensor2d([1,2,3,4,5,6,7,8], [8,1]);
const ys = tf.tensor2d([1*1,2*2,3*3,4*4,5*5,6*6,7*7,8*8], [8,1]);

const xe = tf.tensor2d([9,10,11], [3,1]);
const ye = tf.tensor2d([9*9,10*10,11*11], [3,1]);

model.fit(xs,ys,{epochs:20}).then((v)=>{
    console.log(v);
    const e = model.evaluate(xe, ye);
    //console.log(e.toString());

    const p = model.predict(tf.tensor2d([5], [1, 1]));
    console.log(p.toString() + " == " + 5*5);
})
*/

import * as mi from '@magenta/image';
const model = new mi.ArbitraryStyleTransferNetwork();
const contentImg = document.getElementById('content') as HTMLImageElement;
const styleImg = document.getElementById('style') as HTMLImageElement;
const stylizedCanvas = document.getElementById('stylized') as HTMLCanvasElement;
 
function stylize() {
  model.stylize(contentImg, styleImg).then((imageData) => {
    stylizedCanvas.getContext('2d').putImageData(imageData, 0, 0);
  });
}
 
model.initialize().then(stylize);

/*

// Generate some synthetic data for training.
const xs = tf.tensor2d([1, 2, 3, 4], [4, 1]);
const ys = tf.tensor2d([1, 3, 5, 7], [4, 1]);
 
// Train the model using the data.
model.fit(xs, ys).then(() => {
  // Use the model to do inference on a data point the model hasn't seen before:
  model.predict(tf.tensor2d([5], [1, 1])).print();
});*/