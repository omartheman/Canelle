const titleConst = document.querySelector('title');
const bodyConst = document.querySelector('body');
const strNavSideBar = String.raw`

<div id="sidebar-2">
	<div id="sidebar-links">
		<a href="index.html">
			Welcome & Contact
		</a>
		<a href="ebook-donate.html">
			eBook
		</a>
		<a href="lessons.html">
			French Lessons
		</a>
		<a href="proverbs.html">
			French Proverbs
		</a>
		<a href="links-i-like.html">
			Links I Like
		</a>
		<a href="thanks.html">
			Thanks
		</a>
		<a href="questions.html">
			Questions & Answers
		</a>
		<a href="where-to-buy.html">
			Where to Buy the Book
		</a>
	</div> <!-- <div id="sidebarLinks"> -->		
</div> <!-- <div id="sidebar-2"> -->
`;
bodyConst.insertAdjacentHTML('afterbegin', strNavSideBar);

//Following code inserts hamburger on each page
const mainConst = document.querySelector('main');
const hamburger = String.raw`	
		<div id="navbar-hamburger"> 
			<div class="navbar-hamburger-bun"></div>
			<div class="navbar-hamburger-bun"></div>
			<div class="navbar-hamburger-bun"></div>
		</div>
`;
mainConst.insertAdjacentHTML('beforeend', hamburger);
	
//Following code inserts Google fonts on each page.

const googleFonts = String.raw`
<link href="https://fonts.googleapis.com/css?family=Righteous&display=swap" rel="stylesheet">
<link href="https://fonts.googleapis.com/css?family=Josefin+Sans&display=swap" rel="stylesheet">
<link href="https://fonts.googleapis.com/css?family=Cedarville+Cursive&display=swap" rel="stylesheet"><!-- Google Fonts - Cedarville Cursive -->
<link href="https://fonts.googleapis.com/css?family=Krona+One&display=swap" rel="stylesheet">
<link href="https://fonts.googleapis.com/css?family=Roboto+Slab:400,500,600,700,800,900&display=swap" rel="stylesheet">
`;
titleConst.insertAdjacentHTML('beforebegin', googleFonts);

const sidebarLinksObj = document.querySelector('#sidebar-links').getElementsByTagName('a');
//This loop selects all javascript buttons, and applies scale to them on mouseover. 
for (let i = 0; i < sidebarLinksObj.length; i++) {

	sidebarLinksObj[i].addEventListener('mouseover', function() {
			this.style.transform = 'scale(1.1)';
	});

	sidebarLinksObj[i].addEventListener('mouseout', function() {
			this.style.transform = 'scale(1)';
	});
};

$('#navbar-hamburger').on('click', function(){
	$('#mobile-navigation-main-content').slideToggle();
});

bodyConst.insertAdjacentHTML('afterend', String.raw`

<div id="mobile-navigation-main-content">
<nav id="navbar-mobile">
	<a href="index.html">
		Welcome & Contact
	</a>
	<a href="ebook-donate.html">
		eBook
	</a>
	<a href="lessons.html">
		French Lessons
	</a>
	<a href="proverbs.html">
		French Proverbs
	</a>
	<a href="links-i-like.html">
		Links I Like
	</a>
	<a href="thanks.html">
		Thanks
	</a>
	<a href="questions.html">
		Questions
	</a>
	<a href="where-to-buy.html">
		Where to Buy Book
	</a>
</nav> <!-- <nav id="navbar-3"> -->
</div> <!-- <div id="mobile-navigation-main-content"> -->
`);