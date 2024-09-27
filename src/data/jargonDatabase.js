const jargonDatabase = [
    {
            term: "Activities of Daily Living (ADL)",
            plainEnglish: "The basic tasks that keep you from looking like a caveman who just discovered fire. Think eating, dressing, and personal hygiene.",
            example: "After breaking both arms, Jim needed help with his ADLs. Suddenly, his roommate became his personal stylist, chef, and toothbrush operator. Talk about friendship goals!"
        },
        {
            term: "Acute Care",
            plainEnglish: "The medical equivalent of putting out fires. It's short-term, intense care for when your body decides to throw a tantrum.",
            example: "After trying to prove he could still do a backflip at 40, Tom's weekend plans changed from 'Netflix and chill' to 'ER and bills.' Acute care: turning 'hold my beer' moments into medical adventures."
        },
        {
            term: "Ambulatory Care",
            plainEnglish: "The drive-thru of healthcare. You're in, you're out, and you didn't even have to change into a gown.",
            example: "Sarah's ambulatory care visit was so quick, she made it back to work before her boss noticed she was gone. Efficiency: 1, Sick Day: 0."
        },
        {
            term: "Adverse Selection",
            plainEnglish: "When a health plan accidentally becomes the cool kids' table for people with lots of medical needs. It's like hosting a free all-you-can-eat buffet and wondering why only competitive eaters showed up.",
            example: "The 'Unbreakable Bones' insurance plan sounded great until they realized they'd attracted every stuntperson in Hollywood. Suddenly, their actuaries needed therapy."
        },
        {
            term: "AHRQ (Agency for Healthcare Research and Quality)",
            plainEnglish: "The healthcare world's mythbusters. They're the folks who prove that, yes, washing your hands actually does help, and no, you can't cure a cold by standing on your head.",
            example: "Thanks to AHRQ research, hospitals learned that patients heal faster when they're not sharing rooms with a mariachi band. Who knew?"
        },
        {
            term: "Association Health Plan (AHP)",
            plainEnglish: "When businesses join forces like a healthcare Avengers team to get better insurance deals. It's strength in numbers, but for doctor visits instead of superhero battles.",
            example: "The local knitting club and skydiving association teamed up for an AHP. Now they've got coverage for everything from needle pricks to parachute malfunctions. Talk about a diverse risk pool!"
        },
        {
            term: "Authorizing Committee",
            plainEnglish: "The Congress folks who decide which healthcare ideas get the green light. They're like the bouncers at the club of medical legislation.",
            example: "The Senate Health Committee reviewed a bill on free ice cream for dental patients. Surprisingly, four out of five dentists did not recommend passing it."
        },
        {
            term: "Balance Billing",
            plainEnglish: "When your medical bill comes with a surprise ending, like a thriller movie but less entertaining and more expensive.",
            example: "Jack thought his hospital stay was covered, but balance billing hit him like a post-credits scene in a Marvel movie. Except instead of teasing the next superhero, it was teasing his next paycheck."
        },
        {
            term: "Block Grant",
            plainEnglish: "The government's way of saying, 'Here's a pile of cash for healthcare, but we've got some ground rules.' It's like getting an allowance from your parents, but for entire states.",
            example: "The state got a block grant for mental health services. Finally, a budget that acknowledges that everyone loses it a little during tax season."
        },
        {
            term: "Bundling",
            plainEnglish: "Healthcare's version of a combo meal. Instead of fries and a drink, you get a surgeon, anesthesiologist, and a stylish hospital gown, all for one low price!",
            example: "The hospital bundled John's knee surgery services. It's like getting a Netflix subscription, but instead of binge-watching shows, you're binge-recovering."
        },
        {
            term: "Byrd Rule",
            plainEnglish: "The Congressional equivalent of 'stay on topic!' It keeps budget bills from turning into wish lists for random pet projects.",
            example: "A senator tried to sneak funding for a 'National Funny Walk Day' into a healthcare bill, but the Byrd Rule swooped in like a fun-policing eagle."
        },
        {
            term: "Cafeteria Plan",
            plainEnglish: "An employee benefits buffet where you can load up your tray with the perks you actually want. It's like customizing your healthcare avatar.",
            example: "With her company's cafeteria plan, Lisa maxed out her dental coverage. Apparently, her New Year's resolution was to blind people with her smile."
        },
        {
            term: "Capitation",
            plainEnglish: "When doctors get paid a flat fee per patient, regardless of how often they visit. It's like an all-you-can-treat buffet, where the doctor hopes you're not too hungry.",
            example: "Dr. Jones switched to capitation payments and suddenly found himself hoping his patients would take up extreme knitting instead of extreme sports."
        },
        {
            term: "Caregiver",
            plainEnglish: "The unsung heroes who make sure you don't turn into a human burrito when you're sick. They're part nurse, part chef, and part magician.",
            example: "After Bob's surgery, his wife became his caregiver. She mastered the art of opening childproof pill bottles while simultaneously preventing Bob from ordering pizza for the fifth time that week."
        },
        {
            term: "Catastrophic Health Insurance",
            plainEnglish: "The 'In Case of Zombie Apocalypse, Break Glass' of health insurance plans. It's there for when things go really, really wrong.",
            example: "Jenny thought her catastrophic plan was useless until she tried to recreate a skateboard stunt from YouTube. Suddenly, it became her financial superhero."
        },
        {
            term: "Categorical Eligibility",
            plainEnglish: "The VIP list for certain government programs. If you're in the club (like being a kid or pregnant), you get automatic entry to the benefits party.",
            example: "Being pregnant gave Sarah categorical eligibility for Medicaid. It's like getting a fast pass at an amusement park, but instead of skipping lines for rides, you're skipping paperwork for healthcare."
        },
        {
            term: "Centers for Disease Control and Prevention (CDC)",
            plainEnglish: "The real-life Avengers of the health world. They fight diseases, not aliens, and their superpowers include data analysis and really stern hygiene recommendations.",
            example: "The CDC released guidelines on how to safely hug during flu season. Spoiler alert: It involves a lot of hand sanitizer and awkward elbow bumps."
        },
        {
            term: "Centers for Medicare and Medicaid Services (CMS)",
            plainEnglish: "The wizard behind the curtain of Medicare and Medicaid. They make sure Grandma's healthcare doesn't break the national piggy bank.",
            example: "CMS introduced a new policy to improve nursing home care. Their slogan: 'Making sure Grandpa's bingo nights are both fun AND safe!'"
        },
        {
            term: "Children's Health Insurance Program (CHIP)",
            plainEnglish: "Healthcare's way of saying 'kids eat free.' It's insurance for children whose parents make too much for Medicaid but not enough for private coverage.",
            example: "Thanks to CHIP, little Timmy got his annual check-up and a lollipop. The doctor confirmed he's growing like a weed – much to his parents' chagrin as they eye his too-short pants."
        },
        {
            term: "Chronic Care",
            plainEnglish: "The marathon runner of healthcare. It's for conditions that stick around longer than your in-laws during the holidays.",
            example: "Bob's chronic care for diabetes means he's on a first-name basis with his doctor, nurse, and the vending machine in the clinic's waiting room."
        },
        {
            term: "Community-Based Services",
            plainEnglish: "Bringing healthcare to the people, like a really un-fun ice cream truck. It helps folks stay in their homes instead of moving to care facilities.",
            example: "Thanks to community-based services, Mrs. Johnson gets meals delivered and help with housework. It's like having a fairy godmother, but instead of going to the ball, you get to stay in your favorite armchair."
        },
        {
            term: "Community Health Center",
            plainEnglish: "The Robin Hood of healthcare. These clinics provide care to everyone, regardless of their ability to pay or their skill at hide-and-seek with insurance companies.",
            example: "The local community health center treated both the millionaire with a papercut and the starving artist with the flu. Equal opportunity healing, now with a side of social justice!"
        },
        {
            term: "Community Rating",
            plainEnglish: "The 'one-size-fits-all' approach to health insurance pricing. Whether you're a yoga instructor or a professional couch potato, you pay the same rate.",
            example: "Thanks to community rating, Jim the gym rat and Doughnut Dan paid the same for health insurance. Dan considered it a win, while Jim muttered something about 'lifestyle choices' between bicep curls."
        },
        {
            term: "Comparative Effectiveness",
            plainEnglish: "The scientific way of asking, 'Which treatment gives you the most bang for your buck?' It's like comparing dish soaps, but instead of clean plates, you get healthy humans.",
            example: "A comparative effectiveness study found that laughter is just as effective as expensive medication for treating minor ailments. Clown doctors, your time has come!"
        },
        {
            term: "COBRA (Consolidated Omnibus Budget Reconciliation Act)",
            plainEnglish: "The zombie of health insurance – it lets your coverage live on after you leave your job. But beware, it bites... your wallet.",
            example: "After quitting his job to become a professional dog walker, Tim kept his insurance through COBRA. His bank account howled in pain every month, but at least he was covered for all those inevitable puppy-related injuries."
        },
        {
            term: "Consumer-Directed Health Plans",
            plainEnglish: "The 'Choose Your Own Adventure' of health insurance. High deductible meets savings account, and you're the captain now.",
            example: "Sarah chose a consumer-directed health plan and suddenly found herself comparing prices for x-rays like she was shopping for shoes online. 'Does this fracture make my wallet look fat?'"
        },
        {
            term: "Continuum of Care",
            plainEnglish: "The circle of healthcare life. From cradle to grave, it's all the services you might need, conveniently arranged in a 'you are here' map of medical necessity.",
            example: "Tom's continuum of care started with a pediatrician who gave him lollipops, progressed to a doctor who told him to eat less candy, and ended with a geriatrician who prescribed sugar pills. Life comes full circle!"
        },
        {
            term: "Coinsurance",
            plainEnglish: "The 'I'll split it with you' of medical bills. After you've paid your deductible, you and your insurance play a game of percentage tag with the remaining costs.",
            example: "With 20% coinsurance, Jake paid $20 for his $100 doctor visit. He considered it a win until he realized that's still more expensive than his monthly Netflix subscription."
        },
        {
            term: "Copayment",
            plainEnglish: "The cover charge for the healthcare club. It's a flat fee that says, 'I'm willing to pay a little to prove I'm not here just for the free tongue depressors.'",
            example: "Jenny's $30 copay for therapy sessions seemed reasonable until she realized it was cutting into her 'treat yourself' ice cream budget. Mental health or rocky road? Decisions, decisions."
        },
        {
            term: "Cost-Sharing",
            plainEnglish: "The 'everyone chips in' approach to healthcare costs. It's like a potluck, but instead of casseroles, you're bringing cash for medical bills.",
            example: "Under his cost-sharing plan, Mike's insurance covered 80% of his hospital stay, while he covered 20%. He briefly considered sending his appendix a bill for causing all this trouble."
        },
        {
            term: "Cost-Shifting",
            plainEnglish: "The healthcare shell game where providers charge one group more to make up for losses from another. It's like when your friend orders the lobster at dinner and everyone's bill mysteriously goes up.",
            example: "The hospital's cost-shifting meant that Dave's aspirin cost $50. He briefly considered becoming a pharmacist, figuring that's where the real money is."
        },
        {
            term: "Deductible",
            plainEnglish: "The 'you must be this tall to ride' sign of health insurance. It's how much you pay before your insurance company joins the party.",
            example: "After meeting her $1000 deductible, Sarah considered framing the receipt. 'I'd like to thank my clumsy nature and this much coffee for making this moment possible,' she said, raising her hospital mug."
        },
        {
            term: "Defined Benefit",
            plainEnglish: "A health plan that's like an all-inclusive resort. You know exactly what you're getting, and there are no surprises (except maybe the quality of the entertainment).",
            example: "Tom's defined benefit plan covered his yearly check-up, vaccinations, and a complimentary 'I Survived Flu Season' t-shirt. He was disappointed it didn't include spa treatments."
        },
        {
            term: "Defined Contribution",
            plainEnglish: "When your employer hands you a healthcare allowance and says, 'Go forth and insure thyself!' It's like getting a gift card, but for doctor visits instead of lattes.",
            example: "With her defined contribution, Amy spent hours comparing health plans. 'I never thought I'd miss the days when my biggest decision was paper or plastic,' she sighed."
        },
        {
            term: "Diagnosis Related Group (DRG)",
            plainEnglish: "The hospital's way of saying, 'This is what we charge for your particular flavor of illness.' It's like a menu, but instead of combo meals, you get standardized prices for your ailment.",
            example: "John's pneumonia fell under a specific DRG. He wondered if he could upgrade to the 'deluxe pneumonia package' for better Jell-O flavors, but alas, that's not how it works."
        },
        {
            term: "Discretionary Spending",
            plainEnglish: "The government's 'fun money' for healthcare. It's like when you've paid all your bills and get to decide between a new video game or fancy cheese – except it's Congress choosing between research grants or new hospital equipment.",
            example: "Congress increased discretionary spending on healthcare, prompting researchers to frantically dust off their 'cure for everything' proposals. Time to make it rain in the lab!"
        },
        {
            term: "Doughnut Hole",
            plainEnglish: "Medicare's cruel joke where drug coverage takes a coffee break. It's the 'awkward middle child' of prescription benefits – not fully covered, not fully your problem.",
            example: "Edna hit the doughnut hole in her Medicare drug coverage. 'Finally, a doughnut that's not sweet,' she grumbled while reaching for her wallet."
        },
        {
            term: "Dual Eligible",
            plainEnglish: "When you're such a healthcare VIP that you qualify for both Medicare and Medicaid. It's like having an all-access pass to the world's least exciting theme park.",
            example: "Grandpa Joe became dual eligible and couldn't decide whether to celebrate with prune juice or ensure. 'Why not both?' he chuckled, living his best life."
        },
        {
            term: "Electronic Medical Record (EMR)",
            plainEnglish: "Your medical history's journey from illegible doctor scribbles to clickable computer files. It's like your body's own Wikipedia page, but hopefully more accurate.",
            example: "Dr. Smith pulled up Tom's EMR and discovered his childhood allergy to homework. 'Fascinating,' she muttered, 'but not relevant to your current sprained ankle.'"
        },
        {
            term: "Employee Retirement Income Security Act (ERISA)",
            plainEnglish: "The law that ensures your work benefits aren't just a figment of HR's imagination. It's like a superhero for your retirement and health plans, minus the cool costume.",
            example: "Thanks to ERISA, Jane's health benefits were protected when her company decided to pivot from tech start-up to artisanal pickle making. Her 401(k) might be in brine, but at least she has insurance!"
        },
        {
            term: "Employer Mandate",
            plainEnglish: "The government's way of saying, 'If you have enough employees to field a football team, you better offer them health insurance.' It's like being voluntold to host a healthcare potluck.",
            example: "When SmallCo hit 50 employees, the owner sighed, 'Great, now I have to learn about health insurance instead of finally mastering the office coffee machine.'"
        },
        {
            term: "Entitlement Spending",
            plainEnglish: "The government's promise to fund certain programs no matter what. It's like having an all-you-can-eat buffet ticket, but for things like Medicare and Social Security.",
            example: "Congress debated entitlement spending, trying to balance 'We promised grandma' with 'But have you seen the deficit?' Awkward family dinner conversations ensued nationwide."
        },
        {
            term: "Evidence-Based Medicine",
            plainEnglish: "Healthcare's 'show your work' policy. It's practicing medicine based on actual research instead of that one weird trick your uncle swears by.",
            example: "Dr. Johnson used evidence-based medicine to treat Jenny's cold, disappointing her hopes for a prescription of 'Netflix and chicken soup.'"
        },
        {
            term: "Federal Employees Health Benefits Program (FEHBP)",
            plainEnglish: "The Rolls-Royce of government perks. It's health insurance for federal employees that makes the rest of us wonder if we should have paid more attention in civics class.",
            example: "Tom joined the FEHBP and suddenly found himself with better healthcare options than the president he was working for. 'Is this what winning feels like?' he wondered."
        },
        {
            term: "Federal Medical Assistance Percentage (FMAP)",
            plainEnglish: "The federal government's way of saying, 'We'll chip in for Medicaid if you do.' It's like a nationwide version of splitting the check, but with billions of dollars.",
            example: "The state's FMAP increased, prompting the governor to declare, 'Healthcare happy hour! Federal government's buying!'"
        },
        {
            term: "Federally Qualified Health Center (FQHC)",
            plainEnglish: "A healthcare Robin Hood that provides care regardless of your ability to pay. It's where 'Take two and call me in the morning' meets 'Pay what you can.'",
            example: "The local FQHC treated everything from splinters to existential crises. Their motto: 'We'll heal you now and figure out the money later.'"
        },
        {
            term: "Fee-For-Service",
            plainEnglish: "The healthcare equivalent of ordering à la carte. Every Band-Aid, aspirin, and 'turn your head and cough' gets its own line on the bill.",
            example: "After his fee-for-service hospital stay, Bob received an itemized bill that included charges for 'emotional support' and 'putting up with terrible TV choices.'"
        },
        {
            term: "First-Dollar Coverage",
            plainEnglish: "Insurance that kicks in before you can say 'deductible.' It's like having a rich uncle who immediately offers to pay every time you reach for your wallet.",
            example: "With first-dollar coverage, Sarah's insurance started paying for her therapy sessions right away. 'Finally,' she thought, 'my mental breakdowns are fiscally responsible!'"
        },
        {
            term: "Flexible Spending Account (FSA)",
            plainEnglish: "The 'use it or lose it' casino of healthcare. You bet on how much you'll spend on medical expenses this year, and if you're wrong, the house (aka your employer) wins.",
            example: "Tom frantically bought 50 pairs of reading glasses in December to use up his FSA. 'I can see clearly now,' he sang, 'that I'm terrible at budgeting.'"
        },
        {
            term: "Formulary",
            plainEnglish: "The VIP list of drugs your insurance is willing to party with. If your medication isn't on it, prepare for a bouncer-level negotiation or a hefty cover charge.",
            example: "Jane's new medication wasn't on her insurance's formulary. 'Great,' she sighed, 'now I have to convince my doctor I need the generic version of 'Likealotofprin' instead.'"
        },
        {
            term: "Graduate Medical Education Payment",
            plainEnglish: "Uncle Sam's way of saying, 'Here's some cash to teach baby doctors.' It's like Hogwarts for medical students, but with more blood and less magic.",
            example: "The hospital received graduate medical education payments, promptly investing in a new coffee machine. 'Caffeinated residents are safe residents,' the dean justified."
        },
        {
            term: "Group Health Insurance",
            plainEnglish: "When your workplace decides to play matchmaker between you and health insurance. It's like a blind date, but instead of dinner and a movie, you get colonoscopies and flu shots.",
            example: "The startup offered group health insurance, causing employees to cheer, 'Finally, a benefit that isn't just free snacks and foosball!'"
        },
        {
            term: "Guaranteed Issue",
            plainEnglish: "The 'No Shirt, No Shoes, Still Get Service' policy of health insurance. They have to sell you a policy, even if you're a walking health disaster.",
            example: "Thanks to guaranteed issue, Bob got health insurance despite his hobby of juggling chainsaws. The insurance agent's eye twitch was barely noticeable."
        },
        {
            term: "Health Coverage Tax Credits",
            plainEnglish: "The government's way of saying, 'Here's a coupon for your health insurance.' It's like getting a rebate, but instead of a new toaster, you get the exciting gift of slightly more affordable healthcare.",
            example: "Jane qualified for health coverage tax credits. 'Woo-hoo!' she exclaimed, 'Now I can afford both health insurance AND ramen noodles this month!'"
        },
        {
            term: "Health Insurance Exchange",
            plainEnglish: "The Tinder of health insurance, where you can swipe right on the plan of your dreams (as long as your dreams involve copays and deductibles).",
            example: "Bob spent hours on the health insurance exchange, muttering, 'I never thought I'd miss the days when my biggest online decision was choosing a Netflix movie.'"
        },
        {
            term: "Health Insurance Portability and Accountability Act (HIPAA)",
            plainEnglish: "The bodyguard of your medical information. It keeps your embarrassing rashes and awkward infections from becoming water cooler gossip.",
            example: "Thanks to HIPAA, Sarah's coworkers never found out about her 'incident' with the office chair. Her secret fear of swivel seats remained safe and sound."
        },
        {
            term: "Health Maintenance Organization (HMO)",
            plainEnglish: "The helicopter parent of health insurance plans. It insists on knowing where you're going (which doctor) and who you're hanging out with (in-network providers only!).",
            example: "John's HMO required a referral to see a specialist. 'Great,' he grumbled, 'I need a doctor's permission slip to see another doctor. It's high school all over again.'"
        },
        {
            term: "Health Plan Employer Data and Information Set (HEDIS)",
            plainEnglish: "The report card for health insurance plans. It's how we know if they're doing a good job or if they need to stay after class for extra help.",
            example: "The insurance company bragged about their HEDIS scores. 'We're not just good at denying claims,' they boasted, 'we're also great at... other stuff!'"
        },
        {
            term: "Health Reimbursement Arrangement (HRA)",
            plainEnglish: "Your employer's way of saying, 'Here's some Monopoly money, but only for healthcare.' It's like a gift card that only works at the doctor's office.",
            example: "With her HRA, Sally felt like she was playing a weird game of healthcare bingo. 'Doctor visit? Covered. Prescription? Covered. Experimental unicorn therapy? Maybe next year.'"
        },
        {
            term: "Health Savings Account (HSA)",
            plainEnglish: "A piggy bank for medical expenses that the IRS actually approves of. It's like a 401(k), but instead of retiring to Florida, you're saving for your future colonoscopy.",
            example: "Tom maxed out his HSA contributions, proudly declaring, 'I'm adulting so hard right now. Future me is going to have the fanciest knee replacement money can buy!'"
        },
        {
            term: "High-Risk Pool",
            plainEnglish: "The health insurance equivalent of the 'cool kids' table,' but for people with serious medical conditions. It's where you go when regular insurance plans see your medical history and run screaming.",
            example: "Jim joined the high-risk pool after his regular insurance saw his medical history and fainted. 'Finally,' he thought, 'a place where my collection of rare diseases is appreciated!'"
        },
        {
            term: "HIMSS (Healthcare Information Management Systems Society)",
            plainEnglish: "The tech nerds of healthcare. They're the ones making sure your medical records don't get lost in the digital abyss or end up as someone's Twitter feed.",
            example: "At the HIMSS conference, excited IT professionals debated the sexiest new medical coding systems. 'ICD-11 is so hot right now,' whispered one attendee, adjusting his pocket protector."
        },
        {
            term: "Home Health Care",
            plainEnglish: "When the hospital comes to you. It's like Uber Eats, but instead of tacos, you get nurses and physical therapists delivered to your door.",
            example: "After her surgery, Lisa got home health care. 'It's great,' she said, 'but I wish they'd bring me a pizza along with my IV drip.'"
        },
        {
            term: "Hospice",
            plainEnglish: "The gentle landing pad at the end of life's flight. It's about making sure your final days are more 'comfy armchair' and less 'cold hospital room.'",
            example: "Grandpa Joe chose hospice care, declaring, 'If I'm checking out, I'm doing it with dignity and really good painkillers.'"
        },
        {
            term: "Hospital Insurance Trust Fund",
            plainEnglish: "Medicare's piggy bank for hospital bills. It's like a national swear jar, but instead of quarters for curse words, it's billions for bypasses.",
            example: "The Hospital Insurance Trust Fund was running low, prompting Congress to consider a national 'Don't Get Sick' day to save money."
        },
        {
            term: "Individual Insurance Market",
            plainEnglish: "The wild west of health insurance, where lone rangers buy their own coverage without the safety net of employer plans. It's like trying to find a date without a wingman.",
            example: "Sarah entered the individual insurance market and suddenly felt like she was on a really boring version of 'The Bachelor,' but with insurance plans instead of potential mates."
        },
        {
            term: "Individual Mandate",
            plainEnglish: "The government's way of saying, 'Get insurance or pay up.' It's like being forced to buy a ticket to a concert you're not sure you want to attend.",
            example: "Tom grumbled about the individual mandate: 'Great, now I have to choose between buying health insurance or paying a fine. Can I just take two aspirin and call the IRS in the morning?'"
        },
        {
            term: "Long-Term Care",
            plainEnglish: "For when 'getting better' turns into 'getting by.' It's the marathon of healthcare, complete with its own Gatorade stations (aka nurse check-ins).",
            example: "Grandma moved into long-term care, promptly declaring it 'Camp Geritol' and organizing a walker race down the hallway."
        },
        {
            term: "Managed Care Organization (MCO)",
            plainEnglish: "The traffic cop of healthcare. They direct where you can go, who you can see, and occasionally write you a ticket (deny a claim) if you break the rules.",
            example: "Jane's MCO denied her request to see a specialist. 'Apparently,' she sighed, 'my desire for a 'Doctorate of Cupcakes' isn't a valid medical specialty.'"
        },
        {
            term: "Means-Testing",
            plainEnglish: "The government's way of asking, 'How deep are your pockets?' before deciding how much help you get. It's like a financial strip search, but with less dignity.",
            example: "After means-testing, Bob qualified for assistance. 'Finally,' he cheered, 'being broke pays off!'"
        },
        {
            term: "Medicaid",
            plainEnglish: "The government's way of saying, 'If you're broke, we've got your back.' It's healthcare's safety net, catching those who fall through the cracks of private insurance.",
            example: "When Tim lost his job, Medicaid was there to catch him. 'It's like a healthcare hug from Uncle Sam,' he mused, 'awkward, but necessary.'"
        },
        {
            term: "Medicaid Waivers",
            plainEnglish: "The 'get out of jail free' card for states wanting to experiment with Medicaid. It's like giving your teenager the car keys and saying, 'Try not to crash the healthcare system!'",
            example: "The state got a Medicaid waiver to try a new program. 'We're calling it 'Yoga for All,'' the governor announced. 'Downward dog is the new preventive care!'"
        },
        {
            term: "Medical Underwriting",
            plainEnglish: "When insurance companies play detective with your medical history. It's like a background check, but instead of your criminal record, they're looking for that time you sneezed in 2015.",
            example: "During medical underwriting, Sarah's childhood fear of broccoli was flagged as a pre-existing condition. 'But I eat my veggies now!' she protested."
        },
        {
            term: "Medical Home",
            plainEnglish: "The healthcare version of a one-stop-shop. It's like having a personal concierge for your health, minus the fancy uniform and tips.",
            example: "John's medical home coordinated all his care. 'It's great,' he said, 'but I was hoping for more of a 'home' feel. Where's my healthcare La-Z-Boy?'"
        },
        {
            term: "Medically Necessary",
            plainEnglish: "The healthcare equivalent of 'Mom said I have to.' It's when your doctor declares a treatment essential, not just a fancy medical luxury.",
            example: "The insurance company finally agreed Jake's 'Netflix and chill' prescription wasn't medically necessary. 'But doc,' he protested, 'how else will I cure my severe case of FOMO?'"
        },
        {
            term: "Medicare",
            plainEnglish: "Uncle Sam's retirement gift to seniors. It's like a 65th birthday present, but instead of a gold watch, you get help paying for your gold-plated hip replacement.",
            example: "On her 65th birthday, Susan celebrated getting Medicare. 'Finally,' she exclaimed, 'a senior discount that doesn't involve early bird specials!'"
        },
        {
            term: "Medicare Advantage",
            plainEnglish: "Regular Medicare's cooler, slightly rebellious cousin. It's like ordering the combo meal but being allowed to swap fries for onion rings.",
            example: "Tom chose Medicare Advantage, excitedly telling his friends, 'It's like Medicare, but with jazz hands and a dental plan!'"
        },
        {
            term: "Medicare Prescription Drug, Improvement and Modernization Act of 2003",
            plainEnglish: "The government's way of saying, 'Oops, we forgot about prescription drugs in the original Medicare.' It's like realizing you left the fries out of the Happy Meal.",
            example: "Thanks to this Act, Grandpa Joe could finally afford his medications. 'It's about time,' he grumbled, 'I was this close to starting a seniors' drug cartel.'"
        },
        {
            term: "Medicare Supplemental Insurance (Medigap)",
            plainEnglish: "For when regular Medicare isn't enough to quench your thirst for coverage. It's like buying an extended warranty for your health insurance.",
            example: "Sally got Medigap to cover what Medicare doesn't. 'It's my security blanket,' she explained, 'but less cuddly and more paperwork-y.'"
        },
        {
            term: "Mental Health Parity Act",
            plainEnglish: "The law that says your brain deserves as much care as your big toe. It's healthcare's way of admitting that mental health is, you know, actual health.",
            example: "Thanks to the Mental Health Parity Act, Bob's insurance had to cover his therapy. 'Great,' he said, 'now I can afford to talk about how I can't afford things!'"
        },
        {
            term: "National Health System",
            plainEnglish: "When a country decides to be the ultimate helicopter parent and take care of everyone's healthcare. It's like a nationwide potluck, but with more stethoscopes and less potato salad.",
            example: "In countries with a National Health System, citizens swagger into hospitals like they own the place. Because, technically, they do."
        },
        {
            term: "Never Event",
            plainEnglish: "Medical mistakes so bad, they should be as rare as a politician admitting they were wrong. It's the 'you had ONE job' of healthcare.",
            example: "The hospital's 'Never Event' tally reset to zero days. 'Well,' sighed the nurse, 'at least we made it a week without operating on the wrong person's bunion.'"
        },
        {
            term: "Nursing Home",
            plainEnglish: "Where the golden years go to party... slowly. It's like a really long sleepover with people who remember the first telephone.",
            example: "Grandma called her nursing home 'Wrinkle City' and appointed herself mayor. Her first act? Mandating daily bingo and prune juice happy hours."
        },
        {
            term: "Open Enrollment",
            plainEnglish: "The annual hunger games of health insurance selection. It's like speed dating, but instead of potential soulmates, you're choosing between high deductibles and low premiums.",
            example: "During open enrollment, Sarah stared at insurance options until her eyes glazed over. 'Eeny, meeny, miny, moe,' she muttered, 'catch a tiger by the PPO...'"
        },
        {
            term: "Pay for Performance",
            plainEnglish: "When healthcare providers get graded like a school report card, but instead of A's, they get cold, hard cash. It's like tipping your waiter, but for not killing you.",
            example: "The hospital implemented pay for performance. Suddenly, doctors were high-fiving patients post-surgery. 'Five-star review, please!' they'd whisper while checking vitals."
        },
        {
            term: "Pay or Play",
            plainEnglish: "The employer's healthcare version of 'Truth or Dare.' Either provide insurance (play) or pay a penalty. It's like being forced to choose between buying everyone pizza or paying for their future indigestion treatments.",
            example: "The company chose to 'play,' offering health insurance. 'It's cheaper than the penalty,' the CEO explained, 'plus, it makes us look less like soulless corporate overlords.'"
        },
        {
            term: "Point-of-Service Plan",
            plainEnglish: "The 'Choose Your Own Adventure' of health insurance. Stay in-network for a happy wallet, or go rogue for a price. It's healthcare's version of 'you can look, but it'll cost you to touch.'",
            example: "With his point-of-service plan, Tim could see any doctor. 'Freedom!' he cried, right before checking if his preferred physician was in-network. Spoiler alert: she wasn't."
        },
        {
            term: "Post-Acute Care",
            plainEnglish: "For when you're not sick enough for the hospital, but too sick for a victory lap. It's the cool-down stretch after your medical marathon.",
            example: "After knee surgery, Bob went to post-acute care. 'It's like a health spa,' he said, 'if resorts were really into blood pressure checks and early bedtimes.'"
        },
        {
            term: "Pre-Existing Conditions Exclusions",
            plainEnglish: "The insurance company's way of saying, 'We don't want to pay for your old problems.' It's like refusing to date someone because they've had previous relationships.",
            example: "Before the ACA, Jane's acne was considered a pre-existing condition. 'Great,' she sighed, 'my teenage awkwardness is haunting me well into adulthood.'"
        },
        {
            term: "Preferred Provider Organization (PPO)",
            plainEnglish: "The 'open relationship' of health insurance plans. You can see other doctors, but it'll cost you. It's healthcare's way of saying, 'We're not jealous, we're just disappointed.'",
            example: "With his PPO, Tom could see any doctor he wanted. 'It's like medical speed dating,' he joked, 'but with more co-pays and less romance.'"
        },
        {
            term: "Primary Care",
            plainEnglish: "Your first line of defense against everything from sniffles to existential crises. It's like having a medical bouncer who decides if your problem is worthy of the specialist nightclub.",
            example: "Dr. Johnson, Sarah's primary care physician, was her go-to for everything. 'She's seen me through flu, fungi, and that time I thought I was turning into a werewolf,' Sarah explained."
        },
        {
            term: "Prospective Payment System (PPS)",
            plainEnglish: "Medicare's way of saying, 'We've decided what your illness is worth.' It's like going to an all-you-can-eat buffet where the price is set before you even pick up a plate.",
            example: "Under PPS, the hospital got a fixed rate for treating Bob's pneumonia. 'Good thing I didn't upgrade to the deluxe pneumonia package,' Bob wheezed."
        },
        {
            term: "Qualified Medicare Beneficiary (QMB)",
            plainEnglish: "The VIP pass for low-income Medicare members. It's like getting the senior discount on top of your senior discount.",
            example: "As a QMB, Grandpa Joe got extra help with his Medicare costs. 'It's like finding an extra coupon for the early bird special,' he chuckled."
        },
        {
            term: "Rating",
            plainEnglish: "How insurance companies decide what to charge you, based on factors like age, location, and whether you think skydiving is a reasonable weekend activity.",
            example: "After moving from Florida to Alaska, Jim's insurance rating changed. 'Apparently, the risk of being eaten by a bear outweighs the risk of being mildly inconvenienced by a hurricane,' he mused."
        },
        {
            term: "Refundable Tax Credit",
            plainEnglish: "The government's way of saying, 'Here's some money back, even if you didn't pay taxes.' It's like getting a rebate on a product you got for free.",
            example: "Jane got a refundable tax credit for her health insurance. 'It's like the IRS is buying me a really boring gift,' she said, dreaming of all the fun things she could have bought instead."
        },
        {
            term: "Resource-Based Relative Value Scale (RBRVS)",
            plainEnglish: "Medicare's way of deciding how much to pay doctors. It's like a bizarre board game where the rules are made up and the points don't matter.",
            example: "Dr. Smith tried to explain RBRVS to a patient. 'Imagine if your salary was based on how many papers you could shuffle in an hour,' she said. The patient just nodded and backed away slowly."
        },
        {
            term: "Risk Adjustment",
            plainEnglish: "The insurance company's way of saying, 'We'll take on your sick customers if you pay us extra.' It's like agreeing to babysit the neighbor's unruly kids, but only if they throw in pizza money.",
            example: "The health plan got risk adjustment payments for covering a lot of sick people. 'We're not making money, we're making a difference,' the CEO announced, while quietly counting the cash."
        },
        {
            term: "Risk Selection",
            plainEnglish: "When insurance companies try to cherry-pick the healthiest customers. It's like hosting a party and only inviting friends who never spill their drinks.",
            example: "The insurance company's risk selection strategy backfired when they realized their 'yoga enthusiasts only' policy attracted a surprising number of extreme sports fans."
        },
        {
            term: "Self-Employed Deduction for Health Insurance",
            plainEnglish: "The tax break that says, 'Congrats on being your own boss! Here's a small consolation prize for those crushing insurance premiums.'",
            example: "Jake claimed the self-employed health insurance deduction. 'Finally,' he said, 'a reward for all those times I had to explain that yes, working in pajamas is a real job.'"
        },
        {
            term: "Self-Insured Plan",
            plainEnglish: "When your employer decides to play insurance company. It's like your boss saying, 'I bet I can do this cheaper myself,' and hoping they're right.",
            example: "The company switched to a self-insured plan. 'Don't worry,' the CEO assured, 'I've played a lot of Operation. How hard can real healthcare be?'"
        },
        {
            term: "Single-Payer System",
            plainEnglish: "When the government says, 'We'll pick up the tab for everyone's healthcare.' It's like going to a restaurant where everything's already paid for, but you can't complain about the service.",
            example: "In countries with single-payer systems, citizens walk into hospitals like they own the place. Because, in a way, they do."
        },
        {
            term: "Skilled Nursing Facility",
            plainEnglish: "For when you're too healthy for the hospital but too sick for home. It's like a medical halfway house, complete with Jell-O and physical therapy.",
            example: "After his hip replacement, Bob went to a skilled nursing facility. 'It's like a resort,' he said, 'if resorts were really into blood pressure checks and early bedtimes.'"
        },
        {
            term: "Small Group Market",
            plainEnglish: "The kiddie pool of health insurance, where small businesses dip their toes into coverage. It's like a tiny health care block party where everyone brings a dish, but the dish is money for premiums.",
            example: "When Jane's startup entered the small group market, she felt like she was playing insurance Tetris. 'If I arrange the employees just right, maybe we can afford dental,' she mused."
        },
        {
            term: "Social Security Disability Insurance (SSDI)",
            plainEnglish: "The government's way of saying, 'If you can't work, we've got your back.' It's like a financial safety net, but instead of catching trapeze artists, it catches people knocked down by life's curveballs.",
            example: "After his accident, Tom qualified for SSDI. 'It's not exactly winning the lottery,' he said, 'but at least I can afford ramen noodles AND the occasional wild splurge on name-brand cereal.'"
        },
        {
            term: "Social Health Maintenance Organization",
            plainEnglish: "A one-stop-shop for seniors' health needs, from medical care to meals-on-wheels. It's like a cruise ship for healthcare, but with less shuffleboard and more shuffling to doctor's appointments.",
            example: "Grandma joined a Social HMO and declared, 'It's like I have a whole team of grandkids, but they're all nurses and social workers instead of ungrateful teenagers.'"
        },
        {
            term: "Staff Model HMO",
            plainEnglish: "When your insurance company decides to play doctor and actually hire the physicians. It's like a vertical integration of healthcare, but with more stethoscopes.",
            example: "Bob joined a staff model HMO. 'It's convenient,' he said, 'but I can't help feeling like I'm seeing the insurance company's doctor instead of my doctor.'"
        },
        {
            term: "State Mandate",
            plainEnglish: "When your state decides to play healthcare parent and tells insurance companies, 'You WILL cover this, young man!' It's like your mom insisting you wear a coat, but for health benefits.",
            example: "The state mandated coverage for acupuncture. 'Great,' sighed Sarah, 'now my insurance covers being turned into a human pincushion, but still won't pay for my allergy to Mondays.'"
        },
        {
            term: "Sustainable Growth Rate (SGR)",
            plainEnglish: "Congress's failed attempt at putting Medicare on a diet. It's like trying to use a ouija board to predict healthcare costs, but less accurate.",
            example: "Doctors dreaded the SGR like it was the healthcare boogeyman. 'Quick, pass another patch!' became the annual cry in Washington, as predictable as cherry blossoms and political scandals."
        },
        {
            term: "Tax Credit",
            plainEnglish: "The government's way of saying, 'Here's some money back for being a responsible adult and getting health insurance.' It's like a reward system, but instead of getting a lollipop at the doctor's office, you get cold, hard cash.",
            example: "Jane got a tax credit for her health insurance. 'It's like the universe is finally paying me back for all those vegetables I forced myself to eat,' she cheered."
        },
        {
            term: "Tax Deduction",
            plainEnglish: "The IRS's way of saying, 'Okay, we'll pretend you didn't earn quite that much.' It's like a financial magic trick where you make part of your income disappear from your tax bill.",
            example: "Tom claimed a tax deduction for his medical expenses. 'It's like extreme couponing,' he explained, 'but instead of saving on groceries, I'm saving on taxes.'"
        },
        {
            term: "Tax Preference for Health Benefits",
            plainEnglish: "The government's way of saying, 'If your job gives you health insurance, we won't tax you for it.' It's like getting a buy-one-get-one-free deal, but for benefits instead of burgers.",
            example: "Sarah enjoyed the tax preference for her employer-provided health insurance. 'It's nice to get something from work that the IRS doesn't immediately try to take a bite out of,' she mused."
        },
        {
            term: "TRICARE",
            plainEnglish: "Uncle Sam's way of saying 'thanks for your service' with health coverage for military personnel and their families. It's like getting a lifetime supply of Band-Aids, but hopefully you won't need that many.",
            example: "Jake's family was covered by TRICARE. 'It's great,' he said, 'but I'm pretty sure the 'TRI' stands for 'Try to understand these benefits, I dare you.'"
        },
        {
            term: "Uncompensated Care",
            plainEnglish: "When hospitals play Santa Claus and give out free healthcare. It's like running a restaurant where some customers pay, some can't, but you still have to feed everyone.",
            example: "The hospital provided uncompensated care to John. 'We'll bill you,' they said, knowing full well that bill had about as much chance of being paid as a snowball has in Florida."
        },
        {
            term: "Underinsured",
            plainEnglish: "When you have insurance, but it's about as useful as a chocolate teapot. It's like having an umbrella full of holes – you're covered, but you're still getting wet.",
            example: "Despite having insurance, Sarah was underinsured. 'I have coverage,' she explained, 'but it's more like a healthcare leaf than a healthcare umbrella.'"
        },
        {
            term: "Universal Coverage",
            plainEnglish: "The healthcare equivalent of 'no child left behind,' but for everyone. It's like throwing a massive health party and the whole country's invited.",
            example: "In countries with universal coverage, citizens strut into hospitals like they own the place. Because, in a roundabout way, they do."
        },
        {
            term: "Utilization Review",
            plainEnglish: "When your insurance company plays detective to make sure you really, really need that MRI. It's like having a very nosy neighbor who insists on knowing why you need so many Band-Aids.",
            example: "The insurance company did a utilization review on Tom's claim. 'Apparently,' he grumbled, 'they don't believe anyone could accidentally staple their tie to their desk three times in one week.'"
        },
        {
            term: "Workers' Compensation Programs",
            plainEnglish: "The 'oops, I hurt myself at work' insurance. It's like a corporate safety net, catching employees when they fall... preferably not from too high up.",
            example: "After slipping on a banana peel at his job at the fruit stand, Bob filed for workers' comp. 'Finally,' he said, 'my clumsiness is paying off!'"
        }
    ]

export default jargonDatabase;