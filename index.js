const myName = "raphatalia kay";
export function showMyName(){
    return myName;
}

export function showMyNameUI(selector){
   document.queryselector(selector).innerHTML = myName;
}