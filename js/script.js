function find(){
    let text1 = document.getElementById('text1').value;
    let text2 = document.getElementById('text2').value;
    let text3 = document.getElementById('text3').value;

    const regex = /[\s.,\/ -]/;

    let tag = [];
    text1 = text1.normalize('NFD').replace(/[\u0300-\u036f]/g, '').toUpperCase();
    text2 = text2.normalize('NFD').replace(/[\u0300-\u036f]/g, '').toUpperCase();
    text3 = text3.normalize('NFD').replace(/[\u0300-\u036f]/g, '').toUpperCase();

    
    tag.push(...text1.split(regex));
    tag.push(...text2.split(regex));
    tag.push(...text3.split(regex));
    

    
  
    console.log(tag)
    document.getElementById('response').innerHTML = tag;
    
}