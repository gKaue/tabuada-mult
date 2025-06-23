// Seleção de elementos
const numberInput = document.querySelector('#number');
const multInput = document.querySelector("#multiplicator");

const multForm = document.querySelector("#multiplication-form");
const multTable = document.querySelector("#multiplication-operations");
const multTitle = document.querySelector("#multiplication-title span");

// Funções
const createTable = (multNumber, multNumber2)=>{
    multTable.innerHTML = "";

    for (let i = 0;i <= multNumber2; i++) {
        const result = multNumber*i;

        const temp = `
            <div class="row">
                <div class="operation">${multNumber} x ${i} =</div>
                <div class="result">${result}</div>
            </div>
        `;

        const parser = new DOMParser();
        const htmlTemp = parser.parseFromString(temp, "text/html");

        const row = htmlTemp.body.firstElementChild;
        multTable.appendChild(row);
    };

    multTitle.innerHTML = multNumber;
};

// Eventos
multForm.addEventListener('submit', (e)=>{
    e.preventDefault();

    const multNumber = +numberInput.value;
    const multNumber2 = +multInput.value;

    if (!multNumber || !multNumber2) return;

    createTable(multNumber, multNumber2);
});