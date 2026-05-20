const sodiumData = {
"김치": 500,
"간장": 879,
"소금": 1000,
"된장": 620,
"두부": 15,
"양파": 4,
"마늘": 2
};

const translationData = {
"김치찌개": "Kimchi stew",
"김치": "Kimchi",
"간장": "Soy sauce",
"두부": "Tofu",
"양파": "Onion",
"마늘": "Garlic",
"소금": "Salt"
};

function analyzeFood() {

const foodName =
document.getElementById("foodName").value.trim();

const ingredients =
document.getElementById("ingredients")
.value
.split(",");

let totalSodium = 0;
let translationHTML = "";

ingredients.forEach(item => {

const ingredient = item.trim();

if (sodiumData[ingredient]) {
totalSodium += sodiumData[ingredient];
}

const english =
translationData[ingredient]
|| "Unknown";

translationHTML +=
<li&gt;${ingredient} → ${english}&lt;/li>;
});

const foodEnglish =
translationData[foodName]
|| "Unknown Food";

let level = "";
let levelClass = "";

if (totalSodium <= 500) {
level = "저염 😊";
levelClass = "low";
}

else if (totalSodium <= 1500) {
level = "보통 ⚠️";
levelClass = "medium";
}

else {
level = "고염 🚨";
levelClass = "high";
}

document.getElementById(
"foodTranslation"
).innerHTML =
<strong&gt;음식명:&lt;/strong&gt;&lt;br&gt; ${foodName} → ${foodEnglish};

document.getElementById(
"sodiumResult"
).innerHTML =
<strong&gt;총 나트륨 함량:&lt;/strong&gt; ${totalSodium} mg`;

document.getElementById(
"levelResult"
).innerHTML =
<span class="${levelClass}">
${level}
</span>`;

document.getElementById(
"translationList"
).innerHTML =
translationHTML;

document.getElementById(
"result"
).classList.remove("hidden");
}
