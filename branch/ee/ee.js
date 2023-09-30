let infoBtn = document.querySelectorAll('.info-btn div');
for(let i =0;i<infoBtn.length;i++){
    infoBtn[i].style.display = "none";
}
let info = document.querySelectorAll('.info div div');
for(let i =0;i<info.length;i++){
    info[i].style.display = "none"
}
let semBtn = document.querySelectorAll('.sem-btn');
let ele = document.querySelectorAll('.info-btn'); 
function showInfoBtn(a,b,c){
    // let info = document.querySelectorAll('.info div div');
    for(let i =0;i<info.length;i++){
        info[i].style.display = "none"
    }
    for(let i = 0;i<semBtn[a].children.length;i++){
        semBtn[a].children[i].removeAttribute('id');
    }
    if(ele[a].children[b].style.display == "none"){
        for(let i = 0;i<ele[a].children.length;i++){
            ele[a].children[i].style.display = "none";
        }
        ele[a].children[b].style.display = "block";
        semBtn[a].children[c].setAttribute('id','clicked');

    }
    else if(ele[a].children[b].style.display == "block"){
        ele[a].children[b].style.display = "none";
        semBtn[a].children[c].removeAttribute('id');
    }
}
let semInfo = document.querySelectorAll('.info');
function show(a,b,c){
    if(semInfo[a].children[b].children[c].style.display == "none"){
        for(let i =0;i<semInfo[a].children[b].children.length;i++){
            semInfo[a].children[b].children[i].style.display = "none";
        }
        semInfo[a].children[b].children[c].style.display = "block";
        // ele[a].children[b].children[c].setAttribute('id','clicked');
    }
    else if(semInfo[a].children[b].children[c].style.display =="block"){
        semInfo[a].children[b].children[c].style.display ="none";
        // ele[a].children[b].children[c].removeAttribute('id');
    }
}