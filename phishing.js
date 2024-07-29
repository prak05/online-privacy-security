const analyzeEmail = (content) => {
    fetch('https://api.us-south.natural-language-understanding.watson.cloud.ibm.com/instances/your-instance-id/v1/analyze', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer your-auth-token'
        },
        body: JSON.stringify({
            text: content,
            features: {
                keywords: {
                    emotion: true,
                    sentiment: true,
                    limit: 2
                }
            }
        })
    })
    .then(response => response.json())
    .then(data => {
        let phishingDetected = data.keywords.some(keyword => keyword.sentiment.label === 'negative' && keyword.text.includes('suspicious'));
        if (phishingDetected) {
            console.log("Phishing email detected!");
        } else {
            console.log("Email is safe.");
        }
    })
    .catch(error => console.error('Error:', error));
};

analyzeEmail("You have won a prize! Click here to claim.");

