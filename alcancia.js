let denominaciones = new Array(10);
denominaciones.fill(0);

class alcancia{
    total=0;
    agregarMoneda(){
        let valor = document.getElementById("valor").value;
        switch (valor) {
                case '1': denominaciones[0] += 1;
                    break;
                case '2': denominaciones[1] += 1;
                    break;
                case '5': denominaciones[2] += 1;
                    break;
                case '10': denominaciones[3] += 1;
                    break;
                case '20': denominaciones[4] += 1;
                    break;
                case '50': denominaciones[5] += 1;
                    break;
                case '100': denominaciones[6] += 1;
                    break;
                case '200': denominaciones[7] += 1;
                    break;
                case '500': denominaciones[8] += 1;
                    break;
                case '1000': denominaciones[9] += 1;
                    break;
            }
            alert("Moneda agregada!");

        console.log(denominaciones);
    }

    romperAlcancia(){
        denominaciones.fill(0);
        document.getElementById("info").innerHTML = "Rompiste tu alcancia!";
    }

    calcularAhorro(){
        for (let i=0; i<denominaciones.length; i++){
            if (i==0){this.total = this.total + (1*denominaciones[i])}
            else if (i==1){this.total = this.total + (2*denominaciones[i])}
            else if (i==2){this.total = this.total + (5*denominaciones[i])}

            else if (i==3){this.total = this.total + (10*denominaciones[i])}
            else if (i==4){this.total = this.total + (20*denominaciones[i])}

            else if (i==5){this.total = this.total + (50*denominaciones[i])}
            else if (i==6){this.total = this.total + (100*denominaciones[i])}

            else if (i==7){this.total = this.total + (200*denominaciones[i])}
            else if (i==8){this.total = this.total + (500*denominaciones[i])}
            else if (i==9){this.total = this.total + (1000*denominaciones[i])}
        }
        let ahorroTotal = this.total;
        document.getElementById("info").innerHTML = "Tu ahorro total es de: " + ahorroTotal;
        console.log(denominaciones.length);
        console.log("total",this.total);
    }

    monedasDenominacion(){
        document.getElementById("info").innerHTML =
            //Monedas
        "Monedas de $1: "+ denominaciones[0] +"<br>"+
        "Monedas de $2: "+ denominaciones[1] +"<br>"+
        "Monedas de $5: "+ denominaciones[2] +"<br>"+
        "Monedas de $10: "+ denominaciones[3] +"<br>"+

            //Billetes
        "Billetes de $20: "+ denominaciones[4] +"<br>"+
        "Billetes de $50: "+ denominaciones[5] +"<br>"+
        "Billetes de $100: "+ denominaciones[6] +"<br>"+
        "Billetes de $200: "+ denominaciones[7] +"<br>"+
        "Billetes de $500: "+ denominaciones[8] +"<br>"+
        "Billetes de $1000: "+ denominaciones[9];
    }
}
function valor(v){
    let obj = new alcancia();
    if (v==1){
        obj.agregarMoneda();
    }
    else if (v==2){
        obj.romperAlcancia();
        console.log("alcancia vacia");
    }
    else if (v==3){
        obj.calcularAhorro();
        console.log("tienes mucho dinero");
    }
    else if (v==4){
        obj.monedasDenominacion();
        console.log("info");
    }
}