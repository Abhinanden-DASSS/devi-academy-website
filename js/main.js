document.addEventListener('DOMContentLoaded', function() {
    // Hamburger menu functionality
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');

    hamburger.addEventListener('click', () => {
        navLinks.classList.toggle('active');
        hamburger.classList.toggle('active');
    });

    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Sample announcements data
    const announcements = [
        {
            title: 'New Academic Year 2025-26',
            date: 'August 15, 2025',
            content: 'Registration for the new academic year is now open'
        },
        {
            title: 'Parent-Teacher Meeting',
            date: 'September 1, 2025',
            content: 'Scheduled for all classes'
        },
        {
            title: 'Sports Day',
            date: 'September 15, 2025',
            content: 'Annual sports day celebration'
        }
    ];

    // Sample events data
    const events = [
        {
            title: 'Annual Day Celebration',
            date: 'October 5, 2025',
            time: '9:00 AM'
        },
        {
            title: 'Science Exhibition',
            date: 'October 15, 2025',
            time: '10:00 AM'
        },
        {
            title: 'Cultural Festival',
            date: 'November 1, 2025',
            time: '11:00 AM'
        }
    ];

    // Populate announcements
    const announcementList = document.querySelector('.announcement-list');
    if (announcementList) {
        announcements.forEach(announcement => {
            const div = document.createElement('div');
            div.classList.add('announcement-item');
            div.innerHTML = `
                <h4>${announcement.title}</h4>
                <p class="date">${announcement.date}</p>
                <p>${announcement.content}</p>
            `;
            announcementList.appendChild(div);
        });
    }

    // Populate events
    const eventsList = document.querySelector('.events-list');
    if (eventsList) {
        events.forEach(event => {
            const div = document.createElement('div');
            div.classList.add('event-item');
            div.innerHTML = `
                <h4>${event.title}</h4>
                <p class="date">${event.date}</p>
                <p class="time">${event.time}</p>
            `;
            eventsList.appendChild(div);
        });
    }

    // Add scroll event listener for navbar
    window.addEventListener('scroll', function() {
        const navbar = document.querySelector('.navbar');
        if (window.scrollY > 50) {
            navbar.style.backgroundColor = 'rgba(255, 255, 255, 0.95)';
            navbar.style.boxShadow = '0 2px 5px rgba(0,0,0,0.1)';
        } else {
            navbar.style.backgroundColor = '#fff';
            navbar.style.boxShadow = 'none';
        }
    });
});
