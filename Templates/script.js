
// ============================================================
// GENAI ACADEMIC HELPDESK
// Complete JavaScript
// ============================================================


// ============================================================
// GET HTML ELEMENTS
// ============================================================

const form = document.getElementById("searchForm");
const input = document.getElementById("questionInput");
const chatContainer = document.getElementById("chatContainer");
const loading = document.getElementById("loading");


// ============================================================
// ACADEMIC INFORMATION
// ============================================================

const academicData = {

    // ========================================================
    // 📚 LIBRARY
    // ========================================================

    library: {

        general: `
            <b>📚 Library Information</b>

            <br><br>

            The college library is an important academic
            resource centre that supports students, faculty
            and staff in their teaching, learning and
            research activities.

            <br><br>

            The library may provide:

            <br>• Textbooks
            <br>• Reference books
            <br>• Journals
            <br>• Magazines
            <br>• Newspapers
            <br>• Previous question papers
            <br>• Digital learning resources
            <br>• E-books
            <br>• Online journals
            <br>• Reading facilities
            <br>• Reference facilities

            <br><br>

            Students should carry their valid library ID
            card and follow the library rules.
        `,

        timings: `
            <b>📚 Library Timings</b>

            <br><br>

            The library operates during the working hours
            specified by the college.

            <br><br>

            <b>Regular Hours:</b>

            <br>Monday to Saturday: As announced by the college

            <br><br>

            Students should check the latest library
            notification for the exact opening and
            closing times.

            <br><br>

            Library timings may change during examinations,
            holidays or special academic activities.
        `,

        membership: `
            <b>📚 Library Membership</b>

            <br><br>

            Students can become library members according
            to the rules of the college.

            <br><br>

            A library membership may provide access to:

            <br>• Books
            <br>• Reference materials
            <br>• Reading facilities
            <br>• Digital resources
            <br>• Journals and periodicals

            <br><br>

            Students should use their valid student or
            library ID when using library services.
        `,

        books: `
            <b>📚 Books and Resources</b>

            <br><br>

            The library may contain books related to
            different academic departments.

            <br><br>

            Resources can include:

            <br>• Programming books
            <br>• Java and Python books
            <br>• Database books
            <br>• Artificial Intelligence books
            <br>• Machine Learning books
            <br>• Computer Science reference books
            <br>• Mathematics books
            <br>• Engineering textbooks
            <br>• Competitive examination books

            <br><br>

            Students can contact the librarian to find
            a particular book or subject.
        `,

        borrow: `
            <b>📚 Borrowing Books</b>

            <br><br>

            Students can borrow books according to the
            library borrowing policy.

            <br><br>

            General process:

            <br>1. Select the required book.
            <br>2. Check its availability.
            <br>3. Present the library ID card.
            <br>4. Complete the borrowing process.
            <br>5. Check the return date.

            <br><br>

            The number of books and borrowing period
            depend on the college library rules.
        `,

        returnBook: `
            <b>📚 Returning Books</b>

            <br><br>

            Students should return borrowed books before
            or on the assigned return date.

            <br><br>

            Students should:

            <br>• Return books on time
            <br>• Keep books in good condition
            <br>• Check the return status
            <br>• Follow the library's late-return policy

            <br><br>

            Late returns or damaged books may be subject
            to the rules or penalties of the institution.
        `,

        renewal: `
            <b>📚 Book Renewal</b>

            <br><br>

            Some library books may be eligible for renewal.

            <br><br>

            Renewal normally depends on:

            <br>• Availability of the book
            <br>• Reservation by another student
            <br>• Library policy
            <br>• Maximum borrowing period

            <br><br>

            Students should contact the library if they
            want to renew a borrowed book.
        `,

        lostBook: `
            <b>📚 Lost or Damaged Book</b>

            <br><br>

            If a student loses or damages a library book,
            the student should immediately inform the
            librarian.

            <br><br>

            The library may require the student to follow
            the institution's replacement or compensation
            procedure.
        `,

        rules: `
            <b>📚 Library Rules</b>

            <br><br>

            Students should:

            <br>• Maintain silence
            <br>• Keep mobile phones on silent mode
            <br>• Keep the library clean
            <br>• Carry the library/student ID card
            <br>• Handle books carefully
            <br>• Return books on time
            <br>• Do not damage library property
            <br>• Follow librarian instructions
            <br>• Do not disturb other students

            <br><br>

            Students should follow the official rules
            issued by their college library.
        `,

        readingRoom: `
            <b>📚 Reading Room</b>

            <br><br>

            The reading room provides students with a
            quiet environment for studying and reading.

            <br><br>

            Students should:

            <br>• Maintain silence
            <br>• Keep study materials organized
            <br>• Avoid disturbing others
            <br>• Keep the area clean
            <br>• Follow reading-room timings
        `,

        digitalLibrary: `
            <b>📚 Digital Library</b>

            <br><br>

            A digital library may provide access to
            electronic academic resources.

            <br><br>

            These resources may include:

            <br>• E-books
            <br>• Online journals
            <br>• Research papers
            <br>• Digital databases
            <br>• Educational websites
            <br>• Online reference materials

            <br><br>

            Access depends on the facilities and
            subscriptions provided by the college.
        `,

        journals: `
            <b>📚 Journals and Periodicals</b>

            <br><br>

            The library may provide academic journals,
            magazines and periodicals related to different
            subjects.

            <br><br>

            Students can use these resources for:

            <br>• Assignments
            <br>• Projects
            <br>• Research
            <br>• Presentations
            <br>• General knowledge
        `,

        questionPapers: `
            <b>📚 Previous Question Papers</b>

            <br><br>

            Previous examination question papers can be
            useful for examination preparation.

            <br><br>

            Students can use them to understand:

            <br>• Question patterns
            <br>• Important topics
            <br>• Frequently asked concepts
            <br>• Examination format

            <br><br>

            Availability depends on the library collection
            and academic department.
        `,

        librarian: `
            <b>📚 Librarian</b>

            <br><br>

            The librarian manages library services and
            assists students with library-related matters.

            <br><br>

            Students can contact the librarian regarding:

            <br>• Book availability
            <br>• Borrowing and returning
            <br>• Library membership
            <br>• Digital resources
            <br>• Lost or damaged books
            <br>• Library rules
        `
    },


    // ========================================================
    // 💼 PLACEMENT
    // ========================================================

    placement: {

        general: `
            <b>💼 Placement Information</b>

            <br><br>

            The placement department helps students
            prepare for and participate in campus
            recruitment activities.

            <br><br>

            Placement activities may include:

            <br>• Campus recruitment
            <br>• Aptitude tests
            <br>• Coding tests
            <br>• Technical interviews
            <br>• HR interviews
            <br>• Communication training
            <br>• Resume preparation
            <br>• Mock interviews
            <br>• Career guidance
            <br>• Placement drives
        `,

        opportunities: `
            <b>💼 Placement Opportunities</b>

            <br><br>

            Students may get opportunities to participate
            in recruitment drives conducted by companies.

            <br><br>

            Job roles may include:

            <br>• Software Developer
            <br>• Java Developer
            <br>• Web Developer
            <br>• Full Stack Developer
            <br>• Software Tester
            <br>• Technical Support
            <br>• Data Analyst
            <br>• Graduate Trainee
            <br>• IT Support

            <br><br>

            Actual job roles depend on the companies and
            vacancies available during the recruitment drive.
        `,

        process: `
            <b>💼 Placement Process</b>

            <br><br>

            A typical placement process can include:

            <br>1. Placement registration
            <br>2. Eligibility verification
            <br>3. Company introduction
            <br>4. Pre-placement talk
            <br>5. Aptitude test
            <br>6. Coding or technical test
            <br>7. Technical interview
            <br>8. HR interview
            <br>9. Final selection
            <br>10. Offer letter

            <br><br>

            The exact process can vary from company
            to company.
        `,

        eligibility: `
            <b>💼 Placement Eligibility</b>

            <br><br>

            Eligibility criteria depend on the recruiting
            company.

            <br><br>

            Common criteria can include:

            <br>• Required educational qualification
            <br>• Minimum academic percentage
            <br>• Backlog requirements
            <br>• Required technical skills
            <br>• Attendance requirements
            <br>• Graduation status

            <br><br>

            Students should always check the eligibility
            criteria announced for each company.
        `,

        registration: `
            <b>💼 Placement Registration</b>

            <br><br>

            Students who want to participate in placement
            drives normally need to register with the
            placement department.

            <br><br>

            Registration may require:

            <br>• Student details
            <br>• Academic information
            <br>• Resume
            <br>• Contact details
            <br>• Skills
            <br>• Certifications

            <br><br>

            Students should provide accurate information.
        `,

        aptitude: `
            <b>💼 Aptitude Test</b>

            <br><br>

            Aptitude tests are commonly used during
            recruitment.

            <br><br>

            Topics may include:

            <br>• Quantitative aptitude
            <br>• Logical reasoning
            <br>• Verbal ability
            <br>• Data interpretation
            <br>• Problem solving

            <br><br>

            Students can prepare using practice questions,
            mock tests and timed exercises.
        `,

        coding: `
            <b>💼 Coding Test</b>

            <br><br>

            Some companies conduct coding tests as part
            of their recruitment process.

            <br><br>

            Students may be tested on:

            <br>• Programming fundamentals
            <br>• Data structures
            <br>• Algorithms
            <br>• Problem solving
            <br>• Object-oriented programming
            <br>• Database concepts

            <br><br>

            Java, Python, C++ or other languages may be
            used depending on the company.
        `,

        technicalInterview: `
            <b>💼 Technical Interview</b>

            <br><br>

            Technical interviews evaluate the candidate's
            technical knowledge and problem-solving ability.

            <br><br>

            Questions may cover:

            <br>• Java
            <br>• OOP
            <br>• SQL
            <br>• DBMS
            <br>• HTML
            <br>• CSS
            <br>• JavaScript
            <br>• Data structures
            <br>• Projects
            <br>• Computer fundamentals
        `,

        hrInterview: `
            <b>💼 HR Interview</b>

            <br><br>

            HR interviews may focus on communication,
            career goals and personal qualities.

            <br><br>

            Common areas include:

            <br>• Self introduction
            <br>• Strengths and weaknesses
            <br>• Career goals
            <br>• Teamwork
            <br>• Communication
            <br>• Project discussion
            <br>• Relocation
            <br>• Company awareness
        `,

        training: `
            <b>💼 Placement Training</b>

            <br><br>

            Placement training can help students prepare
            for recruitment.

            <br><br>

            Training may include:

            <br>• Aptitude practice
            <br>• Coding practice
            <br>• Communication skills
            <br>• Resume preparation
            <br>• Technical interview preparation
            <br>• HR interview preparation
            <br>• Mock interviews
            <br>• Group discussions
        `,

        resume: `
            <b>💼 Resume Preparation</b>

            <br><br>

            A placement resume should clearly present
            the student's education, skills and experience.

            <br><br>

            A resume can include:

            <br>• Name and contact details
            <br>• Career objective
            <br>• Education
            <br>• Technical skills
            <br>• Projects
            <br>• Internships
            <br>• Certifications
            <br>• Achievements
            <br>• Extra-curricular activities

            <br><br>

            Students should keep their resume accurate,
            clear and relevant to the job.
        `,

        documents: `
            <b>💼 Placement Documents</b>

            <br><br>

            Students may be required to provide:

            <br>• Resume
            <br>• College ID
            <br>• Government ID
            <br>• Marksheets
            <br>• Educational certificates
            <br>• Internship certificates
            <br>• Project information
            <br>• Passport-size photographs

            <br><br>

            Exact requirements depend on the company.
        `,

        companies: `
            <b>💼 Recruiting Companies</b>

            <br><br>

            Companies participating in campus recruitment
            can vary each year.

            <br><br>

            Students should check official placement
            announcements for:

            <br>• Company name
            <br>• Job role
            <br>• Salary/package information
            <br>• Eligibility
            <br>• Recruitment date
            <br>• Selection process
        `,

        mockInterview: `
            <b>💼 Mock Interviews</b>

            <br><br>

            Mock interviews allow students to practise
            the interview process before attending
            actual recruitment interviews.

            <br><br>

            They can help students practise:

            <br>• Self introduction
            <br>• Technical questions
            <br>• HR questions
            <br>• Communication
            <br>• Project explanation
            <br>• Interview confidence
        `,

        careerGuidance: `
            <b>💼 Career Guidance</b>

            <br><br>

            Career guidance can help students understand
            possible career paths based on their education,
            interests and technical skills.

            <br><br>

            Students can discuss:

            <br>• Job roles
            <br>• Required skills
            <br>• Higher studies
            <br>• Certifications
            <br>• Career preparation
            <br>• Interview preparation
        `
    },


    // ========================================================
    // 🏠 HOSTEL
    // ========================================================

    hostel: {

        general: `
            <b>🏠 Hostel Information</b>

            <br><br>

            The college hostel provides accommodation
            and other facilities for students.

            <br><br>

            Hostel services may include:

            <br>• Student rooms
            <br>• Mess facilities
            <br>• Drinking water
            <br>• Common areas
            <br>• Study facilities
            <br>• Security
            <br>• Maintenance
            <br>• Warden support
        `,

        admission: `
            <b>🏠 Hostel Admission</b>

            <br><br>

            Students who want hostel accommodation should
            follow the hostel admission procedure.

            <br><br>

            The process may include:

            <br>1. Hostel application
            <br>2. Document submission
            <br>3. Eligibility verification
            <br>4. Room allocation
            <br>5. Fee payment
            <br>6. Hostel registration

            <br><br>

            Hostel availability depends on the college.
        `,

        rules: `
            <b>🏠 Hostel Rules</b>

            <br><br>

            Students should:

            <br>• Maintain discipline
            <br>• Keep rooms clean
            <br>• Follow entry and exit timings
            <br>• Maintain cleanliness
            <br>• Respect other residents
            <br>• Follow visitor rules
            <br>• Follow mess rules
            <br>• Follow leave procedures
            <br>• Protect hostel property
            <br>• Follow warden instructions
        `,

        timings: `
            <b>🏠 Hostel Timings</b>

            <br><br>

            Hostel entry and exit timings are determined
            by the hostel administration.

            <br><br>

            Students should return to the hostel within
            the permitted time.

            <br><br>

            Exact timings should be confirmed with the
            hostel administration or warden.
        `,

        facilities: `
            <b>🏠 Hostel Facilities</b>

            <br><br>

            Hostel facilities may include:

            <br>• Accommodation
            <br>• Beds and basic furniture
            <br>• Study areas
            <br>• Drinking water
            <br>• Electricity
            <br>• Internet/Wi-Fi where available
            <br>• Common rooms
            <br>• Mess
            <br>• Security
            <br>• Maintenance services
        `,

        rooms: `
            <b>🏠 Hostel Rooms</b>

            <br><br>

            Hostel rooms provide students with
            accommodation during their studies.

            <br><br>

            Room facilities may include:

            <br>• Bed
            <br>• Study table
            <br>• Chair
            <br>• Storage space
            <br>• Lighting
            <br>• Electrical facilities

            <br><br>

            Facilities vary depending on the hostel.
        `,

        mess: `
            <b>🏠 Hostel Mess</b>

            <br><br>

            The hostel mess provides food for resident
            students.

            <br><br>

            Students should:

            <br>• Follow mess timings
            <br>• Maintain cleanliness
            <br>• Avoid food wastage
            <br>• Follow mess rules
            <br>• Maintain discipline in the dining area

            <br><br>

            The exact menu and timings are decided by
            the hostel administration.
        `,

        food: `
            <b>🏠 Hostel Food</b>

            <br><br>

            Hostel food is generally provided through
            the mess facility.

            <br><br>

            The menu may include breakfast, lunch,
            evening refreshments and dinner depending
            on the hostel arrangements.

            <br><br>

            Students should check the current menu
            displayed by the hostel administration.
        `,

        visitor: `
            <b>🏠 Visitor Rules</b>

            <br><br>

            Visitors must follow the hostel's visitor
            policy.

            <br><br>

            Rules may include:

            <br>• Visitor registration
            <br>• Specified visiting hours
            <br>• Identification requirements
            <br>• Permission from hostel authorities
            <br>• Restrictions on entry into rooms

            <br><br>

            Students should follow the instructions
            provided by the hostel administration.
        `,

        leave: `
            <b>🏠 Hostel Leave</b>

            <br><br>

            Students who want to leave the hostel should
            follow the official leave procedure.

            <br><br>

            The procedure may include:

            <br>1. Submit leave request
            <br>2. Provide reason for leave
            <br>3. Obtain required permission
            <br>4. Record departure details
            <br>5. Return according to approved leave

            <br><br>

            Exact procedures depend on hostel rules.
        `,

        warden: `
            <b>🏠 Hostel Warden</b>

            <br><br>

            The hostel warden manages hostel-related
            activities and student discipline.

            <br><br>

            Students can approach the warden regarding:

            <br>• Room problems
            <br>• Hostel rules
            <br>• Leave permission
            <br>• Visitor permission
            <br>• Discipline issues
            <br>• Maintenance problems
            <br>• General hostel concerns
        `,

        discipline: `
            <b>🏠 Hostel Discipline</b>

            <br><br>

            Students living in the hostel are expected
            to maintain discipline.

            <br><br>

            Students should:

            <br>• Respect roommates
            <br>• Maintain cleanliness
            <br>• Avoid disturbing others
            <br>• Follow hostel timings
            <br>• Protect hostel property
            <br>• Follow warden instructions
        `,

        maintenance: `
            <b>🏠 Hostel Maintenance</b>

            <br><br>

            Students should report room or facility
            problems to the hostel administration.

            <br><br>

            Problems may include:

            <br>• Electrical issues
            <br>• Plumbing issues
            <br>• Furniture problems
            <br>• Water problems
            <br>• Room maintenance

            <br><br>

            Students should not attempt unsafe repairs
            themselves.
        `
    },


    // ========================================================
    // 📝 EXAMINATIONS
    // ========================================================

    exams: {

        general: `
            <b>📝 Examination Information</b>

            <br><br>

            The examination department manages
            examinations and related academic activities.

            <br><br>

            Examination activities may include:

            <br>• Internal examinations
            <br>• Semester examinations
            <br>• Examination timetable
            <br>• Hall tickets
            <br>• Examination centres
            <br>• Results
            <br>• Revaluation
            <br>• Supplementary examinations
            <br>• Examination rules
        `,

        timetable: `
            <b>📝 Examination Timetable</b>

            <br><br>

            The examination timetable contains the
            examination dates, subjects and timings.

            <br><br>

            Students should check the official
            examination notification for the latest
            timetable.

            <br><br>

            Students should verify:

            <br>• Subject name
            <br>• Examination date
            <br>• Examination time
            <br>• Examination centre
            <br>• Instructions
        `,

        dates: `
            <b>📝 Examination Dates</b>

            <br><br>

            Examination dates are announced officially
            by the examination department.

            <br><br>

            Students should not depend on unofficial
            information for examination dates.

            <br><br>

            Always check the latest official notification.
        `,

        internal: `
            <b>📝 Internal Examinations</b>

            <br><br>

            Internal examinations form part of the
            academic evaluation process.

            <br><br>

            They may include:

            <br>• Internal tests
            <br>• Assignments
            <br>• Class tests
            <br>• Presentations
            <br>• Practical assessments

            <br><br>

            Exact evaluation methods depend on the
            academic regulations of the institution.
        `,

        semester: `
            <b>📝 Semester Examinations</b>

            <br><br>

            Semester examinations are conducted according
            to the academic calendar and examination
            schedule.

            <br><br>

            Students should:

            <br>• Complete syllabus preparation
            <br>• Check the timetable
            <br>• Carry the required hall ticket
            <br>• Reach the examination hall on time
            <br>• Follow examination instructions
        `,

        hallTicket: `
            <b>📝 Hall Ticket</b>

            <br><br>

            A hall ticket contains important examination
            information about the student.

            <br><br>

            It may include:

            <br>• Student name
            <br>• Registration number
            <br>• Examination details
            <br>• Subjects
            <br>• Examination centre
            <br>• Photograph

            <br><br>

            Students should verify the information and
            report any errors to the examination department.
        `,

        rules: `
            <b>📝 Examination Rules</b>

            <br><br>

            Students should:

            <br>• Reach the examination hall on time
            <br>• Carry the required hall ticket
            <br>• Carry permitted stationery
            <br>• Follow invigilator instructions
            <br>• Maintain silence
            <br>• Avoid prohibited materials
            <br>• Avoid examination malpractice
            <br>• Follow official examination regulations
        `,

        preparation: `
            <b>📝 Examination Preparation</b>

            <br><br>

            Students can prepare for examinations by:

            <br>• Understanding the syllabus
            <br>• Preparing a study timetable
            <br>• Revising important concepts
            <br>• Practising previous question papers
            <br>• Solving mock tests
            <br>• Revising regularly
            <br>• Clearing doubts with faculty
        `,

        results: `
            <b>📝 Examination Results</b>

            <br><br>

            Examination results are published after the
            evaluation process is completed.

            <br><br>

            Students can check results through the
            official college or university result system
            when they are released.

            <br><br>

            Students should use their correct
            registration or examination details.
        `,

        revaluation: `
            <b>📝 Revaluation</b>

            <br><br>

            Students who want their examination answer
            scripts to be reviewed may be able to apply
            for revaluation according to university or
            college regulations.

            <br><br>

            Students should check:

            <br>• Application dates
            <br>• Application procedure
            <br>• Applicable fee
            <br>• Eligible subjects

            <br><br>

            Exact rules depend on the institution.
        `,

        supplementary: `
            <b>📝 Supplementary Examination</b>

            <br><br>

            Supplementary examinations may provide
            eligible students with another opportunity
            to complete a failed or pending subject.

            <br><br>

            Students should check official notifications
            for eligibility, application dates, fees
            and examination schedules.
        `,

        practical: `
            <b>📝 Practical Examinations</b>

            <br><br>

            Practical examinations evaluate a student's
            practical knowledge and ability to perform
            laboratory or technical activities.

            <br><br>

            Students should prepare:

            <br>• Practical concepts
            <br>• Laboratory procedures
            <br>• Programs
            <br>• Experiments
            <br>• Viva questions
            <br>• Record work
        `,

        examCentre: `
            <b>📝 Examination Centre</b>

            <br><br>

            The examination centre is the location where
            the student is required to write the examination.

            <br><br>

            Students should check the hall ticket or
            official examination notification for the
            assigned centre.
        `,

        absence: `
            <b>📝 Absence from Examination</b>

            <br><br>

            Students who are unable to attend an examination
            should immediately contact the appropriate
            examination authority.

            <br><br>

            The procedure for absence, medical reasons
            or special circumstances depends on the
            official examination regulations.
        `
    }
};


