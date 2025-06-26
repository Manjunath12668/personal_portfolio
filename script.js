//------------------------------------ it's for changing Roles------------------------------------------------

const developerTypes = ["Front-End Developer", "Full-Stack Developer"," Python Developer"];
let index = 0;
function changeText() {
    document.getElementById("developer-type").textContent = developerTypes[index];

    index = (index + 1) % developerTypes.length;
    }

    setInterval(changeText, 2000);
    changeText();  // Initial call to set the first text

    // ---------------Small screen Menu -------------------------------

    var side_menu = document.getElementById('sidemenu');

    function openmenu(){
        side_menu.style.right = "0";
    }
    function closemenu(){
        side_menu.style.right = "-200px";
    }


    // -----------------------About section---------------------------

    var tablinks = document.getElementsByClassName('tab-links');
    var tabcontents = document.getElementsByClassName('tab-contents');
    function opentab(tabname){
        for(tablink of tablinks){
            tablink.classList.remove('active-link');
        }
        for(tabcontent of tabcontents){
            tabcontent.classList.remove('active-tab');
        }
        event.currentTarget.classList.add('active-link');
        document.getElementById(tabname).classList.add('active-tab');

    }

    // ----------------See more Key Skills----------------
function toggleAllMore() {
    const allMoreSections = document.querySelectorAll('.more-content');
    const allButtons = document.querySelectorAll('.see-more-btn');

    let anyHidden = false;

    allMoreSections.forEach(section => {
        if (section.style.display === 'none' || section.style.display === '') {
            anyHidden = true;
        }
    });

    allMoreSections.forEach(section => {
        section.style.display = anyHidden ? 'block' : 'none';
    });

    allButtons.forEach(button => {
        button.textContent = anyHidden ? 'See Less' : 'See More';
    });
}





    //---------------- Its for send data to google sheet-----------------------

    const scriptURL = "https://script.google.com/macros/s/AKfycbzOwN7_tXzsVU-7av3LKKCBS1Nvz8UBEhGOhoRCHwI1VFMAtEnocqAGgc_2dcpCbifmIw/exec"
    const form = document.forms['submit-to-google-sheet']
    const msg = document.getElementById('msg');
  
    form.addEventListener('submit', e => {
      e.preventDefault()
      fetch(scriptURL, { method: 'POST', body: new FormData(form)})
        .then(response =>{
            msg.innerHTML = "Message Sent Successsfully"
            setTimeout(function(){
                msg.innerHTML =""
            },3000)
            form.reset()
        })
        .catch(error => console.error('Error!', error.message))
    })
