console.log('index.js loaded');
    // request(`https://api.covid19india.org/state_district_wise.json`,function (err,response,body) {
    let submitBtn=document.getElementById('submitBtn');
    submitBtn.addEventListener('click',handleClick);
    function handleClick(evt){
        evt.preventDefault();
        let selectedState=document.getElementById('state').value;
        //console.log(selectedState);
        let xhr=new XMLHttpRequest();
        xhr.open("GET",'https://api.covid19india.org/state_district_wise.json',true);
        xhr.onload=function()
        {
        let myData=JSON.parse(this.responseText);
       // console.log(myData);
       let state=myData[`${selectedState}`];
       let str=`<table class="table table-bordered table-dark" >`;
           let distName=Object.keys(state.districtData);
           let distCasesArr= Object.values(state.districtData);
        //    console.log(distName);
        //    console.log(distCasesArr);
           for(let i=0;i<distName.length;i++)
           {
               let row1=``;
               row1+=`<tr>
               <td>${distName[i]}</td>
               <td class="text-danger">Active : ${distCasesArr[i].active}</td>
               <td>Confirmed : ${distCasesArr[i].confirmed}</td>
               <td>Deceased : ${distCasesArr[i].deceased}</td>
               <td class="text-success" >Recovered : ${distCasesArr[i].recovered}</td>
               </tr>
               `
              str+=row1;
           };
           str+=`</table>`
           document.getElementById('stateInfo').innerHTML=str;
        
         //  console.log(totalCases);

        }
        xhr.send();

 }