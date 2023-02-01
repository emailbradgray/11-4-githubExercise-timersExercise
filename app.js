

/*Countdown Exercise*/
/*to test, run index.html, more developer tools
from console, type countdown (0) after that runs,
type countdown(4)*/

function countDown(fromConsole){
    let watchThis = fromConsole
    
    
        if(watchThis <=0) {
        console.log('Please enter a number above 0');
        console.log("Like the number 4");
        }
    
    
        if(watchThis > 0) {
        console.log('Congrats, you started with a number above 0', watchThis)
        console.log('Lets count down every 1 second')
        watchThis = setInterval(function(){
            fromConsole--;
            /*console.log(watchThis)*/
            console.log(fromConsole)
            if (fromConsole <=1) {
                clearInterval(watchThis)
                /*console.log(fromConsole)*/
                    console.log("done")
                    
            }
            
    
        },1000)
    }
    }
    
    
    function randomGame(){
        let getThis = Math.random();
        
        let times = 0;
        let timer = setInterval(function() {
            getThis; times++
            
            if(getThis <=.75) {
                getThis = (getThis * 1.25)
                console.log(getThis)
            }
        
            if(getThis > .75) {
                /*console.log(getThis)*/
                clearInterval(timer);
                console.log("It took " + times + " tries")
        
            }
        
        },1000)
        
        }
    