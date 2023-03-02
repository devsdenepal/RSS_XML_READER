fetch("https://medium.com/feed/tag/pentesternepal").then(response =>{
    return response.text();
}).then(rawXML =>{
    const xmlContent = new DOMParser().parseFromString(rawXML, "text/xml");
    console.log(xmlContent)
})