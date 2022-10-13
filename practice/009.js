const chat = document.querySelector('.chat');
const slider = document.querySelector('.slider');

slider.onmousedown = function dragMouseDown(e) {
    e.preventDefault();
    let dragX = e.clientY;
    document.onmousemove = function onMouseMove(e) {
        e.preventDefault();
        if (chat.offsetHeight - (e.clientY - dragX) < 700 && chat.offsetHeight - (e.clientY - dragX) > 300) {
            chat.style.height = chat.offsetHeight - (e.clientY - dragX) + 'px';
            dragX = e.clientY;
        }
    };
    document.onmouseup = () => document.onmousemove = document.onmouseup = null;
};
