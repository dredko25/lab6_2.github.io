function randomColor(){
    let letters = '0123456789ABCDEF';
    let color = '#';
    for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
};
document.querySelector(".var").onmouseover = function() {
    this.style.backgroundColor = `${randomColor()}`;
    
}
document.querySelector(".var").onmouseout = function() {
    this.style.backgroundColor = "#FFFFFF";
}
document.querySelector("#InputColor").addEventListener("input", function (event) {
    let valueColor = document.querySelector("#InputColor").value;
    document.querySelector('.var').onclick = function (){
        this.style.backgroundColor = `${valueColor}`;
    };
});
document.querySelector("#InputColor").addEventListener("input", function (event) {
    let valueColor = document.querySelector("#InputColor").value;
    document.querySelector('.col').addEventListener("dblclick", function (e) {
        this.style.backgroundColor = `${valueColor}`;
        for(let i = 1; i <= 6; i++){
            document.querySelectorAll(".col")[i].style.backgroundColor = `${valueColor}`;
        }
    })
});
