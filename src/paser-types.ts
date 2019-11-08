export  interface Trainee_Object {
    code:string,
    handle:string
}
export  interface Code_Object {
    keywords:string[],
    operators:string[],
    undefined:string[]
}

export interface syntax_types{
    datatype:string[],
    preprocessor_directives:string[],
    func:string[],
    std:string[],
    symbol:string[],
    condition:string[],
    operation:string[],
    container:string[]
}
