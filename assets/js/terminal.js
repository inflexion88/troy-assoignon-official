// The Real Matrix Terminal - PositioningIQ
// Cryptic. Dangerous. Real.

import { startMatrixRain } from './matrix-effects.js';

class PositioningTerminal {
    constructor() {
        this.output = document.getElementById('terminal-output');
        this.nameInput = document.getElementById('name-input');
        this.nameContainer = document.getElementById('name-input-container');
        this.emailInput = document.getElementById('email-input');
        this.emailContainer = document.getElementById('email-input-container');
        this.loadingContainer = document.getElementById('loading-bar-container');

        this.currentAct = 0;
        this.userdata = {};
        this.isWaitingForInput = false;
        this.currentInputType = null;

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

        // Start the experience
        this.startExperience();
    }

    async startExperience() {
        await this.delay(1000);
        await this.act1_theGlitch();
    }

    // ============================================
    // ACT 1: THE GLITCH (30 seconds)
    // ============================================
    async act1_theGlitch() {
        this.clearOutput();

        // Boot with interference
        await this.typeText('> SIGNAL INTERCEPTED...', 'line system-msg');
        await this.delay(800);
        await this.typeText('> TRACKING SOURCE...', 'line system-msg');
        await this.delay(900);

        // Glitch effect
        this.subtleGlitch();
        await this.typeText('> █████████ PATTERN RECOGNIZED █████████', 'line warning');
        await this.delay(1500);

        this.clearOutput();

        // The recognition
        await this.typeText('> You\'ve been here before.', 'line');
        await this.delay(2000);

        await this.typeText('> Not this terminal.', 'line');
        await this.delay(1000);
        await this.typeText('> This MOMENT.', 'line');
        await this.delay(3000);

        await this.typeText('> Different consultant.', 'line');
        await this.delay(800);
        await this.typeText('> Same framework.', 'line');
        await this.delay(800);
        await this.typeText('> Same questions.', 'line');
        await this.delay(800);
        await this.typeText('> Same... results.', 'line');
        await this.delay(2500);

        await this.typeText('> That\'s not your failure, [AWAITING IDENTIFICATION]', 'line');
        await this.delay(1000);

        // Show name input
        this.askInput('name');
    }

    // ============================================
    // ACT 2: THE SPLINTER (45 seconds)
    // ============================================
    async act2_theSplinter() {
        const name = this.userdata.name;

        await this.delay(800);
        this.clearOutput();

        await this.typeText(`> ${name}...`, 'line highlight');
        await this.delay(2000);

        // Micro glitch
        this.subtleGlitch();

        await this.typeText('> You\'ve felt it, haven\'t you?', 'line');
        await this.delay(3000);

        await this.typeText('> That friction.', 'line');
        await this.delay(2500);

        await this.typeText('> When you explain what you do...', 'line');
        await this.delay(1200);
        await this.typeText('> And they ask: "So how are you different?"', 'line');
        await this.delay(2500);

        await this.typeText('> When you refine your value proposition...', 'line');
        await this.delay(1200);
        await this.typeText('> And it sounds exactly like your competitor\'s.', 'line');
        await this.delay(2500);

        // Splinter distortion
        this.screenDistortion();

        await this.typeText('> When you run another positioning exercise...', 'line');
        await this.delay(1200);
        await this.typeText('> And end up in the same place.', 'line');
        await this.delay(4000);

        await this.typeText(`> That\'s not confusion, ${name}.`, 'line highlight');
        await this.delay(2500);

        await this.typeText('> That\'s the system working exactly as designed.', 'line warning');
        await this.delay(3000);

        await this.act3_theQuestion();
    }

