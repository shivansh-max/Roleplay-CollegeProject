const roles = {

    narrator: {
        name: "Shivani Verma",
        roll: "26",
        role: "Narrator"
    },

    student1: {
        name: "Shivansh Dubey",
        roll: "28",
        role: "Selected Student 1"
    },

    student2: {
        name: "Shivansh Kushwadhan",
        roll: "29",
        role: "Selected Student 2"
    },

    student3: {
        name: "Shivank Tiwari",
        roll: "27",
        role: "Selected Student 3"
    },

    unselected: {
        name: "Shivansh Pandey",
        roll: "30",
        role: "Unselected Student"
    },

    hr: {
        name: "Shivangi Tiwari",
        roll: "24",
        role: "Company HR Representative"
    },

    manager: {
        name: "Shivangi Tiwari",
        roll: "23",
        role: "Recruitment Manager"
    },

    placement: {
        name: "Shivang Mishra",
        roll: "22",
        role: "Placement Officer"
    },

    faculty: {
        name: "Shivani",
        roll: "25",
        role: "Faculty Coordinator"
    },

    representative: {
        name: "Shivam Yadav",
        roll: "21",
        role: "Student Representative"
    }

};


const scenes = [

    {
        number: "01",
        title: "The Big Opportunity",
        setting: "College placement presentation.",

        lines: [

            {
                speaker: "narrator",
                text: "Every year, thousands of students wait for one particular moment."
            },

            {
                speaker: "narrator",
                text: "The moment when a company visits their campus."
            },

            {
                speaker: "narrator",
                text: "For some, it is simply another opportunity. For others, it feels like the beginning of their career."
            },

            {
                speaker: "narrator",
                text: "Today, a reputed company has arrived at the college for campus recruitment."
            },

            {
                type: "pause",
                text: "Pause for 2 seconds."
            },

            {
                speaker: "placement",
                text: "Good morning, everyone. Today, we are pleased to welcome the recruitment team conducting today's campus placement drive."
            },

            {
                speaker: "placement",
                text: "I request everyone to listen carefully, participate professionally, and use this opportunity to understand the recruitment process."
            },

            {
                speaker: "placement",
                text: "Now, I would like to invite the company representatives to begin the presentation."
            },

            {
                type: "action",
                text: "HR Representative steps forward.",
                roles: ["hr"]
            },

            {
                speaker: "hr",
                text: "Good morning, everyone. It's great to see so many enthusiastic students here today."
            },

            {
                speaker: "hr",
                text: "We are looking for talented graduates who are ready to learn, adapt and grow in a professional environment."
            },

            {
                speaker: "hr",
                text: "The selected candidates will get opportunities to work on real projects and build their careers with our organisation."
            },

            {
                speaker: "manager",
                text: "Starting your professional career is a major step. We are looking for candidates who are technically capable, adaptable and responsible."
            },

            {
                type: "action",
                text: "Selected students react quietly.",
                roles: ["student1", "student2", "student3"]
            },

            {
                speaker: "student1",
                text: "This actually sounds like a really good opportunity."
            },

            {
                speaker: "student2",
                text: "If everything goes well, this could seriously change our plans for the future."
            },

            {
                speaker: "student3",
                text: "Let's first get selected."
            },

            {
                type: "pause",
                text: "Short natural laugh."
            },

            {
                speaker: "narrator",
                text: "The recruitment process begins. Aptitude tests. Technical interviews. HR rounds."
            },

            {
                speaker: "narrator",
                text: "And finally... the results are ready."
            }

        ]

    },


    {
        number: "02",
        title: "The Celebration",
        setting: "College corridor after results.",

        lines: [

            {
                speaker: "student1",
                text: "I still can't believe it. We're actually selected!"
            },

            {
                speaker: "student2",
                text: "After all those rounds, I honestly thought I wouldn't make it."
            },

            {
                speaker: "student3",
                text: "But we did. This calls for a celebration!"
            },

            {
                speaker: "representative",
                text: "Congratulations! The entire batch is talking about the results."
            },

            {
                speaker: "student1",
                text: "Honestly, this feels like a huge relief."
            },

            {
                speaker: "student2",
                text: "My family was waiting for the result too. I already told them."
            },

            {
                type: "pause",
                text: "Pause."
            },

            {
                speaker: "student1",
                text: "I was preparing for other opportunities as well, but now I think I'll focus on this."
            },

            {
                speaker: "unselected",
                text: "Well, congratulations to all of you. Some of us weren't lucky enough to get selected."
            },

            {
                speaker: "student3",
                text: "Hey, don't say that. There will be other opportunities."
            },

            {
                speaker: "unselected",
                text: "Maybe. But right now, you people should enjoy your success."
            },

            {
                speaker: "representative",
                text: "The offer letters should arrive soon. Then everything becomes official."
            },

            {
                speaker: "student2",
                text: "Once the offer letter comes, I can finally plan properly."
            },

            {
                speaker: "narrator",
                text: "The students celebrate. Families are informed. Future plans begin to change."
            },

            {
                speaker: "narrator",
                text: "But sometimes, the most important information is found later... in the details."
            }

        ]

    },


    {
        number: "03",
        title: "The Offer Letter",
        setting: "Students reading their official offer letters.",

        lines: [

            {
                speaker: "student1",
                text: "Guys... did you all get the offer letter?"
            },

            {
                speaker: "student2",
                text: "Yeah. I just received mine."
            },

            {
                speaker: "student3",
                text: "Same."
            },

            {
                type: "action",
                text: "All selected students pretend to read their offer letters.",
                roles: ["student1", "student2", "student3"]
            },

            {
                type: "pause",
                text: "Short silence."
            },

            {
                speaker: "student1",
                text: "Wait. Can someone explain this part?"
            },

            {
                speaker: "student3",
                text: "Which part?"
            },

            {
                speaker: "student1",
                text: "The compensation structure. This isn't exactly what I understood during the presentation."
            },

            {
                speaker: "student2",
                text: "Let me see... Wait. You're right."
            },

            {
                speaker: "student1",
                text: "During the presentation, the overall package was highlighted. But these details weren't explained clearly."
            },

            {
                speaker: "student3",
                text: "Maybe we should read everything carefully before assuming anything."
            },

            {
                speaker: "student2",
                text: "Terms and conditions are normal. But important conditions should be communicated clearly."
            },

            {
                speaker: "representative",
                text: "What's going on? I've received messages from several selected students. They all seem confused."
            },

            {
                speaker: "unselected",
                text: "So now that you've read the actual offer letter, you're complaining?"
            },

            {
                speaker: "student1",
                text: "We're not complaining because we have to work. We're questioning whether important details were communicated properly."
            },

            {
                speaker: "student2",
                text: "Imagine making an important decision because you understood something in a particular way... and later discovering the complete situation is different."
            },

            {
                speaker: "representative",
                text: "Enough. Let's not argue among ourselves. We should speak to the Placement Officer professionally."
            }

        ]

    },


    {
        number: "04",
        title: "The Placement Cell",
        setting: "Placement Officer and Faculty Coordinator meet the students.",

        lines: [

            {
                speaker: "placement",
                text: "I've received multiple messages regarding the offer letters. Before we contact the company, I want to understand the issue clearly. One person at a time."
            },

            {
                speaker: "representative",
                text: "The students are concerned that important aspects of the offer were not clearly understood during the presentation."
            },

            {
                speaker: "placement",
                text: "Which specific information do you believe was unclear?"
            },

            {
                speaker: "student1",
                text: "The way the package was presented created a particular understanding. But after reading the offer letter, the structure and conditions are much more complicated."
            },

            {
                speaker: "student2",
                text: "Some of us made important decisions based on this opportunity."
            },

            {
                speaker: "faculty",
                text: "Let's be careful with the language we use. There is a difference between saying information was deliberately hidden and saying communication was unclear."
            },

            {
                speaker: "student1",
                text: "You're right. We're not accusing anyone of intentionally deceiving us. We're saying important information should have been clearer."
            },

            {
                speaker: "student3",
                text: "I still think the opportunity has value. The conditions may not be ideal, but that doesn't necessarily mean the company did something wrong."
            },

            {
                speaker: "student2",
                text: "That's your decision. But shouldn't every student be able to make that decision with complete information?"
            },

            {
                type: "pause",
                text: "Brief pause."
            },

            {
                speaker: "faculty",
                text: "That's a fair question."
            },

            {
                speaker: "placement",
                text: "I will arrange a meeting with the company representatives. But remember, this meeting must remain professional. No shouting. No personal attacks. We focus on facts."
            }

        ]

    },


    {
        number: "05",
        title: "The Confrontation",
        setting: "Formal meeting room. Students on one side, company representatives on the other.",

        lines: [

            {
                speaker: "placement",
                text: "Thank you, everyone, for attending. The purpose of this meeting is to discuss concerns regarding the communication surrounding the recruitment offer."
            },

            {
                speaker: "placement",
                text: "I request everyone to speak respectfully and allow others to finish."
            },

            {
                speaker: "representative",
                text: "The students' primary concern is not that the company has employment conditions. Their concern is that important details became clear only after the official offer letters were received."
            },

            {
                speaker: "hr",
                text: "We understand the concern. However, the official offer letter contains the complete terms of employment. Candidates are expected to read the document carefully before accepting."
            },

            {
                speaker: "student1",
                text: "We understand that. And we did read the document carefully. That's exactly why we're asking these questions."
            },

            {
                speaker: "student1",
                text: "If a major part of the decision depends on conditions written later in the offer letter, shouldn't those conditions also be clearly discussed earlier?"
            },

            {
                speaker: "manager",
                text: "The pre-placement presentation is intended to provide an overview. The official offer letter provides the complete details. This is a standard professional process."
            },

            {
                speaker: "student2",
                text: "Standard doesn't always mean clear."
            },

            {
                type: "pause",
                text: "Important pause."
            },

            {
                speaker: "student2",
                text: "I informed my family. I changed my plans. I even considered stopping preparation for other opportunities."
            },

            {
                speaker: "student2",
                text: "If I had known every important condition earlier, I might still have accepted the offer... or I might have made a different decision. But at least it would have been an informed decision."
            },

            {
                speaker: "faculty",
                text: "That is an important distinction. The issue is not whether the company is allowed to have conditions. The issue is whether candidates had enough clarity before making decisions."
            },

            {
                speaker: "unselected",
                text: "I wasn't selected. And honestly, some students might still be willing to accept this offer even after knowing all the conditions."
            },

            {
                speaker: "student3",
                text: "I agree. The communication could have been clearer. But I don't think the solution is necessarily to reject the opportunity."
            },

            {
                speaker: "student1",
                text: "Nobody is forcing anyone to reject it. We're asking for transparency. Those are two different things."
            },

            {
                type: "pause",
                text: "Pause for 2 seconds."
            },

            {
                speaker: "manager",
                text: "Fair enough. Perhaps we should acknowledge something from our side."
            },

            {
                speaker: "manager",
                text: "A presentation can sometimes focus heavily on opportunities and benefits. Important details may receive less attention than they deserve."
            },

            {
                speaker: "hr",
                text: "If students genuinely felt that certain aspects were unclear, we can take that feedback seriously."
            },

            {
                speaker: "student2",
                text: "That's all we wanted. Not an argument. Just acknowledgment that communication affects people's decisions."
            },

            {
                speaker: "faculty",
                text: "Students must ask questions. Companies must communicate clearly. And colleges must ensure that important information is properly understood."
            }

        ]

    },


    {
        number: "06",
        title: "The Resolution",
        setting: "Same meeting room. The atmosphere is calmer.",

        lines: [

            {
                speaker: "placement",
                text: "So let's focus on practical solutions. What can be done now?"
            },

            {
                speaker: "manager",
                text: "We can arrange a clarification session for all selected candidates. The company can explain the complete compensation structure, job expectations and important conditions."
            },

            {
                speaker: "representative",
                text: "That would definitely help. And for future placement drives, important terms should be clearly mentioned during the presentation itself."
            },

            {
                speaker: "hr",
                text: "Agreed. We can also provide a written summary of key terms before candidates make their final decisions."
            },

            {
                speaker: "student3",
                text: "That sounds fair. People can then decide for themselves."
            },

            {
                speaker: "student2",
                text: "Some may accept. Some may not. But at least everyone will know what they're choosing."
            },

            {
                speaker: "unselected",
                text: "And maybe students should learn something too. Don't make a major career decision based only on an exciting presentation. Ask questions. Read everything."
            },

            {
                speaker: "student1",
                text: "Because in the professional world, communication is not just about speaking. It's about making sure the other person truly understands."
            },

            {
                speaker: "faculty",
                text: "Clear communication prevents confusion. Responsible communication builds trust. And informed communication helps people make better decisions."
            },

            {
                speaker: "placement",
                text: "Then I believe we have a constructive outcome."
            },

            {
                speaker: "placement",
                text: "The company will provide clarification. Students will have the opportunity to make informed decisions. And in future placement drives, we will work toward greater transparency."
            },

            {
                type: "action",
                text: "Everyone nods. Narrator slowly walks to the front.",
                roles: ["narrator"]
            },

            {
                speaker: "narrator",
                text: "This was never simply a story about a bad placement."
            },

            {
                speaker: "narrator",
                text: "It was a story about communication. About expectations. About assumptions. And about the consequences of information that is not completely understood."
            },

            {
                speaker: "narrator",
                text: "In the professional world, words can influence decisions. A presentation can create expectations. An unclear statement can create confusion."
            },

            {
                type: "pause",
                text: "Pause."
            },

            {
                speaker: "narrator",
                text: "And sometimes, the difference between a successful opportunity and a serious conflict..."
            },

            {
                type: "pause",
                text: "Pause for 2 seconds."
            },

            {
                speaker: "narrator",
                text: "...is simply clear communication."
            },

            {
                type: "action",
                text: "All actors look toward the audience.",
                roles: [
                    "narrator",
                    "student1",
                    "student2",
                    "student3",
                    "unselected",
                    "hr",
                    "manager",
                    "placement",
                    "faculty",
                    "representative"
                ]
            },

            {
                speaker: "all",
                text: "Thank you."
            }

        ]

    }

];


