var content = document.getElementById("xp");
var button = document.getElementById("show-more");
var content1 = document.getElementById("xp1");
var button1 = document.getElementById("show-more1");
var content2 = document.getElementById("xp2");
var button2 = document.getElementById("show-more2");
var content2 = document.getElementById("xp3");
var button2 = document.getElementById("show-more3");

button.onclick = function(){

    if(content.className == "open"){
        //shrink the box
        content.className = "";
        button.innerHTML = "Show More";
        content1.className = "";
        button1.innerHTML = "Show More";
        content2.className = "";
        button2.innerHTML = "Show More";
    } else {
        //expand the box
        content.className = "open";
        button.innerHTML = "Show Less";
        content1.className = "";
        button1.innerHTML = "Show More";
        content2.className = "";
        button2.innerHTML = "Show More";
    }
};
button1.onclick = function(){

    if(content1.className == "open"){
        //shrink the box
        content.className = "";
        button.innerHTML = "Show More";
        content1.className = "";
        button1.innerHTML = "Show More";
        content2.className = "";
        button2.innerHTML = "Show More";
    } else {
        //expand the box
        content.className = "";
        button.innerHTML = "Show More";
        content1.className = "open";
        button1.innerHTML = "Show Less";
        content2.className = "";
        button2.innerHTML = "Show More";
    }
};
button2.onclick = function(){

    if(content2.className == "open"){
        //shrink the box
        content.className = "";
        button.innerHTML = "Show More";
        content1.className = "";
        button1.innerHTML = "Show More";
        content2.className = "";
        button2.innerHTML = "Show More";
    } else {
        //expand the box
        content.className = "";
        button.innerHTML = "Show More";
        content1.className = "";
        button1.innerHTML = "Show More";
        content2.className = "open";
        button2.innerHTML = "Show Less";
    }

};