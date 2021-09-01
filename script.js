
var myTable = document.getElementById("data")
function søk(){
    var søkeord = String(document.getElementById("søkefelt").value)
    var apiLink = String("https://data.brreg.no/enhetsregisteret/api/enheter?navn=" + søkeord)
    console.log(apiLink)

    $(document).ready(function() {
        $.getJSON(apiLink, function(results) {
            const json = (results._embedded.enheter)
            
            for (let i = 0; i < json.length; i++) {
                myTable.rows[i+1].cells[0].innerHTML = json[i].navn;
                myTable.rows[i+1].cells[1].innerHTML = json[i].organisasjonsform.beskrivelse;
                if(json[i].hjemmeside != undefined){
                myTable.rows[i+1].cells[2].innerHTML = json[i].hjemmeside;
                }
                else{
                    myTable.rows[i+1].cells[2].innerHTML = "Nettside ikke tilgjengelig"
                }
                if(json[i].registrertIMvaregisteret == true && json[i].frivilligMvaRegistrertBeskrivelser != undefined){    
                    myTable.rows[i+1].cells[3].innerHTML = json[i].frivilligMvaRegistrertBeskrivelser;
                }
                
                else{
                    myTable.rows[i+1].cells[3].innerHTML = "Beskrivelse ikke tilgjengelig"
                }

                


            }
    });
});
}