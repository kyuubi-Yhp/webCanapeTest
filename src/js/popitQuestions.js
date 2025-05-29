const btnOpenList = document.querySelectorAll('.btn__open');

btnOpenList.forEach(function (btn) {
  btn.addEventListener('click', function () {
    const box = btn.closest('.box__questions')
    const title = box.querySelector('.title__inside-questions')
    const text = box.querySelector('.text__questions')
    const btnOpen = box.querySelector('.btn__open')
    

    title.classList.toggle('title__inside-questions-active');
    text.classList.toggle('text__questions-active');
    btnOpen.classList.toggle('btn__open-active')
    box.classList.toggle('box__questions-active')
  })
})