document.addEventListener('DOMContentLoaded', () => {
    const tips = [
        "Use a wide-tooth comb to detangle wet hair.",
        "Trim your hair regularly to avoid split ends.",
        "Avoid using heat styling tools frequently.",
        "Use a silk pillowcase to reduce hair breakage.",
        "Deep condition your hair once a week.",
        "Rinse your hair with cold water to add shine.",
        "Avoid tight hairstyles to prevent hair damage."
    ];

    const tipElement = document.getElementById('tip');
    const randomTip = tips[Math.floor(Math.random() * tips.length)];
    tipElement.textContent = randomTip;
});