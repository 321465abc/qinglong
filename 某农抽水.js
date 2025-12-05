// 当前脚本来自于 http://script.345yun.cn 脚本库下载！
// 脚本库官方QQ群: 429274456
// 脚本库中的所有脚本文件均来自热心网友上传和互联网收集。
// 脚本库仅提供文件上传和下载服务，不提供脚本文件的审核。
// 您在使用脚本库下载的脚本时自行检查判断风险。
// 所涉及到的 账号安全、数据泄露、设备故障、软件违规封禁、财产损失等问题及法律风险，与脚本库无关！均由开发者、上传者、使用者自行承担。

// # 环境变量名称 'nfsq'
// # 环境变量格式：
// # 单账号格式
// # 备注#unique_identity#apitoken
// # 备注#unique_identity#apitoken#socks5://用户名:密码@IP:端口
// # 多账号格式（换行或&分隔）

// # 系统抽奖3次：每次使用不同的随机位置
// # 任务抽奖N次：每次使用不同的随机位置
// # 增加中奖概率：模拟全国不同地区用户
// # 智能预判断：自动检测一等奖并调整策略
// # 增加中奖概率：使用已验证的中奖位置
// # 完整记录：记录一等奖的所有相关信息
// # 自动化：无需人工干预，自动切换定位策略

// # 还有什么项目可以联系TG：@BATTLE9
const _0x179024 = _0x35f7;
(function(_0x2f5359, _0x17ca2e) {
	const _0x19fa86 = _0x35f7,
		_0x466c65 = _0x2f5359();
	while (!![]) {
		try {
			const _0x503a0f = -parseInt(_0x19fa86(0x12e)) / 0x1 + -parseInt(_0x19fa86(0x165)) / 0x2 * (-parseInt(
					_0x19fa86(0x1d9)) / 0x3) + parseInt(_0x19fa86(0xde)) / 0x4 * (parseInt(_0x19fa86(0x17b)) /
				0x5) + -parseInt(_0x19fa86(0xc3)) / 0x6 * (parseInt(_0x19fa86(0xec)) / 0x7) + -parseInt(_0x19fa86(
					0x1f1)) / 0x8 + -parseInt(_0x19fa86(0x11a)) / 0x9 * (-parseInt(_0x19fa86(0x108)) / 0xa) + -
				parseInt(_0x19fa86(0xfb)) / 0xb;
			if (_0x503a0f === _0x17ca2e) break;
			else _0x466c65['push'](_0x466c65['shift']());
		} catch (_0x458558) {
			_0x466c65['push'](_0x466c65['shift']());
		}
	}
}(_0x19b7, 0x53d96));
const fs = require('fs'),
	https = require(_0x179024(0x179)),
	http = require(_0x179024(0x126)),
	url = require(_0x179024(0x138)),
	{
		URLSearchParams
	} = require(_0x179024(0x138)),
	path = require(_0x179024(0x1be)),
	SCRIPT_INFO = {
		'name': _0x179024(0x191),
		'author': _0x179024(0xee),
		'repository': 'https://gitee.com/shusvip/qinglong',
		'currentVersion': '1.0.0'
	},
	UPDATE_CONFIG = {
		'versionUrl': _0x179024(0x1df),
		'scriptUrl': _0x179024(0xd4),
		'backupFolder': _0x179024(0x1b6),
		'autoUpdate': !![],
		'forceCheck': ![],
		'checkIntervalHours': 0x18
	},
	colors = {
		'reset': _0x179024(0x139),
		'bright': _0x179024(0x1c1),
		'green': '\x1b[32m',
		'blue': '\x1b[34m',
		'red': _0x179024(0x171),
		'yellow': '\x1b[33m',
		'cyan': _0x179024(0x199),
		'magenta': '\x1b[35m'
	};

function logInfo(_0x484df3) {
	const _0x2e8da6 = _0x179024,
		_0x4f7459 = new Date()[_0x2e8da6(0x1cf)]()[_0x2e8da6(0xe8)]('T', '\x20')['substr'](0x0, 0x13);
	console[_0x2e8da6(0x1ba)]('' + colors[_0x2e8da6(0x11c)] + _0x4f7459 + colors['reset'] + '\x20-\x20' + colors[
		_0x2e8da6(0xcb)] + _0x2e8da6(0x163) + colors[_0x2e8da6(0x1ec)] + _0x2e8da6(0x16b) + _0x484df3);
}

function logError(_0x4f39bf) {
	const _0x459392 = _0x179024,
		_0x143b23 = new Date()['toISOString']()[_0x459392(0xe8)]('T', '\x20')[_0x459392(0x1af)](0x0, 0x13);
	console['error']('' + colors[_0x459392(0x11c)] + _0x143b23 + colors[_0x459392(0x1ec)] + _0x459392(0x16b) + colors[
		_0x459392(0x13f)] + _0x459392(0x142) + colors['reset'] + _0x459392(0x16b) + _0x4f39bf);
}

