// Dynamic slides data
const slides = [
    {
        image: 'img/slice-show (1).jpg',
        title: 'Fresh Coffee',
        description: 'Discover the aroma of freshly brewed coffee.',
        alt: 'A cup of freshly brewed coffee'
    },
    {
        image: 'img/slice-show (2).jpg',
        title: 'Premium Tea',
        description: 'Experience the tranquility of fine tea blends.',
        alt: 'Tea leaves in a serene setting'
    },
    {
        image: 'img/slice-show (3).jpg',
        title: 'Cozy Vibes',
        description: 'Relax and unwind with our warm ambiance.',
        alt: 'A cozy café scene'
    },
    {
        image: 'img/slice-show (4).jpg',
        title: 'Perfect Pairings',
        description: 'Savor coffee with the perfect dessert companion.',
        alt: 'Desserts and coffee served together'
    }
];

// Selectors for indicators and inner carousel
const indicatorsContainer = document.getElementById('carousel-indicators');
const innerContainer = document.getElementById('carousel-inner');

// Generate carousel items dynamically
slides.forEach((slide, index) => {
    // Create indicator button
    const indicator = document.createElement('button');
    indicator.type = 'button';
    indicator.setAttribute('data-bs-target', '#demo');
    indicator.setAttribute('data-bs-slide-to', index);
    indicator.setAttribute('aria-label', `Slide ${index + 1}`);
    if (index === 0) indicator.classList.add('active'); // Mark first indicator as active
    indicatorsContainer.appendChild(indicator);

    // Create carousel item
    const carouselItem = document.createElement('div');
    carouselItem.className = `carousel-item ${index === 0 ? 'active' : ''}`;
    carouselItem.innerHTML = `
        <img src="${slide.image}" class="d-block w-100" alt="${slide.alt}">
        <div class="container">
            <div class="carousel-caption text-start">
                <h1>${slide.title}</h1>
                <p>${slide.description}</p>
            </div>
        </div>
    `;
    innerContainer.appendChild(carouselItem);
});
