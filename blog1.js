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
checkLogin();