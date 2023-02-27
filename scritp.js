window.onload= function(){
    document.getElementById("navbar").classList.toggle('hide');
    document.getElementById("menu").addEventListener("click", function(){ 
        document.getElementById("navbar").classList.toggle('hide');
    })

}