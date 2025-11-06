/**
 * PositioningIQ Terminal Assessment
 * Narrative-driven keyboard-interactive positioning audit
 * @author Troy Assoignon
 */

import { startMatrixRain } from './matrix-effects.js';

// Import questions and categories from positioning-assessment.js
const QUESTIONS = [
    // CATEGORY 1: POSITIONING CLARITY (4 questions)
    {
        id: 1,
        category: 'clarity',
        categoryLabel: 'Positioning Clarity',
        question: 'How clearly can you articulate what makes your offering unique in the market?',
        options: [
            { text: 'Very clearly - I can explain it in one sentence', value: 5 },
            { text: 'Pretty clearly - I can explain it in a short paragraph', value: 4 },
            { text: 'Somewhat clearly - It takes a few minutes to explain', value: 3 },
            { text: 'Not very clearly - I struggle to explain our uniqueness', value: 2 },
            { text: 'Not at all - We haven\'t defined our unique position', value: 1 }
        ]
    },
    {
        id: 2,
        category: 'clarity',
        categoryLabel: 'Positioning Clarity',
        question: 'Do all team members describe your company\'s position in the market consistently?',
        options: [
            { text: 'Yes - Everyone uses the same positioning language', value: 5 },
            { text: 'Mostly - There\'s general alignment with minor variations', value: 4 },
            { text: 'Somewhat - Some consistency but noticeable differences', value: 3 },
            { text: 'Not really - Different people say different things', value: 2 },
            { text: 'Not at all - There\'s no consistent positioning message', value: 1 }
        ]
    },
    {
        id: 3,
        category: 'clarity',
        categoryLabel: 'Positioning Clarity',
        question: 'How well documented is your positioning strategy?',
        options: [
            { text: 'Fully documented - Complete positioning framework with all elements', value: 5 },
            { text: 'Well documented - Key elements captured in writing', value: 4 },
            { text: 'Partially documented - Some notes and informal guidelines', value: 3 },
            { text: 'Minimally documented - Mostly exists in people\'s heads', value: 2 },
            { text: 'Not documented - No written positioning strategy exists', value: 1 }
        ]
    },
    {
        id: 4,
        category: 'clarity',
        categoryLabel: 'Positioning Clarity',
        question: 'Can you clearly state which market category you compete in?',
        options: [
            { text: 'Yes - We own or define a specific category', value: 5 },
            { text: 'Yes - We have a clear category with slight nuances', value: 4 },
            { text: 'Somewhat - We fit into multiple categories', value: 3 },
            { text: 'Not really - Our category is unclear or too broad', value: 2 },
            { text: 'No - We haven\'t defined our market category', value: 1 }
        ]
    },

    // CATEGORY 2: DIFFERENTIATION (4 questions)
    {
        id: 5,
        category: 'differentiation',
        categoryLabel: 'Differentiation Strength',
        question: 'What makes your offering meaningfully different from competitors?',
        options: [
            { text: 'Unique innovation - We offer something no one else does', value: 5 },
            { text: 'Strong differentiation - We have clear, defendable differences', value: 4 },
            { text: 'Moderate differentiation - Some differences but not game-changing', value: 3 },
            { text: 'Weak differentiation - Minor differences, mostly similar to competitors', value: 2 },
            { text: 'No differentiation - We compete primarily on price', value: 1 }
        ]
    },
    {
        id: 6,
        category: 'differentiation',
        categoryLabel: 'Differentiation Strength',
        question: 'How defensible is your competitive advantage?',
        options: [
            { text: 'Highly defensible - Significant barriers (IP, network effects, etc.)', value: 5 },
            { text: 'Defensible - Takes significant time/resources to replicate', value: 4 },
            { text: 'Moderately defensible - Could be copied but with effort', value: 3 },
            { text: 'Weakly defensible - Easy for competitors to replicate', value: 2 },
            { text: 'Not defensible - No moat or competitive barriers', value: 1 }
        ]
    },
    {
        id: 7,
        category: 'differentiation',
        categoryLabel: 'Differentiation Strength',
        question: 'How often do prospects say "you\'re just like [competitor]"?',
        options: [
            { text: 'Never - We\'re always seen as unique', value: 5 },
            { text: 'Rarely - Occasionally compared but clearly different', value: 4 },
            { text: 'Sometimes - We get compared to competitors regularly', value: 3 },
            { text: 'Often - Frequently lumped in with competitors', value: 2 },
            { text: 'Always - Seen as commoditized/interchangeable', value: 1 }
        ]
    },
    {
        id: 8,
        category: 'differentiation',
        categoryLabel: 'Differentiation Strength',
        question: 'Do you win deals based on unique value or primarily on price?',
        options: [
            { text: 'Always on value - Price is rarely the deciding factor', value: 5 },
            { text: 'Mostly on value - Price matters but value wins', value: 4 },
            { text: 'Mixed - Equal split between value and price wins', value: 3 },
            { text: 'Mostly on price - We often need to discount to win', value: 2 },
            { text: 'Always on price - We compete primarily as low-cost option', value: 1 }
        ]
    },

    // CATEGORY 3: TARGET MARKET (4 questions)
    {
        id: 9,
        category: 'target_market',
        categoryLabel: 'Target Market Alignment',
        question: 'How well-defined is your ideal customer profile (ICP)?',
        options: [
            { text: 'Crystal clear - Detailed ICP with specific firmographics/demographics', value: 5 },
            { text: 'Well-defined - Clear ICP with key characteristics', value: 4 },
            { text: 'Somewhat defined - General sense of our target market', value: 3 },
            { text: 'Poorly defined - Broad or vague target market', value: 2 },
            { text: 'Not defined - We try to serve everyone', value: 1 }
        ]
    },
    {
        id: 10,
        category: 'target_market',
        categoryLabel: 'Target Market Alignment',
        question: 'What percentage of your sales leads match your ideal customer profile?',
        options: [
            { text: '80-100% - Nearly all leads are in our sweet spot', value: 5 },
            { text: '60-79% - Most leads are a good fit', value: 4 },
            { text: '40-59% - About half are a good fit', value: 3 },
            { text: '20-39% - Many leads are poor fits', value: 2 },
            { text: '0-19% - Most leads are not our ideal customers', value: 1 }
        ]
    },
    {
        id: 11,
        category: 'target_market',
        categoryLabel: 'Target Market Alignment',
        question: 'Do you say "no" to customers who don\'t fit your ideal profile?',
        options: [
            { text: 'Always - We\'re disciplined about our ICP', value: 5 },
            { text: 'Usually - We turn away poor fits most of the time', value: 4 },
            { text: 'Sometimes - We\'re selective but flexible', value: 3 },
            { text: 'Rarely - We take most customers who can pay', value: 2 },
            { text: 'Never - We serve anyone willing to buy', value: 1 }
        ]
    },
    {
        id: 12,
        category: 'target_market',
        categoryLabel: 'Target Market Alignment',
        question: 'How well does your messaging resonate with your target audience?',
        options: [
            { text: 'Extremely well - Prospects say "this is exactly what I need"', value: 5 },
            { text: 'Very well - Strong resonance and engagement', value: 4 },
            { text: 'Moderately well - Some resonance but could be stronger', value: 3 },
            { text: 'Not well - Generic reactions, low engagement', value: 2 },
            { text: 'Poorly - Messaging doesn\'t land with our audience', value: 1 }
        ]
    },

    // CATEGORY 4: VALUE PROPOSITION (4 questions)
    {
        id: 13,
        category: 'value_proposition',
        categoryLabel: 'Value Proposition Clarity',
        question: 'Can you articulate your value proposition in one clear sentence?',
        options: [
            { text: 'Yes - Crystal clear, compelling one-sentence value prop', value: 5 },
            { text: 'Yes - Clear value prop, maybe needs minor refinement', value: 4 },
            { text: 'Somewhat - We have a value prop but it\'s a bit wordy', value: 3 },
            { text: 'Not really - Our value prop is unclear or too complex', value: 2 },
            { text: 'No - We don\'t have a defined value proposition', value: 1 }
        ]
    },
    {
        id: 14,
        category: 'value_proposition',
        categoryLabel: 'Value Proposition Clarity',
        question: 'How quantifiable is the value you deliver to customers?',
        options: [
            { text: 'Highly quantifiable - We have specific ROI/metrics to prove value', value: 5 },
            { text: 'Mostly quantifiable - We can demonstrate value with data', value: 4 },
            { text: 'Partially quantifiable - Some metrics, mostly qualitative benefits', value: 3 },
            { text: 'Barely quantifiable - Primarily qualitative/intangible value', value: 2 },
            { text: 'Not quantifiable - We can\'t measure our value', value: 1 }
        ]
    },
    {
        id: 15,
        category: 'value_proposition',
        categoryLabel: 'Value Proposition Clarity',
        question: 'Do customers understand the value before they buy?',
        options: [
            { text: 'Always - They "get it" immediately', value: 5 },
            { text: 'Usually - Most understand value quickly', value: 4 },
            { text: 'Sometimes - Takes some explanation', value: 3 },
            { text: 'Rarely - Value only clear after they use product', value: 2 },
            { text: 'Never - We struggle to communicate value upfront', value: 1 }
        ]
    },
    {
        id: 16,
        category: 'value_proposition',
        categoryLabel: 'Value Proposition Clarity',
        question: 'Is your value proposition focused on outcomes or features?',
        options: [
            { text: 'Entirely outcomes - We sell business results and transformations', value: 5 },
            { text: 'Mostly outcomes - Focus on results with some feature mentions', value: 4 },
            { text: 'Mixed - Equal focus on outcomes and features', value: 3 },
            { text: 'Mostly features - We lead with what we do, not results', value: 2 },
            { text: 'Only features - We list capabilities without outcome focus', value: 1 }
        ]
    },

    // CATEGORY 5: COMPETITIVE POSITION (4 questions)
    {
        id: 17,
        category: 'competitive_position',
        categoryLabel: 'Competitive Position',
        question: 'How well do you understand your competitive landscape?',
        options: [
            { text: 'Extremely well - Deep competitive analysis, ongoing monitoring', value: 5 },
            { text: 'Very well - Strong understanding of key competitors', value: 4 },
            { text: 'Moderately well - Basic competitive awareness', value: 3 },
            { text: 'Not well - Limited competitive knowledge', value: 2 },
            { text: 'Poorly - We don\'t track competitors', value: 1 }
        ]
    },
    {
        id: 18,
        category: 'competitive_position',
        categoryLabel: 'Competitive Position',
        question: 'Where do you rank in your target market segment?',
        options: [
            { text: 'Market leader - #1 or #2 in our category', value: 5 },
            { text: 'Strong player - Top 5 in our category', value: 4 },
            { text: 'Mid-tier player - Recognized but not leading', value: 3 },
            { text: 'Small player - Limited market presence', value: 2 },
            { text: 'Unknown - No meaningful market position', value: 1 }
        ]
    },
    {
        id: 19,
        category: 'competitive_position',
        categoryLabel: 'Competitive Position',
        question: 'How often do you appear in competitive evaluations?',
        options: [
            { text: 'Always - We\'re always in consideration sets', value: 5 },
            { text: 'Usually - We\'re included in most evaluations', value: 4 },
            { text: 'Sometimes - We\'re sometimes considered', value: 3 },
            { text: 'Rarely - We\'re rarely in competitive deals', value: 2 },
            { text: 'Never - Prospects don\'t know we exist', value: 1 }
        ]
    },
    {
        id: 20,
        category: 'competitive_position',
        categoryLabel: 'Competitive Position',
        question: 'What\'s your win rate in competitive deals?',
        options: [
            { text: '70%+ - We win most competitive deals', value: 5 },
            { text: '50-69% - We win more than we lose', value: 4 },
            { text: '30-49% - We win less than we lose', value: 3 },
            { text: '10-29% - We rarely win competitive deals', value: 2 },
            { text: '0-9% - We almost never win when competing', value: 1 }
        ]
    }
];

