




function calculate2() 
{
	let xt=document.getElementById("xt").value
	let xl=document.getElementById("xl").value
    let baris=document.getElementById("baris").value	
    let kolom=document.getElementById("kolom").value	
    let evap=document.getElementById("evap").value	
    let adiab=document.getElementById("adiab").value	
    let kond=document.getElementById("kond").value	
	
   
    
    const e = document.getElementById('jarakfin')
    const selllect =e.options[e.selectedIndex].text;

    const f = document.getElementById('jumlahmodul')
    const selllect2 =f.options[f.selectedIndex].text;

    let newbaris = selllect2;

    let newnewbaris = newbaris*baris;

    let lebar = (Math.round(xl* newnewbaris));
    let kedalaman = (Math.round(xt * kolom));
    
    
    
    let dudukan = 2 *lebar * kedalaman * 3/1000000000* 777796794
    let rangka = 4*(+adiab + +kond)*30*20/1000000000 *47709091

    let rawgalvalum = +rangka + +dudukan

    let rawvfin = (+evap + +kond) *lebar *kedalaman*2/selllect*843/100000

    

    let galvalum =new Intl.NumberFormat("id-ID", { style: "currency", currency: "IDR" }).format( Math.round(+rangka + +dudukan))
   
    let heatpipe =new Intl.NumberFormat("id-ID", { style: "currency", currency: "IDR" }).format(Math.floor(newnewbaris*kolom*150000))

    let heatpipe2 = new Intl.NumberFormat("id-ID", { style: "currency", currency: "IDR" }).format(Math.floor(3.14*100*(+evap + +adiab + +kond)*newnewbaris*kolom*1300798421/4000000000))
    

    let vfin = new Intl.NumberFormat("id-ID", { style: "currency", currency: "IDR" }).format((Math.round((+evap + +kond) *lebar *kedalaman*2/selllect*843/100000)));

    let produksi =  new Intl.NumberFormat("id-ID", { style: "currency", currency: "IDR" }).format( Math.round(3*(+rawgalvalum + +rawvfin)))

    let instalasi = new Intl.NumberFormat("id-ID", { style: "currency", currency: "IDR" }).format(250000)

    let benefitmargin1= 3*(+rawgalvalum + +rawvfin)

    let benefitmargin2 = newnewbaris*kolom*150000

    let benefitmargin3= 250000

    let benefitmargin = new Intl.NumberFormat("id-ID", { style: "currency", currency: "IDR" }).format((+benefitmargin1 + +benefitmargin2 + +benefitmargin3)/5)
    
    const biayatotal = new Intl.NumberFormat("id-ID", { style: "currency", currency: "IDR" }).format((+benefitmargin1 + +benefitmargin2 + +benefitmargin3)*6/5)
    
    
    
    document.getElementById('tesst2').innerHTML = vfin
    
    document.getElementById('tesst3').innerHTML = galvalum

    document.getElementById('tesst4').innerHTML = heatpipe

    document.getElementById('tesst5').innerHTML = produksi

    document.getElementById('tesst7').innerHTML = instalasi

    document.getElementById('tesst8').innerHTML = benefitmargin

    document.getElementById('tesst9').innerHTML = biayatotal

    document.getElementById('tesst10').innerHTML = biayatotal


    

    document.getElementById('tesst6').innerHTML = new Intl.NumberFormat("id-ID", { style: "currency", currency: "IDR" }).format(Math.floor(3*(+evap + +kond) *lebar *kedalaman*843/100000 + (+rangka + +dudukan) + 8500))
	

}

