import { getDonationData } from 'backend/serviceModule';

$w.onReady(onReady);

async function onReady() {
  await updateDonationData();
}

async function updateDonationData() {
  $w('#progressBar1').targetValue = 50000;
  const donationData = await getDonationData();
  const roundedDonationData = Math.round(donationData);
  $w('#progressBar1').value = donationData;
  $w('#text24').text = `$ ${roundedDonationData} raised of $50,000`;
}