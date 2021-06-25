window.setTimeout(function(){ //Delays entire function by 0.5 seconds
    let menuOpt = prompt("What would you like to do?");
    const list = [];
    while(menuOpt !== 'quit'){            
        if(menuOpt.toLowerCase() === "add"){
            const userOpt = prompt("What would you like to add to your list?");
            list.push(userOpt);
            console.log(`Successfully added ${userOpt}.`);
        }else if(menuOpt.toLowerCase() === "remove"){
            const userStrIndex = parseInt(prompt("Enter the index of the item to remove it from your list?"));
            if(userStrIndex > list.length)
                console.log("The index is not in your list. Please try again.");
            else if(!Number.isNaN(userStrIndex)){
                const removed = list.splice((userStrIndex-1),1);
                console.log(`Successfully removed ${removed[0]}`);
            }else
                console.log("Unknown index, please try again.");    
        }else if(menuOpt.toLowerCase() === "list"){
            console.clear();
            console.log("My List");
            console.log("***********\n");
            for (let i = 0; i < list.length; i++){
                console.log(`${i+1}. ${list[i]}`);
            }    
        }else
        alert("Sorry I didn't recognize that. Please try again.");
        menuOpt = prompt("What would you like to do?");
    }
    if (menuOpt === 'quit'){ //This displays when you quit.
        console.log("\n");
        console.log("You have closed the app. See you later!");
    }
}, 500);