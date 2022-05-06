import MonkeyLearn from 'monkeylearn';
import prompt from 'prompt';

prompt.start();
// I could als use readline
const sentiment = (someword) => {
  const ml = new MonkeyLearn('966d9ba43a3b7e0a4dcef92e92fdae1ed3f6833b');
  let model_id = 'cl_pi3C7JiL';

  let data = [someword];

  ml.classifiers.classify(model_id, data).then((res) => {
    const out = JSON.stringify(res.body);
    const option = 'Positive';
    if (out.includes(option)) {
      console.log(option);
    } else {
      console.log('Negative');
    }
  });
};
//    const rex = /"tag_name":"?([^"\s]+)"?\s*"/g;
//    const sentiment = out.matchAll(rex);

prompt.get(['word'], function (err, result) {
  //
  // Log the results.
  let inp = result.word;
  console.log('What about this word');
  console.log('this word:' + inp);

  sentiment(inp);
});
