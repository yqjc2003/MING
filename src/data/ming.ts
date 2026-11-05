/**
 * 明朝帝王世系与官职品级数据集
 *
 * 本文件由 `npm run extract` 自动生成，请勿手工编辑。
 * 数据源：doc/明朝帝王世系&官职品级.xlsx
 */
export interface Emperor {
  /** 庙号 */
  temple: string;
  /** 名讳 */
  name: string;
  /** 年号 */
  era: string;
  /** 在位 */
  reign: string;
  /** 谥号 */
  posthumous: string;
}

export interface GenerationPoem {
  /** 王府支派 */
  branch: string;
  /** 字辈诗 */
  verse: string;
}

export interface EmperorChildren {
  /** 皇帝（含名讳） */
  emperor: string;
  /** 年号 */
  era: string;
  /** 子女条目 */
  items: string[];
}

export interface Peerage {
  title: string;
  /** 封爵序列 */
  order: string;
}

export interface RankList {
  id: string;
  title: string;
  group: string;
  /** 品级 → 散官/勋阶名称 */
  grades: string[];
}

export interface ExamStage {
  stage: string;
  text: string;
}

export interface ExamRow {
  stage: string;
  place: string;
  time: string;
  level: string;
  result: string;
}

export interface OfficialRow {
  /** 官属 */
  group: string;
  /** 官职 */
  office: string;
  /** 品级 */
  rank: string;
  /** 人数 */
  count: string;
  /** 隶属 */
  affiliation: string;
  /** 职事 */
  duty: string;
}

export interface OfficialSection {
  id: string;
  title: string;
  region: string;
  columns: string[];
  rows: OfficialRow[];
}

export interface MingDataset {
  meta: { title: string; source: string };
  emperors: Emperor[];
  southMing: Emperor[];
  generationPoems: GenerationPoem[];
  children: EmperorChildren[];
  peerages: Peerage[];
  rankLists: RankList[];
  examStages: ExamStage[];
  examRows: ExamRow[];
  officialSections: OfficialSection[];
}