// Category metadata
const CATEGORIES = {
    clarity: {
        label: 'Positioning Clarity',
        description: 'How well-defined and articulated is your market position?'
    },
    differentiation: {
        label: 'Differentiation Strength',
        description: 'How unique and defensible is your competitive advantage?'
    },
    target_market: {
        label: 'Target Market Alignment',
        description: 'How well-defined is your ideal customer and how aligned are your efforts?'
    },
    value_proposition: {
        label: 'Value Proposition Clarity',
        description: 'How clear and compelling is the value you deliver?'
    },
    competitive_position: {
        label: 'Competitive Position',
        description: 'How strong is your market position relative to competitors?'
    }
};

// Category question mapping
const CATEGORY_QUESTION_MAP = {
    clarity: [1, 2, 3, 4],
    differentiation: [5, 6, 7, 8],
    target_market: [9, 10, 11, 12],
    value_proposition: [13, 14, 15, 16],
    competitive_position: [17, 18, 19, 20]
};

/**
 * PositioningIQ Terminal Assessment Class
 */
class PositioningTerminalAssessment {
    constructor() {
        this.output = document.getElementById('terminal-output');
        this.nameInput = document.getElementById('name-input');
        this.nameContainer = document.getElementById('name-input-container');

        this.questions = QUESTIONS;
        this.currentQuestionIndex = 0;
        this.responses = {};
        this.categoryScores = {};
        this.overallScore = 0;
        this.userdata = {};
        this.phase = 'opening';

        this.init();
    }

