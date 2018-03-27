

mchApiKey ="bFTT1tVP3-ZHb20Nm31tx5r5BwzJpu_h_CSzKFou",
companies=[]
var jdata
var getCompanyByNumber = function(coNumber){
    $.ajax({
        url: "https://api.companieshouse.gov.uk/company/"+coNumber,
        type: "GET",
        crossDomain: true,
        contentType: "application/json",
        success: function(data){
            companies.push(data)
            console.log(data.company_number);	
            jdata = JSON.stringify(companies);
            saveText(jdata,"data.json");				
        },
        beforeSend: function (xhr) {
            xhr.withCredentials = true;
            xhr.setRequestHeader ("Authorization", mchApiKey)
        },
        error:function(){
            consol.log("failure");
        }
    });
}

getCompanyByNumber("00000006")

function saveText(text, filename){
  var a = document.createElement('a');
  a.setAttribute('href', 'data:text/plain;charset=utf-u,'+encodeURIComponent(text));
  a.setAttribute('download', filename);
  a.click()
}


var loadFile = function() {
    console.log("here")
        // creating input on-the-fly
        var input = $(document.createElement("input"));
        input.attr("type", "file");
        // add onchange handler if you wish to get the file :)
        input.trigger("click"); // opening dialog
        return false; // avoiding navigation
    }


loadFile()
