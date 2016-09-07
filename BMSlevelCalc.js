function BMSlevelCalc(notes,notes_w,scratch,scratch_w,length,multiplier){
level = Math.round((notes*notes_w+scratch*scratch_w)/length*multiplier);
return level;
}

function FiveLevelCalc(notes,scratch,length){
multiplier = 4/7;
return BMSlevelCalc(notes,2,scratch,3,length,multiplier);
}
