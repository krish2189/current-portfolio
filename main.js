var cardBody = document.querySelector('.proffession');


    var skillImages = ['angular-im.png','postgres.png','aws.png','aspnet.png','flutter.png','kotlin.png']
    var Profession = ['Full Stack Web Developer','Android Developer']
    var skills = ['Angular','Postgres','AWS','ASP.Net','Flutter','Kotlin']
    var Hobbies = ['Cycling','Swimming','Gym','Travelling']
    
    var element = document.createElement('ul');
    Profession.forEach(p=>{
        var li = document.createElement('li');
        li.innerHTML = `${p}`
        element.appendChild(li)
    })
    cardBody.appendChild(element);


    var cardBody = document.querySelector('.skills');
    skills.forEach((p,index)=>{

        var element = document.createElement('div');
        element.classList.add('col-4')
        element.innerHTML = `<img class="img-icon" src="${skillImages[index]}" width="100px" height="100px" alt="${p}">${p} `
        cardBody.appendChild(element);
    })
    var cardBody = document.querySelector('.hobby');
    var element = document.createElement('ul');
    Hobbies.forEach(p=>{
        var li = document.createElement('li');
        li.innerHTML = `${p}`
        element.appendChild(li)
    })
    cardBody.appendChild(element);