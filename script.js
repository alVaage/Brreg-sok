
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
        var a = String("navn" + (i + 1))
        var b = String("type" + (i + 1))
        var c = String("web" + (i + 1))


        document.getElementById(a).innerHTML = "";
        document.getElementById(b).innerHTML = "";
        document.getElementById(c).innerHTML = "";

    }


    $(document).ready(function() {
        $.getJSON(apiLink, function(results) {
            const json = (results._embedded.enheter)
            
            for (let i = 0; i < json.length; i++) {
                
                
                navnArr.push(json[i].navn);

                if(json[i].organisasjonsform.beskrivelse = "Aksjeselskap"){
                    asArr.push("AS")
                }

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
                
                

                var navni = String("navn" + (i + 1));
                var typei = String("type" + (i + 1));
                var webi = String("web" + (i + 1));
                document.getElementById(navni).innerHTML = navnArr[i]
                document.getElementById(typei).innerHTML = asArr[i]
                document.getElementById(webi).innerHTML = webArr[i]


            }
        });
    });

     
}

var Searchinput = document.getElementById("SearchNavn");
var Searchpost = document.getElementById("SearchPost");
Searchinput.addEventListener("keyup", function(event) {
        
    if (event.keyCode === 13) { // Enter key
      event.preventDefault();
      // Klikk knappen 
      document.getElementById("SearchBtn").click();
    }
});
Searchpost.addEventListener("keyup", function(event) {
        
    if (event.keyCode === 13) { // Enter key
      event.preventDefault();
      // Klikk knappen 
      document.getElementById("SearchBtn").click();
    }
});
