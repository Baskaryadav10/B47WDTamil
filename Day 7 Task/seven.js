// Q.NO.1.Solving problems using array functions on the rest countries' data.
// a.Get all the countries from the Asia continent /region using the Filter function

var request = new XMLHttpRequest();
request.open("GET","https://restcountries.com/v3.1/all",true);
request.send()
request.onload=function(){
    var data=request.response;
    var result=JSON.parse(data);
    var res = result.filter((ele)=>ele.continents[0]=='Asia')
     var res1 = res.map((ele)=>ele.name.common)
    console.log(res1)
}

// b.Get all the countries with a population of less than 2 lakhs using Filter function

var request = new XMLHttpRequest();
request.open("GET","https://restcountries.com/v3.1/all",true)
request.send()
request.onload=function(){
    var data=request.response
    var result=JSON.parse(data)
    var res = result.filter((ele)=>ele.population<20000)
    var res2 = res.map((ele)=>ele.name.common)
    console.log(res2)
}

// c.Print the following details name, capital, flag using forEach function

var request = new XMLHttpRequest();
request.open("GET","https://restcountries.com/v3.1/all",true);
request.send()
request.onload=function(){
    var data=request.response
    var result=JSON.parse(data)
    //console.log(result)
      result.forEach((e) => {
        console.log(e.capital,e.flags,e.name)
      })
}

// d.Print the total population of countries using reduce function

var request = new XMLHttpRequest();
request.open("GET","https://restcountries.com/v3.1/all",true)
request.send()
request.onload=function(){
    var data=request.response
    var result=JSON.parse(data)
    //console.log(result)
    //var pop= result;
    result.forEach((e) => {
        console.log(e.population)
    });
   
}

// e.Print the country which uses US Dollars as currency.

var request = new XMLHttpRequest();
request.open("GET","https://restcountries.com/v2/all",true)
request.send()
request.onload=function(){
    var data=request.response
    var result=JSON.parse(data)
    var res = result.filter((ele)=> {
        for ( let key in ele.currencies){
            if( ele.currencies[key].code==="USD"){
                console.log(ele.name)
            }
        }
    })
}
