const menuToggle = document.getElementById("menuToggle");
const nav = document.getElementById("nav");
menuToggle.addEventListener("click", () => nav.classList.toggle("open"));
nav.querySelectorAll("a").forEach(link => link.addEventListener("click", () => nav.classList.remove("open")));
document.getElementById("year").textContent = new Date().getFullYear();

const projectInfo = {
  food: {
    eyebrow: "CASE STUDY 01 · BUSINESS ANALYSIS",
    title: "Food Delivery Order Management System",
    description: "A self-driven simulation of an end-to-end BA engagement. Begin by defining the problem and scope, then map the existing order journey, investigate pain points, and propose a testable improved workflow.",
    items: ["Project charter: problem, objectives, scope, assumptions, risks", "Stakeholder register and interview questions", "AS-IS and TO-BE process diagrams", "BRD with numbered business requirements", "User stories with acceptance criteria", "API field mapping and failure scenarios", "UAT test cases and a requirements traceability matrix", "KPI definitions: cancellation rate, acceptance time, on-time delivery"]
  },
  sales: {
    eyebrow: "CASE STUDY 02 · DATA ANALYSIS",
    title: "Sales Performance Analysis",
    description: "A data-focused case study that connects business questions to measurable indicators. Use a public or clearly labelled sample dataset and document the decisions your analysis could support.",
    items: ["Business questions and KPI definitions", "Dataset dictionary and data-quality checks", "SQL queries for trends and category performance", "Dashboard wireframe and metric definitions", "Insights, limitations, and recommendations based on actual analysis"]
  },
  api: {
    eyebrow: "CASE STUDY 03 · TECHNICAL BA",
    title: "Customer & Order API Requirements",
    description: "Document how an application exchanges order information with a backend service. Focus on business rules, data definitions, validations, status transitions, and exception handling rather than claiming to have built the API.",
    items: ["API purpose, actors, and assumptions", "Sample endpoint list and HTTP methods", "Request/response JSON examples", "Field-level data mapping and validation rules", "Success and error response scenarios", "Test scenarios for valid, invalid, and duplicate requests"]
  }
};
const dialog = document.getElementById("projectDialog");
document.querySelectorAll("[data-project]").forEach(button => {
  button.addEventListener("click", () => {
    const data = projectInfo[button.dataset.project];
    document.getElementById("dialogEyebrow").textContent = data.eyebrow;
    document.getElementById("dialogTitle").textContent = data.title;
    document.getElementById("dialogDescription").textContent = data.description;
    const list = document.getElementById("dialogList");
    list.replaceChildren(...data.items.map(item => {
      const li = document.createElement("li");
      li.textContent = item;
      return li;
    }));
    dialog.showModal();
  });
});
document.getElementById("dialogClose").addEventListener("click", () => dialog.close());
dialog.addEventListener("click", event => {
  if (event.target === dialog) dialog.close();
});
document.getElementById("resumeLink").addEventListener("click", event => {
  if (event.currentTarget.getAttribute("href") === "#") {
    event.preventDefault();
    alert("Add your resume PDF file and update this link in index.html before publishing.");
  }
});
