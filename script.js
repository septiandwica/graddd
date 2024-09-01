let typingInterval; // Variabel untuk menyimpan interval pengetikan

settings = {
    //Model Popup
    objModalPopupBtn: ".modalButton",
    objModalCloseBtn: ".overlay, .closeBtn",
    objModalDataAttr: "data-popup"
}  
$(settings.objModalPopupBtn).bind("click", function () {
    if ($(this).attr(settings.objModalDataAttr)) {
        var strDataPopupName = $(this).attr(settings.objModalDataAttr);
        //Fade In Modal Pop Up
        $(".overlay, #" + strDataPopupName).fadeIn();
        
        // Memulai animasi mengetik saat modal muncul
        startTyping();
    }
});
document.addEventListener('click', function() {
    const audio = document.querySelector('audio');
    audio.play();
});
//On clicking the modal background
$(settings.objModalCloseBtn).bind("click", function () {
    $(".modal").fadeOut();
    clearInterval(typingInterval); // Hentikan interval pengetikan saat modal ditutup
    document.querySelector('.fade-in-out span').innerHTML = ""; // Kosongkan teks saat modal ditutup
});

function startTyping() {
    const texts = [
        "BAGIAN SULIT SUDAH LEWAT DAN SEKARANG SAATNYA UNTUK BERSENANG-SENANG ATAU STRES HAHA KARENA PERJALANAN HIDUP SELANJUTNYA BARU SAJA DIMULAI",
        "HAPPY GRADUATION DAY CANTIKA!!"
    ];
    const span = document.querySelector('.fade-in-out span');
    let textIndex = 0;
    let charIndex = 0;

    function type() {
        if (textIndex < texts.length) {
            if (charIndex < texts[textIndex].length) {
                span.innerHTML += texts[textIndex].charAt(charIndex);
                charIndex++;
                typingInterval = setTimeout(type, 100); // Waktu delay antara setiap karakter
            } else {
                charIndex = 0; // Reset charIndex untuk teks berikutnya
                textIndex++;
                setTimeout(() => {
                    span.innerHTML += "<br>"; // Tambahkan baris baru sebelum teks berikutnya
                    type(); // Mulai mengetik teks berikutnya
                }, 1000); // Waktu delay sebelum mulai mengetik teks berikutnya
            }
        }
    }

    type();
}

// $(document).ready(function() {
//     const noBtn = $('.nextbtn.btn-3d:contains("NO")');
//     const container = $('.bott-pane');
      
//     noBtn.on('mouseover', function() {
//       const btnWidth = noBtn.outerWidth();
//       const btnHeight = noBtn.outerHeight();
//       const containerWidth = container.width();
//       const containerHeight = container.height();
      
//       const maxX = containerWidth - btnWidth;
//       const maxY = containerHeight - btnHeight;
      
//       const randomX = Math.floor(Math.random() * maxX);
//       const randomY = Math.floor(Math.random() * maxY);
      
//       noBtn.css({
//         position: 'absolute',
//         left: randomX + 'px',
//         top: randomY + 'px'
//       });
//     });
      
//     noBtn.on('click', function(e) {
//         e.preventDefault();
//         window.location.href = 'quitpage.html';
//     });
// });
// document.querySelector('.nextbtn').addEventListener('click', function() {
//     document.getElementById('popupOne').style.display = 'none'; // Sembunyikan modal sebelumnya
//     document.getElementById('homeModal').style.display = 'block'; // Tampilkan modal home
// });