// ============================================
// ROLE SCRIPT SYSTEM
// ============================================

const roleButtons = document.querySelectorAll(".role-selector button");
const prepareButtons = document.querySelectorAll(".prepare-btn");
const roleDisplay = document.getElementById("role-script-display");

function showRoleScript(roleId) {

    const person = roles[roleId];

    // Highlight buttons
    roleButtons.forEach(button => {
        button.classList.remove("active");

        if (button.dataset.role === roleId) {
            button.classList.add("active");
        }
    });

    let html = `
        <div class="role-profile">
            <h3>${person.role}</h3>
            <p>${person.name} • Roll No. ${person.roll}</p>
        </div>
    `;

    let hasLines = false;

    scenes.forEach(scene => {

        const personalLines = scene.lines.filter(line => {

            if (line.speaker === roleId) return true;

            if (line.speaker === "all") return true;

            if (line.roles && line.roles.includes(roleId)) return true;

            return false;
        });

        if (personalLines.length > 0) {

            hasLines = true;

            html += `
                <div class="personal-scene">

                    <div class="personal-scene-title">
                        SCENE ${scene.number} • ${scene.title}
                    </div>
            `;

            personalLines.forEach(line => {

                if (line.speaker === roleId) {

                    html += `
                        <div class="personal-line">
                            <strong>YOUR DIALOGUE</strong>
                            ${line.text}
                        </div>
                    `;

                } else if (line.speaker === "all") {

                    html += `
                        <div class="personal-line">
                            <strong>EVERYONE</strong>
                            ${line.text}
                        </div>
                    `;

                } else {

                    html += `
                        <div class="personal-action">
                            🎭 ${line.text}
                        </div>
                    `;
                }

            });

            html += `</div>`;
        }

    });

    if (!hasLines) {

        html += `
            <div class="empty-role-message">
                <h3>No dialogues found yet.</h3>
            </div>
        `;
    }

    roleDisplay.innerHTML = html;

    // Scroll to role section smoothly
    document
        .getElementById("role-prep")
        .scrollIntoView({
            behavior: "smooth",
            block: "start"
        });
}


