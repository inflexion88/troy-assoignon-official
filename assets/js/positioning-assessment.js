/**
 * Positioning Assessment Tool
 * Interactive brand positioning maturity assessment
 * @author Troy Assoignon
 */

// Assessment Questions Configuration
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

// Category metadata for scoring
const CATEGORIES = {
    clarity: {
        label: 'Positioning Clarity',
        icon: '🎯',
        description: 'How well-defined and articulated is your market position?',
        recommendations: {
            low: 'Your positioning lacks clarity. Start by documenting your unique value and ensuring team alignment.',
            medium: 'Your positioning has some clarity but needs refinement. Focus on creating a concise, compelling positioning statement.',
            high: 'Excellent positioning clarity! Maintain consistency and continue refining your message.'
        }
    },
    differentiation: {
        label: 'Differentiation Strength',
        icon: '💎',
        description: 'How unique and defensible is your competitive advantage?',
        recommendations: {
            low: 'You need stronger differentiation. Identify your unique capabilities and communicate them clearly.',
            medium: 'You have decent differentiation but it could be stronger. Focus on what makes you truly unique.',
            high: 'Strong differentiation! Keep innovating and defending your competitive moat.'
        }
    },
    target_market: {
        label: 'Target Market Alignment',
        icon: '👥',
        description: 'How well-defined is your ideal customer and how aligned are your efforts?',
        recommendations: {
            low: 'Your target market is too broad or undefined. Define a specific ICP and focus your efforts.',
            medium: 'You have target market clarity but need better alignment. Be more selective with prospects.',
            high: 'Excellent target market focus! Continue refining your ICP and staying disciplined.'
        }
    },
    value_proposition: {
        label: 'Value Proposition Clarity',
        icon: '⚡',
        description: 'How clear and compelling is the value you deliver?',
        recommendations: {
            low: 'Your value proposition is unclear. Articulate specific outcomes and quantifiable benefits.',
            medium: 'Your value prop is decent but needs more clarity. Focus on measurable outcomes over features.',
            high: 'Crystal clear value proposition! Keep leading with outcomes and proving ROI.'
        }
    },
    competitive_position: {
        label: 'Competitive Position',
        icon: '🏆',
        description: 'How strong is your market position relative to competitors?',
        recommendations: {
            low: 'Your competitive position is weak. Focus on winning in a specific niche before expanding.',
            medium: 'You have a moderate market position. Strengthen your position through better differentiation.',
            high: 'Strong competitive position! Defend your position and look for expansion opportunities.'
        }
    }
};

/**
 * Main Assessment Controller
 */
class PositioningAssessment {
    constructor() {
        this.questions = QUESTIONS;
        this.currentQuestionIndex = 0;
        this.responses = {};
        this.categoryScores = {};
        this.overallScore = 0;

        this.init();
    }

    init() {
        this.cacheElements();
        this.setupEventListeners();
        this.loadFromStorage();
    }

    cacheElements() {
        // Screens
        this.welcomeScreen = document.getElementById('welcome-screen');
        this.assessmentScreen = document.getElementById('assessment-screen');
        this.resultsScreen = document.getElementById('results-screen');

        // Assessment elements
        this.questionContainer = document.getElementById('question-container');
        this.progressBar = document.getElementById('progress-bar');
        this.currentQuestionSpan = document.getElementById('current-question');
        this.totalQuestionsSpan = document.getElementById('total-questions');
        this.progressPercentage = document.getElementById('progress-percentage');
        this.prevBtn = document.getElementById('prev-btn');
        this.nextBtn = document.getElementById('next-btn');

        // Results elements
        this.overallScoreEl = document.getElementById('overall-score');
        this.scoreCircle = document.getElementById('score-circle');
        this.scoreDescription = document.getElementById('score-description');
        this.categoryScoresContainer = document.getElementById('category-scores');
        this.recommendationsContainer = document.getElementById('recommendations');

        // Form elements
        this.emailForm = document.getElementById('results-email-form');
        this.scoreInput = document.getElementById('score-input');
        this.categoriesInput = document.getElementById('categories-input');

        // Buttons
        this.startBtn = document.getElementById('start-assessment-btn');
        this.retakeBtn = document.getElementById('retake-btn');

        // Set total questions
        this.totalQuestionsSpan.textContent = this.questions.length;
    }

