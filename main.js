

const allStates = [
    {
        "name": "Alaska", 
        "abbreviation": "AK"
    },
    {
        "name": "Alabama", 
        "abbreviation": "AL"
    },
    {
        "name": "Arkansas",   
        "abbreviation": "AR"
    },
    {
        "name": "American Samoa", 
        "abbreviation": "AS"
    },
    {
        "name": "Arizona", 
        "abbreviation": "AZ"
    },
    {
        "name": "California", 
        "abbreviation": "CA"
    },
    {
        "name": "Colorado", 
        "abbreviation": "CO"
    },
    {
        "name": "Connecticut", 
        "abbreviation": "CT"
    },
    {
        "name": "District Of Columbia", 
        "abbreviation": "DC"
    },
    {
        "name": "Delaware", 
        "abbreviation": "DE"  
    },
    {
        "name": "Florida", 
        "abbreviation": "FL"
    },
    {
        "name": "Georgia",  
        "abbreviation": "GA"
    },
    {
        "name": "Guam",     
        "abbreviation": "GU"
    },
    {
        "name": "Hawaii",       
        "abbreviation": "HI"
    },
    {
        "name": "Iowa",         
        "abbreviation": "IA"
    },
    {
        "name": "Idaho",        
        "abbreviation": "ID"
    },
    {
        "name": "Illinois",     
        "abbreviation": "IL"
    },
    {
        "name": "Indiana",      
        "abbreviation": "IN"
    },
    {
        "name": "Kansas",       
        "abbreviation": "KS"
    },
    {
        "name": "Kentucky",     
        "abbreviation": "KY"
    },
    {
        "name": "Louisiana",    
        "abbreviation": "LA"
    },
    {
        "name": "Massachusetts",    
        "abbreviation": "MA"
    },
    {
        "name": "Maryland",         
        "abbreviation": "MD"
    },
    {
        "name": "Maine",        
        "abbreviation": "ME"
    },
    {
        "name": "Michigan",     
        "abbreviation": "MI"
    },
    {
        "name": "Minnesota",   
        "abbreviation": "MN"
    },
    {
        "name": "Missouri",   
        "abbreviation": "MO"
    },
    {
        "name": "Northern Mariana Islands", 
        "abbreviation": "MP"
    },
    {
        "name": "Mississippi", 
        "abbreviation": "MS"
    },
    {
        "name": "Montana",  
        "abbreviation": "MT"
    },
    {
        "name": "North Carolina", 
        "abbreviation": "NC"
    },
    {
        "name": "North Dakota", 
        "abbreviation": "ND"
    },
    {
        "name": "Nebraska", 
        "abbreviation": "NE"
    },
    {
        "name": "New Hampshire", 
        "abbreviation": "NH"
    },
    {
        "name": "New Jersey", 
        "abbreviation": "NJ"
    },
    {
        "name": "New Mexico", 
        "abbreviation": "NM"
    },
    {
        "name": "Nevada",       
        "abbreviation": "NV"
    },
    {
        "name": "New York", 
        "abbreviation": "NY"
    },
    {
        "name": "Ohio",  
        "abbreviation": "OH"
    },
    {
        "name": "Oklahoma", 
        "abbreviation": "OK"
    },
    {
        "name": "Oregon",   
        "abbreviation": "OR"
    },
    {
        "name": "Pennsylvania", 
        "abbreviation": "PA"
    },
    {
        "name": "Puerto Rico", 
        "abbreviation": "PR"
    },
    {
        "name": "Rhode Island", 
        "abbreviation": "RI"
    },
    {
        "name": "South Carolina", 
        "abbreviation": "SC"
    },
    {
        "name": "South Dakota", 
        "abbreviation": "SD"
    },
    {
        "name": "Tennessee", 
        "abbreviation": "TN"
    },
    {
        "name": "Texas",     
        "abbreviation": "TX"
    },
    {
        "name": "Utah",     
        "abbreviation": "UT"
    },
    {
        "name": "Virginia", 
        "abbreviation": "VA"
    },
    {
        "name": "Virgin Islands", 
        "abbreviation": "VI"
    },
    {
        "name": "Vermont",     
        "abbreviation": "VT"
    },
    {
        "name": "Washington",  
        "abbreviation": "WA"
    },
    {
        "name": "Wisconsin", 
        "abbreviation": "WI"
    },
    {
        "name": "West Virginia",
        "abbreviation": "WV"
    },
    {
        "name": "Wyoming",
        "abbreviation": "WY"
    }
];
const select = document.querySelector(".form-control"); 
const first = document.querySelector(".first");
const second = document.querySelector(".second");
const btn = document.querySelector(".select"); 
const stateName = document.querySelector(".state-name");
const timeUpdate = document.querySelector(".date");
const todayCases = document.querySelector(".today-cases");
const totalCases = document.querySelector(".total-cases"); 
const grade = document.querySelector(".grade");
console.log(grade)


$(window).on("load",function(){
    $(".loader-wrapper").fadeOut("slow");
});
/// API for each state 
$.ajax({ 
    url: "https://api.covidtracking.com/v1/states/current.json", 
    method: "GET", 
    success: function (data){ 
        const covidTracking = data;
        
        select.addEventListener("change", generateCovid19);
        function generateCovid19 (){
        for(var i = 0; i < covidTracking.length; i++){ 
            var covidStates = covidTracking[i].state;
                if (select.value === covidStates){
                    console.log(covidTracking[i]);
                    second.classList.remove("hidden");
                    stateName.textContent = allStates[i].name
                    timeUpdate.textContent = covidTracking[i].checkTimeEt;
                    todayCases.textContent =  Number(covidTracking[i].positiveIncrease).toLocaleString();
                    totalCases.textContent = Number(covidTracking[i].positive).toLocaleString();
                    grade.textContent = covidTracking[i].dataQualityGrade;

                }
            }
           
        }
    },
    error: function (error){ 
        console.error(error);
        
    }
    
});

function makeOptions (){ 
    for (let i = 0; i < allStates.length; i++){ 
        var opt = document.createElement("option");
        opt.classList.add(i)
        opt.value = allStates[i].abbreviation;
        opt.innerHTML = allStates[i].name
        select.appendChild(opt)
        select.appendChild(opt).value;
    };
};
makeOptions();



