const form = document.getElementById('generate-form');
const qr = document.getElementById('qrcode');

form.addEventListener('submit', (e) => {
    e.preventDefault();

    const url = document.getElementById('url').value;
    const size = document.getElementById('size').value;

    if(url === '') {
        alert('Please enter a URL');
    } else {
        showSpinner();
        new QRCode(qr, {
            text: url,
            width: size,
            height: size
        });
    }
});

const showSpinner = () => {
    document.getElementById('spinner').style.display = 'block';
};

const hideSpinner = () => {
    document.getElementById('spinner').style.display = 'none';
};

hideSpinner();

form.addEventListener('submit', onGenerateSubmit);