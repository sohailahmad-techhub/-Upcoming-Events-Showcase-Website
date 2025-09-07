
// Event search filter
document.addEventListener('DOMContentLoaded', function () {
	const searchInput = document.getElementById('eventSearchInput');
	const searchBtn = document.getElementById('eventSearchBtn');
	const eventCards = document.querySelectorAll('.event-card-item');

	function filterEvents() {
		const keyword = searchInput.value.trim().toLowerCase();
		eventCards.forEach(card => {
			const text = card.textContent.toLowerCase();
			if (text.includes(keyword)) {
				card.style.display = '';
			} else {
				card.style.display = 'none';
			}
		});
	}

	searchInput.addEventListener('input', filterEvents);
	searchBtn.addEventListener('click', filterEvents);
});
