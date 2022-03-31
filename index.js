// Add your code here
function submitData(userName, userEmail) {
    //fetch('http://localhost:3000/users')
    const configObj = {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
        },
        body: JSON.stringify({
            "name": userName,
            "email": userEmail
        })
    };
    return fetch("http://localhost:3000/users",configObj)
    .then(res => res.json())
    .then(body => addNewContact(body.id))

    .catch(response => {
        console.log(response)
        document.body.append(response)
    })
    //document.body.append(message)
    //console.log(response)
    
}
function addNewContact(newID) {
    document.getElementsByTagName("body")[0].innerHTML =newID;
    

}
submitData("Name", "name@name.com")