const trackForm = document.querySelector('#tracking-form');

const popupOverlay = document.querySelector('.popup-overlay');
const popupTrack = document.querySelector('.popup-track');
const popupError = document.querySelector('.popup-error');

const closePopupBtns = document.querySelectorAll('.popup-close');

const popupParcelNavNum = document.querySelector('.popup-parcel');
const popupParcelNumber = document.querySelector('.popup-parcel-number');
const popupParcelCitySender = document.querySelector(
    '.popup-parcel-citysender'
);
const popupParcelCityRecipient = document.querySelector(
    '.popup-parcel-cityrecipient'
);
const popupParcelDocumentCost = document.querySelector(
    '.popup-parcel-documentcost'
);
const popupParcelAnnouncedPrice = document.querySelector(
    '.popup-parcel-announcedprice'
);
const popupParcelStatus = document.querySelector('.popup-parcel-status');
const novaPostError = document.querySelector('.novapost-error');

trackForm.addEventListener('submit', async (e) => {
    e.preventDefault();

    const formData = new FormData(trackForm);
    const parcelNumber = formData.get('tracking-number').replaceAll(' ', '');

    document.querySelector('.tracking-input').value = '';

    const parcelForm = {
        apiKey: 'YOUR API KEY',
        modelName: 'TrackingDocument',
        calledMethod: 'getStatusDocuments',
        methodProperties: {
            Documents: [{ DocumentNumber: `${parcelNumber}` }],
        },
    };

    await fetch('https://api.novaposhta.ua/v2.0/json/', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(parcelForm),
    })
        .then((res) => res.json())
        .then((data) => {
            if (data.errors[0]) {
                novaPostError.textContent = data.errors[0];

                popupOverlay.classList.add('popup-active');
                popupError.classList.add('popup-active');
            } else {
                const parcelData = data.data[0];

                popupOverlay.classList.add('popup-active');
                popupTrack.classList.add('popup-active');

                popupParcelNavNum.textContent = `№${parcelData.Number}`;

                popupParcelNumber.textContent = `Parcel number: ${parcelData.Number}`;
                popupParcelCitySender.textContent = `From: ${parcelData.CitySender}`;
                popupParcelCityRecipient.textContent = `To: ${parcelData.CityRecipient}`;
                popupParcelDocumentCost.textContent = `Document cost: ${parcelData.DocumentCost} грн`;
                parcelData.AnnouncedPrice
                    ? (popupParcelAnnouncedPrice.textContent = `Announced price: ${parcelData.AnnouncedPrice} грн`)
                    : (popupParcelAnnouncedPrice.textContent =
                          'Announced price: Not mentioned');
            }
        });
});

closePopupBtns.forEach((btn) => {
    btn.addEventListener('click', () => {
        popupOverlay.classList.remove('popup-active');
        popupTrack.classList.remove('popup-active');
        popupError.classList.remove('popup-active');
    });
});
