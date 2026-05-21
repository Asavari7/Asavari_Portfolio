// SECTION NAVIGATION

function showSection(id){

    document.querySelectorAll(".section").forEach(section => {
        section.classList.remove("active");
    });

    document.getElementById(id).classList.add("active");
}


// AFTER PAGE LOAD

document.addEventListener("DOMContentLoaded", () => {

    // DARK MODE

    const themeBtn = document.getElementById("themeBtn");

    themeBtn.addEventListener("click", () => {

        document.body.classList.toggle("dark");

        if(document.body.classList.contains("dark")){
            themeBtn.innerHTML = "☀️";
        }
        else{
            themeBtn.innerHTML = "🌙";
        }

    });


    // CONTACT FORM VALIDATION

    const form = document.getElementById("contactForm");

    form.addEventListener("submit", function(e){

        e.preventDefault();

        const name = document.getElementById("name");
        const email = document.getElementById("email");
        const message = document.getElementById("message");
        const error = document.getElementById("error");

        if(
            name.value.trim() === "" ||
            email.value.trim() === "" ||
            message.value.trim() === ""
        ){

            error.innerText = "Please fill all fields!";
            error.style.color = "yellow";

            return;
        }

        error.innerText = "";

        alert("Message Sent Successfully!");

        form.reset();

    });


    // AJAX PROJECT DATA

    $.ajax({

        url:"https://jsonplaceholder.typicode.com/posts?_limit=3",

        method:"GET",

        success:function(data){

            let html = "";

            data.forEach(item => {

                html += `
                <div class="project-box">
                    <h3>${item.title}</h3>
                    <p>${item.body}</p>
                </div>
                `;

            });

            $("#projectData").html(html);

        }

    });

});
