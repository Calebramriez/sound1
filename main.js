function startClassification(){
    navigator.mediaDevice.getUserMedia({audio:true});
    classifier=ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/eiLpdOb0t/model.json',modelReady);

}
function modelReady(){
    classifier.classify(gotResults);
}
function gotResults(error,results){
    console.log('got result');
}