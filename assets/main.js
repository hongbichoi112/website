// "Abstract" 버튼 클릭 시 초록 펼치기/접기
document.querySelectorAll('[data-toggle="abstract"]').forEach(function (btn) {
  btn.addEventListener('click', function () {
    var box = document.getElementById(btn.getAttribute('aria-controls'));
    var open = box.classList.toggle('open');
    btn.setAttribute('aria-expanded', open);
  });
});
