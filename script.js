function nextStep(stepNumber) {
    document.querySelectorAll('.step-page').forEach(page => {
        page.classList.remove('active');
    });

    document.getElementById("step" + stepNumber).classList.add('active');
}

function prevStep(stepNumber) {
    document.querySelectorAll('.step-page').forEach(page => {
        page.classList.remove('active');
    });

    document.getElementById("step" + stepNumber).classList.add('active');
}

// Photo preview
document.getElementById("photoUpload").addEventListener("change", function () {
    let reader = new FileReader();
    reader.onload = function (e) {
        let img = document.getElementById("preview");
        img.src = e.target.result;
        img.style.display = "block";
    };
    reader.readAsDataURL(this.files[0]);
});

// Generate CV
function generateCV() {

    let name = document.getElementById("name").value;
    let role = document.getElementById("role").value;
    let summary = document.getElementById("summary").value;
    let skills = document.getElementById("skills").value;
    let edu = document.getElementById("edu").value;
    let exp = document.getElementById("exp").value;
    let photo = document.getElementById("preview").src;

    document.getElementById("cv-output").innerHTML = `
        <div class="cv-header">
            <img src="${photo}">
            <h2>${name}</h2>
            <h3>${role}</h3>
        </div>

        <div class="cv-section">
            <h3>Professional Summary</h3>
            <p>${summary}</p>
        </div>

        <div class="cv-section">
            <h3>Skills</h3>
            <p>${skills}</p>
        </div>

        <div class="cv-section cv-two-col">
            <div>
                <h3>Education</h3>
                <p>${edu}</p>
            </div>
            <div>
                <h3>Experience</h3>
                <p>${exp}</p>
            </div>
        </div>
    `;

    nextStep(5);
}