// ============================================================
// CATEGORY BUTTON
// ============================================================

function setQuestion(question) {

    input.value = question;

    input.focus();
}


// ============================================================
// SEND QUESTION
// ============================================================

form.addEventListener("submit", async function(event) {

    event.preventDefault();

    const question = input.value.trim();

    if (question === "") {
        return;
    }

    // Display user question
    addUserMessage(question);

    // Clear input
    input.value = "";

    // Show loading
    loading.style.display = "block";

    const submitButton = form.querySelector("button[type='submit']");
    submitButton.disabled = true;

    try {
        const response = await fetch("/api/chat", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ question })
        });
        const result = await response.json();

        if (!response.ok) {
            throw new Error(result.error || "The request could not be completed.");
        }

        if (result.found) {
            addAIMessage(result.answer);
        } else {
            addAIMessage(generateResponse(question), true);
        }
    } catch (error) {
        addAIMessage(`I couldn't get a response from the helpdesk: ${error.message}`);
    } finally {
        loading.style.display = "none";
        submitButton.disabled = false;
        input.focus();
    }
});


// ============================================================
// ADD USER MESSAGE
// ============================================================

function addUserMessage(question) {

    const message = document.createElement("div");

    message.className = "message user-message";

    message.innerHTML = `
        <div class="message-title">
            👤 You
        </div>

        <div class="message-text">
            ${escapeHTML(question)}
        </div>
    `;

    chatContainer.appendChild(message);

    scrollToBottom();
}


