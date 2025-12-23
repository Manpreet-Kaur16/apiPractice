let html = "";


let contentElement = document.getElementById("content");
const getRandomCats = () => {
  let apiResponse = fetch(
    "https://api.freeapi.app/api/v1/public/cats/cat/random"
  );
  console.log(apiResponse);

  apiResponse
    .then((response) => {
      return response.json();
    })
    .then((jsonData) => {
      console.log(jsonData);

      html = `<div class=" flex justify-center mt-20 flex-col bg-white max-w-[640px] mx-auto">
    <!-- Parent -->
    <div class=" w-[640px] flex bg-gray-100 p-6 border-gray-600 bg-white-300 gap-4">
      <!-- first child -->
      <div class="bg-gradient-to-br from-purple-500 to-blue-500 w-[30%] flex flex-col">
        <img id="imageCat" class="rounded-lg w-48 h-48 object-cover shadow-lg"
          src="${jsonData.data.image}" />
      </div>

      <!-- secon child -->
      <div class="w-[70%]">
        <div class="flex gap-2">
          <h2 class="font-bold">${jsonData.data.name}</h2>
          <span class="bg-purple-100 rounded-full text-purple-400 px-2 py-1 text-xs">
            ${jsonData.data.origin}</span>
        </div>

        <p class="text-sm my-4">
          ${jsonData.data.description}
        </p>
        <div>
          <span class="bg-purple-100 rounded-full text-purple-400 px-2 py-1 text-xs">Active</span>
          <span class="bg-purple-100 rounded-full text-purple-400 px-2 py-1 text-xs">Loyal</span>
          <span class="bg-purple-100 rounded-full text-purple-400 px-2 py-1 text-xs">Highly-Intelligent</span>
          <span class="bg-purple-100 rounded-full text-purple-400 px-2 py-1 text-xs">Expressive</span>
          <span class="bg-purple-100 rounded-full text-purple-400 px-2 py-1 text-xs">trainable</span>
        </div>
        <div class="mt-2">
          <span> ⚖️ ${jsonData.data.weight.metric} kg</span>
          <span> ⌛${jsonData.data.life_span}</span>
        </div>
        <div class="mt-2">
          <a href="${jsonData.data.wikipedia_url}">Wikipedia</a>
          <a href="${jsonData.data.cfa_url}">CFA</a>
          <a href="${jsonData.data.vcahospitals_url}
          ">VCN-Hospitals</a>
        </div>
      </div>
    </div>
    <div class=" rounded-lg p-2 mt-4 ">
      <h1 class="text-xl font-bold">Charcteristics</h1>
      <div class="flex justify-between">
        <div>
          <ul>
            <li class="flex items-center">
              <h4>Adaptability </h4>
              <progress>50%</progress>
              <span>${jsonData.data.adaptability}/5</span>
            </li>
            <li class="flex items-center">
              <h4>child Friendly</h4>
              <progress>50%</progress>
              <span>${jsonData.data.child_friendly}
              /5</span >
            </li>
            <li class="flex items-center">
              <h4>Health Issues</h4>
              <progress>50%</progress>
              <span >${jsonData.data.health_issues}/5</span >
            </li>
            <li class="flex items-center">
              <h4>shedding Level</h4>
              <progress>50%</progress>
              <span>${jsonData.data.shedding_level}/5</span>
            </li>
            <li class="flex items-center">
              <h4>Stranger Friendly</h4>
              <progress>50%</progress>
              <span>${jsonData.data.stranger_friendly}/5</span>
            </li>
            <li class="flex items-center">
              <h4>Affection Level</h4>
              <progress>50%</progress>
              <span>${jsonData.data.affection_level}/5</span>
            </li>

          </ul>
        </div>
        <!-- second section -->
        <div>
          <ul>
            <li class="flex items-center">
              <h4>Dog Friendly</h4>
              <progress>50%</progress>
              <span>${jsonData.data.dog_friendly}/5</span>
            </li>
            <li class="flex items-center">
              <h4>Grooming
              <progress>50%</progress>
              <span>${jsonData.data.grooming}/5</span>
            </li>
            <li class="flex items-center">
              <h4>Intelligence</h4>
              <progress>50%</progress>
              <span>${jsonData.data.intelligence}/5</span >
            </li>
            <li class="flex items-center">
              <h4>Social Needs</h4>
              <progress>50%</progress>
              <span>${jsonData.data.social_needs}/5</span>
            </li>
            <li class="flex items-center">
              <h4>Vocalisation</h4>
              <progress>50%</progress>
              <span>${jsonData.data.vocalisation}/5</span>
            </li>
            <li class="flex items-center">
              <h4>Energy Level</h4>
              <progress>50%</progress>
              <span>${jsonData.data.energy_level}/5</span>
            </li>

          </ul>
        </div>
      </div>
    </div>
    <!-- third section  -->
    <div class="flex justify-between mt-4">
      <div>
        <p> 📍${jsonData.data.country_code}</p>
        <p> 🏚️${jsonData.data.indoor}</p>
      </div>
      <div>
        <p> ⌛${jsonData.data.natural}</p>
        <p> 🧪 ${jsonData.data.experimental}</p>
      </div>
      <div>
        <p>
          ⭐${jsonData.data.rare}
        </p>
        <p>
          🤚 ${jsonData.data.hypoallergenic}
        </p>
      </div>
    </div>
  </div>`
      contentElement.innerHTML = html;
    });
};
getRandomCats();