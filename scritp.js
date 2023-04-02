window.onload= function(){
    document.getElementById("navbar").classList.toggle('hide');
    document.getElementById("menu").addEventListener("click", function(){ 
        document.getElementById("navbar").classList.toggle('hide');
    })

}
/*const add = (a = 1, b = 1 ) =>
 console.log ("add");*/

 let map = L.map('map').setView([40.416775, -3.703790], 13);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

L.marker([40.416775,-3.703790 ]).addTo(map).bindPopup("mi nueva ubicacion").openPopup()   /* .bindPopup('calle Calle del Marqués de Valdeiglesias,<br> -izq 28004 Madrid.<br> ')
    .openPopup( ) */
   

   
   

    