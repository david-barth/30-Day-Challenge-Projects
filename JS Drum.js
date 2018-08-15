// 1. Variables List:

const max_button = document.getElementById("maxime");
const nadine_button = document.getElementById("Nadine");
const malcolm_button = document.getElementById("Malcolm");
const trish_button = document.getElementById("Trish");
const div1 = document.querySelector('.Button_Set_1');
let max_click = 0;
let trish_click = 0; 
let nadine_click = 0; 
let malcolm_click = 0;  
let click_bank = [max_click, nadine_click, trish_click, malcolm_click]
let button_bank = [max_button, nadine_button, trish_button, malcolm_button]

//2. Master Control function:
const master = (event) => {
        let target1 = event.target.className; 
        target1 = '' + target1; 
        for (let i = 0; i < button_bank.length; i += 1) {
            let target2 = button_bank[i]; 
            target2 = '' + target2.className
            if (target1 === target2) { 
                click_bank[i] += 1; 
                let test1 = Math.ceil(click_bank[i]/2) 
                let test2 = (click_bank[i]/2) + 0.5 
                let selected_set = document.querySelectorAll(`.${target1}`); 
                if (test1 === test2) { 
                    selected_set[1].play();
                } else {
                    selected_set[1].pause();
                }
            }
        }
    };

div1.addEventListener('click', master);


//Development Notes: 


//Overall Explanation: This is an unrefined master control function for the button-sound webpage.  
// It is divided primarily into several main parts: an event-button matching system, a click counter matching + updating system, and an even/odd numbered click system that controls basic audio features.
// Each part directly feeds into the next part.

//Event matching system:

//The event targeting captures the location of click event on one of the buttons and converts the class name of the clicked button as a string. 
//The next sequence picks out a reference button by iterating through an array of the html buttons.  This reference button is meant to match the clicked button. 
//The loop also iterates through an array of click counters that are designated to each button.

//Click Counter Matching System: 

//The reference button (target 2) is conditionally matched with the clicked button (target 1) in order to tie any further code to the event button and thus the reference button is 'chosen' by this previous matching.
//Through sharing the same array indices, the buttons are now tied to their click counters and will capture clicks specifically assigned to them. 
//These click counter values will play an essential role in determining audio execution.

//Even/odd numbered click system:

//Two mathematically programmed variables are to test for odd  and even numbers. 
//Test 1 halves the click total and rounds it up to the nearest integer.  In odd click totals this will produce a floating point decimal of (n/2) + 0.5.
//Test 2 uses this formula as a self test against test 1.  In cases of equality, an odd number of clicks is present. Vice versa for inequalities in case of even click totals.
//These tests have the relevant click counter system automatically assigned to them, via earlier systems. 
//DOM query selection, using class name pairs of audio and button tags, are used to couple the button to it's designated audio tag.
//From here, treating the pair as an array, the audio is selected from the pair.  It's behavior is then determined by the click counter total and previously mentioned tests. 
//If odd, the program conditionally starts the audio and if even, the program pauses the audio. 
//This mimicks normal play and pause features seen in online video playsers. 

//This entire master function is then tied to a single event handler that is attached to the sole div tag within the html index. 
//This event handler efficiently reads events that bubble up through the DOM tree and these are targetted by the event matching system, as explained above. 



//Future Ideas to Implement in the Next Version: 

// -> Update visuals through CSS to allow for button pressing animations. 
// -> Isolate the behavior of the buttons so that when one is pressed after another, the audio does not superimpose on the other. 
// -> Add a reload feature to ensure that buttons are reloaded upon another button being pressed. 
// -> Creating a 'sound' bank that will allow a sound to be pulled up from the bank and assigned to a button on click.  Precise system to be defined. 