function _0x19b7() {
	const _0x103eae = ['getLocationsCount', 'createInterface', '❌\x20加载账号失败:\x20', 'trim', 'updateAvailable',
		'validateScript', '失败:\x20', 'data', 'success_count', '📁\x20备份创建:\x20', 'stdout', '690czXYSr', 'longitude',
		'2510301517291', 'now', 'lotteryDraw', 'version', 'SIGINT', '{city}{district}王府井大街{number}号', 'msg',
		'checkAndRecordFirstPrize', '徐汇区', 'getLocationForAccount', 'createWriteStream', '更新配置:', 'includes',
		'WARNING', 'headers', 'https:', '36441SKtFQs', 'split', 'green', 'changelog', 'firstPrizeLocation',
		'📊\x20任务执行汇总', 'dimension', '请求超时', 'lastCheckFile', 'readFileSync', '💥\x20未捕获异常:\x20',
		'🎯\x20使用一等奖定位:\x20', 'http', 'statusCode', '\x20\x20\x20📍\x20位置:\x20', 'repeat', '⚠️\x20查询奖品明细失败:\x20',
		'allResults', 'ℹ️\x20系统抽奖失败:\x20', 'unhandledRejection', '405067IcNGpi', '🎰\x20开始系统抽奖:\x20',
		'application/json', '💥\x20未处理的Promise拒绝:\x20', 'allLocations', 'task_results', '环境变量:', 'total_count',
		'scriptUrl', '\x20\x20\x20\x20\x20ℹ️\x20', 'url', '\x1b[0m', 'firstPrizeFound', 'NFSQ-Updater/1.0',
		'仓库地址:\x20', '❌\x20独立更新失败:\x20', 'exit', 'red', 'provice_name', 'NongFuSpringLottery', 'ERROR',
		'backupFolder', '\x20\x20\x20\x20\x20❌\x20', 'success', 'join', 'main', 'shouldCheckUpdate',
		'🚀\x20开始处理账号:\x20', '\x20个任务完成', '👥\x20总账号数:\x20', 'mkdirSync', '🗺️\x20定位策略:\x20', '❌\x20更新过程出错:\x20',
		'💥\x20脚本执行异常:\x20', 'protocol', '下载超时', '已参与任务', '\x20(当前:\x20', 'prize_name', '.js', '📦\x20版本:\x20',
		'districts', 'application/json,\x20text/plain,\x20*/*', 'cyan', 'proxy', 'showBanner', 'autoUpdate',
		'https://sxs-consumer.nfsq.com.cn/geement.marketinglottery/api/v1/marketinglottery', 'finish', 'yellow',
		'updateInfo', '📁\x20仓库:\x20', '下载的文件验证失败', 'INFO', 'nfsq', '10EpzqPx', '\x20个账号', '2510301516431',
		'🏁\x20抽奖结束:\x20共尝试\x20', '✅\x20加载账号:\x20', 'nfsq_backup_', '\x20-\x20', '✨\x20发现新版本!', 'magenta',
		'compareVersions', 'push', 'currentVersion', '\x1b[31m', '{city}{district}南京东路{number}号',
		'{city}{district}长安街{number}号', '浦东新区', '❌\x20第\x20', '朝阳区', 'copyFileSync', '⏸️\x20\x20用户取消更新', 'https',
		'queryPrizeDetails', '2350tJrRHT', '✅\x20已是最新版本', 'filter', 'taskIds', '当前版本:\x20', 'existsSync', '未知等级',
		'end', '\x20可用，运行\x20\x27node\x20', 'center', 'applyUpdate', '.new', 'chmodSync', 'account',
		'firstPrizeAccount', '--version', 'locationData', '📋\x20更新内容:', '观看视频号', 'floor', 'parse',
		'📍\x20一等奖定位:\x20', '农夫山泉抽奖脚本', 'accounts', '，本次:', 'checkUpdatesAsync', 'map', '🏁\x20任务执行完成，总耗时:\x20',
		'stringify',
		'\x20\x20node\x20nfsq.js\x20update\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20#\x20检查并更新脚本', '\x1b[36m',
		'round', '解析更新信息失败', '%27', '\x20(一等奖定位)', '🎉🎉🎉\x20发现一等奖!\x20来自账号:\x20', 'city_name',
		'❌\x20未找到环境变量\x20\x27nfsq\x27', 'request', '\x20\x20自动更新:\x20脚本启动时自动检查更新', 'close', 'PUT', 'run',
		'completed_tasks', 'warn', 'uncaughtException', 'code', 'entries', 'area_name', '--update', '\x20处理完成',
		'standaloneUpdate', 'substr', 'type', '❌\x20更新失败:\x20', 'prize_details', '⚠️\x20检查更新失败:\x20',
		'🎉\x20发现一等奖:\x20否', '👋\x20用户中断执行', './backups', '❌\x20查询奖品明细异常:\x20', '使用方法:', '\x20处理失败:\x20', 'log',
		'❌\x20账号\x20', 'utf8', 'pathname', 'path', 'task_id', 'name', '\x1b[1m', 'runUpdateProcess', '未知奖品',
		'timeout', '📝\x20后续所有账号将使用此定位', 'SCENE-2510301509021', 'repository', 'HTTP\x20', 'forceCheck',
		'🔧\x20自动更新模式，开始更新...', '🎯\x20第\x20', '755', '未知错误', 'apitoken', 'toISOString', 'prize_level', 'argv',
		'🎉\x20发现新版本:\x20', '↩️\x20\x20已恢复备份版本', 'address', 'POST', 'writeFileSync', '🎯\x20成功加载\x20',
		'latestVersion', '290259PaEenD', 'error', 'message', '，任务抽奖:', 'get', 'ℹ️\x20任务抽奖失败:\x20',
		'https://gitee.com/shusvip/qinglong/raw/master/version.json', '\x20次系统抽奖异常:\x20', 'random', 'updateManager',
		'2510301515552', 'generateAllLocations', '\x20(来自:\x20', '备份失败:\x20', 'lottery_results',
		'📋\x20开始执行任务:\x20', 'saveLastCheckTime', '异常:\x20', '🔄\x20更新完成!\x20请重启脚本以应用新版本。', 'reset', '一等奖',
		'📍\x20使用一等奖定位\x20(来自:\x20', 'SCENE-2510301508361', 'unique_identity', '1215240dobdQN', '❌\x20恢复备份失败',
		'help', '%22', 'backupCurrentScript', 'pipe', '\x0a🚀\x20独立更新模式', 'showUpdatePrompt', '西城区', 'length',
		'25374xThGlr', '🎉\x20系统抽奖成功!\x20获得:\x20', '\x20次任务抽奖异常:\x20', 'createLocation', 'remark', 'toString',
		'浏览得机会', '🗺️\x20定位池包含\x20', 'blue', 'downloadFromGitee', '长宁区', ':\x20完成任务', '，中奖', '🎁\x20本次中奖:\x20',
		'🎰\x20开始任务抽奖:\x20', 'write', '\x20\x20\x20运行命令:\x20node\x20',
		'https://gitee.com/shusvip/qinglong/raw/master/nfsq.js', 'merged_prizes', '\x20(等级:\x20', 'toLowerCase',
		'update', 'question', 'checkForUpdate', 'port', 'basename', '没有可用的更新', '2260eanUXh', 'hostname', '随机位置',
		'是否立即更新?\x20(Y/n):\x20', 'prizedto', '，历史:无',
		'https://sxs-consumer.nfsq.com.cn/geement.marketingplay/api/v1/task/join?action_time=',
		'📖\x20农夫山泉抽奖脚本使用说明', 'GET', '⚠️\x20跳过格式错误的账号:\x20', 'replace', 'fetchUpdateInfo', 'loadAccounts',
		'🔍\x20正在检查更新...', '175XnNWjR', 'locationPool', 'shusvip', '使用一等奖定位', '丰台区', 'runSingleAccount',
		'📋\x20查询奖品明细:\x20', '...', 'summarizeResults', 'stdin',
		'\x20\x20node\x20nfsq.js\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20#\x20运行抽奖脚本',
		'，系统抽奖:', '更新内容:', 'getRandomLocation', 'ACT2510301507191%2CACT2510301505581', '248083JHGHvZ',
		'\x20\x20export\x20nfsq=\x22账号1#unique1#token1&账号2#unique2#token2\x22'
	];
	_0x19b7 = function() {
		return _0x103eae;
	};
	return _0x19b7();
}

