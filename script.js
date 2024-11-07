// Database simulation
const chapters = {
    science: [
        { title: 'Structure of Atom', content: 'Learn about atomic structure...' },
        { title: 'Matter in Our Surroundings', content: 'States of matter...' },
        { title: 'Motion', content: 'Understanding velocity and acceleration...' }
    ],
    mathematics: [
        { title: 'Linear Equations', content: 'Solving linear equations...' },
        { title: 'Number Systems', content: 'Real numbers and their properties...' },
        { title: 'Polynomials', content: 'algebraic expressions that consist of variables and coefficients...' },
        { title: 'Lines and Angles', content: 'the basic shapes in geometry...' }
    ],
    english: [
        { title: 'The Fun They Had', content: 'Chapter summary and analysis...' },
        { title: 'The Road Not Taken', content: 'Poem analysis...' },
        { title: 'Grammar Basics', content: 'Parts of speech...' }
    ]
};

// DOM Elements
const searchInput = document.getElementById('searchInput');
const searchResults = document.getElementById('searchResults');
const navLinks = document.querySelectorAll('.nav-link');
const subjectLinks = document.querySelectorAll('.subject-link');
const footerSubjectLinks = document.querySelectorAll('.footer-subject-link');
const chapterLinks = document.querySelectorAll('.chapter-link');

// Search functionality
searchInput.addEventListener('input', (e) => {
    const searchTerm = e.target.value.toLowerCase();
    if (searchTerm.length < 2) {
        searchResults.classList.add('hidden');
        return;
    }

    const results = [];
    Object.entries(chapters).forEach(([subject, chapterList]) => {
        chapterList.forEach(chapter => {
            if (chapter.title.toLowerCase().includes(searchTerm) || 
                chapter.content.toLowerCase().includes(searchTerm)) {
                results.push({
                    subject,
                    ...chapter
                });
            }
        });
    });

    displaySearchResults(results);
});

// Display search results
function displaySearchResults(results) {
    searchResults.innerHTML = '';
    
    if (results.length === 0) {
        searchResults.innerHTML = '<div class="search-result-item">No results found</div>';
        searchResults.classList.remove('hidden');
        return;
    }

    results.forEach(result => {
        const resultItem = document.createElement('div');
        resultItem.className = 'search-result-item cursor-pointer';
        resultItem.innerHTML = `
            <h4 class="font-bold">${result.title}</h4>
            <p class="text-sm text-gray-600">Subject: ${result.subject}</p>
        `;
        resultItem.addEventListener('click', () => {
            // Navigate to chapter page with parameters
            window.location.href = `chapter.html?subject=${result.subject.toLowerCase()}&chapter=${encodeURIComponent(result.title)}`;
        });
        searchResults.appendChild(resultItem);
    });

    searchResults.classList.remove('hidden');
}

// Modal functionality
function createModal() {
    const modal = document.createElement('div');
    modal.className = 'modal';
    modal.innerHTML = `
        <div class="modal-content">
            <span class="modal-close">&times;</span>
            <div class="modal-body"></div>
        </div>
    `;
    document.body.appendChild(modal);
    return modal;
}

const modal = createModal();
const modalClose = modal.querySelector('.modal-close');
const modalBody = modal.querySelector('.modal-body');

modalClose.addEventListener('click', () => {
    modal.style.display = 'none';
});

window.addEventListener('click', (e) => {
    if (e.target === modal) {
        modal.style.display = 'none';
    }
});

// Show chapter content in modal
function showChapterModal(chapter) {
    modalBody.innerHTML = `
        <h2 class="text-2xl font-bold mb-4">${chapter.title}</h2>
        <p class="text-gray-600">${chapter.content}</p>
    `;
    modal.style.display = 'block';
}

