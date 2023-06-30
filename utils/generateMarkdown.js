// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

//Function add title
function renderTile (title) {
  if (title) {
    return `# ${title}`
  }
  return ''
}

//Function to add description
function renderDescription (description) {
  if (description) {
    return `## Description
${description}`
  }
  return ''
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `${renderTile(data.title)}

${renderDescription(data.description)}

`;
}

module.exports = generateMarkdown;
