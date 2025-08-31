// Tour category filtering
const categoryButtons = document.querySelectorAll('.category-btn');
const tourCards = document.querySelectorAll('.tour-card');

if (categoryButtons.length > 0 && tourCards.length > 0) {
    categoryButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Update active button
            categoryButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');
            
            // Filter tours
            const category = button.dataset.category;
            tourCards.forEach(card => {
                if (category === 'all' || card.dataset.category === category) {
                    card.style.display = 'flex';
                } else {
                    card.style.display = 'none';
                }
            });
        });
    });
}