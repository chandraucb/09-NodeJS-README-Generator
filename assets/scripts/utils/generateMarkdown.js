//Function add title
function renderTile (title) {
  if (title) {
    return `# ${title}`
  }
  return ''
}

//Function to render license badge 
function renderBadge(repoPath) {
  if (repoPath) {
    return `![GitHub](https://img.shields.io/github/license/${repoPath})`
  }
  return ''
}

//Function to render license badge 
function renderLicense(license) {
  if (license) {
    return `## License
${license}
`
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

${renderBadge((data.url).replaceAll('https://github.com/',''))}

${renderData('Description',data.description)}

${ data.toc?renderTOC(data):'' }

${renderData('Installation',data.installation)}

${renderData('Usage',data.usage)}

${renderData('Credits',data.credits)}

${renderLicense(data.license)}

${renderData('Features',data.features)}

${renderData('Contribution',data.contribution)}

${renderData('Tests',data.tests)}

`;
}

module.exports = generateMarkdown;