function logWarning(_0x20d082) {
	const _0xa60795 = _0x179024,
		_0x1cdfd5 = new Date()[_0xa60795(0x1cf)]()[_0xa60795(0xe8)]('T', '\x20')[_0xa60795(0x1af)](0x0, 0x13);
	console[_0xa60795(0x1a7)]('' + colors[_0xa60795(0x11c)] + _0x1cdfd5 + colors[_0xa60795(0x1ec)] + '\x20-\x20' +
		colors[_0xa60795(0x15f)] + _0xa60795(0x117) + colors[_0xa60795(0x1ec)] + '\x20-\x20' + _0x20d082);
}
class UpdateManager {
	constructor() {
		const _0x4bbc28 = _0x179024;
		this[_0x4bbc28(0x170)] = SCRIPT_INFO['currentVersion'], this['updateAvailable'] = ![], this[
			'latestVersion'] = null, this[_0x4bbc28(0x160)] = null, this[_0x4bbc28(0x122)] =
			'.nfsq_last_update_check';
	} ['showBanner']() {
		const _0x1c354b = _0x179024;
		console[_0x1c354b(0x1ba)](colors[_0x1c354b(0x159)] + '=' [_0x1c354b(0x129)](0x3c) + colors[_0x1c354b(
			0x1ec)]), console[_0x1c354b(0x1ba)](colors[_0x1c354b(0x11c)] + '🎯\x20' + SCRIPT_INFO['name'] +
			colors[_0x1c354b(0x1ec)]), console[_0x1c354b(0x1ba)](colors['blue'] + _0x1c354b(0x156) + this[
			'currentVersion'] + colors[_0x1c354b(0x1ec)]), console[_0x1c354b(0x1ba)](colors['yellow'] +
			_0x1c354b(0x161) + SCRIPT_INFO['repository'] + colors['reset']), console[_0x1c354b(0x1ba)](colors[
			_0x1c354b(0x159)] + '=' [_0x1c354b(0x129)](0x3c) + colors['reset']);
	} [_0x179024(0x148)]() {
		const _0x2bc636 = _0x179024;
		if (UPDATE_CONFIG[_0x2bc636(0x1c9)]) return !![];
		try {
			if (!fs[_0x2bc636(0x180)](this[_0x2bc636(0x122)])) return !![];
			const _0x5976fd = parseInt(fs[_0x2bc636(0x123)](this[_0x2bc636(0x122)], _0x2bc636(0x1bc)), 0xa),
				_0x167467 = Date[_0x2bc636(0x10b)](),
				_0x4bfbd6 = (_0x167467 - _0x5976fd) / (0x3e8 * 0x3c * 0x3c);
			return _0x4bfbd6 >= UPDATE_CONFIG['checkIntervalHours'];
		} catch (_0x5d1f06) {
			return !![];
		}
	} ['saveLastCheckTime']() {
		const _0xd970b = _0x179024;
		try {
			fs[_0xd970b(0x1d6)](this['lastCheckFile'], Date[_0xd970b(0x10b)]()[_0xd970b(0xc8)](), _0xd970b(0x1bc));
		} catch (_0x98ba05) {}
	}
	async [_0x179024(0xe9)]() {
		return new Promise((_0x2e39e9, _0x2bd347) => {
			const _0x16fcba = _0x35f7,
				_0x9e7f54 = new URL(UPDATE_CONFIG['versionUrl']),
				_0x24db35 = {
					'hostname': _0x9e7f54[_0x16fcba(0xdf)],
					'port': _0x9e7f54['port'] || 0x1bb,
					'path': _0x9e7f54[_0x16fcba(0x1bd)],
					'method': _0x16fcba(0xe6),
					'headers': {
						'User-Agent': 'NFSQ-Updater/1.0'
					},
					'timeout': 0x2710
				};
			https['get'](_0x24db35, _0x324c5d => {
				const _0x59a75b = _0x16fcba;
				if (_0x324c5d[_0x59a75b(0x127)] !== 0xc8) {
					_0x2bd347(new Error(_0x59a75b(0x1c8) + _0x324c5d['statusCode']));
					return;
				}
				let _0xef1a8e = '';
				_0x324c5d['on'](_0x59a75b(0x104), _0x53e179 => {
					_0xef1a8e += _0x53e179;
				}), _0x324c5d['on'](_0x59a75b(0x182), () => {
					const _0x1a692a = _0x59a75b;
					try {
						const _0x26b765 = JSON[_0x1a692a(0x18f)](_0xef1a8e);
						_0x2e39e9(_0x26b765);
					} catch (_0x364537) {
						_0x2bd347(new Error(_0x1a692a(0x19b)));
					}
				});
			})['on'](_0x16fcba(0x1da), _0x398b18 => {
				_0x2bd347(_0x398b18);
			})['on'](_0x16fcba(0x1c4), () => {
				const _0x568102 = _0x16fcba;
				_0x2bd347(new Error(_0x568102(0x121)));
			});
		});
	} [_0x179024(0x16e)](_0x48ad7b, _0x514281) {
		const _0x470a1b = _0x179024,
			_0x3e5e69 = _0x48ad7b[_0x470a1b(0x11b)]('.')[_0x470a1b(0x195)](Number),
			_0x314255 = _0x514281['split']('.')['map'](Number);
		for (let _0x5ca511 = 0x0; _0x5ca511 < Math['max'](_0x3e5e69[_0x470a1b(0xc2)], _0x314255[_0x470a1b(
			0xc2)]); _0x5ca511++) {
			const _0x169c0a = _0x3e5e69[_0x5ca511] || 0x0,
				_0x28e09a = _0x314255[_0x5ca511] || 0x0;
			if (_0x169c0a > _0x28e09a) return 0x1;
			if (_0x169c0a < _0x28e09a) return -0x1;
		}
		return 0x0;
	}
	async [_0x179024(0xda)]() {
		const _0x3d2e0c = _0x179024;
		logInfo(_0x3d2e0c(0xeb));
		try {
			this['updateInfo'] = await this[_0x3d2e0c(0xe9)](), this[_0x3d2e0c(0x1d8)] = this[_0x3d2e0c(0x160)][
				_0x3d2e0c(0x10d)
			];
			const _0xc3243 = this[_0x3d2e0c(0x16e)](this[_0x3d2e0c(0x170)], this[_0x3d2e0c(0x1d8)]);
			if (_0xc3243 < 0x0) return this[_0x3d2e0c(0x101)] = !![], logInfo(_0x3d2e0c(0x1d2) + this[_0x3d2e0c(
				0x1d8)] + _0x3d2e0c(0x153) + this[_0x3d2e0c(0x170)] + ')'), !![];
			else _0xc3243 === 0x0 ? logInfo('✅\x20已是最新版本') : logInfo('ℹ️\x20\x20当前版本比线上版本新（可能是开发版本）');
			return ![];
		} catch (_0x1ab313) {
			return logWarning(_0x3d2e0c(0x1b3) + _0x1ab313['message']), ![];
		} finally {
			this[_0x3d2e0c(0x1e9)]();
		}
	}
	async [_0x179024(0xcc)](_0x4059ca, _0xdd5302) {
		return new Promise((_0x382f9e, _0x33f225) => {
			const _0x3f1dad = _0x35f7,
				_0x51cc17 = new URL(_0x4059ca),
				_0x42e5c5 = {
					'hostname': _0x51cc17[_0x3f1dad(0xdf)],
					'port': _0x51cc17[_0x3f1dad(0xdb)] || 0x1bb,
					'path': _0x51cc17[_0x3f1dad(0x1bd)],
					'method': 'GET',
					'headers': {
						'User-Agent': _0x3f1dad(0x13b)
					},
					'timeout': 0x7530
				},
				_0x2cff9d = fs[_0x3f1dad(0x114)](_0xdd5302);
			https[_0x3f1dad(0x1dd)](_0x42e5c5, _0x4fb6aa => {
				const _0x15b7e9 = _0x3f1dad;
				if (_0x4fb6aa[_0x15b7e9(0x127)] !== 0xc8) {
					_0x33f225(new Error(_0x15b7e9(0x1c8) + _0x4fb6aa[_0x15b7e9(0x127)]));
					return;
				}
				_0x4fb6aa[_0x15b7e9(0x1f6)](_0x2cff9d), _0x2cff9d['on'](_0x15b7e9(0x15e), () => {
					const _0x9e94e1 = _0x15b7e9;
					_0x2cff9d[_0x9e94e1(0x1a3)](), _0x382f9e();
				}), _0x2cff9d['on'](_0x15b7e9(0x1da), _0x10fe7e => {
					fs['unlinkSync'](_0xdd5302), _0x33f225(_0x10fe7e);
				});
			})['on'](_0x3f1dad(0x1da), _0x34a1a0 => {
				_0x33f225(_0x34a1a0);
			})['on'](_0x3f1dad(0x1c4), () => {
				const _0xfcc7ef = _0x3f1dad;
				_0x33f225(new Error(_0xfcc7ef(0x151)));
			});
		});
	} [_0x179024(0x1f5)]() {
		const _0x15ca6e = _0x179024;
		try {
			!fs[_0x15ca6e(0x180)](UPDATE_CONFIG['backupFolder']) && fs[_0x15ca6e(0x14c)](UPDATE_CONFIG[_0x15ca6e(
				0x143)], {
				'recursive': !![]
			});
			const _0x2f99b8 = new Date()[_0x15ca6e(0x1cf)]()[_0x15ca6e(0xe8)](/[:.]/g, '-'),
				_0x5f47bd = path['join'](UPDATE_CONFIG[_0x15ca6e(0x143)], _0x15ca6e(0x16a) + _0x2f99b8 + _0x15ca6e(
					0x155));
			return fs[_0x15ca6e(0x177)](process[_0x15ca6e(0x1d1)][0x1], _0x5f47bd), logInfo(_0x15ca6e(0x106) +
				_0x5f47bd), _0x5f47bd;
		} catch (_0x46a595) {
			throw new Error(_0x15ca6e(0x1e6) + _0x46a595[_0x15ca6e(0x1db)]);
		}
	} [_0x179024(0x102)](_0x22a4bd) {
		const _0x3d40e4 = _0x179024;
		try {
			const _0x3cbd4d = fs[_0x3d40e4(0x123)](_0x22a4bd, 'utf8'),
				_0x4c3ad4 = fs['statSync'](_0x22a4bd);
			if (_0x4c3ad4['size'] < 0x400) return ![];
			if (!_0x3cbd4d[_0x3d40e4(0x116)](_0x3d40e4(0x141)) || !_0x3cbd4d['includes']('UpdateManager'))
		return ![];
			if (!_0x3cbd4d[_0x3d40e4(0x116)]('currentVersion')) return ![];
			return !![];
		} catch (_0x179df9) {
			return ![];
		}
	}
	async [_0x179024(0x185)]() {
		const _0x51bee5 = _0x179024;
		if (!this[_0x51bee5(0x101)]) throw new Error(_0x51bee5(0xdd));
		logInfo('🔄\x20开始更新到版本\x20' + this[_0x51bee5(0x1d8)] + _0x51bee5(0xf3));
		const _0x55c9c3 = process[_0x51bee5(0x1d1)][0x1] + _0x51bee5(0x186),
			_0x3557ab = this[_0x51bee5(0x1f5)]();
		try {
			await this[_0x51bee5(0xcc)](UPDATE_CONFIG[_0x51bee5(0x136)], _0x55c9c3);
			if (!this[_0x51bee5(0x102)](_0x55c9c3)) throw new Error(_0x51bee5(0x162));
			fs['renameSync'](_0x55c9c3, process[_0x51bee5(0x1d1)][0x1]);
			try {
				fs[_0x51bee5(0x187)](process[_0x51bee5(0x1d1)][0x1], _0x51bee5(0x1cc));
			} catch (_0x2ec9d9) {}
			return logInfo('✅\x20更新成功!\x20新版本:\x20v' + this[_0x51bee5(0x1d8)]), this[_0x51bee5(0x160)][
				'changelog'] && (console[_0x51bee5(0x1ba)]('\x0a' + colors[_0x51bee5(0x16d)] + _0x51bee5(0x18c) +
						colors[_0x51bee5(0x1ec)]), console[_0x51bee5(0x1ba)](this['updateInfo'][_0x51bee5(0x11d)]),
					console[_0x51bee5(0x1ba)]()), !![];
		} catch (_0x3b427c) {
			logError(_0x51bee5(0x1b1) + _0x3b427c[_0x51bee5(0x1db)]);
			try {
				fs[_0x51bee5(0x180)](_0x3557ab) && (fs[_0x51bee5(0x177)](_0x3557ab, process['argv'][0x1]), logInfo(
					_0x51bee5(0x1d3)));
			} catch (_0x57fac9) {
				logError(_0x51bee5(0x1f2));
			}
			throw _0x3b427c;
		}
	}
	async [_0x179024(0xc0)]() {
		const _0xdaa93 = _0x179024;
		if (!this[_0xdaa93(0x160)]) return ![];
		console[_0xdaa93(0x1ba)]('\x0a' + colors['yellow'] + '=' [_0xdaa93(0x129)](0x3c) + colors['reset']),
			console[_0xdaa93(0x1ba)](colors[_0xdaa93(0x15f)] + _0xdaa93(0x16c) + colors[_0xdaa93(0x1ec)]), console[
				'log'](colors[_0xdaa93(0x159)] + (_0xdaa93(0x17f) + this[_0xdaa93(0x170)]) + colors['reset']),
			console[_0xdaa93(0x1ba)](colors['green'] + ('最新版本:\x20' + this['latestVersion']) + colors[_0xdaa93(
				0x1ec)]);
		this[_0xdaa93(0x160)][_0xdaa93(0x11d)] && (console[_0xdaa93(0x1ba)]('\x0a' + colors[_0xdaa93(0x16d)] +
			_0xdaa93(0xf8) + colors[_0xdaa93(0x1ec)]), console[_0xdaa93(0x1ba)](this[_0xdaa93(0x160)][
			_0xdaa93(0x11d)
		]));
		console[_0xdaa93(0x1ba)]('\x0a' + colors[_0xdaa93(0x15f)] + '=' [_0xdaa93(0x129)](0x3c) + colors[_0xdaa93(
			0x1ec)]);
		if (UPDATE_CONFIG[_0xdaa93(0x15c)]) return logInfo(_0xdaa93(0x1ca)), !![];
		const _0x584315 = require('readline'),
			_0xe8a72c = _0x584315[_0xdaa93(0xfe)]({
				'input': process[_0xdaa93(0xf5)],
				'output': process[_0xdaa93(0x107)]
			});
		return new Promise(_0x362c9c => {
			const _0x2b3bad = _0xdaa93;
			_0xe8a72c[_0x2b3bad(0xd9)](colors[_0x2b3bad(0xcb)] + _0x2b3bad(0xe1) + colors[_0x2b3bad(0x1ec)],
				_0x4c011e => {
					const _0x398dc5 = _0x2b3bad;
					_0xe8a72c[_0x398dc5(0x1a3)](), _0x362c9c(_0x4c011e[_0x398dc5(0xd7)]() === 'y' ||
						_0x4c011e === '');
				});
		});
	}
	async ['runUpdateProcess']() {
		const _0x13704f = _0x179024;
		try {
			this['showBanner']();
			if (!this['shouldCheckUpdate']()) return ![];
			if (!await this[_0x13704f(0xda)]()) return ![];
			if (!await this[_0x13704f(0xc0)]()) return logInfo(_0x13704f(0x178)), ![];
			return await this['applyUpdate'](), console[_0x13704f(0x1ba)]('\x0a' + colors['green'] + _0x13704f(
				0x1eb) + colors[_0x13704f(0x1ec)]), console[_0x13704f(0x1ba)](colors[_0x13704f(0x159)] +
				_0x13704f(0xd3) + path[_0x13704f(0xdc)](process['argv'][0x1]) + colors[_0x13704f(0x1ec)]), !![];
		} catch (_0x26246f) {
			return logError(_0x13704f(0x14e) + _0x26246f[_0x13704f(0x1db)]), ![];
		}
	}
	async [_0x179024(0x1ae)]() {
		const _0x11a2cf = _0x179024;
		console[_0x11a2cf(0x1ba)](colors[_0x11a2cf(0x159)] + _0x11a2cf(0x1f7) + colors['reset']), console[_0x11a2cf(
			0x1ba)](colors['cyan'] + '=' [_0x11a2cf(0x129)](0x32) + colors[_0x11a2cf(0x1ec)]);
		try {
			return this[_0x11a2cf(0x160)] = await this[_0x11a2cf(0xe9)](), this['latestVersion'] = this[_0x11a2cf(
				0x160)][_0x11a2cf(0x10d)], this[_0x11a2cf(0x16e)](this[_0x11a2cf(0x170)], this[_0x11a2cf(
				0x1d8)]) < 0x0 ? await this[_0x11a2cf(0x185)]() : (logInfo(_0x11a2cf(0x17c)), ![]);
		} catch (_0xf2ba3e) {
			return logError(_0x11a2cf(0x13d) + _0xf2ba3e[_0x11a2cf(0x1db)]), ![];
		}
	}
}

