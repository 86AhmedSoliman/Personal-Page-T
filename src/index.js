import '@laylazi/bootstrap-rtl/dist/js/bootstrap.min';
import '@laylazi/bootstrap-rtl/dist/css/bootstrap-rtl.min.css';
import 'jquery/dist/jquery.min';
import 'popper.js/dist/popper.min';
import './sass/style.scss';
import 'normalize.css';
import '@fortawesome/fontawesome-free/css/all.min.css';

// function scrollFunction (){
//     if(document.documentElement.scrollTop > 200){
//         document.getElementById('navbar').classList.add('noTransparrent');
//     } else {
//         document.getElementById('navbar').classList.remove('noTransparrent');
//     }
// }
// window.onscroll = function () {
//     scrollFunction();
// };
// // form validation
// // Example starter JavaScript for disabling form submissions if there are invalid fields
// (function () {
//     'use strict'
//     // Fetch all the forms we want to apply custom Bootstrap validation styles to
//     var forms = document.querySelectorAll('.needs-validation')
//     // Loop over them and prevent submission
//     Array.prototype.slice.call(forms)
//     .forEach(function (form) {
//         form.addEventListener('submit', function (event) {
//             if (!form.checkValidity()) {
//                 event.preventDefault()
//                 event.stopPropagation()
//             }
//             form.classList.add('was-validated')
//         }, false)
//     })
// })();
// document.getElementById('fullYear').innerHTML = new Date().getFullYear();
let navLink = document.querySelectorAll(".navbar ul>li>a");
    for (let n =0; n < navLink.length; n++){
        navLink[n].addEventListener("click", function (e) {
            let target = "#" + navLink[n].getAttribute("href");
            e.preventDefault();
            window.scrollTo({
                top: document.querySelector(target).offsetTop - 70,
                behavior: 'smooth'
            });
        });
    };
    let section = document.querySelectorAll('.section');
        window.onscroll = () => {
            let scrollPosition = document.documentElement.scrollTop + 200 || document.body.scrollTop + 75;
            for (let s = 0; s < section.length; s++) {
                if (section[s] && section[s].offsetTop <= scrollPosition){
                    let id = section[s].getAttribute("id");
                    document.querySelector('.active').classList.remove('active');
                    document.querySelector("a[href*=" + id + "]").classList.add('active');
                }
            }
        };
(function () {
    'use strict'
    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    var forms = document.querySelectorAll('.needs-validation')
    // Loop over them and prevent submission
    Array.prototype.slice.call(forms)
    .forEach(function (form) {
        form.addEventListener('submit', function (event) {
            if (!form.checkValidity()) {
                event.preventDefault()
                event.stopPropagation()
            }
            form.classList.add('was-validated')
        }, false)
    })
})();
document.getElementById('fullYear').innerHTML = new Date().getFullYear();