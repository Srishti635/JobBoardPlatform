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
document.getElementById('sign-in-btn').addEventListener("click", function() {
    const signinInput = document.querySelector('.signin-input').value.toLowerCase();
    const jobList = document.querySelector('.job-list');
    jobList.innerHTML = ''; // Clear previous results
 nehapundir26-patch-4
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
    if (searchInput.trim() !== '') {
        const filteredJobs = jobs.filter(job => 
            job.title.toLowerCase().includes(signinInput) || 
            job.company.toLowerCase().includes(signinInput)
        ); main

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
    
 nehapundir26-patch-4
});

// Clear search input when clicking the clear icon inside the search input
const clearSearchIcon = document.querySelector('.clear-search');
const searchInputField = document.querySelector('.search-input');

searchInputField.addEventListener('input', () => {
    if (searchInputField.value.length > 0) {
        clearSearchIcon.style.display = 'block';
    } else {
        clearSearchIcon.style.display = 'none';
    }
});

clearSearchIcon.addEventListener('click', () => {
    searchInputField.value = '';
    clearSearchIcon.style.display = 'none';
    // Trigger search update after clearing input
    document.getElementById('search-btn').click();
});

document.getElementById('job-level').addEventListener('change', function() {
    const selectedJobLevel = this.value;
    const filterChosen = document.querySelector('.filter-chosen');

    // Remove existing job level chosen tag if any
    const existingTag = filterChosen.querySelector('.chosen-card.job-level');
    if (existingTag) {
        existingTag.remove();
    }

    // Add new chosen tag if selection is not default
    if (selectedJobLevel && selectedJobLevel.toLowerCase() !== 'job level') {
        const tagDiv = document.createElement('div');
        tagDiv.classList.add('chosen-card', 'job-level');
        tagDiv.innerHTML = `${selectedJobLevel} <i class="fas fa-times-circle"></i>`;
        filterChosen.appendChild(tagDiv);

        // Add click event to remove tag and reset dropdown
        tagDiv.querySelector('i').addEventListener('click', () => {
            tagDiv.remove();
            document.getElementById('job-level').selectedIndex = 0;
            // Trigger search update after removal
            document.getElementById('search-btn').click();
        });
    }

    // Trigger search update on selection change
    document.getElementById('search-btn').click();
});

document.getElementById('job-function').addEventListener('change', function() {
    const selectedJobFunction = this.value;
    const filterChosen = document.querySelector('.filter-chosen');

    // Remove existing job function chosen tag if any
    const existingTag = filterChosen.querySelector('.chosen-card.job-function');
    if (existingTag) {
        existingTag.remove();
    }

    // Add new chosen tag if selection is not default
    if (selectedJobFunction && selectedJobFunction.toLowerCase() !== 'job function') {
        const tagDiv = document.createElement('div');
        tagDiv.classList.add('chosen-card', 'job-function');
        tagDiv.innerHTML = `${selectedJobFunction} <i class="fas fa-times-circle"></i>`;
        filterChosen.appendChild(tagDiv);

        // Add click event to remove tag and reset dropdown
        tagDiv.querySelector('i').addEventListener('click', () => {
            tagDiv.remove();
            document.getElementById('job-function').selectedIndex = 0;
            // Trigger search update after removal
            document.getElementById('search-btn').click();
        });
    }

    // Trigger search update on selection change
    document.getElementById('search-btn').click();
});

document.getElementById('education').addEventListener('change', function() {
    const selectedEducation = this.value;
    const filterChosen = document.querySelector('.filter-chosen');

    // Remove existing education chosen tag if any
    const existingTag = filterChosen.querySelector('.chosen-card.education');
    if (existingTag) {
        existingTag.remove();
    }

    // Add new chosen tag if selection is not default
    if (selectedEducation && selectedEducation.toLowerCase() !== 'education') {
        const tagDiv = document.createElement('div');
        tagDiv.classList.add('chosen-card', 'education');
        tagDiv.innerHTML = `${selectedEducation} <i class="fas fa-times-circle"></i>`;
        filterChosen.appendChild(tagDiv);

        // Add click event to remove tag and reset dropdown
        tagDiv.querySelector('i').addEventListener('click', () => {
            tagDiv.remove();
            document.getElementById('education').selectedIndex = 0;
            // Trigger search update after removal
            document.getElementById('search-btn').click();
        });
    }

    // Trigger search update on selection change
    document.getElementById('search-btn').click();
});

document.getElementById('employment').addEventListener('change', function() {
    const selectedEmployment = this.value;
    const filterChosen = document.querySelector('.filter-chosen');

    // Remove existing employment chosen tag if any
    const existingTag = filterChosen.querySelector('.chosen-card.employment');
    if (existingTag) {
        existingTag.remove();
    }

    // Add new chosen tag if selection is not default
    if (selectedEmployment && selectedEmployment.toLowerCase() !== 'employment type') {
        const tagDiv = document.createElement('div');
        tagDiv.classList.add('chosen-card', 'employment');
        tagDiv.innerHTML = `${selectedEmployment} <i class="fas fa-times-circle"></i>`;
        filterChosen.appendChild(tagDiv);

        // Add click event to remove tag and reset dropdown
        tagDiv.querySelector('i').addEventListener('click', () => {
            tagDiv.remove();
            document.getElementById('employment').selectedIndex = 0;
            // Trigger search update after removal
            document.getElementById('search-btn').click();
        });
    }

    // Trigger search update on selection change
    document.getElementById('search-btn').click();
});

// Clear Filters button functionality
document.getElementById('clear-btn').addEventListener('click', function() {
    // Clear search input
    document.querySelector('.search-input').value = '';

    // Reset all dropdowns to default option
    document.getElementById('job-function').selectedIndex = 0;
    document.getElementById('job-level').selectedIndex = 0;
    document.getElementById('employment').selectedIndex = 0;
    document.getElementById('location').selectedIndex = 0;
    document.getElementById('education').selectedIndex = 0;

    // Clear all chosen tags
    const filterChosen = document.querySelector('.filter-chosen');
    filterChosen.innerHTML = '';

    // Clear job list and show all jobs
    const jobList = document.querySelector('.job-list');
    jobList.innerHTML = '';
    jobs.forEach(job => {
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
});
document.getElementById('search-btn').addEventListener('click', function() {
    const searchInput = document.querySelector('.search-input').value.toLowerCase();

})
document.getElementById('sign-in-btn').addEventListener('click', function() {
    const signinInput = document.querySelector('.sign-in-input').value.toLowerCase();
 main
    const filteredJobs = jobs.filter(job => 
        job.title.toLowerCase().includes(signinInput) || 
        job.company.toLowerCase().includes(signinInput) ||
        job.description.toLowerCase().includes(signinInput) // Check description too
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
var swiper= new swiper(".mySwiper",
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

nehapundir26-patch-4
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
    }
// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}
<script>
    const feedbackForm = document.getElementById('feedback-form');
    feedbackForm.addEventListener('submit', function(event) {
        event.preventDefault();
        alert('Thank you for your feedback!');
        feedbackForm.reset();
    });
</script>
 main