    init() {
        // Try to load saved progress
        const loaded = this.loadFromStorage();

        if (loaded && this.responses && Object.keys(this.responses).length > 0) {
            // Resume assessment
            this.resumeAssessment();
        } else {
            // Start fresh
            this.startExperience();
        }
    }

    async startExperience() {
        await this.delay(1000);
        await this.phaseOpening();
    }

    async resumeAssessment() {
        await this.delay(500);
        this.clearOutput();
        await this.typeText(`> Welcome back, ${this.userdata.name || 'User'}`, 'line highlight');
        await this.delay(1500);
        await this.typeText('> Resuming audit from question ' + (this.currentQuestionIndex + 1) + '/20', 'line system-msg');
        await this.delay(2000);
        this.phaseAssessment();
    }

    // ============================================
    // PHASE 1: OPENING
    // ============================================
    async phaseOpening() {
        this.clearOutput();
        this.phase = 'opening';

        await this.typeText('> POSITIONING AUDIT TERMINAL', 'line system-msg');
        await this.delay(800);
        await this.typeText('> System initialized...', 'line system-msg');
        await this.delay(600);
        await this.typeText('> Ready for strategic assessment.', 'line system-msg');
        await this.delay(2000);

        await this.typeText('> This audit will analyze your positioning maturity across 5 critical dimensions:', 'line');
        await this.delay(1500);
        await this.typeText('> - Positioning Clarity', 'line data');
        await this.delay(400);
        await this.typeText('> - Differentiation Strength', 'line data');
        await this.delay(400);
        await this.typeText('> - Target Market Alignment', 'line data');
        await this.delay(400);
        await this.typeText('> - Value Proposition Clarity', 'line data');
        await this.delay(400);
        await this.typeText('> - Competitive Position', 'line data');
        await this.delay(2000);

        await this.typeText('> Total assessment time: 8-10 minutes', 'line');
        await this.delay(1000);
        await this.typeText('> 20 strategic questions', 'line');
        await this.delay(2000);

        await this.typeText('> First, please identify yourself:', 'line');
        await this.delay(800);

        // Show name input
        this.askInput('name');
    }

