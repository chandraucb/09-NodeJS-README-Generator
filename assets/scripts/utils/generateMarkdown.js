

//Function add title
function renderTile (title) {
  if (title) {
    return `# ${title}`
  }
  return ''
}

function findLicenseColor(id) {
  
  if (id.toUpperCase().includes('MPL') || id.toUpperCase().includes('Apache'))
    return 'green'
  
  if (id.toUpperCase().includes('GP') || id.toUpperCase().includes('IPL') || id.toUpperCase().includes('ISC'))
    return 'blue'
  
  if (id.toUpperCase().includes('BSL'))
    return 'lightblue'
  
  if (id.toUpperCase().includes('BSD'))
    return 'orange'
  
  if (id.toUpperCase().includes('MIT'))
    return 'yellow'

  if (id.toUpperCase().includes('EPL'))
    return 'red'
  
  return 'lightgrey'

}

//Function to render license badge 
function renderBadge(license) {

  if (license) {
    let licenseId = license.spdx_id.replaceAll('-','_')
    let color = findLicenseColor(license.spdx_id)
    return `[![License](https://img.shields.io/badge/License-${licenseId}-${color}.svg)](${license.html_url})`
  }
  return ''
}

//Function to render license badge 
function renderLicense(license) {
  if (license) {

    return `## License
Copyright (c) ${(new Date()).getFullYear()} ${license.developer_name}
Licensed under the ${license.name}
`
  }
  return ''
}

//Render questions 
function renderQuestions(data) {
  if (data.git_url || data.developer_email) {
    let content = '## Questions'
    if (data.developer_name) 
      content = content.concat(' \n ', ' Name : ', data.developer_name )
    if (data.git_url)
      content = content.concat(' \n ', ' Git profile : ', data.git_url)
    if (data.developer_email)
      content = content.concat(' \n ', ' Contact email : ', data.developer_email)
      content = content.concat(' \n ', ' Reach me through email with additional questions')
    return content
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

${renderBadge(data.license)}

${renderData('Description',data.description)}

${ data.toc?renderTOC(data):'' }

${renderData('Installation',data.installation)}

${renderData('Usage',data.usage)}

${renderData('Credits',data.credits)}

${renderLicense(data.license)}

${renderData('Features',data.features)}

${renderData('Contributor',data.contribution)}

${renderData('Tests',data.tests)}

${renderQuestions(data)}

`;
}

module.exports = generateMarkdown;
