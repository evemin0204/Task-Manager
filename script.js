let cardId = 0;

function addCard() {
    cardId++;
    
    var column = document.querySelector("#column1");

    var section = document.createElement('section');
    section.className = "card";
    section.id = `card-${cardId}`;
    section.innerHTML = getCardComponent(cardId);

    column.append(section);
}

function getCardComponent(cardId) {
    return ` 
        <p> 
            <input type="text" name="task" id="edit-${cardId}" onkeypress="handleKeyPress(event, '${cardId}')" >
        </p>
        <p class="asktask">
            Please enter a task
        </p>
        <div>
            <div class="buttons">
                <button type="button" class="delete" onclick="deleteCard('${cardId}')">
                <button type="button" id="star-${cardId}" class="star" onclick="starCard('${cardId}')">
                <button type="button" class="edit" onclick="editCard('${cardId}')">   
            </div>
            <div class="move">
                <button type="button" class="moveBtn" onclick="moveIt('${cardId}')">
            </div>
        </div> `;
}

function deleteCard(cardId) {
    document.querySelector('#card-' + cardId).remove();
}

function starCard(cardId) {
    document.querySelector(`#star-${cardId}`).classList.toggle('yellowstar');

}

function disableInput(cardId) {
    document.querySelector(`#edit-${cardId}`).setAttribute('disabled', 'true');
}

function handleKeyPress(e, cardId) {
    var key = e.keyCode;
    if (key === 13) {
        disableInput(cardId);
    }
}


function editCard(cardId) {
    var textId = document.querySelector(`#edit-${cardId}`);
    textId.removeAttribute('disabled');
}

function moveIt(cardId) {

    if (document.querySelector(`#edit-${cardId}`).value !== "") {
        var columnId = document.querySelector(`#card-${cardId}`).parentNode.id;
        
        if (columnId === "column1") {
            document.querySelector("#column2").append(document.querySelector(`#card-${cardId}`))
            document.querySelector(".asktask").style.display = "none";
        }
        else if (columnId === "column2") {
            document.querySelector("#column3").append(document.querySelector(`#card-${cardId}`))
            document.querySelector(".asktask").style.display = "none";
        }
    } else {
        document.querySelector(".asktask").style.display = "inline";
    }


}