const currentdate = new Date();
const currentyear = currentdate.getFullYear();
const lastupdate = document.lastModified;

document.querySelector("#current-year").textContent = currentyear;
document.querySelector("#last-update").textContent = lastupdate;