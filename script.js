window.onload = () => {
    fetch("https://blog.jrbirding.org/ghost/api/content/posts?key=7e2d614d5a22987d562cd95596&include=primary_author,url,title,created_at,excerpt,reading_time").then(resp => resp.json()).then(data => {
        console.log(data)
        let postContainer = document.getElementById("posts")
        for (let i=0; i<3; i++) {
            let post = data.posts[i].excerpt.substring(0, 100) + "..."
            postContainer.innerHTML += `<div class="card" style="background-color: white; color: #892226; width: 100%">
          <h2 class="card-title" style="color: #892226">${data.posts[i].title}</h2>
          <small>${new Date(data.posts[i].created_at).toDateString().split(" ").splice(1,3).join(" ").toString()} - ${data.posts[i].reading_time} minute read</small>
          <p>${post}</p>
          <div class="card-footer"><a href="${data.posts[i].url}">Read More</a></div>
        </div>`
        }
        document.querySelector("#loading").setAttribute("style", "display: none;")
    })
}