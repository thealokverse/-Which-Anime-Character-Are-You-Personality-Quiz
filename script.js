// Character database with 25 anime characters
const characters = {
    naruto: { name: "Naruto Uzumaki", quote: "I'm not gonna run away, I never go back on my word! That's my nindō: my ninja way!", img: "img/naruto.jpg" },
    luffy: { name: "Monkey D. Luffy", quote: "I'm gonna be the Pirate King!", img: "img/luffy.jpg" },
    goku: { name: "Son Goku", quote: "I am the hope of the universe. I am the answer to all living things that cry out for peace!", img: "img/goku.jpg" },
    gojo: { name: "Satoru Gojo", quote: "Throughout heaven and earth, I alone am the honored one.", img: "img/gojo.jpg" },
    ichigo: { name: "Ichigo Kurosaki", quote: "If I don't wield the sword, I can't protect you. If I keep wielding the sword, I can't embrace you.", img: "img/ichigo.jpg" },
    edward: { name: "Edward Elric", quote: "A lesson without pain is meaningless. That's because you cannot gain something without sacrificing something else.", img: "img/edward.jpg" },
    light: { name: "Light Yagami", quote: "I am justice! I protect the innocent and those who fear evil.", img: "img/light.jpg" },
    senku: { name: "Senku Ishigami", quote: "This is exhilarating! Science is the power to overcome any obstacle!", img: "img/senku.jpg" },
    tanjiro: { name: "Tanjiro Kamado", quote: "I will not let anyone else die! I will not let anyone else get hurt!", img: "img/tanjiro.jpg" },
    saitama: { name: "Saitama", quote: "I'm just a guy who's a hero for fun.", img: "img/saitama.jpg" },
    vegeta: { name: "Vegeta", quote: "I am the prince of all Saiyans! My pride is my strength!", img: "img/vegeta.jpg" },
    levi: { name: "Levi Ackerman", quote: "The only thing we're allowed to do is believe that we won't regret the choice we made.", img: "img/levi.jpg" },
    natsu: { name: "Natsu Dragneel", quote: "I'm all fired up! My magic is never giving up!", img: "img/natsu.jpg" },
    deku: { name: "Izuku Midoriya", quote: "Sometimes I do feel like I'm a failure. But that doesn't mean I'm gonna stop trying.", img: "img/deku.jpg" },
    yusuke: { name: "Yusuke Urameshi", quote: "I'd rather be a ghost with some balls than a living wimp!", img: "img/yusuke.jpg" },
    inuyasha: { name: "Inuyasha", quote: "I don't want to lose you. I don't want to go through that again.", img: "img/inuyasha.jpg" },
    kenshin: { name: "Kenshin Himura", quote: "The true strength of a sword is not in its ability to kill, but in its ability to protect.", img: "img/kenshin.jpg" },
    killua: { name: "Killua Zoldyck", quote: "I don't want to be a tool for others anymore. I want to choose for myself.", img: "img/killua.jpg" },
    asta: { name: "Asta", quote: "I'll become the Wizard King! No matter what it takes!", img: "img/asta.jpg" },
    rimuru: { name: "Rimuru Tempest", quote: "I want to create a world where everyone can laugh and live happily.", img: "img/rimuru.jpg" },
    mob: { name: "Mob", quote: "If everyone is not special, maybe you can be what you want to be.", img: "img/mob.jpg" },
    shinji: { name: "Shinji Ikari", quote: "I mustn't run away. I mustn't run away.", img: "img/shinji.jpg" },
    kaneki: { name: "Ken Kaneki", quote: "It's better to be hurt than to hurt others. Nice people can be happy with just that.", img: "img/kaneki.jpg" },
    lelouch: { name: "Lelouch Lamperouge", quote: "The only ones who should kill are those prepared to be killed!", img: "img/lelouch.jpg" },
    meliodas: { name: "Meliodas", quote: "No matter how much someone hurts or betrays you, you never hurt them back.", img: "img/meliodas.jpg" },
    yuji: { name: "Yuji Itadori", quote: "I don't want to regret anything. I want to live the best life I can!", img: "img/yuji.jpg" },
    megumi: { name: "Megumi Fushiguro", quote: "I save only good people. That's my principle.", img: "img/megumi.jpg" },
    nobara: { name: "Nobara Kugisaki", quote: "I'm not here to be a woman. I'm here to be a sorcerer.", img: "img/nobara.jpg" },
    sukuna: { name: "Ryomen Sukuna", quote: "Know your place, fool.", img: "img/sukuna.jpg" },
    maki: { name: "Maki Zenin", quote: "I'm going to prove that even without cursed energy, I can be the strongest!", img: "img/maki.jpg" },
    sasuke: { name: "Sasuke Uchiha", quote: "I understand now. Even if I must take the devil’s path, I will gain power!", img: "img/sasuke.jpg" },
    sakura: { name: "Sakura Haruno", quote: "A smile is the easiest way out of a difficult situation.", img: "img/sakura.jpg" },
    kakashi: { name: "Kakashi Hatake", quote: "In the ninja world, those who break the rules are scum, but those who abandon their friends are worse than scum.", img: "img/kakashi.jpg" },
    itachi: { name: "Itachi Uchiha", quote: "Those who cannot acknowledge themselves will eventually fail.", img: "img/itachi.jpg" },
    shikamaru: { name: "Shikamaru Nara", quote: "Sometimes I wish I was a cloud... floating along, going wherever the breeze takes me.", img: "img/shikamaru.jpg" }

};

