const form = document.getElementById('generate-form');
const qr = document.getElementById('qrcode');

const onGenerateSubmit = (e) => {
    e.preventDefault();

    clearUI();

    const url = document.getElementById('url').value;
    const size = document.getElementById('size').value;

    if(url === '') {
        alert('Please enter a URL');
    } else {
        showSpinner();
        
        setTimeout(() => {
            hideSpinner();

            generateQRCode(url,size);
    }, 2000);
 }
};

const generateQRCode = () => {
    const qrcode = new QRCode(qr, {
        text: url,
        width: size,
        height: size,
    });
}


const showSpinner = () => {
    document.getElementById('spinner').style.display = 'block';
};

const hideSpinner = () => {
    document.getElementById('spinner').style.display = 'none';
};

const clearUI = () => {
    qr.innerHTML = '';
}

const createSaveBtn = (saveUrl) => {
    const link = document.createElement('a');
    link.id = 'save-link';
    link.classList = 'bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded'
};

hideSpinner();

form.addEventListener('submit', onGenerateSubmit);