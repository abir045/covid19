window.addEventListener('load', ()=> {
    
    let totalRecovered = document.querySelector('.total-recovered');
    let allDeath = document.querySelector('.total-deaths');
    let totalCases= document.querySelector('.total-cases');
    
    
 
    
  

   // if(navigator.geolocation)
    if('load'){

       // navigator.geolocation.getCurrentPosition
       // (position=>{
         //   long = position.coords.longitude;
           // lat =  position.coords.latitute;


         // const api = `https://coronavirus-monitor.p.rapidapi.com/coronavirus/cases_by_particular_country.php?country=Denmark`


fetch("https://coronavirus-monitor.p.rapidapi.com/coronavirus/worldstat.php", {
            "method": "GET",
            "headers": {
                "x-rapidapi-host": "coronavirus-monitor.p.rapidapi.com",
                "x-rapidapi-key": "3504da040cmsh87033a22e996cf8p150ee5jsna8ae52d76c5e"
            }
        })
        .then(response => {
           
            
           return response.json();
        })
        .then(data => {
            console.log(data);
          
            
            //set dom elements from the console

          

          allDeath.textContent = data.total_deaths;
          totalRecovered.textContent = data.total_recovered;
           
          totalCases.textContent = data.total_cases;
         



        })
        .catch(err => {
            console.log(err);
         
        });

        };
     
    
}


);

//after load

let myArray = []

    

$.ajax({
    method: 'GET',
    url: "https://coronavirus-monitor.p.rapidapi.com/coronavirus/cases_by_country.php",
    "headers": {
     "x-rapidapi-host": "coronavirus-monitor.p.rapidapi.com",
     "x-rapidapi-key": "3504da040cmsh87033a22e996cf8p150ee5jsna8ae52d76c5e"
 },

    dataType:'json',
    success: function(response){
        
       myArray = response.countries_stat;
        buildTable(myArray)
        console.log(response)
    }




    

})




 //making a table from the array

 function buildTable(response){

    

     const table = document.getElementById('myTable')

     for (let i=0; i< response.length; i++ ){
         const row = `<tr>
                     
                      <td>${response[i].country_name}</td> 
                      <td>${response[i].cases}</td>
                      <td>${response[i].deaths}</td>
                      <td>${response[i].total_recovered}</td>
                      <td>${response[i].new_deaths}</td>
                      <td>${response[i].new_cases}</td>
                      <td>${response[i].serious_critical}</td>   
                      
                     
                      </tr>`

                     table.innerHTML += row
                     

     }

   
    

 }
   
 



 $('#search-input').on('keyup',function(){
    let value = $(this).val()
    console.log('value:', value)
    //alert( "Handler for .keyup() called." );
     let data = searchTable(value, myArray)
    buildTable(data);
})



 buildTable(myArray);


function searchTable(value, data){
    let filteredData = []

    for (let i=0; i<data.length; i++){
        value = value.toLowerCase()
        let countryName = data[i].country_name.toLowerCase()

        if(countryName.includes(value)){
            filteredData.push(data[i])

        }
    }


    return filteredData
}


function buildTable(data){
    let table = document.getElementById('myTable')

    table.innerHTML = ''

    for(let i=0; i<data.length; i++){

        const row = `<tr>
                     
                    <td>${data[i].country_name}</td> 
                    <td>${data[i].cases}</td>
                    <td>${data[i].deaths}</td>
                    <td>${data[i].total_recovered}</td>
                    <td>${data[i].new_deaths}</td>
                    <td>${data[i].new_cases}</td>
                    <td>${data[i].serious_critical}</td>   
        
       
                  </tr  `

            table.innerHTML += row

    }
}







 fetch("https://coronavirus-monitor.p.rapidapi.com/coronavirus/latest_stat_by_country.php?country=Bangladesh", {
	"method": "GET",
	"headers": {
		"x-rapidapi-host": "coronavirus-monitor.p.rapidapi.com",
		"x-rapidapi-key": "3504da040cmsh87033a22e996cf8p150ee5jsna8ae52d76c5e"
	}
})
.then(response => {
    return response.json();

   
})

.then(data=> {
    console.log(data);
 
    
    //set dom elements from the console


    let totalCasesBangladesh = document.querySelector('.loc_bangladesh');
     let newCasesBangladesh =  document.querySelector('.new_cases');
     let allDeathsBangladesh = document.querySelector('.all_deaths');
   
    totalCasesBangladesh.textContent = data.latest_stat_by_country[0].total_cases;
    newCasesBangladesh.textContent =   data.latest_stat_by_country[0].active_cases;
    allDeathsBangladesh.textContent = data.latest_stat_by_country[0].total_deaths;
   
    //console.log(totalCasesBangladesh.textContent);
    






})
.catch(err => {
	console.log(err);
});
