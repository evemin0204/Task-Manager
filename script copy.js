
let cardId = 0;
let starId = 0;
let editId = 0;

function addCard() {
    var section = document.createElement('section');
    var art = document.querySelector("#column1");
    art.append(section);
    section.className = "card";
    section.id = `card-${cardId++}`;
    var starBtnId = `star-${starId++}`;
    var editBtnId = `edit-${editId++}`;

    section.innerHTML = ` <p> 
    <input type="text" name="task" id="${editBtnId}" onkeypress="handleKeyPress(event, '${editBtnId}')" >
    </p>
            <div>
                <div class="buttons">
                    <button type="button" class="delete" onclick="deleteCard('${section.id}')">
                    <button type="button" id="${starBtnId}" class="star" onclick="starCard('${starBtnId}')">
                    <button type="button" class="edit" onclick="editCard('${editBtnId}')">
            
            </div>
            <div class="move">
                <button type="button" class="moveBtn" onclick="moveIt('${section.id}', '${editBtnId}')">
            </div>
            </div> `

   
}



function deleteCard(cardId) {
    document.querySelector('#'+cardId).remove();
}

function starCard(starId) {
    document.querySelector(`#${starId}`).classList.toggle('yellowstar');

}

function disableInput(editId) {
    document.querySelector(`#${editId}`).setAttribute('disabled', 'true');
}

function handleKeyPress(e, editId) {
    var key = e.keyCode;
    if (key === 13) {
        disableInput(editId);
    }
}


function editCard(editId) {
    var textId = document.querySelector(`#${editId}`);
    textId.removeAttribute('disabled');
}

function moveIt(cardId, editId) {
    var articleId = document.querySelector(`#${cardId}`).parentNode.id;

    if (document.querySelector(`#${editId}`).value !== "") {
        if (articleId === "column1") {
        document.querySelector("#column2").append(document.querySelector(`#${cardId}`))
        }
        else if (articleId === "column2") {
        document.querySelector("#column3").append(document.querySelector(`#${cardId}`))
        }
    }

    else {
        document.querySelector(`#${editId}`).value = "Please enter a task."
    }


}