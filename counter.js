

var timeBegan = null;
var timeStopped = null;
var stoppedDuration = 0;
var startInterval = null;
var flag = false;
const timeContainer = document.querySelector('.timerContainer');
timeContainer.addEventListener('click',function() {
    if(!flag)
    {
        startTimer();
        flag = true;
    }
    if(flag)
    {
        stopTimer();
        flag = false;
    }

});

function startTimer()
{
   if(timeBegan == null)
   {
    timeBegan = new Date();
   }
   if(timestopped !== null)
   {
    stoppedDuration += (newDate() - timeStopped);
   }
   startInterval = setInterval(clockRunning,10);
}
function stopTimer()
{
    timeStopper = new date();
    clearInterval(startInterval);

}
function clockRunning()
{
   var currentTime = new date();
   var timeElapsed = newDate(currentTime - timeBegan -stoppedDuration);
   var minutes = timeElapsed.getUtcMinutes();
   var seconds = timeElapsed.getUtcseconds();
   var millisecond = timeElapsed.getUtcMilliseconds();
   milliseconds = Math.floor(milliseconds/10);
   document.getElementById("timer-display").innerHTML = 
   (minutes = minutes<10 ? '0' + minutes : minutes) + ":" +
   (seconds = seconds<10 ? '0' + seconds : seconds) + ":" +
   (milliseconds = milliseconds<10 ? '0' + milliseconds:milliseconds);

}