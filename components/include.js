document.querySelectorAll('[data-include]').forEach(async el => {
  const src = el.getAttribute('data-include');
  const res = await fetch(src);
  if (res.ok) el.outerHTML = await res.text();
});
