document.addEventListener('DOMContentLoaded', ()=>{
    //fetch
    let url = "https://w1.weather.gov/xml/current_obs/KEWR.xml";
    fetch(url)
    .then(response=>response.text())
    .then(data=>{
        //console.log(data); //string
        let parser = new DOMParser();
        let xml = parser.parseFromString(data, "application/xml");
        document.getElementById('output').textContent = data;
        console.log(xml);
        buildList(xml)
    });
})

function buildList(x){

}