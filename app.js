let nav = document.querySelector('.nav');
let navExpand = document.querySelector('.nav_expand');
let navListItem = document.querySelectorAll('.nav_listitem');

navExpand.addEventListener('click', () => {
	nav.classList.toggle('nav-closed');
});

navListItem.forEach((link) => link.addEventListener('click', listActive));

function listActive() {
	navListItem.forEach((link) => link.classList.remove('nav_listitem-active'));
	this.classList.add('nav_listitem-active');
}