// Question pool (50 questions)
const questionPool = [
    {
        q: "What's your ideal way to spend a weekend?",
        options: [
            { text: "Training to become stronger", chars: ['goku', 'vegeta', 'deku'] },
            { text: "Hanging out with friends", chars: ['naruto', 'luffy', 'natsu'] },
            { text: "Reading or studying", chars: ['senku', 'light', 'edward'] },
            { text: "Relaxing at home", chars: ['saitama', 'mob', 'shinji'] }
        ]
    },
    {
        q: "Pick your fighting style:",
        options: [
            { text: "Raw power and determination", chars: ['goku', 'luffy', 'asta'] },
            { text: "Strategic and calculated", chars: ['light', 'lelouch', 'senku'] },
            { text: "Fast and precise", chars: ['levi', 'killua', 'kenshin'] },
            { text: "Magic and supernatural abilities", chars: ['gojo', 'rimuru', 'meliodas'] }
        ]
    },
    {
        q: "What motivates you the most?",
        options: [
            { text: "Protecting loved ones", chars: ['tanjiro', 'ichigo', 'inuyasha'] },
            { text: "Achieving your dreams", chars: ['naruto', 'luffy', 'deku'] },
            { text: "Justice and doing what's right", chars: ['light', 'yusuke', 'kenshin'] },
            { text: "Knowledge and understanding", chars: ['senku', 'edward', 'kaneki'] }
        ]
    },
    {
        q: "Your biggest fear is:",
        options: [
            { text: "Losing people you care about", chars: ['tanjiro', 'ichigo', 'kaneki'] },
            { text: "Not being strong enough", chars: ['deku', 'asta', 'vegeta'] },
            { text: "Being alone", chars: ['naruto', 'shinji', 'mob'] },
            { text: "Losing control", chars: ['kaneki', 'inuyasha', 'meliodas'] }
        ]
    },
    {
        q: "Pick a superpower:",
        options: [
            { text: "Super strength", chars: ['goku', 'saitama', 'luffy'] },
            { text: "Time manipulation", chars: ['gojo', 'light', 'rimuru'] },
            { text: "Elemental control", chars: ['natsu', 'edward', 'tanjiro'] },
            { text: "Mind reading", chars: ['light', 'lelouch', 'mob'] }
        ]
    },
    {
        q: "Your leadership style:",
        options: [
            { text: "Lead by example", chars: ['luffy', 'naruto', 'tanjiro'] },
            { text: "Strategic mastermind", chars: ['light', 'lelouch', 'senku'] },
            { text: "Supportive and caring", chars: ['deku', 'rimuru', 'kenshin'] },
            { text: "Independent loner", chars: ['levi', 'killua', 'saitama'] }
        ]
    },
    {
        q: "How do you handle failure?",
        options: [
            { text: "Never give up, try harder", chars: ['naruto', 'asta', 'deku'] },
            { text: "Analyze and learn from mistakes", chars: ['senku', 'edward', 'light'] },
            { text: "Accept it and move on", chars: ['saitama', 'mob', 'kenshin'] },
            { text: "Get angry and train harder", chars: ['vegeta', 'natsu', 'yusuke'] }
        ]
    },
    {
        q: "Your ideal meal:",
        options: [
            { text: "Ramen or comfort food", chars: ['naruto', 'luffy', 'goku'] },
            { text: "Simple and healthy", chars: ['saitama', 'tanjiro', 'kenshin'] },
            { text: "Gourmet and sophisticated", chars: ['gojo', 'light', 'rimuru'] },
            { text: "Anything edible", chars: ['edward', 'senku', 'mob'] }
        ]
    },
    {
        q: "Pick a weapon:",
        options: [
            { text: "Sword", chars: ['ichigo', 'levi', 'kenshin'] },
            { text: "Magic/Powers", chars: ['gojo', 'natsu', 'asta'] },
            { text: "Martial arts", chars: ['goku', 'yusuke', 'meliodas'] },
            { text: "Intelligence", chars: ['light', 'senku', 'lelouch'] }
        ]
    },
    {
        q: "Your biggest strength:",
        options: [
            { text: "Determination", chars: ['naruto', 'deku', 'asta'] },
            { text: "Intelligence", chars: ['senku', 'light', 'edward'] },
            { text: "Compassion", chars: ['tanjiro', 'rimuru', 'kaneki'] },
            { text: "Power", chars: ['goku', 'saitama', 'gojo'] }
        ]
    },
    {
        q: "How do you make friends?",
        options: [
            { text: "Be loud and friendly", chars: ['naruto', 'luffy', 'natsu'] },
            { text: "Show them respect", chars: ['tanjiro', 'kenshin', 'deku'] },
            { text: "Prove your worth", chars: ['vegeta', 'levi', 'killua'] },
            { text: "Just be yourself", chars: ['mob', 'saitama', 'shinji'] }
        ]
    },
    {
        q: "Your worst enemy type:",
        options: [
            { text: "Someone who hurts innocents", chars: ['tanjiro', 'yusuke', 'kenshin'] },
            { text: "Someone stronger than you", chars: ['vegeta', 'goku', 'asta'] },
            { text: "Someone who betrays trust", chars: ['naruto', 'inuyasha', 'kaneki'] },
            { text: "Someone who's boring", chars: ['saitama', 'gojo', 'meliodas'] }
        ]
    },
    {
        q: "Pick a color that represents you:",
        options: [
            { text: "Orange/Yellow (Energy)", chars: ['naruto', 'goku', 'natsu'] },
            { text: "Blue/Black (Cool)", chars: ['ichigo', 'levi', 'killua'] },
            { text: "Red (Passion)", chars: ['luffy', 'yusuke', 'inuyasha'] },
            { text: "White/Purple (Mystery)", chars: ['gojo', 'light', 'rimuru'] }
        ]
    },
    {
        q: "Your ideal vacation:",
        options: [
            { text: "Adventure and exploration", chars: ['luffy', 'senku', 'inuyasha'] },
            { text: "Training retreat", chars: ['goku', 'tanjiro', 'levi'] },
            { text: "Quiet library or lab", chars: ['edward', 'light', 'mob'] },
            { text: "Party with friends", chars: ['naruto', 'natsu', 'yusuke'] }
        ]
    },
    {
        q: "How do you deal with bullies?",
        options: [
            { text: "Stand up and fight back", chars: ['yusuke', 'natsu', 'asta'] },
            { text: "Outsmart them", chars: ['senku', 'light', 'lelouch'] },
            { text: "Try to understand them", chars: ['tanjiro', 'rimuru', 'kaneki'] },
            { text: "Ignore them", chars: ['saitama', 'mob', 'shinji'] }
        ]
    },
    {
        q: "Your biggest weakness:",
        options: [
            { text: "Too trusting", chars: ['naruto', 'luffy', 'tanjiro'] },
            { text: "Overconfident", chars: ['vegeta', 'gojo', 'natsu'] },
            { text: "Self-doubt", chars: ['deku', 'shinji', 'mob'] },
            { text: "Obsessive", chars: ['light', 'edward', 'kaneki'] }
        ]
    },
    {
        q: "Pick a pet:",
        options: [
            { text: "Dragon", chars: ['natsu', 'meliodas', 'rimuru'] },
            { text: "Wolf", chars: ['inuyasha', 'levi', 'killua'] },
            { text: "Cat", chars: ['gojo', 'light', 'saitama'] },
            { text: "None, too much responsibility", chars: ['edward', 'senku', 'mob'] }
        ]
    },
    {
        q: "Your reaction to losing:",
        options: [
            { text: "Train harder next time", chars: ['goku', 'vegeta', 'deku'] },
            { text: "Analyze what went wrong", chars: ['senku', 'edward', 'light'] },
            { text: "Accept it gracefully", chars: ['kenshin', 'tanjiro', 'rimuru'] },
            { text: "Get frustrated", chars: ['naruto', 'asta', 'yusuke'] }
        ]
    },
    {
        q: "Pick a school subject:",
        options: [
            { text: "Physical Education", chars: ['goku', 'luffy', 'natsu'] },
            { text: "Science", chars: ['senku', 'edward', 'rimuru'] },
            { text: "History", chars: ['light', 'lelouch', 'kenshin'] },
            { text: "Art", chars: ['mob', 'shinji', 'kaneki'] }
        ]
    },
    {
        q: "Your ideal team role:",
        options: [
            { text: "The leader", chars: ['naruto', 'luffy', 'lelouch'] },
            { text: "The strategist", chars: ['light', 'senku', 'killua'] },
            { text: "The powerhouse", chars: ['goku', 'saitama', 'meliodas'] },
            { text: "The support", chars: ['deku', 'tanjiro', 'mob'] }
        ]
    },
    {
        q: "How do you show affection?",
        options: [
            { text: "Through actions", chars: ['levi', 'ichigo', 'kenshin'] },
            { text: "Loud declarations", chars: ['naruto', 'luffy', 'asta'] },
            { text: "Quiet gestures", chars: ['tanjiro', 'rimuru', 'mob'] },
            { text: "Teasing", chars: ['gojo', 'killua', 'meliodas'] }
        ]
    },
    {
        q: "Pick a life philosophy:",
        options: [
            { text: "Never give up", chars: ['naruto', 'deku', 'asta'] },
            { text: "Knowledge is power", chars: ['senku', 'edward', 'light'] },
            { text: "Protect the innocent", chars: ['tanjiro', 'ichigo', 'yusuke'] },
            { text: "Be yourself", chars: ['luffy', 'saitama', 'mob'] }
        ]
    },
    {
        q: "Your nightmare scenario:",
        options: [
            { text: "Being powerless to help", chars: ['deku', 'tanjiro', 'ichigo'] },
            { text: "Everyone leaving you", chars: ['naruto', 'shinji', 'kaneki'] },
            { text: "Losing your mind", chars: ['light', 'kaneki', 'lelouch'] },
            { text: "Endless boredom", chars: ['saitama', 'gojo', 'rimuru'] }
        ]
    },
    {
        q: "Pick a hobby:",
        options: [
            { text: "Sports/Training", chars: ['goku', 'vegeta', 'levi'] },
            { text: "Reading/Research", chars: ['senku', 'edward', 'light'] },
            { text: "Art/Music", chars: ['mob', 'shinji', 'kaneki'] },
            { text: "Adventure/Travel", chars: ['luffy', 'inuyasha', 'natsu'] }
        ]
    },
    {
        q: "Your greatest fear about the future:",
        options: [
            { text: "Not achieving your goals", chars: ['naruto', 'deku', 'asta'] },
            { text: "Losing loved ones", chars: ['tanjiro', 'ichigo', 'inuyasha'] },
            { text: "Making wrong choices", chars: ['light', 'lelouch', 'shinji'] },
            { text: "Being forgotten", chars: ['mob', 'kaneki', 'kenshin'] }
        ]
    },
    {
        q: "Pick your ideal environment:",
        options: [
            { text: "Bustling city", chars: ['light', 'gojo', 'yusuke'] },
            { text: "Peaceful countryside", chars: ['tanjiro', 'kenshin', 'rimuru'] },
            { text: "Mysterious forest", chars: ['inuyasha', 'senku', 'meliodas'] },
            { text: "High-tech lab", chars: ['edward', 'senku', 'mob'] }
        ]
    },
    {
        q: "How do you handle stress?",
        options: [
            { text: "Exercise it out", chars: ['goku', 'natsu', 'yusuke'] },
            { text: "Think it through", chars: ['senku', 'edward', 'light'] },
            { text: "Talk to friends", chars: ['naruto', 'luffy', 'deku'] },
            { text: "Bottle it up", chars: ['levi', 'kaneki', 'shinji'] }
        ]
    },
    {
        q: "Your ideal power source:",
        options: [
            { text: "Friendship and bonds", chars: ['naruto', 'luffy', 'natsu'] },
            { text: "Inner determination", chars: ['deku', 'asta', 'tanjiro'] },
            { text: "Knowledge and skill", chars: ['senku', 'edward', 'light'] },
            { text: "Raw natural talent", chars: ['goku', 'gojo', 'saitama'] }
        ]
    },
    {
        q: "Pick your communication style:",
        options: [
            { text: "Direct and honest", chars: ['luffy', 'yusuke', 'asta'] },
            { text: "Calm and measured", chars: ['tanjiro', 'kenshin', 'rimuru'] },
            { text: "Witty and sarcastic", chars: ['gojo', 'killua', 'levi'] },
            { text: "Quiet and thoughtful", chars: ['mob', 'shinji', 'kaneki'] }
        ]
    },
    {
        q: "Your biggest regret would be:",
        options: [
            { text: "Not protecting someone", chars: ['ichigo', 'tanjiro', 'inuyasha'] },
            { text: "Not trying hard enough", chars: ['naruto', 'deku', 'asta'] },
            { text: "Making the wrong choice", chars: ['light', 'lelouch', 'kaneki'] },
            { text: "Not being true to yourself", chars: ['mob', 'shinji', 'killua'] }
        ]
    }
    ,
{
    q: "What role do you play in a group project?",
    options: [
        { text: "Strategist and planner", chars: ['shikamaru', 'megumi', 'kakashi'] },
        { text: "Action-oriented doer", chars: ['yuji', 'maki', 'sasuke'] },
        { text: "Team cheerleader", chars: ['naruto', 'nobara', 'sakura'] },
        { text: "Prefer to work alone", chars: ['itachi', 'sukuna', 'levi'] }
    ]
},
{
    q: "Choose your preferred combat tactic:",
    options: [
        { text: "Brute force and instinct", chars: ['yuji', 'goku', 'saitama'] },
        { text: "Precision and control", chars: ['megumi', 'levi', 'itachi'] },
        { text: "Speed and surprise", chars: ['killua', 'nobara', 'kakashi'] },
        { text: "Cursed energy mastery", chars: ['gojo', 'maki', 'sukuna'] }
    ]
},
{
    q: "What frustrates you most?",
    options: [
        { text: "Being underestimated", chars: ['maki', 'sakura', 'deku'] },
        { text: "People who waste time", chars: ['shikamaru', 'sasuke', 'levi'] },
        { text: "Losing control of a situation", chars: ['itachi', 'light', 'lelouch'] },
        { text: "Dishonesty", chars: ['tanjiro', 'kakashi', 'rimuru'] }
    ]
},
{
    q: "Your battle catchphrase:",
    options: [
        { text: "Bring it on!", chars: ['yuji', 'goku', 'natsu'] },
        { text: "I’ll handle this logically.", chars: ['shikamaru', 'megumi', 'senku'] },
        { text: "I fight for my friends!", chars: ['sakura', 'tanjiro', 'naruto'] },
        { text: "You should run.", chars: ['sukuna', 'levi', 'itachi'] }
    ]
},
{
    q: "What defines a hero to you?",
    options: [
        { text: "Someone who sacrifices everything", chars: ['yuji', 'itachi', 'goku'] },
        { text: "Someone who supports others", chars: ['sakura', 'kakashi', 'deku'] },
        { text: "Someone who stays true to their beliefs", chars: ['tanjiro', 'megumi', 'rimuru'] },
        { text: "Someone with unmatched power", chars: ['gojo', 'sukuna', 'saitama'] }
    ]
},
{
    q: "Choose a snack:",
    options: [
        { text: "Rice balls", chars: ['megumi', 'tanjiro', 'edward'] },
        { text: "Spicy noodles", chars: ['yuji', 'nobara', 'goku'] },
        { text: "Something sweet", chars: ['sakura', 'mob', 'shinji'] },
        { text: "Don’t care, food is food", chars: ['sukuna', 'levi', 'killua'] }
    ]
},
{
    q: "Pick a Jujutsu Kaisen vibe:",
    options: [
        { text: "Righteous hero", chars: ['yuji', 'megumi', 'maki'] },
        { text: "Cold and powerful", chars: ['sukuna', 'itachi', 'gojo'] },
        { text: "Energetic and stylish", chars: ['nobara', 'sakura', 'naruto'] },
        { text: "Silent but deadly", chars: ['sasuke', 'shikamaru', 'levi'] }
    ]
},
{
    q: "What would you do in a zombie apocalypse?",
    options: [
        { text: "Take the lead and organize", chars: ['shikamaru', 'kakashi', 'megumi'] },
        { text: "Rush in and fight", chars: ['yuji', 'nobara', 'goku'] },
        { text: "Protect the weak", chars: ['sakura', 'tanjiro', 'deku'] },
        { text: "Go solo", chars: ['sukuna', 'itachi', 'sasuke'] }
    ]
},
{
    q: "Which describes your school life?",
    options: [
        { text: "Top of the class", chars: ['kakashi', 'senku', 'megumi'] },
        { text: "Silent observer", chars: ['shikamaru', 'itachi', 'mob'] },
        { text: "Popular and friendly", chars: ['nobara', 'yuji', 'luffy'] },
        { text: "Too cool to care", chars: ['sukuna', 'gojo', 'killua'] }
    ]
},
{
    q: "How do you express anger?",
    options: [
        { text: "Yell and punch something", chars: ['yuji', 'nobara', 'goku'] },
        { text: "Walk away quietly", chars: ['sasuke', 'itachi', 'shikamaru'] },
        { text: "Cry in private", chars: ['sakura', 'mob', 'kaneki'] },
        { text: "Use it to fuel yourself", chars: ['maki', 'deku', 'vegeta'] }
    ]
}
,
{
    q: "Pick a cursed technique you'd love to master:",
    options: [
        { text: "Domain Expansion", chars: ['gojo', 'sukuna', 'itachi'] },
        { text: "Weapon-based fighting", chars: ['maki', 'levi', 'kakashi'] },
        { text: "Energy manipulation", chars: ['megumi', 'yuji', 'sasuke'] },
        { text: "Trap-based or defensive", chars: ['shikamaru', 'mob', 'light'] }
    ]
},
{
    q: "What's your ultimate weakness?",
    options: [
        { text: "Overconfidence", chars: ['gojo', 'sukuna', 'goku'] },
        { text: "Caring too much", chars: ['yuji', 'sakura', 'deku'] },
        { text: "Fear of failure", chars: ['megumi', 'itachi', 'mob'] },
        { text: "Avoiding emotions", chars: ['sasuke', 'levi', 'shikamaru'] }
    ]
},
{
    q: "Pick a famous anime symbol:",
    options: [
        { text: "Hidden Leaf", chars: ['naruto', 'kakashi', 'sakura'] },
        { text: "Straw Hat", chars: ['luffy', 'zoro', 'nami'] },
        { text: "UA Logo", chars: ['deku', 'bakugo', 'todoroki'] },
        { text: "Jujutsu Tech", chars: ['yuji', 'gojo', 'nobara'] }
    ]
},
{
    q: "Which emotion drives your power?",
    options: [
        { text: "Hope", chars: ['tanjiro', 'deku', 'yuji'] },
        { text: "Wrath", chars: ['sukuna', 'bakugo', 'vegeta'] },
        { text: "Sadness", chars: ['itachi', 'mob', 'sasuke'] },
        { text: "Calm clarity", chars: ['shikamaru', 'megumi', 'levi'] }
    ]
},
{
    q: "Choose your anime fashion style:",
    options: [
        { text: "Casual and athletic", chars: ['yuji', 'naruto', 'tanjiro'] },
        { text: "Edgy and dark", chars: ['sasuke', 'sukuna', 'itachi'] },
        { text: "Elegant and clean", chars: ['gojo', 'kakashi', 'megumi'] },
        { text: "Tough and practical", chars: ['maki', 'levi', 'shikamaru'] }
    ]
},
{
    q: "Your biggest strength in battle is:",
    options: [
        { text: "Raw strength", chars: ['goku', 'yuji', 'saitama'] },
        { text: "Cool-headed tactics", chars: ['shikamaru', 'megumi', 'kakashi'] },
        { text: "Speed and reflexes", chars: ['levi', 'killua', 'sasuke'] },
        { text: "Versatility", chars: ['itachi', 'gojo', 'sukuna'] }
    ]
},
{
    q: "Pick a cursed tool:",
    options: [
        { text: "Sword", chars: ['itachi', 'sasuke', 'zoro'] },
        { text: "Hammer/Nails", chars: ['nobara', 'maki', 'megumi'] },
        { text: "Scrolls and seals", chars: ['kakashi', 'shikamaru', 'gojo'] },
        { text: "Your bare fists", chars: ['yuji', 'saitama', 'goku'] }
    ]
},
{
    q: "Which word resonates with you most?",
    options: [
        { text: "Resilience", chars: ['maki', 'deku', 'yuji'] },
        { text: "Loneliness", chars: ['sasuke', 'sukuna', 'mob'] },
        { text: "Brilliance", chars: ['kakashi', 'shikamaru', 'itachi'] },
        { text: "Kindness", chars: ['sakura', 'tanjiro', 'hinata'] }
    ]
},
{
    q: "Your ideal power-up moment?",
    options: [
        { text: "Fighting for friends", chars: ['yuji', 'naruto', 'sakura'] },
        { text: "Rising from a past loss", chars: ['sasuke', 'itachi', 'maki'] },
        { text: "Surpassing your mentor", chars: ['deku', 'megumi', 'bakugo'] },
        { text: "Avenging a wrong", chars: ['levi', 'sukuna', 'light'] }
    ]
},
{
    q: "How do you feel about your enemies?",
    options: [
        { text: "I pity them", chars: ['tanjiro', 'yuji', 'itachi'] },
        { text: "They chose their path", chars: ['shikamaru', 'megumi', 'gojo'] },
        { text: "I despise them", chars: ['sasuke', 'sukuna', 'light'] },
        { text: "I try to save them", chars: ['sakura', 'deku', 'mob'] }
    ]
}

];

