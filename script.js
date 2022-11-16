const scrollTop = document.getElementById('scrolltop');
// When the page is loaded, hide the scroll-to-top button
window.onload = () => {
 scrollTop.style.visibility = "hidden";
 scrollTop.style.opacity = 0;
}
// If the page is scrolled more than 200px,
// display the scroll-to-top button
// Otherwise keep the button hidden
window.onscroll = () => {
	if (window.scrollY > 200) {
	scrollTop.style.visibility = "visible";
	scrollTop.style.opacity = 1;
	} else {
	scrollTop.style.visibility = "hidden";
	scrollTop.style.opacity = 0;
 }
};

const menuToggle = document.querySelector('.menu-toggle input');
const nav = document.querySelector('nav .nav-bottom ul');

menuToggle.addEventListener('click', function() {
	nav.classList.toggle('slide');
})

document.removeChild('nav .nav-bottom ul .satu');

const FacebookSharer = "https://www.facebook.com/sharer/sharer.php?u="; 
function shareOnFacebook(){
  const navUrl = 'https://www.facebook.com/sharer/sharer.php?u=' + 'https://cucisepatu.com';
  window.open(navUrl , '_blank');
}
const fb = document.getElementById('fb');
fb.addEventListener('click', shareOnFacebook);

const TwitterIntent = `https://twitter.com/intent/tweet?text=`; 

function shareOnTwitter() {
  const navUrl =
    'https://twitter.com/intent/tweet?text=' +
    'https://cucisepatuMu.com';
  window.open(navUrl, '_blank');
}
const tweet = document.getElementById('twitter');
tweet.addEventListener('click', shareOnTwitter);

const shareInstagram = 'https://www.instagram.com/direct/inbox/?next=%2F/send?text="Halo Mau Cuci Sepatu ? Hubungi Instagram @cuciSepatu"';

function shareOnInstagram(){
    window.open(shareInstagram);
}

const ig = document.getElementById('instagram');
ig.addEventListener('click',shareOnInstagram);

function shareOnwhatsapp() {
    window.open
('whatsapp://send?text=Halo, Mau Cuci Sepatu Kamu ? ,Langsung Chat Adminnya nih !! Jangan Ragu Lagi ! Hubungi : @cuciSepatu')
}

const wa = document.getElementById('whatsapp');
wa.addEventListener('click',shareOnwhatsapp);

