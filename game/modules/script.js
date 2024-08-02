export default class gameFunction {
    constructor() {
        this.score = 0;
        this.boxSize = 50; // Size of the box
        this.initGame();
        this.events();
    }

    initGame() {
        // Create game container
        this.gameContainer = document.createElement('div');
        this.gameContainer.style.position = 'fixed';
        this.gameContainer.style.top = '0px';
        this.gameContainer.style.width = '100vw';
        this.gameContainer.style.height = '100vh';
        this.gameContainer.style.left = '0';
        this.gameContainer.style.backgroundColor = 'blue';
        this.gameContainer.style.zIndex = '9999';
        this.gameContainer.style.overflow = 'hidden';
        document.body.appendChild(this.gameContainer);

        // Create instruction text
        this.instructionText = document.createElement('div');
        this.instructionText.style.position = 'absolute';
        this.instructionText.style.top = '50%';
        this.instructionText.style.left = '50%';
        this.instructionText.style.transform = 'translate(-50%, -50%)';
        this.instructionText.style.color = 'white';
        this.instructionText.style.fontSize = '24px';
        this.instructionText.style.textAlign = 'center';
        this.instructionText.innerText = 'Click on the red box to score points!';
        this.gameContainer.appendChild(this.instructionText);

        // Create score display
        this.scoreDisplay = document.createElement('div');
        this.scoreDisplay.style.position = 'absolute';
        this.scoreDisplay.style.top = '10px';
        this.scoreDisplay.style.left = '10px';
        this.scoreDisplay.style.fontSize = '24px';
        this.scoreDisplay.style.color = 'white';
        this.scoreDisplay.innerText = `Score: ${this.score}`;
        this.gameContainer.appendChild(this.scoreDisplay);

        // Create the box
        this.box = document.createElement('div');
        this.box.style.position = 'absolute';
        this.box.style.width = `${this.boxSize}px`;
        this.box.style.height = `${this.boxSize}px`;
        this.box.style.backgroundColor = 'red';
        this.box.style.cursor = 'pointer';
        this.gameContainer.appendChild(this.box);

        // Create close icon
        this.closeIcon = document.createElement('div');
        this.closeIcon.innerText = '×';
        this.closeIcon.style.position = 'absolute';
        this.closeIcon.style.top = '10px';
        this.closeIcon.style.right = '10px';
        this.closeIcon.style.fontSize = '24px';
        this.closeIcon.style.color = 'white';
        this.closeIcon.style.cursor = 'pointer';
        this.gameContainer.appendChild(this.closeIcon);

        this.randomizeBoxPosition();
    }

    events() {
        // Add click event to the box
        this.box.addEventListener('click', () => {
            this.score++;
            this.scoreDisplay.innerText = `Score: ${this.score}`;
            this.randomizeBoxPosition();
        });

        // Add click event to the close icon
        this.closeIcon.addEventListener('click', () => {
            document.body.removeChild(this.gameContainer);
        });
    }

    randomizeBoxPosition() {
        const maxX = window.innerWidth - this.boxSize;
        const maxY = window.innerHeight - this.boxSize;
        const randomX = Math.floor(Math.random() * maxX);
        const randomY = Math.floor(Math.random() * maxY);
        this.box.style.left = `${randomX}px`;
        this.box.style.top = `${randomY}px`;
    }
}

// Initialize the game
window.onload = () => {
    new gameFunction();
};