function sleep(_0x1c44e8) {
	return new Promise(_0x193c52 => setTimeout(_0x193c52, _0x1c44e8));
}

function randomInt(_0x40d1ac, _0x219349) {
	const _0x4c7eb8 = _0x179024;
	return Math[_0x4c7eb8(0x18e)](Math['random']() * (_0x219349 - _0x40d1ac + 0x1)) + _0x40d1ac;
}

function randomFloat(_0xf58dfb, _0x1ed930) {
	const _0x2d7f40 = _0x179024;
	return Math[_0x2d7f40(0x1e1)]() * (_0x1ed930 - _0xf58dfb) + _0xf58dfb;
}

function encodeURIComponentSafe(_0x3d9607) {
	const _0x455831 = _0x179024;
	return encodeURIComponent(_0x3d9607)[_0x455831(0xe8)](/'/g, _0x455831(0x19c))['replace'](/"/g, _0x455831(0x1f4));
}
async function makeRequest(_0x45642d, _0x7c93cb, _0x25c849 = {}, _0x229c2c = null, _0x3afa3c = null) {
	return new Promise((_0x5f1aee, _0x4bd8c7) => {
		const _0xe13266 = _0x35f7,
			_0xd97d0c = new URL(_0x7c93cb),
			_0x559ae1 = {
				'hostname': _0xd97d0c['hostname'],
				'port': _0xd97d0c['port'] || (_0xd97d0c[_0xe13266(0x150)] === _0xe13266(0x119) ? 0x1bb :
					0x50),
				'path': _0xd97d0c[_0xe13266(0x1bd)] + _0xd97d0c['search'],
				'method': _0x45642d,
				'headers': _0x25c849
			},
			_0x5adf37 = _0xd97d0c[_0xe13266(0x150)] === 'https:' ? https : http,
			_0x15a611 = _0x5adf37[_0xe13266(0x1a1)](_0x559ae1, _0x3cf100 => {
				const _0x3223fd = _0xe13266;
				let _0xa66ad = '';
				_0x3cf100['on'](_0x3223fd(0x104), _0x4e5d25 => {
					_0xa66ad += _0x4e5d25;
				}), _0x3cf100['on'](_0x3223fd(0x182), () => {
					const _0x7118ce = _0x3223fd;
					try {
						const _0x40fd90 = JSON['parse'](_0xa66ad);
						_0x5f1aee({
							'status': _0x3cf100[_0x7118ce(0x127)],
							'data': _0x40fd90,
							'headers': _0x3cf100[_0x7118ce(0x118)]
						});
					} catch (_0x5148de) {
						_0x5f1aee({
							'status': _0x3cf100[_0x7118ce(0x127)],
							'data': _0xa66ad,
							'headers': _0x3cf100[_0x7118ce(0x118)]
						});
					}
				});
			});
		_0x15a611['on'](_0xe13266(0x1da), _0xfad894 => {
			_0x4bd8c7(_0xfad894);
		}), _0x229c2c && (_0x45642d === 'POST' || _0x45642d === _0xe13266(0x1a4)) && _0x15a611[
			_0xe13266(0xd2)](JSON[_0xe13266(0x197)](_0x229c2c)), _0x15a611['end']();
	});
}
class LocationPool {
	constructor() {
		const _0x3c2f07 = _0x179024;
		this['locationData'] = {
			'北京市': {
				'districts': ['东城区', _0x3c2f07(0xc1), _0x3c2f07(0x176), _0x3c2f07(0xf0), '海淀区'],
				'center': [116.4074, 39.9042],
				'address_templates': [_0x3c2f07(0x173), _0x3c2f07(0x10f)]
			},
			'上海市': {
				'districts': ['黄浦区', _0x3c2f07(0x112), _0x3c2f07(0xcd), '静安区', _0x3c2f07(0x174)],
				'center': [121.4737, 31.2304],
				'address_templates': [_0x3c2f07(0x172), '{city}{district}淮海中路{number}号']
			}
		}, this['allLocations'] = this[_0x3c2f07(0x1e4)]();
	} ['generateAllLocations']() {
		const _0x40317a = _0x179024,
			_0x48c055 = [];
		for (const [_0x215c14, _0x4e8093] of Object[_0x40317a(0x1aa)](this[_0x40317a(0x18b)])) {
			const _0x58ba9e = _0x215c14,
				[_0xe0a07d, _0x554ffd] = _0x4e8093[_0x40317a(0x184)],
				_0x236435 = _0x4e8093[_0x40317a(0x157)],
				_0x5c1b76 = _0x4e8093['address_templates'];
			for (const _0xa2dd84 of _0x236435) {
				for (let _0x2d1067 = 0x0; _0x2d1067 < 0x3; _0x2d1067++) {
					const _0x42d206 = this[_0x40317a(0xc6)](_0x215c14, _0x58ba9e, _0xa2dd84, _0x554ffd, _0xe0a07d,
						_0x5c1b76);
					_0x48c055['push'](_0x42d206);
				}
			}
		}
		return _0x48c055;
	} ['createLocation'](_0x3601e8, _0x5520d8, _0x2c67e5, _0x27f3fd, _0x57683f, _0x1eaf13) {
		const _0x2fcc16 = _0x179024,
			_0x214178 = randomFloat(-0.05, 0.05),
			_0x2ca191 = randomFloat(-0.05, 0.05),
			_0x10d25b = _0x27f3fd + _0x214178,
			_0x1b29fd = _0x57683f + _0x2ca191,
			_0x184384 = randomInt(0x1, 0x3e7),
			_0x13d54d = _0x1eaf13[randomInt(0x0, _0x1eaf13[_0x2fcc16(0xc2)] - 0x1)],
			_0x348245 = _0x13d54d['replace'](/{province}/g, _0x3601e8)[_0x2fcc16(0xe8)](/{city}/g, _0x5520d8)[
				_0x2fcc16(0xe8)](/{district}/g, _0x2c67e5)['replace'](/{number}/g, _0x184384);
		return {
			'provice_name': _0x3601e8,
			'city_name': _0x5520d8,
			'area_name': _0x2c67e5,
			'address': _0x348245,
			'longitude': _0x1b29fd,
			'dimension': _0x10d25b
		};
	} [_0x179024(0xf9)]() {
		const _0x513ef4 = _0x179024;
		return this[_0x513ef4(0x132)][randomInt(0x0, this[_0x513ef4(0x132)][_0x513ef4(0xc2)] - 0x1)];
	} [_0x179024(0xfd)]() {
		const _0x12b811 = _0x179024;
		return this[_0x12b811(0x132)][_0x12b811(0xc2)];
	}
}
class NongFuSpringLottery {
	constructor() {
		const _0x34df49 = _0x179024;
		this[_0x34df49(0x192)] = [], this[_0x34df49(0x12b)] = [], this[_0x34df49(0xed)] = new LocationPool(), this[
			_0x34df49(0x1e2)] = new UpdateManager(), this['taskIds'] = [{
			'name': '分享任务',
			'task_id': _0x34df49(0x167)
		}, {
			'name': _0x34df49(0xc9),
			'task_id': _0x34df49(0x1e3)
		}, {
			'name': _0x34df49(0x18d),
			'task_id': _0x34df49(0x10a)
		}, {
			'name': '浏览公众号',
			'task_id': '2510301518121'
		}], this[_0x34df49(0x11e)] = null, this[_0x34df49(0x189)] = null, this[_0x34df49(0x13a)] = ![], this[
			_0x34df49(0x118)] = {
			'User-Agent': 'Mozilla/5.0\x20(iPhone;\x20CPU\x20iPhone\x20OS\x2014_6\x20like\x20Mac\x20OS\x20X)\x20AppleWebKit/605.1.15\x20(KHTML,\x20like\x20Gecko)\x20Mobile/15E148',
			'Content-Type': _0x34df49(0x130),
			'Accept': _0x34df49(0x158)
		};
	}
	async [_0x179024(0x194)]() {
		try {
			const _0x451790 = new UpdateManager();
			setTimeout(async () => {
				const _0x49dcf8 = _0x35f7;
				try {
					await _0x451790[_0x49dcf8(0xda)]() && logInfo('📢\x20新版本\x20' + _0x451790[_0x49dcf8(
							0x1d8)] + _0x49dcf8(0x183) + path['basename'](process['argv'][0x1]) +
						'\x20update\x27\x20更新');
				} catch (_0x4f52af) {}
			}, 0x3e8);
		} catch (_0x2f10d8) {}
	} ['loadAccounts']() {
		const _0x2194bb = _0x179024;
		try {
			const _0x133338 = process['env'][_0x2194bb(0x164)];
			if (!_0x133338) return logError(_0x2194bb(0x1a0)), ![];
			const _0x4bdc8a = _0x133338[_0x2194bb(0x116)]('&') ? _0x133338[_0x2194bb(0x11b)]('&') : _0x133338[
				_0x2194bb(0x11b)]('\x0a');
			for (const _0x285124 of _0x4bdc8a) {
				const _0x2d8b9e = _0x285124[_0x2194bb(0x100)]();
				if (!_0x2d8b9e) continue;
				const _0x187bbc = _0x2d8b9e[_0x2194bb(0x11b)]('#');
				if (_0x187bbc['length'] >= 0x3) {
					const _0x37a71f = _0x187bbc[0x0],
						_0x5aa341 = _0x187bbc[0x1],
						_0x32e372 = _0x187bbc[0x2],
						_0x1ac318 = _0x187bbc[_0x2194bb(0xc2)] > 0x3 ? _0x187bbc[0x3] : null;
					this['accounts'][_0x2194bb(0x16f)]({
						'remark': _0x37a71f,
						'unique_identity': _0x5aa341,
						'apitoken': _0x32e372,
						'proxy': _0x1ac318
					}), logInfo(_0x2194bb(0x169) + _0x37a71f);
				} else logWarning(_0x2194bb(0xe7) + _0x2d8b9e);
			}
			return logInfo(_0x2194bb(0x1d7) + this[_0x2194bb(0x192)][_0x2194bb(0xc2)] + _0x2194bb(0x166)), logInfo(
				_0x2194bb(0xca) + this['locationPool'][_0x2194bb(0xfd)]() + '\x20个位置'), !![];
		} catch (_0x3ae4df) {
			return logError(_0x2194bb(0xff) + _0x3ae4df[_0x2194bb(0x1db)]), ![];
		}
	}
	async ['executeTasks'](_0x2918f4) {
		const _0x1ba8f6 = _0x179024;
		try {
			logInfo(_0x1ba8f6(0x1e8) + _0x2918f4[_0x1ba8f6(0xc7)]);
			const _0x514e6d = [];
			let _0x215614 = 0x0;
			for (const _0x21bd15 of this[_0x1ba8f6(0x17e)]) {
				const _0x4aedd1 = _0x21bd15[_0x1ba8f6(0x1c0)],
					_0x5866ef = _0x21bd15[_0x1ba8f6(0x1bf)];
				try {
					const _0x19aa2c = new Date()[_0x1ba8f6(0x1cf)]()[_0x1ba8f6(0xe8)]('T', '\x20')[_0x1ba8f6(0x1af)]
						(0x0, 0x13),
						_0x26be0f = encodeURIComponentSafe(_0x19aa2c),
						_0x4eca29 = _0x1ba8f6(0xe4) + _0x26be0f + '&task_id=' + _0x5866ef;
					logInfo('\x20\x20\x20📤\x20执行任务:\x20' + _0x4aedd1);
					const _0xc048d4 = {
							...this[_0x1ba8f6(0x118)],
							'unique_identity': _0x2918f4[_0x1ba8f6(0x1f0)],
							'apitoken': _0x2918f4[_0x1ba8f6(0x1ce)]
						},
						_0x3c1190 = await makeRequest('GET', _0x4eca29, _0xc048d4, null, _0x2918f4[_0x1ba8f6(
							0x15a)]);
					if (_0x3c1190[_0x1ba8f6(0x104)][_0x1ba8f6(0x145)] && _0x3c1190[_0x1ba8f6(0x104)][_0x1ba8f6(
							0x1a9)] === 0xc8) logInfo('\x20\x20\x20\x20\x20✅\x20' + _0x4aedd1 + '成功'), _0x514e6d[
						'push']({
						'task_name': _0x4aedd1,
						'success': !![],
						'completed': !![]
					}), _0x215614++;
					else {
						const _0x1d4c76 = _0x3c1190[_0x1ba8f6(0x104)]['msg'] || _0x1ba8f6(0x1cd);
						_0x1d4c76[_0x1ba8f6(0x116)](_0x1ba8f6(0x152)) ? (logInfo(_0x1ba8f6(0x137) + _0x4aedd1 +
							'已参与'), _0x514e6d[_0x1ba8f6(0x16f)]({
							'task_name': _0x4aedd1,
							'success': !![],
							'completed': ![],
							'already_done': !![]
						})) : (logWarning('\x20\x20\x20\x20\x20⚠️\x20' + _0x4aedd1 + _0x1ba8f6(0x103) +
							_0x1d4c76), _0x514e6d[_0x1ba8f6(0x16f)]({
							'task_name': _0x4aedd1,
							'success': ![],
							'error': _0x1d4c76,
							'completed': ![]
						}));
					}
					await sleep(randomInt(0x3e8, 0x7d0));
				} catch (_0x2d2a63) {
					logError(_0x1ba8f6(0x144) + _0x4aedd1 + _0x1ba8f6(0x1ea) + _0x2d2a63[_0x1ba8f6(0x1db)]),
						_0x514e6d[_0x1ba8f6(0x16f)]({
							'task_name': _0x4aedd1,
							'success': ![],
							'error': _0x2d2a63[_0x1ba8f6(0x1db)],
							'completed': ![]
						});
				}
			}
			return logInfo('✅\x20任务执行完成:\x20' + _0x215614 + '/' + this['taskIds']['length'] + _0x1ba8f6(0x14a)), {
				'success': !![],
				'task_results': _0x514e6d,
				'completed_tasks': _0x215614
			};
		} catch (_0x57dbac) {
			return logError('❌\x20执行任务异常:\x20' + _0x57dbac[_0x1ba8f6(0x1db)]), {
				'success': ![],
				'error': _0x57dbac['message']
			};
		}
	} [_0x179024(0x113)](_0xad3a01, _0x4a0051) {
		const _0x2f6052 = _0x179024;
		if (this[_0x2f6052(0x13a)] && this[_0x2f6052(0x11e)]) return logInfo(_0x2f6052(0x125) + _0xad3a01[
			'remark'] + _0x2f6052(0x1e5) + this[_0x2f6052(0x189)] + ')'), JSON[_0x2f6052(0x18f)](JSON[
			_0x2f6052(0x197)](this[_0x2f6052(0x11e)]));
		return this[_0x2f6052(0xed)][_0x2f6052(0xf9)]();
	} ['checkAndRecordFirstPrize'](_0x3e5989, _0x453586, _0x58b0fa) {
		const _0x4a6865 = _0x179024;
		if (_0x453586[_0x4a6865(0x145)] && _0x453586[_0x4a6865(0x1d0)]) {
			const _0x27b0b6 = _0x453586[_0x4a6865(0x1d0)];
			_0x27b0b6['includes'](_0x4a6865(0x1ed)) && (!this['firstPrizeFound'] && (this[_0x4a6865(0x13a)] = !![],
				this[_0x4a6865(0x11e)] = JSON['parse'](JSON['stringify'](_0x58b0fa)), this[
					'firstPrizeAccount'] = _0x3e5989[_0x4a6865(0xc7)], logInfo(_0x4a6865(0x19e) + _0x3e5989[
					'remark']), logInfo('📍\x20一等奖定位:\x20' + _0x58b0fa['provice_name'] + _0x58b0fa[
					_0x4a6865(0x19f)] + _0x58b0fa[_0x4a6865(0x1ab)]), logInfo(_0x4a6865(0x1c5))));
		}
	}
	async [_0x179024(0x10c)](_0x311431, _0x6ed66b, _0x24f0d7) {
		const _0x5dc70e = _0x179024,
			_0xa130dc = [],
			_0x449db9 = _0x5dc70e(0x15d);
		logInfo(_0x5dc70e(0x12f) + _0x311431[_0x5dc70e(0xc7)] + '\x20(共3次)');
		for (let _0x1288b7 = 0x0; _0x1288b7 < 0x3; _0x1288b7++) {
			try {
				const _0x120c56 = this['getLocationForAccount'](_0x311431, _0x24f0d7),
					_0x4d6ab0 = {
						'code': _0x5dc70e(0x1ef),
						'provice_name': _0x120c56['provice_name'],
						'city_name': _0x120c56[_0x5dc70e(0x19f)],
						'area_name': _0x120c56['area_name'],
						'address': _0x120c56[_0x5dc70e(0x1d4)],
						'longitude': _0x120c56[_0x5dc70e(0x109)],
						'dimension': _0x120c56['dimension']
					};
				logInfo('🎯\x20第\x20' + (_0x1288b7 + 0x1) + '/3\x20次系统抽奖:\x20' + _0x311431[_0x5dc70e(0xc7)]);
				this['firstPrizeFound'] ? logInfo(_0x5dc70e(0x128) + _0x120c56['provice_name'] + _0x120c56[
					'city_name'] + _0x120c56['area_name'] + _0x5dc70e(0x19d)) : logInfo(_0x5dc70e(0x128) +
					_0x120c56['provice_name'] + _0x120c56[_0x5dc70e(0x19f)] + _0x120c56[_0x5dc70e(0x1ab)]);
				const _0x58dcbb = {
						...this['headers'],
						'unique_identity': _0x311431['unique_identity'],
						'apitoken': _0x311431[_0x5dc70e(0x1ce)]
					},
					_0x1d9205 = await makeRequest(_0x5dc70e(0x1d5), _0x449db9, _0x58dcbb, _0x4d6ab0, _0x311431[
						'proxy']);
				if (_0x1d9205['data'][_0x5dc70e(0x145)] && _0x1d9205['data'][_0x5dc70e(0x1a9)] === 0xc8) {
					const _0x1e5ea8 = _0x1d9205[_0x5dc70e(0x104)][_0x5dc70e(0x104)] || {},
						_0x4350f9 = _0x1e5ea8[_0x5dc70e(0xe2)] || {},
						_0xa50891 = _0x4350f9[_0x5dc70e(0x154)] || _0x5dc70e(0x1c3),
						_0x1b5dc6 = _0x4350f9[_0x5dc70e(0x1d0)] || _0x5dc70e(0x181);
					logInfo(_0x5dc70e(0xc4) + _0xa50891 + _0x5dc70e(0xd6) + _0x1b5dc6 + ')');
					const _0x3fc88d = {
						'round': _0x1288b7 + 0x1,
						'type': '系统',
						'location': '' + _0x120c56['provice_name'] + _0x120c56['city_name'] + _0x120c56[
							'area_name'],
						'success': !![],
						'prize_name': _0xa50891,
						'prize_level': _0x1b5dc6,
						'raw_data': _0x1e5ea8
					};
					_0xa130dc[_0x5dc70e(0x16f)](_0x3fc88d), this[_0x5dc70e(0x111)](_0x311431, _0x3fc88d, _0x120c56);
				} else {
					const _0x48e567 = _0x1d9205[_0x5dc70e(0x104)]['msg'] || '未知错误';
					logInfo(_0x5dc70e(0x12c) + _0x48e567), _0xa130dc[_0x5dc70e(0x16f)]({
						'round': _0x1288b7 + 0x1,
						'type': '系统',
						'location': '' + _0x120c56[_0x5dc70e(0x140)] + _0x120c56[_0x5dc70e(0x19f)] +
							_0x120c56['area_name'],
						'success': ![],
						'error': _0x48e567
					});
				}
				await sleep(randomInt(0x7d0, 0xbb8));
			} catch (_0x398bea) {
				logError('❌\x20第\x20' + (_0x1288b7 + 0x1) + _0x5dc70e(0x1e0) + _0x398bea[_0x5dc70e(0x1db)]),
					_0xa130dc[_0x5dc70e(0x16f)]({
						'round': _0x1288b7 + 0x1,
						'type': '系统',
						'location': '未知',
						'success': ![],
						'error': _0x398bea['message']
					}), await sleep(randomInt(0x7d0, 0xbb8));
			}
		}
		if (_0x6ed66b > 0x0) {
			logInfo(_0x5dc70e(0xd1) + _0x311431[_0x5dc70e(0xc7)] + '\x20(共' + _0x6ed66b + '次)');
			for (let _0x28a510 = 0x0; _0x28a510 < _0x6ed66b; _0x28a510++) {
				try {
					const _0x4b0d39 = this[_0x5dc70e(0x113)](_0x311431, _0x24f0d7),
						_0x3f766a = {
							'code': _0x5dc70e(0x1c6),
							'provice_name': _0x4b0d39['provice_name'],
							'city_name': _0x4b0d39[_0x5dc70e(0x19f)],
							'area_name': _0x4b0d39[_0x5dc70e(0x1ab)],
							'address': _0x4b0d39['address'],
							'longitude': _0x4b0d39[_0x5dc70e(0x109)],
							'dimension': _0x4b0d39[_0x5dc70e(0x120)]
						};
					logInfo(_0x5dc70e(0x1cb) + (_0x28a510 + 0x1) + '/' + _0x6ed66b + '\x20次任务抽奖:\x20' + _0x311431[
						_0x5dc70e(0xc7)]);
					this[_0x5dc70e(0x13a)] ? logInfo(_0x5dc70e(0x128) + _0x4b0d39['provice_name'] + _0x4b0d39[
						_0x5dc70e(0x19f)] + _0x4b0d39[_0x5dc70e(0x1ab)] + _0x5dc70e(0x19d)) : logInfo(
						'\x20\x20\x20📍\x20位置:\x20' + _0x4b0d39['provice_name'] + _0x4b0d39[_0x5dc70e(0x19f)] +
						_0x4b0d39[_0x5dc70e(0x1ab)]);
					const _0x2e51cb = {
							...this[_0x5dc70e(0x118)],
							'unique_identity': _0x311431[_0x5dc70e(0x1f0)],
							'apitoken': _0x311431['apitoken']
						},
						_0x4fe6b8 = await makeRequest(_0x5dc70e(0x1d5), _0x449db9, _0x2e51cb, _0x3f766a, _0x311431[
							_0x5dc70e(0x15a)]);
					if (_0x4fe6b8[_0x5dc70e(0x104)][_0x5dc70e(0x145)] && _0x4fe6b8[_0x5dc70e(0x104)]['code'] ===
						0xc8) {
						const _0x5e2d44 = _0x4fe6b8['data'][_0x5dc70e(0x104)] || {},
							_0x2e15b8 = _0x5e2d44[_0x5dc70e(0xe2)] || {},
							_0x318c42 = _0x2e15b8[_0x5dc70e(0x154)] || _0x5dc70e(0x1c3),
							_0x40baad = _0x2e15b8[_0x5dc70e(0x1d0)] || _0x5dc70e(0x181);
						logInfo('🎉\x20任务抽奖成功!\x20获得:\x20' + _0x318c42 + '\x20(等级:\x20' + _0x40baad + ')');
						const _0x5c8e5c = {
							'round': 0x3 + _0x28a510 + 0x1,
							'type': '任务',
							'location': '' + _0x4b0d39[_0x5dc70e(0x140)] + _0x4b0d39[_0x5dc70e(0x19f)] +
								_0x4b0d39[_0x5dc70e(0x1ab)],
							'success': !![],
							'prize_name': _0x318c42,
							'prize_level': _0x40baad,
							'raw_data': _0x5e2d44
						};
						_0xa130dc[_0x5dc70e(0x16f)](_0x5c8e5c), this[_0x5dc70e(0x111)](_0x311431, _0x5c8e5c,
							_0x4b0d39);
					} else {
						const _0x509d60 = _0x4fe6b8[_0x5dc70e(0x104)][_0x5dc70e(0x110)] || _0x5dc70e(0x1cd);
						logInfo(_0x5dc70e(0x1de) + _0x509d60), _0xa130dc['push']({
							'round': 0x3 + _0x28a510 + 0x1,
							'type': '任务',
							'location': '' + _0x4b0d39[_0x5dc70e(0x140)] + _0x4b0d39[_0x5dc70e(0x19f)] +
								_0x4b0d39['area_name'],
							'success': ![],
							'error': _0x509d60
						});
					}
					await sleep(randomInt(0x7d0, 0xbb8));
				} catch (_0x18bcf5) {
					logError(_0x5dc70e(0x175) + (_0x28a510 + 0x1) + _0x5dc70e(0xc5) + _0x18bcf5[_0x5dc70e(0x1db)]),
						_0xa130dc[_0x5dc70e(0x16f)]({
							'round': 0x3 + _0x28a510 + 0x1,
							'type': '任务',
							'location': '未知',
							'success': ![],
							'error': _0x18bcf5['message']
						}), await sleep(randomInt(0x7d0, 0xbb8));
				}
			}
		}
		const _0x31fc39 = _0xa130dc[_0x5dc70e(0x17d)](_0x4467cf => _0x4467cf[_0x5dc70e(0x145)])[_0x5dc70e(0xc2)];
		return logInfo(_0x5dc70e(0x168) + _0xa130dc[_0x5dc70e(0xc2)] + '\x20次，成功\x20' + _0x31fc39 + '\x20次'),
			_0xa130dc;
	}
	async ['queryPrizeDetails'](_0x3f891c) {
		const _0x244ff7 = _0x179024;
		try {
			const _0x521487 = _0x244ff7(0xfa),
				_0x41effc =
				'https://sxs-consumer.nfsq.com.cn/geement.actjextra/api/v1/act/win/goods/simple?act_codes=' +
				_0x521487;
			logInfo(_0x244ff7(0xf2) + _0x3f891c[_0x244ff7(0xc7)]);
			const _0x2352c1 = {
					...this['headers'],
					'unique_identity': _0x3f891c['unique_identity'],
					'apitoken': _0x3f891c[_0x244ff7(0x1ce)]
				},
				_0x47b8bb = await makeRequest(_0x244ff7(0xe6), _0x41effc, _0x2352c1, null, _0x3f891c[_0x244ff7(
					0x15a)]);
			if (_0x47b8bb[_0x244ff7(0x104)][_0x244ff7(0x145)] && _0x47b8bb['data'][_0x244ff7(0x1a9)] === 0xc8) {
				const _0xb1508 = _0x47b8bb['data'][_0x244ff7(0x104)] || [],
					_0x3b6814 = {};
				for (const _0x13a7a0 of _0xb1508) {
					const _0x24e95c = _0x13a7a0['win_goods_name'] || _0x244ff7(0x1c3);
					_0x3b6814[_0x24e95c] = (_0x3b6814[_0x24e95c] || 0x0) + 0x1;
				}
				const _0x37da91 = [];
				for (const [_0x58a4e8, _0x25d583] of Object[_0x244ff7(0x1aa)](_0x3b6814)) {
					_0x25d583 > 0x1 ? _0x37da91[_0x244ff7(0x16f)](_0x58a4e8 + '×' + _0x25d583) : _0x37da91[
						_0x244ff7(0x16f)](_0x58a4e8);
				}
				return logInfo('📦\x20奖品明细:\x20' + _0x37da91[_0x244ff7(0x146)](',\x20')), {
					'success': !![],
					'total_count': _0xb1508['length'],
					'merged_prizes': _0x37da91
				};
			} else {
				const _0x1a5666 = _0x47b8bb['data'][_0x244ff7(0x110)] || _0x244ff7(0x1cd);
				return logWarning(_0x244ff7(0x12a) + _0x1a5666), {
					'success': ![],
					'error': _0x1a5666
				};
			}
		} catch (_0x793e98) {
			return logError(_0x244ff7(0x1b7) + _0x793e98[_0x244ff7(0x1db)]), {
				'success': ![],
				'error': _0x793e98[_0x244ff7(0x1db)]
			};
		}
	}
	async [_0x179024(0xf1)](_0x2d6a53, _0x2c710e) {
		const _0x4e3863 = _0x179024;
		logInfo('\x0a' + '=' ['repeat'](0x32)), logInfo(_0x4e3863(0x149) + _0x2d6a53[_0x4e3863(0xc7)]);
		this['firstPrizeFound'] && logInfo(_0x4e3863(0x1ee) + this[_0x4e3863(0x189)] + ')');
		logInfo('' + '=' [_0x4e3863(0x129)](0x32));
		try {
			const _0x3586a5 = await this['executeTasks'](_0x2d6a53),
				_0x4a6469 = _0x3586a5[_0x4e3863(0x1a6)] || 0x0,
				_0x2321e5 = await this[_0x4e3863(0x10c)](_0x2d6a53, _0x4a6469, _0x2c710e),
				_0x3312d6 = await this[_0x4e3863(0x17a)](_0x2d6a53),
				_0x4401d5 = _0x2321e5[_0x4e3863(0x17d)](_0x5366d4 => _0x5366d4['success'])['length'],
				_0x4a6fff = {
					'account': _0x2d6a53[_0x4e3863(0xc7)],
					'task_results': _0x3586a5[_0x4e3863(0x133)] || [],
					'completed_tasks': _0x4a6469,
					'lottery_results': _0x2321e5,
					'success_count': _0x4401d5,
					'prize_details': _0x3312d6
				};
			this[_0x4e3863(0x12b)][_0x4e3863(0x16f)](_0x4a6fff), logInfo('✅\x20账号\x20' + _0x2d6a53[_0x4e3863(
				0xc7)] + _0x4e3863(0x1ad));
		} catch (_0xac25b6) {
			logError(_0x4e3863(0x1bb) + _0x2d6a53['remark'] + _0x4e3863(0x1b9) + _0xac25b6[_0x4e3863(0x1db)]), this[
				_0x4e3863(0x12b)]['push']({
				'account': _0x2d6a53['remark'],
				'error': _0xac25b6[_0x4e3863(0x1db)],
				'success': ![]
			});
		}
	} [_0x179024(0xf4)]() {
		const _0x5ae6b4 = _0x179024;
		logInfo('\x0a' + '=' ['repeat'](0x3c)), logInfo(_0x5ae6b4(0x11f)), logInfo('' + '=' ['repeat'](0x3c));
		const _0x5b3e65 = this[_0x5ae6b4(0x12b)]['length'],
			_0x172d2f = this['allResults']['reduce']((_0x5460ca, _0x5962b4) => _0x5460ca + (_0x5962b4[_0x5ae6b4(
				0x105)] || 0x0), 0x0),
			_0x211866 = this[_0x5ae6b4(0x12b)]['reduce']((_0x458674, _0x2ad7cb) => {
				const _0x323395 = _0x5ae6b4;
				if (_0x2ad7cb[_0x323395(0x1b2)] && _0x2ad7cb[_0x323395(0x1b2)]['success']) return _0x458674 + (
					_0x2ad7cb[_0x323395(0x1b2)][_0x323395(0x135)] || 0x0);
				return _0x458674;
			}, 0x0);
		logInfo(_0x5ae6b4(0x14b) + _0x5b3e65), logInfo(_0x5ae6b4(0xd0) + _0x172d2f + '\x20次'), logInfo(
			'📦\x20历史奖品:\x20' + _0x211866 + '\x20个');
		this[_0x5ae6b4(0x13a)] ? (logInfo('🎉\x20发现一等奖:\x20是\x20(来自:\x20' + this[_0x5ae6b4(0x189)] + ')'), logInfo(
			_0x5ae6b4(0x190) + this['firstPrizeLocation']['provice_name'] + this[_0x5ae6b4(0x11e)][
				_0x5ae6b4(0x19f)
			] + this[_0x5ae6b4(0x11e)][_0x5ae6b4(0x1ab)])) : logInfo(_0x5ae6b4(0x1b4));
		logInfo(_0x5ae6b4(0x14d) + (this[_0x5ae6b4(0x13a)] ? _0x5ae6b4(0xef) : _0x5ae6b4(0xe0)));
		for (const _0x3cfd0b of this[_0x5ae6b4(0x12b)]) {
			if (_0x3cfd0b['error']) logInfo('❌\x20' + _0x3cfd0b['account'] + ':\x20执行失败\x20-\x20' + _0x3cfd0b[
				'error']);
			else {
				let _0x235211 = 0x0,
					_0x4a659b = 0x0;
				if (_0x3cfd0b[_0x5ae6b4(0x1e7)])
					for (const _0x571b59 of _0x3cfd0b[_0x5ae6b4(0x1e7)]) {
						if (_0x571b59['success']) {
							if (_0x571b59['type'] === '系统') _0x235211++;
							else _0x571b59[_0x5ae6b4(0x1b0)] === '任务' && _0x4a659b++;
						}
					}
				const _0x5ecdc4 = _0x5ae6b4(0xf7) + _0x235211 + '/3',
					_0x3700b2 = _0x5ae6b4(0x1dc) + _0x4a659b + '/' + _0x3cfd0b[_0x5ae6b4(0x1a6)],
					_0x588721 = [];
				if (_0x3cfd0b[_0x5ae6b4(0x1e7)])
					for (const _0x41d4e5 of _0x3cfd0b[_0x5ae6b4(0x1e7)]) {
						if (_0x41d4e5[_0x5ae6b4(0x145)]) {
							const _0x20f982 = _0x41d4e5['type'] === '系统' ? '系统' : '任务',
								_0x23d6d3 = _0x41d4e5[_0x5ae6b4(0x1d0)] && _0x41d4e5['prize_level'][_0x5ae6b4(
									0x116)](_0x5ae6b4(0x1ed)) ? '🎉' : '';
							_0x588721[_0x5ae6b4(0x16f)]('第' + _0x41d4e5[_0x5ae6b4(0x19a)] + '次(' + _0x20f982 +
								'):' + _0x41d4e5[_0x5ae6b4(0x154)] + _0x23d6d3);
						}
					}
				const _0x2ea8ae = _0x588721[_0x5ae6b4(0xc2)] > 0x0 ? _0x5ae6b4(0x193) + _0x588721[_0x5ae6b4(0x146)](
						',\x20') : '',
					_0xd6909b = _0x3cfd0b[_0x5ae6b4(0x1b2)] || {};
				let _0x301133 = '';
				_0xd6909b[_0x5ae6b4(0x145)] ? _0x301133 = '，历史:' + _0xd6909b[_0x5ae6b4(0xd5)][_0x5ae6b4(0x146)](
					',\x20') : _0x301133 = _0x5ae6b4(0xe3), logInfo('✅\x20' + _0x3cfd0b[_0x5ae6b4(0x188)] +
					_0x5ae6b4(0xce) + _0x3cfd0b['completed_tasks'] + '个' + _0x5ecdc4 + _0x3700b2 + _0x5ae6b4(
						0xcf) + _0x3cfd0b[_0x5ae6b4(0x105)] + '次' + _0x2ea8ae + _0x301133);
			}
		}
	}
	async [_0x179024(0x1a5)]() {
		const _0x5ec6ca = _0x179024,
			_0x4b7e7b = Date[_0x5ec6ca(0x10b)](),
			_0x34bd9b = new UpdateManager();
		_0x34bd9b[_0x5ec6ca(0x15b)](), await this[_0x5ec6ca(0x194)]();
		if (!this[_0x5ec6ca(0xea)]()) return;
		for (let _0x1535a0 = 0x0; _0x1535a0 < this[_0x5ec6ca(0x192)][_0x5ec6ca(0xc2)]; _0x1535a0++) {
			await this['runSingleAccount'](this['accounts'][_0x1535a0], _0x1535a0), await sleep(randomInt(0xbb8,
				0x1388));
		}
		this['summarizeResults']();
		const _0x12548f = Date[_0x5ec6ca(0x10b)](),
			_0x23080d = Math['floor']((_0x12548f - _0x4b7e7b) / 0x3e8);
		logInfo(_0x5ec6ca(0x196) + _0x23080d + '\x20秒');
	}
}
async function main() {
	const _0x37c9f8 = _0x179024,
		_0x3d8521 = process[_0x37c9f8(0x1d1)]['slice'](0x2);
	if (_0x3d8521[_0x37c9f8(0x116)](_0x37c9f8(0xd8)) || _0x3d8521[_0x37c9f8(0x116)](_0x37c9f8(0x1ac)) || _0x3d8521[
			_0x37c9f8(0x116)]('-u')) {
		const _0x32aee1 = new UpdateManager(),
			_0x14723d = await _0x32aee1[_0x37c9f8(0x1c2)]();
		_0x14723d && process[_0x37c9f8(0x13e)](0x0);
		return;
	}
	if (_0x3d8521[_0x37c9f8(0x116)](_0x37c9f8(0x1f3)) || _0x3d8521['includes']('--help') || _0x3d8521[_0x37c9f8(
			0x116)]('-h')) {
		console['log'](colors[_0x37c9f8(0x159)] + '=' [_0x37c9f8(0x129)](0x3c) + colors[_0x37c9f8(0x1ec)]), console[
				_0x37c9f8(0x1ba)](colors[_0x37c9f8(0x11c)] + _0x37c9f8(0xe5) + colors[_0x37c9f8(0x1ec)]), console[
				'log'](colors[_0x37c9f8(0x159)] + '=' [_0x37c9f8(0x129)](0x3c) + colors[_0x37c9f8(0x1ec)]), console[
				_0x37c9f8(0x1ba)](), console['log'](colors[_0x37c9f8(0xcb)] + _0x37c9f8(0x1b8) + colors[_0x37c9f8(
				0x1ec)]), console[_0x37c9f8(0x1ba)](_0x37c9f8(0xf6)), console[_0x37c9f8(0x1ba)](_0x37c9f8(0x198)),
			console[_0x37c9f8(0x1ba)](
				'\x20\x20node\x20nfsq.js\x20help\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20#\x20显示帮助信息'
				), console[_0x37c9f8(0x1ba)](), console[_0x37c9f8(0x1ba)](colors[_0x37c9f8(0xcb)] + _0x37c9f8(
				0x134) + colors['reset']), console['log'](_0x37c9f8(0xfc)), console['log'](), console[_0x37c9f8(
				0x1ba)](colors[_0x37c9f8(0xcb)] + _0x37c9f8(0x115) + colors[_0x37c9f8(0x1ec)]), console[_0x37c9f8(
				0x1ba)](_0x37c9f8(0x1a2)), console['log']('\x20\x20手动更新:\x20运行\x20node\x20nfsq.js\x20update'),
			console[_0x37c9f8(0x1ba)](), console['log'](colors[_0x37c9f8(0x15f)] + _0x37c9f8(0x13c) + SCRIPT_INFO[
				_0x37c9f8(0x1c7)] + colors['reset']), console[_0x37c9f8(0x1ba)](colors[_0x37c9f8(0x159)] + '=' [
				'repeat'
			](0x3c) + colors['reset']);
		return;
	}
	if (_0x3d8521[_0x37c9f8(0x116)](_0x37c9f8(0x10d)) || _0x3d8521[_0x37c9f8(0x116)](_0x37c9f8(0x18a)) || _0x3d8521[
			_0x37c9f8(0x116)]('-v')) {
		const _0x318ce5 = new UpdateManager();
		_0x318ce5[_0x37c9f8(0x15b)]();
		return;
	}
	try {
		const _0x1675a5 = new NongFuSpringLottery();
		await _0x1675a5[_0x37c9f8(0x1a5)]();
	} catch (_0x1603ef) {
		logError(_0x37c9f8(0x14f) + _0x1603ef['message']);
	}
}
process['on'](_0x179024(0x10e), () => {
	const _0x561e3f = _0x179024;
	logInfo(_0x561e3f(0x1b5)), process[_0x561e3f(0x13e)](0x0);
}), process['on'](_0x179024(0x1a8), _0x1b8476 => {
	const _0x2ac7bb = _0x179024;
	logError(_0x2ac7bb(0x124) + _0x1b8476[_0x2ac7bb(0x1db)]), process['exit'](0x1);
}), process['on'](_0x179024(0x12d), _0xbb7e78 => {
	const _0x69a2b6 = _0x179024;
	logError(_0x69a2b6(0x131) + _0xbb7e78[_0x69a2b6(0x1db)]), process[_0x69a2b6(0x13e)](0x1);
});
require[_0x179024(0x147)] === module && main();

function _0x35f7(_0x1a7b23, _0xba3b16) {
	const _0x19b7c1 = _0x19b7();
	return _0x35f7 = function(_0x35f7ba, _0x1f0029) {
		_0x35f7ba = _0x35f7ba - 0xc0;
		let _0x1a6493 = _0x19b7c1[_0x35f7ba];
		return _0x1a6493;
	}, _0x35f7(_0x1a7b23, _0xba3b16);
}
module['exports'] = {
	'NongFuSpringLottery': NongFuSpringLottery,
	'LocationPool': LocationPool,
	'UpdateManager': UpdateManager
};

// 当前脚本来自于 http://script.345yun.cn 脚本库下载！
// 脚本库官方QQ群: 429274456
// 脚本库中的所有脚本文件均来自热心网友上传和互联网收集。
// 脚本库仅提供文件上传和下载服务，不提供脚本文件的审核。
// 您在使用脚本库下载的脚本时自行检查判断风险。
// 所涉及到的 账号安全、数据泄露、设备故障、软件违规封禁、财产损失等问题及法律风险，与脚本库无关！均由开发者、上传者、使用者自行承担。