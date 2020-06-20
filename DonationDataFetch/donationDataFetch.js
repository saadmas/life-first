const fetch = require('node-fetch');

async function getDonationData() {
  const donationUrl = 'https://give.tcfusa.org/frs-api/fundraising-teams/298998/raised-rankings';
  const response = await fetch(donationUrl);
  const donationsData = await response.json();
  const lifeFirstDonationData = donationsData.rankingsList[1]
  return lifeFirstDonationData;
}