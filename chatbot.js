document.addEventListener("DOMContentLoaded", () => {
  const chatbox = document.querySelector(".chatbox");
  const sendBtn = document.getElementById("send-btn");
  const textarea = document.querySelector(".chat-input textarea");

  const faq = [
    {
      question: "Hii Chatbot!",
      answer:
        "Hey!✋ great to see you. I'm here to help you by giving answers to any questions you have.",
    },
    {
      question: "Hello Chatbot!",
      answer:
        "Hello!✋ great to see you. I'm here to help you by giving answers to any questions you have.",
    },
    {
      question: "Who are you?",
      answer:
        "I'm your Digital Assistant 🤖, here to help you navigate all the informations related to BScIT ! Whether you have questions or need any guidance, I'm just a message away. So tell me, How can I assist you today?",
    },
    {
      question: "How are you?",
      answer:
        "I'm doing great, thank you for asking ! I'm just a bunch of code. So, I don't have feelings, but I'm ready and excited to assist you today! How can I help you?",
    },
    {
      question: "What is your name?",
      answer: "My name is BBAU Chatbot! designed only for BScIT.",
    },
    {
      question: "What is the name of the University?",
      answer:
        "The Babasaheb Bhimrao Ambedkar University, Satellite Centre, Amethi is the name of the University.",
    },
    {
      question: "Name of the University?",
      answer:
        "The Babasaheb Bhimrao Ambedkar University, Satellite Centre, Amethi is the name of the University.",
    },
    {
      question: "What are the college hours?",
      answer:
        "University's timing is 9am to 5pm but you can use this chatbot anytime and talk to me anytime as your need.",
    },
    {
      question: "Timing of the University?",
      answer:
        "University's timing is 9am to 5pm but you can use this chatbot anytime and talk to me anytime as your need.",
    },
    {
      question: "Where is the college located?",
      answer:
        "The Babasaheb Bhimrao Ambedkar University, Satellite Centre, Amethi is located Near Tikarmafi-Police Station, Near Shiv Mandir, Ashram, Tikarmafi, Amethi- 227413",
    },
    {
      question: "How can I contact support?",
      answer:
        "You can contact our support team via mail at info@bbau.ac.in and registrar@bbau.ac.in. You can directly email at the given email and/or you can send your questions via Contact us box in the Contact Us page. The team will respond you as soon as possible.",
    },
    {
      question: "How can I contact support if I have further questions?",
      answer:
        "You can contact our support team via mail at info@bbau.ac.in and registrar@bbau.ac.in. You can directly email at the given email and/or you can send your questions via Contact us box in the Contact Us page. The team will respond you as soon as possible.",
    },
    {
      question: "Contact support?",
      answer:
        "You can contact our support team via mail at info@bbau.ac.in and registrar@bbau.ac.in. You can directly email at the given email and/or you can send your questions via Contact us box in the Contact Us page. The team will respond you as soon as possible.",
    },
    {
      question: "What is the duration of the BScIT program?",
      answer:
        "The BScIT program is a 3-year undergraduate course, divided into 6 semesters.",
    },
    {
      question: "What is the duration of the BScIT-Honours program?",
      answer:
        "The BScIT-Honours program is a 4-year undergraduate course, divided into 8 semesters.",
    },
    {
      question:
        "What are the eligibility criteria for BScIT at BBAU Satellite Centre Amethi?",
      answer:
        "The eligibility criteria for admission to BScIT is a 10+2 qualification in Science stream with Mathematics as one of the subjects, and the candidate must pass with a minimum of 50% aggregate marks.",
    },
    {
      question: "What is the course fee for BScIT?",
      answer:
        "The course fee for BScIT at the BBAU Satellite Centre Amethi is approximately ₹15,000 per year, but it is recommended to check the official website or contact the admissions office for the latest information.",
    },
    {
      question: "What subjects are covered in the first semester of BScIT?",
      answer:
        "The subjects in the first semester typically include -<br>Programming Fundamentals using C,<br>Computer Organization & Architecture,<br>Mathematics-I,<br>Communication Skills,<br>Environmental Science.",
    },
    {
      question:
        "Are there internship opportunities provided by the university for BScIT students?",
      answer:
        "Yes, BBAU encourages students to pursue internships during their course. Students are often provided guidance on finding internships, especially in their final year.",
    },
    {
      question: "What are the career options after completing BScIT?",
      answer:
        "After completing BScIT, you can pursue careers in -<br>Software Development,<br>System Analyst,<br>Network Administration,<br>Database Management,<br>IT Consultancy,<br>Further studies like MScIT or MCA.",
    },
    {
      question:
        "How do I apply for the BScIT program at BBAU, Satellite Centre, Amethi?",
      answer:
        "You can apply for the BScIT program through the BBAU official website during the admission period. The application process is online, and you will need to provide academic details and required documents.",
    },
    {
      question: "What are the class timings for BScIT students?",
      answer:
        "Class timings typically run from 9:00 AM to 4:00 PM, with breaks in between. However, the schedule may vary depending on the semester and subject.",
    },
    {
      question: "Is hostel accommodation available for BScIT students?",
      answer:
        "Yes, BBAU, Satellite Centre, Amethi provides hostel accommodation only for girls. You can inquire with the hostel office for availability and fees.",
    },
    {
      question: "How can I get my academic transcript from the university?",
      answer:
        "You can request your academic transcript from the university's examination department. You may need to fill out a request form and provide details such as your roll number and year of passing.",
    },
    {
      question: "How can I access the university's library resources online?",
      answer:
        "The university provides access to digital library resources through its official portal. You can log in using your student credentials to access e-books, journals, and other academic materials.",
    },
    {
      question:
        "Are there any extracurricular activities or student clubs available for BScIT students?",
      answer:
        "Yes, the university offers various student clubs, technical societies, and extracurricular activities such as sports, coding competitions, seminars, and cultural events that BScIT students can participate in.",
    },
    {
      question: "How can I contact the faculty of BScIT for doubts or queries?",
      answer:
        "You can contact the faculty members via email or during their office hours. The contact details of faculty members are usually provided on the university website or you can get them through the university's administration office.",
    },
    {
      question: "What is the examination pattern for BScIT?",
      answer:
        "The BScIT program follows a semester system, and each semester has a mid-semester exam and an end-semester exam. Additionally, there are internal assessments, assignments, and practical exams.",
    },
    {
      question: "How do I download my admit card for the exams?",
      answer:
        "You can download your admit card from the official BBAU student portal. Log in using your roll number and password, and navigate to the Examination section to download it.",
    },
    {
      question:
        "What is the passing criteria for each subject in the BScIT program?",
      answer:
        "To pass a subject, a student typically needs to score at least 40% in both internal and external exams. Specific details can be found in the university's academic regulations.",
    },
    {
      question:
        "What are the transport facilities available for students to reach the college?",
      answer:
        "If You want to reach the University from the Amethi Station or bus stand, then you will have to take e-rikshaw to reach the university but there is no any transport facility provided by the university for their students.",
    },
    {
      question:
        "Is there a student grievance cell at the BBAU Satellite Centre Amethi?",
      answer:
        "No, there is no any student grievance cell(Complaint room) at the BBAU, Satellite Centre Amethi. BUt if you have any complaint related to any specific topic or anything, then you can write a letter and you can submit this letter to the Director's Office.",
    },
    {
      question:
        "How can I get information about the latest notices and announcements from the University?",
      answer:
        "You can get all the informations about the latest notices and announcements from the University in your course whatsapp group.",
    },
    {
      question:
        "Are there any language or communication skills courses available for students at the college?",
      answer:
        "Yes, there is English language or communication skills course available for students at the University along with their course of BScIT.",
    },
    {
      question:
        "How do I report a technical issue with the University's online portal?",
      answer:
        "You can email the particular technical issue on the email of the BBAU's email ID:-'' and/or you can contact in the administrative department.",
    },
    {
      question:
        "Is there an on-campus medical facility available for students?",
      answer:
        "Sorry to say, but there is no any medical facility available for students,but there is a facility of an emergency car which is used in emergency cases.",
    },
    {
      question:
        "Are there any workshops or training sessions on the latest IT technologies organized by the university?",
      answer:
        "No, University not organizing any such types of training sessions or workshops but the University provides the latest IT technologies training session's links which is conducted by other institutes or organizations virtually.",
    },
    {
      question:
        "What is the dress code, if any, for students at the BBAU Satellite Centre Amethi?",
      answer:
        "There is no any dress code for the students at the BBAU Satellite Centre, Amethi. You can wear any kind of dress.",
    },
    {
      question:
        "How can I get a refund if I decide to withdraw from the BScIT program after admission?",
      answer:
        "If you want refund after the admission, then you will have to contact in the administrative department of BScIT and then follow the steps as provided by them.",
    },
    {
      question:
        "What is the process for applying for migration to another campus or university?",
      answer:
        "If you want to apply for the migration, then you will have to contact in the administrative department of BScIT and then you will have to submit an application for it.",
    },
    {
      question:
        "What facilities are available for students with disabilities at the college?",
      answer:
        "Sorry for that, but there is no any special facility are available for the students with disabilities at the university.",
    },
    {
      question:
        "How do I apply for a transfer certificate if I wish to leave the university?",
      answer:
        "You only need to write an application and submit it to the administrative department of BScIT.",
    },
    {
      question:
        "What are the library hours, and how do I borrow or return books?",
      answer:
        "Library hours is same as college hours i.e. from 9:30 am to 5:00 pm. If you want to borrow or return books then you will have to fill a form for the library card and by using this library card, you can borrow or return books.",
    },
    {
      question:
        "How can I participate in sports activities or access the gym facilities at the college?",
      answer:
        "If you want to participate in sports activities then you will have to contact with the head of sports department i.e. Dr. Shankar Kr. Lal and there is gym facility available but the gym is always closed due to some reasons.",
    },
    {
      question:
        "What is the process for requesting an extension for submitting assignments or project work?",
      answer:
        "If you want to request for an extension in the submission of assignments or project work, then you will have to contact the faculty of that particular subject.",
    },
    {
      question: "What is the procedure for withdrawing from the BScIT program?",
      answer:
        "To withdraw from the BScIT program at BBAU Satellite Centre Amethi, students need to submit a formal withdrawal application. This application should be addressed to the Head of the Department and include details such as the student's name, roll number, and reason for withdrawal. After submitting the application, students may need to meet with the administration to finalize the withdrawal process and return any university property, like library books or ID cards. Any tuition or fees already paid may be non-refundable, depending on the time of withdrawal and university policy.",
    },
    {
      question: "What is the process for issuing a duplicate identity card?",
      answer:
        "If a student loses their identity card, they must submit a request for a duplicate card at the college's administration office. This request typically includes a written application, proof of identity, and a small fee for re-issuing the ID. Students may also need to provide an affidavit or police report, depending on the circumstances of the loss, to process the replacement. The new ID card is generally issued within a few days of the application.",
    },
    {
      question:
        "How can I get a recommendation letter from the college for internships or job applications?",
      answer:
        "Students seeking a recommendation letter for internships or jobs can request one from their faculty advisor or the Head of the Department. It is recommended to apply in advance, providing the purpose of the recommendation and any relevant details like the internship or job description. The faculty will review the student's academic performance and achievements before issuing a formal letter. Some departments may have specific forms or formats for such requests.",
    },
    {
      question:
        "How does the college handle cases of academic misconduct or plagiarism?",
      answer:
        "Academic misconduct, including plagiarism, is taken seriously at BBAU Satellite Centre Amethi. When a case is suspected, the student may be called in for a discussion with the faculty or disciplinary committee. If found guilty, penalties can range from redoing assignments, failing the subject, or even suspension depending on the severity of the offense. The college aims to maintain academic integrity and follows a structured policy to address these cases fairly.",
    },
    {
      question:
        "Does the college offer any mental health or counseling services for students?",
      answer:
        "BBAU Satellite Centre Amethi is committed to student well-being and may offer access to mental health and counseling services. Typically, the college provides a counselor or advisor for students who need support with academic or personal challenges. Students are encouraged to reach out to the student welfare department or administration to inquire about available counseling services, which may include individual sessions, workshops, or support groups.",
    },
    {
      question: "How do I access the student portal for BScIT?",
      answer:
        "To access the student portal, students at BBAU Satellite Centre Amethi should log in through the official university website with their unique student credentials. If students face difficulties, they can reach out to the administration office for help with access or password recovery.",
    },
    {
      question: "What is the grading system for BScIT at BBAU?",
      answer:
        "BBAU follows a semester-based grading system with a standard Grade Point Average(GPA) scale. Grades range from A+ to F, with A+ representing excellent performance and F indicating failure. Each grade corresponds to a specific grade point value. You also can get above the A+ grade which is O means Outstanding.",
    },
    {
      question: "How many credits are required to complete the BScIT program?",
      answer:
        "To complete the BScIT or BScIT Honors program, students must fulfill a credit requirement as specified in the curriculum, typically around 120-140 credits, depending on the specific program structure.",
    },
    {
      question: "Can I change my elective course after selecting any course?",
      answer:
        "Students may request to change their elective course after selecting any course within the specified period at the beginning of the semester. Approval is based on availability and faculty consent, and the change is subject to the college's elective policy.",
    },
    {
      question: "How do I apply for a scholarship for the BScIT program?",
      answer:
        "Scholarships for the BScIT program can be applied through the university's scholarship portal. Students should meet specific eligibility criteria, which may include academic performance, financial need, or other qualifications. Required documents include transcripts, proof of income, and a completed scholarship application form.",
    },
    {
      question: "What is the procedure for reappearing in a failed subject?",
      answer:
        "To reappear in a failed subject, students need to fill the back-paper examination form after 1 year i.e. if any student fail in any subject in the 1st semester, then he/she will have to give the re-exam in the 3rd semester with the 3rd semester exams. He/she must have to follow the reappearance guidelines provided by the administration.",
    },
    {
      question: "How can I check my attendance for the BScIT courses?",
      answer:
        "If you want to check your attendance for the BScIT then you will have to contact the teaching faculty of that particular subject.",
    },
    {
      question: "Is there any provision for online classes for BScIT students?",
      answer:
        "Online classes are offered for certain courses when needed, especially during disruptions. But this time university not offers any online classes for the BScIT students.",
    },
    {
      question: "How can I register for the upcoming semester?",
      answer:
        "You don't need to register for the upcoming semester, you only have to give the semester exam of the currently running semester, then after the exam you will automatically eligible for the next semester.",
    },
    {
      question: "What is the procedure for applying for a leave of absence?",
      answer:
        "Students needing a leave of absence must submit a written application to the Head of the Department, explaining the reason and duration. If the leave exceeds a specified period, students may need additional documentation, such as medical certificates or guardian approval.",
    },
    {
      question:
        "How do I participate in university-hosted technical fests or seminars?",
      answer:
        "Students can sign up for technical fests or seminars through announcements as sended in the course whatsapp group. Participation forms are generally digital, so you will get the participation links before the event.",
    },
    {
      question: "Is there an option for lateral entry into the BScIT program?",
      answer:
        "Yes, lateral entry is available for students who meet specific eligibility criteria, such as having completed a diploma in a relevant field. Applicants must follow the university's admission process for lateral entry.",
    },
    {
      question: "How can I access previous years' question papers for BScIT?",
      answer:
        "Previous years' question papers can only be accessed by the seniors. Alternatively, you don't have any option.",
    },
    {
      question:
        "What facilities are available for practical sessions or lab work in BScIT?",
      answer:
        "The BBAU Satellite Centre Amethi doesn't provide any computer lab equipped with the necessary hardware and software for BScIT practical sessions.",
    },
    {
      question: "How do I apply for a revaluation of my BScIT exam results?",
      answer:
        "Students can apply for revaluation by submitting a revaluation form to the examination office and paying any applicable fees, if required. This application must be filed within the specified deadline after results are declared.",
    },
    {
      question:
        "What is the deadline for paying the tuition fee for the BScIT program?",
      answer:
        "The tuition fee payment deadline is usually announced before each semester. Students should check the whatsapp BScIT course group's messages for exact dates and avoid late fees by paying within the specified timeframe.",
    },
    {
      question:
        "Can BScIT students work part-time or participate in work-study programs?",
      answer:
        "While BBAU encourages students to focus on academics, some work-study programs or part-time internships are permitted with departmental approval.",
    },
    {
      question:
        "What is the process for getting my degree certificate after completing BScIT?",
      answer:
        "After graduation, students must submit a degree application form and pay any associated fees(if required). The university typically takes a few months to process and issue degree certificates.",
    },
    {
      question: "How are industrial visits organized for BScIT students?",
      answer:
        "Industrial visits are organized before or during the starting of your last semester of your course, often in collaboration with companies or industry partners. Students are notified in advance about such participations, may require consent forms or other formalities.",
    },
    {
      question:
        "What is the process for submitting project work or final-year dissertations for BScIT?",
      answer:
        "Final-year projects or dissertations must be submitted by the deadline set by the department. Students are generally required to present their work in front of a panel and submit a hard copy and digital copy of their project to the department office, when required.",
    },
    {
      question:
        "Are there any opportunities for student exchange programs or international collaborations for BScIT students?",
      answer:
        "Yes, BBAU encourages student exchange programs and international collaborations, allowing BScIT students to gain global exposure and enhance their educational experience through partnerships with foreign universities.",
    },
    {
      question:
        "Is there a mentorship program available for BScIT students to connect with alumni or industry professionals?",
      answer:
        "The university doesn't have a mentorship program that connects BScIT students with alumni and industry professionals.",
    },
    {
      question: "What is the average class size for BScIT courses?",
      answer:
        "The average class size for BScIT courses at BBAU is typically around 30 to 50 students. This allows for personalized attention from faculty and more interactive learning experiences.",
    },
    {
      question:
        "Are there any opportunities for research or independent study projects within the BScIT program?",
      answer:
        "Yes, BScIT students have opportunities to engage in research projects and independent studies. Students can work with faculty on ongoing research or propose their projects, fostering a deeper understanding of IT concepts.",
    },
    {
      question:
        "What is the university's policy on plagiarism and academic integrity?",
      answer:
        "BBAU upholds strict policies on plagiarism and academic integrity. Any form of academic dishonesty is taken seriously and may result in disciplinary actions, including failing the course or more severe consequences.",
    },
    {
      question:
        "Are there any counseling or career guidance services available for BScIT students?",
      answer:
        "The university offers counseling and career guidance services to BScIT students, providing support in academic planning, career exploration, and job placement assistance.",
    },
    {
      question:
        "Is there a dedicated computer lab or IT facilities for BScIT students to use?",
      answer:
        "No, BBAU doesn't provide any dedicated computer lab equipped with modern technology and software for BScIT students, ensuring they have access to the necessary tools for practical learning.",
    },
    {
      question:
        "What is the university's policy on attendance for BScIT courses?",
      answer:
        "BBAU has a mandatory attendance policy for BScIT courses, requiring students to maintain a minimum attendance percentage(75%) to be eligible for examinations and course credits.",
    },
    {
      question:
        "Are there any opportunities for students to participate in hackathons or coding competitions?",
      answer:
        "BBAU actively encourages participation in hackathons and coding competitions, providing students with platforms to showcase their skills, collaborate, and innovate within the tech community. Every year, faculty organize these types of hackathons and coding competitions.",
    },
    {
      question:
        "What is the process for obtaining a recommendation letter from a faculty member for BScIT students?",
      answer:
        "BScIT students can request a recommendation letter from faculty by approaching them directly, discussing their achievements, and providing necessary details about the opportunity for which the letter is needed.",
    },
    {
      question:
        "Is there a student council or representative body for BScIT students?",
      answer:
        "No, there is not any student council that represents BScIT students' interests and concerns. There is no any body which works closely with faculty and administration to enhance the student experience.",
    },
    {
      question:
        "What is the university's policy on using mobile phones or electronic devices during classes?",
      answer:
        "BBAU has a policy that allows the use of mobile phones and electronic devices during class when you have the permission of that faculty who is taking your class at that time, if it is used for educational purposes and without disrupting the learning environment.",
    },
    {
      question:
        "Are there any opportunities for students to participate in community service or volunteer work?",
      answer:
        "BBAU encourages students to engage in community service and volunteer work, providing opportunities to give back to the community while enhancing their social responsibility and leadership skills.",
    },
    {
      question:
        "What is the university's policy on disability accommodations for BScIT students?",
      answer:
        "The university doesn't committed to inclusivity and doesn't provides accommodations for students with disabilities, ensuring equal access to education and resources. There is no any special rule for this, but disabled students will also get equal opportunity to study over here.",
    },
    {
      question:
        "Is there a student health center or medical facility available on campus?",
      answer:
        "No, BBAU doesn't have any student health center that offers medical services.",
    },
    {
      question:
        "What is the university's policy on using social media for academic purposes?",
      answer:
        "BBAU encourages the use of social media for academic purposes, promoting collaboration and communication among students and faculty while adhering to guidelines for respectful and constructive interactions.",
    },
    {
      question:
        "Are there any opportunities for BScIT students to participate in sports or extracurricular activities?",
      answer:
        "Yes, BBAU offers various sports and extracurricular activities for BScIT students, fostering a well-rounded education and promoting physical health and teamwork.",
    },
    {
      question:
        "What is the university's policy on the use of open-source software or tools in BScIT courses?",
      answer:
        "BBAU promotes the use of open-source software and tools in BScIT courses, encouraging students to familiarize themselves with widely-used technologies in the industry.",
    },
    {
      question:
        "Are there any opportunities for BScIT students to pursue minors or double majors with other programs?",
      answer:
        "BBAU allows BScIT students to pursue minors or double majors in other programs, providing flexibility for students to broaden their academic scope and career options.",
    },
    {
      question:
        "What is the university's policy on academic probation or suspension for BScIT students?",
      answer:
        "BBAU has policies in place for academic probation and suspension, which are applied if a student fails to maintain the required academic standards. Students are typically given the opportunity to improve their performance before facing suspension.",
    },
    {
      question: "Are there volunteer positions for managing university events?",
      answer:
        "Yes, BBAU Satellite Centre often seeks student volunteers for various university events, such as cultural fests, seminars, and workshops. BScIT students can sign up as volunteers to gain experience in event management and meet students from other disciplines.",
    },
    {
      question:
        "Are there student discounts available for software or hardware purchases?",
      answer:
        "The university provides guidance to students regarding discounts on certain software packages, especially for educational use. BScIT students can check with the IT department or student services to get information about ongoing discounts for hardware and software relevant to their studies.",
    },
    {
      question: "How do I report maintenance issues on campus?",
      answer:
        "Maintenance issues can be reported directly to the campus administration office. The administration staff will then address the issue or forward it to the relevant department for prompt action.",
    },
    {
      question:
        "Are there any special facilities or resources for final-year students?",
      answer:
        "Final-year BScIT students don't have any access to additional resources but it may be available in future. They can receive guidance on internships, job placements, and research opportunities by professors.",
    },
    {
      question: "Are there any app development workshops for BScIT students?",
      answer:
        "The Satellite Centre does not organize any workshops on topics like app development, web technologies, and programming languages.",
    },
    {
      question: "Can I access my attendance record for individual subjects?",
      answer:
        "Students can only access their attendance via particular faculty of that particular subject.",
    },
    {
      question: "How can I get involved in student government elections?",
      answer:
        "BBAU encourages students to participate in student government. BScIT students interested in representing their peers can get information on the nomination and election process from the campus administration or student council.",
    },
    {
      question: "Is there a fitness or wellness program offered for students?",
      answer:
        "The Satellite Centre promotes physical and mental wellness through various activities. Students have access to wellness sessions which are occasionally organized.",
    },
    {
      question:
        "Are there advanced coding courses for students who excel in programming?",
      answer:
        "Advanced students doesn't offered any special courses or given access to online resources.",
    },
    {
      question:
        "What are the guidelines for scheduling meetings with professors?",
      answer:
        "BScIT students can schedule meetings during faculty office hours. Students should ideally request appointments.",
    },
    {
      question: "Are there any inter-college competitions or collaborations?",
      answer:
        "The BBAU Satellite Centre doesn't organize any inter-college competitions, but you can join any inter-college coding competitions with your own choice.",
    },
    {
      question:
        "How do I submit an idea for a new campus club or organization?",
      answer:
        "Students interested in forming a new club can submit a proposal to the student council or administration. Proposals should outline the purpose of the club, proposed activities, and a preliminary list of members to be considered.",
    },
    {
      question: "Are there academic awards given to top-performing students?",
      answer:
        "BBAU Satellite Centre doesn't recognizes high-achieving students in any department.",
    },
    {
      question: "How can I request special accommodations for exam conditions?",
      answer:
        "Students who require special accommodations due to health or personal circumstances can submit a formal request to the examination office. Supporting documentation may be required to approve the accommodations.",
    },
    {
      question:
        "What is the protocol for reporting suspicious activities on campus?",
      answer:
        "Any suspicious activities should be reported immediately to campus security or the administration office. BBAU Satellite Centre prioritizes student safety and encourages all students to stay vigilant and proactive about campus security.",
    },
    {
      question:
        "What is the workload like for BScIT and BScIT Honors programs?",
      answer:
        "The BScIT programs require students to maintain a balanced workload of lectures, assignments, and projects. The Honors program may have a slightly heavier workload due to additional research projects and in-depth subject matter. Both programs encourage consistent study to manage coursework effectively.",
    },
    {
      question:
        "Are there any opportunities for undergraduate research projects in BScIT?",
      answer:
        "Yes, BScIT students, especially those in the Honors program, have opportunities to engage in research projects under faculty guidance. These projects are typically offered in the later years of the program and allow students to gain research experience in areas of their interest.",
    },
    {
      question:
        "What is the emphasis on practical learning and hands-on projects in BScIT courses?",
      answer:
        "The BScIT curriculum is designed to include a significant amount of practical learning. Projects, and assignments encourage hands-on experience with real-world IT applications, fostering a deeper understanding of theoretical concepts.",
    },
    {
      question:
        "How is the course curriculum designed to keep up with the latest advancements in IT?",
      answer:
        "The BScIT curriculum is to incorporate recent developments in the IT industry. It includes emerging technologies and current trends, ensuring that students are well-prepared to enter the professional field after graduation.",
    },
    {
      question:
        "Are there any elective courses that I can choose to specialize in within BScIT?",
      answer:
        "Yes, students can select from elective courses based on their areas of interest, allowing them to specialize in topics like software development, data analytics, cybersecurity, and web technologies.",
    },
    {
      question:
        "How are group projects and assignments evaluated in BScIT courses?",
      answer:
        "Group projects are evaluated based on various criteria, including the quality of work, innovation, and teamwork. Professors assess both individual contributions and group performance, often through presentations and reports.",
    },
    {
      question:
        "What are the office hours of the professors and teaching assistants for BScIT courses?",
      answer:
        "Office hours vary by professor, but generally, faculty members are available for consultations during specific times each week, you can simply ask for him/her for a meeting.",
    },
    {
      question:
        "How can I seek help from the faculty for academic difficulties or personal issues?",
      answer:
        "Professors are approachable and willing to support students facing academic challenges. For personal issues, students can also reach out to the student support services or contact in the administration office.",
    },
    {
      question:
        "Is there a dedicated academic advisor for BScIT and BScIT Honors students?",
      answer:
        "No, BScIT and Honors students doesn't assigned any academic advisors who guide them in course selection, academic progression, and career planning, but in future it maybe available for students.",
    },
    {
      question: "What are the timings for the computer labs and library?",
      answer:
        "The computer labs and library are open from 9:00 AM to 5:00 PM on weekdays(Monday to Friday), offering ample time for students to complete lab assignments and access study resources.",
    },
    {
      question:
        "How can I access the high-speed internet facilities on campus?",
      answer:
        "The campus provides high-speed internet access, with Wi-Fi available in labs, classrooms, and other college areas. Students need to use their university credentials to access the network, only for the first time.",
    },
    {
      question:
        "Are there any printing and scanning facilities available for students?",
      answer:
        "Yes, printing and scanning facilities are available on campus, located in the canteen, and students can use them for a nominal fee.",
    },
    {
      question:
        "Is there a career counseling center that provides guidance for BScIT and BScIT Honors students?",
      answer:
        "Career counseling center are not available for any department to discuss industry-specific career paths and opportunities.",
    },
    {
      question:
        "Are there any clubs or organizations specifically for IT enthusiasts and programmers?",
      answer:
        "Yes, BBAU Satellite Centre Amethi encourages IT students to join tech clubs and student-led organizations, including coding and software development groups. These clubs offer a space for students to collaborate, participate in hackathons, and share knowledge.",
    },
    {
      question:
        "How can I participate in technical events and competitions organized by the college?",
      answer:
        "The college organizes various technical events throughout the year. Students can participate by contacting their department. Notices regarding these events are typically messaged in your course's whatsapp group.",
    },
    {
      question:
        "Are there any opportunities for volunteering or community service initiatives?",
      answer:
        "Yes, students can volunteer in college-led social initiatives or community service programs. These opportunities not only enhance community engagement but also build leadership skills.",
    },
    {
      question:
        "What are the rules and regulations regarding on-campus accommodation for BScIT students?",
      answer:
        "There is no availability of on-campus accommodation for boys students because of the non-availability of boys hostel.",
    },
    {
      question:
        "Are there any scholarships or financial aid options available for BScIT students?",
      answer:
        "BBAU offers merit-based scholarships, need-based financial aid, and reserved-category scholarships. Students can inquire at the scholarship office or check the website for eligibility requirements and application deadlines.",
    },
    {
      question:
        "What is the process for applying for a fee waiver or reduction?",
      answer:
        "Fee waivers are granted based on financial need and academic performance. Interested students should approach the administration office, fill out the necessary forms, and provide relevant documentation for consideration.",
    },
    {
      question:
        "Are there any part-time job opportunities or internships on campus?",
      answer:
        "No, there are no any part-time jobs and internships on campus. The placement cell provides information about internships with local companies.",
    },
    {
      question: "How can I manage my expenses and budget as a BScIT student?",
      answer:
        "Students are encouraged to track their monthly expenses and take advantage of student discounts.",
    },
    {
      question:
        "What is the placement record of the college for BScIT and BScIT Honors graduates?",
      answer:
        "BBAU Satellite Centre Amethi has a growing placement record, with graduates being placed in various IT firms and tech companies. The placement cell can provide specific statistics and placement records for the latest graduating batches.",
    },
    {
      question: "How can I prepare for job interviews and resume writing?",
      answer:
        "The college doesn't organize resume-building workshops and mock interviews or any job interviews.",
    },
    {
      question:
        "Are there any mock interview sessions or career workshops organized by the college?",
      answer:
        "No, the college doesn't organize mock interviews, career counseling sessions, and skill development workshops.",
    },
    {
      question:
        "What are the top companies that recruit from BBAU Satellite Centre, Amethi?",
      answer:
        "There are no any top companies that recruit from BBAU Satellite Centre, Amethi. Only local companies of lucknow recruit. But in future, there may be availability of some top companies.",
    },
    {
      question:
        "How can I stay updated about the latest job openings and recruitment drives?",
      answer:
        "Job openings and recruitment drives are updated on the college's placement portal and through notices on campus.",
    },
    {
      question:
        "How can I report a grievance or complaint related to academic or non-academic issues?",
      answer:
        "Students can report grievances by filling out a complaint form available at the administrative office.",
    },
    {
      question:
        "What is the process for requesting a leave of absence from classes?",
      answer:
        "To request a leave of absence, students must submit an application to their respective faculty or department head, detailing the reason and duration of absence. For medical emergencies, supporting documents may be required.",
    },
    {
      question:
        "What is the student-teacher ratio for BScIT at BBAU Satellite Centre Amethi?",
      answer:
        "The student-teacher ratio in the BScIT program is designed to ensure personalized attention, generally around 25:1, allowing faculty to provide dedicated support to students.",
    },
    {
      question:
        "Are there any guest lectures or industry expert sessions for BScIT students?",
      answer:
        "Yes, BBAU Satellite Centre Amethi sometimes organizes guest lectures and sessions with industry experts to keep students updated with the latest trends and skills in IT.",
    },
    {
      question: "What is the procedure for enrolling in summer courses?",
      answer: "There is no any facility of summer courses for students.",
    },
    {
      question: "Does the BScIT program offer any specialization tracks?",
      answer:
        "Currently, the BScIT program at BBAU offers foundational IT education, though discussions are underway to introduce specializations such as Data Science and Cybersecurity in the future.",
    },
    {
      question:
        "Are there any bridge courses for students who need extra help in certain subjects?",
      answer:
        "Yes, bridge courses are available, especially in subjects like programming and mathematics, to help students strengthen their foundational knowledge.",
    },
    {
      question:
        "What type of projects are assigned in the final year of BScIT?",
      answer:
        "Final-year BScIT students work on real-world projects that involve software development, database management, and web technologies, designed to showcase practical skills to potential employers.",
    },
    {
      question:
        "How often are practicals or lab sessions conducted in the BScIT course?",
      answer:
        "Practical sessions are conducted weekly for each core subject, with a strong focus on hands-on learning in labs for programming, networking, and database management.",
    },
    {
      question:
        "Can I transfer credits from another university into the BScIT program?",
      answer:
        "Credit transfer policies are subject to the university's guidelines. Students from recognized institutions may apply for credit transfer by providing transcripts and course details for evaluation.",
    },
    {
      question:
        "How are group projects or assignments managed in the BScIT program?",
      answer:
        "Group projects are assigned for collaborative learning, with students working in small teams. Each group is guided by a faculty advisor to ensure fair division of work and accountability.",
    },
    {
      question:
        "Are there specific times during the year when BScIT faculty are available for office hours?",
      answer:
        "Faculty members hold office hours every week, with additional availability during exam preparation periods.",
    },
    {
      question:
        "Are there any preparatory sessions for students before the exams?",
      answer:
        "Yes, the faculty organizes review and preparatory sessions to help students understand key concepts and clarify doubts before exams.",
    },
    {
      question:
        "What resources are available for students to improve their coding skills?",
      answer:
        "Coding resources include access to online coding platforms, library resources.",
    },
    {
      question: "Can BScIT students propose new student clubs or activities?",
      answer:
        "Students are encouraged to propose and start new clubs by presenting their ideas to the student affairs committee, which evaluates and approves new clubs based on student interest and resource availability.",
    },
    {
      question:
        "How can I stay updated with upcoming seminars or workshops relevant to BScIT?",
      answer:
        "Notices for seminars, workshops, and events are messaged in you course's whatsapp group.",
    },
    {
      question:
        "Does BBAU Satellite Centre Amethi have partnerships with tech companies?",
      answer:
        "Yes, BBAU Satellite Centre has partnerships with a few tech companies to offer internships and industry training. More collaborations are in the pipeline to enhance job placement prospects.",
    },
    {
      question:
        "Are there any platforms for BScIT students to share their projects or research?",
      answer:
        "No, there are no any platforms for BScIT students to share their projects or research.",
    },
    {
      question:
        "What tools are used to manage assignments and submissions in the BScIT program?",
      answer:
        "BBAU uses a Learning Management System (LMS) where students can submit assignments.",
    },
    {
      question:
        "How often are the BScIT courses updated to reflect industry standards?",
      answer:
        "The curriculum is reviewed and updated every three years, incorporating feedback from industry experts to align the program with current technology trends and industry needs.",
    },
    {
      question:
        "Is there any special recognition for high-performing BScIT students?",
      answer: "No, high-performing students are not awarded.",
    },
    {
      question:
        "How can I schedule an appointment with my BScIT academic advisor?",
      answer:
        "Students can schedule appointments by contacting their advisors directly or through the department office. Advisors are typically available during designated office hours for consultation.",
    },
    {
      question:
        "Does the university provide any training for presentation or public speaking skills?",
      answer:
        "No, the university doesn't organize any workshops and seminars on presentation and public speaking skills but some faculty take presentation to improve our public speaking skills, specifically aimed at helping students develop confidence in professional settings.",
    },
    {
      question:
        "What are the available resources for BScIT students preparing for campus placements?",
      answer:
        "BScIT students doesn't have access to any such type of resource preparing for campus placements.",
    },
    {
      question:
        "How does the university handle late submissions of assignments?",
      answer:
        "Late submissions are generally penalized according to university policy, but exceptions may be granted for valid reasons if students inform faculty members in advance.",
    },
    {
      question:
        "What is the policy on rescheduling exams due to medical reasons?",
      answer:
        "Students can request for the rescheduling of sessional exam by providing a valid medical certificate and notifying the examination cell. Approval is granted based on individual circumstances. But there is no any rule or policy to reschedule your semester exams (If you will absent in any semester exam due to any reason so you will have to give the Back paper next year).",
    },
    {
      question:
        "Are there any online platforms provided by the college for collaborative work?",
      answer:
        "The university doesn't provides any access to online collaborative tools.",
    },
    {
      question: "What extracurricular courses can complement my BScIT degree?",
      answer:
        "Courses in soft skills,and project management are available to complement the BScIT degree, enhancing employability and broader learning.",
    },
    {
      question: "Are there any leadership programs for BScIT students?",
      answer:
        "Yes, students can participate in leadership programs like student government, technical clubs, and event organization roles, providing them with valuable leadership experience.",
    },
    {
      question:
        "What is the procedure for reporting grievances related to academic issues?",
      answer:
        "Students can file grievances with the Academic Grievance Cell, which reviews complaints and provides solutions. Forms for grievance reporting are available in the administration office.",
    },
    {
      question:
        "Can students take part in curriculum planning or feedback sessions?",
      answer:
        "Students are encouraged to provide feedback on courses through surveys and feedback sessions. The feedback is considered for curriculum updates and improvements.",
    },
    {
      question:
        "What IT-related electives can BScIT students take from other departments?",
      answer:
        "BScIT students may opt for electives like Data Analysis, or Management Information Systems, depending on course availability and approval from the department.",
    },
    {
      question: "Are there weekend or evening classes available for BScIT?",
      answer:
        "Currently, weekend or evening classes are not available for the BScIT program, but extra classes maybe occasionally organized during exam periods for additional support.",
    },
    {
      question: "Can BScIT students participate in study-abroad programs?",
      answer:
        "Yes, BBAU Satellite Centre offers study-abroad opportunities, and interested BScIT students should consult the administration Office for information on eligibility and application procedures.",
    },
    {
      question:
        "What steps does the university take to prevent discrimination on campus?",
      answer:
        "The university has an Anti-Discrimination Policy, ensuring equal opportunities for all students. There is also an active committee that handles cases of discrimination or harassment.",
    },
    {
      question:
        "How are library resources for BScIT updated to include the latest materials?",
      answer:
        "The library regularly updates its IT-related resources by adding the latest textbooks, journals, e-books, and research papers based on recommendations from faculty members.",
    },
    {
      question:
        "Does the university provide assistance with internship applications?",
      answer:
        "No, there is no any Career Services team are available which helps students provide assistance with internship applications.",
    },
    {
      question:
        "How can students improve their professional communication skills?",
      answer:
        "The university organizes workshops on professional communication, and students can also join clubs where they practice and improve these skills in group settings.",
    },
    {
      question: "Are there any competitions within the BScIT department?",
      answer:
        "The department organizes coding competitions,and hackathons, where students can showcase their skills and compete with peers.",
    },
    {
      question: "How can I contact the alumni network for mentorship?",
      answer:
        "The university's alumni office can connect students with alumni mentors, and the department occasionally organizes meet-and-greet sessions with alumni working in the IT industry.",
    },
    {
      question:
        "What type of hands-on training is offered during lab sessions?",
      answer:
        "Lab sessions focus on hands-on training in programming, networking, database management, and software development, allowing students to apply theoretical knowledge practically.",
    },
    {
      question:
        "Are there any academic support services for students who need additional help in specific subjects?",
      answer:
        "Yes, the department offers tutoring sessions and remedial classes for students needing extra help, especially in challenging subjects like programming and mathematics.",
    },
    {
      question: "Exit chat",
      answer:
        "Thank you for giving me opportunity to help you. If you need further assistance, so you can ask me. Goodbye! Have a nice day!",
    },
    {
      question: "Exit",
      answer:
        "Thank you for giving me opportunity to help you. If you need further assistance, so you can ask me. Goodbye! Have a nice day!",
    },
  ];

  const fuse = new Fuse(faq, {
    keys: ["question"],
    threshold: 0.4,
  });

  const sendMessage = () => {
    let message = textarea.value.trim();
    if (message === "") return;

    message = message.charAt(0).toUpperCase() + message.slice(1);

    const messageElement = document.createElement("li");
    messageElement.classList.add("chat", "outgoing");
    messageElement.innerHTML = `<i class='bx bx-user-pin' ></i>
          <p>${message}</p>`;
    chatbox.appendChild(messageElement);

    textarea.value = "";

    setTimeout(() => {
      let reply =
        "I'm sorry, I don't understand that. Could you please rephrase your question or message your question in the feedback form?";
      const result = fuse.search(message);
      if (result.length > 0) {
        reply = result[0].item.answer;
      }

      const replyElement = document.createElement("li");
      replyElement.classList.add("chat", "incoming");
      replyElement.innerHTML = `<span class="material-symbols-outlined">smart_toy</span>
            <p>${reply}</p>`;

      chatbox.appendChild(replyElement);
      chatbox.scrollTop = chatbox.scrollHeight;
    }, 1000);
  };

  sendBtn.addEventListener("click", sendMessage);

  textarea.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      sendMessage();
    }
  });

  textarea.addEventListener("input", (e) => {
    const value = e.target.value;
    e.target.value = value.charAt(0).toUpperCase() + value.slice(1);
  });
});

document.getElementById("learnMoreBtn").addEventListener("click", function () {
  const list = document.getElementById("list");
  if (list.style.display === "none") {
    list.style.display = "block";
  } else {
    list.style.display = "none";
  }
});
