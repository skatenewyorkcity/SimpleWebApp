<!DOCTYPE html>
<html>
<body>

<h2>Skatenator</h2>

<p>
<script>

var getTrickCounter = -1;
var retryTrickCounter = 0;
var tricks = ["ollie", "nollie", "switchOllie", "fakieOllie"];
var retryStat = [];



function getTrick(t){
	if(tricks[t] === undefined){
      getTrickCounter = -1;
      document.getElementById("tricks").innerHTML = "EndOfTricks";
    }else{
      document.getElementById("tricks").innerHTML = tricks[t];
      document.getElementById("trickAmmount").innerHTML = tricks.length;
    }
}

function getTrickOnClick(){
	getTrickCounter += 1;
    document.getElementById("clicks").innerHTML = getTrickCounter;
}

function retryTrickOnClick(){
	retryTrickCounter += 1;
    document.getElementById("retries").innerHTML = retryTrickCounter;
}

function resetTrickCounter(){
	retryTrickCounter = 0;
    document.getElementById("retries").innerHTML = retryTrickCounter;
}

function saveStatForTrick(r){
	retryStat.push(r);
    document.getElementById("retryStat").innerHTML = retryStat;
}

function resetStat(){
		if(retryStat.length === 5){
		retryStat = [];
        }
}

</script>
</p>

<p>
Trick: <a id="tricks"> click "get trick" to begin</a>
</p>

<h3>
<button type="button" onclick="getTrickOnClick(); getTrick(getTrickCounter); saveStatForTrick(retryTrickCounter); resetTrickCounter(); resetStat(getTrickCounter);">get trick</button>
<button type="button" onclick="retryTrickOnClick();">retry trick</button>
</h3>

<p>
getTrickOnClick: <a id="clicks">0</a>
</p>

<p>
retryTrickOnClicked: <a id="retries">0</a>
</p>

<p>
retryStat: <a id="retryStat">0</a>
</p>

<p>
trickAmmount: <a id="trickAmmount">0</a>
</p>

</body>
</html> 


