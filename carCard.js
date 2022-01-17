const template = document.createElement('template');
template.innerHTML = `
    <style>
        .car-card {
            font-family: Arial, Helvetica, sans-serif;
            background: #f4f4f4;
            width: 500px;
            display: grid;
            grid-template-columns: 1fr 2fr;
            grid-gap: 10px;
            margin-top: 15px;
            border-bottom: darkorchid 5px solid;
        }
        h3 {
            color: blue;
        }
        .car-card img {
            width: 270px;
            height: 180 px;
        }
        .car-card button {
            cursor: pointer;
            background: darkorchid;
            color: #fff;
            border: 0;
            border-radius: 5px;
            padding: 5px 10px;
        }
    </style>
    <div class="car-card">
        <img></img>
        <div>
            <h3></h3>
            <div id="info">
                <p><slot name="year"></slot></p>
                <p><slot name="cubics"></slot></p> 
            </div>
            <button id="toggle-info">Hide info</button>
        </div>
    </div>
`

class CarCard extends HTMLElement {
    constructor() {
        super();

        this.showInfo = true;

        this.attachShadow({ mode: 'open' });
        this.shadowRoot.appendChild(template.content.cloneNode(true));
        this.shadowRoot.querySelector('h3').innerText = this.getAttribute('name');
        this.shadowRoot.querySelector('img').src = this.getAttribute('photo');

        // We do not use this anymore. We work with our template

        // this.innerHTML = `
        //     <style>h3 { color: blue }</style>
        //     <h3>${this.getAttribute('name')}</h3>
        // `
    }

    toggleInfo() {
        this.showInfo = !this.showInfo;

        // this.querySelector('h3').innerText = 'NCDEIJDIEJI';

        // const info = this.shadowRoot.querySelector('#info');
        // const toggleInfoBtn = this.shadowRoot.querySelector('#toggle-info');

        // if (this.showInfo) {
        //     info.style.display = 'block';
        //     toggleInfoBtn.innerText = 'Hide info';
        // } else {
        //     info.style.display = 'none';
        //     toggleInfoBtn.innerText = 'Show info';
        // }
    }

    connectedCallback() {
        this.shadowRoot.querySelector('#toggle-info').addEventListener('click', this.toggleInfo);
    }

    disconnectedCallback() {
        this.shadowRoot.querySelector('#toggle-info').removeEventListener();
    }
}

window.customElements.define('car-card', CarCard);