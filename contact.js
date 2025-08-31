// Booking form handling with WhatsApp integration
const bookingForm = document.getElementById('bookingForm');

if (bookingForm) {
    // Check if a tour parameter is in the URL
    const urlParams = new URLSearchParams(window.location.search);
    const tourParam = urlParams.get('tour');
    
    if (tourParam) {
        const tourSelect = document.getElementById('tour');
        if (tourSelect) {
            tourSelect.value = tourParam;
        }
    }
    
    bookingForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        // Get form data
        const formData = new FormData(bookingForm);
        const data = Object.fromEntries(formData);
        
        // Create WhatsApp message
        const phoneNumber = '+233595266070'; // Ghana WhatsApp number
        const tourOptions = {
            'cape-coast': 'Cape Coast Castle & Elmina Castle Tour',
            'kakum': 'Kakum National Park Canopy Walk',
            'mole': 'Mole National Park Safari',
            'ada-foah': 'Ada Foah Beach Resort',
            'busua': 'Busua Beach Resort',
            'kumasi': 'Kumasi Cultural Tour',
            'volta': 'Volta Region Adventure',
            'wli': 'Wli Waterfalls Hike',
            'paga': 'Paga Crocodile Pond',
            'nzulezu': 'Nzulezu Stilt Village',
            'bosumtwi': 'Lake Bosumtwi',
            'afadja': 'Mount Afadja Hike',
            'tafi': 'Tafi Atome Monkey Sanctuary',
            'boabeng': 'Boabeng-Fiema Monkey Sanctuary',
            'custom': 'Custom Trip'
        };
        
        const tourName = tourOptions[data.tour] || data.tour;
        
        const message = `Hello El-Dorado Tours! I would like to book a tour.%0A%0A` +
            `Name: ${data.name}%0A` +
            `Email: ${data.email}%0A` +
            `Phone: ${data.phone}%0A` +
            `Tour: ${tourName}%0A` +
            `Preferred Date: ${data.date}%0A` +
            `Number of Travelers: ${data.travelers}%0A` +
            `Special Requirements: ${data.message || 'None'}%0A%0A` +
            `Please contact me to confirm this booking.`;
        
        // Open WhatsApp with pre-filled message
        const whatsappUrl = `https://wa.me/${phoneNumber.replace(/\D/g, '')}?text=${message}`;
        window.open(whatsappUrl, '_blank');
        
        // Show confirmation message
        alert('Thank you for your booking request! We have opened WhatsApp for you to send your message. Our team will contact you soon to confirm your tour.');
    });
}