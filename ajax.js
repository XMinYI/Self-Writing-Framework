function ajax(httpUrl,fn){
				//创建xhr对象
					var xhr = new XMLHttpRequest()
				//设置请求的地址
					xhr.open("GET",httpUrl)
				//发送请求
					xhr.send()
				//监听响应事件
					xhr.onreadystatechange = function(){
						if(xhr.readyState == 4 && xhr.status ==200){
							fn(xhr)
						}
					}
			}