    askInput(inputType) {
        if (inputType === 'name') {
            this.nameContainer.style.display = 'flex';
            this.nameInput.focus();

            this.nameInput.addEventListener('keydown', async (e) => {
                if (e.key === 'Enter') {
                    const name = this.nameInput.value.trim();
                    if (name) {
                        this.nameContainer.style.display = 'none';
                        this.userdata.name = name;
                        await this.processNameInput(name);
                    }
                }
            });
        }
    }

    async processNameInput(name) {
        await this.delay(500);
        await this.typeText(`> Identity confirmed: ${name}`, 'line highlight');
        await this.delay(1500);
        await this.typeText('> Beginning audit scan...', 'line system-msg');
        await this.delay(2000);
        this.phaseAssessment();
    }

    // ============================================
    // PHASE 2: ASSESSMENT QUESTIONS
    // ============================================
    async phaseAssessment() {
        this.phase = 'assessment';
        this.renderQuestion();
    }

    renderQuestion() {
        const question = this.questions[this.currentQuestionIndex];
        const questionNumber = this.currentQuestionIndex + 1;
        const categoryInfo = this.getCategoryInfo();

        this.clearOutput();

        // Category header if first question of category
        if (categoryInfo.categoryPosition === 1) {
            const categoryIntro = this.getCategoryIntro(question.category);
            this.addText(`> ${categoryIntro}`, 'line system-msg');
        }

        // Question header
        this.addText(`> [SCAN ${questionNumber}/20] ${question.categoryLabel}`, 'line data');

        // Question text
        this.addText(`> ${question.question}`, 'line highlight');

        // Render options with keyboard shortcuts
        const optionsHTML = this.createOptionsHTML(question);
        this.addHTML(optionsHTML);

        // Add keyboard hints
        this.addText('> [1-5] Select  [N] Next  [P] Previous', 'line data');

        // Progress indicator
        const progressPercent = ((questionNumber) / 20) * 100;
        this.addHTML(this.createProgressHTML(questionNumber, progressPercent, categoryInfo));

        // Setup keyboard listeners
        this.setupKeyboardListeners();

        // Auto-scroll to bottom
        this.scrollToBottom();
    }

    getCategoryInfo() {
        const questionNumber = this.currentQuestionIndex + 1;
        let currentCategory = '';

        for (const [category, questions] of Object.entries(CATEGORY_QUESTION_MAP)) {
            if (questions.includes(questionNumber)) {
                currentCategory = category;
                break;
            }
        }

        const categoryQuestions = CATEGORY_QUESTION_MAP[currentCategory];
        const categoryPosition = categoryQuestions.indexOf(questionNumber) + 1;

        return {
            category: currentCategory,
            categoryPosition: categoryPosition,
            categoryTotal: categoryQuestions.length,
            categoryIndex: Object.keys(CATEGORY_QUESTION_MAP).indexOf(currentCategory)
        };
    }

    getCategoryIntro(category) {
        const intros = {
            clarity: '>>> POSITIONING CLARITY SCAN',
            differentiation: '>>> DIFFERENTIATION STRENGTH ANALYSIS',
            target_market: '>>> TARGET MARKET ALIGNMENT CHECK',
            value_proposition: '>>> VALUE PROPOSITION AUDIT',
            competitive_position: '>>> COMPETITIVE POSITION SCAN'
        };
        return intros[category] || '>>> INITIATING SCAN';
    }

    createOptionsHTML(question) {
        const selectedValue = this.responses[question.id];

        let html = '<div style="margin-top: 8px;">';
        question.options.forEach((option, index) => {
            const isSelected = selectedValue === option.value;
            const selectedClass = isSelected ? 'selected' : '';

            html += `
                <button class="option-button ${selectedClass}" data-question-id="${question.id}" data-value="${option.value}" data-index="${index}">
                    <span class="option-number">${index + 1}</span>${option.text}
                </button>
            `;
        });
        html += '</div>';

        return html;
    }

    createProgressHTML(current, percent, categoryInfo) {
        return `
            <div class="progress-indicator">
                <div style="display: flex; justify-content: space-between; margin-bottom: 4px;">
                    <span>SCAN PROGRESS: ${current}/20</span>
                    <span>${CATEGORIES[categoryInfo.category].label} (${categoryInfo.categoryPosition}/${categoryInfo.categoryTotal})</span>
                </div>
                <div class="progress-bar">
                    <div class="progress-fill" style="width: ${percent}%"></div>
                </div>
            </div>
        `;
    }

