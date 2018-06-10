import Prism from 'prismjs';

const prism = (code, language = 'jsx') => Prism.highlight(code, Prism.languages[language])

export default prism
