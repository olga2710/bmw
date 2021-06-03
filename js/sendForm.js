const Server ='https://jsonplaceholder.typicode.com/posts';
const serverBtn = document.querySelector('.form__button');
const modalBTN = document.querySelector('.modal__button');




const sentData = (data, callBack, falseCallBack)=>{
  const request =  new XMLHttpRequest();
  request.open('POST', Server);

  request.addEventListener('readystatechange', ()=>{
      if (request.readyState !==4) return;
      if (request.status ===200 || request.status === 201){
          const response = JSON.parse(request.responseText);
          callBack(response.id);
      } else {
          falseCallBack(request.status);
          throw new Error(request.status);
      }
  });

  request.send(data)
};

const formElems = document.querySelectorAll('.form');







const formHendler = (form) =>{
    form.addEventListener('submit', (event)=>{
        event.preventDefault();
        const data = {};

        for (const {name, value} of form.elements){
            if (name){
              data[name] = value;
            } 
        };


        const smallElem = document.createElement('small');

    if (data.name && (data.mail || data.phone) && (!data.name.match(/^[ ]+$/) & (!data.mail.match(/^[ ]+$/) || !data.phone.match(/^[ ]+$/)))){
        sentData(JSON.stringify(), 
         (id)=>{
            smallElem.textContent=('Ваша заявка № ' + id + '! В ближашее время с Вами свяжемся!');
            smallElem.style.color = 'green';
            form.append(smallElem);
            
            }, 
         (err)=> {
            smallElem.textContent=('К сожалению, техические неполадки. Отправьте заявку позже' );
            smallElem.style.color='red';
            });
            form.append(smallElem);
            setTimeout(() => {
                smallElem.remove();
                serverBtn.disabled=false;
                modalBTN.disabled=false;
    
              }, 5000);
              serverBtn.disabled=true;
              modalBTN.disabled=true;
    } else alert ('Введите данные!')
        form.reset();
        
        

    })
};

formElems.forEach(formHendler);



