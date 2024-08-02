import axios from 'axios'

export default class initializeGame {
    constructor() {
        this.gameBanner = document.querySelector('.game-poster-banner')
        
        this.events()
    }

    events() {
        this.gameBanner.addEventListener('click', () => {
            this.initializeGame()
        })
    }

    initializeGame() {
        axios.post('/initialize-game', {start: true}).then(function(response) {

            // Create a script element
            const script = document.createElement('script')
            script.type = 'text/javascript'
            script.text = response.data

            // Append the script to the body to execute it
            document.body.appendChild(script)

        }).catch(function(err) {
            console.log(err)
        })
    }
}