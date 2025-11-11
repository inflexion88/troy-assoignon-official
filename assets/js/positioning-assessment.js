/**
 * Positioning Diagnostic Tool
 * Interactive brand positioning maturity diagnostic
 * @author Troy Assoignon
 */

// Diagnostic Questions Configuration
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

// Category mapping for segmented progress bar (4 questions each)
const CATEGORY_QUESTION_MAP = {
    clarity: [1, 2, 3, 4],
    differentiation: [5, 6, 7, 8],
    target_market: [9, 10, 11, 12],
    value_proposition: [13, 14, 15, 16],
    competitive_position: [17, 18, 19, 20]
};

// Category display names for indicator
const CATEGORY_DISPLAY_NAMES = {
    clarity: 'Positioning Clarity',
    differentiation: 'Differentiation Strength',
    target_market: 'Target Market Alignment',
    value_proposition: 'Value Proposition Clarity',
    competitive_position: 'Competitive Position'
};

// Category metadata for scoring
const CATEGORIES = {
    clarity: {
        label: 'Positioning Clarity',
        icon: '<svg class="w-6 h-6 inline-block" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7"/></svg>',
        description: 'How well-defined and articulated is your market position?',
        recommendations: {
            poor: '<strong>Action:</strong> Conduct a 2-hour positioning workshop with your leadership team to define your specific ICP, unique point of view, and category position. Use a structured framework like April Dunford\'s positioning canvas.\n\n<strong>Impact:</strong> Creates the strategic clarity that drives all go-to-market decisions and aligns your entire organization.\n\n<strong>Timeline:</strong> 1 week to define, 2 weeks to validate with 5-10 target customers.',
            fair: '<strong>Action:</strong> Document your positioning in a 1-page strategic brief including ICP definition, problem you solve, how you solve it, and proof points. Ensure every team member can articulate this consistently.\n\n<strong>Impact:</strong> Aligns entire team on who you serve and why you win, eliminating confusion in customer conversations.\n\n<strong>Timeline:</strong> 3-5 business days to document and socialize.',
            good: '<strong>Action:</strong> Audit all customer-facing materials for positioning consistency - website, sales decks, email sequences, case studies. Create a messaging guide to standardize language.\n\n<strong>Impact:</strong> Ensures positioning clarity across every touchpoint, strengthening brand recognition and recall.\n\n<strong>Timeline:</strong> 1-2 weeks for audit and updates.',
            excellent: '<strong>Action:</strong> Create a positioning playbook documenting your strategic rationale, competitive landscape, and messaging framework to scale consistency across new markets, products, or teams.\n\n<strong>Impact:</strong> Maintains positioning excellence as you grow and expand while reducing onboarding time for new team members.\n\n<strong>Timeline:</strong> 2-3 weeks to develop comprehensive playbook.'
        }
    },
    differentiation: {
        label: 'Differentiation Strength',
        icon: '<svg class="w-6 h-6 inline-block" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"/></svg>',
        description: 'How unique and defensible is your competitive advantage?',
        recommendations: {
            poor: '<strong>Action:</strong> Run a differentiation sprint: analyze your top 3 competitors, identify gaps in their offerings, and map your unique capabilities that fill those gaps. Interview 5 recent customers about why they chose you.\n\n<strong>Impact:</strong> Uncovers your authentic differentiation based on real customer value, not assumptions.\n\n<strong>Timeline:</strong> 2 weeks for research, 1 week to synthesize findings.',
            fair: '<strong>Action:</strong> Develop 3-5 proof points that demonstrate your differentiation with quantifiable results. Create a competitive battle card for your sales team showing how you win on specific dimensions.\n\n<strong>Impact:</strong> Gives your team concrete ammunition to communicate uniqueness and handle competitive objections.\n\n<strong>Timeline:</strong> 1-2 weeks to gather proof points and build battle cards.',
            good: '<strong>Action:</strong> Build moats around your differentiation through IP development, exclusive partnerships, proprietary data, or network effects. Identify which advantages are most defensible and invest there.\n\n<strong>Impact:</strong> Transforms temporary advantages into sustainable competitive barriers that competitors can\'t easily replicate.\n\n<strong>Timeline:</strong> 3-6 months depending on moat strategy.',
            excellent: '<strong>Action:</strong> Launch a thought leadership program establishing your unique POV through original research, speaking engagements, and content that reinforces your differentiation. Consider category creation.\n\n<strong>Impact:</strong> Positions you as the category leader and makes differentiation self-reinforcing through market perception.\n\n<strong>Timeline:</strong> Ongoing program, first results in 2-3 months.'
        }
    },
    target_market: {
        label: 'Target Market Alignment',
        icon: '<svg class="w-6 h-6 inline-block" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/></svg>',
        description: 'How well-defined is your ideal customer and how aligned are your efforts?',
        recommendations: {
            poor: '<strong>Action:</strong> Define your ICP with specific criteria: company size, industry, tech stack, pain points, buying triggers, and decision-making process. Interview your best 10 customers to identify patterns.\n\n<strong>Impact:</strong> Focuses all marketing and sales efforts on high-probability prospects, dramatically improving conversion rates.\n\n<strong>Timeline:</strong> 2 weeks for customer interviews, 1 week to synthesize ICP.',
            fair: '<strong>Action:</strong> Implement lead scoring and qualification criteria based on your ICP. Train your sales team to disqualify prospects that don\'t fit. Set a goal to say "no" to 30% of inbound leads.\n\n<strong>Impact:</strong> Increases sales efficiency by 2-3x by focusing time on winnable deals with ideal customers.\n\n<strong>Timeline:</strong> 1 week to implement scoring, ongoing discipline required.',
            good: '<strong>Action:</strong> Segment your ICP into 2-3 sub-personas and create personalized messaging, content, and sales plays for each. Test which segments convert best and double down.\n\n<strong>Impact:</strong> Increases relevance and conversion by tailoring approach to specific customer contexts and needs.\n\n<strong>Timeline:</strong> 2-3 weeks to segment and personalize.',
            excellent: '<strong>Action:</strong> Build a customer advisory board with 6-8 ideal customers to co-create product roadmap and validate new market opportunities. Use insights to stay ahead of market shifts.\n\n<strong>Impact:</strong> Deepens relationships with best customers while ensuring continued alignment as market evolves.\n\n<strong>Timeline:</strong> 1 month to recruit and launch, quarterly meetings.'
        }
    },
    value_proposition: {
        label: 'Value Proposition Clarity',
        icon: '<svg class="w-6 h-6 inline-block" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"/></svg>',
        description: 'How clear and compelling is the value you deliver?',
        recommendations: {
            poor: '<strong>Action:</strong> Run a value discovery workshop: analyze customer outcomes, quantify ROI, and craft a one-sentence value proposition using the formula: "We help [ICP] achieve [outcome] by [unique approach]." Test with 10 prospects.\n\n<strong>Impact:</strong> Creates a compelling, customer-centric value story that resonates immediately in sales conversations.\n\n<strong>Timeline:</strong> 1 week to develop, 2 weeks to test and refine.',
            fair: '<strong>Action:</strong> Build a value calculator or ROI tool showing quantifiable benefits customers receive. Create 3-5 customer case studies with specific metrics (revenue increase, cost savings, time saved).\n\n<strong>Impact:</strong> Transforms abstract value into concrete proof that accelerates buying decisions and justifies premium pricing.\n\n<strong>Timeline:</strong> 2-3 weeks to develop calculator and case studies.',
            good: '<strong>Action:</strong> Shift all messaging from features to outcomes. Rewrite website, decks, and collateral leading with business results, then explaining how. Train team to sell outcomes, not capabilities.\n\n<strong>Impact:</strong> Positions you as a strategic partner driving business results rather than a vendor selling features.\n\n<strong>Timeline:</strong> 2-3 weeks for messaging overhaul, ongoing reinforcement.',
            excellent: '<strong>Action:</strong> Develop an executive-level business case template that shows CFO/CEO-level impact: strategic value, financial ROI, risk mitigation. Use to elevate conversations to C-suite.\n\n<strong>Impact:</strong> Enables enterprise deals and strategic partnerships by speaking the language of executive decision-makers.\n\n<strong>Timeline:</strong> 2-3 weeks to develop template and executive narrative.'
        }
    },
    competitive_position: {
        label: 'Competitive Position',
        icon: '<svg class="w-6 h-6 inline-block" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7"/></svg>',
        description: 'How strong is your market position relative to competitors?',
        recommendations: {
            poor: '<strong>Action:</strong> Identify a specific sub-segment where you can be #1 or #2. Focus all resources on dominating that niche before expanding. Build 5-10 referenceable customers in this segment.\n\n<strong>Impact:</strong> Establishes a defendable beachhead and creates momentum through concentrated wins.\n\n<strong>Timeline:</strong> 3-6 months to establish niche leadership.',
            fair: '<strong>Action:</strong> Conduct quarterly competitive analysis tracking positioning, features, pricing, and messaging of top 5 competitors. Update battle cards and train sales team on handling competitive situations.\n\n<strong>Impact:</strong> Keeps you informed on competitive threats and enables proactive positioning adjustments.\n\n<strong>Timeline:</strong> 2-3 days per quarter for analysis, ongoing battle card updates.',
            good: '<strong>Action:</strong> Launch a competitive displacement program targeting competitor customers with migration offers, comparison guides, and switching incentives. Aim to win 10-15 competitive deals per quarter.\n\n<strong>Impact:</strong> Accelerates market share growth by actively taking customers from competitors.\n\n<strong>Timeline:</strong> 1 month to design program, ongoing execution.',
            excellent: '<strong>Action:</strong> Build a market intelligence system tracking win/loss data, competitive mentions, analyst reports, and market trends. Use insights to anticipate market shifts and maintain leadership position.\n\n<strong>Impact:</strong> Creates sustainable advantage through superior market intelligence and adaptive strategy.\n\n<strong>Timeline:</strong> 1-2 months to establish system, ongoing monitoring.'
        }
    }
};

