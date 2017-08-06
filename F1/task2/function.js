function myFunction()
{
document.getElementById("demo").innerHTML="My First JavaScript Function";
}
function Student[100](name,sex,number,grade,major){  
	this.name = name ;       
	this.sex = sex ;    
	this.number = number ; 
	this.grade = grade ;
	this.major = major ;  
	
	this changName=changName;
	this changSex=changSex;
	this changNumber=changNumber;
	this changGrade=changGrade;
	this changMajor=changMajor;
	
function changName(name){
	this.name=name;
	}
function changSex(sex){
	this.sex=sex;
	}
function changNumber(number){
	this.number=number;
	}
function changGrade(grade){
	this.grade=grade;
	}
function changMajor(major){
	this.major=major;
	}
}

var LIST = document.querySelector('table');

function AddStu(){
	var STU=document.getElementsByTagName('input');
        var x = '<td>'+STU[0].value+
                '</td><td>'+STU[1].value+
                '</td><td>'+STU[2].value+
                '</td><td>'+STU[3].value+
                '</td><td>'+STU[4].value+
                '</td>';
        var y = document.createElement('tr');

        y.innerHTML = x;
}

function SearchStu(number){
	for(var i=0;i<STU[].length;i++){
		if(STU[i].number==number)
			return STU[i];
	}
}

function Alert(){
	alert('操作成功！');
}

