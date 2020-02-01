const bodyConst = document.querySelector('body');
const strNavSideBar = String.raw`

<div id="sidebar-2">
	<div id="sidebar-links">
		<a href="index.html">
			Welcome & Contact
		</a>
		<a href="reading-video.html">
			Reading Video
		</a>
		<a href="ebook-donate.html">
			eBook
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
		<a href="coming-soon.html">
			Coming Soon
		</a>
	</div> <!-- <div id="sidebarLinks"> -->		
</div> <!-- <div id="sidebar-2"> -->
`;
bodyConst.insertAdjacentHTML('afterbegin', strNavSideBar);

//Following code inserts hamburger on each page
const mainConst = document.querySelector('main');
const hamburger = String.raw`	
		<a id="navbar-hamburger-a-tag" href="mobile-navigation-page.html">
			<div id="navbar-hamburger" onclick="hamburgerSwirl(), hamburgerClone(), hamburgerDropdown()"> 
				<div class="navbar-hamburger-bun"></div>
				<div class="navbar-hamburger-bun"></div>
				<div class="navbar-hamburger-bun"></div>
			</div>
		</a>
`;
mainConst.insertAdjacentHTML('beforeend', hamburger);
	
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