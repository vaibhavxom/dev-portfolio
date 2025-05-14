# 🌐 Full Stack Developer Portfolio

A full stack portfolio website built using **React (Frontend)** and **Spring Boot (Backend)** that showcases my projects, skills, and provides a contact form which sends emails using Gmail SMTP.

---

## 🧑‍💻 Author

**Rushikesh Mithagare**  
🎓 B.Sc. Software Engineering, COCSIT Latur  
📍 Swami Ramanand Teerth Marathwada University, Nanded  
📅 Expected Graduation: April 2025  

---

## 📌 Tech Stack

| Layer      | Technology          |
|------------|---------------------|
| Frontend   | React, HTML, CSS    |
| Backend    | Spring Boot, Java   |
| Email      | Gmail SMTP via JavaMailSender |
| Database   | PostgreSQL (optional for storing messages) |
| Deployment | GitHub Pages (Frontend), AWS EB / Render (Backend) |

---

## 🚀 Features

- 🔍 Clean and responsive UI
- 📬 Contact form that sends email directly to me
- 🧰 Projects section with demo and GitHub links
- 📃 Resume download button
- 📱 Mobile-friendly design

---

## 🔧 Project Structure

portfolio-project/  
├── backend-springboot/  
│ └── src/main/java/com/rushi/spring_boot  
│ ├── ContactController.java  
│ ├── EmailService.java  
│ └── ContactForm.java  
│ └── application.properties  
│  
├── frontend-react/  
│ └── src/components/Contact.jsx  
│ └── App.js  
│ └── index.js  
│  
└── README.md


---

## 📥 Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/vaibhavxom/portfolio-project.git
cd portfolio-project
```

### 2. Run Backend (Spring Boot)
```bash
cd backend-springboot
./mvnw spring-boot:run
```
Make sure `application.properties` is correctly configured for SMTP and DB (if used).


### 3. Run Frontend (React)
```bash
cd frontend-react
npm install
npm start
```
React will run at ``http://localhost:3000``



### 🌐 Deployment Instructions
## Frontend (GitHub Pages)
```bash
npm run build
npm install -g gh-pages
gh-pages -d build
```
## Backend (AWS Elastic Beanstalk or Render)
`Package your Spring Boot app as a .jar`

Use a Procfile for AWS EB:

```bash
web: java -jar target/your-app-name.jar
```
## 📬 Contact
If you'd like a portfolio like this or want to get in touch:

📧 Email: rushimithagare02@gmail.com  
🔗 LinkedIn: linkedin.com/in/rushikesh-mithagare-639861178  
💻 GitHub: github.com/vaibhavxom

