function loadData(){
    fetch('https://jsonplaceholder.typicode.com/todos/1')
  .then(response => response.json())
  .then(json => console.log(json))
}
function userData(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res=>res.json())
    .then(data=>displayUser(data))
}
function displayUser(users){
    const ul=document.getElementById("user");
    for(user of users ){
        const li=document.createElement("li");
       li.innerText=`name: ${user.name}`;
       ul.appendChild(li)
    }
}


function postData(){
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then(res=>res.json())
    .then(data=>displayData(data))
}

function displayData(posts){
    const section=document.getElementById("post");
    for(post of posts){
        const createDiv=document.createElement("div");
        createDiv.classList.add("post");
        createDiv.innerHTML=`
                        <h2>${post.title}</h2>
                        <p> ${post.body}</p>
                        `;
        section.appendChild(createDiv);
    
    }
    
}