function BMSlevelCalc(notes,scratch,length){
level = Math.round((((notes*2)+(scratch*3)/3)/(length))*(2/3));
return level;
}
