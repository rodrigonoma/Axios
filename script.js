let btn = document.querySelector('button');
let div = document.querySelector('div');
let user = document.querySelector('#user');

btn.onclick = function(){
    axios.get(`https://api.github.com/users/${user.value}`)
    .then
}

btn.addEventListener('click',()=>{
    axios.get(`https://api.github.com/users/${user.value}`)
    .then(response=>{
        let p = document.createElement('p');
        p.innerHTML = response.data.login;
        let img = document.createElement('img');
        img.setAttribute('src',response.data.avatar_url);
        img.setAttribute('width','100px');
        img.setAttribute('height','100px');
        div.innerHTML = '';

        div.appendChild(p);
        div.appendChild(img);
    })
    .catch(error=>{
        let p = document.createElement('p');
        p.innerHTML = error;
        div.appendChild(p);
    })
});
