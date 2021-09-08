
var myTable = document.getElementById("data")
let navnArr = [];
let asArr = [];
let webArr = [];
let infoArr = [];
function søk(){
    var søkeord = String(document.getElementById("SearchNavn").value)
    var apiLink = String("https://data.brreg.no/enhetsregisteret/api/enheter?navn=" + søkeord)
    navnArr = [];
    asArr = [];
    webArr = [];
    infoArr = [];
    
    for(let i = 0; i < 6; i++){
        var x = String("navn" + (i + 1))
        document.getElementById(x).innerHTML = i + 1;
    }


    $(document).ready(function() {
        $.getJSON(apiLink, function(results) {
            const json = (results._embedded.enheter)
            
            for (let i = 0; i < json.length; i++) {
                
                
                navnArr.push(json[i].navn);
                asArr.push(json[i].organisasjonsform.beskrivelse);


                if(json[i].hjemmeside != undefined){
                webArr.push(json[i].hjemmeside);
                }
                else{
                    webArr.push("Nettside ikke tilgjengelig");
                }

                if(json[i].registrertIMvaregisteret == true && json[i].frivilligMvaRegistrertBeskrivelser != undefined){
                    infoArr.push(json[i].frivilligMvaRegistrertBeskrivelser);

                }
                else{
                    infoArr.push("Beskrivelse ikke tilgjengelig");
                }
                
                

                var navni = String("navn" + (i + 1))
                var typei = String("type" + (i + 1))
                var webi = String("web" + (i + 1))
                document.getElementById(navni).innerHTML = navnArr[i]
                document.getElementById(typei).innerHTML = asArr[i]
                document.getElementById(webi).innerHTML = webArr[i]


            }
        });
    });
}