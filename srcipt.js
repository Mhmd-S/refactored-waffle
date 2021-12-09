function printStat(){
    const firstDiv = document.createElement('div');
    const btn = document.createElement('button');
    
    firstDiv.appendChild(btn);
    
    btn.innerHTML = "Click me";

    btn.onclick(console.log("HI"));
}