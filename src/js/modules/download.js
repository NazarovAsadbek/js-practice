export default class Download {
    constructor(triggers) {
        this.btns = document.querySelectorAll(triggers);
        this.path = 'assets/img/mainbg.jpg';
    }

    downloadFile(path) {
        const element = document.createElement('a');

        element.setAttribute('href', path);
        element.setAttribute('download', 'nice_picture');
        element.setAttribute('target', '_blank');

        element.style.display = 'none';
        document.body.appendChild(element);

        element.click();

        document.body.removeChild(element);
    }

    init() {
        this.btns.forEach(btn => {
            btn.style.cursor = 'pointer';
            btn.addEventListener('click', () => {
                this.downloadFile(this.path);
            });
        });
    }
}
