# 当前脚本来自于 http://script.345yun.cn 脚本库下载！
# 脚本库官方QQ群: 429274456
# 脚本库中的所有脚本文件均来自热心网友上传和互联网收集。
# 脚本库仅提供文件上传和下载服务，不提供脚本文件的审核。
# 您在使用脚本库下载的脚本时自行检查判断风险。
# 所涉及到的 账号安全、数据泄露、设备故障、软件违规封禁、财产损失等问题及法律风险，与脚本库无关！均由开发者、上传者、使用者自行承担。

#作者:YSJohnson
#环境变量：JL_Token 多账号以换行符或 & 分隔 只需三位数uid
#阅读入口 微信打开：http://t10.tdodpsnz.cn/auth/?cnn=1&srd=1&pud=740

import os
import requests
import time
import random
import re

ACCOUNTS_STR = os.getenv("JL_Token") 
# 设置随机延迟范围 (秒)，默认使用原脚本的 7 到 8 秒
try:
    MIN_DELAY = int(os.getenv("READ_DELAY_MIN", 7))
except ValueError:
    MIN_DELAY = 7
try:
    MAX_DELAY = int(os.getenv("READ_DELAY_MAX", 8))
except ValueError:
    MAX_DELAY = 8

# 固定的请求头，模拟 iOS 微信内置浏览器
HEADERS = {
    "Host": "api.hxehn.com",
    "Sec-Fetch-Site": "cross-site",
    "Connection": "keep-alive",
    "Sec-Fetch-Mode": "no-cors",
    "Accept": "*/*",
    "User-Agent": "Mozilla/5.0 (iPhone; CPU iPhone OS 16_7_12 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148 MicroMessenger/8.0.64(0x18004034) NetType/4G Language/zh_CN",
    "Referer": "http://t3.tdodpsnz.cn/",
    "Sec-Fetch-Dest": "script",
    "Accept-Language": "zh-CN,zh-Hans;q=0.9"
}

def log_print(msg):
    """自定义日志输出函数"""
    now = time.strftime("[%H:%M:%S]", time.localtime())
    print(f"{now}: {msg}")

def get_timestamp_ms():
    """获取13位毫秒时间戳"""
    return str(int(time.time() * 1000))

