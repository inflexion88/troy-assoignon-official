// PositioningIQ Terminal - Market Intelligence System
// Professional terminal experience with intelligent data analysis

import { startMatrixRain } from './matrix-effects.js';

class PositioningTerminal {
    constructor() {
        this.output = document.getElementById('terminal-output');
        this.nameInput = document.getElementById('name-input');
        this.emailInput = document.getElementById('email-input');
        this.nameContainer = document.getElementById('name-input-container');
        this.emailContainer = document.getElementById('email-input-container');
        this.loadingContainer = document.getElementById('loading-bar-container');
        this.loadingFill = document.getElementById('loading-bar-fill');
        this.loadingPercentage = document.getElementById('loading-percentage');

        this.currentStep = 0;
        this.userdata = {};
        this.isWaitingForInput = false;
        this.currentQuestion = null;

        this.init();
    }

    init() {
        // Setup event listeners
        if (this.nameInput) {
            this.nameInput.addEventListener('keydown', (e) => this.handleInput(e, 'name'));
        }

        if (this.emailInput) {
            this.emailInput.addEventListener('keydown', (e) => this.handleInput(e, 'email'));
        }

        // Start experience after initial messages
        this.startExperience();
    }

    async startExperience() {
        // Clear initial system messages and show personalized greeting
        await this.delay(1000);
        this.clearOutput();

        await this.typeText('> Market Intelligence System online', 'system-msg');
        await this.delay(600);
        await this.typeText('> Real-time positioning analysis ready', 'system-msg');
        await this.delay(800);
        this.clearOutput();

        await this.typeText('> I analyze market positioning using competitive intelligence', 'line');
        await this.typeText('> that most companies don\'t have access to.', 'line');
        await this.delay(1000);

        this.clearOutput();
        await this.typeText('> Let\'s start with your name:', 'line');
        await this.delay(400);

        this.askQuestion('name');
    }

    askQuestion(questionType) {
        this.currentQuestion = questionType;
        this.isWaitingForInput = true;

        if (questionType === 'name') {
            this.nameContainer.style.display = 'flex';
            this.nameInput.focus();
        } else if (questionType === 'email') {
            this.emailContainer.style.display = 'flex';
            this.emailInput.focus();
        }
    }

    async handleInput(e, inputType) {
        if (e.key === 'Enter' && this.isWaitingForInput) {
            const input = inputType === 'name' ? this.nameInput : this.emailInput;
            const value = input.value.trim();

            if (value || inputType === 'email') { // Email is optional
                // Hide input
                if (inputType === 'name') {
                    this.nameContainer.style.display = 'none';
                } else {
                    this.emailContainer.style.display = 'none';
                }

                // Store response
                this.userdata[inputType] = value;
                this.isWaitingForInput = false;

                // Show user input
                if (value) {
                    await this.addText(`> ${value}`, 'user-input');
                }

                // Process response
                await this.processResponse(inputType, value);
            }
        }
    }

    async processResponse(questionType, answer) {
        switch(questionType) {
            case 'name':
                // Trigger matrix rain effect with the name
                startMatrixRain(answer);

                await this.delay(400);
                this.clearOutput();

                await this.typeText(`> ${answer}, welcome to the analysis terminal.`, 'line');
                await this.delay(600);
                await this.typeText('> Email (optional - for analysis report):', 'line');
                await this.delay(300);

                this.askQuestion('email');
                break;

            case 'email':
                await this.delay(400);
                this.clearOutput();

                await this.typeText('> Initializing market analysis...', 'line');
                await this.delay(600);
                await this.startAnalysis();
                break;
        }
    }

    async startAnalysis() {
        // Subtle glitch effect
        this.subtleGlitch();

        // Loading bar animation
        await this.showLoadingBar();

        this.clearOutput();

        // Analysis sequence
        await this.typeText('> Analyzing competitive landscape...', 'line');
        await this.delay(800);
        await this.typeText('> Cross-referencing market positioning data...', 'line');
        await this.delay(900);
        await this.typeText('> Mapping opportunity zones...', 'line');
        await this.delay(1000);

        this.clearOutput();

        // Show results
        await this.showResults();
    }

    async showLoadingBar() {
        this.loadingContainer.style.display = 'block';

        // Animate to 100%
        for (let i = 0; i <= 100; i += 2) {
            this.loadingFill.style.width = `${i}%`;
            this.loadingPercentage.textContent = `${i}%`;
            await this.delay(20);
        }

        await this.delay(300);
        this.loadingContainer.style.display = 'none';
    }

