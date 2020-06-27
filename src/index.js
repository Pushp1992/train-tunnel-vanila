
/**
 *  function to start train
 */

let startTrain = function (event) {
    event.preventDefault();

    /**
 * Generate dynamic div (TRAIN) conditionally
 */
    let tunnelCapacity = [];

    for (let trainCount = 1; trainCount <= 10; trainCount++) {

        /** Condition for play button */
        // var btn = document.getElementById('startBtn');
        // if (trainCount < 10) {
        //     btn.disabled = true;
        //     btn.innerHTML = "playing.."
        // }

        setTimeout(() => {
            if (tunnelCapacity.length < 3) {
                tunnelCapacity.unshift(trainCount);
                addTrain(tunnelCapacity);
            } else {
                removeTrain(tunnelCapacity);
                tunnelCapacity.pop();
            }

            console.log(tunnelCapacity)

        }, 1000 * trainCount);

    };

    let addTrain = function (tunnelCapacity) {
        let mainDiv = document.getElementById("tunnel");

        var div = document.createElement("button");  // Create a <div> element
        div.setAttribute("style", "width:150px;padding:4px;margin-left:25px");
        div.setAttribute("class", "trainClass");
        var node = document.createTextNode(tunnelCapacity[0]);  // Create a text node
        div.appendChild(node);  // Append the text to <div>
        mainDiv.appendChild(div);
    };

    let removeTrain = function () {
        console.log("tunnelCapacity", tunnelCapacity)

        let trainList = document.getElementsByClassName("trainClass");
        trainList[trainList.length - 1].remove();
        console.log("trainClass", trainList)
    }



}