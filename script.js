




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
    
    let biayatotal = new Intl.NumberFormat("id-ID", { style: "currency", currency: "IDR" }).format((+benefitmargin1 + +benefitmargin2 + +benefitmargin3)*6/5)
    
    
    
    document.getElementById('tesst2').innerHTML = vfin
    
    document.getElementById('tesst3').innerHTML = galvalum

    document.getElementById('tesst4').innerHTML = heatpipe

    document.getElementById('tesst5').innerHTML = produksi

    document.getElementById('tesst7').innerHTML = instalasi

    document.getElementById('tesst8').innerHTML = benefitmargin

    document.getElementById('tesst9').innerHTML = biayatotal

    

    document.getElementById('tesst6').innerHTML = new Intl.NumberFormat("id-ID", { style: "currency", currency: "IDR" }).format(Math.floor(3*(+evap + +kond) *lebar *kedalaman*843/100000 + (+rangka + +dudukan) + 8500))
	

}
