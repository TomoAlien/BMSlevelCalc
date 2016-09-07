function BMSlevelCalc(notes,notes_w,scratch,scratch_w,length,multiplier){
level = Math.round((notes*notes_w+scratch*scratch_w)/length*multiplier);
return level;
}

function FiveLevelCalc(notes,scratch,length){
return BMSlevelCalc(notes,2,scratch,3,length,(4/7));
}
