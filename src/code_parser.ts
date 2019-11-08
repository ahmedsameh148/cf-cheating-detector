import {syntax} from './ cpp-syntax';
import {Trainee_Object} from './paser-types';
export default class Code_Parser{

    private code1:string;
    private code2:string;
    private comp_code1:string;
    private comp_code2:string;
    private reg:RegExp[];
    constructor(a:string,b:string){
        this.code1 = a;
        this.code2 = b;
        this.reg = [syntax.datatype,syntax.func,
                    syntax.preprocessor_directives,syntax.symbol,
                    syntax.condition,syntax.std];
    }
    replace_all(){
        for(let i in this.reg)
        {
            this.code1 = this.code1.replace(this.reg[i],""); 
            this.code2 = this.code2.replace(this.reg[i],"");  
        } 
        return [this.code1,this.code2];
    }
    remove_syntax(){
        this.code1 = this.replace_all()[0];
        this.comp_code1 = (this.code1.replace(/(\r\n|\n|\r|\t)/gm,''));


        this.code2 = this.replace_all()[1];
        this.comp_code2 = (this.code2.replace(/(\r\n|\n|\r|\t)/gm,''));

        return [(this.comp_code1),this.comp_code2];
    }
}