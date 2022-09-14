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
        
        setTimeout(() => {
            hideSpinner();
    }, 2000);
}
});

const generateQRCode = () => {
    const qrcode = new QRCode(qr, {
}


const showSpinner = () => {
    document.getElementById('spinner').style.display = 'block';
};

const hideSpinner = () => {
    document.getElementById('spinner').style.display = 'none';
};

hideSpinner();

form.addEventListener('submit', onGenerateSubmit);