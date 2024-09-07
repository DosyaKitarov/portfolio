window.onload = function() {
    const favicon = document.getElementById('favicon');
    const pageTitle = document.title;
    const attentionMessage = 'Come back';

    document.addEventListener('visibilitychange', function() {
        const isPageActive = !document.hidden;
        toggle(isPageActive);
    });

    function toggle(isPageActive) {
        if (isPageActive) {
            document.title = pageTitle;
            favicon.href = './assets/images/dp_male.svg';
        } else {
            document.title = attentionMessage;
            favicon.href = './assets/images/folded.png';
        }
    }

    // Add Google Analytics script dynamically
    const gtagScript = document.createElement('script');
    gtagScript.async = true;
    gtagScript.src = 'https://www.googletagmanager.com/gtag/js?id=G-M439VMZ7FM';
    document.head.appendChild(gtagScript);

    gtagScript.onload = function() {
        window.dataLayer = window.dataLayer || [];

        function gtag() {
            dataLayer.push(arguments);
        }
        gtag('js', new Date());
        gtag('config', 'G-M439VMZ7FM');
    };
};