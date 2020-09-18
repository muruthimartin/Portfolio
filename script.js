// Check whether a user had a favourite theme in their system's local storage
//if no theme had been set, let 'light' be the default theme
let theme = localStorage.getItem('theme')
if(theme == null){
    setTheme('light')

}
else{
    setTheme(theme)
}
/* loop through the theme-dot classes and take the dataset value: light, blue,
  purple, etc. set the mode to that value and run the set theme function */
let themeDots = document.getElementsByClassName("theme-dot")

for (var i = 0; themeDots.length > i; i++ ){
    themeDots[i].addEventListener('click',function(){
        let mode =  this.dataset.mode
        setTheme(mode)
    })
}

function setTheme(mode){
    if (mode == 'light'){
        document.getElementById('theme-style').href = 'CSS/main.css'
    }

    if (mode == 'blue'){
        document.getElementById('theme-style').href = 'CSS/blue.css'
    }

    if (mode == 'green'){
        document.getElementById('theme-style').href = 'CSS/green.css'
    }

    if (mode == 'purple'){
        document.getElementById('theme-style').href = 'CSS/purple.css'
    }
    // go to the local storage in the console and store the theme
    localStorage.setItem('theme', mode)
}
