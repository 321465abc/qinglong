# 当前脚本来自于 http://script.345yun.cn 脚本库下载！
# 脚本库官方QQ群: 429274456
# 脚本库中的所有脚本文件均来自热心网友上传和互联网收集。
# 脚本库仅提供文件上传和下载服务，不提供脚本文件的审核。
# 您在使用脚本库下载的脚本时自行检查判断风险。
# 所涉及到的 账号安全、数据泄露、设备故障、软件违规封禁、财产损失等问题及法律风险，与脚本库无关！均由开发者、上传者、使用者自行承担。

# ╔══════════════════════════════════════════════════════════════════════════╗
# ║                     Skylumo 机场每日签到脚本(完美版)                          ║
# ║                    每日签到免费 +3G 流量（无限叠加）                        ║
# ║                                                                          ║
# ║  注册链接（共 5 个）：                                                     ║
# ║   1. https://h5xt.1010991.xyz/index.php#/register?code=ofFBSlGI          ║
# ║   2. https://r8n4.1010991.xyz/index.php#/register?code=ofFBSlGI          ║
# ║   3. https://w3pj.1010991.xyz/index.php#/register?code=ofFBSlGI          ║
# ║   4. https://k7m9.1010991.xyz/index.php#/register?code=ofFBSlGI          ║
# ║   5. https://q2vf.1010991.xyz/index.php#/register?code=ofFBSlGI          ║
# ║                                                                          ║
# ║  建议定时：0 6 * * *    （每天凌晨6点执行）                                 ║  
# ║  环境变量：skylumo   格式：邮箱#密码                                       ║
# ║  多账号&分隔         格式：邮箱#密码&邮箱#密码                              ║
# ╚══════════════════════════════════════════════════════════════════════════╝

# -*- coding: utf-8 -*-
import requests as _0x1a2b3c
import time as _0x4d5e6f
import random as _0x7g8h9i
import re as _0x1j2k3l
import os as _0x4m5n6o
import urllib3 as _0x7p8q9r
_0x7p8q9r.disable_warnings()

# ====================== 配置 ======================
_0xENV = "skylumo"
_0xBASE = "skylumo.cc"
_0xFALL = [
    "rm95v3ewgb.1095817.xyz", "k8f2n1qz4p.1095817.xyz",
    "u2m0a9s7hy.1095817.xyz", "b4c6r1t8wq.1095817.xyz",
    "k7m9.1010991.xyz", "q2vf.1010991.xyz", "w3pj.1010991.xyz",
    "h5xt.1010991.xyz", "r8n4.1010991.xyz"
]

_0xPRIM = "skylumo.com"
_0xINV = "ofFBSlGI"
_0xBLACK = "skylumo.cc"

_0xAVAIL = []
_0xDETECT = False

_0xSESS = _0x1a2b3c.Session()
_0xSESS.verify = False
_0xSESS.headers["User-Agent"] = "Mozilla/5.0 (Windows NT 10.0; Win64; x64) Firefox/141.0"

# =================== 输出函数 ===================
def _0xS(m): print(f"Success: {m}")
def _0xW(m): print(f"Warning: {m}")
def _0xE(m): print(f"Error: {m}")
def _0xI(m): print(f"Info: {m}")
def _0xT(m): print(f"\n{'='*70}\n{m}\n{'='*70}")

def _0xPING(d):
    try:
        _0xSESS.options(f"https://{d}/api/v1/passport/auth/login", timeout=6)
        return True
    except:
        return False

def _0xGETD():
    try:
        _0xR = _0xSESS.get(f"https://{_0xBASE}/domains.txt?t={int(_0x4d5e6f.time()*1000)}", timeout=12)
        _0xDS = [_0x1j2k3l.sub(r"^https?://","",_0xL.strip()).rstrip("/")
                   for _0xL in _0xR.content.decode("gbk","ignore").splitlines()
                   if _0x1j2k3l.match(r"^[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$", 
                              _0x1j2k3l.sub(r"^https?://","",_0xL.strip()).rstrip("/"))]
        _0xDS = list(set(_0xDS))
        if _0xDS:
            _0xS(f"从云端获取到 {len(_0xDS)} 个备用域名")
            return _0xDS
    except:
        _0xW("云端获取失败，使用本地备用")
        return _0xFALL[:]

def _0xDETECTO():
    global _0xAVAIL, _0xDETECT
    if _0xDETECT: return
    _0xDETECT = True

    _0xALL = _0xGETD() + [_0xPRIM]
    _0xALL = list(set(_0xALL))
    
    _0xI("正在探测可用注册域名...")
    
    for _0xD in _0xALL:
        if _0xD == _0xBLACK: continue
        if _0xPING(_0xD):
            _0xAVAIL.append(_0xD)
    
    if _0xPRIM in _0xAVAIL:
        _0xAVAIL.remove(_0xPRIM)
        _0xAVAIL.insert(0, _0xPRIM)
        _0xS(f"主域名 {_0xPRIM} 可用，已置顶")
    
    _0xS(f"探测完成！共 {len(_0xAVAIL)} 个可用注册链接")

