function GetAge() {
    let Ages = document.getElementById("Age").value;
    return Ages;
}
function GetName() {
    let Name = document.getElementById("Name").value;
    return Name;
}
function GetDistance() {
    let Km = document.getElementById("Distance").value;
    return Km;
}
function randomNumber(min, max) { 
    return Math.random() * (max - min) + min;
}
sessionStorage.setItem('tot',test)
function Calcola(){
    var Ages=GetAge();
    var Km=GetDistance();
    var Name=GetName();
    document.getElementById('id').innerHTML=Name;
    document.getElementById('wagon').innerHTML=parseInt(randomNumber(1,8));
    document.getElementById('code').innerHTML=parseInt(randomNumber(90000,100000));
    if(Name==''){
        alert('inserisci nome');
        return;
    }else if(Km==''){
        alert('km: inserisci un numero');
        return;
        }else if(isNaN(Km)){
              alert('km: inserisci un numero');
              return;
              }else if(Km<0){alert('km: inserisci numero maggiore di 0')}
                else{
                    document.getElementById('add').style.display='none';
                    document.getElementById('reset').innerHTML='Reset';
                    document.getElementById('show').style.display='block';
                    Km=Number(Km);
                    const fisso= (Km*0.21);
                    var SingleP = fisso;
                    document.getElementById('Distance').readOnly=true;
                    if(Ages=='Minorenne'){
                        SingleP= (fisso - (fisso/100*20)).toFixed(2);
                        document.getElementById('cost').innerHTML=`${SingleP}$`;
                        document.getElementById('offer').innerHTML='Biglietto under 18';
                        }else if(Ages=='Over 65'){
                        SingleP= (fisso - (fisso/100*40)).toFixed(2);
                        document.getElementById('cost').innerHTML=`${SingleP}$`;
                        document.getElementById('offer').innerHTML='Biglietto Over 65';
                        }else{
                            document.getElementById('offer').innerHTML='Biglietto standard';
                            document.getElementById('cost').innerHTML=`${SingleP}$`;}
                            document.getElementById('Age').value=null;
                            document.getElementById('Name').value=null;
                } 
}
function GetTotal(){
    document.getElementById('Name').readOnly=true;
    document.getElementById('Age').readOnly=true;
    var tot=(parseFloat(sessionStorage.getItem('tot')));
    tot=tot.toFixed(2);
    document.getElementById('total').innerHTML=`${tot}$`;

}