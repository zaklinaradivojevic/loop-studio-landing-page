function openNav() {
    document.getElementById("mobile").style.display = "block";
    document.getElementById("logo").style.display = "none";
    document.getElementById("mobilehumburger").style.display = "none";
    document.getElementById("mobilelogo").style.display = "block";
}
function closeNav() {
    document.getElementById("logo").style.display = "block";
    document.getElementById("mobilehumburger").style.display = "block";
    document.getElementById("mobile").style.display = "none";
}