function checkLogin() {
    if (localStorage.getItem("dangnhap")) {
        let rightheader = document.querySelector(".rightheader");
        rightheader.innerHTML = `
         <span>
           ${localStorage.getItem("dangnhap")}
         </span>
         <ul>
           <li>Thông tin tài khoản</li>
           <li class="logout">Đăng xuất</li>
         </ul>
        `;

        let btnLogout = document.querySelector(".logout");
        btnLogout.addEventListener("click", function () {
            localStorage.removeItem("dangnhap");
            checkLogin();
        });
    } else {
        let rightheader = document.querySelector(".rightheader");
        rightheader.innerHTML = `
        <a href="">Đăng ký</a>
        <a href="/dangnhap.html">Đăng nhập</a>
           `;
    }
}

// let bloglink = document.querySelectorAll(".linkblog");
// console.log(bloglink);
// localStorage.setItem("ngocdangnhap", 123123);
// for (let i = 0; i < bloglink.length; i++) {
//     bloglink[i].addEventListener("click", function () {
//         let indexBlog = (i += 2);
//         if (localStorage.getItem("ngocdangnhap")) {
//             location.href = `blog${indexBlog}.html`;
//         } else {
//             alert("Plese log in before read this blog");
//         }
//     });
// }
checkLogin();