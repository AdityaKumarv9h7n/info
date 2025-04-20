async function lookupNumber() {
  const phone = document.getElementById("phoneInput").value;
  const resultBox = document.getElementById("result");
  resultBox.innerHTML = "⏳ Looking up...";

  const apiKey = "4bd4b9727f4ed965bded5d95b8f77761"; // WARNING: This will be public!

  const url = `http://apilayer.net/api/validate?access_key=${apiKey}&number=${encodeURIComponent(phone)}`;

  try {
    const response = await fetch(url);
    const data = await response.json();

    if (!data.valid) {
      resultBox.innerHTML = `<p>❌ Invalid phone number.</p>`;
    } else {
      resultBox.innerHTML = `
        <p><strong>Number:</strong> ${data.international_format}</p>
        <p><strong>Country:</strong> ${data.country_name}</p>
        <p><strong>Location:</strong> ${data.location}</p>
        <p><strong>Carrier:</strong> ${data.carrier}</p>
        <p><strong>Line Type:</strong> ${data.line_type}</p>
      `;
    }
  } catch (err) {
    resultBox.innerHTML = `<p>⚠️ Could not fetch data.</p>`;
  }
}
