const template = require('@babel/template');
const babel = require('@babel/core')

const filename = './code.js';

const output = babel.transformFileSync(filename, {
  plugins: [
    "@babel/plugin-syntax-jsx",
    () => {
      return {
        visitor: {
          Program(path) {
            path.node.body.unshift(template.default.ast("import React from 'react';"))
          },
          ClassDeclaration(path) {
            const className = path.node.id.name
            const programPath = path.findParent((path) => path.isProgram());
            programPath.node.body.push(template.default.ast(`export default ${className};`))
          },
        }
      };
    },
  ],
});

console.log(output.code);