    // ============================================
    // ACT 3: THE QUESTION (20 seconds)
    // ============================================
    async act3_theQuestion() {
        this.clearOutput();

        await this.typeText('> There\'s a question you keep asking yourself.', 'line');
        await this.delay(3000);

        await this.typeText('> About positioning.', 'line');
        await this.delay(1000);
        await this.typeText('> About differentiation.', 'line');
        await this.delay(1000);
        await this.typeText('> About why none of it ever works.', 'line');
        await this.delay(2500);

        await this.typeText('> I can\'t tell you what it is.', 'line');
        await this.delay(2500);

        await this.typeText(`> But you know the question, ${this.userdata.name}.`, 'line highlight');
        await this.delay(1500);
        await this.typeText('> Just as I did.', 'line');
        await this.delay(2000);

        // Create custom question input
        await this.addHTML(`
            <div class="line" style="margin-top: 20px;">
                > Type it. One sentence.
            </div>
            <div class="terminal-input-container" style="display: flex; margin-top: 15px;">
                <span class="prompt">>></span>
                <input type="text" id="question-input" class="terminal-input"
                       autocomplete="off"
                       placeholder="What about positioning has never made sense to you?"
                       style="width: 100%;">
            </div>
        `);

        // Setup question input listener
        const questionInput = document.getElementById('question-input');
        if (questionInput) {
            questionInput.focus();
            questionInput.addEventListener('keydown', async (e) => {
                if (e.key === 'Enter') {
                    const question = questionInput.value.trim();
                    if (question) {
                        questionInput.parentElement.style.display = 'none';
                        this.userdata.question = question;
                        await this.act4_theRecognition(question);
                    }
                }
            });
        }
    }

    // ============================================
    // ACT 4: THE RECOGNITION (30 seconds)
    // ============================================
    async act4_theRecognition(question) {
        await this.delay(800);

        await this.addText(`> "${question}"`, 'line user-input');
        await this.delay(3000);

        // Intensify glitch
        this.subtleGlitch();
        await this.delay(500);
        this.subtleGlitch();

        await this.typeText('> Yes.', 'line highlight');
        await this.delay(2500);

        await this.typeText(`> That question has been asked before, ${this.userdata.name}.`, 'line');
        await this.delay(1500);
        await this.typeText('> By others who saw the pattern.', 'line');
        await this.delay(3000);

        await this.typeText('> The ones who escape don\'t ask:', 'line');
        await this.delay(1500);
        await this.typeText('> "How do I differentiate better?"', 'line');
        await this.delay(2500);

        await this.typeText('> They ask:', 'line');
        await this.delay(2000);
        await this.typeText('> "What if differentiation IS the trap?"', 'line warning');
        await this.delay(2000);

        // Major glitch - reality cracking
        this.screenDistortion();
        await this.delay(500);
        this.subtleGlitch();
        await this.delay(500);
        this.subtleGlitch();

        await this.delay(1500);

        await this.act5_theSystemReveal();
    }

    // ============================================
    // ACT 5: THE SYSTEM REVEAL (60 seconds)
    // ============================================
    async act5_theSystemReveal() {
        this.clearOutput();

        // MATRIX RAIN FLOODS THE SCREEN
        startMatrixRain(this.userdata.name);

        await this.delay(1500);

        await this.typeText(`> What you call "the market" is a construct, ${this.userdata.name}.`, 'line highlight');
        await this.delay(3000);

        await this.typeText('> A system of control.', 'line warning');
        await this.delay(3500);

        await this.typeText('> It keeps businesses competing on predetermined dimensions.', 'line');
        await this.delay(2500);

        await this.typeText('> Features.', 'line');
        await this.delay(800);
        await this.typeText('> Price.', 'line');
        await this.delay(800);
        await this.typeText('> Benefits.', 'line');
        await this.delay(800);
        await this.typeText('> Value propositions.', 'line');
        await this.delay(3000);

        await this.typeText('> All within a framework THEY control.', 'line warning');
        await this.delay(3500);

        await this.typeText('> The agencies tell you: "Find your unique selling proposition."', 'line data');
        await this.delay(2000);
        await this.typeText('> The consultants say: "Build a better mousetrap."', 'line data');
        await this.delay(2000);
        await this.typeText('> The books promise: "Differentiate or die."', 'line data');
        await this.delay(4000);

        await this.typeText(`> These are the agents, ${this.userdata.name}.`, 'line highlight');
        await this.delay(2500);

        await this.typeText('> They keep you playing by rules that guarantee you lose.', 'line warning');
        await this.delay(3000);

        // REALITY BREAK - white flash
        await this.realityFlash();

        // Fade to black
        await this.fadeToBlack(3000);

        await this.act6_theTruth();
    }

