layui.define(['jquery', 'form'], function(exports) {
	var $ = layui.jquery,
		form = layui.form;
	var mojia = {
		init: function(elem) {
			$(elem).hide();
			var icons = '';
			var data = this.data();
			for (var i = 0; i < data.length; i++) {
				icons += '<dd class="mo-font-item"><i class="mo-icon-font ' + data[i] + '"></i></dd>';
			}
			$(elem).each(function() {
				var item = $(this);
				var font = item.val() ? item.val() : 'mo-icon-shibai';
				item.after('<div class="mo-font-info layui-unselect layui-form-select"><div class="mo-font-boxs"><span class="mo-font-icon layui-unselect"><i class="mo-icon-font ' + font + '"></i></span><i class="layui-edge"></i></div><dl class="mo-font-anim layui-anim layui-anim-upbit">' + icons + '</dl>');
			});
			this.select();
			this.check();
		},
		data: function() {
			var arrs = [
				'mo-icon-xunlei',
				'mo-icon-zixun',
				'mo-icon-baidu',
				'mo-icon-play',
				'mo-icon-weiyun',
				'mo-icon-shangyige',
				'mo-icon-bilibili',
				'mo-icon-qiyi',
				'mo-icon-letv',
				'mo-icon-mgtv',
				'mo-icon-sohu',
				'mo-icon-kankan',
				'mo-icon-youku',
				'mo-icon-pptv',
				'mo-icon-qq',
				'mo-icon-paixu',
				'mo-icon-danmu-yiguanbi',
				'mo-icon-danmu',
				'mo-icon-VIP',
				'mo-icon-bianjigongju',
				'mo-icon-biansu',
				'mo-icon-bianyin',
				'mo-icon-caogaoxiang',
				'mo-icon-douyintexiao',
				'mo-icon-gaoqing',
				'mo-icon-guanyuwomen',
				'mo-icon-jiesuo',
				'mo-icon-lvjing',
				'mo-icon-peile',
				'mo-icon-quchushuiyin',
				'mo-icon-sheying',
				'mo-icon-shipin1',
				'mo-icon-shipinbiangeng',
				'mo-icon-shipindaofang',
				'mo-icon-shipinfenge',
				'mo-icon-shipinjianji',
				'mo-icon-shipinyasuo',
				'mo-icon-texiao',
				'mo-icon-texiaoshipin',
				'mo-icon-tiaojiecanshu',
				'mo-icon-tiezhi',
				'mo-icon-wenti',
				'mo-icon-wuguanggao',
				'mo-icon-xiangce',
				'mo-icon-yinlexiangce',
				'mo-icon-yonghu1',
				'mo-icon-zimu',
				'mo-icon-down',
				'mo-icon-chrome-fill',
				'mo-icon-edge-fill',
				'mo-icon-firefox-fill',
				'mo-icon-opera-fill',
				'mo-icon-qq-fill',
				'mo-icon-qq-line',
				'mo-icon-wechat-pay-fill',
				'mo-icon-wechat-fill',
				'mo-icon-weibo-line',
				'mo-icon-wechat-line',
				'mo-icon-youtube-fill',
				'mo-icon-weibo-fill',
				'mo-icon-youtube-line',
				'mo-icon-wechat-pay-line',
				'mo-icon-aixin',
				'mo-icon-bianji',
				'mo-icon-Dyanjing',
				'mo-icon-caidan',
				'mo-icon-anquan',
				'mo-icon-bangzhu',
				'mo-icon-buganxingqu',
				'mo-icon-bofangjilu',
				'mo-icon-chuangzuo',
				'mo-icon-chenggong',
				'mo-icon-ceshi',
				'mo-icon-dianhua',
				'mo-icon-dianzan',
				'mo-icon-dingwei',
				'mo-icon-diantong_guan',
				'mo-icon-dianying',
				'mo-icon-ditu',
				'mo-icon-diantong_kai',
				'mo-icon-dianyingpiao',
				'mo-icon-dingdan',
				'mo-icon-gengduo',
				'mo-icon-fanbei',
				'mo-icon-faxian',
				'mo-icon-ertongpiao',
				'mo-icon-gongyi',
				'mo-icon-hongbao',
				'mo-icon-fuzhi',
				'mo-icon-fenxiang',
				'mo-icon-huatifuhao',
				'mo-icon-huiyuan',
				'mo-icon-jiju',
				'mo-icon-jianshao',
				'mo-icon-kabao',
				'mo-icon-huati',
				'mo-icon-guanzhu',
				'mo-icon-maiyizengyi',
				'mo-icon-mima',
				'mo-icon-nan',
				'mo-icon-nv',
				'mo-icon-paihangbang',
				'mo-icon-lipinka',
				'mo-icon-pengyouquan',
				'mo-icon-mingxinghuodong',
				'mo-icon-qupiao',
				'mo-icon-saoyisao',
				'mo-icon-rili',
				'mo-icon-pinglun',
				'mo-icon-qinghuiyuan',
				'mo-icon-riqian',
				'mo-icon-shandian',
				'mo-icon-shaixuan',
				'mo-icon-shangquan',
				'mo-icon-shanchu',
				'mo-icon-shangchuan',
				'mo-icon-shequ',
				'mo-icon-shengyinguanbi',
				'mo-icon-shibai',
				'mo-icon-shijian',
				'mo-icon-shengyin',
				'mo-icon-shoucang',
				'mo-icon-shouji',
				'mo-icon-shouye',
				'mo-icon-shuju',
				'mo-icon-shuaxin',
				'mo-icon-sousuo',
				'mo-icon-tanhao',
				'mo-icon-taolunqu',
				'mo-icon-tianjiayouhuiquan',
				'mo-icon-tishi',
				'mo-icon-tupian',
				'mo-icon-tuipiao',
				'mo-icon-weixuanzhong',
				'mo-icon-weibo',
				'mo-icon-wenjuan',
				'mo-icon-wode',
				'mo-icon-weixin',
				'mo-icon-wodeguanzhu',
				'mo-icon-xiami',
				'mo-icon-xiangkan',
				'mo-icon-xiangji',
				'mo-icon-xiaoxi',
				'mo-icon-xiazai',
				'mo-icon-xiaojuchang',
				'mo-icon-xiaoshi',
				'mo-icon-xiaoxizhongxin',
				'mo-icon-yinhangka',
				'mo-icon-yanjing',
				'mo-icon-yingchengka',
				'mo-icon-yixiangkan',
				'mo-icon-yingpingmoban',
				'mo-icon-yanchu',
				'mo-icon-xiaomi',
				'mo-icon-yingyuan',
				'mo-icon-zengjia',
				'mo-icon-yuyin',
				'mo-icon-youhuiquan',
				'mo-icon-WIFI',
				'mo-icon-zhibo',
				'mo-icon-youkuhuiyuan',
				'mo-icon-yulebao',
				'mo-icon-zhiwen',
				'mo-icon-aixin1',
				'mo-icon-chenggong1',
				'mo-icon-dianzan1',
				'mo-icon-dianhua1',
				'mo-icon-bangzhu1',
				'mo-icon-dianyingpiao1',
				'mo-icon-faxian1',
				'mo-icon-dingwei1',
				'mo-icon-gonggao',
				'mo-icon-huati1',
				'mo-icon-jianshao1',
				'mo-icon-huiyuan1',
				'mo-icon-pinglun1',
				'mo-icon-shequ1',
				'mo-icon-shibai1',
				'mo-icon-shijian1',
				'mo-icon-shandian1',
				'mo-icon-wode1',
				'mo-icon-shouye1',
				'mo-icon-shouji1',
				'mo-icon-tanhao1',
				'mo-icon-shoucang1',
				'mo-icon-shuju1',
				'mo-icon-wenda',
				'mo-icon-yanjing1',
				'mo-icon-yingchengka1',
				'mo-icon-xiangji1',
				'mo-icon-yingyuan1',
				'mo-icon-yinhangyouhui',
				'mo-icon-xiaoshi1',
				'mo-icon-yanchu1',
				'mo-icon-zengjia1',
				'mo-icon-dianying1',
				'mo-icon-youhuiquan1',
				'mo-icon-remen',
				'mo-icon-chuangzuo1',
				'mo-icon-zhibo1',
				'mo-icon-tianjia',
				'mo-icon-jianshao2',
				'mo-icon-zhengque',
				'mo-icon-cuowu',
				'mo-icon-jinggao',
				'mo-icon-kulian',
				'mo-icon-putong',
				'mo-icon-xiaolian',
				'mo-icon-jilu',
				'mo-icon-shezhi1',
				'mo-icon-xiayiye',
				'mo-icon-shangyiye',
				'mo-icon-xiangxia',
				'mo-icon-xiangshang',
				'mo-icon-jiahao',
				'mo-icon-guanbi',
				'mo-icon-gouxuan',
				'mo-icon-xiayige',
			];
			return arrs;
		},
		select: function() {
			$(document).on('click', '.mo-font-boxs', function(data) {
				var top = $(this).parent().offset().top + $(this).parent().outerHeight() + 5 - $(window).scrollTop(),
					dlHeight = $(this).parent().find('dl').outerHeight();
				if ($(this).parent().hasClass('layui-form-selected')) {
					$('.layui-form-select').removeClass('layui-form-selected');
				} else {
					$('.layui-form-select').removeClass('layui-form-selected');
					$(this).parent().addClass('layui-form-selected');
					if (top + dlHeight > $(window).height() && top >= dlHeight) {
						$(this).parent().addClass('layui-form-selectup');
					}
				}
				data.stopPropagation();
			});
		},
		check: function() {
			$(document).on('click', '.mo-font-item', function(data) {
				var clsArr = $(data.currentTarget).find('.mo-icon-font').attr('class').split(/[\s\n]/);
				$(this).parent().prev().find('.mo-icon-font').attr('class', clsArr.join(' '));
				var font = clsArr[1] == 'mo-icon-shibai' ? '' : clsArr[1];
				$(this).parents('.mo-font-info').prev().attr('value', font);
			});
		}
	};
	exports('iconfonts', mojia);
});
