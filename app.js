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

    // Get selected filter values
    const jobFunctionSelect = document.getElementById('job-function');
    const selectedJobFunction = jobFunctionSelect.value.toLowerCase();

    const jobLevelSelect = document.getElementById('job-level');
    const selectedJobLevel = jobLevelSelect.value.toLowerCase();

    const employmentSelect = document.getElementById('employment');
    const selectedEmployment = employmentSelect.value.toLowerCase();

    const locationSelect = document.getElementById('location');
    const selectedLocation = locationSelect.value.toLowerCase();

    const educationSelect = document.getElementById('education');
    const selectedEducation = educationSelect.value.toLowerCase();

    if (
        searchInput.trim() !== '' ||
        (selectedJobFunction && selectedJobFunction !== 'job function') ||
        (selectedJobLevel && selectedJobLevel !== 'job level') ||
        (selectedEmployment && selectedEmployment !== 'employment type') ||
        (selectedLocation && selectedLocation !== 'locations') ||
        (selectedEducation && selectedEducation !== 'education')
    ) {
        const filteredJobs = jobs.filter(job => {
            const matchesSearch =
                job.title.toLowerCase().includes(searchInput) ||
                job.company.toLowerCase().includes(searchInput) ||
                job.description.toLowerCase().includes(searchInput);

            const matchesJobFunction =
                selectedJobFunction === 'job function' ||
                selectedJobFunction === '' ||
                job.tags.some(tag => tag.toLowerCase() === selectedJobFunction);

            const matchesJobLevel =
                selectedJobLevel === 'job level' ||
                selectedJobLevel === '' ||
                job.tags.some(tag => tag.toLowerCase() === selectedJobLevel);

            const matchesEmployment =
                selectedEmployment === 'employment type' ||
                selectedEmployment === '' ||
                job.tags.some(tag => tag.toLowerCase() === selectedEmployment);

            const matchesLocation =
                selectedLocation === 'locations' ||
                selectedLocation === '' ||
                job.tags.some(tag => tag.toLowerCase() === selectedLocation);

            const matchesEducation =
                selectedEducation === 'education' ||
                selectedEducation === '' ||
                job.tags.some(tag => tag.toLowerCase() === selectedEducation);

            return (
                matchesSearch &&
                matchesJobFunction &&
                matchesJobLevel &&
                matchesEmployment &&
                matchesLocation &&
                matchesEducation
            );
        });

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
        alert('Please enter a job title or keywords to search or select a filter.');
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
document.addEventListener('DOMContentLoaded', () => {
    // Sign In Modal
    const signInModal = document.getElementById("sign-in-modal");
    const signInBtn = document.getElementById("sign-in-btn");
    const signInClose = signInModal.querySelector(".close");

    signInBtn.addEventListener("click", () => {
        signInModal.style.display = "block";
    });

    signInClose.addEventListener("click", () => {
        signInModal.style.display = "none";
    });

    window.addEventListener("click", (event) => {
        if (event.target === signInModal) {
            signInModal.style.display = "none";
        }
    });

    // Feedback Modal
    const feedbackBtn = document.getElementById("feedback-btn");
    const feedbackModal = document.getElementById("feedback-modal");
    const feedbackClose = document.getElementById("feedback-close");
    const feedbackForm = document.getElementById("feedback-form");
    const feedbackResponse = document.getElementById("feedback-response");

    feedbackBtn.addEventListener("click", () => {
        feedbackModal.style.display = "block";
    });

    feedbackClose.addEventListener("click", () => {
        feedbackModal.style.display = "none";
        feedbackResponse.style.display = "none";
        feedbackForm.style.display = "block";
        feedbackForm.reset();
    });

    window.addEventListener("click", (event) => {
        if (event.target === feedbackModal) {
            feedbackModal.style.display = "none";
            feedbackResponse.style.display = "none";
            feedbackForm.style.display = "block";
            feedbackForm.reset();
        }
    });

    feedbackForm.addEventListener("submit", (e) => {
        e.preventDefault();
        const name = feedbackForm.name.value.trim();
        const email = feedbackForm.email.value.trim();
        const message = feedbackForm.message.value.trim();

        if (!name || !email || !message) {
            alert("Please fill in all fields.");
            return;
        }

        // Simulate form submission
        setTimeout(() => {
            feedbackForm.style.display = "none";
            feedbackResponse.textContent = `Thank you for your feedback, ${name}!`;
            feedbackResponse.style.display = "block";
        }, 500);
    });

    // More List button functionality
    const moreListBtn = document.querySelector('.job-more');
    const jobList = document.querySelector('.job-list');
    const featuredWrapper = document.querySelector('.featured-wrapper');
    let showingAll = false;

    // Initially show only first 5 job cards
    const jobCards = jobList.querySelectorAll('.job-card');
    jobCards.forEach((card, index) => {
        if (index < 5) {
            card.style.display = 'block';
        } else {
            card.style.display = 'none';
        }
    });

    // Initially show only first 4 featured company cards
    const companyCards = featuredWrapper.querySelectorAll('.featured-card');
    companyCards.forEach((card, index) => {
        if (index < 4) {
            card.style.display = 'block';
        } else {
            card.style.display = 'none';
        }
    });

    moreListBtn.addEventListener('click', () => {
        if (!showingAll) {
            // Show all job cards
            jobCards.forEach(card => card.style.display = 'block');
            // Show all company cards
            companyCards.forEach(card => card.style.display = 'block');
            moreListBtn.textContent = 'Show Less';
            showingAll = true;
        } else {
            // Show only first 5 job cards
            jobCards.forEach((card, index) => {
                if (index < 5) {
                    card.style.display = 'block';
                } else {
                    card.style.display = 'none';
                }
            });
            // Show only first 4 company cards
            companyCards.forEach((card, index) => {
                if (index < 4) {
                    card.style.display = 'block';
                } else {
                    card.style.display = 'none';
                }
            });
            moreListBtn.textContent = 'More List';
            showingAll = false;
        }
    });
});

