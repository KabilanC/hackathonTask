var form=document.getElementById("element")

element.addEventListener('submit',function(e){
    e.preventDefault()

    var search=document.getElementById("search").value

    var originalname=search

   document.getElementById("result").innerHTML=""


    async function githubapi(){
        try {
            let result= await fetch('https://api.github.com/users/'+originalname)
        let data=await result.json()
        return data;
        } catch (error) {
            console.log(error)
        }
    }

    githubapi().then((data)=>{console.log(data)})
    
    document.getElementById("result").innerHTML = `
      <a target="_blank"href="https://www.github.com/${originalname}"> <img src="${'https://avatars2.githubusercontent.com/'+originalname}"/></a>
`
})
    