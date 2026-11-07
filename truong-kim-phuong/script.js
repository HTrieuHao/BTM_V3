
document.addEventListener('DOMContentLoaded', function () {
  const nutFaq = document.querySelectorAll('.faq-nut-hoi');
  const cacMucFaq = document.querySelectorAll('.faq-muc');

  if (nutFaq.length === 0) return;

  nutFaq.forEach(function (nut) {
    nut.addEventListener('click', function () {
      const mucDuocChon = nut.parentElement; 
      const seMoMuc = !mucDuocChon.classList.contains('dang-mo'); 

      cacMucFaq.forEach(function (muc) {
        muc.classList.remove('dang-mo');
        capNhatDauCong(muc, '+');
      });

      if (seMoMuc) {
        mucDuocChon.classList.add('dang-mo');
        capNhatDauCong(mucDuocChon, '−');
      }
    });
  });
});

function capNhatDauCong(mucFaq, kyHieu) {
  const dauCong = mucFaq.querySelector('.faq-icon-trang-thai');
  if (dauCong) dauCong.textContent = kyHieu;
}