    // ============================================
    // ACT 6: THE TRUTH (45 seconds)
    // ============================================
    async act6_theTruth() {
        this.clearOutput();

        await this.typeText('> Commodity positioning isn\'t a zone you fall into.', 'line');
        await this.delay(2500);

        await this.typeText('> It\'s the default state of the system.', 'line highlight');
        await this.delay(3000);

        await this.typeText('> Every business starts there.', 'line');
        await this.delay(1500);
        await this.typeText('> Most die there.', 'line');
        await this.delay(3000);

        await this.typeText('> The ones who escape...', 'line');
        await this.delay(3000);

        await this.typeText('> They don\'t differentiate better.', 'line highlight');
        await this.delay(2500);

        await this.typeText('> They break the rules of comparison entirely.', 'line highlight');
        await this.delay(4000);

        await this.typeText('> They become singular.', 'line success');
        await this.delay(1500);
        await this.typeText('> Incomparable.', 'line success');
        await this.delay(1500);
        await this.typeText('> Category creators.', 'line success');
        await this.delay(3000);

        await this.typeText('> Not better.', 'line');
        await this.delay(1500);
        await this.typeText('> Different KIND.', 'line highlight');
        await this.delay(3000);

        await this.act7_theWarning();
    }

    // ============================================
    // ACT 7: THE WARNING (30 seconds)
    // ============================================
    async act7_theWarning() {
        this.clearOutput();

        // Red glow effect
        if (this.output) {
            this.output.parentElement.style.boxShadow = '0 0 50px rgba(255, 50, 50, 0.3)';
        }

        await this.typeText(`> This is where most turn back, ${this.userdata.name}.`, 'line warning');
        await this.delay(3000);

        await this.typeText('> Because seeing the system is one thing.', 'line');
        await this.delay(2500);

        await this.typeText('> Escaping it is another.', 'line');
        await this.delay(3000);

        await this.typeText('> The market will pull you back.', 'line data');
        await this.delay(1500);
        await this.typeText('> Your competitors will make sense again.', 'line data');
        await this.delay(1500);
        await this.typeText('> The conventional wisdom will feel safe.', 'line data');
        await this.delay(4000);

        await this.typeText('> "Just differentiate better."', 'line');
        await this.delay(1200);
        await this.typeText('> "Run another positioning sprint."', 'line');
        await this.delay(1200);
        await this.typeText('> "Refine the messaging one more time."', 'line');
        await this.delay(3000);

        await this.typeText('> The comfortable lie.', 'line warning');
        await this.delay(3000);

        // Remove red glow
        if (this.output) {
            this.output.parentElement.style.boxShadow = '';
        }

        await this.act8_theInvitation();
    }

