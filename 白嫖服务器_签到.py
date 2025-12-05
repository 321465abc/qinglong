# 当前脚本来自于 http://script.345yun.cn 脚本库下载！
# 脚本库官方QQ群: 429274456
# 脚本库中的所有脚本文件均来自热心网友上传和互联网收集。
# 脚本库仅提供文件上传和下载服务，不提供脚本文件的审核。
# 您在使用脚本库下载的脚本时自行检查判断风险。
# 所涉及到的 账号安全、数据泄露、设备故障、软件违规封禁、财产损失等问题及法律风险，与脚本库无关！均由开发者、上传者、使用者自行承担。

#一分钱可以买60天
#服务器登录地址http://www.kkidc.com/
#环境变量kk_token抓登录后的cookie必须包含token或者PHPSESSID
import os
import requests

# 从青龙环境变量读取多账号token（Cookie），按回车分隔
def get_multi_tokens():
    kk_token = os.getenv("kk_token")
    if not kk_token:
        print("❌ 未设置kk_token环境变量")
        exit()
    # 按回车拆分多账号
    return [token.strip() for token in kk_token.split('\n') if token.strip()]

# 单个账号的签到+查积分逻辑
def process_account(token):
    print(f"\n{'='*20} 处理账号（Cookie：{token}） {'='*20}")
    # 构造请求头（携带当前账号的Cookie）
    common_headers = {
        'User-Agent': "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/133.0.0.0 Safari/537.36 Edg/133.0.0.0",
        'Accept-Encoding': "gzip, deflate, br, zstd",
        'sec-ch-ua-platform': "\"Android\"",
        'x-csrf-token': "47814b88fe41cc9e0128e87c65d9818e40e36842",
        'sec-ch-ua': "\"Android WebView\";v=\"141\", \"Not?A_Brand\";v=\"8\", \"Chromium\";v=\"141\"",
        'sec-ch-ua-mobile': "?1",
        'x-requested-with': "XMLHttpRequest",
        'origin': "https://my.kkidc.com",
        'sec-fetch-site': "same-origin",
        'sec-fetch-mode': "cors",
        'sec-fetch-dest': "empty",
        'referer': "https://my.kkidc.com/points/index.html",
        'accept-language': "zh-CN,zh;q=0.9,en-US;q=0.8,en;q=0.7",
        'priority': "u=1, i",
        'Cookie': token  # 使用当前账号的Cookie
    }

    # 1. 签到
    sign_url = "https://my.kkidc.com/proxy_curl/curl.html"
    sign_payload = {'url': "/points/fronend/sign-in", 'method': "POST", 'params': ""}
    sign_response = requests.post(sign_url, data=sign_payload, headers=common_headers)
    sign_msg = sign_response.json().get("msg", "签到状态未知")

    # 2. 查积分
    record_url = "https://my.kkidc.com/proxy_curl/curl.html"
    record_payload = {'url': "/points/fronend/get-score-records", 'method': "GET", 'params': "{\"page\":1,\"size\":10,\"opt_type\":1}"}
    record_response = requests.post(record_url, data=record_payload, headers=common_headers)
    record_data = record_response.json()

    # 3. 输出结果
    output = [f"🎯 签到状态：{sign_msg}"]
    if record_data.get("code") == 0:
        total_score = record_data['data']['list'][0]['new_score']
        output.append(f"💰 我的积分：{total_score}")
        for item in record_data['data']['list']:
            emoji = "📅" if item['detail_remark'] == "每日签到" else "📢"
            exact_time = item['create_time'].replace('T', ' ').split('+')[0]
            output.append(f"{emoji} {item['detail_remark']}: {item['score_value']}积分（获得时间：{exact_time}）")
    else:
        output.append("❌ 积分查询失败")
    
    print('\n'.join(output))

# 主逻辑：遍历多账号处理
if __name__ == "__main__":
    tokens = get_multi_tokens()
    print(f"📌 共读取到 {len(tokens)} 个账号")
    for token in tokens:
        process_account(token)
    print(f"\n{'='*50}\n✅ 所有账号处理完成")


# 当前脚本来自于 http://script.345yun.cn 脚本库下载！
# 脚本库官方QQ群: 429274456
# 脚本库中的所有脚本文件均来自热心网友上传和互联网收集。
# 脚本库仅提供文件上传和下载服务，不提供脚本文件的审核。
# 您在使用脚本库下载的脚本时自行检查判断风险。
# 所涉及到的 账号安全、数据泄露、设备故障、软件违规封禁、财产损失等问题及法律风险，与脚本库无关！均由开发者、上传者、使用者自行承担。