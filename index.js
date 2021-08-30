function randomUser(){
    fetch('https://randomuser.me/api/?results=5')
    .then(res=>res.json())
    .then(data=>display(data))
}
randomUser();
function display(data){
    console.log(data.results)
    const buddies=data.results;
    const buddiesContainer=document.getElementById("buddies");
    for(buddy of buddies){
        const p=document.createElement("p");
        p.innerText=`Name: ${buddy.name.title} ${buddy.name.first} ${buddy.name.last}
        Email: ${buddy.email}`
        buddiesContainer.appendChild(p);

    }

}