    setupEventListeners() {
        this.startBtn.addEventListener('click', () => this.startAssessment());
        this.prevBtn.addEventListener('click', () => this.previousQuestion());
        this.nextBtn.addEventListener('click', () => this.nextQuestion());
        this.retakeBtn.addEventListener('click', () => this.retakeAssessment());

        if (this.emailForm) {
            this.emailForm.addEventListener('submit', (e) => this.handleEmailSubmit(e));
        }
    }

    startAssessment() {
        this.welcomeScreen.classList.add('hidden');
        this.assessmentScreen.classList.remove('hidden');
        this.renderQuestion();
        this.trackEvent('assessment_started');
    }

    renderQuestion() {
        const question = this.questions[this.currentQuestionIndex];

        // Update progress
        const progress = ((this.currentQuestionIndex + 1) / this.questions.length) * 100;
        this.progressBar.style.width = `${progress}%`;
        this.currentQuestionSpan.textContent = this.currentQuestionIndex + 1;
        this.progressPercentage.textContent = `${Math.round(progress)}%`;

        // Update navigation buttons
        this.prevBtn.disabled = this.currentQuestionIndex === 0;

        // Render question
        this.questionContainer.innerHTML = `
            <div class="fade-in">
                <div class="mb-2 text-sm text-accent-green font-semibold">
                    ${question.categoryLabel}
                </div>
                <h3 class="text-2xl md:text-3xl font-bold mb-8">
                    ${question.question}
                </h3>
                <div class="space-y-3">
                    ${question.options.map((option, index) => `
                        <label class="question-option block cursor-pointer">
                            <input
                                type="radio"
                                name="question-${question.id}"
                                value="${option.value}"
                                class="hidden peer"
                                ${this.responses[question.id] === option.value ? 'checked' : ''}
                                data-question-id="${question.id}"
                            />
                            <div class="peer-checked:border-accent-green peer-checked:bg-accent-green/10
                                        border border-white/20 rounded-xl p-4 hover:border-white/40
                                        transition-all duration-200">
                                <div class="flex items-start">
                                    <div class="flex-shrink-0 w-6 h-6 rounded-full border-2 border-white/40
                                                peer-checked:border-accent-green peer-checked:bg-accent-green
                                                mr-3 mt-0.5 flex items-center justify-center">
                                        <div class="w-2 h-2 rounded-full bg-white opacity-0 peer-checked:opacity-100"></div>
                                    </div>
                                    <span class="text-white/80 peer-checked:text-white">${option.text}</span>
                                </div>
                            </div>
                        </label>
                    `).join('')}
                </div>
            </div>
        `;

        // Add event listeners to radio buttons
        const radioButtons = this.questionContainer.querySelectorAll('input[type="radio"]');
        radioButtons.forEach(radio => {
            radio.addEventListener('change', (e) => this.handleResponse(e));
        });

        // Check if question is answered to enable next button
        this.updateNextButton();
    }

    handleResponse(event) {
        const questionId = parseInt(event.target.dataset.questionId);
        const value = parseInt(event.target.value);

        this.responses[questionId] = value;
        this.saveToStorage();
        this.updateNextButton();
        this.trackEvent('question_answered', { question_id: questionId, value: value });
    }

    updateNextButton() {
        const question = this.questions[this.currentQuestionIndex];
        const isAnswered = this.responses.hasOwnProperty(question.id);
        this.nextBtn.disabled = !isAnswered;

        // Update button text for last question
        if (this.currentQuestionIndex === this.questions.length - 1) {
            this.nextBtn.textContent = 'See Results →';
        } else {
            this.nextBtn.textContent = 'Next →';
        }
    }

    previousQuestion() {
        if (this.currentQuestionIndex > 0) {
            this.currentQuestionIndex--;
            this.renderQuestion();
            this.trackEvent('question_previous');
        }
    }

    nextQuestion() {
        if (this.currentQuestionIndex < this.questions.length - 1) {
            this.currentQuestionIndex++;
            this.renderQuestion();
            this.trackEvent('question_next');
        } else {
            // All questions answered, show results
            this.calculateScores();
            this.showResults();
        }
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
    }

