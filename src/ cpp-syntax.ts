export const syntax = {datatype:RegExp(/(int|long long|float|double|long double|char)/gm),
preprocessor_directives:RegExp(/(#include|#define)/gm),
func:RegExp(/(main())/gm),
symbol:RegExp(/([{]|[}]|[(]|[)]|,|;|>>|<<)/gm)
,condition:RegExp(/(for|while|do|if|else if|else)/gm)
,std:RegExp(/(cin|cout|using namespace std|endl|iostream)/gm)
,operation:RegExp(/(\+|\-|\*|\/|\%|\&|\||\^|\=|\>|\>)/gm)};
