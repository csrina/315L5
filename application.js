document.querySelector("#search").addEventListener("click", display, true);
document.querySelector("#query").addEventListener("change", display, false);

function display(){
    var lookup= document.querySelector("#query").value;
    console.log("test " + lookup);
    var res = document.createElement("span");
    res.textContent = lookup;
    document.body.appendChild(res);
    // var btn = document.createElement("BUTTON");
    // var t = document.createTextNode("CLICK ME");
    // btn.appendChild(t);
    // document.body.appendChild(btn);
    $("form").submit(function() { return false; });
    return false;
}