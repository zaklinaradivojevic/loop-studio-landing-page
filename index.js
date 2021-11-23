function openNav() {
    document.getElementById("mobile").style.display = "block";
    document.getElementById("header_logo").style.display = "none";
    document.getElementById("mobile_humburger").style.display = "none";
    document.getElementById("mobile_logo").style.display="block";


}
function closeNav() {
    document.getElementById("header_logo").style.display = "block";
    document.getElementById("mobile_humburger").style.display = "block";

    document.getElementById("mobile").style.display = "none";

}