// Role selector buttons

roleButtons.forEach(button => {

    button.addEventListener("click", () => {

        showRoleScript(button.dataset.role);

    });

});


// Buttons from cast cards

prepareButtons.forEach(button => {

    button.addEventListener("click", () => {

        const card = button.closest(".character-card");

        showRoleScript(card.dataset.role);

    });

});


// ============================================
// FULL SCRIPT GENERATOR
// ============================================

const fullScriptContainer =
    document.getElementById("full-script-container");

function generateFullScript() {

    let html = "";

    scenes.forEach(scene => {

        html += `
            <div class="script-scene">

                <div class="script-scene-header">
                    <span>SCENE ${scene.number}</span>
                    <h3>${scene.title}</h3>
                </div>

                <div class="stage-direction">
                    🎭 SETTING: ${scene.setting}
                </div>
        `;

        scene.lines.forEach(line => {

            if (line.speaker && line.speaker !== "all") {

                html += `
                    <div class="script-line">
                        <strong>${roles[line.speaker].role}:</strong>
                        ${line.text}
                    </div>
                `;

            } else if (line.speaker === "all") {

                html += `
                    <div class="script-line">
                        <strong>ALL:</strong>
                        ${line.text}
                    </div>
                `;

            } else if (line.type === "action") {

                html += `
                    <div class="script-action">
                        🎭 ${line.text}
                    </div>
                `;

            } else if (line.type === "pause") {

                html += `
                    <div class="script-pause">
                        ⏸️ ${line.text}
                    </div>
                `;
            }

        });

        html += `
                <div class="scene-transition">
                    🎬 END OF SCENE ${scene.number}
                </div>

            </div>
        `;

    });

    fullScriptContainer.innerHTML = html;
}


// Generate full script immediately

generateFullScript();


// ============================================
// NAVIGATION HIGHLIGHT
// ============================================

const navLinks =
    document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", () => {

    let currentSection = "";

    document.querySelectorAll("section[id]").forEach(section => {

        const top = section.offsetTop - 150;

        const bottom =
            top + section.offsetHeight;

        if (
            window.scrollY >= top &&
            window.scrollY < bottom
        ) {
            currentSection =
                section.getAttribute("id");
        }

    });

    navLinks.forEach(link => {

        link.classList.remove("active");

        if (
            link.getAttribute("href") ===
            "#" + currentSection
        ) {
            link.classList.add("active");
        }

    });

});


console.log(
    "Campus Placement Gone Wrong • Role Preparation System Loaded"
);