    setupKeyboardListeners() {
        // Remove previous listener if exists
        if (this.keyboardHandler) {
            document.removeEventListener('keydown', this.keyboardHandler);
        }

        // Create new handler
        this.keyboardHandler = (e) => {
            const key = e.key.toLowerCase();
            const question = this.questions[this.currentQuestionIndex];

            // Number keys 1-5
            if (['1', '2', '3', '4', '5'].includes(key)) {
                const index = parseInt(key) - 1;
                if (index < question.options.length) {
                    this.selectOption(question.id, question.options[index].value, index);
                }
            }
            // N or Enter for next
            else if ((key === 'n' || key === 'enter') && this.responses[question.id]) {
                this.nextQuestion();
            }
            // P for previous
            else if (key === 'p' && this.currentQuestionIndex > 0) {
                this.previousQuestion();
            }
        };

        document.addEventListener('keydown', this.keyboardHandler);

        // Also setup click listeners for touch
        const optionButtons = this.output.querySelectorAll('.option-button');
        optionButtons.forEach(button => {
            button.addEventListener('click', () => {
                const questionId = parseInt(button.dataset.questionId);
                const value = parseInt(button.dataset.value);
                const index = parseInt(button.dataset.index);
                this.selectOption(questionId, value, index);
            });
        });
    }

    selectOption(questionId, value, index) {
        // Store response
        this.responses[questionId] = value;
        this.saveToStorage();

        // Update UI - remove all selected classes
        const allButtons = this.output.querySelectorAll('.option-button');
        allButtons.forEach(btn => btn.classList.remove('selected'));

        // Add selected class to chosen option
        const selectedButton = this.output.querySelector(`.option-button[data-index="${index}"]`);
        if (selectedButton) {
            selectedButton.classList.add('selected');
        }

        // Track event
        this.trackEvent('question_answered', { question_id: questionId, value: value });
    }

    async nextQuestion() {
        const question = this.questions[this.currentQuestionIndex];
        const categoryInfo = this.getCategoryInfo();

        // Check if this is the last question of a category
        if (categoryInfo.categoryPosition === categoryInfo.categoryTotal && this.currentQuestionIndex < this.questions.length - 1) {
            // Category complete message
            await this.showCategoryComplete(categoryInfo.category);
        }

        if (this.currentQuestionIndex < this.questions.length - 1) {
            this.currentQuestionIndex++;
            this.renderQuestion();
            this.trackEvent('question_next');
        } else {
            // All questions complete
            await this.phaseProcessing();
        }
    }

    async showCategoryComplete(category) {
        this.clearOutput();
        await this.typeText(`> ${CATEGORIES[category].label} scan complete.`, 'line success');
        await this.delay(800);
        await this.typeText('> Analyzing results...', 'line system-msg');
        await this.delay(1200);
    }

    previousQuestion() {
        if (this.currentQuestionIndex > 0) {
            this.currentQuestionIndex--;
            this.renderQuestion();
            this.trackEvent('question_previous');
        }
    }

    // ============================================
    // PHASE 3: PROCESSING
    // ============================================
    async phaseProcessing() {
        this.phase = 'processing';
        this.clearOutput();

        // Remove keyboard listener
        if (this.keyboardHandler) {
            document.removeEventListener('keydown', this.keyboardHandler);
        }

        await this.typeText('> AUDIT SCAN COMPLETE', 'line success');
        await this.delay(800);
        await this.typeText('> Analyzing results...', 'line system-msg');
        await this.delay(1200);

        // Calculate scores
        this.calculateScores();

        await this.typeText('> ANALYSIS COMPLETE', 'line highlight');
        await this.delay(1000);

        await this.phaseResults();
    }

    async showProgressBar(label, duration) {
        const barHTML = `
            <div class="progress-indicator">
                <div style="margin-bottom: 8px;">${label}...</div>
                <div class="progress-bar">
                    <div class="progress-fill" id="processing-bar" style="width: 0%"></div>
                </div>
            </div>
        `;
        this.addHTML(barHTML);

        const bar = document.getElementById('processing-bar');
        if (bar) {
            const steps = 20;
            const stepDuration = duration / steps;

            for (let i = 0; i <= steps; i++) {
                bar.style.width = `${(i / steps) * 100}%`;
                await this.delay(stepDuration);
            }
        }

        await this.delay(300);
    }

    calculateScores() {
        // Reset scores
        this.categoryScores = {};
        const categoryQuestionCounts = {};

        // Calculate category scores
        this.questions.forEach(question => {
            const response = this.responses[question.id];

            if (!this.categoryScores[question.category]) {
                this.categoryScores[question.category] = 0;
                categoryQuestionCounts[question.category] = 0;
            }

            this.categoryScores[question.category] += response;
            categoryQuestionCounts[question.category]++;
        });

        // Convert to percentage (out of 100)
        Object.keys(this.categoryScores).forEach(category => {
            const maxScore = categoryQuestionCounts[category] * 5; // Max 5 points per question
            this.categoryScores[category] = Math.round((this.categoryScores[category] / maxScore) * 100);
        });

        // Calculate overall score (average of all categories)
        const categoryScoreValues = Object.values(this.categoryScores);
        this.overallScore = Math.round(
            categoryScoreValues.reduce((sum, score) => sum + score, 0) / categoryScoreValues.length
        );

        this.saveToStorage();
        this.trackEvent('audit_completed', {
            overall_score: this.overallScore,
            category_scores: this.categoryScores
        });
    }