    // ============================================
    // ACT 8: THE INVITATION (40 seconds)
    // ============================================
    async act8_theInvitation() {
        this.clearOutput();

        await this.delay(2000);

        await this.typeText('> PositioningIQ isn\'t for everyone.', 'line');
        await this.delay(2500);

        await this.typeText('> It\'s for the businesses who see the system...', 'line');
        await this.delay(1500);
        await this.typeText('> And refuse to play by its rules.', 'line');
        await this.delay(3000);

        await this.typeText(`> We\'re not consultants, ${this.userdata.name}.`, 'line highlight');
        await this.delay(2500);

        await this.typeText('> We\'re the ones who got out.', 'line highlight');
        await this.delay(4000);

        await this.typeText('> And we help businesses who are ready to break free.', 'line');
        await this.delay(2500);

        await this.typeText('> Not with better differentiation.', 'line');
        await this.delay(1500);
        await this.typeText('> With escape.', 'line highlight');
        await this.delay(3000);

        await this.typeText('> If that\'s you...', 'line');
        await this.delay(2500);

        await this.typeText('> We should talk.', 'line');
        await this.delay(3000);

        // The final invitation
        await this.addHTML(`
            <div class="line" style="margin-top: 30px;">
                > <a href="/contact.html?source=matrix-terminal" style="color: #65E48F; text-decoration: underline; font-weight: 600; cursor: pointer;">I'm ready to break free</a>
            </div>
        `);

        await this.delay(2000);

        await this.typeText('> We\'ll be in touch, ' + this.userdata.name + '.', 'line');
        await this.delay(2500);

        await this.typeText('> Remember:', 'line');
        await this.delay(2000);
        await this.typeText('> Most businesses can\'t handle this.', 'line warning');
        await this.delay(2500);

        await this.typeText('> Make sure you\'re one of the ones who can.', 'line highlight');
        await this.delay(3000);

        // Fade out
        await this.fadeToBlack(2000);
    }

    // ============================================
    // INPUT HANDLING
    // ============================================
    askInput(inputType) {
        this.currentInputType = inputType;
        this.isWaitingForInput = true;

        if (inputType === 'name') {
            this.nameContainer.style.display = 'flex';
            this.nameInput.focus();
        }
    }

    async handleInput(e, inputType) {
        if (e.key === 'Enter' && this.isWaitingForInput && inputType === this.currentInputType) {
            const input = inputType === 'name' ? this.nameInput : this.emailInput;
            const value = input.value.trim();

            if (value) {
                // Hide input
                if (inputType === 'name') {
                    this.nameContainer.style.display = 'none';
                } else {
                    this.emailContainer.style.display = 'none';
                }

                // Store response
                this.userdata[inputType] = value;
                this.isWaitingForInput = false;

                // Process
                await this.processInput(inputType, value);
            }
        }
    }

    async processInput(inputType, value) {
        if (inputType === 'name') {
            await this.act2_theSplinter();
        }
    }

    // ============================================
    // VISUAL EFFECTS
    // ============================================
    subtleGlitch() {
        if (!this.output) return;
        const container = this.output.parentElement;

        container.style.transform = 'translateX(2px)';
        setTimeout(() => {
            container.style.transform = 'translateX(-2px)';
        }, 50);
        setTimeout(() => {
            container.style.transform = 'translateX(0)';
        }, 100);
    }

    screenDistortion() {
        if (!this.output) return;
        const container = this.output.parentElement;

        container.style.filter = 'blur(2px)';
        container.style.transform = 'scale(1.02) translateX(5px)';

        setTimeout(() => {
            container.style.filter = '';
            container.style.transform = '';
        }, 200);
    }

    async realityFlash() {
        // Create white flash overlay
        const flash = document.createElement('div');
        flash.style.cssText = `
            position: fixed;
            inset: 0;
            background: white;
            z-index: 9999;
            opacity: 0;
            transition: opacity 0.3s ease;
        `;
        document.body.appendChild(flash);

        await this.delay(50);
        flash.style.opacity = '1';

        await this.delay(300);
        flash.style.opacity = '0';

        await this.delay(300);
        flash.remove();
    }

    async fadeToBlack(duration) {
        if (!this.output) return;
        const container = this.output.parentElement;

        container.style.transition = `opacity ${duration}ms ease`;
        container.style.opacity = '0';

        await this.delay(duration);

        this.clearOutput();
        container.style.opacity = '1';
        container.style.transition = '';
    }

    // ============================================
    // UTILITY METHODS
    // ============================================
    async typeText(text, className = 'line') {
        const line = document.createElement('div');
        line.className = className;
        this.output.appendChild(line);

        for (let i = 0; i < text.length; i++) {
            line.textContent += text[i];
            await this.delay(15);
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
        while (wrapper.firstChild) {
            this.output.appendChild(wrapper.firstChild);
        }
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
