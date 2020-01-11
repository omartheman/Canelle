const bodyConst = document.querySelector('body');
const strNavSideBar = String.raw`
<nav id="navbar-2">
	<div id="navbar-2-left">
		<h1 id="h1-cannelle">Cannelle la Demoiselle</h1>
	</div>

	<a id="navbar-hamburger-a-tag" href="mobile-navigation-page.html">
		<div id="navbar-hamburger" onclick="hamburgerSwirl(), hamburgerClone(), hamburgerDropdown()"> 
			<div class="navbar-hamburger-bun"></div>
			<div class="navbar-hamburger-bun"></div>
			<div class="navbar-hamburger-bun"></div>
		</div>
	</a>
</nav> <!-- <nav id="navbar-2"> -->

<div id="sidebar-2">
	<div id="sidebar-links">
		<a href="index.html">
			Homepage
		</a>
		<a href="welcome.html">
			Welcome
		</a>
		<a href="reading-video.html">
			Reading Video
		</a>
		<a href="Rowdy_Artworks.html">
			Contact
		</a>
		<a href="Rowdy_Art_Music.html">
			French Proverbs & Expressions
		</a>
		<a href="Rowdy_Photo_Gallery.html">
			Links I Like
		</a>
	</div> <!-- <div id="sidebarLinks"> -->		
</div> <!-- <div id="sidebar-2"> -->
`;
bodyConst.insertAdjacentHTML('afterbegin', strNavSideBar);
	
