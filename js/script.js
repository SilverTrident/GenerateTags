function find(){
    let text1 = document.getElementById('text1').value;
    let text2 = document.getElementById('text2').value;
    let text3 = document.getElementById('text3').value;

    const regex = /[\s.,\/ -]/;

    let tag = [];
    

    if(text1){
        tag.push(...text1.normalize('NFD').replace(/[\u0300-\u036f]/g, '').toUpperCase().split(regex));
    }
    if(text2){
        tag.push(...text2.normalize('NFD').replace(/[\u0300-\u036f]/g, '').toUpperCase().split(regex));
    }
    if(text3){
        tag.push(...text3.normalize('NFD').replace(/[\u0300-\u036f]/g, '').toUpperCase().split(regex));
    }
    
   
    

    
  
    console.log(tag)
    document.getElementById('response').innerHTML = tag;
    
}