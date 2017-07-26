<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">
<ml xmlns="http://www.w3.org/1999/xhtml" lang="zh-CN">
<html> 
<head> 

	<meta http-equiv="Content-Type" content="text/html; charset=utf-16"> 
	<title>学生信息管理</title> 
	
	<link href="style.css" rel="stylesheet" type="text/css" />
	
</head>

<script type="text/javascript">

	function Student(name,sex,number,grade,major){  
	this.name = name ;       
	this.sex = sex ;    
	this.number = number ; 
	this.grade = grade ;
	this.major = major ;  
	} 
	
	/*函数部分暂未完成*/

 </script>
 </head>
	
	
<body>
 	<div class="input">
		<h1>学生信息登记</h1>
		学生姓名：<input type="text">
		学号：<input type="text">
		年级：<input type="text">
		所学专业：<input type="text">
		学生性别：
		<input type="radio" >男
		<input type="radio" >女
		<br/>
 	 
		<input type="button" class=buttonstyle value="提交" onclick="Student()">
 	</div> 
	<br/><br/><br/>
 	<div id="showinformation">
		<div>
		<div>学生姓名</div>
		<div>性别</div>
		<div>学号</div>
		<div>年级</div>
		<div>所学专业</div>
		</div>

 	</div>
 	 
 </body>
 </html>
