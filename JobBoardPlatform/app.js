$(document).ready(function(){
    $(window).scroll(function(){
        var scroll=$(window).scrollTop();
        if(scroll>150){
            $(".navbar").css("background","#222");
            $(".navbar").css("box-shadow","rgba(0,0,0,0.1) 0px 4px 12px");
        }
        else{
            $(".navbar").css("background", "transparent");
            $(".navbar").css("box-shadow", "none");

        }
    })

});
// Job data
const jobs = [
    {
        company: "Tesla",
        title: "Mechanical Engineer",
        description: "Work on innovative automotive projects.",
        tags: ["Engineering", "Automotive"],
        posted: "Posted 2 mins ago"
    },
    {
        company: "Ebay",
        title: "Business Development",
        description: "Drive growth through strategic partnerships.",
        tags: ["Business", "Sales"],
        posted: "Posted 5 mins ago"
    },
    {
        company: "Youtube",
        title: "UI UX Designer",
        description: "Design user-friendly interfaces for our platform.",
        tags: ["Design", "UI/UX"],
        posted: "Posted an hour ago"
    },
    {
        company: "Amazon",
        title: "Software Engineer",
        description: "Develop scalable software solutions.",
        tags: ["Engineering", "Software"],
        posted: "Posted an hour ago"
    }
];
document.getElementById('search-btn').addEventListener('click', function() {
    const searchInput = document.querySelector('.search-input').value.toLowerCase();
    const jobList = document.querySelector('.job-list');
    jobList.innerHTML = ''; // Clear previous results

    if (searchInput.trim() !== '') {
        const filteredJobs = jobs.filter(job => 
            job.title.toLowerCase().includes(searchInput) || 
            job.company.toLowerCase().includes(searchInput)
        );

        if (filteredJobs.length > 0) {
            filteredJobs.forEach(job => {
                const jobCard = document.createElement('div');
                jobCard.classList.add('job-card');
                jobCard.innerHTML = `
                    <div class="job-name">
                        <img class="job-profile" src="images/${job.company.toLowerCase()}.png" alt="${job.company}">
                        <div class="job-detail">
                            <h4>${job.company}</h4>
                            <h3>${job.title}</h3>
                            <p>${job.description}</p>
                        </div>
                    </div>
                    <div class="job-label">
                        ${job.tags.map(tag => `<a class="label-a">${tag}</a>`).join('')}
                    </div>
                    <div class="job-posted">${job.posted}</div>
                `;
                jobList.appendChild(jobCard);
            });
        } else {
            jobList.innerHTML = '<p>No jobs found.</p>';
        }
    } else {
        alert('Please enter a job title or keywords to search.');
    }
    
})
document.getElementById('search-btn').addEventListener('click', function() {
    const searchInput = document.querySelector('.search-input').value.toLowerCase();
    const filteredJobs = jobs.filter(job => 
        job.title.toLowerCase().includes(searchInput) || 
        job.company.toLowerCase().includes(searchInput) ||
        job.description.toLowerCase().includes(searchInput) // Check description too
    );

    // Display filtered jobs
    displayJobs(filteredJobs);
});

// navbar mobile version
const mobile= document.querySelector(".menu-toggle");
const mobileLink= document.querySelector(".navbar-menu");
mobile.addEventListener("click", function(){
    mobile.classList.toggle("is-active");
    mobileLink.classList.toggle("active");
})
mobile.addEventListener("click", function(){
    const menuBars = document.querySelector(".is-active");
    if(window.innerWidth<=768 && menuBars){
        mobile.classList.toggle("is-active");
        mobileLink.classList.remove("actives")
    }
})


// smooth scroll
var navbarHeight=$(".navbar").outerHeight();
$(".navbar-menu a").click(function(e){
    var targetHref = $(this).attr("href");
    $("html,body").animate({
        scrollTop: $(targetHref).offset().top-navbarHeight
 }, 1000)
 e.preventDefault();
})
// swiper
var swiper= new Swiper(".mySwiper",
{
    loop:true,
    autoplay:{
        delay:2500,
        disableOnInteraction:false,
    },
    slidesPerView:1,
    spaceBetween:10,
    pagination:{
        el:".swiper-pagination",
        clickable:true,

    },
    breakpoints:{
        640:{
            slidesPerView:2,
            spaceBetween:20,

        },
        768:{
            slidesPerView:3,
            spaceBetween:40,

        },
        1024:{
            slidesPerView:3,
            spaceBetween:50,
        }
    }
})
// Get the modal
var modal = document.getElementById("sign-in-modal");

// Get the button that opens the modal
var btn = document.getElementById("sign-in-btn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal
btn.onclick = function() {
    modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
    modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

