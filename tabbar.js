// tabbar part 

        const home = document.querySelector('.home');
        const Contact = document.querySelector('.Contact');

          home.addEventListener('click', () => {
            if(window.location.href === "http://localhost") return
            window.location.replace("http://localhost");
        })

        Contact.addEventListener('click', () => {
            console.log("Contact", window.location.href)
            if(window.location.href === "http://localhost/Contact") return
            window.location.assign('Contact.html');
        })


// tabbar part 