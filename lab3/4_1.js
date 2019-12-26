let isPrediction = confirm("Do you want to know about your future?")

const partner = (name, childrenCount) => {
    if(name == '') {
        return `single and ${childOrChildren(childrenCount)}`;
    }
    else {
        return `married with ${name} and you will ${childOrChildren(childrenCount)}`;
    }
}

const childOrChildren = (childrenCount) => {
    if (childrenCount < 1) {
        return 'not have children';
    }
    else if (childrenCount == 1) {
        return 'have 1 child';
    }
    else {
        return `have ${childrenCount} children`;
    }
}

if(isPrediction) {
    var childrenCount = prompt("How much children will you have?", 1);
    var name = prompt("Which name will have your partner?", "DOG");
    let predictionFirst = `You will be ${partner(name, childrenCount)}`;
    alert(predictionFirst);
}
else {
    var profession = prompt("Which profession will you have?", "Doctor");
    var country = prompt("Which country will you visit?", "Hungary");
    let predictionSecond = `You will move to ${country} and will stay a ${profession}`;
    alert(predictionSecond);
}


