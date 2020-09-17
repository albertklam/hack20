async function run() {
  alert("Predicting. Please wait...");
  const model = await tf.automl.loadObjectDetection('model.json');
  const img = document.getElementById('testimage');
  const options = {score: 0.5, iou: 0.5, topk: 20};
  const predictions = await model.detect(img, options);
  console.log(predictions);
  // Show the resulting object on the page.
  const pre = document.createElement('pre');
  pre.textContent = JSON.stringify(predictions, null, 2);
  document.body.append(pre);

  drawBoxes(predictions);
}

// Overlays boxes with labels onto the image using `rect` and `text` svg
// elements.
function drawBoxes(predictions) {
  const svg = document.querySelector('svg');
  predictions.forEach(prediction => {
    const {box, label, score} = prediction;
    const {left, top, width, height} = box;
    const rect = document.createElementNS('http://www.w3.org/2000/svg', 'rect');
    rect.setAttribute('width', width);
    rect.setAttribute('height', height);
    rect.setAttribute('x', left);
    rect.setAttribute('y', top);
    rect.setAttribute('class', 'box');
    const text = document.createElementNS('http://www.w3.org/2000/svg', 'text');
    text.setAttribute('x', left + width / 2);
    text.setAttribute('y', top);
    text.setAttribute('dy', 12);
    text.setAttribute('class', 'label');
    text.textContent = `${label}: ${score.toFixed(3)}`;
    svg.appendChild(rect);
    svg.appendChild(text);
    const textBBox = text.getBBox();
    const textRect =
        document.createElementNS('http://www.w3.org/2000/svg', 'rect');
    textRect.setAttribute('x', textBBox.x);
    textRect.setAttribute('y', textBBox.y);
    textRect.setAttribute('width', textBBox.width);
    textRect.setAttribute('height', textBBox.height);
    textRect.setAttribute('class', 'label-rect');
    svg.insertBefore(textRect, text);
  });
}