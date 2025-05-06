const fetch = require('node-fetch');

async function testFactCheck() {
  const apiKey = 'AIzaSyDlyNlTJ_4qdM9GS2CUI5cei78gCorB41g';
  const url = `https://factchecktools.googleapis.com/v1alpha1/claims:search?key=${apiKey}&query=example`;

  try {
    const response = await fetch(url);
    const data = await response.json();
    console.log('Fact Check API response:', data);
  } catch (error) {
    console.error('Error fetching Fact Check API:', error);
  }
}

testFactCheck();
