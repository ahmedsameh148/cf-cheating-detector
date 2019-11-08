import codeParser from './code_parser';
import check from 'string-similarity';



export default function compareCode(a: string, b: string, syntaxParser: boolean) {
    let ratio:any;
    if (syntaxParser === true) {
        let parser = new codeParser(a, b);

        let newCode1 = parser.remove_syntax()[0];
        let newCode2 = parser.remove_syntax()[1];
        ratio = check.compareTwoStrings(newCode1, newCode2);
    }
    else {
        ratio = check.compareTwoStrings(a, b);
    }
    return ratio;
}