    async showResults() {
        const name = this.userdata.name;

        await this.typeText(`> ${name}, here's what the data shows:`, 'line highlight');
        await this.delay(800);

        this.clearOutput();

        // Market positioning insights
        await this.typeText('> POSITIONING ANALYSIS', 'line highlight');
        await this.delay(400);
        await this.typeText('> ━━━━━━━━━━━━━━━━━━━', 'line');
        await this.delay(300);

        await this.typeText('> Most companies in your space cluster in two zones:', 'line');
        await this.delay(500);
        await this.typeText('> • Commodity Zone: Price-driven, undifferentiated', 'line data');
        await this.delay(400);
        await this.typeText('> • Confusion Zone: Different but irrelevant', 'line data');
        await this.delay(800);

        await this.typeText('> The Command Zone - premium pricing + market leadership -', 'line highlight');
        await this.typeText('> is systematically overlooked by 94% of competitors.', 'line highlight');
        await this.delay(1200);

        this.clearOutput();

        // Opportunity breakdown
        await this.typeText('> MARKET OPPORTUNITY', 'line highlight');
        await this.delay(400);
        await this.typeText('> ━━━━━━━━━━━━━━━━━━', 'line');
        await this.delay(300);

        await this.typeText('> Companies that reach Command Zone positioning see:', 'line');
        await this.delay(500);
        await this.typeText('> • 3.7x higher valuation multiples', 'line success');
        await this.delay(400);
        await this.typeText('> • 64% reduction in CAC', 'line success');
        await this.delay(400);
        await this.typeText('> • 5.2x pricing sustainability', 'line success');
        await this.delay(1000);

        this.clearOutput();

        // Competitive intelligence
        await this.showCompetitiveIntel();
    }

    async showCompetitiveIntel() {
        await this.typeText('> COMPETITIVE INTELLIGENCE', 'line highlight');
        await this.delay(400);
        await this.typeText('> ━━━━━━━━━━━━━━━━━━━━━━━', 'line');
        await this.delay(300);

        await this.typeText('> This analysis uses:', 'line');
        await this.delay(400);
        await this.typeText('> • Real-time market positioning algorithms', 'line data');
        await this.delay(300);
        await this.typeText('> • Competitive perception mapping', 'line data');
        await this.delay(300);
        await this.typeText('> • 15 years of proprietary research', 'line data');
        await this.delay(800);

        await this.typeText('> Your competitors can\'t provide this intelligence.', 'line highlight');
        await this.delay(1200);

        this.clearOutput();

        // Gravitational Authority reveal
        await this.showGravitationalAuthority();
    }

    async showGravitationalAuthority() {
        // Subtle reality shift effect
        this.subtleGlitch();

        await this.typeText('> GRAVITATIONAL AUTHORITY', 'line highlight');
        await this.delay(400);
        await this.typeText('> ━━━━━━━━━━━━━━━━━━━━━━', 'line');
        await this.delay(400);

        await this.typeText('> What you just experienced isn\'t typical marketing.', 'line');
        await this.delay(800);
        await this.typeText('> It\'s demonstration through execution.', 'line');
        await this.delay(1000);

        await this.typeText('> Instead of explaining positioning strategy,', 'line');
        await this.typeText('> I showed you positioning intelligence you can\'t get elsewhere.', 'line');
        await this.delay(1200);

        await this.typeText('> That\'s gravitational authority:', 'line highlight');
        await this.typeText('> Creating pull by demonstrating unique capability.', 'line highlight');
        await this.delay(1500);

        this.clearOutput();

        // Conversion
        await this.showConversion();
    }

    async showConversion() {
        const name = this.userdata.name;

        await this.typeText(`> ${name}, ready to transform your positioning?`, 'line highlight');
        await this.delay(800);

        await this.typeText('> ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━', 'line');
        await this.delay(400);

        await this.typeText('> STRATEGIC POSITIONING ASSESSMENT', 'line data');
        await this.delay(300);
        await this.typeText('> • 60-minute competitive intelligence deep-dive', 'line');
        await this.delay(300);
        await this.typeText('> • Custom positioning roadmap', 'line');
        await this.delay(300);
        await this.typeText('> • Market opportunity quantification', 'line');
        await this.delay(800);

        // Create clickable contact link
        await this.addHTML(
            '<div class="line highlight" style="margin-top: 20px;">' +
            '> <a href="/contact.html" style="color: #65E48F; text-decoration: underline; cursor: pointer;">Schedule your assessment →</a>' +
            '</div>'
        );

        await this.delay(1000);

        // Email capture confirmation if provided
        if (this.userdata.email) {
            await this.typeText(`> Analysis report will be sent to ${this.userdata.email}`, 'line system-msg');
        }
    }

    // Visual effects
    subtleGlitch() {
        if (!this.output) return;

        this.output.style.transform = 'translateX(2px)';
        setTimeout(() => {
            this.output.style.transform = 'translateX(-2px)';
        }, 50);
        setTimeout(() => {
            this.output.style.transform = 'translateX(0)';
        }, 100);
    }

    // Helper methods
    async typeText(text, className = 'line') {
        const line = document.createElement('div');
        line.className = className;
        this.output.appendChild(line);

        for (let i = 0; i < text.length; i++) {
            line.textContent += text[i];
            await this.delay(15); // Fast but readable typing
        }

        this.scrollToBottom();
    }

    async addText(text, className = 'line') {
        const line = document.createElement('div');
        line.className = className;
        line.textContent = text;
        this.output.appendChild(line);
        this.scrollToBottom();
    }

    async addHTML(html) {
        const wrapper = document.createElement('div');
        wrapper.innerHTML = html;
        this.output.appendChild(wrapper.firstChild);
        this.scrollToBottom();
    }

    clearOutput() {
        if (this.output) {
            this.output.innerHTML = '';
        }
    }

    scrollToBottom() {
        if (this.output && this.output.parentElement) {
            this.output.parentElement.scrollTop = this.output.parentElement.scrollHeight;
        }
    }

    delay(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }
}

// Export for initialization
export { PositioningTerminal };