    // ============================================
    // PHASE 4: RESULTS
    // ============================================
    async phaseResults() {
        this.phase = 'results';

        // Fade out terminal
        const terminalSection = document.querySelector('.matrix-hero');
        if (terminalSection) {
            terminalSection.style.transition = 'opacity 1s ease';
            terminalSection.style.opacity = '0';
        }

        await this.delay(1000);

        // Hide terminal
        if (terminalSection) {
            terminalSection.style.display = 'none';
        }

        // Show and render results page
        this.renderResultsPage();
    }

    renderResultsPage() {
        const resultsPage = document.getElementById('results-page');
        const container = document.getElementById('results-container');

        if (!resultsPage || !container) return;

        // Calculate percentile
        const percentile = Math.min(Math.round((this.overallScore / 100) * 100), 99);
        const interpretation = this.getScoreInterpretation(this.overallScore);

        // Get top 3 recommendations (sorted by priority)
        const sortedCategories = Object.entries(this.categoryScores)
            .sort((a, b) => a[1] - b[1])
            .slice(0, 3);

        // Build HTML
        let html = `
            <!-- Score Card -->
            <div class="results-score-card">
                <div class="results-score-number">${this.overallScore}</div>
                <div class="results-score-label">/ 100</div>
                <div class="results-percentile">TOP ${100 - percentile}% PERCENTILE</div>
            </div>

            <!-- Interpretation -->
            <div class="results-interpretation">${interpretation}</div>

            <!-- Category Breakdown -->
            <div class="results-categories">
                <div class="results-category-title">CATEGORY ANALYSIS</div>
        `;

        // Add category bars
        for (const [category, score] of Object.entries(this.categoryScores)) {
            const metadata = CATEGORIES[category];
            const level = this.getScoreLevel(score);
            html += `
                <div class="results-category-item">
                    <div class="results-category-label">${metadata.label}</div>
                    <div class="results-category-bar">
                        <div class="results-category-fill" style="width: 0%" data-width="${score}%"></div>
                    </div>
                    <div class="results-category-score">${score}/100 <span style="opacity: 0.6">[${level}]</span></div>
                </div>
            `;
        }

        html += `</div>`;

        // Add recommendations
        html += `
            <div class="results-recommendations">
                <div class="results-rec-title">STRATEGIC RECOMMENDATIONS</div>
        `;

        for (const [category, score] of sortedCategories) {
            const metadata = CATEGORIES[category];
            const priority = score < 40 ? 'HIGH PRIORITY' : score < 60 ? 'MEDIUM PRIORITY' : 'OPTIMIZE';
            const badgeClass = score < 40 ? 'high' : 'medium';

            html += `
                <div class="results-rec-item">
                    <div class="results-rec-header">
                        <div class="results-rec-category">${metadata.label}</div>
                        <div class="results-rec-badge ${badgeClass}">${priority}</div>
                    </div>
                    <div class="results-rec-text">${metadata.description}</div>
                </div>
            `;
        }

        html += `</div>`;

        // Add CTAs
        html += `
            <div class="results-ctas">
                <button class="results-cta-button primary" onclick="window.location.href='/contact.html?source=terminal-assessment&score=${this.overallScore}'">
                    Schedule Strategic Session
                </button>
                <button class="results-cta-button" id="email-report-cta">
                    Email Full Report
                </button>
            </div>
        `;

        // Hide skeleton loader before inserting results
        const skeletonLoader = document.getElementById('skeleton-loader');
        if (skeletonLoader) {
            skeletonLoader.style.display = 'none';
        }

        // Insert HTML
        container.innerHTML = html;

        // Show results page with fade
        resultsPage.classList.add('visible');

        // Animate category bars
        setTimeout(() => {
            const fills = document.querySelectorAll('.results-category-fill');
            fills.forEach(fill => {
                const targetWidth = fill.dataset.width;
                fill.style.width = targetWidth;
            });
        }, 500);

        // Setup email report button
        const emailBtn = document.getElementById('email-report-cta');
        if (emailBtn) {
            emailBtn.addEventListener('click', () => this.showEmailFormOnPage());
        }
    }

