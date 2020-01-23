const url = 'http://localhost:3000/';
const method = 'POST';


sendInputData = () => {
    document.querySelector('#submit').addEventListener('click', () => {
        let inputName = document.getElementById('input-name').value;
        let inputMessage = document.getElementById('input-message').value;
        let paramet = `name=${inputName}&message=${inputMessage}`;
    }
};



renderList = (request) => {
    let commentList = document.getElementById('comment-list');

    JSON.parse(request.responseText).forEach((response) => {
        let list = document.createElement('li');
        let nameWrapper = document.createElement('span');
        let messageWrapper = document.createElement('span');
        let name = document.createTextNode(response.name);
        let message = document.createTextNode(response.message);

        nameWrapper.className = 'name-wrapper';
        messageWrapper.className = 'message-wrapper';

        nameWrapper.appendChild(name);
        messageWrapper.appendChild(message);
        list.appendChild(nameWrapper);
        list.appendChild(messageWrapper);
        commentList.appendChild(list);
    });
};

sendInputData();