# =================== 广告框 ===================
def _0xAD():
    _0xDETECTO()
    
    print(f"""
╔══════════════════════════════════════════════════════════════════════════╗
║                     Skylumo 机场每日签到脚本(完美版)                      ║
║                    每日签到免费 +3G 流量（无限叠加）                        ║
║                                                                          ║
║  注册链接（共 {len(_0xAVAIL)} 个）：{' ' * (28 - len(str(len(_0xAVAIL))))}                           ║""")
    
    for _0xIDX, _0xDOM in enumerate(_0xAVAIL, 1):
        _0xURL = f"https://{_0xDOM}/index.php#/register?code={_0xINV}"
        print(f"║   {_0xIDX}. {_0xURL.ljust(64)}    ║")
    
    print(f"""║                                                                         ║
║  建议定时：0 6 * * *    （每天凌晨6点执行）                                 ║  
║  环境变量：skylumo   格式：邮箱#密码                                       ║
║  多账号&分隔         格式：邮箱#密码&邮箱#密码                              ║
╚══════════════════════════════════════════════════════════════════════════╝
    """)

# =================== 读取账号 ===================
def _0xGETA():
    _0xRAW = _0x4m5n6o.getenv(_0xENV, "").strip()
    if not _0xRAW:
        _0xAD()
        _0xE(f"未检测到环境变量 {_0xENV}！请按上方说明配置后重新运行")
        _0x4d5e6f.sleep(30)
        exit(1)
    
    _0xACCS = [dict(zip(["email","password"], _0xX.split("#",1))) 
            for _0xX in _0xRAW.split("&") if "#" in _0xX]
    if not _0xACCS:
        _0xE("环境变量格式错误！请检查是否包含 # 和 &")
        _0x4d5e6f.sleep(10)
        exit(1)
    
    _0xS(f"成功加载 {len(_0xACCS)} 个账号")
    return _0xACCS

# =================== 登录 + 签到 ===================
def _0xLOGIN(_0xD, _0xEM, _0xPW):
    try:
        _0xR = _0xSESS.post(f"https://{_0xD}/api/v1/passport/auth/login",
                  data={"email":_0xEM,"password":_0xPW},
                  headers={"Host":_0xD,"Content-Type":"application/x-www-form-urlencoded",
                           "Origin":f"https://{_0xD}","Referer":f"https://{_0xD}/"}, timeout=10)
        _0xJ = _0xR.json()
        _0xTOK = (_0xJ.get("data",{}).get("auth_data") or _0xJ.get("data",{}).get("token") 
                 or _0xJ.get("auth_data") or _0xJ.get("token"))
        if _0xTOK:
            _0xI(f"登录成功 → {_0xEM}")
            return _0xTOK
    except: pass
    return None

def _0xCHECK(_0xD, _0xTOK):
    try:
        _0xR = _0xSESS.post(f"https://{_0xD}/api/v1/user/trial/checkin",
                  headers={"Host":_0xD, "Authorization":_0xTOK,
                           "Origin":f"https://{_0xD}","Referer":f"https://{_0xD}/"},
                  json={}, timeout=10)
        _0xJ = _0xR.json()
        _0xMSG = (_0xJ.get("message") or _0xJ.get("msg") or "").lower()
        if any(_0xK in _0xMSG for _0xK in ["已签到","already","重复"]):
            _0xS("今日已签到")
            return True
        if _0xJ.get("ret")==1 or _0xJ.get("data",{}).get("success"):
            _0xS("签到成功！+3G 流量到账")
            return True
    except: pass
    return False

# =================== 主流程 ===================
def _0xMAIN():
    _0xAD()
    
    _0xT("Skylumo 机场自动签到(完美版) - 开始执行")
    
    _0xDELAY = _0x7g8h9i.randint(0, 60)
    _0xI(f"开始前随机延迟 {_0xDELAY} 秒，防止被风控...")
    _0x4d5e6f.sleep(_0xDELAY)
    
    _0xACCS = _0xGETA()
    _0xDOMS = _0xGETD() + [_0xPRIM]
    _0xDOMS = list(set(_0xDOMS))
    
    _0xOK = 0
    for _0xIDX, _0xACC in enumerate(_0xACCS, 1):
        print(f"\n[{_0xIDX}/{len(_0xACCS)}] 正在处理：{_0xACC['email']}")
        _0x7g8h9i.shuffle(_0xDOMS)
        _0xDONE = False
        for _0xDOM in _0xDOMS:
            if not _0xPING(_0xDOM): continue
            _0xTOKEN = _0xLOGIN(_0xDOM, _0xACC["email"], _0xACC["password"])
            if not _0xTOKEN: continue
            if _0xCHECK(_0xDOM, _0xTOKEN):
                _0xOK += 1
                _0xDONE = True
                break
            _0x4d5e6f.sleep(2)
        if not _0xDONE:
            _0xE(f"账号 {_0xACC['email']} 所有域名均失败")
        _0x4d5e6f.sleep(_0x7g8h9i.uniform(6, 15))
    
    _0xT(f"全部完成！成功 {_0xOK}/{len(_0xACCS)} 个账号")
    print("下次见～ 脚本 5 秒后自动退出")
    _0x4d5e6f.sleep(5)

if __name__ == "__main__":
    _0xMAIN()

# 当前脚本来自于 http://script.345yun.cn 脚本库下载！
# 脚本库官方QQ群: 429274456
# 脚本库中的所有脚本文件均来自热心网友上传和互联网收集。
# 脚本库仅提供文件上传和下载服务，不提供脚本文件的审核。
# 您在使用脚本库下载的脚本时自行检查判断风险。
# 所涉及到的 账号安全、数据泄露、设备故障、软件违规封禁、财产损失等问题及法律风险，与脚本库无关！均由开发者、上传者、使用者自行承担。