const emoji = [
    { "alt": "😀", "shortcode": "大笑的脸", "unicode": "U+1F600" },
    { "alt": "😃", "shortcode": "眯着笑眼的脸", "unicode": "U+1F603" },
    { "alt": "😄", "shortcode": "眯着笑眼的脸", "unicode": "U+1F604" },
    { "alt": "😁", "shortcode": "眯着笑眼的脸", "unicode": "U+1F601" },
    { "alt": "😆", "shortcode": "眯着眼睛的笑脸", "unicode": "U+1F606" },
    { "alt": "😅", "shortcode": "带汗水的笑脸", "unicode": "U+1F605" },
    { "alt": "🤣", "shortcode": "滚来滚去大笑", "unicode": "U+1F923" },
    { "alt": "😂", "shortcode": "笑哭的脸", "unicode": "U+1F602" },
    { "alt": "🙂", "shortcode": "微笑的脸", "unicode": "U+1F642" },
    { "alt": "🙃", "shortcode": "颠倒的脸", "unicode": "U+1F643" },
    { "alt": "😉", "shortcode": "眨眼的脸", "unicode": "U+1F609" },
    { "alt": "😊", "shortcode": "微笑的脸带着笑眼", "unicode": "U+1F60A" },
    { "alt": "😇", "shortcode": "带光环的微笑脸", "unicode": "U+1F607" },
    { "alt": "🥰", "shortcode": "带心形眼睛的微笑脸", "unicode": "U+1F970" },
    { "alt": "😍", "shortcode": "带心形眼睛的微笑脸", "unicode": "U+1F60D" },
    { "alt": "🤩", "shortcode": "眼冒星星", "unicode": "U+1F929" },
    { "alt": "😘", "shortcode": "飞吻的脸", "unicode": "U+1F618" },
    { "alt": "😗", "shortcode": "亲吻的脸", "unicode": "U+1F617" },
    { "alt": "😚", "shortcode": "闭眼亲吻的脸", "unicode": "U+1F61A" },
    { "alt": "😙", "shortcode": "带笑眼的亲吻脸", "unicode": "U+1F619" },
    { "alt": "😋", "shortcode": "好吃的脸", "unicode": "U+1F60B" },
    { "alt": "😛", "shortcode": "吐舌头的脸", "unicode": "U+1F61B" },
    { "alt": "😜", "shortcode": "眨眼吐舌头的脸", "unicode": "U+1F61C" },
    { "alt": "🤪", "shortcode": "发疯的脸", "unicode": "U+1F92A" },
    { "alt": "😝", "shortcode": "眯眼吐舌头的脸", "unicode": "U+1F61D" },
    { "alt": "🤑", "shortcode": "财迷脸", "unicode": "U+1F911" },
    { "alt": "🤗", "shortcode": "张开双手微笑的脸", "unicode": "U+1F917" },
    { "alt": "🤭", "shortcode": "捂嘴笑的脸", "unicode": "U+1F92D" },
    { "alt": "🤫", "shortcode": "嘘声的脸", "unicode": "U+1F92B" },
    { "alt": "🤔", "shortcode": "思考的脸", "unicode": "U+1F914" },
    { "alt": "🤐", "shortcode": "拉链嘴的脸", "unicode":"U+1F910"},
    {"alt":"🤨","shortcode":"抬起眉毛的脸","unicode":"U+1F928"},{"alt":"😐","shortcode":"中性的脸","unicode":"U+1F610"},{"alt":"😑","shortcode":"无表情的脸","unicode":"U+1F611"},{"alt":"😶","shortcode":"无口的脸","unicode":"U+1F636"},{"alt":"😏","shortcode":"傻笑的脸","unicode":"U+1F60F"},{"alt":"😒","shortcode":"不高兴的脸","unicode":"U+1F612"},{"alt":"🙄","shortcode":"翻白眼的脸","unicode":"U+1F644"},{"alt":"😬","shortcode":"扮鬼脸的脸","unicode":"U+1F62C"},,{"alt":"🤥","shortcode":"⊛_摇头的脸","unicode":"U+1F925"},{"alt":"😌","shortcode":"宽慰的脸","unicode":"U+1F60C"},{"alt":"😔","shortcode":"沉思的脸","unicode":"U+1F614"},{"alt":"😪","shortcode":"困倦的脸","unicode":"U+1F62A"},{"alt":"🤤","shortcode":"流口水的脸","unicode":"U+1F924"},{"alt":"😴","shortcode":"睡觉的脸","unicode":"U+1F634"},{"alt":"😷","shortcode":"戴口罩的脸","unicode":"U+1F637"},{"alt":"🤒","shortcode":"带体温计的脸","unicode":"U+1F912"},{"alt":"🤕","shortcode":"戴头绷的脸","unicode":"U+1F915"},{"alt":"🤢","shortcode":"恶心的脸","unicode":"U+1F922"},{"alt":"🤮","shortcode":"呕吐的脸","unicode":"U+1F92E"},{"alt":"🤧","shortcode":"打喷嚏的脸","unicode":"U+1F927"},{"alt":"🥵","shortcode":"热的脸","unicode":"U+1F975"},{"alt":"🥶","shortcode":"冷的脸","unicode":"U+1F976"},{"alt":"🥴","shortcode":"晕眩的脸","unicode":"U+1F974"},{"alt":"😵","shortcode":"被划掉眼睛的脸","unicode":"U+1F635"},,{"alt":"🤯","shortcode":"爆炸的脑袋","unicode":"U+1F92F"},{"alt":"🤠","shortcode":"牛仔帽脸","unicode":"U+1F920"},{"alt":"🥳","shortcode":"庆祝的脸","unicode":"U+1F973"},{"alt":"😎","shortcode":"戴太阳镜的笑脸","unicode":"U+1F60E"},{"alt":"🤓","shortcode":"书呆子脸","unicode":"U+1F913"},{"alt":"🧐","shortcode":"用单片眼镜的脸","unicode":"U+1F9D0"},{"alt":"😕","shortcode":"困惑的脸","unicode":"U+1F615"},{"alt":"😟","shortcode":"担心的脸","unicode":"U+1F61F"},{"alt":"🙁","shortcode":"微微皱眉的脸","unicode":"U+1F641"},{"alt":"😮","shortcode":"张开嘴的脸","unicode":"U+1F62E"},{"alt":"😯","shortcode":"惊讶的脸","unicode":"U+1F62F"},{"alt":"😲","shortcode":"吃惊的脸","unicode":"U+1F632"},{"alt":"😳","shortcode":"害羞的脸","unicode":"U+1F633"},{"alt":"🥺","shortcode":"乞求的脸","unicode":"U+1F97A"},{"alt":"😦","shortcode":"张大嘴的脸","unicode":"U+1F626"},{"alt":"😧","shortcode":"痛苦的脸","unicode":"U+1F627"},{"alt":"😨","shortcode":"害怕的脸","unicode":"U+1F628"},{"alt":"😰","shortcode":"焦虑的脸","unicode":"U+1F630"},{"alt":"😥","shortcode":"悲伤但如释重负的脸","unicode":"U+1F625"},{"alt":"😢","shortcode":"哭泣的脸","unicode":"U+1F622"},{"alt":"😭","shortcode":"大声哭泣的脸","unicode":"U+1F62D"},{"alt":"😱","shortcode":"尖叫的脸","unicode":"U+1F631"},{"alt":"😖","shortcode":"困惑的脸","unicode":"U+1F616"},{"alt":"😣","shortcode":"坚持的脸","unicode":"U+1F623"},{"alt":"😞","shortcode":"失望的脸","unicode":"U+1F61E"},{"alt":"😓","shortcode":"失望的脸","unicode":"U+1F613"},{"alt":"😩","shortcode":"疲倦的脸","unicode":"U+1F629"},{"alt":"😫","shortcode":"累的脸","unicode":"U+1F62B"},{"alt":"😤","shortcode":"鼻子冒烟的脸","unicode":"U+1F624"},{"alt":"😡","shortcode":"愤怒的脸","unicode":"U+1F621"},{"alt":"😠","shortcode":"生气的脸","unicode":"U+1F620"},{"alt":"🤬","shortcode":"嘴上有符号的脸","unicode":"U+1F92C"},{"alt":"😈","shortcode":"带角笑脸","unicode":"U+1F608"},
    {
        "alt": "😑",
        "shortcode": "面无表情",
        "unicode": "U+1F611"
    }, {
        "alt": "😶",
        "shortcode": "无口脸",
        "unicode": "U+1F636"
    }, {
        "alt": "😏",
        "shortcode": "傻笑脸",
        "unicode": "U+1F60F"
    }, {
        "alt": "😒",
        "shortcode": "不高兴脸",
        "unicode": "U+1F612"
    }, {
        "alt": "🙄",
        "shortcode": "翻白眼脸",
        "unicode": "U+1F644"
    }, {
        "alt": "😬",
        "shortcode": "尴尬脸",
        "unicode": "U+1F62C"
    }, {
        "alt": "🤥",
        "shortcode": "撒谎脸",
        "unicode": "U+1F925"
    }, {
        "alt": "😌",
        "shortcode": "宽慰脸",
        "unicode": "U+1F60C"
    }, {
        "alt": "😔",
        "shortcode": "沉思脸",
        "unicode": "U+1F614"
    }, {
        "alt": "😪",
        "shortcode": "困脸",
        "unicode": "U+1F62A"
    }, {
        "alt": "🤤",
        "shortcode": "流口水脸",
        "unicode": "U+1F924"
    }, {
        "alt": "😴",
        "shortcode": "睡脸",
        "unicode": "U+1F634"
    }, {
        "alt": "😷",
        "shortcode": "戴口罩脸",
        "unicode": "U+1F637"
    }, {
        "alt": "🤒",
        "shortcode": "带体温计脸",
        "unicode": "U+1F912"
    }, {
        "alt": "🤕",
        "shortcode": "戴头巾脸",
        "unicode": "U+1F915"
    }, {
        "alt": "🤢",
        "shortcode": "作呕脸",
        "unicode": "U+1F922"
    }, {
        "alt": "🤮",
        "shortcode": "呕吐脸",
        "unicode": "U+1F92E"
    }, {
        "alt": "🤧",
        "shortcode": "打喷嚏脸",
        "unicode": "U+1F927"
    }, {
        "alt": "🥵",
        "shortcode": "热脸",
        "unicode": "U+1F975"
    }, {
        "alt": "🥶",
        "shortcode": "冷脸",
        "unicode": "U+1F976"
    }, {
        "alt": "🥴",
        "shortcode": "晕眩脸",
        "unicode": "U+1F974"
    }, {
        "alt": "😵",
        "shortcode": "眼睛被划掉脸",
        "unicode": "U+1F635"
    }, {
        "alt": "🤯",
        "shortcode": "爆炸头",
        "unicode": "U+1F92F"
    }, {
        "alt": "🤠",
        "shortcode": "牛仔帽脸",
        "unicode": "U+1F920"
    }, {
        "alt": "🥳",
        "shortcode": "庆祝脸",
        "unicode": "U+1F973"
    }, {
        "alt": "😎",
        "shortcode": "戴太阳镜脸",
        "unicode": "U+1F60E"
    }, {
        "alt": "🤓",
        "shortcode": "书呆子脸",
        "unicode": "U+1F913"
    }, {
        "alt": "🧐",
        "shortcode": "戴单片眼镜脸",
        "unicode": "U+1F9D0"
    }, {
        "alt": "😕",
        "shortcode": "困惑脸",
        "unicode": "U+1F615"
    }, {
        "alt": "😟",
        "shortcode": "担忧脸",
        "unicode": "U+1F61F"
    }, {
        "alt": "🙁",
        "shortcode": "微微皱眉脸",
        "unicode": "U+1F641"
    }, {
        "alt": "😮",
        "shortcode": "张嘴脸",
        "unicode": "U+1F62E"
    }, {
        "alt": "😯",
        "shortcode": "吃惊脸",
        "unicode": "U+1F62F"
    }, {
        "alt": "😲",
        "shortcode": "惊讶脸",
        "unicode": "U+1F632"
    }, {
        "alt": "😳",
        "shortcode": "脸红脸",
        "unicode": "U+1F633"
    }, {
        "alt": "🥺",
        "shortcode": "乞求脸",
        "unicode": "U+1F97A"
    }, {
        "alt": "😦",
        "shortcode": "震惊脸",
        "unicode": "U+1F626"
    }, {
        "alt": "😧",
        "shortcode": "痛苦脸",
        "unicode": "U+1F627"
    }, {
        "alt": "😨",
        "shortcode": "恐惧脸",
        "unicode": "U+1F628"
    }, {
        "alt": "😰",
        "shortcode": "焦虑脸",
        "unicode": "U+1F630"
    }, {
        "alt": "😥",
        "shortcode": "悲伤而宽慰脸",
        "unicode": "U+1F625"
    }, {
        "alt": "😢",
        "shortcode": "哭脸",
        "unicode": "U+1F622"
    }, {
        "alt": "😭",
        "shortcode": "大声哭脸",
        "unicode": "U+1F62D"
    }, {
        "alt": "😱",
        "shortcode": "尖叫恐惧脸",
        "unicode": "U+1F631"
    }, {
        "alt": "😖",
        "shortcode": "困惑脸",
        "unicode": "U+1F616"
    }, {
        "alt": "😣",
        "shortcode": "坚持脸",
        "unicode": "U+1F623"
    }, {
        "alt": "😞",
        "shortcode": "失望脸",
        "unicode": "U+1F61E"
    }, {
        "alt": "😓",
        "shortcode": "沮丧脸",
        "unicode": "U+1F613"
    }, {
        "alt": "😩",
        "shortcode": "疲倦脸",
        "unicode": "U+1F629"
    }, {
        "alt": "😫",
        "shortcode": "累脸",
        "unicode": "U+1F62B"
    }, {
        "alt": "😤",
        "shortcode": "鼻子冒火脸",
        "unicode": "U+1F624"
    }, {
        "alt": "😡",
        "shortcode": "愤怒脸",
        "unicode": "U+1F621"
    }, {
        "alt": "😠",
        "shortcode": "生气脸",
        "unicode": "U+1F620"
    }, {
        "alt": "🤬",
        "shortcode": "嘴上有标记脸",
        "unicode": "U+1F92C"
    }, {
        "alt": "😈",
        "shortcode": "笑脸带角",
        "unicode": "U+1F608"
    }, {
        "alt": "👿",
        "shortcode": "生气脸带角",
        "unicode": "U+1F47F"
    }, {
        "alt": "💀",
        "shortcode": "骷髅",
        "unicode": "U+1F480"
    }, {
        "alt": "☠",
        "shortcode": "骷髅与交叉骨头",
        "unicode": "U+2620"
    }, {
        "alt": "💩",
        "shortcode": "一堆粪",
        "unicode": "U+1F4A9"
    }, {
        "alt": "🤡",
        "shortcode": "小丑脸",
        "unicode": "U+1F921"
    }, {
        "alt": "👹",
        "shortcode": "恶魔",
        "unicode": "U+1F479"
    }, {
        "alt": "👺",
        "shortcode": "妖怪",
        "unicode": "U+1F47A"
    }, {
        "alt": "👻",
        "shortcode": "幽灵",
        "unicode": "U+1F47B"
    }, {
        "alt": "👽",
        "shortcode": "外星人",
        "unicode": "U+1F47D"
    }, {
        "alt": "👾",
        "shortcode": "外星怪物",
        "unicode": "U+1F47E"
    }, {
        "alt": "🤖",
        "shortcode": "机器人",
        "unicode": "U+1F916"
    }, {
        "alt": "😺",
        "shortcode": "笑猫",
        "unicode": "U+1F63A"
    },
    {"alt":"😸","shortcode":"笑眯眯的猫","unicode":"U+1F638"},
    {"alt":"😹","shortcode":"猫哭笑不得","unicode":"U+1F639"},
    {"alt":"😻","shortcode":"眯眯眼的猫咪","unicode":"U+1F63B"},
    {"alt":"😼","shortcode":"嘲笑的猫","unicode":"U+1F63C"},
    {"alt":"😽","shortcode":"亲吻的猫","unicode":"U+1F63D"},
    {"alt":"🙀","shortcode":"困惑的猫","unicode":"U+1F640"},
    {"alt":"😿","shortcode":"哭泣的猫","unicode":"U+1F63F"},
    {"alt":"😾","shortcode":"撅嘴的猫","unicode":"U+1F63E"},
    {"alt":"🙈","shortcode":"捂住眼睛的猴子","unicode":"U+1F648"},
    {"alt":"🙉","shortcode":"捂住耳朵的猴子","unicode":"U+1F649"},
    {"alt":"🙊","shortcode":"捂住嘴巴的猴子","unicode":"U+1F64A"},
    {"alt":"💌","shortcode":"情书","unicode":"U+1F48C"},
    {"alt":"💘","shortcode":"被箭头穿透的心","unicode":"U+1F498"},
    {"alt":"💝","shortcode":"系有丝带的心","unicode":"U+1F49D"},
    {"alt":"💖","shortcode":"闪闪发光的心","unicode":"U+1F496"},
    {"alt":"💗","shortcode":"成长中的心","unicode":"U+1F497"},
    {"alt":"💓","shortcode":"跳动的心","unicode":"U+1F493"},
    {"alt":"💞","shortcode":"旋转的心","unicode":"U+1F49E"},
    {"alt":"💕","shortcode":"双心","unicode":"U+1F495"},
    {"alt":"💟","shortcode":"心形装饰","unicode":"U+1F49F"},
    {"alt":"❣","shortcode":"颤抖的心","unicode":"U+2763"},
    {"alt":"💔","shortcode":"破碎的心","unicode":"U+1F494"},
    {"alt":"🧡","shortcode":":橙色心形:","unicode":"U+1F9E1"},
    {"alt":"💛","shortcode":":黄色心形:","unicode":"U+1F49B"},
    {"alt":"💚","shortcode":":绿色心形:","unicode":"U+1F49A"},
    {"alt":"💙","shortcode":":蓝色心形:","unicode":"U+1F499"},
    {"alt":"💜","shortcode":":紫色心形:","unicode":"U+1F49C"},
    {"alt":"🖤","shortcode":":⊛_灰色心形:","unicode":"U+1F5A4"},
    {"alt":"💋","shortcode":":吻:","unicode":"U+1F48B"},
    {"alt":"💯","shortcode":":百分符号:","unicode":"U+1F4AF"},
    {"alt":"💢","shortcode":":愤怒符号:","unicode":"U+1F4A2"},
    {"alt":"💥","shortcode":":碰撞:","unicode":"U+1F4A5"},
    {"alt":"💫","shortcode":":晕:","unicode":"U+1F4AB"},
    {"alt":"💦","shortcode":":汗滴:","unicode":"U+1F4A6"},
    {"alt":"💨","shortcode":":疾驰:","unicode":"U+1F4A8"},
    {"alt":"🕳","shortcode":":洞:","unicode":"U+1F573"},
    {"alt":"💬","shortcode":":对话气泡:","unicode":"U+1F4AC"},
    {"alt":"🗨","shortcode":":左侧气泡:","unicode":"U+1F5E8"},
    {"alt":"🗯","shortcode":":右侧愤怒气泡:","unicode":"U+1F5EF"},
    {"alt":"💭","shortcode":":思考气泡:","unicode":"U+1F4AD"},
    {"alt":"💤","shortcode":":睡:","unicode":"U+1F4A4"},
    {"alt":"👋","shortcode":":挥手:","unicode":"U+1F44B"},
    {"alt":"🤚","shortcode":":举起背手:","unicode":"U+1F91A"},
    {"alt":"🖐","shortcode":":手指张开:","unicode":"U+1F590"},
    {"alt":"✋","shortcode":":举手:","unicode":"U+270B"},
    {"alt":"🖖","shortcode":":火星人举手礼:","unicode":"U+1F596"},
    {"alt":"👌","shortcode":":OK手势:","unicode":"U+1F44C"},
    {"alt":"✌","shortcode":":胜利手势:","unicode":"U+270C"},
    {"alt":"🤞","shortcode":":交叉指:","unicode":"U+1F91E"},
    {"alt":"🤟","shortcode":":爱你手势:","unicode":"U+1F91F"},
    {"alt":"🤘","shortcode":":摇滚手势:","unicode":"U+1F918"},
    {"alt":"🤙","shortcode":":打电话手势:","unicode":"U+1F919"},
    {"alt":"👈","shortcode":":反手指向左:","unicode":"U+1F448"},
    {"alt":"👉","shortcode":":反手指向右:","unicode":"U+1F449"},
    {"alt":"👆","shortcode":":反手指向上:","unicode":"U+1F446"},
    {"alt":"🖕","shortcode":":中指:","unicode":"U+1F595"},
    {"alt":"👇","shortcode":"向下指","unicode":"U+1F447"},
    {"alt":"☝","shortcode":"向上指","unicode":"U+261D"},
    {"alt":"👍","shortcode":"大拇指向上","unicode":"U+1F44D"},
    {"alt":"👎","shortcode":"大拇指向下","unicode":"U+1F44E"},
    {"alt":"✊","shortcode":"举起拳头","unicode":"U+270A"},
    {"alt":"👊","shortcode":"向前出拳","unicode":"U+1F44A"},
    {"alt":"🤛","shortcode":"向左拳击","unicode":"U+1F91B"},
    {"alt":"🤜","shortcode":"向右拳击","unicode":"U+1F91C"},
    {"alt":"👏","shortcode":"鼓掌","unicode":"U+1F44F"},
    {"alt":"🙌","shortcode":"举双手","unicode":"U+1F64C"},
    {"alt":"👐","shortcode":"张开双手","unicode":"U+1F450"},
    {"alt":"🤲","shortcode":"双手合十","unicode":"U+1F932"},
    {"alt":"🤝","shortcode":"握手","unicode":"U+1F91D"},
    {"alt":"🙏","shortcode":"合十","unicode":"U+1F64F"},
    {"alt":"✍","shortcode":"写字手","unicode":"U+270D"},
    {"alt":"💅","shortcode":"指甲油","unicode":"U+1F485"},
    {"alt":"🤳","shortcode":"自拍","unicode":"U+1F933"},
    {"alt":"💪","shortcode":"屈臂肌肉","unicode":"U+1F4AA"},
    {"alt":"🦵","shortcode":"腿","unicode":"U+1F9B5"},
    {"alt":"🦶","shortcode":"脚","unicode":"U+1F9B6"},
    {"alt":"👂","shortcode":"耳朵","unicode":"U+1F442"},
    {"alt":"👃","shortcode":"鼻子","unicode":"U+1F443"},
    {"alt":"🧠","shortcode":"大脑","unicode":"U+1F9E0"},
    {"alt":"🦷","shortcode":"牙齿","unicode":"U+1F9B7"},
    {"alt":"🦴","shortcode":"骨头","unicode":"U+1F9B4"},
    {"alt":"👀","shortcode":"眼睛","unicode":"U+1F440"},
    {"alt":"👁","shortcode":"眼","unicode":"U+1F441"},
    {"alt":"👅","shortcode":"舌头","unicode":"U+1F445"},
    {"alt":"👄","shortcode":"嘴巴","unicode":"U+1F444"},
    {"alt":"👶","shortcode":"婴儿","unicode":"U+1F476"},
    {"alt":"🧒","shortcode":"儿童","unicode":"U+1F9D2"},
    {"alt":"👦","shortcode":"男孩","unicode":"U+1F466"},
    {"alt":"👧","shortcode":"女孩","unicode":"U+1F467"},
    {"alt":"🧑","shortcode":"成年人","unicode":"U+1F9D1"},
    {"alt":"👱","shortcode":"金发人","unicode":"U+1F471"},
    {"alt":"👨","shortcode":"男人","unicode":"U+1F468"},
    {"alt":"🧔","shortcode":"有胡子的人","unicode":"U+1F9D4"},
    {"alt":"🧓","shortcode":"老年人","unicode":"U+1F9D3"},
    {"alt":"👴","shortcode":"老人","unicode":"U+1F474"},
    {"alt":"👵","shortcode":"老婆婆","unicode":"U+1F475"},
    {"alt":"🙍","shortcode":"皱眉的人","unicode":"U+1F64D"},
    {"alt":"🙎","shortcode":"撅嘴的人","unicode":"U+1F64E"},
    {"alt":"🙅","shortcode":"摆手拒绝的人","unicode":"U+1F645"},
    {"alt":"🙆","shortcode":"摆手同意的人","unicode":"U+1F646"},
    {"alt":"💁","shortcode":"人翘手","unicode":"U+1F481"},
    {"alt":"🙋","shortcode":"举手的人","unicode":"U+1F64B"},
    {"alt":"🤦","shortcode":"捂脸的人","unicode":"U+1F926"},
    {"alt":"🤷","shortcode":"耸肩的人","unicode":"U+1F937"},
    {"alt":"👮","shortcode":"警察","unicode":"U+1F46E"},
    {"alt":"🕵","shortcode":"侦探","unicode":"U+1F575"},
    {"alt":"💂","shortcode":"卫兵","unicode":"U+1F482"},
    {"alt":"🤴","shortcode":"王子","unicode":"U+1F934"},
    {"alt":"👸","shortcode":"公主","unicode":"U+1F478"},
    {"alt":"👳","shortcode":"戴头巾的人","unicode":"U+1F473"},
    {"alt":"👲","shortcode":":人戴礼帽:","unicode":"U+1F472"},
    {"alt":"🧕","shortcode":":戴头巾的女人:","unicode":"U+1F9D5"},
    {"alt":"🤵","shortcode":":穿燕尾服的人:","unicode":"U+1F935"},
    {"alt":"👰","shortcode":":戴面纱的人:","unicode":"U+1F470"},
    {"alt":"🤰","shortcode":":怀孕的女人:","unicode":"U+1F930"},
    {"alt":"🤱","shortcode":":哺乳:","unicode":"U+1F931"},
    {"alt":"👼","shortcode":":天使宝宝:","unicode":"U+1F47C"},
    {"alt":"🎅","shortcode":":圣诞老人:","unicode":"U+1F385"},
    {"alt":"🤶","shortcode":":圣诞老人夫人:","unicode":"U+1F936"},
    {"alt":"🦸","shortcode":":超级英雄:","unicode":"U+1F9B8"},
    {"alt":"🦹","shortcode":":超级反派:","unicode":"U+1F9B9"},
    {"alt":"🧙","shortcode":":法师:","unicode":"U+1F9D9"},
    {"alt":"🧚","shortcode":":仙女:","unicode":"U+1F9DA"},
    {"alt":"🧛","shortcode":":吸血鬼:","unicode":"U+1F9DB"},
    {"alt":"🧜","shortcode":":人鱼:","unicode":"U+1F9DC"},
    {"alt":"🧝","shortcode":":精灵:","unicode":"U+1F9DD"},
    {"alt":"🧞","shortcode":":精灵:","unicode":"U+1F9DE"},
    {"alt":"🧟","shortcode":":僵尸:","unicode":"U+1F9DF"},
    {"alt":"💆","shortcode":":接受按摩的人:","unicode":"U+1F486"},
    {"alt":"💇","shortcode":":剪发的人:","unicode":"U+1F487"},
    {"alt":"🚶","shortcode":":步行者:","unicode":"U+1F6B6"},
    {"alt":"🏃","shortcode":":跑步的人:","unicode":"U+1F3C3"},
    {"alt":"💃","shortcode":":跳舞的女人:","unicode":"U+1F483"},
    {"alt":"🕺","shortcode":":跳舞的男子:","unicode":"U+1F57A"},
    {"alt":"🕴","shortcode":":悬浮的穿西装的人:","unicode":"U+1F574"},
    {"alt":"👯","shortcode":":戴兔耳朵的人:","unicode":"U+1F46F"},
    {"alt":"🧖","shortcode":":在蒸汽室的人:","unicode":"U+1F9D6"},
    {"alt":"🧗","shortcode":":攀岩的人:","unicode":"U+1F9D7"},
    {"alt":"🤺","shortcode":":击剑的人:","unicode":"U+1F93A"},
    {"alt":"🏇","shortcode":":赛马的人:","unicode":"U+1F3C7"},
    {"alt":"⛷","shortcode":":滑雪者:","unicode":"U+26F7"},
    {"alt":"🏂","shortcode":":滑雪板者:","unicode":"U+1F3C2"},
    {"alt":"🏌","shortcode":":高尔夫球手:","unicode":"U+1F3CC"},
    {"alt":"🏄","shortcode":":冲浪者:","unicode":"U+1F3C4"},
    {"alt":"🚣","shortcode":":划船的人:","unicode":"U+1F6A3"},
    {"alt":"🏊","shortcode":":游泳的人:","unicode":"U+1F3CA"},
    {"alt":"⛹","shortcode":":弹跳球的人:","unicode":"U+26F9"},
    {"alt":"🏋","shortcode":":举重的人:","unicode":"U+1F3CB"},
    {"alt":"🚴","shortcode":":骑自行车的人:","unicode":"U+1F6B4"},
    {"alt":"🚵","shortcode":":骑山地自行车的人:","unicode":"U+1F6B5"},
    {"alt":"🤸","shortcode":":做手腕翻的人:","unicode":"U+1F938"},
    {"alt":"🤼","shortcode":":摔跤的人:","unicode":"U+1F93C"},
    {"alt":"🤽","shortcode":":玩水球的人:","unicode":"U+1F93D"},
    {"alt":"🤾","shortcode":":打手球的人:","unicode":"U+1F93E"},
    {"alt":"🤹","shortcode":":杂技的人:","unicode":"U+1F939"},
    {"alt":"🧘","shortcode":":盘腿坐着的人:","unicode":"U+1F9D8"},
    {"alt":"🛀","shortcode":":洗澡的人:","unicode":"U+1F6C0"},
    {"alt":"🛌","shortcode":":躺在床上的人:","unicode":"U+1F6CC"},
    {"alt":"👭","shortcode":":两个女人牵手:","unicode":"U+1F46D"},
    {"alt":"👫","shortcode":":男女手牵手:","unicode":"U+1F46B"},
    {"alt":"👬","shortcode":":两个男人牵手:","unicode":"U+1F46C"},
    {"alt":"💏","shortcode":":接吻:","unicode":"U+1F48F"},
    {"alt":"💑","shortcode":":带心形的情侣:","unicode":"U+1F491"},
    {"alt":"👪","shortcode":":家庭:","unicode":"U+1F46A"},
    {"alt":"🗣","shortcode":":说话的头:","unicode":"U+1F5E3"},
    {"alt":"👤","shortcode":":剪影:","unicode":"U+1F464"},
    {"alt":"👥","shortcode":":剪影:","unicode":"U+1F465"},
    {"alt":"👣","shortcode":":脚印:","unicode":"U+1F463"},
    {"alt":"🦰","shortcode":":红发:","unicode":"U+1F9B0"},
    {"alt":"🦱","shortcode":":卷发:","unicode":"U+1F9B1"},
    {"alt":"🦳","shortcode":":白发:","unicode":"U+1F9B3"},
    {"alt":"🦲","shortcode":":秃头:","unicode":"U+1F9B2"}
]
export default emoji