    showResults() {
        this.assessmentScreen.classList.add('hidden');
        this.resultsScreen.classList.remove('hidden');

        // Animate overall score
        this.animateScore();

        // Render category scores
        this.renderCategoryScores();

        // Render recommendations
        this.renderRecommendations();

        // Update hidden form fields
        this.scoreInput.value = this.overallScore;
        this.categoriesInput.value = JSON.stringify(this.categoryScores);

        this.trackEvent('assessment_completed', {
            overall_score: this.overallScore,
            category_scores: this.categoryScores
        });

        // Scroll to top
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    animateScore() {
        // Animate the score number
        let currentScore = 0;
        const duration = 2000;
        const increment = this.overallScore / (duration / 16);

        const scoreInterval = setInterval(() => {
            currentScore += increment;
            if (currentScore >= this.overallScore) {
                currentScore = this.overallScore;
                clearInterval(scoreInterval);
            }
            this.overallScoreEl.textContent = Math.round(currentScore);
        }, 16);

        // Animate the circle
        const circumference = 2 * Math.PI * 88; // radius = 88
        const offset = circumference - (this.overallScore / 100) * circumference;

        setTimeout(() => {
            this.scoreCircle.style.strokeDashoffset = offset;
        }, 100);

        // Set score description
        this.scoreDescription.textContent = this.getScoreDescription(this.overallScore);
    }

    getScoreDescription(score) {
        if (score >= 80) {
            return 'Excellent! Your positioning is mature and well-executed. Focus on continuous optimization.';
        } else if (score >= 60) {
            return 'Good foundation! Your positioning is solid but has room for improvement in key areas.';
        } else if (score >= 40) {
            return 'Fair positioning. Significant opportunities exist to strengthen your market position.';
        } else if (score >= 20) {
            return 'Needs work. Your positioning requires fundamental improvements across multiple dimensions.';
        } else {
            return 'Critical gaps. Immediate action needed to establish a clear and compelling market position.';
        }
    }

    renderCategoryScores() {
        const html = Object.keys(this.categoryScores).map(category => {
            const score = this.categoryScores[category];
            const metadata = CATEGORIES[category];

            return `
                <div class="fade-in">
                    <div class="flex justify-between items-center mb-2">
                        <div class="flex items-center">
                            <span class="text-2xl mr-2">${metadata.icon}</span>
                            <span class="font-semibold">${metadata.label}</span>
                        </div>
                        <span class="text-accent-green font-bold">${score}/100</span>
                    </div>
                    <div class="h-3 bg-white/10 rounded-full overflow-hidden">
                        <div class="category-score h-full bg-gradient-to-r from-accent-green to-accent-green-dark rounded-full"
                             style="width: ${score}%"></div>
                    </div>
                    <p class="text-sm text-white/60 mt-1">${metadata.description}</p>
                </div>
            `;
        }).join('');

        this.categoryScoresContainer.innerHTML = html;
    }

    renderRecommendations() {
        const recommendations = Object.keys(this.categoryScores).map(category => {
            const score = this.categoryScores[category];
            const metadata = CATEGORIES[category];

            let level;
            if (score >= 70) level = 'high';
            else if (score >= 40) level = 'medium';
            else level = 'low';

            const recommendation = metadata.recommendations[level];

            // Determine priority badge
            let priorityBadge = '';
            let priorityClass = '';
            if (score < 40) {
                priorityBadge = 'HIGH PRIORITY';
                priorityClass = 'bg-luxury-700/20 text-luxury-300 border-luxury-700/30';
            } else if (score < 70) {
                priorityBadge = 'MEDIUM PRIORITY';
                priorityClass = 'bg-luxury-600/20 text-luxury-400 border-luxury-600/30';
            } else {
                priorityBadge = 'MAINTAIN';
                priorityClass = 'bg-accent-green/20 text-accent-green border-accent-green/30';
            }

            return `
                <div class="fade-in bg-white/5 p-6 rounded-xl border border-luxury-800/30">
                    <div class="flex justify-between items-start mb-3">
                        <div class="flex items-center">
                            <span class="text-2xl mr-2">${metadata.icon}</span>
                            <h4 class="font-bold text-lg">${metadata.label}</h4>
                        </div>
                        <span class="text-xs font-semibold px-3 py-1 rounded-full border ${priorityClass}">
                            ${priorityBadge}
                        </span>
                    </div>
                    <p class="text-white/80">${recommendation}</p>
                </div>
            `;
        });

        // Sort by priority (lowest scores first)
        const sortedRecommendations = Object.keys(this.categoryScores)
            .sort((a, b) => this.categoryScores[a] - this.categoryScores[b])
            .map(category => {
                const score = this.categoryScores[category];
                const metadata = CATEGORIES[category];

                let level;
                if (score >= 70) level = 'high';
                else if (score >= 40) level = 'medium';
                else level = 'low';

                const recommendation = metadata.recommendations[level];

                let priorityBadge = '';
                let priorityClass = '';
                if (score < 40) {
                    priorityBadge = 'HIGH PRIORITY';
                    priorityClass = 'bg-red-500/20 text-red-400 border-red-500/30';
                } else if (score < 70) {
                    priorityBadge = 'MEDIUM PRIORITY';
                    priorityClass = 'bg-yellow-500/20 text-yellow-400 border-yellow-500/30';
                } else {
                    priorityBadge = 'MAINTAIN';
                    priorityClass = 'bg-accent-green/20 text-accent-green border-accent-green/30';
                }

                return `
                    <div class="fade-in bg-white/5 p-6 rounded-xl border border-luxury-800/30">
                        <div class="flex justify-between items-start mb-3">
                            <div class="flex items-center">
                                <span class="text-2xl mr-2">${metadata.icon}</span>
                                <h4 class="font-bold text-lg">${metadata.label}</h4>
                            </div>
                            <span class="text-xs font-semibold px-3 py-1 rounded-full border ${priorityClass}">
                                ${priorityBadge}
                            </span>
                        </div>
                        <p class="text-white/80">${recommendation}</p>
                    </div>
                `;
            });

        this.recommendationsContainer.innerHTML = sortedRecommendations.join('');
    }

    handleEmailSubmit(event) {
        event.preventDefault();

        // Use FormSubmit.co (same service as contact form)
        const form = event.target;
        const formData = new FormData(form);

        // Add score data
        formData.append('overall_score', this.overallScore);
        formData.append('category_scores', JSON.stringify(this.categoryScores, null, 2));

        // Submit to FormSubmit
        fetch('https://formsubmit.co/ajax/troy@troyassoignon.com', {
            method: 'POST',
            body: formData
        })
        .then(response => response.json())
        .then(data => {
            // Show success message
            form.innerHTML = `
                <div class="text-center py-4">
                    <div class="text-accent-green text-4xl mb-2">✓</div>
                    <p class="text-white font-semibold">Report sent to your inbox!</p>
                    <p class="text-white/60 text-sm mt-1">Check your email for your detailed positioning report.</p>
                </div>
            `;
            this.trackEvent('report_requested', { email: formData.get('email') });
        })
        .catch(error => {
            console.error('Error submitting form:', error);
            alert('There was an error sending your report. Please try again.');
        });
    }

    retakeAssessment() {
        this.currentQuestionIndex = 0;
        this.responses = {};
        this.categoryScores = {};
        this.overallScore = 0;

        this.resultsScreen.classList.add('hidden');
        this.welcomeScreen.classList.remove('hidden');

        localStorage.removeItem('positioning_assessment');
        this.trackEvent('assessment_retake');

        window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    saveToStorage() {
        const data = {
            currentQuestionIndex: this.currentQuestionIndex,
            responses: this.responses,
            categoryScores: this.categoryScores,
            overallScore: this.overallScore,
            timestamp: new Date().toISOString()
        };
        localStorage.setItem('positioning_assessment', JSON.stringify(data));
    }

    loadFromStorage() {
        const saved = localStorage.getItem('positioning_assessment');
        if (saved) {
            try {
                const data = JSON.parse(saved);

                // Only restore if saved within last 24 hours
                const savedTime = new Date(data.timestamp);
                const now = new Date();
                const hoursDiff = (now - savedTime) / (1000 * 60 * 60);

                if (hoursDiff < 24) {
                    this.currentQuestionIndex = data.currentQuestionIndex || 0;
                    this.responses = data.responses || {};
                    this.categoryScores = data.categoryScores || {};
                    this.overallScore = data.overallScore || 0;
                }
            } catch (e) {
                console.error('Error loading saved assessment:', e);
            }
        }
    }

    trackEvent(eventName, eventData = {}) {
        // Google Analytics event tracking
        if (typeof gtag !== 'undefined') {
            gtag('event', eventName, {
                event_category: 'positioning_assessment',
                ...eventData
            });
        }
    }
}

// Initialize on DOM ready
document.addEventListener('DOMContentLoaded', () => {
    new PositioningAssessment();
});
