const blockAds = () => {
    const adSelectors = ['.ad', '.ads', '.advertisement', '.sponsored'];
    adSelectors.forEach(selector => {
        document.querySelectorAll(selector).forEach(ad => ad.remove());
    });
    console.log("Ads blocked.");
};

document.addEventListener('DOMContentLoaded', blockAds);

