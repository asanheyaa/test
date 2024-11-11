
const aside = document.querySelector('.aside'),
	pageTitle = document.querySelector('.page__title'),
	pageBody = document.querySelector('.page_body'),
	tableItems = document.querySelectorAll('.page_table__tr'),
	pageFooter = document.querySelector('.page_body__footer '),
	mql = window.matchMedia("(min-width: 1250px)"),
	mobileAnimItems = document.querySelectorAll('.mobileAnim')

if (mql.matches) {
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
} else {

	setInterval(() => {
		aside.classList.add('_show');
	}, 200);
	window.addEventListener('scroll', (e) => {
		
		let scrollPosition = this.scrollY
		mobileAnimItems.forEach((item, i)=> {
			let itemTopDistanse = item.offsetTop - window.innerHeight
			if (item.classList.contains('page_table_mobile__tr')) {
				const itemsWrapper = document.querySelector('.page_table_mobile')
				itemTopDistanse = (item.offsetTop + itemsWrapper.offsetTop) - window.innerHeight
				if (scrollPosition > itemTopDistanse) {
					item.classList.add('_show')
				}
			} else if (scrollPosition > itemTopDistanse) {
				item.classList.add('_show')
			}
			
		});
	})
	
}
