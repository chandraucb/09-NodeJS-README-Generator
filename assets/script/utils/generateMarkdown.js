//Function add title
function renderTile (title) {
  if (title) {
    return `# ${title}`
  }
  return ''
}

//Render content and its Title
function renderData (title, content) {
  if (content) {
    return `## ${title}
${content.replaceAll('\\n','\n')}`
  }
  return ''
}

//Function to print table of content
function renderTOC (data) {
  debugger
  let content = '## Table of Contents'
  if (data.toc) {
    if (data.installation) {
      content = content.concat('\n', ' - [Installation](#installation)')
    }

    if (data.usage) {
      content = content.concat('\n', ' - [Usage](#usage)')
    }

    if (data.credits) {
      content = content.concat('\n', ' - [Credits](#credits)')
    }

    if (data.license) {
      content = content.concat('\n', ' - [License](#license)')
    }

    if (data.features) {
      content = content.concat('\n', ' - [Features](#Features)')
    }

  }

  return content

}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `${renderTile(data.title)}

${renderData('Description',data.description)}

${ data.toc?renderTOC(data):'' }

${renderData('Installation',data.installation)}

${renderData('Usage',data.usage)}

${renderData('Credits',data.credits)}

${renderData('License',data.license)}

${renderData('Badges',data.bagdes)}

${renderData('Features',data.features)}

${renderData('Contribution',data.contribution)}

${renderData('Tests',data.tests)}

`;
}

module.exports = generateMarkdown;
