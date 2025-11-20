const totalPages = 4;
let currentPage = 1;

function goToPage(pageNumber) {
    for (let i = 1; i <= totalPages; i++) {
        if (i == pageNumber) {
            document.getElementById('page'+i).classList.add('show');
            document.getElementById('page'+i).classList.remove('hide');
        } else {
            document.getElementById('page'+i).classList.remove('show');
            document.getElementById('page'+i).classList.add('hide');
        }
    }
    currentPage = pageNumber;
    console.log("Current Page", currentPage);
    return currentPage
}

var videoButton, theVideo
var videoPlaying = true

//P5 setup() bliver kaldt EN gang før siden vises 
function setup(){
    //Videoen
    theVideo = select('#theVideo')
    console.log(theVideo);
    //Video control button
    videoButton = select('#videoButton')
    videoButton.mousePressed(()=>{
        //console.log('button pressed')
        if(videoPlaying){
            theVideo.pause()
            videoPlaying = false
        }else{
            theVideo.play()
            videoPlaying = true
        }
     })
}

let actors = {
    'ashly': [
        'Ashly.png',
        'ashley-johnson-at-nbc-universal-tca-summer-tour-in-beverly-hills_3.jpg'
    ]
}


function imgSwap(actor) {
    img = document.getElementById(actor);
    drop = document.getElementById(actor+'Dropdown');
    img.src = actors[actor][drop.value]

}