// Navigation functionality
function updateActiveNavLink() {
    const currentSection = Array.from(document.querySelectorAll('section'))
        .find(section => {
            const rect = section.getBoundingClientRect();
            return rect.top <= 100 && rect.bottom > 100;
        });

    if (currentSection) {
        const currentId = currentSection.id;
        navLinks.forEach(link => {
            if (link.getAttribute('href') === `#${currentId}`) {
                link.classList.add('active');
            } else {
                link.classList.remove('active');
            }
        });
    }
}

// Handle subject link clicks
function handleSubjectClick(subject) {
    const subjectChapters = chapters[subject];
    if (subjectChapters) {
        modalBody.innerHTML = `
            <h2 class="text-2xl font-bold mb-4">${subject.charAt(0).toUpperCase() + subject.slice(1)} Chapters</h2>
            <div class="space-y-4">
                ${subjectChapters.map(chapter => `
                    <div class="p-4 bg-gray-50 rounded-lg cursor-pointer hover:bg-gray-100" 
                         onclick="window.location.href='chapter.html?subject=${subject}&chapter=${encodeURIComponent(chapter.title)}'">
                        <h3 class="font-bold">${chapter.title}</h3>
                        <p class="text-sm text-gray-600">${chapter.content.substring(0, 100)}...</p>
                    </div>
                `).join('')}
            </div>
        `;
        modal.style.display = 'block';
    }
}

// Event Listeners
window.addEventListener('scroll', updateActiveNavLink);
document.addEventListener('DOMContentLoaded', updateActiveNavLink);

subjectLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const subject = e.target.closest('[data-subject]').dataset.subject;
        handleSubjectClick(subject);
    });
});

footerSubjectLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const subject = e.target.dataset.subject;
        handleSubjectClick(subject);
    });
});

chapterLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const chapterTitle = e.target.closest('div').querySelector('h3').textContent;
        let foundChapter = null;
        
        Object.values(chapters).some(chapterList => {
            foundChapter = chapterList.find(chapter => chapter.title === chapterTitle);
            return foundChapter;
        });

        if (foundChapter) {
            showChapterModal(foundChapter);
        }
    });
});

// Close search results when clicking outside
document.addEventListener('click', (e) => {
    if (!e.target.closest('.search-container')) {
        searchResults.classList.add('hidden');
    }
});

// Handle escape key
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        searchResults.classList.add('hidden');
        modal.style.display = 'none';
    }
});
// Popular Chapters navigation
document.addEventListener('DOMContentLoaded', () => {
    // Get all "Read more" links in the Popular Chapters section
    const popularChapterLinks = document.querySelectorAll('#featured a[href^="chapter.html"]');
    
    popularChapterLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const url = new URL(link.href);
            const subject = url.searchParams.get('subject');
            const chapter = url.searchParams.get('chapter');
            
            // Check if the chapter exists in our database
            if (chapters[subject]?.some(ch => ch.title === chapter)) {
                // Navigate to the chapter page
                window.location.href = link.href;
            } else {
                // Show error message if chapter doesn't exist
                console.error(`Chapter "${chapter}" not found in ${subject}`);
                // Optionally show a user-friendly error message
                alert('Sorry, this chapter is currently unavailable.');
            }
        });
    });
});

// Optional: Add this helper function to make popular chapters dynamic
function updatePopularChapters(popularChapters) {
    const featuredGrid = document.querySelector('#featured .grid');
    if (!featuredGrid) return;

    featuredGrid.innerHTML = popularChapters.map(chapter => `
        <div class="bg-white rounded-lg shadow-md p-6 flex items-start space-x-4">
            <div class="bg-teal-100 rounded-lg p-3">
                <span class="text-2xl">${chapter.icon}</span>
            </div>
            <div>
                <h3 class="text-lg font-bold text-gray-800 mb-2">${chapter.title}</h3>
                <p class="text-gray-600 mb-3">${chapter.description}</p>
                <a href="chapter.html?subject=${chapter.subject.toLowerCase()}&chapter=${encodeURIComponent(chapter.title)}" 
                   class="text-teal-600 hover:text-teal-700 inline-block">
                    Read more →
                </a>
            </div>
        </div>
    `).join('');
}