function calculate4(){
let seleect1 = document.getElementById('jumlahmodul2');
let seleect2 = document.getElementById('tei');
let seleect3 = document.getElementById('vei');

const chooice1  = seleect1.value
const chooice2 = seleect2.value;
const chooice3 = seleect3.value;


  if (chooice1 === '11' && chooice2 === '30' && chooice3 === '15') {
     tes10 = 87.1 
    } else if (chooice1 === '11' && chooice2 === '30' && chooice3 === '20') {
      tes10 = 122
    } else if (chooice1 === '11' && chooice2 === '30' && chooice3 === '25') {
        tes10 = 103.5
    } else if (chooice1 === '22' && chooice2 === '30' && chooice3 === '15') {
        tes10 = 96.6
    } else if (chooice1 === '22' && chooice2 === '30' && chooice3 === '20') {
        tes10 = 146.8
    } else if (chooice1 === '22' && chooice2 === '30' && chooice3 === '25') {
        tes10 = 190.1
    } else if (chooice1 === '33' && chooice2 === '30' && chooice3 === '15') {
        tes10 = 134.0
    } else if (chooice1 === '33' && chooice2 === '30' && chooice3 === '20') {
        tes10 = 186.8
    } else if (chooice1 === '33' && chooice2 === '30' && chooice3 === '25') {
        tes10 = 229.8
    } else if (chooice1 === '11' && chooice2 === '35' && chooice3 === '15') {
        tes10 = 152.6
    } else if (chooice1 === '11' && chooice2 === '35' && chooice3 === '20') {
        tes10 = 203.1
      } else if (chooice1 === '11' && chooice2 === '35' && chooice3 === '25') {
          tes10 = 249.6
      } else if (chooice1 === '22' && chooice2 === '35' && chooice3 === '15') {
          tes10 = 226.1
      } else if (chooice1 === '22' && chooice2 === '35' && chooice3 === '20') {
          tes10 = 315.7
      } else if (chooice1 === '22' && chooice2 === '35' && chooice3 === '25') {
          tes10 = 385.3
      } else if (chooice1 === '33' && chooice2 === '35' && chooice3 === '15') {
          tes10 = 260.1
      } else if (chooice1 === '33' && chooice2 === '35' && chooice3 === '20') {
          tes10 = 325.5
      } else if (chooice1 === '33' && chooice2 === '35' && chooice3 === '25') {
          tes10 = 375.2
      } else if (chooice1 === '11' && chooice2 === '40' && chooice3 === '15') {
          tes10 = 270.2 
       } else if (chooice1 === '11' && chooice2 === '40' && chooice3 === '20') {
          tes10 = 342.6
       } else if (chooice1 === '11' && chooice2 === '40' && chooice3 === '25') {
           tes10 = 409.3
       } else if (chooice1 === '22' && chooice2 === '40' && chooice3 === '15') {
           tes10 = 313
       } else if (chooice1 === '22' && chooice2 === '40' && chooice3 === '20') {
           tes10 = 387.6
       } else if (chooice1 === '22' && chooice2 === '40' && chooice3 === '25') {
           tes10 = 467.8
       } else if (chooice1 === '33' && chooice2 === '40' && chooice3 === '15') {
           tes10 = 364.8
       } else if (chooice1 === '33' && chooice2 === '40' && chooice3 === '20') {
           tes10 = 509.6
       } else if (chooice1 === '33' && chooice2 === '40' && chooice3 === '25') {
           tes10 = 629.6
       }else if (chooice1 === '11' && chooice2 === '45' && chooice3 === '15') {
           tes10 = 369.3 
       } else if (chooice1 === '11' && chooice2 === '45' && chooice3 === '20') {
           tes10 = 458.5
       } else if (chooice1 === '11' && chooice2 === '45' && chooice3 === '25') {
           tes10 = 545.8
       } else if (chooice1 === '22' && chooice2 === '45' && chooice3 === '15') {
           tes10 = 428.3
       } else if (chooice1 === '22' && chooice2 === '45' && chooice3 === '20') {
           tes10 = 546.4
       } else if (chooice1 === '22' && chooice2 === '45' && chooice3 === '25') {
           tes10 = 660
       } else if (chooice1 === '33' && chooice2 === '45' && chooice3 === '15') {
           tes10 = 504.7
       } else if (chooice1 === '33' && chooice2 === '45' && chooice3 === '20') {
           tes10 = 680.9
       } else if (chooice1 === '33' && chooice2 === '45' && chooice3 === '25') {
           tes10 = 834.6
       }

let dailyuse2 = document.getElementById("dailyuse").value;
let monthlyuse2 = document.getElementById("monthlyuse").value;
const pengembalian = new Intl.NumberFormat("id-ID", { style: "currency", currency: "IDR" }).format(tes10*dailyuse2*monthlyuse2*4*1344/1000)

        

    

  
  



document.getElementById('testes10').innerHTML = tes10
    
document.getElementById('testes13').innerHTML = pengembalian
document.getElementById('testes14').innerHTML = pengembalian


  }



function calculate5(){

const binvest = document.getElementById('binvest').value
const bpengembalian = document.getElementById('bpengembalian').value
const periodep =  Math.trunc(binvest/bpengembalian)
const sisaperiode = binvest%bpengembalian
const sisaperiode2 = Math.trunc(sisaperiode/bpengembalian * 12)
document.getElementById('periodep').innerHTML = periodep
document.getElementById('sisaperiode2').innerHTML = sisaperiode2


}