// Easter egg characters (rare combinations)
const easterEggs = {
    'boring_combo': { name: "Saitama's Grocery List", quote: "Udon... Cabbage... Sale at the supermarket...", img: "img/easter_egg.jpg" },
    'evil_combo': { name: "The Shadow Hokage", quote: "In darkness, I am... still probably Naruto.", img: "img/easter_egg.jpg" }
};

// Game state variables
let currentQuestions = [];
let currentQuestionIndex = 0;
let selectedAnswers = [];
let characterScores = {};
let currentResult = null;

// Initialize character scores
Object.keys(characters).forEach(char => {
    characterScores[char] = 0;
});

// Initialize attempts counter
function updateAttemptCounter() {
    const attempts = localStorage.getItem('quizAttempts') || 0;
    document.getElementById('attemptCount').textContent = attempts;
}

// Start quiz function
function startQuiz() {
    // Reset scores
    Object.keys(characterScores).forEach(char => {
        characterScores[char] = 0;
    });
    
    // Select 7 random questions
    currentQuestions = [...questionPool].sort(() => Math.random() - 0.5).slice(0, 7);
    currentQuestionIndex = 0;
    selectedAnswers = [];
    
    // Show quiz screen
    document.getElementById('startScreen').style.display = 'none';
    document.getElementById('quizScreen').style.display = 'block';
    
    displayQuestion();
}

