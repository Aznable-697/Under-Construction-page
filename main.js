const progress = document.querySelector('.progress')
const percentage = document.querySelector('.progress span')

let per = 0;
function progressLoad(){
    if(per>=17){
        progress.style.width = `17%`;
        percentage.innerHTML = "17%"

    }else{
        progress.style.width = `${per}%`;
        percentage.innerHTML = `${per}%`;

    }
    per++

}

setInterval(progressLoad,90)