    showEmailFormOnPage() {
        const container = document.getElementById('results-container');
        if (!container) return;

        // Hide skeleton loader
        const skeletonLoader = document.getElementById('skeleton-loader');
        if (skeletonLoader) {
            skeletonLoader.style.display = 'none';
        }

        container.innerHTML = `
            <div style="max-width: 600px; margin: 100px auto; text-align: center;">
                <h2 style="color: #65E48F; font-size: 24px; margin-bottom: 30px; font-family: monospace;">
                    EMAIL FULL REPORT
                </h2>
                <p style="color: rgba(255, 255, 255, 0.8); margin-bottom: 30px; font-family: monospace;">
                    Enter your email to receive your detailed positioning audit report
                </p>
                <div style="margin-bottom: 20px;">
                    <input
                        type="email"
                        id="results-email-input"
                        placeholder="your@email.com"
                        style="width: 100%; padding: 16px; background: rgba(101, 228, 143, 0.05); border: 1px solid rgba(101, 228, 143, 0.3); color: #65E48F; font-family: monospace; font-size: 16px; border-radius: 4px;"
                    />
                </div>
                <button
                    id="send-report-btn"
                    class="results-cta-button primary"
                    style="margin: 0 8px;"
                >
                    Send Report
                </button>
                <button
                    id="back-to-results-btn"
                    class="results-cta-button"
                    style="margin: 0 8px;"
                >
                    Back to Results
                </button>
            </div>
        `;

        // Setup handlers
        const sendBtn = document.getElementById('send-report-btn');
        const backBtn = document.getElementById('back-to-results-btn');
        const emailInput = document.getElementById('results-email-input');

        if (sendBtn) {
            sendBtn.addEventListener('click', () => {
                const email = emailInput?.value.trim();
                if (email && this.validateEmail(email)) {
                    this.sendEmailReport(email);
                } else {
                    alert('Please enter a valid email address');
                }
            });
        }

        if (backBtn) {
            backBtn.addEventListener('click', () => {
                this.renderResultsPage();
            });
        }

        if (emailInput) {
            emailInput.focus();
        }
    }

    async sendEmailReport(email) {
        this.userdata.email = email;
        this.saveToStorage();

        const container = document.getElementById('results-container');
        if (container) {
            // Hide skeleton loader
            const skeletonLoader = document.getElementById('skeleton-loader');
            if (skeletonLoader) {
                skeletonLoader.style.display = 'none';
            }

            container.innerHTML = `
                <div style="max-width: 600px; margin: 100px auto; text-align: center;">
                    <div style="font-size: 72px; color: #65E48F; margin-bottom: 20px;">✓</div>
                    <h2 style="color: #65E48F; font-size: 24px; margin-bottom: 20px; font-family: monospace;">
                        REPORT SENT
                    </h2>
                    <p style="color: rgba(255, 255, 255, 0.8); margin-bottom: 40px; font-family: monospace;">
                        Check your inbox for your detailed positioning audit report
                    </p>
                    <button
                        onclick="document.getElementById('results-container').parentElement.classList.remove('visible'); document.querySelector('.matrix-hero').style.display = 'block'; setTimeout(() => document.querySelector('.matrix-hero').style.opacity = '1', 10);"
                        class="results-cta-button"
                    >
                        Close
                    </button>
                </div>
            `;
        }

        this.trackEvent('report_requested', { email: email });
    }

    createScoreDisplay(score) {
        return `
            <div class="score-display">
                <div class="score-number">${score}</div>
                <div class="score-label">/ 100</div>
            </div>
        `;
    }

    getScoreInterpretation(score) {
        if (score < 20) {
            return 'CRITICAL: Significant positioning gaps detected. Immediate strategic intervention required.';
        } else if (score < 40) {
            return 'FAIR: Positioning challenges identified. Strategic repositioning recommended.';
        } else if (score < 60) {
            return 'MODERATE: Solid positioning foundation with key improvement opportunities.';
        } else if (score < 80) {
            return 'STRONG: Well-positioned with specific optimization areas for competitive advantage.';
        } else {
            return 'ELITE: Exceptional positioning maturity. Focus on maintaining and leveraging advantage.';
        }
    }

    async showCategoryBreakdown() {
        await this.typeText('> ', 'line');

        for (const [category, score] of Object.entries(this.categoryScores)) {
            const metadata = CATEGORIES[category];
            const barLength = Math.round(score / 10);
            const bar = '█'.repeat(barLength) + '░'.repeat(10 - barLength);
            const level = this.getScoreLevel(score);

            await this.typeText(`> ${metadata.label.padEnd(30)} ${bar} ${score}/100 [${level}]`, 'line data');
            await this.delay(500);
        }
    }

    getScoreLevel(score) {
        if (score >= 80) return 'STRONG';
        if (score >= 60) return 'GOOD';
        if (score >= 40) return 'FAIR';
        return 'CRITICAL';
    }

    async showRecommendations() {
        await this.typeText('> ', 'line');

        // Sort categories by score (lowest first = highest priority)
        const sortedCategories = Object.entries(this.categoryScores)
            .sort((a, b) => a[1] - b[1])
            .slice(0, 3); // Top 3 priorities

        for (const [category, score] of sortedCategories) {
            const metadata = CATEGORIES[category];
            const priority = score < 40 ? 'HIGH PRIORITY' : score < 60 ? 'MEDIUM PRIORITY' : 'OPTIMIZE';

            await this.typeText(`> [${priority}] ${metadata.label}`, 'line warning');
            await this.typeText(`> ${metadata.description}`, 'line');
            await this.typeText('> ', 'line');
            await this.delay(800);
        }
    }

