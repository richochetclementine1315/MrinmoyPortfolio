let menu= document.querySelector('#menu-icon');
let navbar=document.querySelector('.navbar');

menu.onclick=() =>{
    menu.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}
    window.onscroll=()=>{
        menu.classList.remove('bx-x');
        navbar.classList.remove('active')
    
}
const typed = new Typed('.multiple-text', {
    strings: ['Frontend Developer.', 'Backend Developer.','UI/UX Designer.'],
    typeSpeed: 80,
    backSpeed: 80,
    backDelay:1200,
    loop:true,
  });
  function emailSend(){
   



    Email.send({
        Host : "s1.maildns.net",
        Username : "mrinmoymatilaljain@gmail.com",
        Password : "ADF668925F946BF1013D39434D37D340C6BE",
        To : 'mrinmoymatilal1315@gmail.com',
        From : "mrinmoymatilaljain@gmail.com",
        Subject : "This is the subject",
        Body : "And this is the body"
    }).then(
      message => alert(message)
    );
  }