def main_task(cookie, account_num):
    """
    执行单个账号的主线任务 (阅读模式)
    :param cookie: 用户的 UID 或 Cookie
    :param account_num: 账号序号
    """
    account_prefix = f"[账号-{account_num}]"
    log_print(f"--- {account_prefix} 开始执行任务 ---")

    # --- 1. 发送初始请求，获取检测文章 URL 和 l 参数 (ct=0) ---
    try:
        current_time = get_timestamp_ms()
        init_url = (
            f"http://api.hxehn.com/inter/h5/taskgac/?cnn=2&srd=3&uid={cookie}&t={current_time}&l=-2&d={cookie}&ct=0&vt=3"
        )
        
        log_print(f"{account_prefix} 正在获取检测文章...")
        response = requests.get(init_url, headers=HEADERS, timeout=10)
        response.raise_for_status()
        temp = response.text
        
    except Exception as e:
        log_print(f"{account_prefix} 初始请求失败: {e}")
        return


    match_l = re.search(r'10000(\d+)', temp)
    if match_l:
        l = "10000" + match_l.group(1)
    else:
        log_print(f"{account_prefix} 初始请求响应中未找到 'l' 参数。阅读失败，可能是 Cookie/UID 错误。")
        log_print(f"响应内容片段: {temp[:200]}")
        return


    match_url = re.search(r'https(.*?wechat_redirect)', temp)
    if match_url:
        article_link = "https" + match_url.group(1)
        log_print(f"{account_prefix} 已成功获取检测文章。")
        

        title = f"账号 {account_num} 金鳞读书 - 开始阅读"
        content = f"已复制检测文章，请在30秒内到微信阅读。链接：{article_link}"
        # ⚠️ 直接调用 QLAPI.notify，假设它在运行环境中可用
        try:
            QLAPI.notify(title, content)
        except NameError:
             log_print("警告：QLAPI.notify 函数未定义！无法发送通知。请确保脚本运行在青龙环境中。")
        
        log_print(f"{account_prefix} 已推送检测文章，等待 30 秒...")
        time.sleep(30) # 模拟原脚本的 20 秒等待
        log_print(f"{account_prefix} 30秒等待结束，开始执行阅读任务...")

    else:
        log_print(f"{account_prefix} 响应中未找到 'url' 字段。阅读失败，可能是 Cookie/UID 填写错误。")
        return

    # --- 2. 循环阅读任务，获取金币 (ct=1) ---

    for i in range(1, 31):
        try:
            current_time = get_timestamp_ms()
            loop_url = (
                f"http://api.hxehn.com/inter/h5/taskgac/?cnn=2&srd=3&uid={cookie}&t={current_time}&l={l}&d={cookie}&ct=1&vt=19"
            )
            
            response = requests.get(loop_url, headers=HEADERS, timeout=10)
            response.raise_for_status()
            temp = response.text
            
        except Exception as e:
            log_print(f"{account_prefix} 第 {i} 次阅读请求失败: {e}")
            break

        # 尝试解析金币 (jb) 和新 url
        match_jb = re.search(r'"rw":(\d+)', temp)
        match_url_in_loop = re.search(r'"url":".*?"', temp) # 检查是否有url字段存在，原脚本以此判断成功

        if match_jb and match_url_in_loop:
            jb = match_jb.group(1)
            log_print(f"{account_prefix} 第 {i} 次阅读成功，获得了 [{jb}] 个金币。")
            
            # 更新 l 参数用于下一次请求
            match_l = re.search(r'10000(\d+)', temp)
            if match_l:
                l = "10000" + match_l.group(1)
            else:
                 # 如果更新失败，则退出
                log_print(f"{account_prefix} 无法从第 {i} 次响应中更新 'l' 参数，任务终止。")
                break
            
        else:
            log_print(f"{account_prefix} 第 {i} 次阅读失败，任务终止。")
            log_print(f"响应内容片段: {temp[:200]}")
            break

        # 随机延迟等待
        delay = random.randint(MIN_DELAY, MAX_DELAY)
        log_print(f"{account_prefix} 等待随机延迟 {delay} 秒...")
        time.sleep(delay)

def main():
    """主函数"""
    log_print("--- 炑冉金鳞读书任务启动 ---")

    global ACCOUNTS_STR, MIN_DELAY, MAX_DELAY # 确保能访问全局变量
    
    if not ACCOUNTS_STR:
        log_print("⚠️ 环境变量 JL_Token 未设置或为空。请设置您的账号 Cookie/UID。")
        return

    # 清理和分割账号字符串
    cookies = [
        c.strip() 
        for c in re.split(r'\n|&', ACCOUNTS_STR) 
        if c.strip()
    ]

    if not cookies:
        log_print("⚠️ 未从 JL_Token 中解析到有效的账号。")
        return

    log_print(f"✅ 读取到 {len(cookies)} 个账号数据。")
    log_print(f"⏱️ 随机延迟范围: {MIN_DELAY} - {MAX_DELAY} 秒。")

    for i, cookie in enumerate(cookies, 1):
        # 提取第一个 | 前的内容作为主 Cookie/UID，匹配原 JS 逻辑
        main_cookie = cookie.split("|")[0].strip() 
        
        # 模式 0: 批量签到/阅读 (原 JS 脚本的默认行为)
        main_task(main_cookie, i)
        
        # 账号之间稍微间隔一下
        if i < len(cookies):
            log_print("-" * 30)
            time.sleep(random.randint(2, 5)) 

    log_print("--- 所有账号任务执行完毕！---")

if __name__ == "__main__":
    main()

# 当前脚本来自于 http://script.345yun.cn 脚本库下载！
# 脚本库官方QQ群: 429274456
# 脚本库中的所有脚本文件均来自热心网友上传和互联网收集。
# 脚本库仅提供文件上传和下载服务，不提供脚本文件的审核。
# 您在使用脚本库下载的脚本时自行检查判断风险。
# 所涉及到的 账号安全、数据泄露、设备故障、软件违规封禁、财产损失等问题及法律风险，与脚本库无关！均由开发者、上传者、使用者自行承担。