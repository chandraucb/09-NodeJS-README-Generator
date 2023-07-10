const generateMarkdown = require('./generateMarkdown')

describe('generateMarkdown',() => {
    it('generateMarkdownTest',() => {
        
        const data = {
            title: 'NodeJS README Generator',
            description: 'Application to create README for a project ',
            developer_name: 'Chandrasekar Mohan',
            git_url: 'https://github.com/chandraucb',
            developer_email: 'xyz@abc.com',
            toc: true,
            installation: 'Clone the github repo as shown below, <br/><br/> ``` git clone git@github.com:chandraucb/09-NodeJS-README-Generator.git ``` <br/><br/> Run node package install <br/><br/> ``` npm install ```',
            usage: 'To run this application execute below command and follow the prompts <br/><br/> ```node asset\\scripts\\index.js ``` <br/> <br/> README and LICENSE/UNLICENSE file will be created under output folder <br/> Add these files under root folder in your project repo <br/><br/> ![videodemo](../assets/images/video_demo.gif) ',
            credits: 'Make fork the project and clone your project to include your changes. Once changes are ready create pull request merge within main branch. Include CONTRIBUTOR.md to get the credits',
            license: {
              key: 'mit',
              name: 'MIT License',
              spdx_id: 'MIT',
              url: 'https://api.github.com/licenses/mit',
              node_id: 'MDc6TGljZW5zZTEz',
              html_url: 'http://choosealicense.com/licenses/mit/',
              description: 'A short and simple permissive license with conditions only requiring preservation of copyright and license notices. Licensed works, modifications, and larger works may be distributed under different terms and without source code.',
              implementation: 'Create a text file (typically named LICENSE or LICENSE.txt) in the root of your source code and copy the text of the license into the file. Replace [year] with the current year and [fullname] with the name (or names) of the copyright holders.',
              permissions: [
                'commercial-use',
                'modifications',
                'distribution',
                'private-use'
              ],
              conditions: [ 'include-copyright' ],
              limitations: [ 'liability', 'warranty' ],
              body: 'MIT License\n' +
                '\n' +
                'Copyright (c) [year] [fullname]\n' +
                '\n' +
                'Permission is hereby granted, free of charge, to any person obtaining a copy\n' +
                'of this software and associated documentation files (the "Software"), to deal\n' +
                'in the Software without restriction, including without limitation the rights\n' +
                'to use, copy, modify, merge, publish, distribute, sublicense, and/or sell\n' +
                'copies of the Software, and to permit persons to whom the Software is\n' +
                'furnished to do so, subject to the following conditions:\n' +
                '\n' +
                'The above copyright notice and this permission notice shall be included in all\n' +
                'copies or substantial portions of the Software.\n' +
                '\n' +
                'THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR\n' +
                'IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,\n' +
                'FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE\n' +
                'AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER\n' +
                'LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,\n' +
                'OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE\n' +
                'SOFTWARE.\n',
              featured: true,
              developer_name: 'Chandrasekar Mohan'
            },
            features: '',
            contribution: 'Make fork the project and clone your project to include your changes. Once changes are ready create pull request merge within main branch. Include CONTRIBUTOR.md to get the credits',
            tests: '<br/> ``` npm install jest ```<br/> ``` npm run test ```'
          }

          expect(() => { generateMarkdown(data) }).not.toThrow()
        
    })
})