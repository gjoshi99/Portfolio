// tabbar part 

        const home = document.querySelector('.home');
        const Contact = document.querySelector('.Contact');

          home.addEventListener('click', () => {
            if(window.location.href === "https://gjoshi99.github.io/Portfolio/") return
            window.location.replace("https://gjoshi99.github.io/Portfolio/");
        })

        Contact.addEventListener('click', () => {
            console.log("Contact", window.location.href)
            if(window.location.href === "https://gjoshi99.github.io/Portfolio/Contact") return
            window.location.assign('Contact');
        })


// tabbar part 