// Display current question
function displayQuestion() {
    const question = currentQuestions[currentQuestionIndex];
    document.getElementById('currentQ').textContent = currentQuestionIndex + 1;
    document.getElementById('questionText').textContent = question.q;
    
    const optionsContainer = document.getElementById('optionsContainer');
    optionsContainer.innerHTML = '';
    
    question.options.forEach((option, index) => {
        const optionDiv = document.createElement('div');
        optionDiv.className = 'option';
        optionDiv.textContent = option.text;
        optionDiv.onclick = () => selectOption(index, optionDiv);
        optionsContainer.appendChild(optionDiv);
    });
    
    document.getElementById('nextBtn').disabled = true;
}

// Select option
function selectOption(index, element) {
    // Remove previous selection
    document.querySelectorAll('.option').forEach(opt => opt.classList.remove('selected'));
    
    // Add selection to current option
    element.classList.add('selected');
    
    // Store answer
    selectedAnswers[currentQuestionIndex] = index;
    
    // Enable next button
    document.getElementById('nextBtn').disabled = false;
}

// Next question
function nextQuestion() {
    // Add scores for selected answer
    const selectedIndex = selectedAnswers[currentQuestionIndex];
    const selectedOption = currentQuestions[currentQuestionIndex].options[selectedIndex];
    
    selectedOption.chars.forEach(char => {
        characterScores[char]++;
    });
    
    currentQuestionIndex++;
    
    if (currentQuestionIndex < currentQuestions.length) {
        displayQuestion();
    } else {
        finishQuiz();
    }
}

