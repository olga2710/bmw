document.addEventListener('DOMContentLoaded', ()=>{


    const smothScrollElems = document.querySelectorAll('a[href^="#"]:not(a[href="#"])'); 

    smothScrollElems.forEach(link =>{
        link.addEventListener('click',(event) =>{

            event.preventDefault();
            const Id = link.getAttribute('href').substr(1 );
        

            document.getElementById(Id).scrollIntoView({
                behavior: 'smooth'
            });
           
        
        })
    })


});