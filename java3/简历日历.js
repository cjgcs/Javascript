	var arr=[
						"快过年了，大家可以商量着去哪玩吧～",
						"精通JavaScript开发课程 - 结课标准 - 有十条标准可让大家修练成JS高手……",
						"HTML5开发课程，让你熟练掌握移动应用开发技术",
						"精通各种DOM类应用，熟练掌握面向对象编程思想（OOP）、熟悉JS面向对象开发方式",
						"熟练掌握AJAX技术及相关应用（例如：新浪微博级应用",
						"可以独立写出类似jQuery的小型库（支持各类选择符、事件类、DOM、自定义动画animate、AJAX……）",
						"精通JS运动特效技术，能完整实现各类网站所有动画特效，如 智能课堂 官网",
						"掌握JS调试及优化技术、能兼容所有浏览器",
						"精通JS事件对象及事件的工作机制，并能完成各类跨平台应用模块的开发",
						"能独立开发表现和性能都很优秀的RIA应用",
						"了解后台编程的相关知识，能够和后台工程师配合完成大型交互应用",
						"熟悉正则表达式的编写、应用及高级表单验证技术"
						];	
				


window.onload=function ()
			{
				var odiv=document.getElementById('tab');
				var oul=oDiv.getElementsByTagName('ul')[0];
				var oli=odiv.getElementsByTagName('li');
				var otxt=odiv.getElementsByTagName('div')[0];
				
				for(var i=0;i<oli.length;i++)
				{	
					oli[i].index=i;
					oli[i].onmouseover=function ()
					{
						for(var i=0;i<oli.length;i++)
						{	
							oli[i].className='';
						}
						this.className='active';
						
						otxt.innerHTML='<h2>'+(this.index+1)+'月活动</h2><p>'+arr[this.index]+'</p>';
					};
				}	
				
			};