function downloadResume() {
  const link = document.createElement("a");
  link.href = "assets/resume.pdf";
  link.download = "Sravya_Resume.pdf";
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}