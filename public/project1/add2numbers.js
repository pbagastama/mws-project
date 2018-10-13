function tambah() {
   let angka = document.querySelectorAll('input');
   let i1= parseInt(angka[0].value); //angka pertama
   let i2= parseInt(angka[1].value); //angka kedua
   angka[2].value= parseInt(i1) + parseInt(i2);
}

function kurang() {
    let angka2 = document.querySelectorAll('input');
    let i1= parseInt(angka2[3].value); //angka pertama
    let i2= parseInt(angka2[4].value); //angka kedua
    angka2[5].value= parseInt(i1) - parseInt(i2) ;
 }

 function kali() {
    let angka3 = document.querySelectorAll('input');
    let i1= parseInt(angka3[6].value); //angka pertama
    let i2= parseInt(angka3[7].value); //angka kedua
    angka3[8].value= parseInt(i1) * parseInt(i2) ;
 }

 function bagi() {
    let angka = document.querySelectorAll('input');
    let i1= parseInt(angka[9].value); //angka pertama
    let i2= parseInt(angka[10].value); //angka kedua
    angka[11].value= parseInt(i1) / parseInt(i2) ;
 }