    async showEmailCaptureAndCTA() {
        await this.typeText('> ', 'line');
        await this.typeText('> === NEXT STEPS ===', 'line system-msg');
        await this.delay(1000);
        await this.typeText('> ', 'line');
        await this.typeText('> Want detailed recommendations and strategic guidance?', 'line');
        await this.delay(1500);

        // Create CTA options
        const ctaHTML = `
            <div style="margin-top: 20px;">
                <button class="option-button" id="schedule-btn">
                    <span class="option-number">1</span>Schedule Strategic Session
                </button>
                <button class="option-button" id="email-report-btn">
                    <span class="option-number">2</span>Email Full Report
                </button>
                <button class="option-button" id="exit-btn">
                    <span class="option-number">3</span>Exit Terminal
                </button>
            </div>
        `;
        this.addHTML(ctaHTML);

        // Setup CTA listeners
        document.getElementById('schedule-btn')?.addEventListener('click', () => {
            window.location.href = '/contact.html?source=terminal-assessment&score=' + this.overallScore;
        });

        document.getElementById('email-report-btn')?.addEventListener('click', () => {
            this.showEmailForm();
        });

        document.getElementById('exit-btn')?.addEventListener('click', () => {
            this.clearOutput();
            this.typeText('> Thank you for using PositioningIQ Terminal Audit.', 'line');
            this.typeText('> Session terminated.', 'line system-msg');
        });

        await this.typeText('> ', 'line');
        await this.typeText('> [Press 1, 2, or 3 to select]', 'line data');
    }

    async showEmailForm() {
        this.clearOutput();
        await this.typeText('> EMAIL REPORT REQUEST', 'line system-msg');
        await this.delay(500);
        await this.typeText('> ', 'line');
        await this.typeText('> Enter your email address to receive your full positioning audit report:', 'line');
        await this.delay(500);

        const emailFormHTML = `
            <div class="terminal-input-container" style="display: flex; margin-top: 15px;">
                <span class="prompt">>></span>
                <input type="email" id="email-input" class="terminal-input" autocomplete="off" placeholder="your@email.com">
            </div>
        `;
        this.addHTML(emailFormHTML);

        const emailInput = document.getElementById('email-input');
        if (emailInput) {
            emailInput.focus();
            emailInput.addEventListener('keydown', async (e) => {
                if (e.key === 'Enter') {
                    const email = emailInput.value.trim();
                    if (email && this.validateEmail(email)) {
                        await this.sendEmailReport(email);
                    } else {
                        await this.typeText('> Invalid email format. Please try again.', 'line warning');
                    }
                }
            });
        }
    }

    validateEmail(email) {
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    }

    async sendEmailReport(email) {
        this.userdata.email = email;
        this.saveToStorage();

        await this.typeText('> ', 'line');
        await this.typeText('> Sending report...', 'line system-msg');
        await this.delay(1500);

        // Here you would integrate with your email service
        // For now, just show success message
        await this.typeText('> Report sent successfully to ' + email, 'line success');
        await this.delay(1000);
        await this.typeText('> Check your inbox for your detailed positioning audit.', 'line');

        this.trackEvent('report_requested', { email: email });
    }

    // ============================================
    // PERSISTENCE
    // ============================================
    saveToStorage() {
        const data = {
            timestamp: new Date().toISOString(),
            userdata: this.userdata,
            currentQuestionIndex: this.currentQuestionIndex,
            responses: this.responses,
            categoryScores: this.categoryScores,
            overallScore: this.overallScore
        };
        localStorage.setItem('positioning_terminal_assessment', JSON.stringify(data));
    }

    loadFromStorage() {
        const saved = localStorage.getItem('positioning_terminal_assessment');
        if (!saved) return false;

        try {
            const data = JSON.parse(saved);

            // Check if data is within 24 hours
            const savedTime = new Date(data.timestamp);
            const now = new Date();
            const hoursDiff = (now - savedTime) / (1000 * 60 * 60);

            if (hoursDiff < 24) {
                this.userdata = data.userdata || {};
                this.currentQuestionIndex = data.currentQuestionIndex || 0;
                this.responses = data.responses || {};
                this.categoryScores = data.categoryScores || {};
                this.overallScore = data.overallScore || 0;
                return true;
            } else {
                localStorage.removeItem('positioning_terminal_assessment');
                return false;
            }
        } catch (e) {
            console.error('Error loading saved assessment:', e);
            return false;
        }
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

    addText(text, className = 'line') {
        const line = document.createElement('div');
        line.className = className;
        line.textContent = text;
        this.output.appendChild(line);
        this.scrollToBottom();
    }

    addHTML(html) {
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

    trackEvent(eventName, eventData = {}) {
        // Google Analytics event tracking
        if (typeof gtag !== 'undefined') {
            gtag('event', eventName, {
                event_category: 'positioning_terminal_audit',
                ...eventData
            });
        }
    }
}

// Initialize on DOM ready
document.addEventListener('DOMContentLoaded', () => {
    new PositioningTerminalAssessment();
});