// ============================================================
// ADD AI MESSAGE
// ============================================================

function addAIMessage(answer, allowHTML = false) {

    const message = document.createElement("div");

    message.className = "message ai-message";

    const title = document.createElement("div");
    title.className = "message-title";
    title.textContent = "🧠 GenAI Academic Helpdesk";

    const text = document.createElement("div");
    text.className = "message-text";
    if (allowHTML) {
        text.innerHTML = answer;
    } else {
        text.textContent = answer;
        text.style.whiteSpace = "pre-wrap";
    }

    message.append(title, text);

    chatContainer.appendChild(message);

    scrollToBottom();
}


// ============================================================
// GENERATE RESPONSE
// ============================================================

function generateResponse(question) {

    const q = question.toLowerCase().trim();


    // ========================================================
    // GREETING
    // ========================================================

    if (
        q === "hi" ||
        q === "hello" ||
        q === "hai" ||
        q.includes("good morning") ||
        q.includes("good afternoon") ||
        q.includes("good evening")
    ) {

        return `
            👋 Hello!

            <br><br>

            I am your <b>GenAI Academic Helpdesk</b>.

            <br><br>

            You can ask me about:

            <br>📚 Library
            <br>💼 Placement
            <br>🏠 Hostel
            <br>📝 Exams

            <br><br>

            How can I help you?
        `;
    }


    // ========================================================
    // 📚 LIBRARY
    // ========================================================

    if (
        q.includes("library timing") ||
        q.includes("library timings") ||
        q.includes("library open") ||
        q.includes("library close")
    ) {
        return academicData.library.timings;
    }


    if (
        q.includes("library membership") ||
        q.includes("library member") ||
        q.includes("membership")
    ) {
        return academicData.library.membership;
    }


    if (
        q.includes("what books") ||
        q.includes("books available") ||
        q.includes("books in library") ||
        q.includes("available books") ||
        q.includes("library books")
    ) {
        return academicData.library.books;
    }


    if (
        q.includes("borrow") ||
        q.includes("borrow book") ||
        q.includes("how can i borrow")
    ) {
        return academicData.library.borrow;
    }


    if (
        q.includes("return book") ||
        q.includes("return books") ||
        q.includes("how can i return")
    ) {
        return academicData.library.returnBook;
    }


    if (
        q.includes("renew") ||
        q.includes("renewal") ||
        q.includes("renew book")
    ) {
        return academicData.library.renewal;
    }


    if (
        q.includes("lost book") ||
        q.includes("damaged book") ||
        q.includes("lost library book")
    ) {
        return academicData.library.lostBook;
    }


    if (
        q.includes("library rules") ||
        q.includes("rules in library") ||
        q.includes("library rule")
    ) {
        return academicData.library.rules;
    }


    if (
        q.includes("reading room") ||
        q.includes("study room") ||
        q.includes("reading facility")
    ) {
        return academicData.library.readingRoom;
    }


    if (
        q.includes("digital library") ||
        q.includes("e-book") ||
        q.includes("ebook") ||
        q.includes("online journal")
    ) {
        return academicData.library.digitalLibrary;
    }


    if (
        q.includes("journal") ||
        q.includes("journals") ||
        q.includes("magazine") ||
        q.includes("periodical")
    ) {
        return academicData.library.journals;
    }


    if (
        q.includes("previous question paper") ||
        q.includes("previous question papers") ||
        q.includes("old question paper")
    ) {
        return academicData.library.questionPapers;
    }


    if (
        q.includes("librarian") ||
        q.includes("library staff")
    ) {
        return academicData.library.librarian;
    }


    if (
        q.includes("library") ||
        q.includes("book") ||
        q.includes("books")
    ) {
        return academicData.library.general;
    }


    // ========================================================
    // 💼 PLACEMENT
    // ========================================================

    if (
        q.includes("placement opportunities") ||
        q.includes("placement opportunity") ||
        q.includes("job opportunities") ||
        q.includes("job opportunity")
    ) {
        return academicData.placement.opportunities;
    }


    if (
        q.includes("placement process") ||
        q.includes("recruitment process") ||
        q.includes("how placement works")
    ) {
        return academicData.placement.process;
    }


    if (
        q.includes("placement eligibility") ||
        q.includes("eligible for placement") ||
        q.includes("placement criteria") ||
        q.includes("eligibility criteria")
    ) {
        return academicData.placement.eligibility;
    }


    if (
        q.includes("placement registration") ||
        q.includes("register for placement") ||
        q.includes("placement register")
    ) {
        return academicData.placement.registration;
    }


    if (
        q.includes("aptitude") ||
        q.includes("aptitude test")
    ) {
        return academicData.placement.aptitude;
    }


    if (
        q.includes("coding test") ||
        q.includes("coding round") ||
        q.includes("coding assessment")
    ) {
        return academicData.placement.coding;
    }


    if (
        q.includes("technical interview") ||
        q.includes("technical round")
    ) {
        return academicData.placement.technicalInterview;
    }


    if (
        q.includes("hr interview") ||
        q.includes("hr round") ||
        q.includes("human resource interview")
    ) {
        return academicData.placement.hrInterview;
    }


    if (
        q.includes("placement interview") ||
        q.includes("interview process")
    ) {
        return academicData.placement.technicalInterview;
    }


    if (
        q.includes("placement training") ||
        q.includes("training for placement") ||
        q.includes("placement preparation")
    ) {
        return academicData.placement.training;
    }


    if (
        q.includes("resume") ||
        q.includes("resume preparation") ||
        q.includes("resume for placement")
    ) {
        return academicData.placement.resume;
    }


    if (
        q.includes("placement documents") ||
        q.includes("documents required") ||
        q.includes("required documents")
    ) {
        return academicData.placement.documents;
    }


    if (
        q.includes("which companies") ||
        q.includes("what companies") ||
        q.includes("companies visit") ||
        q.includes("recruiting companies")
    ) {
        return academicData.placement.companies;
    }


    if (
        q.includes("mock interview") ||
        q.includes("mock interviews")
    ) {
        return academicData.placement.mockInterview;
    }


    if (
        q.includes("career guidance") ||
        q.includes("career advice") ||
        q.includes("career options")
    ) {
        return academicData.placement.careerGuidance;
    }


    if (
        q.includes("placement") ||
        q.includes("job") ||
        q.includes("jobs") ||
        q.includes("recruitment") ||
        q.includes("company") ||
        q.includes("companies")
    ) {
        return academicData.placement.general;
    }


    // ========================================================
    // 🏠 HOSTEL
    // ========================================================

    if (
        q.includes("hostel admission") ||
        q.includes("hostel application") ||
        q.includes("how to get hostel")
    ) {
        return academicData.hostel.admission;
    }


    if (
        q.includes("hostel rules") ||
        q.includes("rules in hostel") ||
        q.includes("hostel rule")
    ) {
        return academicData.hostel.rules;
    }


    if (
        q.includes("hostel timing") ||
        q.includes("hostel timings") ||
        q.includes("hostel time")
    ) {
        return academicData.hostel.timings;
    }


    if (
        q.includes("hostel facilities") ||
        q.includes("facilities in hostel") ||
        q.includes("hostel facility")
    ) {
        return academicData.hostel.facilities;
    }


    if (
        q.includes("hostel room") ||
        q.includes("hostel rooms") ||
        q.includes("room facilities")
    ) {
        return academicData.hostel.rooms;
    }


    if (
        q.includes("mess") ||
        q.includes("mess facilities") ||
        q.includes("hostel mess")
    ) {
        return academicData.hostel.mess;
    }


    if (
        q.includes("hostel food") ||
        q.includes("hostel meals") ||
        q.includes("food in hostel")
    ) {
        return academicData.hostel.food;
    }


    if (
        q.includes("visitor") ||
        q.includes("visitors") ||
        q.includes("visitor rules")
    ) {
        return academicData.hostel.visitor;
    }


    if (
        q.includes("hostel leave") ||
        q.includes("leave rules") ||
        q.includes("leave procedure")
    ) {
        return academicData.hostel.leave;
    }


    if (
        q.includes("warden") ||
        q.includes("hostel warden")
    ) {
        return academicData.hostel.warden;
    }


    if (
        q.includes("hostel discipline") ||
        q.includes("discipline in hostel")
    ) {
        return academicData.hostel.discipline;
    }


    if (
        q.includes("hostel maintenance") ||
        q.includes("room maintenance") ||
        q.includes("maintenance problem")
    ) {
        return academicData.hostel.maintenance;
    }


    if (
        q.includes("hostel")
    ) {
        return academicData.hostel.general;
    }


    // ========================================================
    // 📝 EXAMINATIONS
    // ========================================================

    if (
        q.includes("examination timetable") ||
        q.includes("exam timetable") ||
        q.includes("exam schedule") ||
        q.includes("examination schedule")
    ) {
        return academicData.exams.timetable;
    }


    if (
        q.includes("exam date") ||
        q.includes("exam dates") ||
        q.includes("examination dates")
    ) {
        return academicData.exams.dates;
    }


    if (
        q.includes("internal exam") ||
        q.includes("internal examination") ||
        q.includes("internal exams")
    ) {
        return academicData.exams.internal;
    }


    if (
        q.includes("semester exam") ||
        q.includes("semester examination") ||
        q.includes("semester exams")
    ) {
        return academicData.exams.semester;
    }


    if (
        q.includes("hall ticket") ||
        q.includes("hall tickets")
    ) {
        return academicData.exams.hallTicket;
    }


    if (
        q.includes("examination rules") ||
        q.includes("exam rules") ||
        q.includes("rules for exam")
    ) {
        return academicData.exams.rules;
    }


    if (
        q.includes("exam preparation") ||
        q.includes("prepare for exam") ||
        q.includes("examination preparation")
    ) {
        return academicData.exams.preparation;
    }


    if (
        q.includes("exam result") ||
        q.includes("exam results") ||
        q.includes("examination result") ||
        q.includes("results")
    ) {
        return academicData.exams.results;
    }


    if (
        q.includes("revaluation") ||
        q.includes("revaluation process")
    ) {
        return academicData.exams.revaluation;
    }


    if (
        q.includes("supplementary") ||
        q.includes("supplementary exam") ||
        q.includes("supply exam")
    ) {
        return academicData.exams.supplementary;
    }


    if (
        q.includes("practical exam") ||
        q.includes("practical examination") ||
        q.includes("lab exam")
    ) {
        return academicData.exams.practical;
    }


    if (
        q.includes("exam centre") ||
        q.includes("exam center") ||
        q.includes("examination centre") ||
        q.includes("examination center")
    ) {
        return academicData.exams.examCentre;
    }


    if (
        q.includes("absent") ||
        q.includes("absence from exam") ||
        q.includes("missed exam")
    ) {
        return academicData.exams.absence;
    }


    if (
        q.includes("exam") ||
        q.includes("examination")
    ) {
        return academicData.exams.general;
    }


    // ========================================================
    // DEFAULT RESPONSE
    // ========================================================

    return `
        🤖 <b>GenAI Academic Helpdesk</b>

        <br><br>

        I could not find specific information related
        to your question in the current academic
        information.

        <br><br>

        You can ask me about:

        <br>📚 <b>Library</b>
        <br>💼 <b>Placement</b>
        <br>🏠 <b>Hostel</b>
        <br>📝 <b>Examinations</b>

        <br><br>

        <b>Example questions:</b>

        <br>• What are the library timings?
        <br>• How can I borrow a book?
        <br>• What are the library rules?
        <br>• What are the placement opportunities?
        <br>• What is the placement process?
        <br>• What are the placement eligibility criteria?
        <br>• What are the hostel rules?
        <br>• What facilities are available in the hostel?
        <br>• What are the hostel timings?
        <br>• Tell me about the examination timetable.
        <br>• How can I get my hall ticket?
        <br>• How can I check my examination results?
    `;
}


// ============================================================
// SECURITY
// ============================================================

function escapeHTML(text) {

    const div = document.createElement("div");

    div.textContent = text;

    return div.innerHTML;
}


// ============================================================
// SCROLL TO BOTTOM
// ============================================================

function scrollToBottom() {

    chatContainer.scrollTop =
        chatContainer.scrollHeight;
}


// ============================================================
// INITIAL SCROLL
// ============================================================

scrollToBottom();
