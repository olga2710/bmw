document.addEventListener('DOMContentLoaded', ()=>{

const tabsHandlerElems = document.querySelectorAll('[data-tabs-handler]');
const tabsFieldEelems = document.querySelectorAll('[data-tabs-field]');
const sectionTitles = document.querySelectorAll('[data-tabs-title]');

for(const tab of tabsHandlerElems){
    tab.addEventListener('click', ()=>{
        tabsHandlerElems.forEach(item =>{
            if (tab===item){
                item.classList.add('design-list__item_active')
            }else{
                item.classList.remove('design-list__item_active')
            }
        })
         tabsFieldEelems.forEach(item =>{
             if (item.dataset.tabsField === tab.dataset.tabsHandler){
               item.classList.remove('hidden') ;
             } else{
              item.classList.add('hidden') 
              }
        })
        sectionTitles.forEach(item=>{
            if (tab.dataset.tabsHandler===item.dataset.tabsTitle){
                item.classList.remove('hidden')
            } else{
                item.classList.add('hidden')
            }
        })


    })
}

});