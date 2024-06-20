
// Function to handle the download button click event
function handleDownload() {
  // Get the text content
  const textContent = document.querySelector('.popup-content p').textContent;
  
  // Create a blob with the text content
  const blob = new Blob([textContent], { type: 'text/plain' });

  // Create a URL for the blob
  const url = URL.createObjectURL(blob);

  // Create a temporary link element
  const link = document.createElement('a');
  link.href = url;
  link.download = 'transcripted_text.txt'; // Set the filename for the downloaded file

  // Append the link to the document body and trigger the download
  document.body.appendChild(link);
  link.click();

  // Clean up by revoking the URL
  URL.revokeObjectURL(url);
}

// Add event listener to the download button
document.getElementById('downloadButton').addEventListener('click', handleDownload);



// Get references to the upload link button and the popup
const popup = document.getElementById('popup');



// Function to toggle the display of the popup
function togglePopup() {
  const popup = document.getElementById('popup');
  const downloadButtonContainer = document.getElementById('downloadButtonContainer');

  if (popup.style.display === 'none' || popup.style.display === '') {
    popup.style.display = 'block';
    downloadButtonContainer.style.display = 'none'; // Hide download button initially
  } else {
    popup.style.display = 'none';
    downloadButtonContainer.style.display = 'none'; // Hide download button when popup is closed
  }
}


document.getElementById('downloadButton').addEventListener('click', handleDownload);

document.getElementById('transcript').addEventListener('click', function() {
  const downloadButtonContainer = document.getElementById('downloadButtonContainer');
  downloadButtonContainer.style.display = 'block'; // Show download button when transcript button is clicked
});


document.getElementById('downloadButton').addEventListener('click', handleDownload);



(function($) { "use strict";
 
	function scrollBanner() {
	  $(document).on('scroll', function(){
      var scrollPos = $(this).scrollTop();
        $('.parallax-fade-top').css({
          'top' : (scrollPos/2)+'px',
          'opacity' : 1-(scrollPos/700)
        });
        $('.parallax-00').css({
          'top' : (scrollPos/-3.5)+'px'
        });
        $('.parallax-01').css({
          'top' : (scrollPos/-2.8)+'px'
        });
        $('.parallax-top-shadow').css({
          'top' : (scrollPos/-2)+'px'
        });
      });    
	  }
	scrollBanner();	              

	//Page cursors

    document.getElementsByTagName("body")[0].addEventListener("mousemove", function(n) {
        t.style.left = n.clientX + "px", 
		t.style.top = n.clientY + "px", 
		e.style.left = n.clientX + "px", 
		e.style.top = n.clientY + "px", 
		i.style.left = n.clientX + "px", 
		i.style.top = n.clientY + "px"
    });
    var t = document.getElementById("cursor"),
        e = document.getElementById("cursor2"),
        i = document.getElementById("cursor3");
    function n(t) {
        e.classList.add("hover"), i.classList.add("hover")
    }
    function s(t) {
        e.classList.remove("hover"), i.classList.remove("hover")
    }
    s();
    for (var r = document.querySelectorAll(".hover-target"), a = r.length - 1; a >= 0; a--) {
        o(r[a])
    }
    function o(t) {
        t.addEventListener("mouseover", n), t.addEventListener("mouseout", s)
    }              
              
  
//Scroll back to top
              
$(document).ready(function() {	
		var offset = 300;
		var duration = 400;
		jQuery(window).on('scroll', function() {
			if (jQuery(this).scrollTop() > offset) {
				jQuery('.scroll-to-top').addClass('active-arrow');
			} else {
				jQuery('.scroll-to-top').removeClass('active-arrow');
			}
		});				
		jQuery('.scroll-to-top').on('click', function(event) {
			event.preventDefault();
			jQuery('html, body').animate({scrollTop: 0}, duration);
			return false;
		})
  
  		
		/* Hero Case study images */			
		
		$('.case-study-name:nth-child(1)').on('mouseenter', function() {
			$('.case-study-name.active').removeClass('active');
			$('.case-study-images li.show').removeClass("show");
			$('.case-study-images li:nth-child(1)').addClass("show");
			$('.case-study-name:nth-child(1)').addClass('active');
		})
		$('.case-study-name:nth-child(2)').on('mouseenter', function() {
			$('.case-study-name.active').removeClass('active');
			$('.case-study-images li.show').removeClass("show");
			$('.case-study-images li:nth-child(2)').addClass("show");
			$('.case-study-name:nth-child(2)').addClass('active');
		})
		$('.case-study-name:nth-child(3)').on('mouseenter', function() {
			$('.case-study-name.active').removeClass('active');
			$('.case-study-images li.show').removeClass("show");
			$('.case-study-images li:nth-child(3)').addClass("show");
			$('.case-study-name:nth-child(3)').addClass('active');
		})
		$('.case-study-name:nth-child(4)').on('mouseenter', function() {
			$('.case-study-name.active').removeClass('active');
			$('.case-study-images li.show').removeClass("show");
			$('.case-study-images li:nth-child(4)').addClass("show");
			$('.case-study-name:nth-child(4)').addClass('active');
		})
		$('.case-study-name:nth-child(1)').trigger('mouseenter')
  
  });            
              
})(jQuery); 






function updateThumbnail() {
  // Get the input value (YouTube link)
  const youtubeLink = document.getElementById('youtubeLink').value;

  // Extract video ID from the link
  const videoId = extractVideoId(youtubeLink);

  if (videoId) {
      // Update the thumbnail image source

      const thumbnailImage = document.getElementById('thumbnailImage');
      thumbnailImage.src = `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`;
      // Show the transcript button
      document.getElementById('transcriptContainer').style.display = 'block';
  } else {
      alert('Invalid YouTube link. Please enter a valid link.');
  }
}

function extractVideoId(link) {
  const regex = /(?:youtube\.com\/(?:[^/]+\/.+\/|(?:v|e(?:mbed)?)\/|.*[?&]v=)|youtu\.be\/)([^"&?\/\s]{11})/;
  const match = link.match(regex);
  return match ? match[1] : null;
}


function extractVideoId(link) {
  const regex = /(?:youtube\.com\/(?:[^/]+\/.+\/|(?:v|e(?:mbed)?)\/|.*[?&]v=)|youtu\.be\/)([^"&?\/\s]{11})/;
  const match = link.match(regex);
  return match ? match[1] : null;
}







































const spans = document.querySelectorAll('p span');

const numLetters = spans.length;

spans.forEach(function(span, i) {
    const mappedIndex = i - (numLetters / 2)
    span.style.animationDelay = (mappedIndex * 0.25) + 's';
});



