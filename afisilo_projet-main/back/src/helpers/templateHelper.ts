import fs from 'fs';
import path from 'path';
import handlebars from 'handlebars';

const loadTemplate = (templateName: string): string => {
    const filePath = path.join(process.cwd(), 'templates/email/', `${templateName}.html`);
    return fs.readFileSync(filePath, 'utf8');
};

const headerTemplate = loadTemplate('header');
const footerTemplate = loadTemplate('footer');

handlebars.registerPartial('header', headerTemplate);
handlebars.registerPartial('footer', footerTemplate);

export const compileTemplate = (templateName: string, context: object): string => {
    const templateContent = loadTemplate(templateName);
    const template = handlebars.compile(templateContent);
    return template(context);
};
