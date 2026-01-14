function changeLanguage(lang) {
    if (lang === 'hi') {
        document.body.innerHTML = document.body.innerHTML.replace(/Farmer Dashboard/g, 'किसान डैशबोर्ड');
        document.body.innerHTML = document.body.innerHTML.replace(/Crop Information/g, 'फसल जानकारी');
        document.body.innerHTML = document.body.innerHTML.replace(/Disease Help/g, 'बीमारी सहायता');
        document.body.innerHTML = document.body.innerHTML.replace(/Fertilizer Calculator/g, 'उर्वरक कैलकुलेटर');
        document.body.innerHTML = document.body.innerHTML.replace(/Weather Updates/g, 'मौसम जानकारी');
        document.body.innerHTML = document.body.innerHTML.replace(/Mandi Prices/g, 'मंडी कीमतें');
    } else {
        window.location.reload(); // Simple way to reset English
    }
}
function changeLanguage(lang) {
    if (lang === 'hi') {
        document.body.innerHTML = document.body.innerHTML.replace(/Farmer Dashboard/g, 'किसान डैशबोर्ड');
        document.body.innerHTML = document.body.innerHTML.replace(/Crop Information/g, 'फसल जानकारी');
        document.body.innerHTML = document.body.innerHTML.replace(/Disease Help/g, 'बीमारी सहायता');
        document.body.innerHTML = document.body.innerHTML.replace(/Fertilizer Calculator/g, 'उर्वरक कैलकुलेटर');
        document.body.innerHTML = document.body.innerHTML.replace(/Weather Updates/g, 'मौसम जानकारी');
        document.body.innerHTML = document.body.innerHTML.replace(/Mandi Prices/g, 'मंडी कीमतें');
        document.body.innerHTML = document.body.innerHTML.replace(/Welcome, Farmer/g, 'स्वागत है, किसान');
    } else {
        window.location.reload(); // Reset to English
    }
}