// Finish quiz and show result
function finishQuiz() {
    // Show loading screen
    document.getElementById('quizScreen').style.display = 'none';
    document.getElementById('loadingScreen').style.display = 'block';

    // Show result after 2 seconds
    setTimeout(() => {
        showResult();
    }, 2000);
}

// Show result
function showResult() {
    // Find character with highest score
    let maxScore = 0;
    let resultCharacter = 'naruto'; // default
    
    Object.keys(characterScores).forEach(char => {
        if (characterScores[char] > maxScore) {
            maxScore = characterScores[char];
            resultCharacter = char;
        }
    });

    // Check for easter eggs
    const totalAnswers = selectedAnswers.length;
    const saitamaAnswers = characterScores['saitama'];
    
    if (saitamaAnswers >= 5) {
        currentResult = easterEggs['boring_combo'];
    } else if (characterScores['light'] >= 4 && characterScores['lelouch'] >= 2) {
        currentResult = easterEggs['evil_combo'];
    } else {
        currentResult = characters[resultCharacter];
    }
    
    // Display result
    document.getElementById('characterImg').src = currentResult.img;
    document.getElementById('characterImg').onerror = function() {
        this.src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgdmlld0JveD0iMCAwIDIwMCAyMDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSIyMDAiIGhlaWdodD0iMjAwIiBmaWxsPSIjMzMzIi8+Cjx0ZXh0IHg9IjEwMCIgeT0iMTA1IiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBmaWxsPSIjZmZmIiBmb250LWZhbWlseT0iQXJpYWwiIGZvbnQtc2l6ZT0iMTQiPkFuaW1lIENoYXJhY3RlcjwvdGV4dD4KPC9zdmc+';
    };
    document.getElementById('characterName').textContent = currentResult.name;
    document.getElementById('characterQuote').textContent = `"${currentResult.quote}"`;
    
    // Update attempts counter
    const attempts = parseInt(localStorage.getItem('quizAttempts') || 0) + 1;
    localStorage.setItem('quizAttempts', attempts);
    updateAttemptCounter();
    
    // Play sound effect
    playResultSound();
    
    // Show result screen
    document.getElementById('loadingScreen').style.display = 'none';
    document.getElementById('resultScreen').style.display = 'block';
}