export const dataset: MingDataset = {
 "meta": {
  "title": "大明 · 帝王世系与官职品级",
  "source": "doc/明朝帝王世系&官职品级.xlsx"
 },
 "emperors": [
  {
   "temple": "太祖",
   "name": "朱元璋",
   "era": "洪武",
   "reign": "31年(1368-1398)",
   "posthumous": "圣神文武 钦明启运 峻德成功 统天大孝 高皇帝"
  },
  {
   "temple": "惠帝",
   "name": "朱允炆",
   "era": "建文",
   "reign": "4年 (1398-1402)",
   "posthumous": "让皇帝"
  },
  {
   "temple": "成祖",
   "name": "朱  棣",
   "era": "永乐",
   "reign": "22年(1403-1424)",
   "posthumous": "启天弘道 高明肇运 圣武神功 纯仁至孝 文皇帝"
  },
  {
   "temple": "仁宗",
   "name": "朱高炽",
   "era": "洪熙",
   "reign": "1年      (1425)",
   "posthumous": "敬天体道 纯诚至德 弘文钦武 章圣达孝 昭皇帝"
  },
  {
   "temple": "宣宗",
   "name": "朱瞻基",
   "era": "宣德",
   "reign": "10年(1426-1435)",
   "posthumous": "宪天崇道 英明神圣 钦文昭武 宽仁纯孝 章皇帝"
  },
  {
   "temple": "英宗",
   "name": "朱祁镇",
   "era": "正统",
   "reign": "14年(1436-1449)",
   "posthumous": "法天立道 仁明诚敬 昭文宪武 至德广孝 睿皇帝"
  },
  {
   "temple": "代宗",
   "name": "朱祁钰",
   "era": "景泰",
   "reign": "8年 (1450-1457)",
   "posthumous": "恭仁康定 景皇帝"
  },
  {
   "temple": "复帝",
   "name": "朱祁镇",
   "era": "天顺",
   "reign": "8年 (1457-1464)",
   "posthumous": "法天立道 仁明诚敬 昭文宪武 至德广孝 睿皇帝"
  },
  {
   "temple": "宪宗",
   "name": "朱见深",
   "era": "成化",
   "reign": "23年(1465-1487)",
   "posthumous": "继天凝道 诚明仁敬 崇文肃武 宏德圣孝 纯皇帝"
  },
  {
   "temple": "孝宗",
   "name": "朱佑樘",
   "era": "弘治",
   "reign": "18年(1488-1505)",
   "posthumous": "达天明道 纯诚中正 圣文神武 至仁大德 敬皇帝"
  },
  {
   "temple": "武宗",
   "name": "朱厚照",
   "era": "正德",
   "reign": "16年(1505-1521)",
   "posthumous": "承天达道 英肃睿哲 昭德显功 弘文思孝 毅皇帝"
  },
  {
   "temple": "世宗",
   "name": "朱厚熜",
   "era": "嘉靖",
   "reign": "45年(1522-1566)",
   "posthumous": "钦天履道 英毅神圣 宣文广武 洪仁大孝 肃皇帝"
  },
  {
   "temple": "穆宗",
   "name": "朱载垕",
   "era": "隆庆",
   "reign": "6年 (1567-1572)",
   "posthumous": "契天隆道 渊懿宽仁 显文光武 纯德弘孝 庄皇帝"
  },
  {
   "temple": "神宗",
   "name": "朱翊钧",
   "era": "万历",
   "reign": "48年(1573-1620)",
   "posthumous": "范天合道 哲肃敦简 光文章武 安仁止孝 显皇帝"
  },
  {
   "temple": "光宗",
   "name": "朱常洛",
   "era": "泰昌",
   "reign": "1月      (1620)",
   "posthumous": "崇天契道 英睿恭纯 宪文景武 渊仁懿孝 贞皇帝"
  },
  {
   "temple": "熹宗",
   "name": "朱由校",
   "era": "天启",
   "reign": "7年 (1621-1627)",
   "posthumous": "达天阐道 敦孝笃友 章文襄武 靖穆庄勤 悊皇帝"
  },
  {
   "temple": "思宗",
   "name": "朱由检",
   "era": "崇祯",
   "reign": "17年(1628-1644)",
   "posthumous": "烈皇帝"
  }
 ],
 "southMing": [
  {
   "temple": "安宗",
   "name": "朱由崧",
   "era": "弘光",
   "reign": "1年(1644-1645)",
   "posthumous": "奉天遵道 宽和静穆 修文布武 温恭仁孝 简皇帝"
  },
  {
   "temple": "绍宗",
   "name": "朱聿键",
   "era": "隆武",
   "reign": "2年(1645-1646)",
   "posthumous": "配天至道 弘毅肃穆 思文烈武 敏仁广孝 襄皇帝"
  },
  {
   "temple": "文宗",
   "name": "朱聿鐭",
   "era": "绍武",
   "reign": "1月     (1646)",
   "posthumous": "贞天应道 昭崇德毅 宁文宏武 达仁闵孝 节皇帝"
  },
  {
   "temple": "敬宗",
   "name": "朱常清",
   "era": "东武",
   "reign": "9月     (1648)",
   "posthumous": "忠天隆道 昭义钦成 靖文襄武 奋仁睿孝 和皇帝"
  },
  {
   "temple": "昭宗",
   "name": "朱由榔",
   "era": "永历",
   "reign": "16年(1647-1662)",
   "posthumous": "应天推道 敏毅恭俭 经文纬武 体仁克孝 匡皇帝"
  }
 ],
 "generationPoems": [
  {
   "branch": "太子",
   "verse": "允文遵祖训，钦武大君胜，顺道宜缝吉，师良善用晟。"
  },
  {
   "branch": "秦王",
   "verse": "尚志公诚秉，惟怀敬谊存，辅嗣资廉直，匡时永信敦。"
  },
  {
   "branch": "晋王",
   "verse": "济美锺奇表，知新慎敏求，审心咸景慕，述学继前修。"
  },
  {
   "branch": "燕王",
   "verse": "高瞻祁见祐，厚载翊常由，慈和怡伯仲，简靖迪先猷。"
  },
  {
   "branch": "周王",
   "verse": "有子同安睦，勤朝在肃恭，绍伦敷惠润，昭格广登庸。"
  },
  {
   "branch": "楚王",
   "verse": "孟季均荣显，英华蕴盛容，宏才升博衍，茂士立全功。"
  },
  {
   "branch": "齐王",
   "verse": "贤能长可庆，睿智实堪宗，养性期渊雅，寅思复会通。"
  },
  {
   "branch": "鲁王",
   "verse": "肇泰阳当健，观颐寿以弘，振举希兼达，康庄遇本宁。"
  },
  {
   "branch": "蜀王",
   "verse": "悦友申宾让，承宣奉至平，懋进深滋益，端居务穆清。"
  },
  {
   "branch": "湘王",
   "verse": "久镇开方岳，扬威谨礼仪，刚毅循超卓，权衡素自持。"
  },
  {
   "branch": "代王",
   "verse": "逊仕成聪俊，充廷鼐鼎彝，传贻连秀郁，炳燿壮洪基。"
  },
  {
   "branch": "肃王",
   "verse": "瞻禄贡真弼，缙绅识烈忠，曦晖跻当运，凯谏处恒隆。"
  },
  {
   "branch": "辽王",
   "verse": "贵豪恩宠致，宪术俨尊儒，云仍祺保合，操翰丽龙舆。"
  },
  {
   "branch": "庆王",
   "verse": "秩邃寘台鼒，倪伸帅倬奇，适完因巨衎，骘眷发需毗。"
  },
  {
   "branch": "宁王",
   "verse": "磐奠觐宸拱，多谋统议中，总添支庶阔，作哲向亲衷。"
  },
  {
   "branch": "岷王",
   "verse": "徽音膺彦誉，定干企禋雍，崇礼原谘访，宽镕喜贲从。"
  },
  {
   "branch": "谷王",
   "verse": "赋质僖雄敞，丛兴阐福昌，笃谐恂怿豫，扩霁昱祯祥。"
  },
  {
   "branch": "韩王",
   "verse": "冲范徵偕旭，融谟朗璟逵，亶韶愉灏慥，令绪价蕃维。"
  },
  {
   "branch": "沈王",
   "verse": "佶幼诠勋胤，恬珵效回瑝，湜源諲晳暐，圭璧澈澄昂。"
  },
  {
   "branch": "安王",
   "verse": "斐序斌廷赏，凝覃浚祉襄，恢严颛辑矩，缜密廓程纲。"
  },
  {
   "branch": "唐王",
   "verse": "琼芝弥宇宙，硕器聿琳琚，启龄蒙颂体，嘉历协铭图。"
  },
  {
   "branch": "郢王",
   "verse": "伟闻参望奭，箴诲洎皋夔，麒麟馀积兆，奎颖晔璇玑。"
  },
  {
   "branch": "伊王",
   "verse": "颙勉諟訏典，褒珂采凤琛，应畴颁胄选，昆玉冠泉金。"
  }
 ],
 "children": [
  {
   "emperor": "太祖朱元璋",
   "era": "洪武",
   "items": [
    "长子 朱标 懿文太子",
    "次子 朱樉 秦王",
    "三子 朱棡 晋王",
    "四子 朱棣 燕王",
    "五子 朱橚 周王",
    "六子 朱桢 楚王",
    "七子 朱榑 齐王",
    "八子 朱梓 潭王",
    "九子 朱杞 赵王",
    "十子 朱檀 鲁王",
    "十一子 朱椿 蜀王",
    "十二子 朱柏 湘王",
    "十三子 朱桂 代王",
    "十四子 朱楧 肃王",
    "十五子 朱植 辽王",
    "十六子 朱㮵 庆王",
    "十七子 朱权 宁王",
    "十八子 朱楩 岷王",
    "十九子 朱橞 谷王",
    "二十子 朱松 韩王",
    "二十一子 朱模 沈王",
    "二十二子 朱楹 安王",
    "二十三子 朱桱 唐王",
    "二十四子 朱栋 郢王",
    "二十五子 朱木彝 伊王",
    "二十六子 朱 未封王"
   ]
  },
  {
   "emperor": "惠帝朱允炆",
   "era": "建文",
   "items": [
    "长子 朱文奎 和简太子",
    "次子 朱文圭 润怀王"
   ]
  },
  {
   "emperor": "成祖朱  棣",
   "era": "永乐",
   "items": [
    "长子 朱高炽 太子",
    "次子 朱高煦 汉王",
    "三子 朱高燧 赵王",
    "四子 朱高烯 未封王"
   ]
  },
  {
   "emperor": "仁宗朱高炽",
   "era": "洪熙",
   "items": [
    "长子 朱瞻基 太子",
    "次子 朱瞻埈 郑靖王",
    "三子 朱瞻墉 越靖王",
    "四子 朱瞻垠 蕲献王",
    "五子 朱瞻墡 襄宪王",
    "六子 朱瞻堈 荆宪王",
    "七子 朱瞻墺 淮靖王",
    "八子 朱瞻垲 滕淮王",
    "九子 朱瞻垍 梁庄王",
    "十子 朱膽埏 卫恭王"
   ]
  },
  {
   "emperor": "宣宗朱瞻基",
   "era": "宣德",
   "items": [
    "长子 朱祁镇 太子",
    "次子 朱祁钰 郕王"
   ]
  },
  {
   "emperor": "英宗朱祁镇",
   "era": "正统&天顺",
   "items": [
    "长子 朱见深 太子",
    "次子 朱见瀵 德庄王",
    "三子 朱见湜 早天",
    "四子 朱见淳 许悼王",
    "五子 朱见澍 秀怀王",
    "六子 朱见泽 崇简王",
    "七子 朱见浚 吉简王",
    "八子 朱见治 忻穆王",
    "九子 朱见沛 徽庄王"
   ]
  },
  {
   "emperor": "代宗朱祁钰",
   "era": "景泰",
   "items": [
    "世子 朱见济 郕王世子"
   ]
  },
  {
   "emperor": "宪宗朱见深",
   "era": "成化",
   "items": [
    "长子 早夭",
    "次子 朱祐极 悼恭太子",
    "三子 朱祐樘 太子",
    "四子 朱祐杬 兴献王",
    "五子 朱祐榆 岐惠王",
    "六子 朱祐槟 益端王",
    "七子 朱祐輝 衡恭王",
    "八子 朱祐坛 雍靖王",
    "九子 朱祐槽 寿定王",
    "十子 早天",
    "十一子 朱祐 汝安王",
    "十二子 朱祐瞬 泾简王",
    "十三子 朱祐枢 荣庄王",
    "十四子 朱祐楷 申懿王"
   ]
  },
  {
   "emperor": "孝宗朱祐樘",
   "era": "弘治",
   "items": [
    "长子 朱厚照 太子",
    "次子 朱厚炜 早天",
    "武宗朱厚照无子--正德"
   ]
  },
  {
   "emperor": "世宗朱厚熄",
   "era": "嘉靖",
   "items": [
    "长子 朱载基 哀冲太子",
    "二子 朱载壡 庄敬太子",
    "三子 朱载垕 裕王&太子",
    "四子 朱载圳 景恭王",
    "五子 早天",
    "六子 朱载<憂斗土>戚怀王",
    "七子 朱载壇 蓟哀王",
    "八子 朱载<土夙>均思王"
   ]
  },
  {
   "emperor": "穆宗朱载垕",
   "era": "隆庆",
   "items": [
    "长子 朱翊武 宪怀太子",
    "二子 朱翊铃 早天",
    "三子 朱翊钧 太子",
    "四子 朱翊缪 潞简王"
   ]
  },
  {
   "emperor": "神宗朱翊钧",
   "era": "万历",
   "items": [
    "长子 朱常洛 太子",
    "次子 朱常溆 邠哀王",
    "三子 朱常洵 福忠王",
    "四子 朱常治 早天",
    "五子 朱常浩 瑞王",
    "六子 朱常润 惠王",
    "七子 朱常瀛 桂端王",
    "八子 朱常溥 早天"
   ]
  },
  {
   "emperor": "光宗朱常洛",
   "era": "泰昌",
   "items": [
    "长子 朱由校 太子",
    "次子 朱由㰒 简怀王",
    "三子 朱由楫 齐思王",
    "四子 朱由模 早夭",
    "五子 朱由检 信王",
    "六子 朱由栩 湘怀王",
    "七子 朱由橏 惠昭王"
   ]
  },
  {
   "emperor": "熹宗朱由校",
   "era": "天启",
   "items": [
    "长子 朱慈燃 早天",
    "次子 朱慈 早夭",
    "三子 朱慈炅 早天"
   ]
  },
  {
   "emperor": "思宗朱由检",
   "era": "崇祯",
   "items": [
    "长子 朱慈烺 献感太子",
    "次子 朱慈垣 怀隐王",
    "三子 朱慈炯 定哀王",
    "四子 朱慈照 永悼王",
    "五子 朱慈焕 悼灵王",
    "六子 朱慈灿 悼怀王",
    "七子 悼良王 早天"
   ]
  }
 ],
 "peerages": [
  {
   "title": "皇子",
   "order": "亲王→郡王→镇国将军→辅国将军→奉国将军→镇国中尉→辅国中尉→奉国中尉"
  },
  {
   "title": "皇女",
   "order": "大长公主→长公主→公主→郡主→县主→郡君→县君"
  }
 ],
 "rankLists": [
  {
   "id": "wen-shan",
   "title": "文散阶",
   "group": "散官",
   "grades": [
    "正一品 初授特进荣禄大夫，升授特进光禄大夫",
    "从一品 初授荣禄大夫，升授光禄大夫",
    "正二品 初授资善大夫，升授资政大夫，加授资德大夫",
    "从二品 初授中奉大夫，升授通奉大夫，加授正奉大夫",
    "正三品 初授嘉议大夫，升授通议大夫，加授正议大夫",
    "从三品 初授亚中大夫，升授中大夫，加授大中大夫",
    "正四品 初授中顺大夫，升授中宪大夫，加授中议大夫",
    "从四品 初授朝列大夫，升授朝议大夫，加授朝请大夫",
    "正五品 初授奉议大夫，升授奉政大夫",
    "从五品 初授奉训大夫，升授奉直大夫",
    "正六品 初授承直郎，升授承德郎",
    "从六品 初授承务郎，升授儒林郎，吏材干出身授宣德郎",
    "正七品 初授承事郎，升授文林郎，吏材干授宣议郎",
    "从七品 初授从仕郎，升授征仕郎",
    "正八品 初授迪功郎，升授修职郎",
    "从八品 初授迪功佐郎，升授修职佐郎",
    "正九品 初授将仕郎，升授登仕郎",
    "从九品 初授将仕佐郎，升授登仕佐郎"
   ]
  },
  {
   "id": "wu-shan",
   "title": "武散阶",
   "group": "散官",
   "grades": [
    "正一品 初授特进荣禄大夫，升授特进光禄大夫",
    "从一品 初授荣禄大夫，升授光禄大夫",
    "正二品 初授骠骑将军，升授金吾将军，加授龙虎将军",
    "从二品 初授镇国将军，升授定国将军，加授奉国将军",
    "正三品 初授昭勇将军，升授昭毅将军，加授昭武将军",
    "从三品 初授怀远将军，升授定远将军，加授安远将军",
    "正四品 初授明威将军，升授宣威将军，加授广威将军",
    "从四品 初授宣武将军，升授显武将军，加授信武将军",
    "正五品 初授武德将军，升授武节将军",
    "从五品 初授武略将军，升授武毅将军",
    "正六品 初授昭信校尉，升授承信校尉",
    "从六品 初授忠显校尉，升授忠武校尉"
   ]
  },
  {
   "id": "wen-xun",
   "title": "文勋十级",
   "group": "勋级",
   "grades": [
    "正一品 左、右柱国",
    "从一品 柱国",
    "正二品 正治上卿",
    "从二品 正治卿",
    "正三品 资治尹",
    "从三品 资治少尹",
    "正四品 赞治尹",
    "从四品 赞治少尹",
    "正五品 修正庶尹",
    "从五品 协正庶尹"
   ]
  },
  {
   "id": "wu-xun",
   "title": "武勋十二级",
   "group": "勋级",
   "grades": [
    "正一品 左、右柱国",
    "从一品 柱国",
    "正二品 上护军",
    "从二品 护军",
    "正三品 上轻车都尉",
    "从三品 轻车都尉",
    "正四品 上骑都尉",
    "从四品 骑都尉",
    "正五品 骁骑尉",
    "从五品 飞骑尉",
    "正六品 云骑尉",
    "从六品 武骑尉"
   ]
  }
 ],
 "examStages": [
  {
   "stage": "殿试",
   "text": "最高等级：\n殿试\n（廷试·定进士名次）"
  },
  {
   "stage": "会试",
   "text": "第二级正科：\n会试(春闱.考贡士)"
  },
  {
   "stage": "乡试",
   "text": "第一级正科：\n乡试(秋闱.考举人)"
  },
  {
   "stage": "童试",
   "text": "前置阶段：\n童试(考秀才)"
  }
 ],
 "examRows": [
  {
   "stage": "殿试",
   "place": "奉天殿（皇极殿）\n后改在文华殿",
   "time": "会试后约一个月，\n明初为三月初一，\n成化八年（1472年）\n后固定为三月十五",
   "level": "一甲进士",
   "result": "状元；一甲第一名，授翰林院修撰(从六品)"
  },
  {
   "stage": "殿试",
   "place": "",
   "time": "",
   "level": "",
   "result": "榜眼；一甲第二名，授翰林院编修(正七品)"
  },
  {
   "stage": "殿试",
   "place": "",
   "time": "",
   "level": "",
   "result": "探花；一甲第三名，授翰林院编修(正七品)"
  },
  {
   "stage": "殿试",
   "place": "",
   "time": "",
   "level": "二甲进士",
   "result": "赐同进士出身，几十至一百人，二甲第一名为传胪，\n可参加庶吉士馆选，入选者入翰林院庶常馆进修三年；未入选者外派六部主事、知县等"
  },
  {
   "stage": "殿试",
   "place": "",
   "time": "",
   "level": "三甲进士",
   "result": "人数不固定，常一两百人多数外放地方知县、推官，少数优秀者可被特选为庶吉士"
  },
  {
   "stage": "会试",
   "place": "京城礼部贡院（北京）",
   "time": "每三年一次，在乡试次年\n举行，逢辰、戌、丑、未年",
   "level": "贡士\n第一名称会元",
   "result": "贡士本身不直接授官，需经殿试获得进士身份后方可授职"
  },
  {
   "stage": "乡试",
   "place": "各省布政司贡院\n（如山东考生赴济南）",
   "time": "三年一次\n（皇帝登基、\n大婚等喜事可加开恩科）",
   "level": "举人\n第一名称解元",
   "result": "次年进京参加会试冲刺进士"
  },
  {
   "stage": "乡试",
   "place": "",
   "time": "",
   "level": "",
   "result": "多次会试落第，可走\"大挑/拣选\"出任府学训导、县教谕、县丞等基层官员"
  },
  {
   "stage": "童试",
   "place": "院试：各省学政\n    （提督学院）",
   "time": "三年两考",
   "level": "秀才",
   "result": "廪膳生（廪生）：成绩最优，官府每月发廪米银粮，可优先保举为贡生"
  },
  {
   "stage": "童试",
   "place": "",
   "time": "",
   "level": "",
   "result": "增广生（增生）：二等，额外扩招名额，无俸禄"
  },
  {
   "stage": "童试",
   "place": "",
   "time": "",
   "level": "",
   "result": "附学生（附生）：三等，新晋秀才，候补身份"
  },
  {
   "stage": "童试",
   "place": "府试：知府",
   "time": "县试后1-3个月",
   "level": "获得院试资格",
   "result": "/"
  },
  {
   "stage": "童试",
   "place": "县试：本县知县",
   "time": "每年一次",
   "level": "获得府试资格",
   "result": "/"
  }
 ],
 "officialSections": [
  {
   "id": "assistants",
   "title": "皇帝辅臣",
   "region": "中央官制 · 辅弼",
   "columns": [
    "官职",
    "品级",
    "人数",
    "隶属",
    "职事"
   ],
   "rows": [
    {
     "group": "爵位",
     "office": "公爵、侯爵、伯爵、驸马都尉",
     "rank": "超品",
     "count": "无定员",
     "affiliation": "勋爵",
     "duty": ""
    },
    {
     "group": "三公",
     "office": "太师、太傅、太保",
     "rank": "正一品",
     "count": "无定员",
     "affiliation": "三公",
     "duty": "负责协助皇帝处理重要国事政务，职位至重"
    },
    {
     "group": "三孤",
     "office": "少师、少傅、少保",
     "rank": "从一品",
     "count": "无定员",
     "affiliation": "三孤",
     "duty": ""
    },
    {
     "group": "太子三师",
     "office": "太子太师、太子太傅、太子太保",
     "rank": "从一品",
     "count": "无定员",
     "affiliation": "太子三师",
     "duty": "负责以道德辅导皇太子，且谨慎护翼，为东宫辅臣"
    },
    {
     "group": "太子三少",
     "office": "太子少师、太子少傅、太子少保",
     "rank": "正二品",
     "count": "无定员",
     "affiliation": "太子三少",
     "duty": "最初负责掌奉皇太子以管三公的道德而教谕等事，为东宫辅臣"
    },
    {
     "group": "宗人府",
     "office": "宗人令",
     "rank": "正一品",
     "count": "一人",
     "affiliation": "宗人府",
     "duty": "掌管明朝皇帝九族的宗族名册，并按时撰写帝王谱系，记录宗室成员子女的嫡庶名称封号、嗣职袭位、生卒年间婚嫁、丧葬谥号等事\n(永乐后亲王不再担任宗人府官职，左右宗正也被逐渐取缔)"
    },
    {
     "group": "宗人府",
     "office": "左、右宗人",
     "rank": "正一品",
     "count": "二人",
     "affiliation": "宗人府",
     "duty": ""
    },
    {
     "group": "宗人府",
     "office": "经历",
     "rank": "正五品",
     "count": "一人",
     "affiliation": "宗人府经历司",
     "duty": ""
    },
    {
     "group": "詹事府",
     "office": "詹事",
     "rank": "正三品",
     "count": "一人",
     "affiliation": "詹事府",
     "duty": "掌管东宫事务，负责教育、辅弼\n和日常事务管理；但实际上从明中期开始，\n它更多是翰林官通往内阁的一条\"清贵台阶\""
    },
    {
     "group": "詹事府",
     "office": "少詹事",
     "rank": "正四品",
     "count": "二人",
     "affiliation": "詹事府",
     "duty": ""
    },
    {
     "group": "詹事府",
     "office": "府丞",
     "rank": "正六品",
     "count": "二人",
     "affiliation": "詹事府",
     "duty": ""
    },
    {
     "group": "詹事府",
     "office": "主簿",
     "rank": "从七品",
     "count": "一人",
     "affiliation": "詹事府主簿厅",
     "duty": ""
    },
    {
     "group": "詹事府",
     "office": "录事",
     "rank": "正九品",
     "count": "二人",
     "affiliation": "詹事府",
     "duty": ""
    },
    {
     "group": "詹事府",
     "office": "通事舍人",
     "rank": "从九品",
     "count": "二人",
     "affiliation": "詹事府",
     "duty": ""
    },
    {
     "group": "詹事府",
     "office": "大学士",
     "rank": "正五品",
     "count": "二人",
     "affiliation": "詹事府",
     "duty": ""
    },
    {
     "group": "詹事府",
     "office": "左、右庶子",
     "rank": "正五品",
     "count": "二人",
     "affiliation": "詹事府左、右春坊",
     "duty": ""
    },
    {
     "group": "詹事府",
     "office": "左、右谕德",
     "rank": "从五品",
     "count": "二人",
     "affiliation": "詹事府左、右春坊",
     "duty": ""
    },
    {
     "group": "詹事府",
     "office": "左、右中允",
     "rank": "正六品",
     "count": "四人",
     "affiliation": "詹事府左、右春坊",
     "duty": ""
    },
    {
     "group": "詹事府",
     "office": "左、右赞善",
     "rank": "从六品",
     "count": "四人",
     "affiliation": "詹事府左、右春坊",
     "duty": ""
    },
    {
     "group": "詹事府",
     "office": "左、右司直郎",
     "rank": "从六品",
     "count": "四人",
     "affiliation": "詹事府左、右春坊",
     "duty": ""
    },
    {
     "group": "詹事府",
     "office": "左、右清纪郎",
     "rank": "从八品",
     "count": "二人",
     "affiliation": "詹事府左、右春坊",
     "duty": ""
    },
    {
     "group": "詹事府",
     "office": "左、右思谏",
     "rank": "从九品",
     "count": "四人",
     "affiliation": "詹事府左、右春坊",
     "duty": ""
    },
    {
     "group": "詹事府",
     "office": "洗马",
     "rank": "从五品",
     "count": "一人",
     "affiliation": "詹事府司经局",
     "duty": ""
    },
    {
     "group": "詹事府",
     "office": "校书",
     "rank": "正九品",
     "count": "二人",
     "affiliation": "詹事府司经局",
     "duty": ""
    },
    {
     "group": "詹事府",
     "office": "正字",
     "rank": "从九品",
     "count": "二人",
     "affiliation": "詹事府司经局",
     "duty": ""
    },
    {
     "group": "十二监",
     "office": "司礼监掌印太监",
     "rank": "正四品",
     "count": "一人",
     "affiliation": "司礼监(下设掌司、典簿若干宦官)",
     "duty": "批答奏章、传宣谕旨，总管有关宦官事务，兼顾其他重要官职"
    },
    {
     "group": "十二监",
     "office": "内官监掌印太监",
     "rank": "正四品",
     "count": "一人",
     "affiliation": "内宫监(下设掌司、典簿若干宦官)",
     "duty": "主要掌管采办皇帝所用的器物，如围屏、床榻、桌柜等"
    },
    {
     "group": "十二监",
     "office": "司设监掌印太监",
     "rank": "正四品",
     "count": "一人",
     "affiliation": "司设监(下设掌司、典簿若干宦官)",
     "duty": "掌管卥(xi)簿、仪仗、围模、帐幔、雨具等"
    },
    {
     "group": "十二监",
     "office": "神宫监掌印太监",
     "rank": "正四品",
     "count": "一人",
     "affiliation": "神宫监(下设掌司、典簿若干宦官)",
     "duty": "掌管太庙及各庙的洒扫及香灯等"
    },
    {
     "group": "十二监",
     "office": "尚膳监掌印太监",
     "rank": "正四品",
     "count": "一人",
     "affiliation": "尚膳监(下设掌司、典簿若干宦官)",
     "duty": "掌管御膳、宫内食用和筵宴等"
    },
    {
     "group": "十二监",
     "office": "尚宝监掌印太监",
     "rank": "正四品",
     "count": "一人",
     "affiliation": "尚宝监(下设掌司、典簿若干宦官)",
     "duty": "掌管宝玺、敕符、将军印信"
    },
    {
     "group": "十二监",
     "office": "印绶监掌印太监",
     "rank": "正四品",
     "count": "一人",
     "affiliation": "印绶监(下设掌司、典簿若干宦官)",
     "duty": "掌管古今通集库以及铁券、诰敕、贴黄、印信、图书、勘合、符验、信符等"
    },
    {
     "group": "十二监",
     "office": "直殿监掌印太监",
     "rank": "正四品",
     "count": "一人",
     "affiliation": "直殿监(下设掌司、典簿若干宦官)",
     "duty": "掌管各殿及廊庑洒扫之事"
    },
    {
     "group": "十二监",
     "office": "尚衣监掌印太监",
     "rank": "正四品",
     "count": "一人",
     "affiliation": "尚衣监(下设掌司、典簿若干宦官)",
     "duty": "掌管皇帝的冠冕、袍服、靴袜等"
    },
    {
     "group": "十二监",
     "office": "都知监掌印太监",
     "rank": "正四品",
     "count": "一人",
     "affiliation": "都知监(下设掌司、典簿若干宦官)",
     "duty": "起初负责各监行移、关知、勘合等事，后来专门跟随皇帝，负责导引清道"
    },
    {
     "group": "十二监",
     "office": "御用监掌印太监",
     "rank": "正四品",
     "count": "一人",
     "affiliation": "御用监(下设掌司、典簿若干宦官)",
     "duty": "掌造办宫迁所用围屏、床榻诸木器，以及紫檀、象牙、乌木、螺甸等玩器"
    },
    {
     "group": "十二监",
     "office": "御马监掌印太监",
     "rank": "正四品",
     "count": "一人",
     "affiliation": "御马监(下设掌司、典簿若干宦官)",
     "duty": "掌腾骧四卫营马匹及象房等事"
    },
    {
     "group": "太医院",
     "office": "院使",
     "rank": "正五品",
     "count": "一人",
     "affiliation": "太医院",
     "duty": "掌医药，主要为宫廷服务，负责宫廷医疗、\n药材管理、医官选派与考核、医学教育、\n疫病防治与慈善医疗"
    },
    {
     "group": "太医院",
     "office": "院判",
     "rank": "正六品",
     "count": "二人",
     "affiliation": "太医院",
     "duty": ""
    },
    {
     "group": "太医院",
     "office": "御医",
     "rank": "正八品",
     "count": "十人",
     "affiliation": "太医院",
     "duty": ""
    },
    {
     "group": "太医院",
     "office": "大使",
     "rank": "未入流",
     "count": "一人",
     "affiliation": "太医院生药库(下设库子、斗级若干)",
     "duty": ""
    },
    {
     "group": "太医院",
     "office": "副使",
     "rank": "未入流",
     "count": "一人",
     "affiliation": "太医院生药库(下设库子、斗级若干)",
     "duty": ""
    },
    {
     "group": "太医院",
     "office": "大使",
     "rank": "未入流",
     "count": "一人",
     "affiliation": "太医院惠民药局(下设库子、斗级若干)",
     "duty": ""
    },
    {
     "group": "太医院",
     "office": "副使",
     "rank": "未入流",
     "count": "一人",
     "affiliation": "太医院惠民药局(下设库子、斗级若干)",
     "duty": ""
    }
   ]
  },
  {
   "id": "central",
   "title": "中央政府",
   "region": "中央官制 · 六部与诸司",
   "columns": [
    "官职",
    "品级",
    "人数",
    "隶属",
    "职事"
   ],
   "rows": [
    {
     "group": "内阁",
     "office": "中极殿大学士(旧名华盖殿)",
     "rank": "正五品",
     "count": "一人",
     "affiliation": "内阁",
     "duty": "初为皇帝咨询机构，仁宣朝后增加票拟权，\n彻底成为拥有决策权的帝国行政中枢"
    },
    {
     "group": "内阁",
     "office": "建极殿大学士(旧名谨身殿)",
     "rank": "正五品",
     "count": "一人",
     "affiliation": "内阁",
     "duty": ""
    },
    {
     "group": "内阁",
     "office": "文华殿大学士",
     "rank": "正五品",
     "count": "一人",
     "affiliation": "内阁",
     "duty": ""
    },
    {
     "group": "内阁",
     "office": "武英殿大学士",
     "rank": "正五品",
     "count": "一人",
     "affiliation": "内阁",
     "duty": ""
    },
    {
     "group": "内阁",
     "office": "文渊阁大学士",
     "rank": "正五品",
     "count": "一人",
     "affiliation": "内阁",
     "duty": ""
    },
    {
     "group": "内阁",
     "office": "东阁大学士",
     "rank": "正五品",
     "count": "一人",
     "affiliation": "内阁",
     "duty": ""
    },
    {
     "group": "吏部",
     "office": "吏部尚书",
     "rank": "正二品",
     "count": "一人",
     "affiliation": "吏部",
     "duty": "管理文职官员的机关，掌品秩铨选之制，\n考课黜陟之方，封授册赏之典，定籍终制之法"
    },
    {
     "group": "吏部",
     "office": "吏部左、右侍郎",
     "rank": "正三品",
     "count": "二人",
     "affiliation": "吏部",
     "duty": ""
    },
    {
     "group": "吏部",
     "office": "司务",
     "rank": "从九品",
     "count": "二人",
     "affiliation": "吏部司务厅",
     "duty": ""
    },
    {
     "group": "吏部",
     "office": "郎中",
     "rank": "正五品",
     "count": "一人",
     "affiliation": "吏部文选清吏司",
     "duty": ""
    },
    {
     "group": "吏部",
     "office": "郎中",
     "rank": "正五品",
     "count": "一人",
     "affiliation": "吏部验封清吏司",
     "duty": ""
    },
    {
     "group": "吏部",
     "office": "郎中",
     "rank": "正五品",
     "count": "一人",
     "affiliation": "吏部稽勋清吏司",
     "duty": ""
    },
    {
     "group": "吏部",
     "office": "郎中",
     "rank": "正五品",
     "count": "一人",
     "affiliation": "吏部考功清吏司",
     "duty": ""
    },
    {
     "group": "吏部",
     "office": "员外郎",
     "rank": "从五品",
     "count": "一人",
     "affiliation": "吏部",
     "duty": ""
    },
    {
     "group": "吏部",
     "office": "主事",
     "rank": "正六品",
     "count": "二人",
     "affiliation": "吏部考功清吏司",
     "duty": ""
    },
    {
     "group": "吏部",
     "office": "主事",
     "rank": "正六品",
     "count": "二人",
     "affiliation": "吏部文选清吏司",
     "duty": ""
    },
    {
     "group": "吏部",
     "office": "主事",
     "rank": "正六品",
     "count": "二人",
     "affiliation": "吏部稽勋清吏司、吏部验封清吏司",
     "duty": ""
    },
    {
     "group": "户部",
     "office": "户部尚书",
     "rank": "正二品",
     "count": "一人",
     "affiliation": "户部",
     "duty": "掌全国疆土、田地、户籍、赋税、俸饷及一切财政事宜\n户部是六部中实际权力最重的部门，总掌天下户口、田赋、财政出纳，相当于财政部、民政部与部分农业部的综合体。洪武二十九年（1396年）定为正二品衙门，下设十三清吏司，按省分治，形成\"分省而治\"的垂直管理体系，具体负责户籍与土地管理、税负征收与财政预算、仓储与漕运管理、货币与专卖事务、灾荒赈济等\n（副提举、典史各一人，后革）\n（副使六人，户部甲字、乙字、丙字二人、丁字、戊字）\n（丁字库嘉靖中革一人，并革乙字、戊字副使））"
    },
    {
     "group": "户部",
     "office": "户部左、右侍郎",
     "rank": "正三品",
     "count": "二人",
     "affiliation": "户部",
     "duty": ""
    },
    {
     "group": "户部",
     "office": "司务",
     "rank": "从九品",
     "count": "二人",
     "affiliation": "户部司务厅",
     "duty": ""
    },
    {
     "group": "户部",
     "office": "郎中",
     "rank": "正五品",
     "count": "一人",
     "affiliation": "户部浙江清吏司",
     "duty": ""
    },
    {
     "group": "户部",
     "office": "郎中",
     "rank": "正五品",
     "count": "一人",
     "affiliation": "户部江西清吏司",
     "duty": ""
    },
    {
     "group": "户部",
     "office": "郎中",
     "rank": "正五品",
     "count": "一人",
     "affiliation": "户部湖广清吏司",
     "duty": ""
    },
    {
     "group": "户部",
     "office": "郎中",
     "rank": "正五品",
     "count": "三人",
     "affiliation": "户部陕西清吏司",
     "duty": ""
    },
    {
     "group": "户部",
     "office": "郎中",
     "rank": "正五品",
     "count": "一人",
     "affiliation": "户部广东清吏司",
     "duty": ""
    },
    {
     "group": "户部",
     "office": "郎中",
     "rank": "正五品",
     "count": "二人",
     "affiliation": "户部山东清吏司",
     "duty": ""
    },
    {
     "group": "户部",
     "office": "郎中",
     "rank": "正五品",
     "count": "一人",
     "affiliation": "户部福建清吏司",
     "duty": ""
    },
    {
     "group": "户部",
     "office": "郎中",
     "rank": "正五品",
     "count": "一人",
     "affiliation": "户部河南清吏司",
     "duty": ""
    },
    {
     "group": "户部",
     "office": "郎中",
     "rank": "正五品",
     "count": "四人",
     "affiliation": "户部山西清吏司",
     "duty": ""
    },
    {
     "group": "户部",
     "office": "郎中",
     "rank": "正五品",
     "count": "一人",
     "affiliation": "户部四川清吏司",
     "duty": ""
    },
    {
     "group": "户部",
     "office": "郎中",
     "rank": "正五品",
     "count": "一人",
     "affiliation": "户部广西清吏司",
     "duty": ""
    },
    {
     "group": "户部",
     "office": "郎中",
     "rank": "正五品",
     "count": "三人",
     "affiliation": "户部贵州清吏司",
     "duty": ""
    },
    {
     "group": "户部",
     "office": "郎中",
     "rank": "正五品",
     "count": "三人",
     "affiliation": "户部云南清吏司",
     "duty": ""
    },
    {
     "group": "户部",
     "office": "员外郎",
     "rank": "从五品",
     "count": "一人",
     "affiliation": "户部",
     "duty": ""
    },
    {
     "group": "户部",
     "office": "主事",
     "rank": "正六品",
     "count": "七人",
     "affiliation": "户部云南清吏司",
     "duty": ""
    },
    {
     "group": "户部",
     "office": "主事",
     "rank": "正六品",
     "count": "二人",
     "affiliation": "户部浙江清吏司",
     "duty": ""
    },
    {
     "group": "户部",
     "office": "主事",
     "rank": "正六品",
     "count": "二人",
     "affiliation": "户部江西清吏司",
     "duty": ""
    },
    {
     "group": "户部",
     "office": "主事",
     "rank": "正六品",
     "count": "二人",
     "affiliation": "户部湖广清吏司",
     "duty": ""
    },
    {
     "group": "户部",
     "office": "主事",
     "rank": "正六品",
     "count": "二人",
     "affiliation": "户部陕西清吏司",
     "duty": ""
    },
    {
     "group": "户部",
     "office": "主事",
     "rank": "正六品",
     "count": "二人",
     "affiliation": "户部福建清吏司",
     "duty": ""
    },
    {
     "group": "户部",
     "office": "主事",
     "rank": "正六品",
     "count": "二人",
     "affiliation": "户部河南清吏司",
     "duty": ""
    },
    {
     "group": "户部",
     "office": "主事",
     "rank": "正六品",
     "count": "二人",
     "affiliation": "户部山西清吏司",
     "duty": ""
    },
    {
     "group": "户部",
     "office": "主事",
     "rank": "正六品",
     "count": "一人",
     "affiliation": "户部山东清吏司",
     "duty": ""
    },
    {
     "group": "户部",
     "office": "主事",
     "rank": "正六品",
     "count": "一人",
     "affiliation": "户部四川清吏司",
     "duty": ""
    },
    {
     "group": "户部",
     "office": "主事",
     "rank": "正六品",
     "count": "一人",
     "affiliation": "户部贵州清吏司",
     "duty": ""
    },
    {
     "group": "户部",
     "office": "照磨",
     "rank": "正八品",
     "count": "一人",
     "affiliation": "户部照磨所",
     "duty": ""
    },
    {
     "group": "户部",
     "office": "检校",
     "rank": "正九品",
     "count": "一人",
     "affiliation": "户部",
     "duty": ""
    },
    {
     "group": "户部",
     "office": "提举",
     "rank": "正八品",
     "count": "一人",
     "affiliation": "户部宝钞提举司",
     "duty": ""
    },
    {
     "group": "户部",
     "office": "大使",
     "rank": "正九品",
     "count": "一人",
     "affiliation": "户部钞纸局",
     "duty": ""
    },
    {
     "group": "户部",
     "office": "大使",
     "rank": "正九品",
     "count": "一人",
     "affiliation": "户部宝钞广惠库",
     "duty": ""
    },
    {
     "group": "户部",
     "office": "大使",
     "rank": "正九品",
     "count": "一人",
     "affiliation": "户部广积库",
     "duty": ""
    },
    {
     "group": "户部",
     "office": "大使",
     "rank": "正九品",
     "count": "一人",
     "affiliation": "户部脏罚库",
     "duty": ""
    },
    {
     "group": "户部",
     "office": "大使",
     "rank": "从九品",
     "count": "五人",
     "affiliation": "户部甲、乙、丙、丁、戊字库",
     "duty": ""
    },
    {
     "group": "户部",
     "office": "大使",
     "rank": "从九品",
     "count": "一人",
     "affiliation": "户部广盈库",
     "duty": ""
    },
    {
     "group": "户部",
     "office": "大使",
     "rank": "正九品",
     "count": "一人",
     "affiliation": "户部承运库",
     "duty": ""
    },
    {
     "group": "户部",
     "office": "大使",
     "rank": "未入流",
     "count": "一人",
     "affiliation": "户部太仓银库",
     "duty": ""
    },
    {
     "group": "户部",
     "office": "大使",
     "rank": "从九品",
     "count": "一人",
     "affiliation": "户部御马仓",
     "duty": ""
    },
    {
     "group": "户部",
     "office": "副使",
     "rank": "未入流",
     "count": "一人",
     "affiliation": "户部御马仓",
     "duty": ""
    },
    {
     "group": "户部",
     "office": "副使",
     "rank": "未入流",
     "count": "四人",
     "affiliation": "长安、东安、西安、北安门仓",
     "duty": ""
    },
    {
     "group": "礼部",
     "office": "礼部尚书",
     "rank": "正二品",
     "count": "一人",
     "affiliation": "礼部",
     "duty": "掌典礼事务与学校、科举之事"
    },
    {
     "group": "礼部",
     "office": "礼部左、右侍郎",
     "rank": "正三品",
     "count": "二人",
     "affiliation": "礼部",
     "duty": ""
    },
    {
     "group": "礼部",
     "office": "司务",
     "rank": "从九品",
     "count": "一人",
     "affiliation": "礼部司务厅",
     "duty": ""
    },
    {
     "group": "礼部",
     "office": "郎中",
     "rank": "正五品",
     "count": "一人",
     "affiliation": "礼部仪制清吏司",
     "duty": ""
    },
    {
     "group": "礼部",
     "office": "郎中",
     "rank": "正五品",
     "count": "一人",
     "affiliation": "礼部祠祭清吏司",
     "duty": ""
    },
    {
     "group": "礼部",
     "office": "郎中",
     "rank": "正五品",
     "count": "一人",
     "affiliation": "礼部主客清吏司",
     "duty": ""
    },
    {
     "group": "礼部",
     "office": "郎中",
     "rank": "正五品",
     "count": "一人",
     "affiliation": "礼部精膳清吏司",
     "duty": ""
    },
    {
     "group": "礼部",
     "office": "员外郎",
     "rank": "从五品",
     "count": "一人",
     "affiliation": "礼部",
     "duty": ""
    },
    {
     "group": "礼部",
     "office": "主事",
     "rank": "正六品",
     "count": "一人",
     "affiliation": "礼部精膳清吏司",
     "duty": ""
    },
    {
     "group": "礼部",
     "office": "主事",
     "rank": "正六品",
     "count": "二人",
     "affiliation": "礼部仪制清吏司",
     "duty": ""
    },
    {
     "group": "礼部",
     "office": "主事",
     "rank": "正六品",
     "count": "一人",
     "affiliation": "礼部祠祭清吏司",
     "duty": ""
    },
    {
     "group": "礼部",
     "office": "主事",
     "rank": "正六品",
     "count": "一人",
     "affiliation": "礼部主客清吏司",
     "duty": ""
    },
    {
     "group": "礼部",
     "office": "大使",
     "rank": "未入流",
     "count": "一人",
     "affiliation": "礼部铸印局",
     "duty": ""
    },
    {
     "group": "礼部",
     "office": "副使",
     "rank": "未入流",
     "count": "二人",
     "affiliation": "礼部铸印局",
     "duty": ""
    },
    {
     "group": "兵部",
     "office": "兵部尚书",
     "rank": "正二品",
     "count": "一人",
     "affiliation": "兵部",
     "duty": "职掌全国军卫、武官选授、简练之政令"
    },
    {
     "group": "兵部",
     "office": "兵部左、右侍郎",
     "rank": "正三品",
     "count": "二人",
     "affiliation": "兵部",
     "duty": ""
    },
    {
     "group": "兵部",
     "office": "司务",
     "rank": "从九品",
     "count": "一人",
     "affiliation": "兵部司务厅",
     "duty": ""
    },
    {
     "group": "兵部",
     "office": "郎中",
     "rank": "正五品",
     "count": "二人",
     "affiliation": "兵部武选清吏司",
     "duty": ""
    },
    {
     "group": "兵部",
     "office": "郎中",
     "rank": "正五品",
     "count": "二人",
     "affiliation": "兵部职方清吏司",
     "duty": ""
    },
    {
     "group": "兵部",
     "office": "郎中",
     "rank": "正五品",
     "count": "二人",
     "affiliation": "兵部车驾清吏司",
     "duty": ""
    },
    {
     "group": "兵部",
     "office": "郎中",
     "rank": "正五品",
     "count": "二人",
     "affiliation": "兵部武库清吏司(万历九年革)",
     "duty": ""
    },
    {
     "group": "兵部",
     "office": "员外郎",
     "rank": "从五品",
     "count": "二人",
     "affiliation": "兵部武选、武库清吏司",
     "duty": ""
    },
    {
     "group": "兵部",
     "office": "员外郎",
     "rank": "从五品",
     "count": "二人",
     "affiliation": "兵部职方、车架清吏司",
     "duty": ""
    },
    {
     "group": "兵部",
     "office": "主事",
     "rank": "正六品",
     "count": "二人",
     "affiliation": "兵部车驾清吏司",
     "duty": ""
    },
    {
     "group": "兵部",
     "office": "主事",
     "rank": "正六品",
     "count": "三人",
     "affiliation": "兵部武选清吏司",
     "duty": ""
    },
    {
     "group": "兵部",
     "office": "主事",
     "rank": "正六品",
     "count": "四人",
     "affiliation": "兵部武库清吏司",
     "duty": ""
    },
    {
     "group": "兵部",
     "office": "主事",
     "rank": "正六品",
     "count": "二人",
     "affiliation": "兵部职方清吏司",
     "duty": ""
    },
    {
     "group": "兵部",
     "office": "大使",
     "rank": "正九品",
     "count": "一人",
     "affiliation": "兵部会同馆",
     "duty": ""
    },
    {
     "group": "兵部",
     "office": "副使",
     "rank": "从九品",
     "count": "二人",
     "affiliation": "兵部会同馆",
     "duty": ""
    },
    {
     "group": "兵部",
     "office": "大使",
     "rank": "未入流",
     "count": "一人",
     "affiliation": "兵部大通关",
     "duty": ""
    },
    {
     "group": "兵部",
     "office": "副使",
     "rank": "未入流",
     "count": "一人",
     "affiliation": "兵部大通关",
     "duty": ""
    },
    {
     "group": "刑部",
     "office": "刑部尚书",
     "rank": "正二品",
     "count": "一人",
     "affiliation": "刑部",
     "duty": "主管全国刑罚政令及审核刑名的机构，\n与督察院管稽察、大理寺掌重大案件的最后审理和复核\n（湖广、陕西、山东、福建四司主事，\n万历中期革）"
    },
    {
     "group": "刑部",
     "office": "刑部左、右侍郎",
     "rank": "正三品",
     "count": "二人",
     "affiliation": "刑部",
     "duty": ""
    },
    {
     "group": "刑部",
     "office": "司务",
     "rank": "从九品",
     "count": "一人",
     "affiliation": "刑部司务厅",
     "duty": ""
    },
    {
     "group": "刑部",
     "office": "郎中",
     "rank": "正五品",
     "count": "一人",
     "affiliation": "刑部浙江清吏司",
     "duty": ""
    },
    {
     "group": "刑部",
     "office": "郎中",
     "rank": "正五品",
     "count": "一人",
     "affiliation": "刑部江西清吏司",
     "duty": ""
    },
    {
     "group": "刑部",
     "office": "郎中",
     "rank": "正五品",
     "count": "一人",
     "affiliation": "刑部湖广清吏司",
     "duty": ""
    },
    {
     "group": "刑部",
     "office": "郎中",
     "rank": "正五品",
     "count": "一人",
     "affiliation": "刑部陕西清吏司",
     "duty": ""
    },
    {
     "group": "刑部",
     "office": "郎中",
     "rank": "正五品",
     "count": "一人",
     "affiliation": "刑部广东清吏司",
     "duty": ""
    },
    {
     "group": "刑部",
     "office": "郎中",
     "rank": "正五品",
     "count": "一人",
     "affiliation": "刑部山东清吏司",
     "duty": ""
    },
    {
     "group": "刑部",
     "office": "郎中",
     "rank": "正五品",
     "count": "一人",
     "affiliation": "刑部福建清吏司",
     "duty": ""
    },
    {
     "group": "刑部",
     "office": "郎中",
     "rank": "正五品",
     "count": "一人",
     "affiliation": "刑部河南清吏司",
     "duty": ""
    },
    {
     "group": "刑部",
     "office": "郎中",
     "rank": "正五品",
     "count": "一人",
     "affiliation": "刑部山西清吏司",
     "duty": ""
    },
    {
     "group": "刑部",
     "office": "郎中",
     "rank": "正五品",
     "count": "一人",
     "affiliation": "刑部四川清吏司",
     "duty": ""
    },
    {
     "group": "刑部",
     "office": "郎中",
     "rank": "正五品",
     "count": "一人",
     "affiliation": "刑部广西清吏司",
     "duty": ""
    },
    {
     "group": "刑部",
     "office": "郎中",
     "rank": "正五品",
     "count": "一人",
     "affiliation": "刑部贵州清吏司",
     "duty": ""
    },
    {
     "group": "刑部",
     "office": "郎中",
     "rank": "正五品",
     "count": "一人",
     "affiliation": "刑部云南清吏司",
     "duty": ""
    },
    {
     "group": "刑部",
     "office": "员外郎",
     "rank": "从五品",
     "count": "一人",
     "affiliation": "刑部",
     "duty": ""
    },
    {
     "group": "刑部",
     "office": "主事",
     "rank": "正六品",
     "count": "二人",
     "affiliation": "刑部福建清吏司(后革)",
     "duty": ""
    },
    {
     "group": "刑部",
     "office": "主事",
     "rank": "正六品",
     "count": "一人",
     "affiliation": "刑部浙江清吏司",
     "duty": ""
    },
    {
     "group": "刑部",
     "office": "主事",
     "rank": "正六品",
     "count": "一人",
     "affiliation": "刑部江西清吏司",
     "duty": ""
    },
    {
     "group": "刑部",
     "office": "主事",
     "rank": "正六品",
     "count": "一人",
     "affiliation": "刑部广东清吏司",
     "duty": ""
    },
    {
     "group": "刑部",
     "office": "主事",
     "rank": "正六品",
     "count": "一人",
     "affiliation": "刑部河南清吏司",
     "duty": ""
    },
    {
     "group": "刑部",
     "office": "主事",
     "rank": "正六品",
     "count": "一人",
     "affiliation": "刑部山西清吏司",
     "duty": ""
    },
    {
     "group": "刑部",
     "office": "主事",
     "rank": "正六品",
     "count": "二人",
     "affiliation": "刑部四川清吏司",
     "duty": ""
    },
    {
     "group": "刑部",
     "office": "主事",
     "rank": "正六品",
     "count": "二人",
     "affiliation": "刑部广西清吏司",
     "duty": ""
    },
    {
     "group": "刑部",
     "office": "主事",
     "rank": "正六品",
     "count": "一人",
     "affiliation": "刑部贵州清吏司",
     "duty": ""
    },
    {
     "group": "刑部",
     "office": "主事",
     "rank": "正六品",
     "count": "一人",
     "affiliation": "刑部云南清吏司",
     "duty": ""
    },
    {
     "group": "刑部",
     "office": "照磨",
     "rank": "正八品",
     "count": "一人",
     "affiliation": "刑部照磨所",
     "duty": ""
    },
    {
     "group": "刑部",
     "office": "检校",
     "rank": "正九品",
     "count": "一人",
     "affiliation": "刑部",
     "duty": ""
    },
    {
     "group": "刑部",
     "office": "司狱",
     "rank": "从九品",
     "count": "六人",
     "affiliation": "刑部司狱司",
     "duty": ""
    },
    {
     "group": "工部",
     "office": "工部尚书",
     "rank": "正二品",
     "count": "一人",
     "affiliation": "工部",
     "duty": "职掌土木兴建之制，器物利用之式，\n渠堰疏降之法，陵寝供亿之典\n（嘉靖八年设工部节慎库大使一人）\n（工部大通关提举司，\n提举与副提举万历二年革）"
    },
    {
     "group": "工部",
     "office": "工部左、右侍郎",
     "rank": "正三品",
     "count": "二人",
     "affiliation": "工部",
     "duty": ""
    },
    {
     "group": "工部",
     "office": "司务",
     "rank": "从九品",
     "count": "一人",
     "affiliation": "工部司务厅",
     "duty": ""
    },
    {
     "group": "工部",
     "office": "郎中",
     "rank": "正五品",
     "count": "一人",
     "affiliation": "工部营缮清吏司",
     "duty": ""
    },
    {
     "group": "工部",
     "office": "郎中",
     "rank": "正五品",
     "count": "一人",
     "affiliation": "工部虞衡清吏司",
     "duty": ""
    },
    {
     "group": "工部",
     "office": "郎中",
     "rank": "正五品",
     "count": "五人",
     "affiliation": "工部都水清吏司",
     "duty": ""
    },
    {
     "group": "工部",
     "office": "郎中",
     "rank": "正五品",
     "count": "一人",
     "affiliation": "工部屯田清吏司",
     "duty": ""
    },
    {
     "group": "工部",
     "office": "员外郎",
     "rank": "从五品",
     "count": "二人",
     "affiliation": "工部都水清吏司、工部屯田清吏司",
     "duty": ""
    },
    {
     "group": "工部",
     "office": "员外郎",
     "rank": "从五品",
     "count": "三人",
     "affiliation": "工部营缮清吏司",
     "duty": ""
    },
    {
     "group": "工部",
     "office": "员外郎",
     "rank": "从五品",
     "count": "二人",
     "affiliation": "工部虞衡清吏司",
     "duty": ""
    },
    {
     "group": "工部",
     "office": "主事",
     "rank": "正六品",
     "count": "二人",
     "affiliation": "工部",
     "duty": ""
    },
    {
     "group": "工部",
     "office": "主事",
     "rank": "正六品",
     "count": "五人",
     "affiliation": "工部都水清吏司",
     "duty": ""
    },
    {
     "group": "工部",
     "office": "主事",
     "rank": "正六品",
     "count": "三人",
     "affiliation": "工部营缮清吏司",
     "duty": ""
    },
    {
     "group": "工部",
     "office": "主事",
     "rank": "正六品",
     "count": "二人",
     "affiliation": "工部虞衡清吏司",
     "duty": ""
    },
    {
     "group": "工部",
     "office": "主事",
     "rank": "正六品",
     "count": "一人",
     "affiliation": "工部屯田清吏司",
     "duty": ""
    },
    {
     "group": "工部",
     "office": "所正",
     "rank": "正七品",
     "count": "一人",
     "affiliation": "工部营缮所",
     "duty": ""
    },
    {
     "group": "工部",
     "office": "所副",
     "rank": "正八品",
     "count": "二人",
     "affiliation": "工部营缮所",
     "duty": ""
    },
    {
     "group": "工部",
     "office": "所丞",
     "rank": "正九品",
     "count": "二人",
     "affiliation": "工部营缮所",
     "duty": ""
    },
    {
     "group": "工部",
     "office": "大使",
     "rank": "正九品",
     "count": "一人",
     "affiliation": "工部文思院",
     "duty": ""
    },
    {
     "group": "工部",
     "office": "副使",
     "rank": "从九品",
     "count": "二人",
     "affiliation": "工部文思院",
     "duty": ""
    },
    {
     "group": "工部",
     "office": "大使",
     "rank": "正九品",
     "count": "二人",
     "affiliation": "工部皮作局",
     "duty": ""
    },
    {
     "group": "工部",
     "office": "大使",
     "rank": "正九品",
     "count": "一人",
     "affiliation": "工部宝源局",
     "duty": ""
    },
    {
     "group": "工部",
     "office": "大使",
     "rank": "正九品",
     "count": "一人",
     "affiliation": "工部军器局",
     "duty": ""
    },
    {
     "group": "工部",
     "office": "大使",
     "rank": "正九品",
     "count": "一人",
     "affiliation": "工部织染所",
     "duty": ""
    },
    {
     "group": "工部",
     "office": "副使",
     "rank": "从九品",
     "count": "一人",
     "affiliation": "工部织染所",
     "duty": ""
    },
    {
     "group": "工部",
     "office": "大使",
     "rank": "正九品",
     "count": "一人",
     "affiliation": "工部杂造局",
     "duty": ""
    },
    {
     "group": "工部",
     "office": "副使",
     "rank": "从九品",
     "count": "一人",
     "affiliation": "工部杂造局",
     "duty": ""
    },
    {
     "group": "工部",
     "office": "大使",
     "rank": "从九品",
     "count": "一人",
     "affiliation": "工部柴炭司",
     "duty": ""
    },
    {
     "group": "工部",
     "office": "副使",
     "rank": "未入流",
     "count": "一人",
     "affiliation": "工部柴炭司",
     "duty": ""
    },
    {
     "group": "大理寺",
     "office": "大理寺卿",
     "rank": "正三品",
     "count": "一人",
     "affiliation": "大理寺",
     "duty": "掌刑狱案件审理，\n是中央最高司法复核机关，与刑部、都察院合称\"三法司\"，位列\"大九卿\"之一。\n其核心定位是复核驳正——刑部审理完成案子必须经大理寺复核盖章，未经大理寺评允，诸司不得定案发遣"
    },
    {
     "group": "大理寺",
     "office": "大理寺左、右少卿",
     "rank": "正四品",
     "count": "二人",
     "affiliation": "大理寺",
     "duty": ""
    },
    {
     "group": "大理寺",
     "office": "左、右寺丞",
     "rank": "正五品",
     "count": "二人",
     "affiliation": "大理寺",
     "duty": ""
    },
    {
     "group": "大理寺",
     "office": "司务",
     "rank": "从九品",
     "count": "二人",
     "affiliation": "大理寺司务厅",
     "duty": ""
    },
    {
     "group": "大理寺",
     "office": "左、右寺正",
     "rank": "正六品",
     "count": "二人",
     "affiliation": "大理寺左、右寺",
     "duty": ""
    },
    {
     "group": "大理寺",
     "office": "左、寺寺副",
     "rank": "从六品",
     "count": "二人",
     "affiliation": "大理寺左、右寺",
     "duty": ""
    },
    {
     "group": "大理寺",
     "office": "评事",
     "rank": "正七品",
     "count": "四人",
     "affiliation": "大理寺",
     "duty": ""
    },
    {
     "group": "太常寺",
     "office": "太常寺卿",
     "rank": "正三品",
     "count": "一人",
     "affiliation": "太常寺",
     "duty": "掌宗庙礼仪，\n是掌管国家祭祀礼乐的执行机构，隶属礼部，与大理寺、光禄寺、太仆寺、鸿胪寺并称\"五寺\"。凡祭天、祭地、祭祖、祭社稷等一切国家级祀典的礼仪流程、乐舞编排、祭器陈设，均由太常寺统筹操办"
    },
    {
     "group": "太常寺",
     "office": "太常寺少卿",
     "rank": "正四品",
     "count": "二人",
     "affiliation": "太常寺",
     "duty": ""
    },
    {
     "group": "太常寺",
     "office": "寺丞",
     "rank": "正六品",
     "count": "二人",
     "affiliation": "太常寺",
     "duty": ""
    },
    {
     "group": "太常寺",
     "office": "典簿",
     "rank": "正七品",
     "count": "二人",
     "affiliation": "太常寺典簿厅",
     "duty": ""
    },
    {
     "group": "太常寺",
     "office": "博士",
     "rank": "正八品",
     "count": "二人",
     "affiliation": "太常寺",
     "duty": ""
    },
    {
     "group": "太常寺",
     "office": "协律郎",
     "rank": "正八品",
     "count": "五人",
     "affiliation": "太常寺",
     "duty": ""
    },
    {
     "group": "太常寺",
     "office": "赞礼郎",
     "rank": "正九品",
     "count": "三十一人",
     "affiliation": "太常寺",
     "duty": ""
    },
    {
     "group": "太常寺",
     "office": "司乐",
     "rank": "从九品",
     "count": "三十四人",
     "affiliation": "太常寺",
     "duty": ""
    },
    {
     "group": "太常寺",
     "office": "奉祀",
     "rank": "从七品",
     "count": "一人",
     "affiliation": "天坛、地坛、朝日坛、夕月坛、先农坛、\n帝王庙、祈谷殿、长陵、献陵、景陵、\n裕陵、茂陵、泰陵、显陵、康陵、\n永陵、昭陵各祠祭署，俱一人",
     "duty": ""
    },
    {
     "group": "太常寺",
     "office": "祀丞",
     "rank": "从八品",
     "count": "二人",
     "affiliation": "天坛、地坛、朝日坛、夕月坛、先农坛、\n帝王庙、祈谷殿、长陵、献陵、景陵、\n裕陵、茂陵、泰陵、显陵、康陵、\n永陵、昭陵各祠祭署，俱一人",
     "duty": ""
    },
    {
     "group": "太常寺",
     "office": "吏目",
     "rank": "从九品",
     "count": "一人",
     "affiliation": "太常寺牺牲馆",
     "duty": ""
    },
    {
     "group": "太常寺",
     "office": "少卿",
     "rank": "正四品",
     "count": "一人",
     "affiliation": "提督四夷馆",
     "duty": ""
    },
    {
     "group": "光禄寺",
     "office": "光禄寺卿",
     "rank": "从三品",
     "count": "一人",
     "affiliation": "光禄寺",
     "duty": "掌膳食帐幕，\n是掌管宫廷祭享、宴劳、酒醴、膳馐的中央机构\n属\"小九卿\"之一。从皇帝一日三餐到国家大典宴席，从祭祀供品到外国使臣招待，\n均由光禄寺统筹操办"
    },
    {
     "group": "光禄寺",
     "office": "光禄寺少卿",
     "rank": "正五品",
     "count": "二人",
     "affiliation": "光禄寺",
     "duty": ""
    },
    {
     "group": "光禄寺",
     "office": "寺丞",
     "rank": "从六品",
     "count": "二人",
     "affiliation": "光禄寺",
     "duty": ""
    },
    {
     "group": "光禄寺",
     "office": "典簿",
     "rank": "从七品",
     "count": "二人",
     "affiliation": "光禄寺典簿厅",
     "duty": ""
    },
    {
     "group": "光禄寺",
     "office": "录事",
     "rank": "从八品",
     "count": "四人",
     "affiliation": "大官、珍羞、良酝、掌醢四署，各一人",
     "duty": ""
    },
    {
     "group": "光禄寺",
     "office": "署正",
     "rank": "从六品",
     "count": "四人",
     "affiliation": "大官、珍羞、良酝、掌醢四署，各一人",
     "duty": ""
    },
    {
     "group": "光禄寺",
     "office": "署丞",
     "rank": "从七品",
     "count": "四人",
     "affiliation": "大官、珍羞、良酝、掌醢四署，各一人",
     "duty": ""
    },
    {
     "group": "光禄寺",
     "office": "监事",
     "rank": "从八品",
     "count": "四人",
     "affiliation": "大官、珍羞、良酝、掌醢四署，各一人",
     "duty": ""
    },
    {
     "group": "光禄寺",
     "office": "大使",
     "rank": "从九品",
     "count": "一人",
     "affiliation": "光禄寺司牲司",
     "duty": ""
    },
    {
     "group": "光禄寺",
     "office": "大使",
     "rank": "未入流",
     "count": "一人",
     "affiliation": "光禄寺银库",
     "duty": ""
    },
    {
     "group": "太仆寺",
     "office": "太仆寺卿",
     "rank": "从三品",
     "count": "一人",
     "affiliation": "太仆寺",
     "duty": "掌牧马之政令\n（太仆寺牧监，监正、监副、录事共三人，\n太仆寺群群长一人，后并革）"
    },
    {
     "group": "太仆寺",
     "office": "太仆寺少卿",
     "rank": "正四品",
     "count": "三人",
     "affiliation": "太仆寺",
     "duty": ""
    },
    {
     "group": "太仆寺",
     "office": "寺丞",
     "rank": "正六品",
     "count": "四人",
     "affiliation": "太仆寺",
     "duty": ""
    },
    {
     "group": "太仆寺",
     "office": "主簿",
     "rank": "从七品",
     "count": "一人",
     "affiliation": "太仆寺主簿厅",
     "duty": ""
    },
    {
     "group": "太仆寺",
     "office": "大使",
     "rank": "未入流",
     "count": "一人",
     "affiliation": "太仆寺常盈库",
     "duty": ""
    },
    {
     "group": "鸿胪寺",
     "office": "鸿胪寺卿",
     "rank": "正四品",
     "count": "一人",
     "affiliation": "鸿胪寺",
     "duty": "掌朝会仪节，宾客接待及吉凶礼仪，\n位列\"小九卿\"之一，正四品衙门\n（尚宝司与鸿胪寺非上下级关系）"
    },
    {
     "group": "鸿胪寺",
     "office": "鸿胪寺左、右少卿",
     "rank": "从五品",
     "count": "二人",
     "affiliation": "鸿胪寺",
     "duty": ""
    },
    {
     "group": "鸿胪寺",
     "office": "左、右寺丞",
     "rank": "从六品",
     "count": "二人",
     "affiliation": "鸿胪寺",
     "duty": ""
    },
    {
     "group": "鸿胪寺",
     "office": "主簿",
     "rank": "从八品",
     "count": "一人",
     "affiliation": "鸿胪寺主簿厅",
     "duty": ""
    },
    {
     "group": "鸿胪寺",
     "office": "署丞",
     "rank": "正九品",
     "count": "一人",
     "affiliation": "鸿胪寺司仪署",
     "duty": ""
    },
    {
     "group": "鸿胪寺",
     "office": "署丞",
     "rank": "正九品",
     "count": "一人",
     "affiliation": "鸿胪寺司宾署",
     "duty": ""
    },
    {
     "group": "鸿胪寺",
     "office": "鸣赞",
     "rank": "从九品",
     "count": "九人",
     "affiliation": "鸿胪寺",
     "duty": ""
    },
    {
     "group": "鸿胪寺",
     "office": "序班",
     "rank": "从九品",
     "count": "四十八人",
     "affiliation": "鸿胪寺",
     "duty": ""
    },
    {
     "group": "鸿胪寺",
     "office": "卿",
     "rank": "正五品",
     "count": "一人",
     "affiliation": "尚宝司",
     "duty": ""
    },
    {
     "group": "鸿胪寺",
     "office": "少卿",
     "rank": "从五品",
     "count": "一人",
     "affiliation": "尚宝司",
     "duty": ""
    },
    {
     "group": "鸿胪寺",
     "office": "司丞",
     "rank": "正六品",
     "count": "三人",
     "affiliation": "尚宝司",
     "duty": ""
    },
    {
     "group": "都察院",
     "office": "左、右都御史",
     "rank": "正二品",
     "count": "无定员",
     "affiliation": "都察院",
     "duty": "主掌监察、弹劾及建议，即言官"
    },
    {
     "group": "都察院",
     "office": "左、右副都御史",
     "rank": "正三品",
     "count": "无定员",
     "affiliation": "都察院",
     "duty": ""
    },
    {
     "group": "都察院",
     "office": "左、右佥都御史",
     "rank": "正四品",
     "count": "无定员",
     "affiliation": "都察院",
     "duty": ""
    },
    {
     "group": "都察院",
     "office": "经历",
     "rank": "正六品",
     "count": "一人",
     "affiliation": "都察院经历司",
     "duty": ""
    },
    {
     "group": "都察院",
     "office": "都事",
     "rank": "正七品",
     "count": "一人",
     "affiliation": "都察院",
     "duty": ""
    },
    {
     "group": "都察院",
     "office": "司务",
     "rank": "从九品",
     "count": "二人",
     "affiliation": "都察院司务厅",
     "duty": ""
    },
    {
     "group": "都察院",
     "office": "照磨",
     "rank": "正八品",
     "count": "一人",
     "affiliation": "都察院照磨所",
     "duty": ""
    },
    {
     "group": "都察院",
     "office": "检校",
     "rank": "正九品",
     "count": "一人",
     "affiliation": "都察院",
     "duty": ""
    },
    {
     "group": "都察院",
     "office": "司狱",
     "rank": "从九品",
     "count": "一人",
     "affiliation": "都察院司狱",
     "duty": ""
    },
    {
     "group": "都察院",
     "office": "监察御史",
     "rank": "正七品",
     "count": "一百十人",
     "affiliation": "都察院",
     "duty": ""
    },
    {
     "group": "通政司",
     "office": "通政使",
     "rank": "正三品",
     "count": "一人",
     "affiliation": "通政司",
     "duty": "掌内外章奏和臣民密封申诉之件"
    },
    {
     "group": "通政司",
     "office": "左、右通政",
     "rank": "正四品",
     "count": "二人",
     "affiliation": "通政司",
     "duty": ""
    },
    {
     "group": "通政司",
     "office": "誊黄右通政",
     "rank": "正四品",
     "count": "一人",
     "affiliation": "通政司",
     "duty": ""
    },
    {
     "group": "通政司",
     "office": "左右参议",
     "rank": "正五品",
     "count": "二人",
     "affiliation": "通政司",
     "duty": ""
    },
    {
     "group": "通政司",
     "office": "经历",
     "rank": "正七品",
     "count": "一人",
     "affiliation": "通政司经历司",
     "duty": ""
    },
    {
     "group": "通政司",
     "office": "知事",
     "rank": "正八品",
     "count": "一人",
     "affiliation": "通政司",
     "duty": ""
    },
    {
     "group": "翰林院",
     "office": "学士",
     "rank": "正五品",
     "count": "一人",
     "affiliation": "翰林院",
     "duty": "负责修书撰史，起草诏书，为皇室成员侍读，\n担任科举考官等"
    },
    {
     "group": "翰林院",
     "office": "侍读学士",
     "rank": "从五品",
     "count": "二人",
     "affiliation": "翰林院",
     "duty": ""
    },
    {
     "group": "翰林院",
     "office": "侍讲学士",
     "rank": "从五品",
     "count": "二人",
     "affiliation": "翰林院",
     "duty": ""
    },
    {
     "group": "翰林院",
     "office": "侍读",
     "rank": "正六品",
     "count": "二人",
     "affiliation": "翰林院",
     "duty": ""
    },
    {
     "group": "翰林院",
     "office": "侍讲",
     "rank": "正六品",
     "count": "二人",
     "affiliation": "翰林院",
     "duty": ""
    },
    {
     "group": "翰林院",
     "office": "五经博士",
     "rank": "正八品",
     "count": "九人",
     "affiliation": "翰林院",
     "duty": ""
    },
    {
     "group": "翰林院",
     "office": "典籍",
     "rank": "从八品",
     "count": "二人",
     "affiliation": "翰林院",
     "duty": ""
    },
    {
     "group": "翰林院",
     "office": "侍书",
     "rank": "正九品",
     "count": "二人",
     "affiliation": "翰林院",
     "duty": ""
    },
    {
     "group": "翰林院",
     "office": "待诏",
     "rank": "从九品",
     "count": "六人",
     "affiliation": "翰林院",
     "duty": ""
    },
    {
     "group": "翰林院",
     "office": "孔目",
     "rank": "未入流",
     "count": "一人",
     "affiliation": "翰林院",
     "duty": ""
    },
    {
     "group": "翰林院",
     "office": "史馆修撰",
     "rank": "从六品",
     "count": "无定员",
     "affiliation": "翰林院",
     "duty": ""
    },
    {
     "group": "翰林院",
     "office": "编修",
     "rank": "正七品",
     "count": "无定员",
     "affiliation": "翰林院",
     "duty": ""
    },
    {
     "group": "翰林院",
     "office": "检讨",
     "rank": "从七品",
     "count": "无定员",
     "affiliation": "翰林院",
     "duty": ""
    },
    {
     "group": "翰林院",
     "office": "庶吉士",
     "rank": "未入流",
     "count": "无定员",
     "affiliation": "翰林院",
     "duty": ""
    },
    {
     "group": "六科",
     "office": "吏科都给事中",
     "rank": "正七品",
     "count": "一人",
     "affiliation": "吏科",
     "duty": "掌侍从、规谏﹑补阙﹑拾遗﹐分察\n吏﹑户﹑礼﹑兵﹑刑﹑工六部之事，纠其弊误"
    },
    {
     "group": "六科",
     "office": "户科都给事中",
     "rank": "正七品",
     "count": "一人",
     "affiliation": "户科",
     "duty": ""
    },
    {
     "group": "六科",
     "office": "礼科都给事中",
     "rank": "正七品",
     "count": "一人",
     "affiliation": "礼科",
     "duty": ""
    },
    {
     "group": "六科",
     "office": "兵科都给事中",
     "rank": "正七品",
     "count": "一人",
     "affiliation": "兵科",
     "duty": ""
    },
    {
     "group": "六科",
     "office": "刑科都给事中",
     "rank": "正七品",
     "count": "一人",
     "affiliation": "刑科",
     "duty": ""
    },
    {
     "group": "六科",
     "office": "工科都给事中",
     "rank": "正七品",
     "count": "一人",
     "affiliation": "工科",
     "duty": ""
    },
    {
     "group": "六科",
     "office": "吏科左、右给事中",
     "rank": "从七品",
     "count": "二人",
     "affiliation": "吏科",
     "duty": ""
    },
    {
     "group": "六科",
     "office": "户科左、右给事中",
     "rank": "从七品",
     "count": "二人",
     "affiliation": "户科",
     "duty": ""
    },
    {
     "group": "六科",
     "office": "礼科左、右给事中",
     "rank": "从七品",
     "count": "二人",
     "affiliation": "礼科",
     "duty": ""
    },
    {
     "group": "六科",
     "office": "兵科左、右给事中",
     "rank": "从七品",
     "count": "二人",
     "affiliation": "兵科",
     "duty": ""
    },
    {
     "group": "六科",
     "office": "刑科左、右给事中",
     "rank": "从七品",
     "count": "二人",
     "affiliation": "刑科",
     "duty": ""
    },
    {
     "group": "六科",
     "office": "工科左、右给事中",
     "rank": "从七品",
     "count": "二人",
     "affiliation": "工科",
     "duty": ""
    },
    {
     "group": "六科",
     "office": "给事中",
     "rank": "从七品",
     "count": "四人",
     "affiliation": "吏科",
     "duty": ""
    },
    {
     "group": "六科",
     "office": "给事中",
     "rank": "从七品",
     "count": "六人",
     "affiliation": "礼科",
     "duty": ""
    },
    {
     "group": "六科",
     "office": "给事中",
     "rank": "从七品",
     "count": "八人",
     "affiliation": "户科",
     "duty": ""
    },
    {
     "group": "六科",
     "office": "给事中",
     "rank": "从七品",
     "count": "十人",
     "affiliation": "兵科",
     "duty": ""
    },
    {
     "group": "六科",
     "office": "给事中",
     "rank": "从七品",
     "count": "八人",
     "affiliation": "刑科",
     "duty": ""
    },
    {
     "group": "六科",
     "office": "给事中",
     "rank": "从七品",
     "count": "四人",
     "affiliation": "工科",
     "duty": ""
    },
    {
     "group": "中书科",
     "office": "中书舍人",
     "rank": "从七品",
     "count": "二十人",
     "affiliation": "中书科",
     "duty": "掌书写诰敕"
    },
    {
     "group": "行人司",
     "office": "司正",
     "rank": "正七品",
     "count": "一人",
     "affiliation": "行人司",
     "duty": "掌传旨、册封等事"
    },
    {
     "group": "行人司",
     "office": "左、右司副",
     "rank": "从七品",
     "count": "二人",
     "affiliation": "行人司",
     "duty": ""
    },
    {
     "group": "行人司",
     "office": "行人",
     "rank": "正八品",
     "count": "三十七人",
     "affiliation": "行人司",
     "duty": ""
    },
    {
     "group": "国子监",
     "office": "祭酒",
     "rank": "从四品",
     "count": "一人",
     "affiliation": "国子监",
     "duty": "中央官学，教育体系中的最高学府"
    },
    {
     "group": "国子监",
     "office": "司业",
     "rank": "正六品",
     "count": "一人",
     "affiliation": "国子监",
     "duty": ""
    },
    {
     "group": "国子监",
     "office": "监丞",
     "rank": "正八品",
     "count": "一人",
     "affiliation": "国子监绳愆厅",
     "duty": ""
    },
    {
     "group": "国子监",
     "office": "五经博士",
     "rank": "从八品",
     "count": "五人",
     "affiliation": "国子监博士厅",
     "duty": ""
    },
    {
     "group": "国子监",
     "office": "助教",
     "rank": "从八品",
     "count": "十五人",
     "affiliation": "率性、修道、诚心、正义、崇志、广业六堂",
     "duty": ""
    },
    {
     "group": "国子监",
     "office": "学正",
     "rank": "正九品",
     "count": "十人",
     "affiliation": "国子监",
     "duty": ""
    },
    {
     "group": "国子监",
     "office": "学录",
     "rank": "从九品",
     "count": "七人",
     "affiliation": "国子监",
     "duty": ""
    },
    {
     "group": "国子监",
     "office": "典簿",
     "rank": "从八品",
     "count": "一人",
     "affiliation": "国子监典簿厅",
     "duty": ""
    },
    {
     "group": "国子监",
     "office": "典籍",
     "rank": "从九品",
     "count": "一人",
     "affiliation": "国子监典籍厅",
     "duty": ""
    },
    {
     "group": "国子监",
     "office": "掌馔",
     "rank": "未入流",
     "count": "二人",
     "affiliation": "国子监掌馔厅",
     "duty": ""
    },
    {
     "group": "国子监",
     "office": "衍圣公",
     "rank": "正二品",
     "count": "一人",
     "affiliation": "孔氏世袭",
     "duty": ""
    },
    {
     "group": "国子监",
     "office": "教授",
     "rank": "从九品",
     "count": "/",
     "affiliation": "教授司：孔、颜、曾、孟四氏",
     "duty": ""
    },
    {
     "group": "钦天监",
     "office": "监正",
     "rank": "正五品",
     "count": "一人",
     "affiliation": "钦天监",
     "duty": "承担观察天象、颁布历法"
    },
    {
     "group": "钦天监",
     "office": "监副",
     "rank": "正六品",
     "count": "二人",
     "affiliation": "钦天监主簿厅",
     "duty": ""
    },
    {
     "group": "钦天监",
     "office": "主簿",
     "rank": "正八品",
     "count": "一人",
     "affiliation": "钦天监主簿厅春夏中秋冬",
     "duty": ""
    },
    {
     "group": "钦天监",
     "office": "官正",
     "rank": "正六品",
     "count": "五人",
     "affiliation": "春夏秋冬中官正各一人",
     "duty": ""
    },
    {
     "group": "钦天监",
     "office": "五官灵台郎",
     "rank": "从七品",
     "count": "四人",
     "affiliation": "钦天监",
     "duty": ""
    },
    {
     "group": "钦天监",
     "office": "五官保章正",
     "rank": "正八品",
     "count": "一人",
     "affiliation": "钦天监",
     "duty": ""
    },
    {
     "group": "钦天监",
     "office": "五官挈壶正",
     "rank": "从八品",
     "count": "一人",
     "affiliation": "钦天监",
     "duty": ""
    },
    {
     "group": "钦天监",
     "office": "五官监侯",
     "rank": "正九品",
     "count": "二人",
     "affiliation": "钦天监",
     "duty": ""
    },
    {
     "group": "钦天监",
     "office": "五官司历",
     "rank": "正九品",
     "count": "二人",
     "affiliation": "钦天监",
     "duty": ""
    },
    {
     "group": "钦天监",
     "office": "五官司晨",
     "rank": "从九品",
     "count": "二人",
     "affiliation": "钦天监",
     "duty": ""
    },
    {
     "group": "钦天监",
     "office": "漏刻博士",
     "rank": "从九品",
     "count": "一人",
     "affiliation": "钦天监",
     "duty": ""
    },
    {
     "group": "上林苑监",
     "office": "左、右监正",
     "rank": "正五品",
     "count": "二人",
     "affiliation": "上林苑监",
     "duty": "掌管皇帝的御花园、畜牧场与菜圃"
    },
    {
     "group": "上林苑监",
     "office": "左、右监副",
     "rank": "正六品",
     "count": "二人",
     "affiliation": "上林苑监",
     "duty": ""
    },
    {
     "group": "上林苑监",
     "office": "左、右监丞",
     "rank": "正七品",
     "count": "二人",
     "affiliation": "上林苑监",
     "duty": ""
    },
    {
     "group": "上林苑监",
     "office": "典簿",
     "rank": "正九品",
     "count": "一人",
     "affiliation": "上林苑监",
     "duty": ""
    },
    {
     "group": "上林苑监",
     "office": "典署",
     "rank": "正七品",
     "count": "四人",
     "affiliation": "良牧、蕃育、林衡、嘉蔬四署各一人",
     "duty": ""
    },
    {
     "group": "上林苑监",
     "office": "署丞",
     "rank": "正八品",
     "count": "四人",
     "affiliation": "良牧、蕃育、林衡、嘉蔬四署各一人",
     "duty": ""
    },
    {
     "group": "上林苑监",
     "office": "录事",
     "rank": "正九品",
     "count": "四人",
     "affiliation": "良牧、蕃育、林衡、嘉蔬四署各一人",
     "duty": ""
    },
    {
     "group": "顺天府",
     "office": "府尹",
     "rank": "正三品",
     "count": "一人",
     "affiliation": "顺天府",
     "duty": "京师行政事务"
    },
    {
     "group": "顺天府",
     "office": "府丞",
     "rank": "正四品",
     "count": "一人",
     "affiliation": "顺天府",
     "duty": ""
    },
    {
     "group": "顺天府",
     "office": "治中",
     "rank": "正五品",
     "count": "一人",
     "affiliation": "顺天府",
     "duty": ""
    },
    {
     "group": "顺天府",
     "office": "通判",
     "rank": "正六品",
     "count": "三人",
     "affiliation": "顺天府",
     "duty": ""
    },
    {
     "group": "顺天府",
     "office": "推官",
     "rank": "从六品",
     "count": "一人",
     "affiliation": "顺天府",
     "duty": ""
    },
    {
     "group": "顺天府",
     "office": "儒学教授",
     "rank": "从九品",
     "count": "一人",
     "affiliation": "顺天府",
     "duty": ""
    },
    {
     "group": "顺天府",
     "office": "训导",
     "rank": "未入流",
     "count": "一人",
     "affiliation": "顺天府",
     "duty": ""
    },
    {
     "group": "顺天府",
     "office": "经历",
     "rank": "从七品",
     "count": "一人",
     "affiliation": "顺天府经历司",
     "duty": ""
    },
    {
     "group": "顺天府",
     "office": "知事",
     "rank": "从八品",
     "count": "一人",
     "affiliation": "顺天府",
     "duty": ""
    },
    {
     "group": "顺天府",
     "office": "照磨",
     "rank": "从九品",
     "count": "一人",
     "affiliation": "顺天府照磨所",
     "duty": ""
    },
    {
     "group": "顺天府",
     "office": "检校",
     "rank": "未入流",
     "count": "一人",
     "affiliation": "顺天府",
     "duty": ""
    },
    {
     "group": "武学",
     "office": "教授",
     "rank": "从九品",
     "count": "一人",
     "affiliation": "京卫武学",
     "duty": "军事学校"
    },
    {
     "group": "武学",
     "office": "训导",
     "rank": "未入流",
     "count": "一人",
     "affiliation": "武学",
     "duty": ""
    },
    {
     "group": "僧录司",
     "office": "左、右善世",
     "rank": "正六品",
     "count": "二人",
     "affiliation": "僧录司",
     "duty": "掌管有关僧侣等相关事务"
    },
    {
     "group": "僧录司",
     "office": "左、右阐教",
     "rank": "从六品",
     "count": "二人",
     "affiliation": "僧录司",
     "duty": ""
    },
    {
     "group": "僧录司",
     "office": "左、右讲经",
     "rank": "正八品",
     "count": "二人",
     "affiliation": "僧录司",
     "duty": ""
    },
    {
     "group": "僧录司",
     "office": "左、右觉义",
     "rank": "从八品",
     "count": "二人",
     "affiliation": "僧录司",
     "duty": ""
    },
    {
     "group": "道录司",
     "office": "左、右正一",
     "rank": "正六品",
     "count": "二人",
     "affiliation": "道录司",
     "duty": "掌道教事务"
    },
    {
     "group": "道录司",
     "office": "左、右演法",
     "rank": "从六品",
     "count": "二人",
     "affiliation": "道录司",
     "duty": ""
    },
    {
     "group": "道录司",
     "office": "左、右至灵",
     "rank": "正八品",
     "count": "二人",
     "affiliation": "道录司",
     "duty": ""
    },
    {
     "group": "道录司",
     "office": "左、右玄义",
     "rank": "从八品",
     "count": "二人",
     "affiliation": "道录司",
     "duty": ""
    },
    {
     "group": "道录司",
     "office": "神乐观提点",
     "rank": "正六品",
     "count": "一人",
     "affiliation": "道录司",
     "duty": ""
    },
    {
     "group": "道录司",
     "office": "龙虎山正一真人",
     "rank": "从八品",
     "count": "一人",
     "affiliation": "道录司",
     "duty": ""
    },
    {
     "group": "道录司",
     "office": "阁皂山灵官",
     "rank": "正八品",
     "count": "一人",
     "affiliation": "道录司",
     "duty": ""
    },
    {
     "group": "道录司",
     "office": "三茅山灵官",
     "rank": "正八品",
     "count": "一人",
     "affiliation": "道录司",
     "duty": ""
    },
    {
     "group": "教坊司",
     "office": "奉銮",
     "rank": "正九品",
     "count": "一人",
     "affiliation": "教坊司",
     "duty": "主管乐舞和戏曲"
    },
    {
     "group": "教坊司",
     "office": "左、右韶舞",
     "rank": "从九品",
     "count": "二人",
     "affiliation": "教坊司",
     "duty": ""
    },
    {
     "group": "教坊司",
     "office": "左、右司乐",
     "rank": "从九品",
     "count": "二人",
     "affiliation": "教坊司",
     "duty": ""
    },
    {
     "group": "王府长史司",
     "office": "左、右长史",
     "rank": "正五品",
     "count": "二人",
     "affiliation": "王府长史司",
     "duty": "辅相规讽，总管王府事务\n（各所副官，嘉靖四十四年并革）"
    },
    {
     "group": "王府长史司",
     "office": "典簿",
     "rank": "正九品",
     "count": "一人",
     "affiliation": "王府长史司",
     "duty": ""
    },
    {
     "group": "王府长史司",
     "office": "审理",
     "rank": "正六品",
     "count": "一人",
     "affiliation": "王府长史司审理所",
     "duty": ""
    },
    {
     "group": "王府长史司",
     "office": "典膳",
     "rank": "正八品",
     "count": "一人",
     "affiliation": "王府长史司典膳所",
     "duty": ""
    },
    {
     "group": "王府长史司",
     "office": "奉祠",
     "rank": "正八品",
     "count": "一人",
     "affiliation": "王府长史司奉祠所",
     "duty": ""
    },
    {
     "group": "王府长史司",
     "office": "典乐",
     "rank": "正九品",
     "count": "一人",
     "affiliation": "王府长史司奉祠所",
     "duty": ""
    },
    {
     "group": "王府长史司",
     "office": "典宝",
     "rank": "正八品",
     "count": "一人",
     "affiliation": "王府长史司典宝所",
     "duty": ""
    },
    {
     "group": "王府长史司",
     "office": "纪善",
     "rank": "正八品",
     "count": "二人",
     "affiliation": "王府长史司纪善所",
     "duty": ""
    },
    {
     "group": "王府长史司",
     "office": "良医",
     "rank": "正八品",
     "count": "一人",
     "affiliation": "王府长史司良医所",
     "duty": ""
    },
    {
     "group": "王府长史司",
     "office": "典仪",
     "rank": "正九品",
     "count": "一人",
     "affiliation": "王府长史司典仪所",
     "duty": ""
    },
    {
     "group": "王府长史司",
     "office": "工正",
     "rank": "正八品",
     "count": "一人",
     "affiliation": "王府长史司工正所",
     "duty": ""
    },
    {
     "group": "王府长史司",
     "office": "伴读",
     "rank": "从九品",
     "count": "一人",
     "affiliation": "王府长史司",
     "duty": ""
    },
    {
     "group": "王府长史司",
     "office": "教授",
     "rank": "从九品",
     "count": "无定员",
     "affiliation": "王府长史司",
     "duty": ""
    },
    {
     "group": "王府长史司",
     "office": "引礼舍",
     "rank": "未入流",
     "count": "二人",
     "affiliation": "王府长史司",
     "duty": ""
    },
    {
     "group": "王府长史司",
     "office": "仓大使",
     "rank": "未入流",
     "count": "一人",
     "affiliation": "王府长史司",
     "duty": ""
    },
    {
     "group": "王府长史司",
     "office": "副使",
     "rank": "未入流",
     "count": "一人",
     "affiliation": "王府长史司",
     "duty": ""
    },
    {
     "group": "王府长史司",
     "office": "库大使",
     "rank": "未入流",
     "count": "一人",
     "affiliation": "王府长史司",
     "duty": ""
    },
    {
     "group": "郡王府",
     "office": "教授",
     "rank": "从九品",
     "count": "一人",
     "affiliation": "郡王府",
     "duty": "负责郡王府事务"
    },
    {
     "group": "郡王府",
     "office": "典膳",
     "rank": "正八品",
     "count": "一人",
     "affiliation": "",
     "duty": ""
    },
    {
     "group": "镇国将军府",
     "office": "教授",
     "rank": "从九品",
     "count": "一人",
     "affiliation": "镇国将军府",
     "duty": "负责镇国将军府事务"
    }
   ]
  },
  {
   "id": "local",
   "title": "地方行政",
   "region": "地方官制 · 布政按察与府州县",
   "columns": [
    "官职",
    "品级",
    "人数",
    "隶属",
    "职事"
   ],
   "rows": [
    {
     "group": "承宣布政使司",
     "office": "左、右布政使",
     "rank": "从二品",
     "count": "二人",
     "affiliation": "承宣布政使司",
     "duty": "相当于省级地方行政机关\n宣达政令：承接朝廷政令，向所辖府州县传达落实\n民政管理：掌管户籍、田亩、赋税、徭役，每十年汇总一次户籍田土\n财政出纳：发放宗室、官员、军队\n俸禄粮饷，管理全省财政收支\n官员考核：考察省内府州县各级官员政绩并上报，每三年率府州县官朝觐皇帝\n主持科举：负责组织省内乡试\n荒政救济：遇灾荒请示蠲免赋税、组织赈济，救济鳏寡孤独\n教化表彰：监督祭祀，表彰孝悌贞烈"
    },
    {
     "group": "承宣布政使司",
     "office": "左、右参政",
     "rank": "从三品",
     "count": "二人",
     "affiliation": "承宣布政使司",
     "duty": ""
    },
    {
     "group": "承宣布政使司",
     "office": "左、右参议",
     "rank": "从四品",
     "count": "二人",
     "affiliation": "承宣布政使司",
     "duty": ""
    },
    {
     "group": "承宣布政使司",
     "office": "经历",
     "rank": "从六品",
     "count": "一人",
     "affiliation": "承宣布政使司经历司",
     "duty": ""
    },
    {
     "group": "承宣布政使司",
     "office": "都事",
     "rank": "从七品",
     "count": "一人",
     "affiliation": "承宣布政使司",
     "duty": ""
    },
    {
     "group": "承宣布政使司",
     "office": "照磨",
     "rank": "从八品",
     "count": "一人",
     "affiliation": "承宣布政使司照磨所",
     "duty": ""
    },
    {
     "group": "承宣布政使司",
     "office": "检校",
     "rank": "正九品",
     "count": "一人",
     "affiliation": "承宣布政使司",
     "duty": ""
    },
    {
     "group": "承宣布政使司",
     "office": "理问",
     "rank": "从六品",
     "count": "一人",
     "affiliation": "承宣布政使司理问所",
     "duty": ""
    },
    {
     "group": "承宣布政使司",
     "office": "副理问",
     "rank": "从七品",
     "count": "一人",
     "affiliation": "承宣布政使司理问所",
     "duty": ""
    },
    {
     "group": "承宣布政使司",
     "office": "提控案牍",
     "rank": "未入流",
     "count": "一人",
     "affiliation": "承宣布政使司理问所",
     "duty": ""
    },
    {
     "group": "承宣布政使司",
     "office": "司狱",
     "rank": "从九品",
     "count": "一人",
     "affiliation": "承宣布政使司司狱司",
     "duty": ""
    },
    {
     "group": "承宣布政使司",
     "office": "库大使",
     "rank": "从九品",
     "count": "一人",
     "affiliation": "承宣布政使司",
     "duty": ""
    },
    {
     "group": "承宣布政使司",
     "office": "副使",
     "rank": "未入流",
     "count": "一人",
     "affiliation": "承宣布政使司",
     "duty": ""
    },
    {
     "group": "承宣布政使司",
     "office": "仓大使",
     "rank": "从九品",
     "count": "一人",
     "affiliation": "承宣布政使司",
     "duty": ""
    },
    {
     "group": "承宣布政使司",
     "office": "副使",
     "rank": "未入流",
     "count": "一人",
     "affiliation": "承宣布政使司",
     "duty": ""
    },
    {
     "group": "承宣布政使司",
     "office": "大使",
     "rank": "从九品",
     "count": "四人",
     "affiliation": "杂造局、军器局、宝泉局、织染局",
     "duty": ""
    },
    {
     "group": "承宣布政使司",
     "office": "副使",
     "rank": "未入流",
     "count": "四人",
     "affiliation": "杂造局、军器局、宝泉局、织染局",
     "duty": ""
    },
    {
     "group": "提刑按察使司",
     "office": "按察使",
     "rank": "正三品",
     "count": "一人",
     "affiliation": "提刑按察使司",
     "duty": "对地方官员行使监察权"
    },
    {
     "group": "提刑按察使司",
     "office": "副使",
     "rank": "正四品",
     "count": "一人",
     "affiliation": "提刑按察使司",
     "duty": ""
    },
    {
     "group": "提刑按察使司",
     "office": "佥事",
     "rank": "正五品",
     "count": "无定员",
     "affiliation": "提刑按察使司",
     "duty": ""
    },
    {
     "group": "提刑按察使司",
     "office": "经历",
     "rank": "正七品",
     "count": "一人",
     "affiliation": "提刑按察使司经历司",
     "duty": ""
    },
    {
     "group": "提刑按察使司",
     "office": "知事",
     "rank": "正八品",
     "count": "一人",
     "affiliation": "提刑按察使司",
     "duty": ""
    },
    {
     "group": "提刑按察使司",
     "office": "照磨",
     "rank": "正九品",
     "count": "一人",
     "affiliation": "提刑按察使司照磨所",
     "duty": ""
    },
    {
     "group": "提刑按察使司",
     "office": "检校",
     "rank": "从九品",
     "count": "一人",
     "affiliation": "提刑按察使司",
     "duty": ""
    },
    {
     "group": "提刑按察使司",
     "office": "司狱",
     "rank": "从九品",
     "count": "一人",
     "affiliation": "提刑按察使司司狱司",
     "duty": ""
    },
    {
     "group": "行太仆寺",
     "office": "卿",
     "rank": "从三品",
     "count": "一人",
     "affiliation": "行太仆寺",
     "duty": "掌各边卫所营堡马政"
    },
    {
     "group": "行太仆寺",
     "office": "少卿",
     "rank": "正四品",
     "count": "一人",
     "affiliation": "行太仆寺",
     "duty": ""
    },
    {
     "group": "行太仆寺",
     "office": "寺丞",
     "rank": "正六品",
     "count": "无定员",
     "affiliation": "行太仆寺",
     "duty": ""
    },
    {
     "group": "行太仆寺",
     "office": "主簿",
     "rank": "从七品",
     "count": "一人",
     "affiliation": "行太仆寺",
     "duty": ""
    },
    {
     "group": "苑马寺",
     "office": "卿",
     "rank": "从三品",
     "count": "一人",
     "affiliation": "苑马寺",
     "duty": "掌管养马"
    },
    {
     "group": "苑马寺",
     "office": "少卿",
     "rank": "正四品",
     "count": "一人",
     "affiliation": "苑马寺",
     "duty": ""
    },
    {
     "group": "苑马寺",
     "office": "寺丞",
     "rank": "正六品",
     "count": "无定员",
     "affiliation": "苑马寺",
     "duty": ""
    },
    {
     "group": "苑马寺",
     "office": "主簿",
     "rank": "从七品",
     "count": "一人",
     "affiliation": "苑马寺",
     "duty": ""
    },
    {
     "group": "苑马寺",
     "office": "监正",
     "rank": "正九品",
     "count": "一人",
     "affiliation": "苑马寺牧监",
     "duty": ""
    },
    {
     "group": "苑马寺",
     "office": "监副",
     "rank": "从九品",
     "count": "一人",
     "affiliation": "苑马寺牧监",
     "duty": ""
    },
    {
     "group": "苑马寺",
     "office": "录事",
     "rank": "未入流",
     "count": "一人",
     "affiliation": "苑马寺牧监",
     "duty": ""
    },
    {
     "group": "苑马寺",
     "office": "圉长",
     "rank": "从九品",
     "count": "一人",
     "affiliation": "苑马寺牧监",
     "duty": ""
    },
    {
     "group": "都转运盐使司",
     "office": "都转运使",
     "rank": "从三品",
     "count": "一人",
     "affiliation": "都转运盐使司",
     "duty": "处理各地盐务事宜"
    },
    {
     "group": "都转运盐使司",
     "office": "同知",
     "rank": "从四品",
     "count": "一人",
     "affiliation": "都转运盐使司",
     "duty": ""
    },
    {
     "group": "都转运盐使司",
     "office": "副使",
     "rank": "从五品",
     "count": "一人",
     "affiliation": "都转运盐使司",
     "duty": ""
    },
    {
     "group": "都转运盐使司",
     "office": "判官",
     "rank": "从六品",
     "count": "无定员",
     "affiliation": "都转运盐使司",
     "duty": ""
    },
    {
     "group": "都转运盐使司",
     "office": "经历",
     "rank": "从七品",
     "count": "一人",
     "affiliation": "都转运盐使司经历司",
     "duty": ""
    },
    {
     "group": "都转运盐使司",
     "office": "知事",
     "rank": "从八品",
     "count": "一人",
     "affiliation": "都转运盐使司",
     "duty": ""
    },
    {
     "group": "盐课提举司",
     "office": "提举",
     "rank": "从五品",
     "count": "一人",
     "affiliation": "盐课提举司",
     "duty": "督察所属盐井之产销事务"
    },
    {
     "group": "盐课提举司",
     "office": "同提举",
     "rank": "从六品",
     "count": "一人",
     "affiliation": "盐课提举司",
     "duty": ""
    },
    {
     "group": "盐课提举司",
     "office": "副提举",
     "rank": "从七品",
     "count": "无定员",
     "affiliation": "盐课提举司",
     "duty": ""
    },
    {
     "group": "盐课提举司",
     "office": "吏目",
     "rank": "从九品",
     "count": "一人",
     "affiliation": "盐课提举司",
     "duty": ""
    },
    {
     "group": "盐课提举司",
     "office": "库大使",
     "rank": "未入流",
     "count": "一人",
     "affiliation": "盐课提举司",
     "duty": ""
    },
    {
     "group": "盐课提举司",
     "office": "副使",
     "rank": "未入流",
     "count": "一人",
     "affiliation": "盐课提举司",
     "duty": ""
    },
    {
     "group": "盐课提举司",
     "office": "市舶提举司提举",
     "rank": "从五品",
     "count": "一人",
     "affiliation": "市舶提举司",
     "duty": ""
    },
    {
     "group": "盐课提举司",
     "office": "副提举",
     "rank": "从六品",
     "count": "二人",
     "affiliation": "市舶提举司",
     "duty": ""
    },
    {
     "group": "盐课提举司",
     "office": "吏目",
     "rank": "从九品",
     "count": "一人",
     "affiliation": "市舶提举司",
     "duty": ""
    },
    {
     "group": "市舶司",
     "office": "提举",
     "rank": "从五品",
     "count": "一人",
     "affiliation": "市舶提举司",
     "duty": "管理海上对外贸易"
    },
    {
     "group": "市舶司",
     "office": "副提举",
     "rank": "从六品",
     "count": "二人",
     "affiliation": "市舶提举司",
     "duty": ""
    },
    {
     "group": "尚宝司",
     "office": "卿",
     "rank": "正五品",
     "count": "一人",
     "affiliation": "尚宝司",
     "duty": "掌宝玺、符牌、印章"
    },
    {
     "group": "尚宝司",
     "office": "少卿",
     "rank": "从五品",
     "count": "一人",
     "affiliation": "尚宝司",
     "duty": ""
    },
    {
     "group": "尚宝司",
     "office": "寺丞",
     "rank": "正六品",
     "count": "三人",
     "affiliation": "尚宝司",
     "duty": ""
    },
    {
     "group": "府",
     "office": "知府",
     "rank": "正四品",
     "count": "一人",
     "affiliation": "府（下设衙役若干）",
     "duty": "相当于市级地方行政机关"
    },
    {
     "group": "府",
     "office": "同知",
     "rank": "正五品",
     "count": "无定员",
     "affiliation": "府（下设衙役若干）",
     "duty": ""
    },
    {
     "group": "府",
     "office": "通判",
     "rank": "正六品",
     "count": "无定员",
     "affiliation": "府（下设衙役若干）",
     "duty": ""
    },
    {
     "group": "府",
     "office": "推官",
     "rank": "正七品",
     "count": "一人",
     "affiliation": "府（下设衙役若干）",
     "duty": ""
    },
    {
     "group": "府",
     "office": "经历",
     "rank": "正八品",
     "count": "一人",
     "affiliation": "府经历司",
     "duty": ""
    },
    {
     "group": "府",
     "office": "知事",
     "rank": "正九品",
     "count": "一人",
     "affiliation": "府",
     "duty": ""
    },
    {
     "group": "府",
     "office": "照磨",
     "rank": "从九品",
     "count": "一人",
     "affiliation": "府照磨所",
     "duty": ""
    },
    {
     "group": "府",
     "office": "检校",
     "rank": "未入流",
     "count": "一人",
     "affiliation": "府",
     "duty": ""
    },
    {
     "group": "府",
     "office": "司狱",
     "rank": "未入流",
     "count": "一人",
     "affiliation": "府司狱司",
     "duty": ""
    },
    {
     "group": "州/县",
     "office": "知州/知县",
     "rank": "正七品",
     "count": "一人",
     "affiliation": "州/县（下设衙役若干）",
     "duty": "相当于县级地方行政机关"
    },
    {
     "group": "州/县",
     "office": "县丞",
     "rank": "正八品",
     "count": "一人",
     "affiliation": "州/县（下设衙役若干）",
     "duty": ""
    },
    {
     "group": "州/县",
     "office": "主簿",
     "rank": "正九品",
     "count": "一人",
     "affiliation": "州/县（下设衙役若干）",
     "duty": ""
    },
    {
     "group": "州/县",
     "office": "典史",
     "rank": "未入流",
     "count": "一人",
     "affiliation": "州/县（下设衙役若干）",
     "duty": ""
    },
    {
     "group": "巡检司",
     "office": "巡检",
     "rank": "从九品",
     "count": "无定员",
     "affiliation": "巡检司",
     "duty": "维护地方治安"
    },
    {
     "group": "巡检司",
     "office": "副巡检",
     "rank": "从九品",
     "count": "无定员",
     "affiliation": "巡检司",
     "duty": ""
    }
   ]
  },
  {
   "id": "jimi",
   "title": "羁縻州司",
   "region": "地方官制 · 土司",
   "columns": [
    "官职",
    "品级",
    "人数",
    "隶属",
    "职事"
   ],
   "rows": [
    {
     "group": "土官",
     "office": "宣慰使",
     "rank": "从三品",
     "count": "一人",
     "affiliation": "宣慰使司",
     "duty": "统治少数民族"
    },
    {
     "group": "土官",
     "office": "同知",
     "rank": "正四品",
     "count": "一人",
     "affiliation": "宣慰使司",
     "duty": ""
    },
    {
     "group": "土官",
     "office": "副使",
     "rank": "从四品",
     "count": "一人",
     "affiliation": "宣慰使司",
     "duty": ""
    },
    {
     "group": "土官",
     "office": "佥事",
     "rank": "正五品",
     "count": "一人",
     "affiliation": "宣慰使司",
     "duty": ""
    },
    {
     "group": "土官",
     "office": "经历",
     "rank": "从七品",
     "count": "一人",
     "affiliation": "宣慰使司经历司",
     "duty": ""
    },
    {
     "group": "土官",
     "office": "都事",
     "rank": "正八品",
     "count": "一人",
     "affiliation": "宣慰使司",
     "duty": ""
    },
    {
     "group": "宣抚司",
     "office": "宣抚使",
     "rank": "从四品",
     "count": "一人",
     "affiliation": "宣抚司",
     "duty": "少数民族地区行政机构"
    },
    {
     "group": "宣抚司",
     "office": "同知",
     "rank": "正五品",
     "count": "一人",
     "affiliation": "宣抚司",
     "duty": ""
    },
    {
     "group": "宣抚司",
     "office": "副使",
     "rank": "从五品",
     "count": "一人",
     "affiliation": "宣抚司",
     "duty": ""
    },
    {
     "group": "宣抚司",
     "office": "佥事",
     "rank": "正六品",
     "count": "一人",
     "affiliation": "宣抚司",
     "duty": ""
    },
    {
     "group": "宣抚司",
     "office": "经历",
     "rank": "从八品",
     "count": "一人",
     "affiliation": "宣抚司经历司",
     "duty": ""
    },
    {
     "group": "宣抚司",
     "office": "知事",
     "rank": "正九品",
     "count": "一人",
     "affiliation": "宣抚司",
     "duty": ""
    },
    {
     "group": "宣抚司",
     "office": "照磨",
     "rank": "从九品",
     "count": "一人",
     "affiliation": "宣抚司",
     "duty": ""
    },
    {
     "group": "安抚司",
     "office": "安抚使",
     "rank": "从五品",
     "count": "一人",
     "affiliation": "安抚司",
     "duty": "由中央派遣处理地方事务"
    },
    {
     "group": "安抚司",
     "office": "同知",
     "rank": "正六品",
     "count": "一人",
     "affiliation": "安抚司",
     "duty": ""
    },
    {
     "group": "安抚司",
     "office": "副使",
     "rank": "从六品",
     "count": "一人",
     "affiliation": "安抚司",
     "duty": ""
    },
    {
     "group": "安抚司",
     "office": "佥事",
     "rank": "正七品",
     "count": "一人",
     "affiliation": "安抚司",
     "duty": ""
    },
    {
     "group": "安抚司",
     "office": "吏目",
     "rank": "从九品",
     "count": "一人",
     "affiliation": "安抚司",
     "duty": ""
    },
    {
     "group": "招讨司",
     "office": "招讨使",
     "rank": "从五品",
     "count": "一人",
     "affiliation": "招讨司",
     "duty": "少数民族地区行政机构"
    },
    {
     "group": "招讨司",
     "office": "副招讨",
     "rank": "正六品",
     "count": "一人",
     "affiliation": "招讨司",
     "duty": ""
    },
    {
     "group": "招讨司",
     "office": "吏目",
     "rank": "从九品",
     "count": "一人",
     "affiliation": "招讨司",
     "duty": ""
    },
    {
     "group": "长官司",
     "office": "长官",
     "rank": "正六品",
     "count": "一人",
     "affiliation": "长官司",
     "duty": "少数民族地区行政机构"
    },
    {
     "group": "长官司",
     "office": "副长官",
     "rank": "从七品",
     "count": "一人",
     "affiliation": "长官司",
     "duty": ""
    },
    {
     "group": "长官司",
     "office": "吏目",
     "rank": "未入流",
     "count": "一人",
     "affiliation": "长官司",
     "duty": ""
    }
   ]
  },
  {
   "id": "garrison",
   "title": "卫所",
   "region": "地方官制 · 卫所",
   "columns": [
    "官职",
    "品级",
    "人数",
    "隶属",
    "职事"
   ],
   "rows": [
    {
     "group": "都指挥使司",
     "office": "都指挥使",
     "rank": "正二品",
     "count": "一人",
     "affiliation": "都指挥使司",
     "duty": "地方军事领导机构"
    },
    {
     "group": "都指挥使司",
     "office": "都指挥同知",
     "rank": "从二品",
     "count": "二人",
     "affiliation": "都指挥使司",
     "duty": ""
    },
    {
     "group": "都指挥使司",
     "office": "都指挥佥事",
     "rank": "正三品",
     "count": "四人",
     "affiliation": "都指挥使司",
     "duty": ""
    },
    {
     "group": "都指挥使司",
     "office": "经历",
     "rank": "正六品",
     "count": "一人",
     "affiliation": "都指挥使司经历司",
     "duty": ""
    },
    {
     "group": "都指挥使司",
     "office": "都事",
     "rank": "正七品",
     "count": "一人",
     "affiliation": "都指挥使司",
     "duty": ""
    },
    {
     "group": "都指挥使司",
     "office": "断事",
     "rank": "正六品",
     "count": "一人",
     "affiliation": "都指挥使司断事司",
     "duty": ""
    },
    {
     "group": "都指挥使司",
     "office": "副断事",
     "rank": "正七品",
     "count": "一人",
     "affiliation": "都指挥使司断事司",
     "duty": ""
    },
    {
     "group": "都指挥使司",
     "office": "吏目",
     "rank": "未入流",
     "count": "一人",
     "affiliation": "都指挥使司",
     "duty": ""
    },
    {
     "group": "都指挥使司",
     "office": "司狱",
     "rank": "从九品",
     "count": "一人",
     "affiliation": "都指挥使司司狱司",
     "duty": ""
    },
    {
     "group": "卫指挥使司",
     "office": "指挥使",
     "rank": "正三品",
     "count": "一人",
     "affiliation": "卫指挥使司",
     "duty": "地方军事领导机构"
    },
    {
     "group": "卫指挥使司",
     "office": "指挥同知",
     "rank": "从三品",
     "count": "二人",
     "affiliation": "卫指挥使司",
     "duty": ""
    },
    {
     "group": "卫指挥使司",
     "office": "指挥佥事",
     "rank": "正四品",
     "count": "四人",
     "affiliation": "卫指挥使司",
     "duty": ""
    },
    {
     "group": "卫指挥使司",
     "office": "镇抚",
     "rank": "从五品",
     "count": "二人",
     "affiliation": "卫指挥使司镇抚司",
     "duty": ""
    },
    {
     "group": "卫指挥使司",
     "office": "经历",
     "rank": "从七品",
     "count": "一人",
     "affiliation": "卫指挥使司经历司",
     "duty": ""
    },
    {
     "group": "卫指挥使司",
     "office": "知事",
     "rank": "正八品",
     "count": "一人",
     "affiliation": "卫指挥使司",
     "duty": ""
    },
    {
     "group": "卫指挥使司",
     "office": "吏目",
     "rank": "从九品",
     "count": "一人",
     "affiliation": "卫指挥使司",
     "duty": ""
    },
    {
     "group": "卫指挥使司",
     "office": "仓大使",
     "rank": "未入流",
     "count": "一人",
     "affiliation": "卫指挥使司",
     "duty": ""
    },
    {
     "group": "卫指挥使司",
     "office": "副使",
     "rank": "未入流",
     "count": "一人",
     "affiliation": "卫指挥使司",
     "duty": ""
    },
    {
     "group": "所",
     "office": "正千户",
     "rank": "正五品",
     "count": "一人",
     "affiliation": "千户所",
     "duty": "地方军事领导机构"
    },
    {
     "group": "所",
     "office": "副千户",
     "rank": "从五品",
     "count": "二人",
     "affiliation": "千户所",
     "duty": ""
    },
    {
     "group": "所",
     "office": "镇抚",
     "rank": "正六品",
     "count": "二人",
     "affiliation": "千户所",
     "duty": ""
    },
    {
     "group": "所",
     "office": "百户",
     "rank": "从六品",
     "count": "十人",
     "affiliation": "千户所",
     "duty": ""
    }
   ]
  },
  {
   "id": "military",
   "title": "军事机构",
   "region": "军事卫戍 · 京师与王府",
   "columns": [
    "官职",
    "品级",
    "人数",
    "隶属",
    "职事"
   ],
   "rows": [
    {
     "group": "五军都督府",
     "office": "左右都督",
     "rank": "正一品",
     "count": "二人",
     "affiliation": "都督府",
     "duty": "统领全国军队的最高军事机构，\n由中军、左军、右军、前军、后军五府组成，\n洪武十三年（1380年）由大都督府拆分而来，核心设计\n原则是\"有统兵之权，无调兵之权\"，与兵部相互制衡"
    },
    {
     "group": "五军都督府",
     "office": "都督同知",
     "rank": "从一品",
     "count": "无定员",
     "affiliation": "都督府",
     "duty": ""
    },
    {
     "group": "五军都督府",
     "office": "都督佥事",
     "rank": "正二品",
     "count": "无定员",
     "affiliation": "都督府",
     "duty": ""
    },
    {
     "group": "五军都督府",
     "office": "经历",
     "rank": "从五品",
     "count": "一人",
     "affiliation": "都督府经历司",
     "duty": ""
    },
    {
     "group": "五军都督府",
     "office": "都事",
     "rank": "从七品",
     "count": "一人",
     "affiliation": "都督府",
     "duty": ""
    },
    {
     "group": "五城兵马指挥司",
     "office": "指挥",
     "rank": "正六品",
     "count": "各一人",
     "affiliation": "中、东、西、南、北五城兵马指挥司",
     "duty": "负责治安缉捕、消防火禁、市场维护\n市场管理、司法辅助及疏理泃渠街道等事"
    },
    {
     "group": "五城兵马指挥司",
     "office": "副指挥",
     "rank": "正七品",
     "count": "各四人",
     "affiliation": "中、东、西、南、北五城兵马指挥司",
     "duty": ""
    },
    {
     "group": "五城兵马指挥司",
     "office": "吏目",
     "rank": "未入流",
     "count": "各一人",
     "affiliation": "中、东、西、南、北五城兵马指挥司",
     "duty": ""
    },
    {
     "group": "京卫指挥使司",
     "office": "指挥使",
     "rank": "正三品",
     "count": "一人",
     "affiliation": "京卫指挥使司",
     "duty": "掌统卫军护卫宫禁\n负责宫禁守卫、皇城巡警、城门守御等核心卫戍任务。\n它并非单一机构，而是由多个卫组成的庞大体系，\n内部又因隶属关系不同而分为多个层级。"
    },
    {
     "group": "京卫指挥使司",
     "office": "指挥同知",
     "rank": "从四品",
     "count": "二人",
     "affiliation": "京卫指挥使司",
     "duty": ""
    },
    {
     "group": "京卫指挥使司",
     "office": "指挥佥事",
     "rank": "正四品",
     "count": "四人",
     "affiliation": "京卫指挥使司",
     "duty": ""
    },
    {
     "group": "京卫指挥使司",
     "office": "镇抚",
     "rank": "从五品",
     "count": "二人",
     "affiliation": "京卫指挥使司镇抚司",
     "duty": ""
    },
    {
     "group": "京卫指挥使司",
     "office": "经历",
     "rank": "从七品",
     "count": "一人",
     "affiliation": "京卫指挥使司经历司",
     "duty": ""
    },
    {
     "group": "京卫指挥使司",
     "office": "知事",
     "rank": "正八品",
     "count": "一人",
     "affiliation": "京卫指挥使司",
     "duty": ""
    },
    {
     "group": "京卫指挥使司",
     "office": "吏目",
     "rank": "从九品",
     "count": "一人",
     "affiliation": "京卫指挥使司",
     "duty": ""
    },
    {
     "group": "京卫指挥使司",
     "office": "仓大使",
     "rank": "未入流",
     "count": "一人",
     "affiliation": "京卫指挥使司",
     "duty": ""
    },
    {
     "group": "京卫指挥使司",
     "office": "副使",
     "rank": "未入流",
     "count": "一人",
     "affiliation": "京卫指挥使司",
     "duty": ""
    },
    {
     "group": "王府仪卫司",
     "office": "仪卫正",
     "rank": "正五品",
     "count": "一人",
     "affiliation": "王府仪卫司",
     "duty": "掌王府侍卫仪仗，属礼仪与安保性兼具的机构"
    },
    {
     "group": "王府仪卫司",
     "office": "仪卫副",
     "rank": "从五品",
     "count": "二人",
     "affiliation": "王府仪卫司",
     "duty": ""
    },
    {
     "group": "王府仪卫司",
     "office": "典仗",
     "rank": "正六品",
     "count": "六人",
     "affiliation": "王府仪卫司",
     "duty": ""
    },
    {
     "group": "留守司",
     "office": "正留守",
     "rank": "正二品",
     "count": "一人",
     "affiliation": "留守司",
     "duty": "留守司是设于陪都的特殊军事机构，\n主要职责是防护皇陵，与都司、行都司并列，\n但性质有所不同\n明代共设两个留守司：中都留守司和兴都留守司"
    },
    {
     "group": "留守司",
     "office": "副留守",
     "rank": "正三品",
     "count": "一人",
     "affiliation": "留守司",
     "duty": ""
    },
    {
     "group": "留守司",
     "office": "指挥同知",
     "rank": "从三品",
     "count": "二人",
     "affiliation": "留守司",
     "duty": ""
    },
    {
     "group": "留守司",
     "office": "经历",
     "rank": "正六品",
     "count": "一人",
     "affiliation": "留守司经历司",
     "duty": ""
    },
    {
     "group": "留守司",
     "office": "都事",
     "rank": "正七品",
     "count": "一人",
     "affiliation": "留守司",
     "duty": ""
    },
    {
     "group": "留守司",
     "office": "断事",
     "rank": "正六品",
     "count": "一人",
     "affiliation": "留守司断事司",
     "duty": ""
    },
    {
     "group": "留守司",
     "office": "副断事",
     "rank": "正七品",
     "count": "一人",
     "affiliation": "留守司断事司",
     "duty": ""
    }
   ]
  },
  {
   "id": "factories",
   "title": "厂卫",
   "region": "军事卫戍 · 厂卫特务",
   "columns": [
    "官职",
    "品级",
    "人数",
    "隶属",
    "职事"
   ],
   "rows": [
    {
     "group": "锦衣卫",
     "office": "指挥使",
     "rank": "正三品",
     "count": "一人",
     "affiliation": "锦衣卫",
     "duty": "掌直驾侍卫、巡查缉捕，\n掌管刑狱，巡察缉捕\n洪武十五年设，负责皇帝侍卫仪仗与巡查缉捕，\n下设北镇抚司专理诏狱，\n可不经三法司直接逮捕审讯官民，\n兼具亲军与特务双重职能\n（永乐时，增设北镇抚司，专理诏狱，成化年间北镇抚司获独立印信，直接向皇帝汇报，弘治以后出现南北两镇抚司的称谓）"
    },
    {
     "group": "锦衣卫",
     "office": "指挥同知",
     "rank": "从三品",
     "count": "二人",
     "affiliation": "锦衣卫",
     "duty": ""
    },
    {
     "group": "锦衣卫",
     "office": "指挥佥事",
     "rank": "正四品",
     "count": "二人",
     "affiliation": "锦衣卫",
     "duty": ""
    },
    {
     "group": "锦衣卫",
     "office": "镇抚使",
     "rank": "从四品",
     "count": "二人",
     "affiliation": "锦衣卫",
     "duty": ""
    },
    {
     "group": "锦衣卫",
     "office": "十四所千户",
     "rank": "正五品",
     "count": "十四人",
     "affiliation": "锦衣卫",
     "duty": ""
    },
    {
     "group": "锦衣卫",
     "office": "副千户",
     "rank": "从五品",
     "count": "无定员",
     "affiliation": "锦衣卫",
     "duty": ""
    },
    {
     "group": "锦衣卫",
     "office": "百户",
     "rank": "正六品",
     "count": "无定员",
     "affiliation": "锦衣卫",
     "duty": ""
    },
    {
     "group": "锦衣卫",
     "office": "试百户",
     "rank": "从六品",
     "count": "无定员",
     "affiliation": "锦衣卫",
     "duty": ""
    },
    {
     "group": "锦衣卫",
     "office": "总旗",
     "rank": "正七品",
     "count": "无定员",
     "affiliation": "锦衣卫",
     "duty": ""
    },
    {
     "group": "锦衣卫",
     "office": "小旗",
     "rank": "从七品",
     "count": "无定员",
     "affiliation": "锦衣卫",
     "duty": ""
    },
    {
     "group": "锦衣卫",
     "office": "下属有将军、力士、校尉、翻译等",
     "rank": "",
     "count": "",
     "affiliation": "",
     "duty": ""
    },
    {
     "group": "东厂",
     "office": "东厂掌印太监（厂公）",
     "rank": "从四品",
     "count": "一人",
     "affiliation": "东厂",
     "duty": "永乐十八年设，\n由司礼监秉笔太监提督，专掌刺缉刑狱，监视百官臣民并监督锦衣卫，权力在锦衣卫之上，直接对皇帝负责"
    },
    {
     "group": "东厂",
     "office": "掌刑千户",
     "rank": "正五品",
     "count": "一人",
     "affiliation": "东厂(下设掌班、领班、司房等)",
     "duty": ""
    },
    {
     "group": "东厂",
     "office": "理刑百户",
     "rank": "正六品",
     "count": "一人",
     "affiliation": "东厂(下设掌班、领班、司房等)",
     "duty": ""
    },
    {
     "group": "西厂",
     "office": "西厂掌印太监（厂公）",
     "rank": "从四品",
     "count": "一人",
     "affiliation": "西厂",
     "duty": "成化十三年设，\n太监汪直提督，职能与东厂同但权力更大，缇骑人数倍于东厂，侦缉范围遍及全国，可随意逮捕大臣，两度废立"
    },
    {
     "group": "西厂",
     "office": "掌刑千户",
     "rank": "正五品",
     "count": "一人",
     "affiliation": "西厂(下设掌班、领班、司房等)",
     "duty": ""
    },
    {
     "group": "西厂",
     "office": "理刑百户",
     "rank": "正六品",
     "count": "一人",
     "affiliation": "西厂(下设掌班、领班、司房等)",
     "duty": ""
    },
    {
     "group": "内行厂",
     "office": "内行厂掌印太监（厂公）",
     "rank": "从四品",
     "count": "一人",
     "affiliation": "内行厂",
     "duty": "正德初年刘瑾所设，\n专司监察东厂、西厂及锦衣卫，同时监视天下臣民，权势居三厂卫之上，用刑尤为酷烈，正德五年随刘瑾倒台而废"
    },
    {
     "group": "内行厂",
     "office": "掌刑千户",
     "rank": "正五品",
     "count": "一人",
     "affiliation": "内行厂(下设掌班、领班、司房等)",
     "duty": ""
    }
   ]
  },
  {
   "id": "regional-officers",
   "title": "派驻地方官",
   "region": "军事卫戍 · 派驻",
   "columns": [
    "官职",
    "品级",
    "人数",
    "隶属",
    "职事"
   ],
   "rows": [
    {
     "group": "督抚系统",
     "office": "督师",
     "rank": "无品级",
     "count": "",
     "affiliation": "",
     "duty": "皇帝特命统帅数省军务的最高军事指挥官，权力在总督之上，如袁崇焕督师辽东，非常设，仅在重大战事时设立"
    },
    {
     "group": "督抚系统",
     "office": "总督",
     "rank": "无品级",
     "count": "",
     "affiliation": "",
     "duty": "统辖数省军务，节制辖区内巡抚、总兵等文武官员，协调跨省军事行动"
    },
    {
     "group": "督抚系统",
     "office": "巡抚",
     "rank": "无品级",
     "count": "",
     "affiliation": "",
     "duty": "巡行地方、抚军安民，统筹一省（或跨省）的行政、财政、司法、军事事务，节制三司"
    },
    {
     "group": "军事系统",
     "office": "总兵官",
     "rank": "无品级",
     "count": "",
     "affiliation": "",
     "duty": "遇战事佩将印出兵，统领一方军队作战。后逐渐演变为常驻武官，负责一镇或一路的防务"
    },
    {
     "group": "军事系统",
     "office": "副总兵",
     "rank": "无品级",
     "count": "",
     "affiliation": "",
     "duty": "总兵的副手，协助统领军队"
    },
    {
     "group": "军事系统",
     "office": "参将",
     "rank": "无品级",
     "count": "",
     "affiliation": "",
     "duty": "分守一路或一城的军事指挥官，级别低于总兵、副总兵"
    },
    {
     "group": "军事系统",
     "office": "游击将军",
     "rank": "无品级",
     "count": "",
     "affiliation": "",
     "duty": "机动部队的指挥官，不固定驻守一地，负责机动作战、增援策应"
    },
    {
     "group": "军事系统",
     "office": "守备",
     "rank": "无品级",
     "count": "",
     "affiliation": "",
     "duty": "驻守某一城池或关隘的军事长官"
    },
    {
     "group": "军事系统",
     "office": "提督",
     "rank": "无品级",
     "count": "",
     "affiliation": "",
     "duty": "提督军务总兵官的简称，通常由总兵兼任，负责某一区域或某项军事事务的统领。巡抚也常加\"提督军务\"衔以掌握军权"
    },
    {
     "group": "军事系统",
     "office": "镇守太监",
     "rank": "无品级",
     "count": "",
     "affiliation": "",
     "duty": "皇帝派往各地军队中的宦官，名义上监督军务，实际上常干预军事决策，是皇权对军队监控的手段"
    },
    {
     "group": "监察系统",
     "office": "巡按御史",
     "rank": "无品级",
     "count": "",
     "affiliation": "",
     "duty": "俗称\"八府巡按\"。代天子巡狩，察纠地方官吏、录囚审狱、照刷文卷、磨勘卷宗，可弹劾包括巡抚在内的一切地方官员"
    },
    {
     "group": "监察系统",
     "office": "巡盐御史",
     "rank": "无品级",
     "count": "",
     "affiliation": "",
     "duty": "巡察盐政，监督盐课征收与盐引发放，稽查私盐"
    },
    {
     "group": "监察系统",
     "office": "巡漕御史",
     "rank": "无品级",
     "count": "",
     "affiliation": "",
     "duty": "巡察漕运，监督粮食运输"
    },
    {
     "group": "监察系统",
     "office": "巡关御史",
     "rank": "无品级",
     "count": "",
     "affiliation": "",
     "duty": "巡察边关防务"
    },
    {
     "group": "专务系统",
     "office": "漕运总督",
     "rank": "无品级",
     "count": "",
     "affiliation": "",
     "duty": "总管全国漕粮运输，管辖运河沿线各省漕务"
    },
    {
     "group": "专务系统",
     "office": "河道总督",
     "rank": "无品级",
     "count": "",
     "affiliation": "",
     "duty": "总管黄河、运河等水系的治理与防汛"
    },
    {
     "group": "专务系统",
     "office": "提学御史(提学道)",
     "rank": "无品级",
     "count": "",
     "affiliation": "",
     "duty": "巡察一省教育事务，主持院试，考核生员，督察学官"
    },
    {
     "group": "专务系统",
     "office": "督粮道",
     "rank": "无品级",
     "count": "",
     "affiliation": "",
     "duty": "分管一省粮储事务"
    },
    {
     "group": "专务系统",
     "office": "兵备道",
     "rank": "无品级",
     "count": "",
     "affiliation": "",
     "duty": "在特定区域整饬兵备、训练民兵、防御盗匪，是明代中后期地方军事化的重要制度"
    },
    {
     "group": "专务系统",
     "office": "市舶提举",
     "rank": "无品级",
     "count": "",
     "affiliation": "",
     "duty": "管理海外贸易，设于广州、泉州、宁波等港口"
    },
    {
     "group": "专务系统",
     "office": "茶马司",
     "rank": "无品级",
     "count": "",
     "affiliation": "",
     "duty": "管理西北茶马互市，以茶换马，供军需"
    }
   ]
  }
 ]
};
