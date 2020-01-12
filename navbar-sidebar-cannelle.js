const bodyConst = document.querySelector('body');
const strNavSideBar = String.raw`

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
		<a href="contact.html">
			Contact
		</a>
		<a href="proverbs.html">
			French Proverbs & Expressions
		</a>
		<a href="links-i-like.html">
			Links I Like
		</a>
	</div> <!-- <div id="sidebarLinks"> -->		
</div> <!-- <div id="sidebar-2"> -->
`;
bodyConst.insertAdjacentHTML('afterbegin', strNavSideBar);
	