// Play result sound effect
function playResultSound() {
    // Create audio context and play a simple beep
    try {
        const audioContext = new (window.AudioContext || window.webkitAudioContext)();
        const oscillator = audioContext.createOscillator();
        const gainNode = audioContext.createGain();
        
        oscillator.connect(gainNode);
        gainNode.connect(audioContext.destination);
        
        oscillator.frequency.setValueAtTime(800, audioContext.currentTime);
        oscillator.frequency.exponentialRampToValueAtTime(400, audioContext.currentTime + 0.5);
        
        gainNode.gain.setValueAtTime(0.3, audioContext.currentTime);
        gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.5);
        
        oscillator.start(audioContext.currentTime);
        oscillator.stop(audioContext.currentTime + 0.5);
    } catch (e) {
        console.log('Audio not supported');
    }
}

// Share functions
function shareOnTwitter() {
    const text = `I got ${currentResult.name} in the Anime Personality Quiz! 🎌 ${currentResult.quote}`;
    const url = `https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}&url=${encodeURIComponent(window.location.href)}`;
    window.open(url, '_blank');
}

function shareOnWhatsApp() {
    const text = `I got ${currentResult.name} in the Anime Personality Quiz! 🎌 "${currentResult.quote}" - Try it yourself: ${window.location.href}`;
    const url = `https://wa.me/?text=${encodeURIComponent(text)}`;
    window.open(url, '_blank');
}

function shareOnFacebook() {
    const url = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(window.location.href)}`;
    window.open(url, '_blank');
}

function shareOnInstagram() {
    // Instagram doesn't have direct sharing API, so we copy the text
    const text = `I got ${currentResult.name} in the Anime Personality Quiz! 🎌 "${currentResult.quote}"`;
    navigator.clipboard.writeText(text).then(() => {
        alert('Result copied! Open Instagram and paste in your story or post.');
    });
}

function copyLink() {
    navigator.clipboard.writeText(window.location.href).then(() => {
        alert('Link copied to clipboard!');
    });
}

// Retake quiz
function retakeQuiz() {
    document.getElementById('resultScreen').style.display = 'none';
    document.getElementById('startScreen').style.display = 'block';
}

// Initialize app
document.addEventListener('DOMContentLoaded', () => {
    updateAttemptCounter();
});
