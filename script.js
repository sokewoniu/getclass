// script.js  
function searchStudent() {  
	const name = document.getElementById('name').value;
	const code = document.getElementById('code').value;  
	const resultDiv = document.getElementById('result');  
	const searchData = { name,code};  

	// 使用fetch API发送POST请求  
	fetch('getstudent', {  
		method: 'POST', // 指定请求方法为POST  
		headers: {  
			'Content-Type': 'application/json', // 设置请求头，告诉服务器我们发送的是JSON数据  
		},  
		body: JSON.stringify(searchData), // 将查询数据转换为JSON字符串  
	})  
	.then(response => {  
		if (!response.ok) {  
			throw new Error('Network response was not ok');  
		}  
		return response.json(); // 解析JSON响应  
	})  
	.then(data => {  
		// 处理响应数据  
		const resultDiv = document.getElementById('result');  
		if (data.ok) { // 假设后端返回了一个包含found属性的对象  
			const student = data.data;
			resultDiv.innerHTML = `找到学生: ${student.name}, 身份证后六位：${student.code} 班级: ${student.class}</br>请扫下面二维码入班级群</br><img width=300px src='class${student.class}.jpg' />`;  
		} else {  
			resultDiv.innerHTML = data.error;  
		}
	})
	.catch(error => {  
		// 处理请求或响应中的错误  
		console.error('There was a problem with your fetch operation:', error);  
		const resultDiv = document.getElementById('result');  
		resultDiv.innerHTML = '查询出错，请稍后再试。';  
	});
}