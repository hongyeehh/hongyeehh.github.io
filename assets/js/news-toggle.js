/* News "show more / show less" toggle */
document.addEventListener('DOMContentLoaded', function () {
  var btn = document.getElementById('news-toggle-btn');
  if (!btn) return;

  var hiddenItems = document.querySelectorAll('.news-hidden');

  btn.addEventListener('click', function () {
    var expanded = btn.getAttribute('data-expanded') === 'true';

    hiddenItems.forEach(function (el) {
      el.style.display = expanded ? 'none' : 'flex';
    });

    btn.setAttribute('data-expanded', String(!expanded));
    btn.innerHTML = expanded
      ? '<span>▼</span> Show older news'
      : '<span>▲</span> Show less';
  });
});
