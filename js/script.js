
const aside = document.querySelector('.aside'),
	pageTitle = document.querySelector('.page__title'),
	pageBody = document.querySelector('.page-body'),
	tableItems = document.querySelectorAll('.page-table__tbody tr'),
	pageFooter = document.querySelector('.page-body__footer ')
document.addEventListener('DOMContentLoaded', (e) => {
	
setInterval(() => {
		aside.classList.add('_show');
	}, 200);
	setInterval(() => {
		pageTitle.classList.add('_show')
	}, 500);
	setInterval(() => {
		pageBody.classList.add('_show')
	}, 800);
	tableItems.forEach((item, index) => {
		setInterval(() => {
			item.classList.add('_show')
		}, (800 + (index * 300)));
	})
	setInterval(() => {
		pageFooter.classList.add('_show')
	}, 3300);
})