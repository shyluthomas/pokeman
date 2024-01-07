
export  function sortData(sortText, filterData) {
    console.log('data', filterData)
    let latestfilterData =[];
    if(sortText === "ASC") {
        latestfilterData = filterData.sort(function(a,b){
          const s1 = a.name;
          const s2 = b.name;
              return s1.localeCompare(s2)
        
      });
       
      } else if(sortText === "DESC") {
        latestfilterData = filterData.reverse(function(a,b){
          return a.name > b.name
      });
    }
    console.log('filter' , latestfilterData)
    return latestfilterData;

}