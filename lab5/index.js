const button = document.getElementById('addCompany');
const table = document.getElementById('table__body');

let arr = [{
    company: "Comp1",
    income: 10
},
{
    company: "Comp2",
    income: 20
},];

function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    
    for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }

    return color;
}

const addRow = (company, income) => {
    const tr = document.createElement('tr');
    const tdFirst = document.createElement('td');
    const tdSecond = document.createElement('td');
    const tdThird= document.createElement('td');

    tdFirst.className = "table__delete";
    tdFirst.textContent = "Delete";
    tdSecond.textContent = `${company}`;
    tdThird.textContent = `${income}`;

    tdSecond.setAttribute('contenteditable', 'true');
    tdThird.setAttribute('contenteditable', 'true');

    table.append(tr);
    tr.append(tdFirst);
    tr.append(tdSecond);
    tr.append(tdThird);

    const diagramBlock = document.getElementById('diagram_block');
    const diagram = document.createElement('div');
    const diagramWrap = document.createElement('div');
    const description = document.createElement('span');
    const alt = document.createElement('span');

    diagramWrap.className = "diagram";
    diagram.className = "diagram__column";
    description.className = "diagram__description";
    alt.className = "diagram__alt";

    diagramBlock.append(diagramWrap);
    diagramWrap.append(diagram);
    diagramWrap.append(description);
    diagramWrap.append(alt);

    description.textContent = `${company}`;
    alt.textContent = `${income}$`;

    diagram.style.height = `${income}px`;
    diagram.style.backgroundColor = getRandomColor();

    diagram.addEventListener('mouseover', () => {
        alt.style.visibility = 'visible';
    })

    diagram.addEventListener('mouseout', () => {
        alt.style.visibility = 'hidden';
    })

    tdSecond.addEventListener('input', () => {
        description.textContent = tdSecond.textContent;
    });

    tdThird.addEventListener('input', () => {
        diagram.style.height = tdThird.textContent + 'px';
        alt.textContent = tdThird.textContent + '$';
    });

    tdFirst.addEventListener('click', () => {
        tr.remove();
        diagramWrap.remove();
    })
};


button.addEventListener('click', () => {
    addRow("Comp", 100);
});

