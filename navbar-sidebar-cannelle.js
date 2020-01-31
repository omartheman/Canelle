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
	</div> <!-- <div id="sidebarLinks"> -->		
</div> <!-- <div id="sidebar-2"> -->
`;
bodyConst.insertAdjacentHTML('afterbegin', strNavSideBar);
	
//Create a code using javascript that will make the buttons increase a little bit in size when you hover.
//Use event listener for hover.

//How to select all of the buttons using a javascript document.
//Use a loop? 
const sidebarLinksObj = document.querySelector('#sidebar-links').getElementsByTagName('a');
//Write a loop? To make it so that for each one of these, they have an event listener that listens for hover.....

for (let i = 0; i < sidebarLinksObj.length; i++) {

	sidebarLinksObj[i].addEventListener('mouseover', function() {
			this.style.transform = 'scale(1.1)';
	});

	sidebarLinksObj[i].addEventListener('mouseout', function() {
			this.style.transform = 'scale(1)';
	});
};