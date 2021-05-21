document.addEventListener('DOMContentLoaded', ()=>{

    const featureLinlEelems = document.querySelectorAll('.feature__link');
    const featureSubElems = document.querySelectorAll('.feature-sub');


    

    featureLinlEelems.forEach((btn, index)=>{
        btn.addEventListener('click', ()=>{
            if (btn.classList.contains('feature__link_active')){
                featureSubElems[index].classList.add('hidden');
                btn.classList.remove('feature__link_active');

            }else{
                featureSubElems.forEach((featureSubElem)=>{
                    featureSubElem.classList.add('hidden')
                });
                featureLinlEelems.forEach((featureLinlEelem)=>{
                    featureLinlEelem.classList.remove('feature__link_active');
                });
               
                    featureSubElems[index].classList.remove('hidden');
                    btn.classList.add('feature__link_active');
                
            }
        })

    })









});