/**
 * Main Diagnostic Controller
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
        this.currentQuestionSpan = document.getElementById('current-q');
        this.categoryIndicator = document.getElementById('category-indicator');
        this.segments = document.querySelectorAll('.segment');
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
        this.trackEvent('diagnostic_started');
    }

    /**
     * Get current category and progress within that category
     */
    getCurrentCategoryInfo() {
        const questionNumber = this.currentQuestionIndex + 1; // 1-indexed

        // Determine which category we're in
        let currentCategory = '';
        for (const [category, questions] of Object.entries(CATEGORY_QUESTION_MAP)) {
            if (questions.includes(questionNumber)) {
                currentCategory = category;
                break;
            }
        }

        // Calculate progress within this category
        const categoryQuestions = CATEGORY_QUESTION_MAP[currentCategory];
        const categoryPosition = categoryQuestions.indexOf(questionNumber) + 1; // 1-indexed
        const categoryProgress = (categoryPosition / categoryQuestions.length) * 100;

        return {
            category: currentCategory,
            categoryPosition: categoryPosition,
            categoryTotal: categoryQuestions.length,
            categoryProgress: categoryProgress,
            categoryIndex: Object.keys(CATEGORY_QUESTION_MAP).indexOf(currentCategory)
        };
    }

    /**
     * Update segmented progress bar
     */
    updateProgress() {
        const info = this.getCurrentCategoryInfo();

        // Update question counter
        this.currentQuestionSpan.textContent = this.currentQuestionIndex + 1;

        // Update category indicator
        this.categoryIndicator.textContent = CATEGORY_DISPLAY_NAMES[info.category];

        // Update segments
        this.segments.forEach((segment, index) => {
            const fill = segment.querySelector('.segment-fill');

            if (index < info.categoryIndex) {
                // Previous segments - fill to 100% and mark as completed
                fill.style.width = '100%';
                if (!segment.classList.contains('completed')) {
                    segment.classList.add('completed');
                }
            } else if (index === info.categoryIndex) {
                // Current segment - fill to progress
                fill.style.width = `${info.categoryProgress}%`;
                // Mark as completed if at 100%
                if (info.categoryProgress === 100) {
                    if (!segment.classList.contains('completed')) {
                        segment.classList.add('completed');
                    }
                } else {
                    segment.classList.remove('completed');
                }
            } else {
                // Future segments - 0% and not completed
                fill.style.width = '0%';
                segment.classList.remove('completed');
            }
        });
    }

    renderQuestion() {
        const question = this.questions[this.currentQuestionIndex];

        // Update progress with new segmented system
        this.updateProgress();

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
                            <div class="option-card peer-checked:border-accent-green peer-checked:bg-accent-green/10
                                        border border-white/20 rounded-xl p-4 hover:border-white/40
                                        transition-all duration-200 ${this.responses[question.id] === option.value ? 'option-selected' : ''}">
                                <div class="flex items-start">
                                    <div class="flex-shrink-0 w-6 h-6 rounded-full border-2 border-white/40
                                                peer-checked:border-accent-green peer-checked:bg-accent-green
                                                mr-3 mt-0.5 flex items-center justify-center relative">
                                        <div class="w-2 h-2 rounded-full bg-white opacity-0 peer-checked:opacity-100"></div>
                                        <svg class="check-icon ${this.responses[question.id] === option.value ? 'check-icon-visible' : ''} absolute w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M5 13l4 4L19 7"></path>
                                        </svg>
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

        // Get the selected option's card element
        const selectedOption = event.target.closest('.question-option');
        const optionCard = selectedOption.querySelector('.option-card');

        // Remove previous selections' glow effects
        const allOptionCards = this.questionContainer.querySelectorAll('.option-card');
        allOptionCards.forEach(card => {
            card.classList.remove('option-selected', 'option-selected-animate');
        });

        // Remove all check icons
        const allCheckIcons = this.questionContainer.querySelectorAll('.check-icon');
        allCheckIcons.forEach(icon => {
            icon.classList.remove('check-icon-visible');
        });

        // Add selection animation
        optionCard.classList.add('option-selected-animate');

        // After animation completes, add glow effect
        setTimeout(() => {
            optionCard.classList.remove('option-selected-animate');
            optionCard.classList.add('option-selected');
        }, 300);

        // Show check icon with animation
        const checkIcon = selectedOption.querySelector('.check-icon');
        if (checkIcon) {
            // Small delay for better visual hierarchy
            setTimeout(() => {
                checkIcon.classList.add('check-icon-visible');
            }, 150);
        }

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
        // Add subtle analyzing effect to button
        this.nextBtn.classList.add('button-analyzing');
        this.nextBtn.disabled = true;

        // Brief pause for premium feel
        setTimeout(() => {
            this.nextBtn.classList.remove('button-analyzing');

            if (this.currentQuestionIndex < this.questions.length - 1) {
                this.currentQuestionIndex++;
                this.renderQuestion();
                this.trackEvent('question_next');
            } else {
                // All questions answered, show results
                this.calculateScores();
                this.showResults();
            }
        }, 200);
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

        this.trackEvent('diagnostic_completed', {
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

        // Set score description with competitive context
        const scoreDescriptionData = this.getScoreDescription(this.overallScore);
        this.scoreDescription.innerHTML = `
            ${scoreDescriptionData.description}<br>
            <span class="text-luxury-300 text-base mt-2 block">${scoreDescriptionData.context}</span>
        `;

        // Calculate and display percentile
        this.displayPercentile(this.overallScore);
    }

    getScoreDescription(score) {
        let description = '';
        let context = '';

        if (score < 20) {
            description = 'Critical positioning gaps detected';
            context = 'Companies at this level struggle with market clarity and differentiation.';
        } else if (score < 40) {
            description = 'Significant positioning challenges identified';
            context = 'You\'re in the bottom quartile - immediate strategic intervention recommended.';
        } else if (score < 60) {
            description = 'Moderate positioning foundation with improvement opportunities';
            context = 'You\'re performing below the 50th percentile of assessed companies.';
        } else if (score < 80) {
            description = 'Strong positioning with specific optimization areas';
            context = 'You\'re above average, placing in the top 40% of companies.';
        } else {
            description = 'Elite positioning maturity';
            context = 'You\'re in the top 20% - focus on maintaining competitive advantage.';
        }

        return { description, context };
    }

    displayPercentile(score) {
        // Calculate percentile based on score
        const percentile = Math.min(Math.round((score / 100) * 100), 99);
        const percentileElement = document.getElementById('your-percentile');
        const markerElement = document.getElementById('percentile-marker');

        if (percentileElement && markerElement) {
            percentileElement.textContent = `Top ${100 - percentile}%`;

            // Position marker with animation
            setTimeout(() => {
                markerElement.style.left = `${percentile}%`;
                markerElement.style.transition = 'left 1.5s cubic-bezier(0.4, 0.0, 0.2, 1)';
            }, 500);
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
        // Sort by priority (lowest scores first)
        const sortedRecommendations = Object.keys(this.categoryScores)
            .sort((a, b) => this.categoryScores[a] - this.categoryScores[b])
            .map(category => {
                const score = this.categoryScores[category];
                const metadata = CATEGORIES[category];

                // Map score to 4-tier system: poor (0-40), fair (40-60), good (60-80), excellent (80+)
                let level;
                if (score >= 80) level = 'excellent';
                else if (score >= 60) level = 'good';
                else if (score >= 40) level = 'fair';
                else level = 'poor';

                const recommendation = metadata.recommendations[level];

                // Determine priority badge based on 4 tiers
                let priorityBadge = '';
                let priorityClass = '';
                if (score < 40) {
                    priorityBadge = 'HIGH PRIORITY';
                    priorityClass = 'bg-red-500/20 text-red-400 border-red-500/30';
                } else if (score < 60) {
                    priorityBadge = 'MEDIUM PRIORITY';
                    priorityClass = 'bg-yellow-500/20 text-yellow-400 border-yellow-500/30';
                } else if (score < 80) {
                    priorityBadge = 'OPTIMIZE';
                    priorityClass = 'bg-blue-500/20 text-blue-400 border-blue-500/30';
                } else {
                    priorityBadge = 'MAINTAIN';
                    priorityClass = 'bg-accent-green/20 text-accent-green border-accent-green/30';
                }

                return `
                    <div class="fade-in bg-white/5 p-6 rounded-xl border border-luxury-800/30">
                        <div class="flex justify-between items-start mb-3">
                            <div class="flex items-center">
                                <h4 class="font-bold text-lg">${metadata.label}</h4>
                            </div>
                            <span class="text-xs font-semibold px-3 py-1 rounded-full border ${priorityClass}">
                                ${priorityBadge}
                            </span>
                        </div>
                        <p class="text-white/80 whitespace-pre-line">${recommendation}</p>
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
                    <div class="text-accent-green text-4xl mb-2 font-bold">✓</div>
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
        this.trackEvent('diagnostic_retake');

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
                console.error('Error loading saved diagnostic:', e);
            }
        }
    }

    trackEvent(eventName, eventData = {}) {
        // Google Analytics event tracking
        if (typeof gtag !== 'undefined') {
            gtag('event', eventName, {
                event_category: 'positioning_diagnostic',
                ...eventData
            });
        }
    }
}

// Initialize on DOM ready
document.addEventListener('DOMContentLoaded', function() {
    window.positioningAssessment = new PositioningAssessment();
});
