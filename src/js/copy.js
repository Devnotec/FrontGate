function copy(text) {

    console.log(";");
    if (!navigator.clipboard) {
        console.log(" Clipboard API not available");
        return;
    }
    try {
        navigator.clipboard.writeText(text);
        document.getElementById('copy-status').innerText = 'Copied!';
        setTimeout(function () {
            document.getElementById('copy-status').innerText = '';
        }, 1200);
    } catch (err) {
        console.error('Failed to copy!', err);
    }
}